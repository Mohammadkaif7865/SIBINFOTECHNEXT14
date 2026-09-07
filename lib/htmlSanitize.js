// lib/htmlSanitize.js
// Server-side HTML sanitization for AI-generated / editor-produced article
// bodies before they are written to the JSON store or rendered publicly.

import sanitizeHtml from "sanitize-html";

const ALLOWED_TAGS = [
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "br", "hr",
  "strong", "b", "em", "i", "u", "s", "mark",
  "ul", "ol", "li",
  "a", "img", "figure", "figcaption",
  "blockquote", "code", "pre",
  "table", "thead", "tbody", "tr", "th", "td",
  "span", "div",
];

const ALLOWED_ATTRIBUTES = {
  a: ["href", "target", "rel", "title"],
  img: ["src", "alt", "width", "height", "loading"],
  th: ["colspan", "rowspan"],
  td: ["colspan", "rowspan"],
  "*": ["class"],
};

export function sanitizeArticleHtml(html) {
  return sanitizeHtml(String(html || ""), {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: { img: ["http", "https"] },
    transformTags: {
      a: (tagName, attribs) => {
        const isExternal = /^https?:\/\//i.test(attribs.href || "") &&
          !attribs.href.includes("sibinfotech.com");
        return {
          tagName: "a",
          attribs: {
            ...attribs,
            ...(isExternal ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {}),
          },
        };
      },
    },
    exclusiveFilter: (frame) =>
      frame.tag === "a" && !frame.attribs.href, // drop empty anchors
  }).trim();
}

/**
 * Safety net against a model citing a URL it wasn't given: any <a href>
 * not in allowedHrefs is unwrapped to plain text rather than dropped
 * silently, so the sentence still reads naturally.
 */
export function restrictLinksTo(html, allowedHrefs = []) {
  const allowed = new Set(allowedHrefs.map((h) => String(h).replace(/\/$/, "")));
  return sanitizeHtml(String(html || ""), {
    allowedTags: ALLOWED_TAGS,
    allowedAttributes: ALLOWED_ATTRIBUTES,
    allowedSchemes: ["http", "https", "mailto"],
    transformTags: {
      a: (tagName, attribs) => {
        const normalized = String(attribs.href || "").replace(/\/$/, "");
        if (!allowed.has(normalized)) {
          return { tagName: "span", attribs: {} };
        }
        const isExternal = /^https?:\/\//i.test(attribs.href) && !attribs.href.includes("sibinfotech.com");
        return {
          tagName: "a",
          attribs: {
            href: attribs.href,
            ...(isExternal ? { target: "_blank", rel: "noopener noreferrer nofollow" } : {}),
          },
        };
      },
    },
  }).trim();
}

export function stripHtmlToText(html) {
  return sanitizeHtml(String(html || ""), { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, " ")
    .trim();
}

export function wordCount(html) {
  const text = stripHtmlToText(html);
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}
