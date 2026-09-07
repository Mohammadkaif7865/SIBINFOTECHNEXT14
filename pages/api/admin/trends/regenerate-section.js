// pages/api/admin/trends/regenerate-section.js
// Regenerates one section of an already-generated article (editor "Regenerate
// this section" action) without touching the rest of the piece.

import { requireAdmin } from "@/lib/adminAuth";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";
import { sanitizeArticleHtml, restrictLinksTo } from "@/lib/htmlSanitize";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const {
    sectionHtml,
    instruction,
    articleContext,
    primaryKeyword,
    allowedHrefs = [],
  } = req.body || {};

  if (!sectionHtml) return res.status(400).json({ error: "sectionHtml is required." });

  const prompt = `You are editing one section of an existing article for a digital marketing agency's blog. Rewrite ONLY the section shown below, keeping it consistent in tone with the rest of the article.

Article topic / primary keyword context: ${primaryKeyword || articleContext || "not provided"}

Current section HTML:
${sectionHtml}

Editor instruction: ${instruction || "Improve clarity, accuracy and flow. Keep the same heading and general topic."}

Rules: simple conversational English, no fabricated stats/quotes/dates, no banned AI phrasing ("revolutionary", "game-changing", "unlock", "leverage", "ever-evolving landscape"), keep roughly the same length unless the instruction says otherwise. Only use <a href> for URLs already present in the current section HTML above — do not add new links.

Return strict JSON: { "html": string (replacement HTML for just this section) }`;

  try {
    const { data } = await callGemini({ model: MODEL_FLASH, prompt, json: true, temperature: 0.5 });
    let html = sanitizeArticleHtml(data.html || "");
    html = restrictLinksTo(html, allowedHrefs);
    return res.status(200).json({ html });
  } catch (err) {
    console.error("regenerate-section error:", err);
    return res.status(502).json({ error: "Section regeneration failed.", details: err.message });
  }
}
