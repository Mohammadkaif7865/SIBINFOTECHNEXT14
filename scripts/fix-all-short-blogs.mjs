// scripts/fix-all-short-blogs.mjs
import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import { fixSingleBlog } from "./fix-short-blogs.mjs";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

async function main() {
  console.log("Scanning all published blogs...");
  const res = await axios.get(`${API}blog/all?publish=1`, {
    headers: { Authorization: TOKEN },
  });
  const blogs = res.data.blogs || [];
  console.log(`Found ${blogs.length} published blogs in total.`);

  // Find all remaining short/cut-down blogs
  const shortBlogs = [];
  const chunkSize = 25;
  for (let i = 0; i < blogs.length; i += chunkSize) {
    const chunk = blogs.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(
      chunk.map(async (b) => {
        try {
          const single = await axios.get(`${API}blog/single/${encodeURIComponent(b.slug)}?slug=1`, {
            headers: { Authorization: TOKEN },
            timeout: 8000,
          });
          const desc = single.data.blog?.[0]?.description || "";
          const sections = single.data.blog_sections || [];
          if (sections.length === 0 && desc.length < 1400) {
            return {
              id: b.id,
              slug: b.slug,
              name: b.name,
              descLen: desc.length,
            };
          }
          return null;
        } catch (err) {
          console.warn(`Failed to inspect ${b.slug}: ${err.message}`);
          return null;
        }
      })
    );
    shortBlogs.push(...chunkResults.filter(Boolean));
  }

  console.log(`\n======================================================`);
  console.log(`Identified ${shortBlogs.length} remaining short blogs to expand (2,000–3,000 words):`);
  shortBlogs.forEach((b, i) => console.log(`  ${i + 1}. [ID ${b.id}] ${b.slug} (${b.descLen} chars)`));
  console.log(`======================================================\n`);

  if (shortBlogs.length === 0) {
    console.log("All blogs are already complete and full length! Nothing to fix.");
    return;
  }

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < shortBlogs.length; i++) {
    const item = shortBlogs[i];
    console.log(`\n[${i + 1}/${shortBlogs.length}] Processing: ${item.slug} (ID ${item.id})`);
    try {
      await fixSingleBlog(item.id);
      successCount++;
    } catch (err) {
      console.error(`❌ Failed to fix ${item.slug}:`, err.message);
      failCount++;
    }

    // Delay between calls to respect Gemini and API rate limits
    console.log(`Waiting 3 seconds before next blog...`);
    await new Promise((r) => setTimeout(r, 3000));
  }

  console.log(`\n======================================================`);
  console.log(`Batch Fix Complete:`);
  console.log(`  ✅ Successfully updated: ${successCount}`);
  console.log(`  ❌ Failed: ${failCount}`);
  console.log(`======================================================`);
}

main().catch((err) => {
  console.error("Batch script error:", err);
  process.exit(1);
});
