# -*- coding: utf-8 -*-
"""
Audit every JSON-LD block in the built site.

Reads .next/server/pages/**/*.html, parses each <script type="application/ld+json">
and reports parse failures, unresolved @id references, missing required
properties, duplicate types on a page, and pages carrying no schema at all.

Run after `npx next build`:
    python scripts/audit-schema.py
"""
import io
import os
import re
import json
import glob
from collections import Counter, defaultdict

LD_RE = re.compile(
    r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', re.S | re.I
)

BUILD_DIR = os.path.join(".next", "server", "pages")

# type -> properties Google needs for the relevant rich result
REQUIRED = {
    "FAQPage": ["mainEntity"],
    "BreadcrumbList": ["itemListElement"],
    "Service": ["name"],
    "LocalBusiness": ["name", "address"],
    "Organization": ["name", "url"],
    "WebPage": ["name"],
    "Article": ["headline", "author", "datePublished"],
    "BlogPosting": ["headline", "author", "datePublished"],
    "Product": ["name"],
    "VideoObject": ["name", "thumbnailUrl", "uploadDate"],
}


def types_of(node):
    t = node.get("@type")
    if isinstance(t, list):
        return [str(x) for x in t]
    return [str(t)] if t else []


def walk(node, fn):
    if isinstance(node, dict):
        fn(node)
        for v in node.values():
            walk(v, fn)
    elif isinstance(node, list):
        for v in node:
            walk(v, fn)


def main():
    pages = sorted(glob.glob(os.path.join(BUILD_DIR, "**", "*.html"), recursive=True))
    if not pages:
        print("No built pages found. Run: npx next build")
        return 1

    parse_errors = []
    no_schema = []
    type_counts = Counter()
    per_page_types = {}
    missing_props = defaultdict(list)
    dup_types = []
    all_ids = set()
    id_refs = defaultdict(list)

    for path in pages:
        rel = os.path.relpath(path, BUILD_DIR).replace("\\", "/")[:-5]
        url = "/" if rel == "index" else "/" + rel
        html = io.open(path, encoding="utf-8", errors="ignore").read()
        blocks = LD_RE.findall(html)

        if not blocks:
            no_schema.append(url)
            continue

        page_types = []
        for raw in blocks:
            raw = raw.strip()
            try:
                data = json.loads(raw)
            except Exception as e:
                parse_errors.append((url, str(e)[:90], raw[:70]))
                continue

            def visit(node):
                ts = types_of(node)
                for t in ts:
                    page_types.append(t)
                    type_counts[t] += 1
                    req = REQUIRED.get(t)
                    if req:
                        for p in req:
                            if p not in node:
                                missing_props["%s.%s" % (t, p)].append(url)
                nid = node.get("@id")
                if nid and len(node) > 1:
                    all_ids.add(nid)
                elif nid and len(node) == 1:
                    id_refs[nid].append(url)

            walk(data, visit)

        per_page_types[url] = page_types
        c = Counter(page_types)
        for t, n in c.items():
            if n > 1 and t in ("FAQPage", "BreadcrumbList", "LocalBusiness", "Organization", "WebPage"):
                dup_types.append((url, t, n))

    print("=" * 74)
    print("SCHEMA AUDIT  -  %d pages" % len(pages))
    print("=" * 74)

    print("\n1. JSON PARSE ERRORS: %d" % len(parse_errors))
    for u, e, snip in parse_errors[:10]:
        print("   %-46s %s" % (u, e))

    print("\n2. PAGES WITH NO SCHEMA AT ALL: %d" % len(no_schema))
    for u in no_schema[:20]:
        print("   %s" % u)

    print("\n3. TYPES IN USE")
    for t, n in type_counts.most_common(28):
        print("   %-34s %4d" % (t, n))

    print("\n4. MISSING REQUIRED PROPERTIES")
    if not missing_props:
        print("   none")
    for k in sorted(missing_props):
        urls = missing_props[k]
        print("   %-32s %4d pages   e.g. %s" % (k, len(urls), urls[0]))

    print("\n5. DUPLICATE SINGLETON TYPES ON ONE PAGE: %d" % len(dup_types))
    for u, t, n in dup_types[:15]:
        print("   %-46s %s x%d" % (u, t, n))

    print("\n6. UNRESOLVED @id REFERENCES")
    unresolved = {k: v for k, v in id_refs.items() if k not in all_ids}
    if not unresolved:
        print("   none - every referenced @id is defined somewhere")
    for k, v in list(unresolved.items())[:10]:
        print("   %-58s %d pages" % (k, len(v)))

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
