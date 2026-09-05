// pages/api/admin/trends/validate-outbound-links.js
// Step 9: build an outbound-source shortlist and verify every URL actually
// resolves (200, HTTPS, no broken redirect) before it can be cited. URLs
// that fail verification are dropped, never fabricated or kept anyway.

import { requireAdmin } from "@/lib/adminAuth";
import { verifyUrls } from "@/lib/outboundLinkCheck";
import { suggestAuthoritativeSources } from "@/lib/authoritativeSources";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  if (!requireAdmin(req, res)) return;

  const { category, keywords = [], candidateUrls = [], originSourceUrl } = req.body || {};

  const suggestions = suggestAuthoritativeSources({ category, keywords });
  const urlToMeta = new Map();
  suggestions.forEach((s) => urlToMeta.set(s.url, s.name));
  candidateUrls.forEach((u) => {
    if (u && !urlToMeta.has(u)) urlToMeta.set(u, "Provided source");
  });
  if (originSourceUrl && !urlToMeta.has(originSourceUrl)) {
    urlToMeta.set(originSourceUrl, "Original trend source");
  }

  try {
    const { verified, rejected } = await verifyUrls([...urlToMeta.keys()]);
    return res.status(200).json({
      verified: verified.map((v) => ({ ...v, name: urlToMeta.get(v.url) })),
      rejected: rejected.map((r) => ({ ...r, name: urlToMeta.get(r.url) })),
    });
  } catch (err) {
    console.error("validate-outbound-links error:", err);
    return res.status(502).json({ error: "Outbound link validation failed.", details: err.message });
  }
}
