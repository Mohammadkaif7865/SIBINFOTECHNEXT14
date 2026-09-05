// scripts/fix-missing-images.mjs
import fs from "node:fs";
import path from "node:path";
import { readBlog, writeBlog } from "./lib/blog-api.mjs";
import { generateBanner } from "./generate-banner.mjs";

const API = "https://www.sibinfotech.com/api/";

async function fixWithExistingFile(id, remotePath, tmpDir) {
  const record = await readBlog(id);
  const url = API + remotePath;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url}: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const filename = remotePath.split("/").pop().replace(/[:*?"<>|]/g, "_");
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const filePath = path.join(tmpDir, filename);
  fs.writeFileSync(filePath, buf);
  const imageFile = { path: filePath, filename, bytes: buf.length, type: res.headers.get("content-type") || "image/jpeg" };
  const result = writeBlog(record, imageFile, tmpDir);
  console.log(`[${id}] restored from ${remotePath}:`, result);
}

async function fixWithGeneratedBanner(id, tmpDir) {
  const record = await readBlog(id);
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const filename = `generated_banner_${id}.jpg`;
  const filePath = path.join(tmpDir, filename);
  await generateBanner(record.name, filePath);
  const stat = fs.statSync(filePath);
  const imageFile = { path: filePath, filename, bytes: stat.size, type: "image/jpeg" };
  const result = writeBlog(record, imageFile, tmpDir);
  console.log(`[${id}] generated banner for "${record.name}":`, result);
}

async function main() {
  await fixWithExistingFile(201, "uploads/blog/banner_1776750494375.jpeg", "scratch/blog_tmp/fiximg_201");
  await fixWithGeneratedBanner(225, "scratch/blog_tmp/fiximg_225");
  await fixWithGeneratedBanner(26, "scratch/blog_tmp/fiximg_26");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
