#!/usr/bin/env node
import { execFileSync } from "node:child_process";

const ORIGIN = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.sibinfotech.com").replace(/\/$/, "");
const KEY = process.env.INDEXNOW_KEY || "cf0490a9c153417498047e2eff85e0bd";
const BASE = process.env.INDEXNOW_BASE_REF || "HEAD~1";

function routeForPage(file) {
  const normalized = file.replace(/\\/g, "/");
  if (!normalized.startsWith("pages/") || !/\.(js|jsx|ts|tsx)$/.test(normalized)) return null;
  if (normalized.startsWith("pages/api/") || normalized.includes("[")) return null;
  const route = normalized.replace(/^pages/, "").replace(/\.(js|jsx|ts|tsx)$/, "").replace(/\/index$/, "") || "/";
  if (["/_app", "/_document", "/404", "/thanks", "/admin"].some((item) => route === item || route.startsWith(`${item}/`))) return null;
  return route;
}

function changedRoutes() {
  const output = execFileSync("git", ["diff", "--name-status", BASE, "HEAD", "--", "pages"], { encoding: "utf8" });
  const routes = new Set();
  for (const line of output.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const columns = line.split(/\t+/);
    for (const file of columns.slice(1)) {
      const route = routeForPage(file);
      if (route) routes.add(`${ORIGIN}${route}`);
    }
  }
  return [...routes];
}

function explicitRoutes() {
  const supplied = [
    ...process.argv.slice(2),
    ...(process.env.INDEXNOW_URLS || "").split(","),
  ];
  return supplied
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => {
      const url = new URL(value, `${ORIGIN}/`);
      if (url.protocol !== "https:" || url.host !== new URL(ORIGIN).host) {
        throw new Error(`URL must belong to ${new URL(ORIGIN).host}: ${value}`);
      }
      url.hash = "";
      return url.toString();
    });
}

async function submit(urlList) {
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(ORIGIN).host,
      key: KEY,
      keyLocation: `${ORIGIN}/${KEY}.txt`,
      urlList,
    }),
  });
  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }
  console.log(`IndexNow accepted ${urlList.length} changed page URL(s) (HTTP ${response.status}).`);
}

const requestedUrls = explicitRoutes();
if (process.env.INDEXNOW_ENABLED !== "true" && requestedUrls.length === 0) {
  console.log("IndexNow deployment submission skipped; set INDEXNOW_ENABLED=true in production.");
  process.exit(0);
}

try {
  const urls = [...new Set([...requestedUrls, ...(process.env.INDEXNOW_ENABLED === "true" ? changedRoutes() : [])])];
  if (urls.length === 0) console.log("IndexNow: no changed static page routes detected.");
  else await submit(urls);
} catch (error) {
  // Search-engine notification failures must never fail a production build.
  console.error(`IndexNow deployment submission failed: ${error.message}`);
}
