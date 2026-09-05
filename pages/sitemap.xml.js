// pages/sitemap.xml.js
// Dynamically generates and serves the live XML sitemap on every request.

import { generateSitemapXml } from "@/lib/sitemapGenerator";

export async function getServerSideProps({ res }) {
  try {
    const xml = await generateSitemapXml();

    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=600"
    );
    res.write(xml);
    res.end();
  } catch (error) {
    console.error("Error serving sitemap.xml:", error);
    res.statusCode = 500;
    res.end();
  }

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
