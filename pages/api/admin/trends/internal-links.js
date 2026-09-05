// pages/api/admin/trends/internal-links.js
// Step 10: recommend 5-12 contextual internal links for a new article.

import { requireAdmin } from "@/lib/adminAuth";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";
import { getSiteInventory, findRelevantPages } from "@/lib/siteInventory";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const body = req.body || {};
  const topic = body.topic || "";
  const primaryKeyword = body.primaryKeyword || "";
  const secondaryKeywords = Array.isArray(body.secondaryKeywords)
    ? body.secondaryKeywords
    : typeof body.secondaryKeywords === "string"
    ? body.secondaryKeywords.split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  const outline = Array.isArray(body.outline)
    ? body.outline
    : typeof body.outline === "string"
    ? body.outline.split("\n").map((s) => s.trim()).filter(Boolean)
    : [];

  if (!topic && !primaryKeyword) {
    return res.status(400).json({ error: "topic or primaryKeyword is required." });
  }

  const inventory = getSiteInventory();
  const searchTerms = [topic, primaryKeyword, ...secondaryKeywords, ...outline].join(" ");
  const candidates = findRelevantPages(searchTerms, { inventory, limit: 25 });

  const pool = candidates.length >= 3 ? candidates : inventory.slice(0, 25);
  const poolText = pool.map((p) => `- URL: ${p.url} | Title: "${p.title}" | Desc: "${p.desc}"`).join("\n");

  const fallbackLinks = pool.slice(0, 6).map((p) => ({
    targetUrl: p.url,
    targetTitle: p.title,
    anchorText: p.title.split("|")[0].replace(/Services|Company|Agency/gi, "").trim() || p.title.split("|")[0].trim(),
    suggestedSection: "Strategic Solutions",
    relationship: "Relevant service page and pillar resource",
    priority: "High",
  }));

  const prompt = `You are an internal linking strategist for sibinfotech.com.

New article:
- Topic: ${topic}
- Primary keyword: ${primaryKeyword || "n/a"}
- Secondary keywords: ${secondaryKeywords.join(", ") || "n/a"}
- Planned outline: ${outline.join(" | ") || "n/a"}

Candidate existing pages to link to (choose only from this list — never invent a URL):
${poolText}

Recommend 5-12 internal links from the candidate list that are genuinely relevant (service pages, landing pages, authoritative blog posts, category hubs, conversion pages). Avoid: irrelevant links, more than 1-2 links to the exact same URL, reusing identical anchor text more than once, and forcing exact-match anchors everywhere.

Return strict JSON:
{
  "links": [
    {
      "targetUrl": string (must be one of the candidate URLs above),
      "targetTitle": string,
      "anchorText": string (natural phrase, not always exact-match),
      "suggestedSection": string (which part of the article this fits, e.g. "Introduction" or "Practical examples"),
      "relationship": string (why this page relates to the article),
      "priority": "High" | "Medium" | "Low"
    }
  ]
}`;

  try {
    const { data } = await callGemini({ model: MODEL_FLASH, prompt, json: true, temperature: 0.3 });
    const validUrls = new Set(pool.map((p) => p.url));
    const rawLinks = Array.isArray(data?.links) ? data.links : [];
    const links = rawLinks.filter((l) => l?.targetUrl && validUrls.has(l.targetUrl));

    return res.status(200).json({
      links: links.length > 0 ? links : fallbackLinks,
    });
  } catch (err) {
    console.warn("internal-links AI call warning, using fallback inventory matches:", err.message);
    return res.status(200).json({
      links: fallbackLinks,
      fallbackUsed: true,
    });
  }
}
