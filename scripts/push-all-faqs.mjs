// scripts/push-all-faqs.mjs
// Reads every scripts/faq-data/*.json file (each { "<blog_id>": [{question,answer}, ...] }),
// merges them, and pushes each blog's FAQ set via blog/edit's `faqs` field
// (which replaces that blog's FAQ rows — safe to re-run).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readBlog, fetchImage, writeBlog } from "./lib/blog-api.mjs";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(ROOT, "faq-data");

const argv = process.argv.slice(2);
const ONLY_FILE = argv.includes("--file") ? argv[argv.indexOf("--file") + 1] : null;
const SKIP_IDS = new Set(
  (argv.includes("--skip") ? argv[argv.indexOf("--skip") + 1] : "").split(",").filter(Boolean),
);

function loadManifest() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => f.endsWith(".json"))
    .filter((f) => !ONLY_FILE || f === ONLY_FILE)
    .sort();
  const manifest = {};
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), "utf8"));
    for (const [id, faqs] of Object.entries(data)) {
      manifest[id] = faqs;
    }
  }
  return manifest;
}

async function pushOne(id, faqs) {
  const record = await readBlog(id);
  // Keyed on ID, not slug — some slugs exceed 100 chars and combined with an
  // equally long image filename can push the full path past Windows' MAX_PATH,
  // causing curl to fail reading the file (exit 26).
  const tmpDir = path.join(process.cwd(), "scratch", "blog_tmp", `id_${record.id}`);
  const imageFile = await fetchImage(record, tmpDir);

  record.faqs = JSON.stringify(
    faqs.map((f, i) => ({ question: f.question, answer: f.answer, order: i, publish: 1 })),
  );

  const result = writeBlog(record, imageFile, tmpDir);
  if (result?.error) throw new Error(result?.message || JSON.stringify(result));
  return record.slug;
}

async function main() {
  const manifest = loadManifest();
  const ids = Object.keys(manifest).filter((id) => !SKIP_IDS.has(id));
  console.log(`Loaded ${ids.length} blogs with FAQ sets to push.`);

  let ok = 0;
  let fail = 0;
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const faqs = manifest[id];
    if (!Array.isArray(faqs) || faqs.length < 2) {
      console.log(`[${i + 1}/${ids.length}] SKIP id=${id} — needs at least 2 FAQs, got ${faqs?.length || 0}`);
      continue;
    }
    try {
      const slug = await pushOne(id, faqs);
      console.log(`[${i + 1}/${ids.length}] OK id=${id} slug=${slug} (${faqs.length} FAQs)`);
      ok++;
    } catch (err) {
      console.error(`[${i + 1}/${ids.length}] FAIL id=${id}: ${err.message}`);
      fail++;
    }
    await new Promise((r) => setTimeout(r, 800));
  }

  console.log(`\nDone. Success: ${ok}, Failed: ${fail}, Total: ${ids.length}`);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
