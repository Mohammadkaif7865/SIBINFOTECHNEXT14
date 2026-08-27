# -*- coding: utf-8 -*-
"""
Remove unverifiable aggregateRating / self-authored review markup.

The site published review markup claiming a 4.9 average from 2,022 ratings
(with worstRating "3", i.e. a 3-5 scale) plus per-page blocks claiming 4.8 from
99 reviews, and a hard-coded review by an author called "Verified Client".
The real Google Business Profile has 96 reviews and nobody could account for
the other numbers.

Google's review snippet policy requires ratings to come from reviews collected
on your own site, and self-serving reviews about your own business are not
eligible for rich results regardless. Unverifiable markup risks a manual
action, so it comes out.

Skips pages/tools/schema-markup-generator.js, where the rating fields are
driven by the visitor's own input - that is a tool, not a claim.

Run from the repo root:  python scripts/strip-review-markup.py
"""
import io
import os
import re
import sys

SKIP = {os.path.normpath("pages/tools/schema-markup-generator.js")}


def find_block(text, start_idx):
    """Given the index of the `aggregateRating` key, return (start, end) of the
    whole `aggregateRating: { ... },` declaration, brace-matched."""
    brace = text.find("{", start_idx)
    if brace == -1:
        return None
    depth = 0
    i = brace
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                # swallow a trailing comma and the rest of the line
                while end < len(text) and text[end] in " \t":
                    end += 1
                if end < len(text) and text[end] == ",":
                    end += 1
                while end < len(text) and text[end] in " \t":
                    end += 1
                if end < len(text) and text[end] == "\n":
                    end += 1
                return (start_idx, end)
        i += 1
    return None


def strip_aggregate(text):
    removed = 0
    while True:
        m = re.search(r'^[ \t]*"?aggregateRating"?\s*:', text, re.M)
        if not m:
            break
        span = find_block(text, m.start())
        if not span:
            break
        text = text[: span[0]] + text[span[1] :]
        removed += 1
    return text, removed


def main():
    targets = []
    for root, _dirs, files in os.walk("."):
        if any(p in root for p in (".next", "node_modules", ".git")):
            continue
        for f in files:
            if f.endswith(".js"):
                targets.append(os.path.join(root, f))

    total_files = 0
    total_blocks = 0
    for path in sorted(targets):
        norm = os.path.normpath(os.path.relpath(path, "."))
        if norm in SKIP:
            continue
        try:
            text = io.open(path, encoding="utf-8").read()
        except OSError:
            continue
        if "aggregateRating" not in text:
            continue
        new, n = strip_aggregate(text)
        if n:
            io.open(path, "w", encoding="utf-8").write(new)
            total_files += 1
            total_blocks += n
            print("  %-62s removed %d" % (norm, n))

    print("\nstripped %d aggregateRating block(s) across %d file(s)" % (total_blocks, total_files))
    print("skipped (user-driven tool): %s" % ", ".join(sorted(SKIP)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
