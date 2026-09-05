import axios from "axios";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

async function main() {
  const res = await axios.get(`${API}blog/all?publish=1`, { headers: { Authorization: TOKEN } });
  const blogs = res.data.blogs || [];
  console.log(`Checking FAQs for ${blogs.length} published blogs...`);

  const missing = [];
  const chunkSize = 20;
  for (let i = 0; i < blogs.length; i += chunkSize) {
    const chunk = blogs.slice(i, i + chunkSize);
    await Promise.all(
      chunk.map(async (b) => {
        try {
          const r = await axios.get(`${API}blog/single/${b.id}`, { headers: { Authorization: TOKEN }, timeout: 8000 });
          const faqs = (r.data.blog_faqs || []).filter((f) => f.question && f.answer);
          if (faqs.length < 10) {
            missing.push({ id: b.id, slug: b.slug, count: faqs.length });
          }
        } catch (err) {
          missing.push({ id: b.id, slug: b.slug, error: err.message });
        }
      })
    );
    console.log(`Checked ${Math.min(i + chunkSize, blogs.length)}/${blogs.length}`);
  }

  console.log(`\n======================================================`);
  console.log(`Blogs with fewer than 10 FAQs: ${missing.length}`);
  missing.forEach((m) => console.log(`  [ID ${m.id}] ${m.slug} -> ${m.count !== undefined ? m.count + " FAQs" : m.error}`));
  console.log(`======================================================`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
