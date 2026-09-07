import axios from "axios";
import fs from "node:fs";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

const ids = process.argv.slice(2).map(Number);

async function main() {
  const out = [];
  for (const id of ids) {
    const res = await axios.get(`${API}blog/single/${id}`, { headers: { Authorization: TOKEN } });
    const b = res.data.blog?.[0];
    out.push({
      id: b.id,
      slug: b.slug,
      name: b.name,
      meta_title: b.meta_title,
      meta_description: b.meta_description,
      description: b.description,
    });
  }
  fs.writeFileSync("scratch/short-blogs-dump.json", JSON.stringify(out, null, 2));
  console.log(`Dumped ${out.length} records to scratch/short-blogs-dump.json`);
}

main().catch((e) => { console.error(e.message); process.exit(1); });
