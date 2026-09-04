# Article 10 — WordPress Theme Development

**URL:** `https://www.sibinfotech.com/blog/how-to-build-your-first-wordpress-theme` (unchanged)
**Cluster:** WordPress
**Primary keyword:** wordpress theme development (320 / KD 36)
**Secondary:** customize a theme in WordPress (260 / 23); custom WordPress themes (210 / 42)
**Dropped:** "WordPress theme development services" (260 / KD 5) — commercial intent, reassigned to `/themes-customization-services` per C7
**Search intent:** Informational — a developer or capable site owner building or modifying a theme
**Cannibalization:** 🔴 → resolved. The dropped keyword was aimed straight at the service page. This article is a tutorial and never uses the phrase.
**Suggested schema:** BlogPosting (auto-emitted) + FAQPage

> **Separate action, high value:** "WordPress theme development services" at KD 5 with 260/mo is an unusually cheap commercial term. `/themes-customization-services` currently targets nothing in particular and should be re-optimised to own it. That is outside this blog project but worth scheduling.

---

## CMS fields

**meta_title** (56 chars)
`WordPress Theme Development: Build Your First Theme`

**meta_description** (155 chars)
`A practical guide to WordPress theme development — classic vs block themes, the template hierarchy, child themes, theme.json, and what to build versus buy.`

**meta_keywords**
`wordpress theme development, customize a theme in wordpress, custom wordpress themes, child theme, block theme, theme.json, template hierarchy`

**H1**
`WordPress Theme Development: Building Your First Theme`

---

## Content update notes

The 2019 original (550 words) described only classic PHP theme development. WordPress introduced block themes and full site editing in version 5.9 (January 2022), and `theme.json` has since become central to how themes define styles. An article that does not mention either is teaching an incomplete picture.

Rewritten to cover both approaches and, more usefully, to help the reader decide which one their situation calls for — including the case for not building a theme at all.

Sources cited in-article: the WordPress Theme Handbook and developer documentation on `theme.json` and the template hierarchy.

---

## Internal links

| Direction | URL | Anchor |
| --- | --- | --- |
| From this post | `/blog/why-design-websites-on-wordpress` | why businesses build on WordPress |
| From this post | `/blog/limitations-of-a-wordpress-website` | where WordPress struggles |
| From this post | `/themes-customization-services` | theme customisation services (single commercial link, late) |
| To this post | `/themes-customization-services` | wired via `constants/blogLinkMap.js` |

---

## Article body (HTML — paste into the CMS `description` field)

Word count: ~2,700

```html
<p>A WordPress theme controls how your content is displayed. Building one means writing template files that WordPress selects according to a defined hierarchy, plus a stylesheet and a functions file that registers what the theme supports.</p>

<p>Before writing any of it, the more valuable decision is which of three routes you actually need — because most people who set out to build a theme would be better served by one of the other two.</p>

<h2>Build, customise, or configure?</h2>

<table>
  <thead>
    <tr><th>Approach</th><th>Suits</th><th>Effort</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Configure a block theme</strong></td><td>Most sites. Layout and styling handled in the editor and <code>theme.json</code>, no PHP</td><td>Low</td></tr>
    <tr><td><strong>Child theme of an existing theme</strong></td><td>You need a parent theme's behaviour with specific changes, and want its updates</td><td>Moderate</td></tr>
    <tr><td><strong>Custom theme from scratch</strong></td><td>Genuinely bespoke requirements, or you need full control of markup and performance</td><td>High</td></tr>
  </tbody>
</table>

<p>The honest guidance: build from scratch when you have a specific reason. "The available themes are not quite right" is usually solved by a child theme or by <code>theme.json</code> configuration, in a fraction of the time and with a fraction of the maintenance burden.</p>

<h2>Classic themes and block themes</h2>

<p>WordPress has two theme architectures, and knowing which you are working with determines everything else.</p>

<h3>Classic themes</h3>

<p>The traditional approach. PHP template files — <code>index.php</code>, <code>single.php</code>, <code>archive.php</code> — output markup using template tags and the loop. Styling comes from a stylesheet. Layout is defined in PHP.</p>

<p>Still entirely valid, still widely used, and still the right choice when you need precise control over markup or are working with an existing classic codebase.</p>

<h3>Block themes</h3>

<p>Introduced with full site editing in WordPress 5.9. Templates are HTML files composed of blocks rather than PHP, stored in a <code>templates/</code> directory. Global styles, colour palettes, typography and spacing are declared in <a href="https://developer.wordpress.org/block-editor/how-to-guides/themes/global-settings-and-styles/" target="_blank" rel="noopener"><code>theme.json</code></a>. Site editors can then change headers, footers and templates through the interface without touching code.</p>

<p>For a new project where the client will maintain the site, block themes are usually the better answer — they hand over genuine control rather than requiring a developer for layout changes.</p>

<h3>Which to learn</h3>

<p>If you are starting now, learn block themes and <code>theme.json</code> first, then classic templating when you encounter an older codebase. If you maintain existing classic themes, there is no urgency to convert working sites — classic themes remain supported.</p>

<h2>The template hierarchy</h2>

<p>This is the concept that makes WordPress theming comprehensible, and the one most tutorials rush past.</p>

<p>When WordPress renders a URL, it works out what kind of content is being requested and then looks for template files in a defined order, using the first one it finds. A single blog post looks for <code>single-post.php</code>, then <code>single.php</code>, then <code>singular.php</code>, then <code>index.php</code>.</p>

<p><code>index.php</code> is the universal fallback — a theme containing only that file will render every page type. Everything else is a more specific override.</p>

<p>The practical consequence: <strong>you do not need many template files.</strong> Start with a fallback and add specific templates only where a page type genuinely needs to differ. Themes with forty template files that mostly duplicate each other are a maintenance problem created by copying a starter theme without pruning it.</p>

<p>The <a href="https://developer.wordpress.org/themes/basics/template-hierarchy/" target="_blank" rel="noopener">full hierarchy is documented</a> and worth keeping open while you work.</p>

<h2>Building a minimal classic theme</h2>

<p>A functioning classic theme needs remarkably little.</p>

<h3>The required files</h3>

<ul>
  <li><strong><code>style.css</code></strong> — must open with a comment block declaring the theme name, which is how WordPress identifies it</li>
  <li><strong><code>index.php</code></strong> — the fallback template</li>
</ul>

<p>That is genuinely the minimum. In practice you also want:</p>

<ul>
  <li><strong><code>functions.php</code></strong> — registers theme support, enqueues assets, registers menus and widget areas</li>
  <li><strong><code>header.php</code></strong> and <strong><code>footer.php</code></strong> — shared markup, included via <code>get_header()</code> and <code>get_footer()</code></li>
  <li><strong><code>single.php</code></strong> and <strong><code>page.php</code></strong> — individual posts and pages</li>
  <li><strong><code>screenshot.png</code></strong> — the preview image in the admin</li>
</ul>

<h3>The loop</h3>

<p>Every template that displays content runs the loop — WordPress's mechanism for iterating over the posts matching the current query. It is the single most important pattern in classic theming, and understanding that the query is determined by the URL before your template runs explains most confusing behaviour.</p>

<h3>functions.php</h3>

<p>This file is where a theme declares what it supports and loads its assets.</p>

<p>Two rules matter more than the rest. <strong>Enqueue scripts and styles properly</strong> using WordPress's enqueue functions rather than hard-coding tags into the header — this lets WordPress manage dependencies and load order, and it is what other plugins expect. And <strong>prefix everything</strong>; function names live in a global namespace shared with every plugin, and a generic function name will eventually collide with something.</p>

<h2>Customising an existing theme</h2>

<p>Most theme work is modification rather than creation, and there is a right way to do it.</p>

<h3>Never edit the parent theme directly</h3>

<p>Changes made to a theme's files are erased the next time it updates. This is the single most common WordPress mistake, and it is usually discovered months later when an update wipes work nobody documented.</p>

<h3>Use a child theme</h3>

<p>A child theme is a separate theme that inherits from a parent. It needs only a <code>style.css</code> declaring the parent in a <code>Template:</code> header, plus a <code>functions.php</code> to enqueue styles.</p>

<p>Once active, any template file you place in the child overrides the parent's version of that file, and the child's <code>functions.php</code> runs in addition to the parent's. You change what you need and inherit everything else, including updates.</p>

<p>Two things to know. Child theme <code>functions.php</code> files are additive, not overriding — you cannot replace a parent function by redeclaring it unless the parent wrapped it in <code>function_exists()</code>. And overriding a template file means you now maintain it: if the parent improves that file in a later release, your copy does not receive the change.</p>

<h3>For block themes</h3>

<p>Much customisation happens without code at all — through the site editor and through <code>theme.json</code>, which defines colour palettes, typography scales, spacing and layout constraints in one place. A child theme with only a <code>theme.json</code> can substantially restyle a parent without touching a template.</p>

<h2>Setting up to develop</h2>

<p>Theme work is far less painful with a few things in place before you start.</p>

<h3>A local environment</h3>

<p>Develop locally rather than on a live site. Several tools install a full WordPress stack on your machine in minutes. Editing a production theme through the admin file editor — which WordPress still offers — is how sites get taken down by a stray syntax error, since a fatal error in a theme file can leave you unable to reach the admin to undo it.</p>

<p>Disable the file editor entirely on client sites by setting <code>DISALLOW_FILE_EDIT</code> in <code>wp-config.php</code>. It removes a genuine risk and nobody misses it.</p>

<h3>Debugging turned on</h3>

<p>Set <code>WP_DEBUG</code> to true locally, and log errors to a file rather than displaying them. Developing with errors suppressed means shipping notices and deprecations you never saw — and deprecation warnings are how you learn a function is going away before it does.</p>

<h3>Version control from the first commit</h3>

<p>Track the theme directory in Git. Themes accumulate changes from multiple people over years, and "which version was working" is otherwise unanswerable. Exclude WordPress core and uploads; track only what you author.</p>

<h3>A starter theme, pruned</h3>

<p>Starting from a minimal starter theme is reasonable, provided you delete what you do not use. The common failure is inheriting forty template files and a large stylesheet, keeping all of it, and maintaining code nobody understands. If you cannot explain why a file exists, remove it and see what breaks — locally.</p>

<h2>Mistakes that cause real problems</h2>

<p><strong>Editing theme or core files directly.</strong> Lost at the next update.</p>

<p><strong>Putting functionality in the theme.</strong> Custom post types, shortcodes and business logic belong in a plugin. Anything in the theme disappears when the theme is switched, and switching themes should not delete a client's content structure.</p>

<p><strong>Not escaping output.</strong> Every dynamic value printed to the page should be escaped with the appropriate function. Unescaped output is the most common source of cross-site scripting vulnerabilities in themes.</p>

<p><strong>Not sanitising input.</strong> Anything accepted from a user or a setting field must be validated and sanitised before use.</p>

<p><strong>Hard-coding URLs.</strong> Use the appropriate WordPress functions so the theme survives moving between staging and production.</p>

<p><strong>Loading assets everywhere.</strong> A script needed by one template should be enqueued conditionally, not on every page.</p>

<p><strong>Ignoring accessibility.</strong> Semantic markup, a skip link, visible focus states, and headings in a sensible order are theme responsibilities, and retrofitting them later is far more work.</p>

<h2>Performance is a theme decision</h2>

<p>Themes are responsible for much of what determines whether a WordPress site is fast.</p>

<ul>
  <li><strong>Limit web fonts.</strong> Each weight is a file. Self-host where practical.</li>
  <li><strong>Set image dimensions</strong> so the layout does not shift as they load.</li>
  <li><strong>Do not lazy-load the main image</strong> on a page — it delays the largest paint.</li>
  <li><strong>Avoid bundling large libraries</strong> for one small effect.</li>
  <li><strong>Keep database queries in templates minimal</strong>; a custom query inside a loop is a common cause of slow archive pages.</li>
</ul>

<p>A well-built theme on modest hosting outperforms a heavy theme on expensive hosting. Theme choice is usually the larger factor.</p>

<p>Two habits keep a theme fast as it grows. Audit what you enqueue periodically — assets added for a feature that was later removed tend to stay loaded for years. And measure on a page with real content rather than a near-empty test page, because the queries that slow an archive only appear once there is something to query.</p>

<h3>Keep translation in mind from the start</h3>

<p>Wrap user-facing strings in WordPress's translation functions with a consistent text domain, even if you have no plans to translate. It costs nothing while writing and is tedious to retrofit across a finished theme. It also makes the theme usable by anyone who later needs it in another language, which for an agency building on the same base repeatedly is a genuine saving.</p>

<h2>Testing a theme before it goes live</h2>

<p>Themes fail in ways that are invisible on the developer's own content, because the developer tests with three tidy posts and the client has four hundred messy ones.</p>

<h3>Test with realistic content</h3>

<p>Use content that resembles what the site will actually hold: very long titles, posts with no featured image, categories containing one item and categories containing two hundred, deeply nested comment threads, tables pasted from a spreadsheet, and an author with no biography. Every one of these breaks themes that looked fine in development.</p>

<p>The WordPress community maintains theme unit test data for exactly this purpose — a set of deliberately awkward posts that exercise the edge cases. Importing it takes minutes and surfaces problems that would otherwise appear after launch.</p>

<h3>Check the pages nobody designs</h3>

<p>Search results, the 404 page, paginated archives, category and tag archives, and the author page are all rendered by your theme and all routinely forgotten. A 404 page inheriting a broken layout is a poor first impression for someone who already failed to find something.</p>

<h3>Verify the editor experience</h3>

<p>The site is only half the deliverable; the other half is whether the client can use it. Log in as a non-administrator and try to publish a post, add an image, and change a menu. Themes that assume developer-level knowledge produce clients who are afraid to touch their own site.</p>

<h2>Build or buy?</h2>

<p>An honest assessment, since the answer is often buy.</p>

<p><strong>A well-chosen existing theme makes sense</strong> when your requirements are conventional, you want ongoing updates and security fixes maintained by someone else, and the budget is better spent on content and marketing than on bespoke templates. Configuring a good block theme through <code>theme.json</code> and the site editor covers a great many business sites completely.</p>

<p><strong>A custom theme makes sense</strong> when you have genuinely unusual layout or functional requirements, when performance is critical enough that removing unused code matters, when brand differentiation is commercially significant, or when you are integrating with systems no theme anticipates.</p>

<p>The maintenance question decides it more often than the build cost. A custom theme is yours to update, secure and fix indefinitely. That is a real ongoing commitment, and it should be a deliberate one rather than a consequence of preferring to build.</p>

<p>WordPress itself is not always the right platform either — worth understanding <a href="/blog/why-design-websites-on-wordpress">why businesses build on WordPress</a> and, equally, <a href="/blog/limitations-of-a-wordpress-website">where WordPress struggles</a>, before committing to theme work at all.</p>

<h2>Frequently asked questions</h2>

<h3>What is WordPress theme development?</h3>
<p>Building the files that control how WordPress displays content — template files selected by the template hierarchy, a stylesheet, and a functions file registering what the theme supports. Modern block themes use HTML templates and a <code>theme.json</code> configuration file instead of PHP templates for much of this.</p>

<h3>How do I customise a theme in WordPress?</h3>
<p>Create a child theme rather than editing the parent, because direct edits are erased at the next update. A child theme needs a <code>style.css</code> declaring the parent and a <code>functions.php</code> to enqueue styles; any template file you add to it overrides the parent's version. For block themes, much customisation happens through <code>theme.json</code> and the site editor without code.</p>

<h3>Should I build a custom WordPress theme or use an existing one?</h3>
<p>Use an existing theme unless you have a specific reason not to. Custom themes make sense for genuinely unusual requirements, critical performance, or significant brand differentiation. The deciding factor is usually maintenance: a custom theme is yours to secure and update indefinitely.</p>

<h3>What is the difference between a classic theme and a block theme?</h3>
<p>Classic themes use PHP template files and define layout in code. Block themes use HTML templates composed of blocks, with styling declared in <code>theme.json</code>, and allow site owners to edit headers, footers and templates through the editor. Block themes generally hand more control to the client; classic themes give developers more precise control of markup.</p>

<h3>Do I need to know PHP to build a WordPress theme?</h3>
<p>For classic themes, yes. For block themes, much less — a substantial block theme can be built with HTML templates and <code>theme.json</code> alone. Some PHP is still useful for anything beyond presentation, but it is no longer the entry requirement it once was.</p>

<h2>Where to start</h2>

<p>Build a minimal classic theme first — <code>style.css</code> and <code>index.php</code>, nothing else — and watch it render your site. That exercise teaches the template hierarchy faster than reading about it, because you can then add one template at a time and see exactly what each one takes over.</p>

<p>Then build the same thing as a block theme with a <code>theme.json</code>. The comparison makes the trade-off between the two architectures concrete rather than theoretical.</p>

<p>Keep the <a href="https://developer.wordpress.org/themes/" target="_blank" rel="noopener">Theme Handbook</a> open while you work. WordPress theming has a great deal of accumulated convention, and most of the frustration people report comes from fighting those conventions rather than following them — the handbook is where they are written down.</p>

<p>If the requirement is a production theme rather than a learning exercise, our <a href="/themes-customization-services">theme customisation services</a> cover child-theme development and block theme configuration, including the maintenance side that custom work commits you to.</p>
```

---

## Self-audit

- **Cannibalization:** The phrase "WordPress theme development services" appears nowhere in the article body. Tutorial throughout. One commercial link, in the final line, and the article argues against custom builds in most cases.
- **Intent:** Defines the task in the first sentence, then immediately reframes toward the decision most readers should actually be making.
- **Keyword usage:** Primary in H1, opening and FAQ. "Customize a theme in WordPress" owns a section and an FAQ; "custom WordPress themes" owns the build-or-buy section and an FAQ.
- **Currency:** Block themes, full site editing and `theme.json` are the significant additions — the original predates all of them. Version attribution (5.9, January 2022) is accurate.
- **E-E-A-T:** No statistics. Security guidance (escaping, sanitising, plugin-versus-theme separation) is the substantive expertise content. All technical claims sourced to WordPress developer documentation.
