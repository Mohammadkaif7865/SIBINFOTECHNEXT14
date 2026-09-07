// pages/api/admin/trends/check-cannibalization.js
// Step 6-7 of the workflow: check a proposed topic/keyword against the
// existing site inventory before an article is generated.

import { requireAdmin } from "@/lib/adminAuth";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";
import { getSiteInventory, findRelevantPages } from "@/lib/siteInventory";

const RECOMMENDED_ACTIONS = [
  "Update existing article",
  "Expand existing article",
  "Merge content",
  "Target a different long-tail keyword",
  "Change search intent",
  "Create a supporting cluster article",
  "Create an FAQ article",
  "Create a comparison article",
  "Create a news/update article",
  "Skip the topic",
  "Proceed — no conflict",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const { topic, primaryKeyword, secondaryKeywords = [], searchIntent } = req.body || {};
  if (!topic || !primaryKeyword) {
    return res.status(400).json({ error: "topic and primaryKeyword are required." });
  }

  const inventory = getSiteInventory();
  const relevant = findRelevantPages(`${topic} ${primaryKeyword} ${secondaryKeywords.join(" ")}`, {
    inventory,
    limit: 15,
  });

  const inventoryText = relevant.length
    ? relevant.map((p) => `- URL: ${p.url} | Title: "${p.title}" | Desc: "${p.desc}"`).join("\n")
    : "No closely related existing pages found in the top matches.";

  const prompt = `You are a technical SEO director preventing keyword cannibalization for sibinfotech.com before a new article is published.

Proposed new content:
- Topic: ${topic}
- Primary keyword: ${primaryKeyword}
- Secondary keywords: ${secondaryKeywords.join(", ") || "none provided"}
- Target search intent: ${searchIntent || "not specified"}

Most relevant EXISTING pages already live on the site:
${inventoryText}

Determine whether publishing this would cannibalize existing rankings (multiple URLs competing for the same query cluster). Consider exact keyword overlap, partial overlap, matching search intent, and title/topic similarity — not just string matching.

Return strict JSON:
{
  "riskLevel": "Low" | "Medium" | "High",
  "riskScore": number (0-100),
  "overlapType": "None" | "Exact Keyword" | "Partial Keyword" | "Same Search Intent" | "Similar Title" | "Similar Topic Cluster",
  "explanation": string (why this risk level, referencing specific competing URLs if any),
  "competingPages": [{ "url": string, "title": string, "overlapReason": string }],
  "recommendedAction": one of ${JSON.stringify(RECOMMENDED_ACTIONS)},
  "actionRationale": string
}
Only include pages in competingPages that were listed above as existing pages — never invent a URL.`;

  try {
    const { data } = await callGemini({ model: MODEL_FLASH, prompt, json: true, temperature: 0.2 });
    return res.status(200).json({ ...data, checkedInventorySize: inventory.length });
  } catch (err) {
    console.error("trends check-cannibalization error:", err);
    return res.status(502).json({ error: "Cannibalization check failed.", details: err.message });
  }
}
