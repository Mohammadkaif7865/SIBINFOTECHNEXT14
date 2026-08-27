export default async function handler(req, res) {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "Missing image URL" });
  }

  try {
    const decodedUrl = decodeURIComponent(url);

    // Validate URL safety
    const parsed = new URL(decodedUrl);
    const allowedHosts = [
      "cdninstagram.com",
      "instagram.com",
      "fbcdn.net",
      "fna.fbcdn.net",
      "scontent",
    ];

    const isAllowed = allowedHosts.some(
      (host) => parsed.hostname === host || parsed.hostname.endsWith("." + host)
    );

    if (!isAllowed) {
      return res.status(400).json({ error: "Unauthorized image host" });
    }

    const response = await fetch(decodedUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        Referer: "https://www.instagram.com/",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-Fetch-Dest": "image",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "cross-site",
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Instagram CDN error: ${response.status}` });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";

    // Validate it's actually an image
    if (!contentType.startsWith("image/")) {
      return res.status(400).json({ error: "Response is not an image" });
    }

    res.setHeader("Content-Type", contentType);
    res.setHeader(
      "Cache-Control",
      "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400"
    );

    const arrayBuffer = await response.arrayBuffer();

    // Don't serve empty responses
    if (arrayBuffer.byteLength === 0) {
      return res.status(404).json({ error: "Empty image response" });
    }

    return res.send(Buffer.from(arrayBuffer));
  } catch (error) {
    return res.status(500).json({ error: error.message || "Failed to proxy image" });
  }
}
