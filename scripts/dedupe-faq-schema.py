# -*- coding: utf-8 -*-
"""
Remove page-level FAQPage declarations on pages that also render <Faq>.

comps/Home/Faq.js now emits FAQPage structured data from the same faqsData it
renders on screen, so the markup and the visible questions cannot drift apart.
Pages that additionally declared their own faqSchema ended up with two
competing FAQPage blocks.

Checking those pairs against the rendered HTML showed the page-level block was
always either an exact duplicate of the component's, or - worse - a set of
questions that appear nowhere on the page. /local-seo-services declared four
questions, none of them visible; /technical-seo-services declared three, none
visible. Google requires FAQ markup to match visible content, so those were
live structured-data mismatches.

This removes the page-level `const faqSchema = {...}` and its <script> render,
leaving the component as the single source of truth.

Only touches files passed on the command line, so the blast radius is explicit.

    python scripts/dedupe-faq-schema.py pages/foo.js pages/bar.js
"""
import io
import re
import sys


def strip_block(text, decl_re):
    """Remove `const faqSchema = { ... };` using brace matching."""
    m = decl_re.search(text)
    if not m:
        return text, False
    brace = text.find("{", m.start())
    if brace == -1:
        return text, False
    depth = 0
    i = brace
    while i < len(text):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                end = i + 1
                while end < len(text) and text[end] in " \t":
                    end += 1
                if end < len(text) and text[end] == ";":
                    end += 1
                while end < len(text) and text[end] in " \t":
                    end += 1
                if end < len(text) and text[end] == "\n":
                    end += 1
                return text[: m.start()] + text[end:], True
        i += 1
    return text, False


SCRIPT_RE = re.compile(
    r'[ \t]*<script\s+type="application/ld\+json"\s*\n?'
    r'[^>]*?dangerouslySetInnerHTML=\{\{\s*\n?'
    r'[^}]*?JSON\.stringify\(faqSchema\),?\s*\n?'
    r'[ \t]*\}\}\s*\n?[ \t]*/>\n?',
    re.S,
)

DECL_RE = re.compile(r"^[ \t]*const\s+faqSchema\s*=\s*", re.M)


def main(paths):
    for path in paths:
        try:
            text = io.open(path, encoding="utf-8").read()
        except OSError as e:
            print("  SKIP %s (%s)" % (path, e))
            continue

        original = text
        text, removed_script = SCRIPT_RE.subn("", text)[0], SCRIPT_RE.search(original) is not None
        text, removed_decl = strip_block(text, DECL_RE)

        if text == original:
            print("  no change  %s" % path)
            continue
        if "faqSchema" in text:
            print("  WARNING: faqSchema still referenced in %s - left untouched" % path)
            continue

        io.open(path, "w", encoding="utf-8").write(text)
        print("  cleaned    %s  (decl=%s script=%s)" % (path, removed_decl, removed_script))
    return 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        raise SystemExit(1)
    raise SystemExit(main(sys.argv[1:]))
