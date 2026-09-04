# Article 3 — Blog Design

**URL:** `https://www.sibinfotech.com/blog/how-to-design-your-own-blog` (unchanged)
**Cluster:** Website Design & UX
**Primary keyword:** how to design a blog (70 / KD 57)
**Secondary:** what is blog design (40 / 0); how to design a blog page (20 / 0)
**Dropped:** "how to design a blog website", "how to design a blog post" — 20/mo each, covered as sections rather than targeted separately
**Search intent:** Informational — someone building or rebuilding a blog section
**Cannibalization:** 🟡 Medium, against `/blog/components-that-every-wordpress-blog-must-have-for-success`. Differentiated: that post is WordPress-specific and feature-led; this is platform-agnostic and design-led.
**Suggested schema:** BlogPosting (auto-emitted) + FAQPage

> **Priority note:** 70 searches/month at KD 57 is the weakest opportunity in the set. Written to spec, but if effort has to be triaged, this is the one to deprioritise — its value is topical support for the design cluster rather than traffic in its own right.

---

## CMS fields

**meta_title** (52 chars)
`How to Design a Blog People Actually Read`

**meta_description** (154 chars)
`How to design a blog — typography and reading experience first, then the post page, listing page and navigation, with a checklist and the usual mistakes.`

**meta_keywords**
`how to design a blog, what is blog design, how to design a blog page, blog typography, blog layout, readable line length`

**H1**
`How to Design a Blog People Actually Read`

---

## Content update notes

The 2019 original (561 words) covered picking a platform and a theme. Replaced with design decisions that survive any platform choice, since the platform question is now largely settled and the reading experience is where blogs actually differ.

Added: measure and line-height specifics, the distinction between the post page and the listing page, sticky-element budget, and the interaction between design and Core Web Vitals.

---

## Internal links

| Direction | URL | Anchor |
| --- | --- | --- |
| From this post | `/blog/which-colors-should-i-use-for-my-website-and-why` | choosing colours |
| From this post | `/blog/how-to-increase-traffic-to-your-website-through-blogging` | earning traffic through blogging |
| From this post | `/blog/does-your-website-need-a-mobile-makeover` | how it behaves on a phone |
| From this post | `/blog-management-services` | blog management services (single commercial link, late) |
| To this post | `/blog-management-services` | wired via `constants/blogLinkMap.js` |

---

## Article body (HTML — paste into the CMS `description` field)

Word count: ~2,600

```html
<p>Design a blog by optimising for one thing first: whether someone can comfortably read a long piece of text on it. Everything else — the listing page, the sidebar, the category system, the visual identity — is secondary, because a blog that is uncomfortable to read does not get read regardless of how it looks in a screenshot.</p>

<p>That single priority resolves most of the decisions below.</p>

<h2>What blog design actually covers</h2>

<p>Blog design is three distinct problems that get treated as one:</p>

<ul>
  <li><strong>The post page</strong> — where people read. The only page that really has to be excellent.</li>
  <li><strong>The listing page</strong> — where people browse and choose. Much less visited than teams assume.</li>
  <li><strong>The navigation layer</strong> — categories, tags, search, related posts. How people move between pieces.</li>
</ul>

<p>Most traffic to a blog arrives from search, directly onto a post page, from someone who has never seen your homepage. That is the fact that should shape the design. Designing the listing page first is designing for the smallest audience.</p>

<h2>Typography carries the whole thing</h2>

<p>If you get one thing right, make it the reading experience.</p>

<h3>Line length</h3>

<p>Aim for roughly 60 to 75 characters per line. Longer and the eye loses its place returning to the start of the next line; much shorter and reading becomes choppy.</p>

<p>This is the most common failure in blog design, and it usually comes from a full-width content area on a wide monitor producing 140-character lines. Constrain the text column regardless of how wide the screen is. The white space that leaves is doing a job.</p>

<h3>Size and spacing</h3>

<p>Body text at 18 to 20px for long-form reading — larger than typical interface text, because the task is different. Line height around 1.5 to 1.65. Paragraph spacing clearly larger than line spacing, so paragraphs read as units.</p>

<p>Set a type scale and stay on it. Blogs where headings are arbitrarily sized look improvised, and inconsistent heading sizes make it harder to perceive structure while scanning.</p>

<h3>Contrast and colour</h3>

<p>Dark mode deserves a decision rather than a default. Many people read long-form content at night, and if your blog ignores the system preference it will be the brightest thing on their screen. Implementing it means defining a second set of colour values rather than inverting the first — <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener">the <code>prefers-color-scheme</code> media query</a> is what detects it.</p>

<p>Dark grey on white or off-white remains the most comfortable combination for extended reading. Pure black on pure white is slightly harsh; light grey on white is a genuine accessibility failure. The reasoning behind these choices, including the contrast requirements, is covered in <a href="/blog/which-colors-should-i-use-for-my-website-and-why">choosing colours</a>.</p>

<h3>Typeface</h3>

<p>Either a serif or a sans-serif works well for body text at reasonable size — the long-running argument about which is more readable on screen has no clear winner at modern resolutions. What matters more: it should have a genuine italic and bold, it should be legible at small sizes, and there should be one for body and at most one other for headings.</p>

<p>Every additional font weight is a file to download. Two weights of one family and one of another is usually plenty.</p>

<h2>Designing the post page</h2>

<p>This is the page that matters. Work through it in the order a reader encounters it.</p>

<h3>The top</h3>

<p>Someone arriving from search needs to know immediately that they are in the right place. That means the headline visible without scrolling, a short standfirst or summary if the topic warrants it, and enough context — date, author, category — to judge relevance.</p>

<p>Resist a large decorative header image that pushes the headline below the fold. A hero image that delays the first words is costing you readers who are still deciding whether to stay.</p>

<p>Publication dates are worth showing rather than hiding. Teams sometimes remove them to make old content look current; readers find that annoying when they discover it, and it removes information they legitimately need to judge whether advice is still valid.</p>

<h3>The body</h3>

<ul>
  <li><strong>Short paragraphs.</strong> Three or four lines. Dense blocks get skipped on a phone.</li>
  <li><strong>Real subheadings.</strong> Every few hundred words, describing what follows. Most people scan before committing to read.</li>
  <li><strong>Room for structure.</strong> Lists, tables, pull quotes and code blocks all need styles defined in advance, or they get inserted as unstyled defaults.</li>
  <li><strong>Visible links.</strong> Underlined, or otherwise distinguished by more than colour alone.</li>
</ul>

<h3>Images inside posts</h3>

<p>Give images explicit dimensions so the layout does not shift as they load. Allow captions and style them. Let genuinely detailed images break out wider than the text column — a screenshot constrained to a 65-character measure is unreadable.</p>

<h3>The end of a post</h3>

<p>Someone who finished reading is the most engaged visitor you will get that day. The end of the post is where they decide what to do next, and it is regularly left empty or filled with generic sharing icons.</p>

<p>What works: a small number of genuinely related posts, one relevant next step, and — if you have one — a subscription option. What does not: eight recommendations, an aggressive modal, or a wall of unrelated popular posts.</p>

<h2>The listing page</h2>

<p>Less critical than it feels, but it should still work.</p>

<p>Each entry needs a headline, a date, and enough of a summary to judge relevance. Whether to show thumbnails is genuinely optional — they help visual scanning and cost load time, and a listing where every post has a generic stock image is worse than one with no images at all.</p>

<p>Keep entries scannable. A grid of large cards looks impressive and shows six posts per screen; a denser list shows fifteen. For a blog with real archives, the denser option usually serves people better.</p>

<p>Pagination or infinite scroll? Pagination, in most cases — it is more accessible, it works with the back button, and it lets search engines crawl the archive properly. Infinite scroll on a blog archive routinely hides older content from both readers and crawlers.</p>

<h2>Navigation and discovery</h2>

<p><strong>Categories, used sparingly.</strong> Five to eight broad categories that mean something. Blogs with forty categories have a filing system nobody uses, including the authors.</p>

<p><strong>Tags, or no tags.</strong> Tags are only useful if applied consistently, which requires discipline most teams do not sustain. An abandoned tag system generates thin archive pages that add nothing.</p>

<p><strong>Search, if the archive justifies it.</strong> Past fifty or so posts, search does more for discovery than any category structure.</p>

<p><strong>Related posts, chosen deliberately.</strong> Automated "related" widgets frequently surface irrelevant matches. A small number of manually chosen links is more useful, and it also builds the internal linking that helps posts get found — the connection between design and <a href="/blog/how-to-increase-traffic-to-your-website-through-blogging">earning traffic through blogging</a> runs directly through this.</p>

<h2>Author, credibility and the details around the text</h2>

<p>The elements framing a post do quiet work, and they are usually inherited from a theme rather than decided.</p>

<h3>Bylines and author information</h3>

<p>If posts are written by named people with relevant experience, show it — name, a sentence establishing why they can speak on the subject, and a link to their other posts. A byline reading "admin" tells readers nothing and wastes an easy credibility signal.</p>

<p>Where posts are genuinely organisational rather than individual, attributing to the organisation is more honest than inventing a persona.</p>

<h3>Reading time</h3>

<p>Useful, cheap, and appreciated — it helps someone decide whether to read now or save it. Calculate it from actual word count rather than guessing, and place it near the headline where the decision happens.</p>

<h3>A table of contents on long posts</h3>

<p>For anything past roughly 1,500 words, an anchored contents list at the top helps people jump to the part they came for. On mobile it should collapse rather than occupying the entire first screen. This is one of the few additions that genuinely earns its space.</p>

<h3>Updated dates on maintained posts</h3>

<p>If you revise posts — and for anything technical you should — show both the original publication date and the last substantive update. It is more honest than silently changing the date, and it signals that the content is maintained rather than abandoned.</p>

<h2>What to leave out</h2>

<p>Most blog design problems are additions rather than omissions.</p>

<ul>
  <li><strong>Sidebars full of widgets.</strong> Archives by month, tag clouds, blogrolls, counters. These are habits inherited from 2010, and each one competes with the text.</li>
  <li><strong>Multiple sticky elements.</strong> A sticky header, a sticky share bar, a sticky newsletter prompt and a cookie banner can consume half a phone screen before any content shows.</li>
  <li><strong>Modals on arrival.</strong> A subscribe overlay that fires before anyone has read a sentence asks for commitment before delivering value.</li>
  <li><strong>Share counts.</strong> Low numbers actively discourage sharing, and the scripts are heavy.</li>
  <li><strong>Autoplaying anything.</strong></li>
</ul>

<p>A useful test: on a phone, what percentage of the first screen is the article? If it is under half, the furniture is winning.</p>

<h2>Mobile</h2>

<p>Most blog reading happens on phones, so the narrow layout is the primary layout rather than an adaptation.</p>

<p>Check specifically that text does not run edge to edge — a small margin materially improves comfort. Confirm the tap targets in your navigation are large enough. Make sure tables and code blocks scroll inside their own container rather than forcing the page sideways. And check what your sticky elements consume on a small screen. The wider mechanics are covered in <a href="/blog/does-your-website-need-a-mobile-makeover">how it behaves on a phone</a>.</p>

<h2>Performance is a design decision</h2>

<p>Blog design choices determine load time more than the platform does. Four web fonts, a full-width hero image per post, an embedded video, and three tracking scripts will produce a slow page on any stack.</p>

<p>The design decisions with the largest effect:</p>

<ul>
  <li>Number of font files loaded</li>
  <li>Size and dimensions of header images, and whether the largest one is lazy-loaded (it should not be)</li>
  <li>Whether space is reserved for images and embeds, preventing layout shift</li>
  <li>How many third-party embeds appear in a typical post</li>
</ul>

<p>Reserving space for images and embeds is the cheapest fix available and prevents the most annoying failure mode: text jumping while someone is reading it.</p>

<h2>Designing for scanning, not just reading</h2>

<p>Most visitors do not read a post start to finish on first contact. They scan to decide whether it deserves reading, and the design either supports that or fights it.</p>

<p>Three things make a post scannable. <strong>Descriptive subheadings</strong> that say what the section contains, so the headings alone summarise the piece — "Line length" tells you more than "The first consideration". <strong>Visual variety</strong> at intervals: a list, a table, a pull quote every few hundred words gives the eye landmarks and breaks the grey. And <strong>front-loaded paragraphs</strong>, where the first sentence carries the point and the rest supports it, so someone reading only first lines still follows the argument.</p>

<p>A quick test: read only your headings and the first sentence of each paragraph. If that version makes sense and conveys the substance, the post is scannable. If it reads as disconnected fragments, the structure needs work — and no amount of styling will compensate.</p>

<h2>A blog design checklist</h2>

<ul>
  <li>Body text 18–20px, line height 1.5–1.65</li>
  <li>Measure constrained to roughly 60–75 characters</li>
  <li>Body text contrast at least 4.5:1</li>
  <li>Headline visible without scrolling on a phone</li>
  <li>Publication date shown</li>
  <li>Heading levels visually distinct and consistently scaled</li>
  <li>Styles defined for lists, tables, quotes and code</li>
  <li>Links distinguished by more than colour</li>
  <li>Images have explicit dimensions; the lead image is not lazy-loaded</li>
  <li>Captions supported and styled</li>
  <li>A deliberate end-of-post next step</li>
  <li>Related posts chosen rather than auto-generated</li>
  <li>Sticky elements consume less than a fifth of a phone screen</li>
  <li>Listing page paginated, not infinite scroll</li>
  <li>Categories limited to a number people can hold in mind</li>
</ul>

<h2>Comments: worth having or not?</h2>

<p>A decision worth making deliberately rather than accepting whatever the platform defaults to.</p>

<p>Comments are worth keeping when your audience genuinely discusses the subject and someone is committed to moderating and replying. An active comment thread adds real value and signals a living publication.</p>

<p>They are worth removing when they sit empty, fill with spam, or nobody has time to moderate. An empty comment box under every post reads as an absence of audience, and unmoderated spam is worse than no comments at all. Most third-party comment systems also add substantial load time and tracking you may not want.</p>

<p>If you disable them, remove the section entirely rather than leaving a disabled box in place.</p>

<h2>Mistakes worth avoiding</h2>

<p><strong>Designing the listing page first.</strong> It is the page fewest people see.</p>

<p><strong>Full-width text on desktop.</strong> The most common and most fixable readability failure.</p>

<p><strong>A hero image on every post.</strong> If every post needs one, you will end up using generic stock images that add load time and no meaning.</p>

<p><strong>Designing with placeholder text.</strong> Real posts have long headlines, nested lists and awkward tables. Design against a real post, ideally your longest one.</p>

<p><strong>Styling only what the first post used.</strong> The first time someone inserts a table into an unstyled blog, it looks broken. Define the full set of content styles up front.</p>

<p><strong>Removing focus indicators.</strong> Makes the blog unusable by keyboard for a purely aesthetic reason.</p>

<h2>Frequently asked questions</h2>

<h3>What is blog design?</h3>
<p>The design of the reading and browsing experience for a blog — typography and layout of the post page, the structure of the listing page, and the navigation that connects posts. It is mostly a typography and hierarchy problem rather than a decorative one.</p>

<h3>How do I design a blog page that people actually read?</h3>
<p>Constrain the text column to roughly 60–75 characters, set body text at 18–20px with line height around 1.5, ensure strong contrast, put the headline above the fold, use frequent subheadings, and remove furniture competing with the text. Those changes do more than any visual restyling.</p>

<h3>Should a blog have a sidebar?</h3>
<p>Only if something in it is genuinely useful — search on a large archive, or a small set of deliberately chosen links. Sidebars filled with archives, tag clouds and counters are inherited habit and they compete with the content for attention and load time.</p>

<h3>What font size should blog text be?</h3>
<p>Around 18–20px for body text, which is larger than typical interface text because sustained reading is a different task. Pair it with a line height near 1.5–1.65 and a constrained line length; all three work together, and getting one right while ignoring the others achieves little.</p>

<h3>Should blog posts show the publication date?</h3>
<p>Yes. Readers need it to judge whether advice is current, and hiding it to make old content appear fresh tends to annoy people who notice. If a post is genuinely maintained, show an updated date alongside the original rather than removing the date entirely.</p>

<h2>Where to start</h2>

<p>Open your longest existing post on a desktop monitor and count the characters in a full line. If it is meaningfully above 75, constrain the column — that single change will do more for your blog than a redesign.</p>

<p>If the constraint is running the blog consistently rather than designing it, that is what our <a href="/blog-management-services">blog management services</a> cover — production, editing and publishing as an ongoing programme rather than a one-off build.</p>
```

---

## Self-audit

- **Cannibalization:** Platform-agnostic and design-led, distinguishing it from the WordPress-specific components post. One commercial link, in the final line.
- **Intent:** States the single organising priority in the first sentence, then works through the pages in order of importance.
- **Keyword usage:** Primary in H1 and opening. "What is blog design" and "how to design a blog page" each own an FAQ; the post page and listing page own their own sections rather than targeting the dropped 20/mo variants separately.
- **E-E-A-T:** Typographic figures given as ranges reflecting normal practice rather than as invented precision. No statistics. Explicitly notes the serif-vs-sans debate has no clear winner rather than asserting one.
