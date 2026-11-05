import crypto from "crypto";
import { hasValidSession } from "@/lib/adminAuth";
import { indexNowConfig, submitIndexNow } from "@/lib/indexNow";

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function isAuthorized(req) {
  if (hasValidSession(req)) return true;
  const expected = process.env.INDEXNOW_SUBMISSION_SECRET;
  const supplied = req.headers["x-indexnow-secret"];
  return Boolean(expected && supplied && safeEqual(expected, supplied));
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { host, keyLocation } = indexNowConfig();
    return res.status(200).json({ configured: true, host, keyLocation });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: "Method not allowed." });
  }
  if (!isAuthorized(req)) return res.status(401).json({ error: "Unauthorized." });

  try {
    const urls = req.body?.urls || req.body?.url;
    const result = await submitIndexNow(urls);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
