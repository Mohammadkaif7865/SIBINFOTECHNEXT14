// pages/api/admin/login.js
import { verifyPassword, createSessionCookieHeader } from "@/lib/adminAuth";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const { password } = req.body || {};

  if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_SESSION_SECRET) {
    return res.status(500).json({
      error: "Admin login is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in .env.local.",
    });
  }

  if (!verifyPassword(password)) {
    return res.status(401).json({ error: "Incorrect password." });
  }

  res.setHeader("Set-Cookie", createSessionCookieHeader());
  return res.status(200).json({ ok: true });
}
