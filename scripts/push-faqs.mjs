// scripts/push-faqs.mjs
// Pushes a set of FAQs (replacing any existing ones) for a blog post, and
// re-uploads its current description/image unchanged (required by the API).
import fs from "node:fs";
import path from "node:path";
import { readBlog, fetchImage, writeBlog } from "./lib/blog-api.mjs";

async function main() {
  const [identifier, jsonFile] = process.argv.slice(2);
  if (!identifier || !jsonFile) {
    console.error("Usage: node scripts/push-faqs.mjs <id> <faqs.json>");
    process.exit(1);
  }

  const faqs = JSON.parse(fs.readFileSync(jsonFile, "utf8"));
  if (!Array.isArray(faqs) || faqs.length < 2) {
    throw new Error("faqs.json must be an array of at least 2 {question, answer} objects");
  }

  const record = await readBlog(identifier);
  console.log(`Fetched "${record.name}" (ID: ${record.id})`);

  const safeSlug = String(record.slug).replace(/[^a-zA-Z0-9_-]/g, "_");
  const tmpDir = path.join(process.cwd(), "scratch", "blog_tmp", safeSlug);
  const imageFile = await fetchImage(record, tmpDir);

  record.faqs = JSON.stringify(
    faqs.map((f, i) => ({ question: f.question, answer: f.answer, order: i, publish: 1 })),
  );

  const result = writeBlog(record, imageFile, tmpDir);
  console.log("Write result:", result);
  if (result?.error) throw new Error(`Write failed: ${result?.message || JSON.stringify(result)}`);

  console.log(`Successfully pushed ${faqs.length} FAQs for ${record.slug} (ID ${record.id})`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
