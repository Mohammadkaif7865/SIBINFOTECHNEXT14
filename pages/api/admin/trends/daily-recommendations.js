// pages/api/admin/trends/daily-recommendations.js
// Section 19: daily digest derived entirely from the current trend cache —
// no separate fabricated "recommendations" dataset, just re-ranked views of
// real fetched items so today's picks are actually grounded in fresh data.

import { requireAdmin } from "@/lib/adminAuth";
import { readTrendCache } from "@/lib/trendsDb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed. Use GET." });
  }
  if (!requireAdmin(req, res)) return;

  const cache = readTrendCache();
  const items = cache.items || [];

  if (!items.length) {
    return res.status(200).json({
      fetchedAt: cache.fetchedAt,
      empty: true,
      message: "No trend data cached yet — fetch trends first.",
    });
  }

  const topTrends = [...items].sort((a, b) => b.seoOpportunityScore - a.seoOpportunityScore).slice(0, 10);

  const urgent = items
    .filter((i) => i.opportunityClass === "Breaking")
    .sort((a, b) => new Date(b.publishedDate || 0) - new Date(a.publishedDate || 0))
    .slice(0, 3);
  const urgentFilled =
    urgent.length >= 3
      ? urgent
      : [...urgent, ...items.filter((i) => i.opportunityClass === "High Priority" && !urgent.includes(i))].slice(0, 3);

  const recommendedPool = items.filter((i) =>
    ["High Priority", "Breaking", "Trending"].includes(i.opportunityClass)
  );
  const seenCategories = new Set();
  const recommended = [];
  for (const item of recommendedPool.sort((a, b) => b.seoOpportunityScore - a.seoOpportunityScore)) {
    if (recommended.length >= 5) break;
    if (seenCategories.has(item.category) && recommended.length < recommendedPool.length - 1) continue;
    seenCategories.add(item.category);
    recommended.push(item);
  }
  while (recommended.length < 5 && recommended.length < recommendedPool.length) {
    const next = recommendedPool.find((i) => !recommended.includes(i));
    if (!next) break;
    recommended.push(next);
  }

  const aiTools = items.filter((i) => i.category === "AI").slice(0, 8);
  const googleChanges = items.filter((i) => i.opportunityClass === "Google Update").slice(0, 8);

  const termCounts = new Map();
  const trackedTerms = ["gemini", "chatgpt", "claude", "aeo", "geo", "ai overview", "core update", "performance max"];
  for (const item of items) {
    const text = `${item.title} ${item.description}`.toLowerCase();
    trackedTerms.forEach((term) => {
      if (text.includes(term)) termCounts.set(term, (termCounts.get(term) || 0) + 1);
    });
  }
  const emergingKeywords = [...termCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([term, count]) => ({ term, mentionsThisFetch: count }));

  return res.status(200).json({
    fetchedAt: cache.fetchedAt,
    topTrends,
    recommended,
    urgent: urgentFilled,
    aiTools,
    googleChanges,
    emergingKeywords,
  });
}
