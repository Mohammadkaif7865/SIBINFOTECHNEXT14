// pages/api/admin/trends/publish.js
// One-click publish: final sanitize + slug-uniqueness check, then flips the
// record to Published so it becomes servable at /trends-insights/<slug>.
// Never auto-publishes anything on its own — only this deliberate action
// (or the separately-guarded scheduled-publish cron) changes status this way.

import { requireAdmin } from "@/lib/adminAuth";
import { getArticleById, updateArticle, slugExists, slugify } from "@/lib/trendsDb";
import { sanitizeArticleHtml, wordCount } from "@/lib/htmlSanitize";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const { id } = req.body || {};
  if (!id) return res.status(400).json({ error: "id is required." });

  const article = getArticleById(id);
  if (!article) return res.status(404).json({ error: "Article not found." });

  if (!article.html || !article.html.trim()) {
    return res.status(422).json({ error: "Cannot publish an empty article." });
  }
  if (!article.seoTitle || !article.metaDescription) {
    return res.status(422).json({ error: "SEO title and meta description are required before publishing." });
  }

  const slug = slugify(article.slug || article.title);
  if (slugExists(slug, id)) {
    return res.status(409).json({ error: `Slug "${slug}" is already used by another article. Change the slug and try again.` });
  }

  const canonicalUrl =
    article.canonicalUrl && !article.canonicalUrl.includes("/trends-insights/")
      ? article.canonicalUrl
      : `https://www.sibinfotech.com/blog/${slug}`;

  const html = sanitizeArticleHtml(article.html || "");

  const updated = updateArticle(id, {
    slug,
    html,
    canonicalUrl,
    wordCount: wordCount(html),
    status: "Published",
    publishDate: article.publishDate || new Date().toISOString(),
  });

  // Dynamically sync sitemap.xml
  try {
    const { syncSitemapFile } = await import("@/lib/sitemapGenerator");
    await syncSitemapFile();
  } catch (err) {
    console.error("Failed to sync sitemap after publish:", err);
  }

  return res.status(200).json({
    ...updated,
    liveUrl: `/blog/${slug}`,
  });
}
