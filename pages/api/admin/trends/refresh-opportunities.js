// pages/api/admin/trends/refresh-opportunities.js
// Section 20: instead of only proposing new URLs, cross-reference fresh
// trend items against the existing site inventory to find posts that a new
// development makes worth updating.

import { requireAdmin } from "@/lib/adminAuth";
import { readTrendCache } from "@/lib/trendsDb";
import { getSiteInventory } from "@/lib/siteInventory";
import { callGemini, MODEL_FLASH } from "@/lib/gemini";

function tokenize(text) {
  return new Set(
    String(text || "")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 3)
  );
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed. Use GET." });
  }
  if (!requireAdmin(req, res)) return;

  const cache = readTrendCache();
  const items = cache.items || [];
  if (!items.length) {
    return res.status(200).json({ candidates: [], message: "No trend data cached yet — fetch trends first." });
  }

  const inventory = getSiteInventory().filter((p) => p.url.startsWith("/blog/"));

  const matches = [];
  for (const page of inventory) {
    const pageTokens = tokenize(`${page.title} ${page.desc}`);
    let best = null;
    for (const item of items) {
      const itemTokens = tokenize(`${item.title} ${item.description}`);
      let overlap = 0;
      itemTokens.forEach((t) => {
        if (pageTokens.has(t)) overlap += 1;
      });
      if (overlap >= 3 && (!best || overlap > best.overlap)) {
        best = { overlap, item };
      }
    }
    if (best) matches.push({ page, trend: best.item, overlapScore: best.overlap });
  }

  const topMatches = matches.sort((a, b) => b.overlapScore - a.overlapScore).slice(0, 8);

  let candidates = topMatches.map((m) => ({
    url: m.page.url,
    title: m.page.title,
    relatedTrend: { title: m.trend.title, source: m.trend.source, publishedDate: m.trend.publishedDate },
    heuristicOverlapScore: m.overlapScore,
    rationale: `Keyword overlap detected (heuristic, verify manually) between this existing post and a recent item from ${m.trend.source}.`,
  }));

  // Best-effort: ask Gemini for a concrete rationale on the top 5 only, to
  // keep latency/cost bounded. If it fails, the heuristic result above still
  // stands — this is an enhancement, not a dependency.
  try {
    if (candidates.length) {
      const top5 = candidates.slice(0, 5);
      const prompt = `For each existing blog post below, given a related fresh industry development, write ONE concise, specific recommendation (1-2 sentences) for what to update in the post (new stats, new screenshots, new examples, updated guidance, additional FAQ, better internal links, etc.) — only suggest things plausibly justified by the described development, do not invent specifics you weren't given.

${top5
  .map(
    (c, i) =>
      `${i + 1}. Post: "${c.title}" (${c.url})\n   Related development: "${c.relatedTrend.title}" (${c.relatedTrend.source})`
  )
  .join("\n")}

Return strict JSON: { "recommendations": [{ "url": string, "recommendation": string }] }`;

      const { data } = await callGemini({ model: MODEL_FLASH, prompt, json: true, temperature: 0.4 });
      const byUrl = new Map((data.recommendations || []).map((r) => [r.url, r.recommendation]));
      candidates = candidates.map((c) => (byUrl.has(c.url) ? { ...c, rationale: byUrl.get(c.url) } : c));
    }
  } catch (err) {
    console.warn("refresh-opportunities: Gemini rationale pass skipped:", err.message);
  }

  return res.status(200).json({ candidates });
}
