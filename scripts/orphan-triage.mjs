// scripts/orphan-triage.mjs
// Item #16 of the Master SEO Action Plan: Triage legacy/orphan pages.
// Compares every page route in /pages against the sitemap and internal links,
// then outputs a keep / redirect / kill recommendation per URL.
//
// Run: node scripts/orphan-triage.mjs

import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, extname } from "path";

const ROOT = process.cwd();
const PAGES_DIR = join(ROOT, "pages");
const SITEMAP_FILE = join(ROOT, "public", "sitemap.xml");
const OUT_FILE = join(ROOT, "seo-orphan-page-triage.csv");

const SRC_EXT = [".js", ".jsx", ".mjs", ".ts", ".tsx"];

function collectPages(dir, prefix = "") {
  let routes = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      routes = routes.concat(collectPages(full, `${prefix}/${entry}`));
    } else if (extname(entry) === ".js") {
      if (entry === "_app.js" || entry === "_document.js") continue;
      const name = entry.replace(/\.js$/, "");
      if (name.startsWith("[")) continue;
      const route = `${prefix}/${name === "index" ? "" : name}`;
      routes.push(route.replace(/\/+/g, "/"));
    }
  }
  return routes;
}

function collectSourceFiles(dir) {
  let files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (entry === "node_modules" || entry === ".next") continue;
    if (statSync(full).isDirectory()) {
      files = files.concat(collectSourceFiles(full));
    } else if (SRC_EXT.includes(extname(entry))) {
      files.push(full);
    }
  }
  return files;
}

const normalize = (p) => {
  let s = p.split("?")[0].split("#")[0];
  if (s.length > 1 && s.endsWith("/")) s = s.slice(0, -1);
  return s;
};

const routes = collectPages(PAGES_DIR)
  .filter((r) => r !== "/")
  .map(normalize);

let sitemapLocs = [];
try {
  const sitemap = readFileSync(SITEMAP_FILE, "utf8");
  sitemapLocs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
    normalize(m[1].trim().replace(/^https?:\/\/www\.sibinfotech\.com/, "")),
  );
} catch {
  console.warn("sitemap.xml not found or unreadable");
}
const sitemapSet = new Set(sitemapLocs);

const linked = new Set();
for (const file of collectSourceFiles(ROOT)) {
  const content = readFileSync(file, "utf8");
  const hrefs = [
    ...content.matchAll(
      /href\s*=\s*["'`](\/[\w\-.]+(?:\/[\w\-.]+)*)["'`]/g,
    ),
    ...content.matchAll(
      /href\s*=\s*\{\s*["'`](\/[\w\-.]+(?:\/[\w\-.]+)*)["'`]\s*\}/g,
    ),
    ...content.matchAll(
      /\blink\s*:\s*["'`](\/[\w\-.]+(?:\/[\w\-.]+)*)["'`]/g,
    ),
  ];
  for (const m of hrefs) {
    const h = m[1];
    if (h && h.startsWith("/") && !h.startsWith("//")) {
      linked.add(normalize(h));
    }
  }
}

const rows = [];
for (const route of routes) {
  const inSitemap = sitemapSet.has(route);
  const isLinked = linked.has(route);
  let recommendation;
  if (inSitemap && isLinked) {
    recommendation = "KEEP";
  } else if (!inSitemap && isLinked) {
    recommendation = "KEEP (add to sitemap.xml)";
  } else if (inSitemap && !isLinked) {
    recommendation = "REDIRECT or MERGE into closest service page";
  } else {
    recommendation = "KILL (noindex/remove) or REDIRECT";
  }
  rows.push({
    url: route,
    inSitemap: inSitemap ? "Yes" : "No",
    internallyLinked: isLinked ? "Yes" : "No",
    recommendation,
  });
}

rows.sort((a, b) => {
  if (a.inSitemap !== b.inSitemap) return a.inSitemap === "No" ? -1 : 1;
  if (a.internallyLinked !== b.internallyLinked)
    return a.internallyLinked === "No" ? -1 : 1;
  return a.url.localeCompare(b.url);
});

const csv =
  "URL,In Sitemap,Internally Linked,Recommendation (Item #16 Triage)\n" +
  rows
    .map(
      (r) =>
        `https://www.sibinfotech.com${r.url},${r.inSitemap},${r.internallyLinked},"${r.recommendation}"`,
    )
    .join("\n") +
  "\n";

writeFileSync(OUT_FILE, csv, "utf8");

console.log(`Checked ${routes.length} page routes.`);
console.log(`Output written to ${OUT_FILE}`);
const orphans = rows.filter(
  (r) => r.inSitemap === "No" || r.internallyLinked === "No",
);
console.log(`Candidates needing triage (not sitemapped or not linked): ${orphans.length}`);
for (const o of orphans) {
  console.log(`  ${o.url} | sitemap=${o.inSitemap} | linked=${o.internallyLinked} | ${o.recommendation}`);
}
