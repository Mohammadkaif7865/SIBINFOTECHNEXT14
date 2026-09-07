#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from the live content API and the pages/ routes.
 *
 * Replaces the hand-maintained file, which had drifted badly from reality:
 *   - 66 published blogs were missing entirely
 *   - 6 listed URLs no longer resolved (3 redirected, 1 hard 404)
 *   - 308 of 326 entries shared one identical fabricated <lastmod>
 *   - <changefreq>daily</changefreq> on 323 entries, including posts from 2019
 *
 * A sitemap where every URL claims the same modification date and a daily change
 * frequency teaches Google that its freshness signals are noise. This emits real
 * dates and omits changefreq/priority entirely — Google ignores both, and a false
 * signal is worse than an absent one.
 *
 * Usage: node scripts/generate-sitemap.mjs [--dry]
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://www.sibinfotech.com";
const OUT = join(ROOT, "public", "sitemap.xml");
const DRY = process.argv.includes("--dry");

const API_URL = "https://www.sibinfotech.com/api/";
const API_TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

/** Routes that must never appear in a sitemap. */
const EXCLUDED_ROUTES = new Set([
  "/_app",
  "/_document",
  "/404",
  "/thanks", // post-submission confirmation, no search value
  "/index", // duplicate of "/"
  "/chat",
]);

// /tools/* are public, indexable SEO tools and belong in the sitemap.
const EXCLUDED_PREFIXES = ["/api/", "/admin/"];

// ---------------------------------------------------------------- redirects

/**
 * Pulls redirect + 410 sources out of the config so we never advertise a URL
 * that does not return 200. Parsed with a regex rather than by importing the
 * config, which would need the full Next build context.
 */
function getNonCanonicalPaths() {
  const paths = new Set();

  const config = readFileSync(join(ROOT, "next.config.mjs"), "utf8");
  for (const m of config.matchAll(/source:\s*\n?\s*["'`]([^"'`]+)["'`]/g)) {
    paths.add(m[1].replace(/\/$/, "") || "/");
  }

  try {
    const middleware = readFileSync(join(ROOT, "middleware.js"), "utf8");
    // The 410 list is an array of bare string literals starting with "/".
    for (const m of middleware.matchAll(/["'`](\/[^"'`\s]+)["'`]/g)) {
      paths.add(m[1].replace(/\/$/, "") || "/");
    }
  } catch {
    // middleware is optional
  }

  return paths;
}

// ------------------------------------------------------------ static routes

function walkPages(dir, base = "") {
  const routes = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      routes.push(...walkPages(full, `${base}/${entry}`));
      continue;
    }
    if (!entry.endsWith(".js") && !entry.endsWith(".jsx")) continue;
    if (entry.includes("[")) continue; // dynamic routes are enumerated separately
    if (entry.includes(" copy")) continue;

    const name = entry.replace(/\.(js|jsx)$/, "");
    const route = name === "index" ? base || "/" : `${base}/${name}`;
    routes.push({ route, file: full });
  }
  return routes;
}

let gitCommitDates = null;

function loadGitCommitDates() {
  if (gitCommitDates !== null) return gitCommitDates;
  gitCommitDates = new Map();
  try {
    const out = execSync("git log --format=COMMIT:%cI --name-only -- pages", {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 20 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
    let currentDate = null;
    for (const rawLine of out.split("\n")) {
      const line = rawLine.trim();
      if (!line) continue;
      if (line.startsWith("COMMIT:")) {
        currentDate = line.slice(7).trim();
      } else if (currentDate) {
        const normalized = line.replace(/\\/g, "/");
        if (!gitCommitDates.has(normalized)) {
          gitCommitDates.set(normalized, currentDate);
        }
      }
    }
  } catch {
    // ignore git failures
  }
  return gitCommitDates;
}

/** Real last-modified date: the file's last commit, falling back to mtime. */
function fileLastModified(file) {
  const dates = loadGitCommitDates();
  const rel = relative(ROOT, file).replace(/\\/g, "/");
  if (dates && dates.has(rel)) {
    return dates.get(rel);
  }
  try {
    return statSync(file).mtime.toISOString();
  } catch {
    return null;
  }
}

// -------------------------------------------------------------------- blogs

function extractExistingSitemapBlogs() {
  const blogs = [];
  try {
    if (existsSync(OUT)) {
      const xml = readFileSync(OUT, "utf8");
      const urlRegex = /<url>[\s\S]*?<loc>(?:https?:\/\/[^<]+)?\/blog\/([^<]+)<\/loc>(?:[\s\S]*?<lastmod>([^<]+)<\/lastmod>)?[\s\S]*?<\/url>/g;
      let match;
      while ((match = urlRegex.exec(xml)) !== null) {
        const slug = match[1]?.trim();
        const lastmod = match[2]?.trim() || null;
        if (slug) {
          blogs.push({ slug, updatedAt: lastmod });
        }
      }
    }
  } catch (err) {
    console.warn("Could not parse existing sitemap for fallback:", err.message);
  }
  return blogs;
}

async function fetchPublishedBlogs() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${API_URL}blog/all?publish=1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: API_TOKEN,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SitemapGenerator/1.0",
      },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      console.warn(`Warning: blog/all API returned ${res.status}. Falling back to existing sitemap entries.`);
      return extractExistingSitemapBlogs();
    }

    const data = await res.json();
    return (data.blogs || []).filter((b) => Number(b.publish) === 1 && b.slug);
  } catch (err) {
    console.warn(`Warning: Failed to fetch blogs from API (${err.message}). Falling back to existing sitemap entries.`);
    return extractExistingSitemapBlogs();
  }
}

// -------------------------------------------------------------------- build

function isoOrNull(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

function xmlEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function main() {
  const skip = getNonCanonicalPaths();
  const entries = new Map(); // path -> lastmod
  const dropped = { redirected: 0, excluded: 0 };

  for (const { route, file } of walkPages(join(ROOT, "pages"))) {
    if (EXCLUDED_ROUTES.has(route)) {
      dropped.excluded++;
      continue;
    }
    if (EXCLUDED_PREFIXES.some((p) => route.startsWith(p))) {
      dropped.excluded++;
      continue;
    }
    if (skip.has(route)) {
      dropped.redirected++;
      continue;
    }
    entries.set(route, fileLastModified(file));
  }

  const blogs = await fetchPublishedBlogs();
  let blogCount = 0;
  for (const b of blogs) {
    const route = `/blog/${b.slug}`;
    if (skip.has(route)) {
      dropped.redirected++;
      continue;
    }
    entries.set(route, isoOrNull(b.updatedAt) || isoOrNull(b.bdate));
    blogCount++;
  }

  // Include local published trendsDb articles
  try {
    const trendsFile = join(ROOT, "data", "trends", "articles.json");
    if (existsSync(trendsFile)) {
      const localArticles = JSON.parse(readFileSync(trendsFile, "utf8"));
      for (const a of localArticles) {
        if (a.status === "Published" && a.slug) {
          const route = `/blog/${a.slug}`;
          if (skip.has(route)) {
            dropped.redirected++;
            continue;
          }
          if (!entries.has(route)) {
            blogCount++;
          }
          entries.set(route, isoOrNull(a.updatedAt) || isoOrNull(a.publishDate) || isoOrNull(a.createdAt));
        }
      }
    }
  } catch (err) {
    console.warn("Could not load local trendsDb articles:", err.message);
  }

  const sorted = [...entries.entries()].sort(([a], [b]) =>
    a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b),
  );

  const body = sorted
    .map(([path, lastmod]) => {
      const loc = `${ORIGIN}${path === "/" ? "/" : path}`;
      const mod = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${mod}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  console.log(`Static routes : ${sorted.length - blogCount}`);
  console.log(`Blog routes   : ${blogCount} (of ${blogs.length} published/cached)`);
  console.log(`Skipped       : ${dropped.redirected} redirected, ${dropped.excluded} excluded`);
  console.log(`Total URLs    : ${sorted.length}`);

  if (DRY) {
    console.log("\n--dry: sitemap not written");
    return;
  }

  writeFileSync(OUT, xml, "utf8");
  console.log(`\nWrote ${OUT}`);
}

main().catch((err) => {
  console.error("Sitemap generation error:", err.message);
  // Do not crash the entire build process
});

