// lib/trendsDb.js
// File-based JSON store for the AI Trends & Content Publishing system.
// Single-instance internal tool — not a real RDBMS. Writes are atomic
// (write to a temp file, then rename) so a crash mid-write can't corrupt
// the store.

import fs from "fs";
import path from "path";
import crypto from "crypto";

const DATA_DIR = path.join(process.cwd(), "data", "trends");
const ARTICLES_FILE = path.join(DATA_DIR, "articles.json");
const TREND_CACHE_FILE = path.join(DATA_DIR, "trend-cache.json");

function ensureFile(file, defaultValue) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(defaultValue, null, 2), "utf8");
  }
}

function readJson(file, defaultValue) {
  ensureFile(file, defaultValue);
  try {
    const raw = fs.readFileSync(file, "utf8");
    return raw.trim() ? JSON.parse(raw) : defaultValue;
  } catch (err) {
    console.error(`trendsDb: failed to read ${file}, resetting.`, err);
    return defaultValue;
  }
}

function writeJsonAtomic(file, value) {
  ensureFile(file, value);
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(value, null, 2), "utf8");
  fs.renameSync(tmp, file);
}

// ---------- Articles ----------

export function listArticles({ status, category, search, limit, offset = 0 } = {}) {
  let items = readJson(ARTICLES_FILE, []);

  if (status) items = items.filter((a) => a.status === status);
  if (category) items = items.filter((a) => a.category === category);
  if (search) {
    const q = search.toLowerCase();
    items = items.filter(
      (a) =>
        a.title?.toLowerCase().includes(q) ||
        a.primaryKeyword?.toLowerCase().includes(q) ||
        a.slug?.toLowerCase().includes(q)
    );
  }

  items = [...items].sort(
    (a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)
  );

  const total = items.length;
  if (typeof limit === "number") items = items.slice(offset, offset + limit);
  return { items, total };
}

export function getArticleById(id) {
  const items = readJson(ARTICLES_FILE, []);
  return items.find((a) => a.id === id) || null;
}

export function getArticleBySlug(slug) {
  const items = readJson(ARTICLES_FILE, []);
  return items.find((a) => a.slug === slug) || null;
}

export function slugExists(slug, excludeId) {
  const items = readJson(ARTICLES_FILE, []);
  return items.some((a) => a.slug === slug && a.id !== excludeId);
}

export function createArticle(data) {
  const items = readJson(ARTICLES_FILE, []);
  const now = new Date().toISOString();
  const record = {
    id: crypto.randomUUID(),
    status: "Draft",
    html: "",
    excerpt: "",
    seoTitle: "",
    metaDescription: "",
    primaryKeyword: "",
    secondaryKeywords: [],
    semanticKeywords: [],
    searchIntent: "",
    canonicalUrl: "",
    robots: "index",
    ogTitle: "",
    ogDescription: "",
    featuredImage: "",
    featuredImageAlt: "",
    category: "",
    tags: [],
    author: "Radhey Shyam",
    createdAt: now,
    updatedAt: now,
    publishDate: null,
    scheduledAt: null,
    internalLinks: [],
    externalLinks: [],
    sourceReferences: [],
    faqs: [],
    cannibalizationCheck: null,
    seoOpportunityScore: null,
    wordCount: 0,
    topicResearch: null,
    ...data,
  };
  items.push(record);
  writeJsonAtomic(ARTICLES_FILE, items);
  return record;
}

export function updateArticle(id, patch) {
  const items = readJson(ARTICLES_FILE, []);
  const idx = items.findIndex((a) => a.id === id);
  if (idx === -1) return null;
  items[idx] = { ...items[idx], ...patch, id, updatedAt: new Date().toISOString() };
  writeJsonAtomic(ARTICLES_FILE, items);
  return items[idx];
}

export function deleteArticle(id) {
  const items = readJson(ARTICLES_FILE, []);
  const next = items.filter((a) => a.id !== id);
  const removed = next.length !== items.length;
  if (removed) writeJsonAtomic(ARTICLES_FILE, next);
  return removed;
}

// ---------- Trend cache ----------

export function readTrendCache() {
  return readJson(TREND_CACHE_FILE, { fetchedAt: null, items: [], sourceStatus: [] });
}

export function writeTrendCache(cache) {
  writeJsonAtomic(TREND_CACHE_FILE, cache);
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}
