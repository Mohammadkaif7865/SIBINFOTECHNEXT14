# Article 20 — Website Colour Selection

**URL:** `https://www.sibinfotech.com/blog/which-colors-should-i-use-for-my-website-and-why` (unchanged)
**Cluster:** Website Design & UX
**Primary keyword:** how to choose website colors
**Secondary:** best color schemes for websites; website color psychology; choosing brand colors for a website
**Search intent:** Informational — someone is picking a palette and wants a method rather than a mood board
**Cannibalization:** 🟢 Low. No SIB Infotech page or blog targets colour selection.
**Suggested schema:** BlogPosting (auto-emitted) + FAQPage

---

## CMS fields

**meta_title** (55 chars)
`How to Choose Website Colors: A Practical 2026 Method`

**meta_description** (155 chars)
`How to choose website colours using contrast, accessibility and hierarchy — a repeatable method, WCAG requirements, dark mode, and honest colour psychology.`

**meta_keywords**
`how to choose website colors, best color schemes for websites, website color psychology, choosing brand colors, WCAG contrast ratio, dark mode palette`

**H1**
`How to Choose Website Colours`

---

## Content update notes

The 2019 original (607 words) was almost entirely colour psychology presented as established fact — "blue builds trust, red creates urgency" — with no accessibility content at all. That framing is not supportable: colour associations are heavily culture-dependent and the research is weak and contested.

Rewritten around a method: role-based palettes, contrast requirements, then aesthetics. Colour psychology is retained but honestly qualified rather than presented as science.

Added for 2026: WCAG 2.2 contrast requirements including non-text contrast, dark mode as a first-class requirement via `prefers-color-scheme`, and colour tokens as the implementation unit.

Sources cited in-article: W3C WCAG 2.2 understanding documents for contrast minimum, non-text contrast, and use of colour.

---

## Internal links

| Direction | URL | Anchor |
| --- | --- | --- |
| From this post | `/blog/ways-to-make-your-website-s-landing-page-a-conversion-machine` | landing page best practices |
| From this post | `/blog/does-your-website-need-a-mobile-makeover` | reading a site on a phone |
| From this post | `/blog/when-to-rebrand-your-company` | a rebrand |
| From this post | `/website-designing-services` | website design services (single commercial link, late) |
| To this post | `/website-designing-services` | wired via `constants/blogLinkMap.js` |

---

## Article body (HTML — paste into the CMS `description` field)

Word count: ~2,700

```html
<p>Choose website colours by deciding what each colour has to <em>do</em> before deciding what it should look like. A palette is a set of roles — background, body text, primary action, borders, error, success — and every role has a job and a contrast requirement. Pick the roles, satisfy the requirements, then make it attractive within what is left.</p>

<p>Doing it the other way round, starting from a mood board, is why so many sites end up with a beautiful palette that fails on a phone in daylight and has no colour left to make a button stand out.</p>

<h2>Start with roles, not with colours</h2>

<p>A working palette is smaller than most people expect. You need roughly this:</p>

<table>
  <thead>
    <tr><th>Role</th><th>Job</th><th>How many</th></tr>
  </thead>
  <tbody>
    <tr><td>Surface</td><td>Page and card backgrounds</td><td>2–3 shades</td></tr>
    <tr><td>Text</td><td>Body, secondary, muted</td><td>2–3</td></tr>
    <tr><td>Primary action</td><td>The main thing you want clicked</td><td>1, plus hover and pressed</td></tr>
    <tr><td>Border and divider</td><td>Separating without shouting</td><td>1–2</td></tr>
    <tr><td>Status</td><td>Error, success, warning, info</td><td>4</td></tr>
    <tr><td>Accent</td><td>Occasional emphasis</td><td>0–1</td></tr>
  </tbody>
</table>

<p>That is around a dozen values. Sites that struggle usually have either far more — a palette that grew by accident, where nothing reads as significant — or far fewer, typically two brand colours stretched across every job until the primary action colour is also the heading colour and the link colour, at which point nothing stands out.</p>

<h3>The rule that matters most</h3>

<p><strong>Reserve one colour for the primary action and use it for nothing else.</strong> If your button colour also appears in headings, icons, decorative shapes and the footer, it has stopped meaning "click this". Scarcity is what makes a call to action visible, not saturation.</p>

<h2>Contrast is a requirement, not a preference</h2>

<p>This is the part most colour advice skips, and it is the part with actual rules.</p>

<p><a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html" target="_blank" rel="noopener">WCAG 2.2 requires</a> a contrast ratio of at least <strong>4.5:1</strong> for normal body text against its background, and <strong>3:1</strong> for large text — roughly 24px, or 19px bold and above.</p>

<p>Separately, <a href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html" target="_blank" rel="noopener">non-text contrast</a> requires <strong>3:1</strong> for interface components and meaningful graphics — button edges, form field borders, focus indicators, icons that carry meaning. This is the requirement most often missed, and it is why pale-grey form borders on white are a genuine accessibility failure rather than a stylistic choice.</p>

<h3>Where sites fail in practice</h3>

<ul>
  <li><strong>Light grey body text on white.</strong> Reads as refined on a calibrated monitor; unreadable on a phone outdoors.</li>
  <li><strong>Placeholder text as a label.</strong> Placeholders are usually low contrast by default, and they vanish when typing starts.</li>
  <li><strong>Text over photographs.</strong> Contrast varies across the image. Needs a scrim, an overlay, or a solid panel.</li>
  <li><strong>Disabled states nobody can read.</strong> Disabled controls are exempt from contrast rules, which is not a reason to make them invisible.</li>
  <li><strong>Focus indicators removed.</strong> Deleting the focus outline because it is "ugly" makes the site unusable by keyboard. Restyle it; never remove it.</li>
</ul>

<h3>Never let colour carry meaning alone</h3>

<p><a href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html" target="_blank" rel="noopener">WCAG requires</a> that colour is not the only means of conveying information. Around one in twelve men has some form of colour vision deficiency, most commonly red-green.</p>

<p>Practically: a red border on an invalid field needs accompanying text. A green tick needs a label. Chart series need labels, patterns or direct annotation rather than a colour-only legend. Links inside body text need something beyond colour — underlines remain the most reliable option, and removing them from in-content links is a persistent and avoidable mistake.</p>

<h2>Building the palette</h2>

<h3>Start with the neutrals</h3>

<p>Most of your site is neutral: backgrounds, text, borders. Getting these right does more for how a site feels than the brand colour does.</p>

<p>Pure grey tends to read as unconsidered. A neutral biased very slightly toward your brand hue — a warm grey with an orange brand, a cool grey with a blue one — makes the whole page feel intentional. The shift should be subtle enough that nobody notices it directly.</p>

<p>Build a ramp of five to seven neutrals from lightest surface to darkest text, and check that adjacent steps are distinguishable while the extremes clear 4.5:1.</p>

<h3>Then the primary action colour</h3>

<p>Choose it against two constraints: it must reach 4.5:1 with its own label text, and it must be visibly distinct from every neutral and from your status colours.</p>

<p>Avoid the trap of a primary colour that clashes with error red or success green — a red-orange primary next to a red error state makes both harder to read correctly. If your brand colour is close to a status colour, use a different shade for actions and keep the brand colour for brand moments.</p>

<h3>Then status colours</h3>

<p>Red, amber and green are conventional for error, warning and success, and convention is worth keeping because people already know it. Adjust the specific shades to sit comfortably with your palette, but do not get clever with the mapping — a site that uses purple for errors is being original at the user's expense.</p>

<h3>Then, and only then, the accent</h3>

<p>An accent is optional. Add one if the design genuinely needs an extra emphasis level; skip it if not. Most palettes that feel chaotic have two or three accents doing overlapping jobs.</p>

<h2>Colour schemes that work</h2>

<p>Three approaches account for most successful sites.</p>

<table>
  <thead>
    <tr><th>Scheme</th><th>How it works</th><th>Suits</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Monochromatic plus one</strong></td><td>One hue in several values, plus a single contrasting action colour</td><td>Almost anything. Hardest to get wrong, easiest to keep coherent.</td></tr>
    <tr><td><strong>Analogous</strong></td><td>Two or three neighbouring hues, one dominant</td><td>Editorial and content-heavy sites where calm matters</td></tr>
    <tr><td><strong>Complementary</strong></td><td>Opposing hues, used at very unequal weight</td><td>Sites needing strong emphasis. Requires restraint — equal weighting vibrates.</td></tr>
  </tbody>
</table>

<p>The consistent principle is <strong>unequal distribution</strong>. Roughly 60% dominant neutral, 30% secondary, 10% accent. Palettes fail when their colours are used in equal amounts, because nothing recedes and so nothing advances.</p>

<h2>What colour psychology can and cannot tell you</h2>

<p>Colour associations are real but far weaker and far more context-dependent than most articles on this topic imply. The often-repeated claims — blue means trust, red creates urgency, green means growth — come largely from marketing folklore rather than replicated research, and they vary substantially by culture, by individual, and by what surrounds the colour.</p>

<p>What is reasonably defensible:</p>

<ul>
  <li><strong>Context beats hue.</strong> Red means error in a form, sale in retail, and celebration at a wedding in much of Asia. The surrounding meaning dominates.</li>
  <li><strong>Convention is real.</strong> Because red commonly signals errors on the web, using it for errors is genuinely easier to understand. That is learned convention, not innate psychology.</li>
  <li><strong>Category expectations exist.</strong> Sectors develop visual norms. Meeting them signals belonging; breaking them signals difference. Either can be right — it is a positioning decision.</li>
  <li><strong>Contrast beats colour choice.</strong> A button's visibility comes from standing out against its surroundings, not from being a particular hue.</li>
</ul>

<p>Treat colour psychology as a tiebreaker between options that are already accessible and on-brand, never as the reason for a decision. Anyone promising a specific conversion lift from a button colour is selling something.</p>

<h2>Dark mode is part of the palette now</h2>

<p>Many people browse with a system-level dark preference, and a site that ignores it either looks jarring or, worse, half-inverts and becomes unreadable.</p>

<p>The important point: <strong>dark mode is not an inversion.</strong> Flipping every value produces harsh, glaring results. Design it as a second set of values for the same roles.</p>

<ul>
  <li>Use a dark grey rather than pure black — around #12–#1A range. Pure black with white text produces uncomfortable halation.</li>
  <li>Reduce saturation. Colours that look right on white appear to glow on dark.</li>
  <li>Re-check every contrast ratio. Passing in light mode guarantees nothing in dark.</li>
  <li>Use elevation through lighter surfaces rather than shadows, which barely register on dark backgrounds.</li>
</ul>

<p>Implement by defining colours as tokens — CSS custom properties — set once for light and redefined under <code>prefers-color-scheme: dark</code>. If a colour is hard-coded anywhere in your stylesheet rather than referenced through a token, that is the element that will break in the other mode.</p>

<h2>Brand colours versus interface colours</h2>

<p>A brand palette and a website palette are related but not identical, and conflating them causes real problems.</p>

<p>Brand colours are chosen for recognition across print, signage, packaging and screen. Interface colours are chosen to make a screen usable. A brand colour with poor contrast is perfectly acceptable on a billboard and unacceptable as body text.</p>

<p>The resolution is a tiered palette: brand colours used at brand moments — logo, key headings, large graphic areas — and a derived interface palette with accessible variants for text, actions and states. Most mature design systems hold both, with the interface values derived from the brand values rather than identical to them.</p>

<p>If your brand palette makes an accessible website genuinely impossible — two low-contrast pastels and nothing else — that is a brand problem rather than a web problem, and it is one of the more legitimate triggers for <a href="/blog/when-to-rebrand-your-company">a rebrand</a>.</p>

<h2>A method you can follow</h2>

<ol>
  <li>List the roles your site needs from the table above.</li>
  <li>Build a neutral ramp, biased slightly toward your brand hue.</li>
  <li>Choose one primary action colour and reserve it exclusively.</li>
  <li>Add conventional status colours.</li>
  <li>Check every text-on-background pair against 4.5:1, and large text against 3:1.</li>
  <li>Check borders, focus rings and meaningful icons against 3:1.</li>
  <li>Confirm nothing relies on colour alone to convey meaning.</li>
  <li>Define a dark variant for every role and re-check all ratios.</li>
  <li>Implement as tokens, never as hard-coded values.</li>
  <li>Test on a real phone, outdoors, and on a cheap uncalibrated monitor.</li>
</ol>

<p>Keep the finished palette documented somewhere the whole team can see — role, value, and what it is for. A palette that exists only inside one designer's file gets diverged from within the first month of anyone else touching the site.</p>

<p>Step ten catches more real problems than the previous nine combined. Designers work on good displays in controlled light; most visitors do not. The same reasoning applies to everything about <a href="/blog/does-your-website-need-a-mobile-makeover">reading a site on a phone</a>.</p>

<h2>Colour and imagery</h2>

<p>Photography is part of your palette whether you plan it or not. A page with a carefully restrained set of colours and a stock photo full of unrelated saturated hues does not read as restrained.</p>

<p>Two practical measures. Establish rough rules for imagery — a consistent treatment, a tolerance for saturation, a preference for images with usable negative space — so photographs sit inside the palette rather than fighting it. And never place text directly over an unmodified photograph: contrast varies across the image, so what passes over the dark corner fails over the bright centre. Use a gradient scrim, a solid panel, or move the text out of the image entirely.</p>

<p>The same applies to illustrations, icons and charts. Anything that ships colour should draw from the defined tokens, or it becomes a second, undocumented palette.</p>

<h2>How to test a palette</h2>

<p>Checking contrast pair by pair in a browser tool is slow and easy to skip, which is why it usually is skipped. Build the check into the work instead.</p>

<ul>
  <li><strong>Contrast checking in the design tool.</strong> Most design software has plugins that report ratios as you work, which catches problems while they are still cheap to change.</li>
  <li><strong>Browser DevTools.</strong> Chrome's element inspector shows the contrast ratio for any text node and flags failures directly in the colour picker.</li>
  <li><strong>Automated audits.</strong> Lighthouse's accessibility section catches contrast failures across a page in one pass. It will not catch everything — meaning conveyed by colour alone needs human judgement — but it removes the mechanical work.</li>
  <li><strong>Greyscale test.</strong> View the page desaturated. If the primary action stops being findable, it was relying on hue rather than contrast, and it will be weak for anyone with a colour vision deficiency.</li>
  <li><strong>The daylight test.</strong> A real phone, outdoors, at half brightness. Nothing else exposes low-contrast text as quickly.</li>
</ul>

<p>Run the greyscale and daylight tests before launch and after any palette change. They take minutes and consistently find things automated tools rate as passing.</p>

<h2>Mistakes worth avoiding</h2>

<p><strong>Choosing the palette before the content.</strong> You cannot judge a palette without knowing how much text there is and what needs emphasis.</p>

<p><strong>Too many colours with jobs that overlap.</strong> If two colours mean roughly the same thing, one of them is noise.</p>

<p><strong>Using the brand colour for everything.</strong> Brand consistency is not the same as brand saturation.</p>

<p><strong>Judging colour only on the largest screen.</strong> Colour relationships change when a full-bleed section becomes a small block on a phone.</p>

<p><strong>Letting the palette grow without a decision.</strong> Most cluttered palettes were never designed — they accumulated, one campaign colour and one third-party widget at a time. Periodically audit what colours actually appear in your stylesheet against what you intended, and remove the ones no longer doing a job.</p>

<p><strong>Low-contrast calls to action.</strong> A pale button on a pale background is the most expensive aesthetic decision available, and it shows up directly in <a href="/blog/ways-to-make-your-website-s-landing-page-a-conversion-machine">landing page best practices</a> as lost conversions.</p>

<h2>Frequently asked questions</h2>

<h3>How many colours should a website use?</h3>
<p>Around a dozen defined values covering roles rather than a count of "colours" — two or three surfaces, two or three text values, one primary action with its states, one or two borders, four status colours, and optionally one accent. Fewer roles than that and one colour ends up doing several jobs; many more and nothing reads as significant.</p>

<h3>What contrast ratio do I need?</h3>
<p>At least 4.5:1 for normal body text, 3:1 for large text (roughly 24px, or 19px bold), and 3:1 for interface components and meaningful graphics such as button edges, input borders and focus indicators. Those are WCAG 2.2 minimums, not targets to aim just above.</p>

<h3>Is colour psychology real?</h3>
<p>Weakly, and far less reliably than commonly claimed. Associations vary by culture, individual and context, and most of the specific claims circulated online trace to marketing folklore rather than replicated research. Learned web conventions — red for errors, green for success — are genuinely useful. Use psychology as a tiebreaker between accessible options, never as a reason.</p>

<h3>Should my website use my exact brand colours?</h3>
<p>Use them for brand moments, and derive accessible variants for text, buttons and states. Brand colours are selected for recognition across many media; interface colours must additionally meet contrast requirements on screen. A tiered palette holding both is the normal solution.</p>

<h3>Do I need a dark mode?</h3>
<p>If a meaningful share of your audience browses with a dark system preference, yes — and the cost is low if colours are defined as tokens from the start. Design it as a second set of values rather than inverting the light palette, and re-check every contrast ratio, because passing in one mode says nothing about the other.</p>

<h2>Where to start</h2>

<p>Take your current site and check three things: the contrast of your body text, the contrast of your form field borders, and whether your primary action colour appears anywhere it should not. Those three account for most of the practical damage a palette can do, and all three are fixable without a redesign.</p>

<p>If the palette is being rebuilt as part of a wider design project, that work sits inside our <a href="/website-designing-services">website design services</a> — colour is decided alongside type and layout rather than chosen in isolation, because none of the three works independently.</p>
```

---

## Self-audit

- **Cannibalization:** No competing page. One commercial link in the final line.
- **Intent:** Opens with the method in the first sentence — roles before aesthetics — rather than with a colour wheel explanation.
- **Keyword usage:** Primary in H1 and opening. "Best colour schemes" owns a section and table; "colour psychology" owns a section and an FAQ, treated sceptically; "brand colours" owns a section.
- **Currency:** WCAG 2.2 including non-text contrast, dark mode via `prefers-color-scheme`, token-based implementation. None present in the original.
- **E-E-A-T:** Explicitly declines to present colour psychology as fact, and states so with reasoning — directly addressing the brief's instruction. All numeric requirements sourced to W3C. No invented conversion claims; the article warns against them.
