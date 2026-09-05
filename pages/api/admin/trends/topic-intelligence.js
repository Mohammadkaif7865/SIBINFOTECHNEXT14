// pages/api/admin/trends/topic-intelligence.js
// Step 4-5 of the workflow: search-intent + keyword research for a selected
// trend topic, before any article is generated.

import { requireAdmin } from "@/lib/adminAuth";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const { title, summary, source, sourceUrl, category, publishedDate } = req.body || {};
  if (!title) return res.status(400).json({ error: "title is required." });

  const prompt = `You are a senior SEO strategist and keyword researcher for a digital marketing agency (SIB Infotech, sibinfotech.com) writing for an audience of marketers, business owners and SEO professionals.

A trend-monitoring system surfaced this item:
- Title: ${title}
- Summary: ${summary || "N/A"}
- Source: ${source || "unknown"} (${sourceUrl || "no URL"})
- Category: ${category || "unknown"}
- Published: ${publishedDate || "unknown"}

Analyze this as a potential article topic. Explain the trend in simple, plain, easy-to-understand English without confusing jargon. Do not invent search volumes, rankings, or statistics.

Return strict JSON with this exact shape:
{
  "mainTopic": string,
  "simpleExplanation": string (1-2 clear, simple English sentences explaining what this trend is in everyday language and why it matters to business owners),
  "primaryKeyword": string,
  "secondaryKeywords": string[5-8],
  "semanticConcepts": string[6-10],
  "longTailKeywords": string[4-6],
  "questionKeywords": string[4-6],
  "peopleAlsoAsk": string[3-5],
  "searchIntent": "Informational" | "Commercial" | "Transactional" | "Navigational",
  "userJourneyStage": "Awareness" | "Consideration" | "Decision" | "Retention",
  "recommendedArticleStructure": string[5-9] (ordered H2-level section names, adapted to this specific topic, not generic),
  "suggestedTitle": string,
  "seoTitle": string (<=60 chars),
  "metaDescription": string (140-158 chars),
  "suggestedUrlSlug": string (lowercase-hyphenated, no leading slash),
  "contentAngle": string (1-2 sentences on the differentiated angle),
  "targetAudience": string,
  "recommendedWordCount": number,
  "recommendedCategory": "SEO" | "AI" | "Google" | "Social Media" | "Paid Advertising" | "Content Marketing" | "GEO" | "AEO" | "Analytics" | "Marketing Technology"
}`;

  try {
    const { data } = await callGemini({ model: MODEL_FLASH, prompt, json: true, temperature: 0.3 });
    return res.status(200).json(data);
  } catch (err) {
    console.error("topic-intelligence error:", err);
    return res.status(502).json({ error: "Topic intelligence generation failed.", details: err.message });
  }
}
