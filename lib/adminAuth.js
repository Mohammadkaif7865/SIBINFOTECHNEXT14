// lib/adminAuth.js
// Minimal password-gate session for /admin/trends and its API routes.
// No user accounts: one shared ADMIN_PASSWORD, one HMAC-signed session cookie.

import crypto from "crypto";

const COOKIE_NAME = "sib_admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// Minimal cookie helpers (no external dep — the "cookie" npm package's
// current major version ships a completely different, non-parse/serialize
// API, so it's simpler and more predictable to do this ourselves for the
// one cookie this app sets).
function serializeCookie(name, value, options = {}) {
  let str = `${name}=${encodeURIComponent(value)}`;
  if (options.maxAge != null) str += `; Max-Age=${Math.floor(options.maxAge)}`;
  if (options.path) str += `; Path=${options.path}`;
  if (options.httpOnly) str += "; HttpOnly";
  if (options.secure) str += "; Secure";
  if (options.sameSite) str += `; SameSite=${options.sameSite}`;
  return str;
}

function parseCookies(header) {
  const out = {};
  String(header || "")
    .split(";")
    .forEach((pair) => {
      const idx = pair.indexOf("=");
      if (idx === -1) return;
      const key = pair.slice(0, idx).trim();
      const val = pair.slice(idx + 1).trim();
      if (key) {
        try {
          out[key] = decodeURIComponent(val);
        } catch {
          out[key] = val;
        }
      }
    });
  return out;
}

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not set. Add it to .env.local before using admin login."
    );
  }
  return secret;
}

function sign(value) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("hex");
}

function timingSafeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyPassword(password) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected || !password) return false;
  return timingSafeEqual(String(password), String(expected));
}

function buildToken() {
  const exp = Date.now() + SESSION_TTL_MS;
  const payload = `admin.${exp}`;
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

function isValidToken(token) {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [scope, exp, sig] = parts;
  if (scope !== "admin") return false;
  const expected = sign(`${scope}.${exp}`);
  if (!timingSafeEqual(sig, expected)) return false;
  return Number(exp) > Date.now();
}

/** Returns a Set-Cookie header string for a fresh admin session. */
export function createSessionCookieHeader() {
  const token = buildToken();
  return serializeCookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  });
}

export function createLogoutCookieHeader() {
  return serializeCookie(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/** For getServerSideProps: pass context.req. */
export function hasValidSession(req) {
  try {
    const cookies = parseCookies(req.headers.cookie || "");
    return isValidToken(cookies[COOKIE_NAME]);
  } catch {
    return false;
  }
}

/** For API routes: sends 401 JSON and returns false when unauthenticated. */
export function requireAdmin(req, res) {
  if (hasValidSession(req)) return true;
  res.status(401).json({ error: "Unauthorized. Please log in at /admin/login." });
  return false;
}

export { COOKIE_NAME };
