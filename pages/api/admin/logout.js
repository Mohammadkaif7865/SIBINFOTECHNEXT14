// pages/api/admin/logout.js
import { createLogoutCookieHeader } from "@/lib/adminAuth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }
  res.setHeader("Set-Cookie", createLogoutCookieHeader());
  return res.status(200).json({ ok: true });
}
