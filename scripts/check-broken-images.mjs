import axios from "axios";

const API = "https://www.sibinfotech.com/api/";
const TOKEN = "FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe";

async function main() {
  const res = await axios.get(`${API}blog/all?publish=1`, {
    headers: { Authorization: TOKEN },
  });
  const blogs = res.data.blogs || [];
  console.log(`Checking images for ${blogs.length} published blogs...`);

  const broken = [];
  const noImage = [];
  const chunkSize = 20;
  for (let i = 0; i < blogs.length; i += chunkSize) {
    const chunk = blogs.slice(i, i + chunkSize);
    await Promise.all(
      chunk.map(async (b) => {
        if (!b.image) {
          noImage.push({ id: b.id, slug: b.slug, name: b.name });
          return;
        }
        try {
          const url = API + b.image;
          const r = await axios.head(url, { timeout: 8000, validateStatus: () => true });
          if (r.status !== 200) {
            broken.push({ id: b.id, slug: b.slug, name: b.name, image: b.image, status: r.status });
          }
        } catch (err) {
          broken.push({ id: b.id, slug: b.slug, name: b.name, image: b.image, status: `ERR:${err.message}` });
        }
      })
    );
    console.log(`Checked ${Math.min(i + chunkSize, blogs.length)}/${blogs.length}...`);
  }

  console.log(`\n======================================================`);
  console.log(`Broken images: ${broken.length}`);
  broken.forEach((b, i) => console.log(`  ${i + 1}. [ID ${b.id}] ${b.slug} -> ${b.image} (${b.status})`));
  console.log(`\nNo image at all: ${noImage.length}`);
  noImage.forEach((b, i) => console.log(`  ${i + 1}. [ID ${b.id}] ${b.slug}`));
  console.log(`======================================================`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
