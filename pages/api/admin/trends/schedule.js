// pages/api/admin/trends/schedule.js
// Marks an article Scheduled with a future publish timestamp. Actually
// flipping it to Published at that time requires an external trigger
// hitting /api/admin/trends/cron/publish-scheduled (see that file) — this
// app has no always-on background process to do it by itself.

import { requireAdmin } from "@/lib/adminAuth";
import { getArticleById, updateArticle } from "@/lib/trendsDb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const { id, scheduledAt } = req.body || {};
  if (!id || !scheduledAt) {
    return res.status(400).json({ error: "id and scheduledAt (ISO date) are required." });
  }
  const when = new Date(scheduledAt);
  if (isNaN(when)) return res.status(400).json({ error: "scheduledAt must be a valid date." });
  if (when.getTime() <= Date.now()) {
    return res.status(400).json({ error: "scheduledAt must be in the future." });
  }

  const article = getArticleById(id);
  if (!article) return res.status(404).json({ error: "Article not found." });

  const updated = updateArticle(id, { status: "Scheduled", scheduledAt: when.toISOString() });
  return res.status(200).json(updated);
}
