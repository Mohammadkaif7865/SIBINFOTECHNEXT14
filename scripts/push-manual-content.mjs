// scripts/push-manual-content.mjs
// Pushes hand-written HTML content (no Gemini) into an existing blog record,
// preserving every other field and the featured image.
import fs from "node:fs";
import path from "node:path";
import { readBlog, fetchImage, writeBlog } from "./lib/blog-api.mjs";

async function main() {
  const [identifier, htmlFile] = process.argv.slice(2);
  if (!identifier || !htmlFile) {
    console.error("Usage: node scripts/push-manual-content.mjs <id> <htmlFile>");
    process.exit(1);
  }

  const html = fs.readFileSync(htmlFile, "utf8").trim();
  const wordCount = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`Loaded ${html.length} chars (~${wordCount} words) from ${htmlFile}`);

  const record = await readBlog(identifier);
  console.log(`Fetched blog "${record.name}" (ID: ${record.id}, slug: ${record.slug})`);
  console.log(`Current description length: ${(record.description || "").length} chars`);

  const safeSlug = String(record.slug).replace(/[^a-zA-Z0-9_-]/g, "_");
  const tmpDir = path.join(process.cwd(), "scratch", "blog_tmp", safeSlug);
  const imageFile = await fetchImage(record, tmpDir);
  console.log(`Preserved featured image: ${imageFile ? imageFile.filename : "No image"}`);

  record.description = html;
  const result = await writeBlog(record, imageFile, tmpDir);
  console.log("Write result:", result);
  if (result?.error) {
    throw new Error(`Write failed: ${result?.message || JSON.stringify(result)}`);
  }

  const updated = await readBlog(record.id);
  console.log(`Verification: new description length is ${(updated.description || "").length} chars`);
  console.log(`Successfully updated ${record.slug} (ID ${record.id}) in live database!`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
