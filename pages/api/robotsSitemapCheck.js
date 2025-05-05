export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    const { url } = req.body;
  
    if (!url || typeof url !== "string") {
      return res.status(400).json({ error: "Missing or invalid 'url' in request body" });
    }
    const robotsUrl = `${url}/robots.txt`;
    const sitemapUrl = `${url}/sitemap.xml`;

  
    try {
      const [robotsRes, sitemapRes] = await Promise.all([
        fetch(robotsUrl),
        fetch(sitemapUrl),
      ]);
  
      const robotsExists = robotsRes.ok;
      const sitemapExists = sitemapRes.ok;
  
      res.status(200).json({
        robotsExists,
        sitemapExists,
        robotsUrl,
        sitemapUrl,
      });
    } catch (err) {
      console.error("Error:", err.message);
      res.status(500).json({ error: "Failed to fetch robots/sitemap", details: err.message });
    }
  }
  