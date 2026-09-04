# -*- coding: utf-8 -*-
"""
Verify every icon class used anywhere in the codebase still has a glyph in the
generated subset fonts.

Run after build.py. A non-zero exit means an icon would render as a blank box
somewhere on the site.

    python scripts/iconsubset/verify.py
"""
import io
import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import collect  # noqa: E402
from fontTools.ttLib import TTFont  # noqa: E402

SUBSETS = {
    "solid": "public/assets/fonts/icons/fa-solid-900.subset.woff2",
    "brands": "public/assets/fonts/icons/fa-brands-400.subset.woff2",
    "regular": "public/assets/fonts/icons/fa-regular-400.subset.woff2",
    "bi": "public/assets/fonts/icons/bootstrap-icons.subset.woff2",
}


def cmap_of(path):
    font = TTFont(path)
    out = set()
    for table in font["cmap"].tables:
        out |= set(table.cmap.keys())
    return out


def main():
    used_fa, used_bi, direct_fa, direct_bi = collect.scan_source()
    all_cp = collect.codepoints(collect.FA_CSS_DIR + "all.min.css")
    brands = set(collect.codepoints(collect.FA_CSS_DIR + "brands.min.css"))
    bi_cp = collect.codepoints(collect.BI_CSS, collect.BI_RULE_RE, collect.BI_NAME_RE)

    have = {k: cmap_of(v) for k, v in SUBSETS.items()}

    missing = []
    not_an_icon = []

    for name in sorted(used_fa):
        cp = all_cp.get(name)
        if cp is None:
            not_an_icon.append(name)
            continue
        target = "brands" if name in brands else "solid"
        if int(cp, 16) not in have[target]:
            missing.append("%s (%s, U+%s)" % (name, target, cp))

    for name in sorted(used_bi):
        cp = bi_cp.get(name)
        if cp is None:
            not_an_icon.append(name)
            continue
        if int(cp, 16) not in have["bi"]:
            missing.append("%s (bootstrap, U+%s)" % (name, cp))

    all_bi_cps = set(c.lower() for c in bi_cp.values())
    for cp in direct_bi:
        if cp in all_bi_cps and int(cp, 16) not in have["bi"]:
            missing.append("CSS direct Bootstrap icon (U+%s)" % cp)

    total = len(used_fa) + len(used_bi) + len(direct_bi)
    print("icon classes found in source : %d" % total)
    print("  resolved and present       : %d" % (total - len(missing) - len(not_an_icon)))
    print("  not real icons (ignored)   : %d" % len(not_an_icon))
    if not_an_icon:
        print("     " + ", ".join(not_an_icon[:14]))
    print("  MISSING FROM SUBSET        : %d" % len(missing))
    for m in missing:
        print("     " + m)

    if missing:
        print("\nFAIL - rebuild the subsets: python scripts/iconsubset/collect.py && python scripts/iconsubset/build.py")
        return 1
    print("\nPASS - every icon used on the site has a glyph.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
