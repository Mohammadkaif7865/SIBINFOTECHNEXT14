// pages/api/admin/trends/fetch-trends.js
// Returns cached trend candidates, refreshing from live RSS sources when the
// cache is stale (or ?refresh=1 is passed). Never fabricates items — a
// failing source is just reported as unavailable.

import { requireAdmin } from "@/lib/adminAuth";
import { readTrendCache, writeTrendCache } from "@/lib/trendsDb";
import { aggregateTrends } from "@/lib/trendSources";

const CACHE_TTL_MS = 15 * 60 * 1000;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed. Use GET." });
  }
  if (!requireAdmin(req, res)) return;

  const forceRefresh = req.query.refresh === "1";
  const cache = readTrendCache();
  const isStale = !cache.fetchedAt || Date.now() - new Date(cache.fetchedAt).getTime() > CACHE_TTL_MS;

  if (!forceRefresh && !isStale && cache.items?.length) {
    return res.status(200).json({ ...cache, cached: true });
  }

  try {
    const fresh = await aggregateTrends();
    writeTrendCache(fresh);
    return res.status(200).json({ ...fresh, cached: false });
  } catch (err) {
    console.error("fetch-trends error:", err);
    if (cache.items?.length) {
      return res.status(200).json({ ...cache, cached: true, staleFallback: true });
    }
    return res.status(500).json({ error: "Failed to fetch trends and no cache available.", details: err.message });
  }
}
