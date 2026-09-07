import axios from "axios";
import fs from "node:fs";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

function stripHtml(html) {
  return String(html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function main() {
  const res = await axios.get(`${API}blog/all?publish=1`, { headers: { Authorization: TOKEN } });
  const blogs = res.data.blogs || [];
  console.log(`Found ${blogs.length} blogs`);

  const out = [];
  const chunkSize = 20;
  for (let i = 0; i < blogs.length; i += chunkSize) {
    const chunk = blogs.slice(i, i + chunkSize);
    const results = await Promise.all(
      chunk.map(async (b) => {
        try {
          const r = await axios.get(`${API}blog/single/${b.id}`, { headers: { Authorization: TOKEN }, timeout: 8000 });
          const rec = r.data.blog?.[0];
          return {
            id: b.id,
            slug: b.slug,
            name: rec?.name || b.name,
            meta_description: rec?.meta_description || "",
            intro: stripHtml(rec?.description || "").slice(0, 400),
            desc_len: (rec?.description || "").length,
          };
        } catch (err) {
          return { id: b.id, slug: b.slug, name: b.name, error: err.message };
        }
      })
    );
    out.push(...results);
    console.log(`Fetched ${Math.min(i + chunkSize, blogs.length)}/${blogs.length}`);
  }

  out.sort((a, b) => a.id - b.id);
  fs.writeFileSync("scratch/all-blogs-brief.json", JSON.stringify(out, null, 2));
  console.log(`Wrote scratch/all-blogs-brief.json (${out.length} entries)`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
