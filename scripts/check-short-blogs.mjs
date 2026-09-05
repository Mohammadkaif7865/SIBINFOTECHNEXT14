import axios from "axios";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

async function main() {
  const res = await axios.get(`${API}blog/all?publish=1`, {
    headers: { Authorization: TOKEN },
  });
  const blogs = res.data.blogs || [];
  console.log(`Total published blogs: ${blogs.length}`);

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
            return { id: b.id, slug: b.slug, name: b.name, descLen: desc.length };
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

  console.log(`Remaining short blogs: ${shortBlogs.length}`);
  shortBlogs.forEach((b, i) => console.log(`  ${i + 1}. [ID ${b.id}] ${b.slug} (${b.descLen} chars)`));
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
