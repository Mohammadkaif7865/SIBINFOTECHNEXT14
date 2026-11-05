const DEFAULT_ORIGIN = "https://www.sibinfotech.com";
const DEFAULT_KEY = "cf0490a9c153417498047e2eff85e0bd";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_ORIGIN).replace(/\/$/, "");
}

function indexNowKey() {
  return process.env.INDEXNOW_KEY || DEFAULT_KEY;
}

export function indexNowConfig() {
  const origin = siteOrigin();
  const key = indexNowKey();
  return {
    origin,
    host: new URL(origin).host,
    key,
    keyLocation: `${origin}/${key}.txt`,
  };
}

export function normalizeIndexNowUrls(urls) {
  const { origin, host } = indexNowConfig();
  const values = Array.isArray(urls) ? urls : [urls];
  const normalized = new Set();

  for (const value of values) {
    if (typeof value !== "string" || !value.trim()) continue;
    const url = new URL(value.trim(), `${origin}/`);
    if (url.protocol !== "https:" || url.host !== host) {
      throw new Error(`IndexNow URL must belong to ${host}: ${value}`);
    }
    url.hash = "";
    normalized.add(url.toString());
  }

  if (normalized.size === 0) throw new Error("At least one valid URL is required.");
  if (normalized.size > 10000) throw new Error("IndexNow accepts at most 10,000 URLs per request.");
  return [...normalized];
}

export async function submitIndexNow(urls) {
  const urlList = normalizeIndexNowUrls(urls);
  const { host, key, keyLocation } = indexNowConfig();
  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
    signal: AbortSignal.timeout(10000),
  });

  const body = await response.text();
  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow returned HTTP ${response.status}${body ? `: ${body}` : ""}`);
  }

  return { ok: true, status: response.status, submitted: urlList.length, urlList };
}

export async function notifyIndexNow(urls, context = "content update") {
  try {
    const result = await submitIndexNow(urls);
    console.info(`IndexNow: submitted ${result.submitted} URL(s) for ${context} (HTTP ${result.status}).`);
    return result;
  } catch (error) {
    console.error(`IndexNow: ${context} notification failed:`, error.message);
    return { ok: false, error: error.message };
  }
}
