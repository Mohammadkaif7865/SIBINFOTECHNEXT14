#!/usr/bin/env node
/**
 * Pushes revamped articles from content/blog-revamp-2026/ to the live blog.
 *
 * Safety model:
 *   1. Refuses to write any slug without a backup in backups/blog-api-<date>/.
 *   2. Sends the COMPLETE existing record with only the four content fields
 *      replaced, so nothing can be nulled by omission.
 *   3. Re-downloads and re-uploads the post's current image with every write,
 *      because the API blanks the image column otherwise (see scripts/lib).
 *   4. Re-reads after each write and diffs. Any field changing outside the
 *      expected set aborts the run.
 *   5. --dry (default) changes nothing.
 *
 * Usage:
 *   node scripts/push-blog-revamp.mjs                       # dry run, all
 *   node scripts/push-blog-revamp.mjs --live --only <slug>
 *   node scripts/push-blog-revamp.mjs --live                # all
 *   node scripts/push-blog-revamp.mjs --live --restore --only <slug>
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { readBlog, fetchImage, writeBlog, diffFields, wordCount } from "./lib/blog-api.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = join(ROOT, "content", "blog-revamp-2026");
const BACKUP_DIR = join(ROOT, "backups", "blog-api-2026-09-04");
const TMP = join(process.env.TEMP || "/tmp", "sib-blog-push");

const argv = process.argv.slice(2);
const LIVE = argv.includes("--live");
const RESTORE = argv.includes("--restore");
const ONLY = argv.includes("--only") ? argv[argv.indexOf("--only") + 1] : null;

const MANAGED = ["description", "meta_title", "meta_description", "meta_keywords"];

/**
 * Characters confirmed to survive a round trip through the API.
 *
 * The endpoint returns a generic "Error updating blog" when the body contains
 * certain non-ASCII characters — the rupee sign, minus sign and division sign
 * all triggered it, while em dash, en dash and multiplication sign were fine.
 * The failure is silent about which character caused it, so flag anything
 * outside the known-good set before sending rather than debugging it live.
 */
const SAFE_NON_ASCII = new Set(["—", "–", "×", "’", "“", "”"]);

function unsafeCharacters(html) {
  const found = new Map();
  for (const ch of String(html)) {
    if (ch.charCodeAt(0) > 127 && !SAFE_NON_ASCII.has(ch)) {
      found.set(ch, (found.get(ch) || 0) + 1);
    }
  }
  return [...found.entries()].map(
    ([ch, n]) => `${ch} (U+${ch.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}) x${n}`,
  );
}

function parseArticleFile(path) {
  const src = readFileSync(path, "utf8");
  const slug = src.match(
    /\*\*URL:\*\*\s*`https:\/\/www\.sibinfotech\.com\/blog\/([a-z0-9-]+)`/i,
  )?.[1];
  const field = (name) =>
    src.match(new RegExp("\\*\\*" + name + "\\*\\*[^\\n]*\\n+`([^`]+)`", "i"))?.[1]?.trim() || null;
  const block = src.split("```html")[1];
  return {
    file: path.split(/[\\/]/).pop(),
    slug,
    description: block ? block.split("```")[0].trim() : null,
    meta_title: field("meta_title"),
    meta_description: field("meta_description"),
    meta_keywords: field("meta_keywords"),
  };
}

function loadBackup(slug) {
  const p = join(BACKUP_DIR, `${slug}.json`);
  return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")).blog?.[0] ?? null : null;
}

async function pushOne(article) {
  const backup = loadBackup(article.slug);
  if (!backup) {
    console.log(`  SKIP ${article.slug} — no backup on disk, refusing to write`);
    return false;
  }

  const live = await readBlog(article.slug);
  const payload = { ...live };
  for (const f of MANAGED) if (article[f]) payload[f] = article[f];

  const willChange = MANAGED.filter((f) => article[f] && article[f] !== live[f]);

  console.log(`\n  ${article.slug}`);
  console.log(`    id      : ${live.id}`);
  console.log(`    words   : ${wordCount(live.description)} -> ${wordCount(payload.description)}`);
  console.log(`    title   : ${payload.meta_title}`);
  console.log(`    changing: ${willChange.join(", ") || "nothing (already current)"}`);

  const unsafe = unsafeCharacters(payload.description);
  if (unsafe.length) {
    console.log(`    -> REFUSING: unsupported characters — ${unsafe.join(", ")}`);
    console.log(`       replace with HTML entities (e.g. &#8377; for the rupee sign) and retry`);
    return false;
  }

  if (!willChange.length) {
    console.log(`    -> already up to date, skipping`);
    return true;
  }
  if (!LIVE) {
    console.log(`    -> DRY RUN, nothing sent`);
    return true;
  }

  const img = await fetchImage(live, TMP);
  console.log(`    image   : ${img ? `${img.filename} (${img.bytes}b) will be re-uploaded` : "none on server — column stays empty"}`);

  const res = writeBlog(payload, img, TMP);
  if (res?.error) {
    console.log(`    -> FAILED ${JSON.stringify(res)}`);
    return false;
  }
  console.log(`    -> ${res?.message || JSON.stringify(res)}`);

  const after = await readBlog(article.slug);
  const changed = diffFields(live, after);
  const unexpected = changed.filter((f) => !MANAGED.includes(f));

  if (unexpected.length) {
    console.log(`    -> VERIFY FAILED — also changed: ${unexpected.join(", ")}`);
    console.log(`       restore: node scripts/push-blog-revamp.mjs --live --restore --only ${article.slug}`);
    return false;
  }
  console.log(`    -> verified: changed exactly ${changed.join(", ")}`);
  console.log(`       image now ${JSON.stringify(after.image)}`);
  return true;
}

async function restoreOne(slug) {
  const backup = loadBackup(slug);
  if (!backup) return console.log(`  no backup for ${slug}`), false;
  if (!LIVE) return console.log(`  DRY RUN: would restore ${slug} (id ${backup.id})`), true;
  const live = await readBlog(slug);
  const img = await fetchImage(live, TMP);
  const res = writeBlog(backup, img, TMP);
  console.log(`  restore ${slug}: ${res?.message || JSON.stringify(res)}`);
  return !res?.error;
}

async function main() {
  console.log(LIVE ? "MODE: LIVE" : "MODE: DRY RUN — nothing will be sent");
  if (ONLY) console.log(`FILTER: ${ONLY}`);

  if (RESTORE) {
    if (!ONLY) return console.log("--restore requires --only <slug>"), process.exit(1);
    return process.exit((await restoreOne(ONLY)) ? 0 : 1);
  }

  const articles = readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseArticleFile(join(CONTENT_DIR, f)))
    .filter((a) => a.slug && a.description)
    .filter((a) => !ONLY || a.slug === ONLY);

  console.log(`Articles: ${articles.length}`);
  let ok = 0;
  for (const a of articles) {
    if (await pushOne(a)) ok++;
    else if (LIVE) {
      console.log("\nAborting — nothing further sent.");
      break;
    }
  }
  console.log(`\n${ok} of ${articles.length} ${LIVE ? "pushed" : "validated"}.`);
}

main().catch((e) => {
  console.error("Fatal:", e.message);
  process.exit(1);
});
