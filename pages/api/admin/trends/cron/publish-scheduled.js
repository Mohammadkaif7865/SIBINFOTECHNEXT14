// pages/api/admin/trends/cron/publish-scheduled.js
// Flips due "Scheduled" articles to "Published". This app is a stateless
// Next.js deployment with no confirmed always-on process, so nothing calls
// this automatically — wire it to a Vercel Cron entry, a GitHub Action on a
// schedule, or any external scheduler that can send a POST with the secret.
// Protected by CRON_SECRET rather than the admin cookie session because an
// external scheduler can't hold a browser session.

import { listArticles, updateArticle } from "@/lib/trendsDb";

export default async function handler(req, res) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const secret = req.headers["x-cron-secret"] || req.query.secret;
  if (!process.env.CRON_SECRET || secret !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: "Invalid or missing cron secret." });
  }

  const { items } = listArticles({ status: "Scheduled" });
  const now = Date.now();
  const due = items.filter((a) => a.scheduledAt && new Date(a.scheduledAt).getTime() <= now);

  const published = due.map((a) =>
    updateArticle(a.id, { status: "Published", publishDate: a.publishDate || new Date().toISOString() })
  );

  if (published.length > 0) {
    try {
      const { syncSitemapFile } = await import("@/lib/sitemapGenerator");
      await syncSitemapFile();
    } catch (e) {
      console.error("Sitemap sync error in cron:", e);
    }
  }

  return res.status(200).json({ publishedCount: published.length, published: published.map((a) => a.slug) });
}
