// lib/outboundLinkCheck.js
// Verifies a candidate outbound source URL actually resolves before it is
// allowed into an article. Never fabricate a source — if this can't
// confirm a URL, the caller must drop it.

const TIMEOUT_MS = 7000;

export async function verifyUrl(url) {
  const result = { url, ok: false, status: null, finalUrl: url, https: false, error: null };

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { ...result, error: "Malformed URL" };
  }
  if (!/^https?:$/.test(parsed.protocol)) {
    return { ...result, error: "Unsupported protocol" };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SIBInfotechTrendsBot/1.0)" },
    });

    // Some sites reject HEAD (405/403) — retry with GET before giving up.
    if (!res.ok && [403, 405, 501].includes(res.status)) {
      res = await fetch(url, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": "Mozilla/5.0 (compatible; SIBInfotechTrendsBot/1.0)" },
      });
    }

    clearTimeout(timer);
    return {
      url,
      ok: res.ok,
      status: res.status,
      finalUrl: res.url || url,
      https: (res.url || url).startsWith("https://"),
      error: res.ok ? null : `HTTP ${res.status}`,
    };
  } catch (err) {
    clearTimeout(timer);
    return { ...result, error: err.name === "AbortError" ? "Timed out" : err.message };
  }
}

/** Verifies many URLs in parallel and returns only the ones that resolved. */
export async function verifyUrls(urls) {
  const unique = [...new Set((urls || []).filter(Boolean))];
  const results = await Promise.all(unique.map((u) => verifyUrl(u)));
  return {
    verified: results.filter((r) => r.ok),
    rejected: results.filter((r) => !r.ok),
    all: results,
  };
}
