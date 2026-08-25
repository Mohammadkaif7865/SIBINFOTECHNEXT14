const IG_USERNAME = process.env.IG_USERNAME || "sibinfotech";
const IG_APP_ID = "936619743392459";
const CACHE_TTL_MS = 30 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 8000;
const DEFAULT_PAGES = 5;
const MAX_PAGES = 15;
const DEFAULT_LIMIT = 24;
const MAX_LIMIT = 50;

let cache = { data: null, fetchedAt: 0 };

function buildHeaders() {
  return {
    "x-ig-app-id": IG_APP_ID,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
    Accept: "*/*",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "X-Requested-With": "XMLHttpRequest",
    Referer: `https://www.instagram.com/${IG_USERNAME}/`,
  };
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: buildHeaders(),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Instagram responded with ${res.status}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

function cleanText(text, maxLength) {
  if (!text) return "";
  const singleSpaced = text.replace(/\s+/g, " ").trim();
  if (singleSpaced.length <= maxLength) return singleSpaced;
  return `${singleSpaced.slice(0, maxLength - 1).trimEnd()}…`;
}

function normalizeItem(item) {
  const shortcode = item.code || item.shortcode;
  if (!shortcode) return null;

  const isVideo = item.is_video === true || item.media_type === 2;
  const likes =
    typeof item.like_count === "number"
      ? item.like_count
      : item.edge_media_preview_like?.count ?? null;
  const comments =
    typeof item.comment_count === "number"
      ? item.comment_count
      : item.edge_media_to_comment?.count ?? null;
  const captionRaw =
    item.caption?.text ??
    item.edge_media_to_caption?.edges?.[0]?.node?.text ??
    "";
  const productType = item.product_type || (isVideo ? "clips" : "");

  const rawThumbnail =
    item.thumbnail_src ||
    item.display_url ||
    item.image_versions2?.candidates?.[0]?.url ||
    "";

  return {
    id: `${item.id}`,
    shortcode,
    isVideo,
    url: `https://www.instagram.com/${productType === "clips" ? "reel" : "p"}/${shortcode}/`,
    embedUrl: `https://www.instagram.com/${productType === "clips" ? "reel" : "p"}/${shortcode}/embed`,
    rawThumbnail: rawThumbnail,
    thumbnail: rawThumbnail
      ? `/api/instagram-image?url=${encodeURIComponent(rawThumbnail)}`
      : "",
    caption: cleanText(captionRaw, 140),
    likes,
    comments,
    views:
      typeof item.view_count === "number" && item.view_count > 0
        ? item.view_count
        : null,
    takenAt: item.taken_at || item.taken_at_timestamp || 0,
  };
}

async function fetchReels({ pages, limit }) {
  const profile = await fetchJson(
    `https://www.instagram.com/api/v1/users/web_profile_info/?username=${IG_USERNAME}`
  );
  const user = profile?.data?.user;
  const userId = user?.id;
  if (!userId || !Array.isArray(user.edge_owner_to_timeline_media?.edges)) {
    throw new Error("Unexpected Instagram profile response");
  }

  let items = user.edge_owner_to_timeline_media.edges.map((e) => e.node);
  let maxId =
    user.edge_owner_to_timeline_media.page_info?.end_cursor ?? null;
  let moreAvailable =
    user.edge_owner_to_timeline_media.page_info?.has_next_page ?? false;

  for (let page = 1; page < pages && moreAvailable && items.length < limit * 4; page++) {
    try {
      const feed = await fetchJson(
        `https://www.instagram.com/api/v1/feed/user/${userId}/?count=12${maxId ? `&max_id=${encodeURIComponent(maxId)}` : ""}`
      );
      if (!Array.isArray(feed.items) || feed.items.length === 0) break;
      items = items.concat(feed.items);
      maxId = feed.next_max_id;
      moreAvailable = Boolean(feed.more_available);
      if (!maxId) break;
    } catch {
      break;
    }
  }

  const reels = [];
  const seen = new Set();
  for (const raw of items) {
    const item = normalizeItem(raw);
    if (!item || !item.isVideo || seen.has(item.shortcode)) continue;
    seen.add(item.shortcode);
    reels.push(item);
  }

  reels.sort((a, b) => (b.takenAt || 0) - (a.takenAt || 0));
  return reels.slice(0, limit);
}

export default async function handler(req, res) {
  const clamp = (value, fallback, max) => {
    const parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
    return Math.min(parsed, max);
  };

  const pages = clamp(req.query.pages, DEFAULT_PAGES, MAX_PAGES);
  const limit = clamp(req.query.limit, DEFAULT_LIMIT, MAX_LIMIT);

  const isFresh =
    cache.data?.length > 0 && Date.now() - cache.fetchedAt < CACHE_TTL_MS;

  if (!isFresh) {
    try {
      const fresh = await fetchReels({ pages, limit });
      if (fresh.length > 0) {
        cache.data = fresh;
        cache.fetchedAt = Date.now();
      } else if (!cache.data) {
        throw new Error("No reels found on the Instagram profile");
      }
    } catch (error) {
      if (!cache.data) {
        return res.status(502).json({
          error: "Unable to load Instagram reels right now.",
          detail: error.message,
        });
      }
    }
  }

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1800, stale-while-revalidate=3600"
  );
  return res.status(200).json({
    username: IG_USERNAME,
    count: cache.data.length,
    reels: cache.data,
  });
}
