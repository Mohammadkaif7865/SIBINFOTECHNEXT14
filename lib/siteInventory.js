// lib/siteInventory.js
// Shared site content inventory used for keyword-cannibalization checks and
// internal-link suggestions. Extracted from the original inline copy in
// pages/api/admin/check-cannibalization.js so the new /admin/trends tools
// and the existing keyword-cannibalization tool read the same data.

import fs from "fs";
import path from "path";

let cached = null;
let cachedAt = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

export function getSiteInventory() {
  if (cached && Date.now() - cachedAt < CACHE_TTL_MS) return cached;

  try {
    const tsvPath = path.join(process.cwd(), "sitemap-meta-table.tsv");
    if (fs.existsSync(tsvPath)) {
      const content = fs.readFileSync(tsvPath, "utf-8");
      const lines = content.split("\n").filter((l) => l.trim().length > 0);
      const inventory = [];

      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split("\t");
        if (parts.length >= 2) {
          const url = parts[0]?.replace("https://www.sibinfotech.com", "").trim() || "/";
          const title = parts[1]?.trim() || "";
          const desc = parts[2]?.trim() || "";
          if (url) inventory.push({ url, title, desc });
        }
      }
      cached = inventory;
      cachedAt = Date.now();
      return inventory;
    }
  } catch (err) {
    console.error("siteInventory: error reading sitemap inventory:", err);
  }

  cached = FALLBACK_INVENTORY;
  cachedAt = Date.now();
  return FALLBACK_INVENTORY;
}

const FALLBACK_INVENTORY = [
  { url: "/search-engine-optimization-seo-services", title: "Top SEO Services in India | SIB Infotech", desc: "Best SEO Agency in Mumbai & Delhi providing full SEO services." },
  { url: "/ai-seo-services", title: "Expert AI SEO Services in India", desc: "AI-powered SEO and visibility in AI search." },
  { url: "/chatgpt-seo-services", title: "ChatGPT SEO Services", desc: "Get cited and recommended in ChatGPT." },
  { url: "/generative-engine-optimization", title: "Generative Engine Optimization (GEO) Services", desc: "Optimize for generative AI search engines." },
  { url: "/search-ai-optimization", title: "Answer Engine Optimization (AEO) & Search AI Optimization", desc: "AEO and voice/AI search optimization." },
  { url: "/google-ads-management-services", title: "Google Ads Management Services", desc: "PPC and Google Ads campaigns." },
  { url: "/pay-per-click-ppc-management-services", title: "PPC Management Services", desc: "Pay-per-click agency in Mumbai & Delhi." },
  { url: "/website-designing-services", title: "Web Designing Services Company", desc: "Custom responsive web design services." },
  { url: "/shopify-development-services", title: "Shopify Development Services", desc: "Shopify e-commerce development." },
  { url: "/wordpress-website-design-development-services", title: "WordPress Web Design & Development", desc: "WordPress design and development agency." },
  { url: "/digital-marketing-services", title: "Digital Marketing Services", desc: "Full-funnel digital marketing services." },
  { url: "/social-media-marketing-services", title: "Social Media Marketing Services", desc: "Social media marketing and management." },
  { url: "/blog", title: "SIB Infotech Blog", desc: "SEO, AI and digital marketing insights." },
];

/**
 * Scores inventory pages against free-text query terms (title/url/desc word overlap).
 * Used for both the cannibalization checker and internal-link suggestions.
 */
export function findRelevantPages(queryText, { limit = 15, inventory } = {}) {
  const list = inventory || getSiteInventory();
  const terms = String(queryText || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2);

  return list
    .map((page) => {
      const combined = `${page.url} ${page.title} ${page.desc}`.toLowerCase();
      let score = 0;
      terms.forEach((term) => {
        if (combined.includes(term)) score += 1;
      });
      return { ...page, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
