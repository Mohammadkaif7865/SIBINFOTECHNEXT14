// pages/api/admin/trends/drafts.js
// CRUD for article records (Draft / Review / Scheduled / Published).
// GET    ?id=<id>                -> single article
// GET    ?status=&category=&q=   -> list/search
// POST   body = new article      -> create
// PUT    body = { id, ...patch } -> update
// DELETE ?id=<id>                -> delete

import { requireAdmin } from "@/lib/adminAuth";
import {
  listArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  slugExists,
  slugify,
} from "@/lib/trendsDb";
import { sanitizeArticleHtml, wordCount } from "@/lib/htmlSanitize";

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method === "GET") {
    const { id, status, category, q, limit, offset } = req.query;
    if (id) {
      const article = getArticleById(id);
      if (!article) return res.status(404).json({ error: "Not found." });
      return res.status(200).json(article);
    }
    const { items, total } = listArticles({
      status,
      category,
      search: q,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : 0,
    });
    return res.status(200).json({ items, total });
  }

  if (req.method === "POST") {
    const body = req.body || {};
    let slug = slugify(body.slug || body.title || "untitled-article");
    let attempt = 0;
    let candidate = slug;
    while (slugExists(candidate)) {
      attempt += 1;
      candidate = `${slug}-${attempt + 1}`;
    }
    const html = sanitizeArticleHtml(body.html || "");
    const record = createArticle({
      ...body,
      slug: candidate,
      html,
      wordCount: wordCount(html),
    });

    if (record.status === "Published") {
      try {
        const { syncSitemapFile } = await import("@/lib/sitemapGenerator");
        await syncSitemapFile();
      } catch (e) {
        console.error("Sitemap sync error on create:", e);
      }
    }

    return res.status(201).json(record);
  }

  if (req.method === "PUT") {
    const { id, ...patch } = req.body || {};
    if (!id) return res.status(400).json({ error: "id is required." });

    if (patch.slug) {
      patch.slug = slugify(patch.slug);
      if (slugExists(patch.slug, id)) {
        return res.status(409).json({ error: `Slug "${patch.slug}" is already in use.` });
      }
    }
    if (typeof patch.html === "string") {
      patch.html = sanitizeArticleHtml(patch.html);
      patch.wordCount = wordCount(patch.html);
    }

    const updated = updateArticle(id, patch);
    if (!updated) return res.status(404).json({ error: "Not found." });

    if (updated.status === "Published" || patch.status === "Published" || patch.slug) {
      try {
        const { syncSitemapFile } = await import("@/lib/sitemapGenerator");
        await syncSitemapFile();
      } catch (e) {
        console.error("Sitemap sync error on update:", e);
      }
    }

    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required." });
    const existing = getArticleById(id);
    const wasPublished = existing?.status === "Published";

    const removed = deleteArticle(id);
    if (!removed) return res.status(404).json({ error: "Not found." });

    if (wasPublished) {
      try {
        const { syncSitemapFile } = await import("@/lib/sitemapGenerator");
        await syncSitemapFile();
      } catch (e) {
        console.error("Sitemap sync error on delete:", e);
      }
    }

    return res.status(200).json({ ok: true });
  }

  res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
  return res.status(405).json({ error: `Method ${req.method} not allowed.` });
}
