// lib/authoritativeSources.js
// Curated, hand-verified homepages/blogs for the outbound-source allowlist.
// These are real, stable root URLs for named authoritative organizations —
// used as candidates for outbound-link validation, never as a source of
// specific claims (only the article's actual cited source material is).

export const AUTHORITATIVE_SOURCES = [
  { name: "Google Search Central", url: "https://developers.google.com/search", tags: ["seo", "google", "aeo", "geo"] },
  { name: "Google Ads Help", url: "https://support.google.com/google-ads", tags: ["paid advertising", "google ads"] },
  { name: "Google Developers Blog", url: "https://developers.googleblog.com/", tags: ["google", "ai", "developers"] },
  { name: "Google AI", url: "https://ai.google/", tags: ["ai", "gemini", "google"] },
  { name: "OpenAI", url: "https://openai.com/news/", tags: ["ai", "chatgpt", "openai"] },
  { name: "Anthropic", url: "https://www.anthropic.com/news", tags: ["ai", "claude", "anthropic"] },
  { name: "Microsoft Advertising Blog", url: "https://about.ads.microsoft.com/en-us/blog", tags: ["bing", "microsoft", "paid advertising"] },
  { name: "Meta for Business", url: "https://www.facebook.com/business/news", tags: ["meta", "social media"] },
  { name: "LinkedIn Marketing Blog", url: "https://www.linkedin.com/business/marketing/blog", tags: ["linkedin", "social media", "b2b"] },
  { name: "YouTube Official Blog", url: "https://blog.youtube/", tags: ["youtube", "video", "social media"] },
  { name: "Search Engine Land", url: "https://searchengineland.com/", tags: ["seo", "google", "ai"] },
  { name: "Search Engine Journal", url: "https://www.searchenginejournal.com/", tags: ["seo", "content marketing"] },
  { name: "Think with Google", url: "https://www.thinkwithgoogle.com/", tags: ["marketing strategy", "google", "analytics"] },
  { name: "Ahrefs Blog", url: "https://ahrefs.com/blog/", tags: ["seo", "analytics"] },
  { name: "Semrush Blog", url: "https://www.semrush.com/blog/", tags: ["seo", "analytics", "marketing technology"] },
  { name: "Moz Blog", url: "https://moz.com/blog", tags: ["seo"] },
  { name: "HubSpot Blog", url: "https://blog.hubspot.com/", tags: ["content marketing", "marketing technology"] },
];

export function suggestAuthoritativeSources({ category, keywords = [] } = {}) {
  const haystack = `${category || ""} ${keywords.join(" ")}`.toLowerCase();
  const scored = AUTHORITATIVE_SOURCES.map((s) => {
    const hits = s.tags.filter((t) => haystack.includes(t)).length;
    return { ...s, hits };
  });
  const matched = scored.filter((s) => s.hits > 0).sort((a, b) => b.hits - a.hits);
  return (matched.length ? matched : scored).slice(0, 8);
}
