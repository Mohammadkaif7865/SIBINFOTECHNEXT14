// pages/api/admin/trends/generate-article.js
// Step 11: generate the full article with Gemini, using only the research
// context assembled in earlier steps (topic intelligence, cannibalization
// guidance, verified internal + external links). The model is instructed to
// omit anything it cannot ground in that material rather than invent it.

import { requireAdmin } from "@/lib/adminAuth";
import { callGemini, MODEL_PRO } from "@/lib/gemini";
import { sanitizeArticleHtml, restrictLinksTo, wordCount } from "@/lib/htmlSanitize";

const BANNED_PHRASES = [
  "revolutionary", "game-changing", "game changer", "ever-evolving landscape",
  "unlock", "leverage", "in today's digital age", "in the world of",
  "delve into", "in conclusion,", "navigate the", "landscape of",
];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const {
    topic,
    sourceName,
    sourceUrl,
    sourceSummary,
    publishedDate,
    topicIntelligence = {},
    cannibalizationGuidance,
    internalLinks = [],
    verifiedSources = [],
  } = req.body || {};

  if (!topic) return res.status(400).json({ error: "topic is required." });

  const internalLinksText = internalLinks.length
    ? internalLinks
        .map((l) => `- URL: ${l.targetUrl} | Anchor: "${l.anchorText}" | Place near: ${l.suggestedSection}`)
        .join("\n")
    : "None available — do not add internal links.";

  const externalSourcesText = verifiedSources.length
    ? verifiedSources.map((s) => `- ${s.name}: ${s.url}`).join("\n")
    : "None verified — do not cite any external URL.";

  const allowedHrefs = [
    ...internalLinks.map((l) => l.targetUrl),
    ...verifiedSources.map((s) => s.url),
  ];

  const wordTarget = topicIntelligence.recommendedWordCount || 2700;

  const prompt = `You are an experienced digital marketing strategist writing a genuinely useful article for sibinfotech.com's readers (marketers, business owners, SEO practitioners). Write like a knowledgeable human colleague, not a generic AI assistant.

TOPIC
- Working title: ${topic}
- What happened / source summary: ${sourceSummary || "N/A"}
- Original source: ${sourceName || "unknown"} (${sourceUrl || "no URL"}), published ${publishedDate || "unknown"}
- Content angle: ${topicIntelligence.contentAngle || "Explain the development and its practical impact."}
- Target audience: ${topicIntelligence.targetAudience || "Digital marketers and business owners"}
- Search intent: ${topicIntelligence.searchIntent || "Informational"}
- Primary keyword: ${topicIntelligence.primaryKeyword || topic}
- Secondary keywords: ${(topicIntelligence.secondaryKeywords || []).join(", ") || "none"}
- Semantic concepts to cover naturally: ${(topicIntelligence.semanticConcepts || []).join(", ") || "none"}
- People also ask: ${(topicIntelligence.peopleAlsoAsk || []).join(" | ") || "none"}
- Suggested outline (adapt, don't force): ${(topicIntelligence.recommendedArticleStructure || []).join(" | ") || "none"}
${cannibalizationGuidance ? `- IMPORTANT positioning constraint from cannibalization review: ${cannibalizationGuidance}` : ""}

TARGET LENGTH: about ${wordTarget} words. Prioritize fully answering the search intent over hitting an exact count — go shorter if the topic is genuinely covered, longer only if truly needed.

WRITING RULES
- Simple, clear, conversational-but-professional English. Short-to-medium paragraphs.
- Vary sentence structure and transitions. Never repeat the same conclusion phrasing twice.
- No robotic intros, no keyword stuffing, no fake statistics, no invented quotes or studies.
- Never state a specific date, statistic, feature name, or quote unless it is present in the source summary above — if you're not sure, describe it qualitatively or omit it instead of guessing.
- Do not use these words/phrases: ${BANNED_PHRASES.join(", ")}.
- Use tables where they genuinely help (e.g. comparisons), but don't force one.
- Adapt structure to the topic — do not mechanically repeat the same section list every time.

LINKS — ONLY use these, with these exact URLs, nowhere else in the piece:
Internal links to weave in naturally where relevant:
${internalLinksText}

External sources to cite (only when directly relevant to a claim):
${externalSourcesText}
Do not link to any URL not listed above. Do not invent a URL.

Return strict JSON:
{
  "html": string (the full article body as clean semantic HTML — h1 once, h2/h3 for sections, p, ul/ol, table where useful, blockquote where appropriate, <a href="..."> only from the allowed lists above, and a "Frequently Asked Questions" h2 section with 4-6 h3 question + p answer pairs near the end, followed by a short conclusion),
  "excerpt": string (1-2 sentence summary, no HTML),
  "seoTitle": string (<=60 chars),
  "metaDescription": string (140-158 chars),
  "urlSlug": string (lowercase-hyphenated),
  "ogTitle": string,
  "ogDescription": string,
  "featuredImageSuggestion": string (description of an appropriate featured image),
  "featuredImageAlt": string,
  "faqs": [{ "question": string, "answer": string }],
  "primaryKeyword": string,
  "secondaryKeywords": string[],
  "confirmedVsSpeculative": string (1-2 sentences noting anything in the piece that is confirmed official information vs. still speculative/unannounced, or "All information is based on confirmed sources." if nothing is speculative)
}`;

  try {
    const { data } = await callGemini({
      model: MODEL_PRO,
      prompt,
      json: true,
      temperature: 0.65,
      maxOutputTokens: 8192,
    });

    let html = sanitizeArticleHtml(data.html || "");
    html = restrictLinksTo(html, allowedHrefs);

    return res.status(200).json({
      ...data,
      html,
      wordCount: wordCount(html),
    });
  } catch (err) {
    console.error("generate-article error:", err);
    return res.status(502).json({ error: "Article generation failed.", details: err.message });
  }
}
