# -*- coding: utf-8 -*-
"""
Consolidate the SIB Infotech Organization entity.

195 pages declared an inline Organization node - usually as a Service's
`provider` - with a name but no @id. Every one of those is an anonymous node,
so Google sees ~195 separate organisations that happen to share a name rather
than one brand entity with 195 supporting mentions. That splits the entity
signals a knowledge panel is built from.

The fix is additive: give each of those nodes the canonical
`@id: https://www.sibinfotech.com/#organization`. Nodes sharing an @id are
merged into one entity, so no existing property is lost and nothing needs
deleting - the per-page url/logo/telephone values simply reinforce the same
entity instead of describing new ones.

Only touches Organization nodes that (a) have no @id already and (b) name
SIB Infotech, so third-party organisations in the markup are left alone.

Run from the repo root:  python scripts/link-org-entity.py
"""
import io
import os
import re
import sys
import glob

ORG_ID = "https://www.sibinfotech.com/#organization"
TYPE_RE = re.compile(r'(^[ \t]*)"@type":\s*"Organization",[ \t]*\n', re.M)


def node_bounds(text, type_line_start):
    """Find the enclosing { ... } for the object whose @type line starts here."""
    open_brace = text.rfind("{", 0, type_line_start)
    if open_brace == -1:
        return None
    depth = 0
    i = open_brace
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return (open_brace, i + 1)
        i += 1
    return None


def process(text):
    added = 0
    pos = 0
    while True:
        m = TYPE_RE.search(text, pos)
        if not m:
            break
        bounds = node_bounds(text, m.start())
        if not bounds:
            pos = m.end()
            continue
        body = text[bounds[0] : bounds[1]]

        already_has_id = re.search(r'"@id"\s*:', body) is not None
        is_sib = "SIB Infotech" in body

        if already_has_id or not is_sib:
            pos = m.end()
            continue

        indent = m.group(1)
        insertion = '%s"@id": "%s",\n' % (indent, ORG_ID)
        text = text[: m.end()] + insertion + text[m.end() :]
        added += 1
        pos = m.end() + len(insertion)
    return text, added


def main():
    files = sorted(
        glob.glob("pages/**/*.js", recursive=True)
        + glob.glob("comps/**/*.js", recursive=True)
    )
    total_files = 0
    total_added = 0
    for path in files:
        if "node_modules" in path or "schema-markup-generator" in path:
            continue
        try:
            text = io.open(path, encoding="utf-8").read()
        except OSError:
            continue
        if '"@type": "Organization"' not in text:
            continue
        new, n = process(text)
        if n:
            io.open(path, "w", encoding="utf-8").write(new)
            total_files += 1
            total_added += n
            print("  %-62s +%d" % (os.path.normpath(path), n))

    print("\nlinked %d Organization node(s) across %d file(s) to %s"
          % (total_added, total_files, ORG_ID))
    return 0


if __name__ == "__main__":
    sys.exit(main())
