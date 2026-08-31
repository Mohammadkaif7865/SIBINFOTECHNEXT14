# -*- coding: utf-8 -*-
"""
Scan the codebase for the Font Awesome / Bootstrap Icon classes actually used,
resolve each to its glyph codepoint, and write glyphs.json for the subsetter.

Run from the repo root:  python scripts/iconsubset/collect.py
"""
import io
import re
import json
import os
import glob

FA_UTILITY = {
    "fa-solid", "fa-regular", "fa-brands", "fa-light", "fa-thin", "fa-duotone",
    "fa-fw", "fa-spin", "fa-pulse", "fa-border", "fa-pull-left", "fa-pull-right",
    "fa-stack", "fa-stack-1x", "fa-stack-2x", "fa-inverse", "fa-ul", "fa-li",
    "fa-lg", "fa-sm", "fa-xs", "fa-xl", "fa-2xl",
    "fa-1x", "fa-2x", "fa-3x", "fa-4x", "fa-5x", "fa-6x", "fa-7x", "fa-8x",
    "fa-9x", "fa-10x",
    "fa-beat", "fa-fade", "fa-flip", "fa-shake", "fa-bounce",
    "fa-beat-fade", "fa-spin-pulse", "fa-spin-reverse",
    "fa-rotate-90", "fa-rotate-180", "fa-rotate-270", "fa-rotate-by",
    "fa-flip-horizontal", "fa-flip-vertical", "fa-flip-both", "fa-layers",
}

# all.min.css groups aliases onto one rule, e.g.
#   .fa-bars:before,.fa-navicon:before{content:"\f0c9"}
# so capture the whole selector list and split it. Matching a single selector
# silently misses every aliased icon, which would drop them from the subset
# and make them disappear from the site.
RULE_RE = re.compile(r"([^{}]+)\{content:\"\\([0-9a-fA-F]+)\"\}")
NAME_RE = re.compile(r"\.(fa-[a-z0-9-]+):{1,2}before")
BI_RULE_RE = re.compile(r"([^{}]+)\{\s*content:\s*\"\\([0-9a-fA-F]+)\"")
BI_NAME_RE = re.compile(r"\.(bi-[a-z0-9-]+):{1,2}before")

FA_CSS_DIR = "node_modules/@fortawesome/fontawesome-free/css/"
BI_CSS = "node_modules/bootstrap-icons/font/bootstrap-icons.css"


def codepoints(path, rule_re=RULE_RE, name_re=NAME_RE):
    text = io.open(path, encoding="utf-8").read()
    out = {}
    for rule in rule_re.finditer(text):
        cp = rule.group(2)
        for name in name_re.finditer(rule.group(1)):
            out[name.group(1)] = cp
    return out


def scan_source():
    used_fa, used_bi, direct_fa = set(), set(), set()
    targets = []
    for d in ("comps", "pages", "styles"):
        targets += [
            f for f in glob.glob(d + "/**/*", recursive=True)
            if f.endswith((".js", ".jsx", ".css"))
        ]
    for f in targets:
        try:
            text = io.open(f, encoding="utf-8", errors="ignore").read()
        except OSError:
            continue
        for m in re.finditer(r"\bfa-[a-z0-9-]+", text):
            name = m.group(0)
            if name not in FA_UTILITY:
                used_fa.add(name)
        for m in re.finditer(r"\bbi-[a-z0-9-]+", text):
            used_bi.add(m.group(0))
        for m in re.finditer(r'content:\s*["\']\\([0-9a-fA-F]+)["\']', text):
            direct_fa.add(m.group(1).lower())
    return used_fa, used_bi, direct_fa


def main():
    used_fa, used_bi, direct_fa = scan_source()

    all_cp = codepoints(FA_CSS_DIR + "all.min.css")
    brands = set(codepoints(FA_CSS_DIR + "brands.min.css"))

    solid, brand_glyphs, unresolved_fa = set(), set(), []
    for name in sorted(used_fa):
        cp = all_cp.get(name)
        if cp is None:
            unresolved_fa.append(name)
        elif name in brands:
            brand_glyphs.add(cp)
        else:
            solid.add(cp)

    all_brands_cp = set(codepoints(FA_CSS_DIR + "brands.min.css").values())
    for cp in direct_fa:
        if cp in all_brands_cp:
            brand_glyphs.add(cp)
        else:
            solid.add(cp)

    bi_cp = codepoints(BI_CSS, BI_RULE_RE, BI_NAME_RE)
    bi_glyphs, unresolved_bi = set(), []
    for name in sorted(used_bi):
        cp = bi_cp.get(name)
        if cp is None:
            unresolved_bi.append(name)
        else:
            bi_glyphs.add(cp)

    out = {
        "solid": sorted(solid),
        "brands": sorted(brand_glyphs),
        "bi": sorted(bi_glyphs),
        "fa_names": sorted(used_fa),
        "bi_names": sorted(used_bi),
        "unresolved_fa": unresolved_fa,
        "unresolved_bi": unresolved_bi,
    }
    os.makedirs("scripts/iconsubset", exist_ok=True)
    json.dump(out, io.open("scripts/iconsubset/glyphs.json", "w", encoding="utf-8"), indent=1)

    print("Font Awesome classes in source : %d" % len(used_fa))
    print("  solid glyphs                 : %d" % len(solid))
    print("  brands glyphs                : %d" % len(brand_glyphs))
    print("  not real FA icons (ignored)  : %d" % len(unresolved_fa))
    if unresolved_fa:
        print("    " + ", ".join(unresolved_fa[:14]))
    print("Bootstrap Icon classes         : %d -> %d glyphs" % (len(used_bi), len(bi_glyphs)))
    if unresolved_bi:
        print("  unresolved BI: %s" % unresolved_bi)


if __name__ == "__main__":
    main()
