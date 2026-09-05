// lib/sitemapGenerator.js
// Dynamically generates and syncs sitemap.xml from static pages, remote API blogs, and local trendsDb articles.

import fs from "fs";
import path from "path";
import axios from "axios";
import * as CONSTANTS from "../constants/constants.js";
import { listArticles } from "./trendsDb.js";

const ORIGIN = "https://www.sibinfotech.com";
const EXCLUDED_ROUTES = new Set([
  "/_app",
  "/_document",
  "/404",
  "/thanks",
  "/index",
  "/chat",
  "/sitemap.xml",
]);
const EXCLUDED_PREFIXES = ["/api/", "/admin/", "/trends-insights/"];

function walkPages(dir, base = "") {
  const routes = [];
  try {
    if (!fs.existsSync(dir)) return routes;
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (fs.statSync(full).isDirectory()) {
        routes.push(...walkPages(full, `${base}/${entry}`));
        continue;
      }
      if (!entry.endsWith(".js") && !entry.endsWith(".jsx")) continue;
      if (entry.includes("[")) continue;
      if (entry.includes(" copy")) continue;

      const name = entry.replace(/\.(js|jsx)$/, "");
      const route = name === "index" ? base || "/" : `${base}/${name}`;
      routes.push({ route, file: full });
    }
  } catch (err) {
    console.error("walkPages error:", err);
  }
  return routes;
}

function xmlEscape(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isoOrNull(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

export async function generateSitemapXml() {
  const entries = new Map(); // route -> lastmod

  // 1. Static Pages
  const pagesDir = path.join(process.cwd(), "pages");
  const staticPages = walkPages(pagesDir);
  for (const { route, file } of staticPages) {
    if (EXCLUDED_ROUTES.has(route)) continue;
    if (EXCLUDED_PREFIXES.some((p) => route.startsWith(p))) continue;

    let lastmod = null;
    try {
      lastmod = fs.statSync(file).mtime.toISOString();
    } catch {
      lastmod = new Date().toISOString();
    }
    entries.set(route, lastmod);
  }

  // 2. Remote API Published Blogs
  try {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: CONSTANTS.API_TOKEN,
      },
      timeout: 5000,
    });
    if (res.data?.blogs && Array.isArray(res.data.blogs)) {
      for (const b of res.data.blogs) {
        if (Number(b.publish) === 1 && b.slug) {
          const route = `/blog/${b.slug}`;
          entries.set(route, isoOrNull(b.updatedAt) || isoOrNull(b.bdate) || isoOrNull(b.createdAt));
        }
      }
    }
  } catch (err) {
    console.warn("generateSitemapXml: Could not fetch remote blogs:", err.message);
  }

  // 3. Local TrendsDb Published Articles
  try {
    const publishedTrends = listArticles({ status: "Published" });
    for (const a of publishedTrends?.items || []) {
      if (a.slug) {
        const route = `/blog/${a.slug}`;
        entries.set(route, isoOrNull(a.updatedAt) || isoOrNull(a.publishDate) || isoOrNull(a.createdAt));
      }
    }
  } catch (err) {
    console.warn("generateSitemapXml: Could not load local trendsDb:", err.message);
  }

  // 4. Sort and Build XML
  const sorted = [...entries.entries()].sort(([a], [b]) =>
    a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)
  );

  const body = sorted
    .map(([r, lastmod]) => {
      const loc = `${ORIGIN}${r === "/" ? "/" : r}`;
      const mod = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>${mod}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

  return xml;
}

export async function syncSitemapFile() {
  // sitemap.xml is served dynamically in real-time via pages/sitemap.xml.js.
  // Next.js errors if a conflicting public/sitemap.xml exists alongside pages/sitemap.xml.js.
  try {
    const outPath = path.join(process.cwd(), "public", "sitemap.xml");
    if (fs.existsSync(outPath)) {
      fs.unlinkSync(outPath);
    }
    return true;
  } catch (err) {
    return false;
  }
}
