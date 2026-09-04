# Article 12 — Website Redesign

**URL:** `https://www.sibinfotech.com/blog/things-to-consider-before-redesigning-your-website` (unchanged)
**Cluster:** Website Design & UX
**Primary keyword:** things to consider before redesigning your website
**Secondary:** website redesign checklist; signs your website needs a redesign; website redesign mistakes to avoid; how to plan a website redesign
**Search intent:** Informational — someone is considering or has just approved a redesign and wants to avoid the known traps
**Cannibalization:** 🔴 → resolved. `/blog/when-to-redesign-your-website` (605 words) now 301s here per C5; its "signs you need a redesign" intent is absorbed below. `/blog/how-much-does-it-cost-to-redesign-a-website` stays separate — cost is a distinct query. `/website-redesigning-services` keeps commercial intent and already has a CTA interceptor configured for this post in `pages/blog/[slug].js`.
**Suggested schema:** BlogPosting (auto-emitted) + FAQPage

---

## CMS fields

**meta_title** (56 chars)
`Website Redesign: What to Settle Before You Start`

**meta_description** (157 chars)
`What to consider before redesigning your website — whether you need one, protecting your search traffic, the content audit, and the mistakes that cost the most.`

**meta_keywords**
`things to consider before redesigning your website, website redesign checklist, signs your website needs a redesign, how to plan a website redesign, SEO migration`

**H1**
`Things to Consider Before Redesigning Your Website`

---

## Content update notes

The 2019 original (436 words) was the shortest of the 22 and listed generic considerations without the one thing that actually determines whether a redesign succeeds: what happens to existing search visibility. Rewritten around that risk.

Absorbs the "signs you need a redesign" material from `/blog/when-to-redesign-your-website` before that URL redirects here, so the merge loses nothing.

Sources cited in-article: Google Search Central documentation on site moves with URL changes.

---

## Internal links

| Direction | URL | Anchor |
| --- | --- | --- |
| From this post | `/blog/how-much-does-it-cost-to-redesign-a-website` | what a redesign costs |
| From this post | `/blog/does-your-website-need-a-mobile-makeover` | fixing mobile on the existing site |
| From this post | `/blog/what-is-the-difference-between-web-designing-and-web-development` | design and development responsibilities |
| From this post | `/website-redesigning-services` | website redesign services (single commercial link, late) |
| To this post | `/website-redesigning-services` | wired via `constants/blogLinkMap.js` |

---

## Article body (HTML — paste into the CMS `description` field)

Word count: ~2,750

```html
<p>Before redesigning a website, settle four things: whether you actually need a redesign rather than a set of fixes, what specific outcome would make it a success, what your current site already does well enough to be worth preserving, and how existing search traffic will survive the move.</p>

<p>The fourth is where redesigns most often cause real damage. A site can launch looking far better and lose a third of its organic traffic in a fortnight, because the redesign was treated as a design project when it was also a migration.</p>

<h2>First: do you need a redesign at all?</h2>

<p>Redesigns are expensive, disruptive, and frequently commissioned to solve problems a redesign does not address. Work out which situation you are actually in.</p>

<h3>Signs a redesign is genuinely warranted</h3>

<ul>
  <li><strong>The site cannot be made to work on phones</strong> without effectively rebuilding it — a fixed-width layout with no responsive foundation, or a separate mobile site that has drifted out of sync.</li>
  <li><strong>The structure no longer matches the business.</strong> Navigation built for services you no longer lead with, or a hierarchy that has accumulated pages nobody can place.</li>
  <li><strong>The platform is a genuine constraint.</strong> Unsupported CMS, unpatched security, or a stack where every change requires a developer.</li>
  <li><strong>Every fix breaks something else.</strong> A theme overridden so heavily that CSS changes have unpredictable effects is a maintenance trap, and the cost compounds.</li>
  <li><strong>The brand has genuinely moved on</strong> — not simply that the site feels stale internally, but that it misrepresents what you now do.</li>
</ul>

<h3>Reasons that do not justify one</h3>

<ul>
  <li><strong>"It looks dated to us."</strong> Your team sees the site daily; visitors see it once. Internal fatigue is not a user problem.</li>
  <li><strong>A new marketing lead wants to make their mark.</strong> A common and expensive driver, rarely stated aloud.</li>
  <li><strong>A competitor relaunched.</strong> You have no idea whether theirs worked.</li>
  <li><strong>Conversions are down.</strong> Usually structural or traffic-quality, and a redesign is an unfocused way to address it. Diagnose first.</li>
  <li><strong>Traffic is falling.</strong> Establish the cause. If it is an algorithm update, a technical fault or a lost backlink profile, a redesign will not fix it and may worsen it.</li>
</ul>

<p>If your problem is specifically that the site fails on phones, it is worth checking whether <a href="/blog/does-your-website-need-a-mobile-makeover">fixing mobile on the existing site</a> is viable first. That is often weeks of work against months, and it carries none of the migration risk.</p>

<h2>Define what success means before anyone designs anything</h2>

<p>"A modern, professional website that better reflects our brand" cannot be evaluated. Nobody can say afterwards whether it was achieved, which is precisely why it is the most common brief.</p>

<p>Replace it with statements that could turn out false:</p>

<ul>
  <li>Enquiries from the site increase, measured against the same quarter last year</li>
  <li>Organic sessions are maintained within 10% through the migration and recover fully within three months</li>
  <li>The team can publish a new service page without developer involvement</li>
  <li>Mobile conversion rate reaches parity with desktop</li>
  <li>Core Web Vitals pass on mobile at the 75th percentile</li>
</ul>

<p>Write these down before design begins and agree who checks them and when. A redesign with no defined success criteria always succeeds, because the criteria get written afterwards to match whatever happened.</p>

<h2>Protecting search traffic is the highest-risk part</h2>

<p>This is the section most redesign briefs omit entirely, and it accounts for most of the serious damage.</p>

<p>Your existing site has accumulated something you cannot buy back quickly: indexed URLs, backlinks pointing at specific pages, and years of ranking history. A redesign that changes URLs without carefully mapping them discards that.</p>

<h3>Map every URL before launch</h3>

<p>Crawl the current site and export every URL that returns 200. Pull the pages with organic traffic from Search Console and the pages with backlinks from whatever link tool you use. For every one, decide: does it survive at the same URL, move to a new URL, get merged into another page, or genuinely go away?</p>

<p>Every URL that moves or merges needs a <strong>301 redirect to the closest equivalent page</strong>. Not to the homepage — redirecting everything to the homepage is treated as a soft 404 and throws away the value you were trying to preserve. <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener">Google's site move documentation</a> is explicit about this.</p>

<h3>Keep the URLs you do not have to change</h3>

<p>The safest redesign changes no URLs at all. If the structure genuinely needs to change, change what must change and leave the rest. A slug being old or slightly awkward is not a reason to move a page that ranks — you are trading real accumulated equity for a cosmetic improvement nobody searches for.</p>

<h3>What else moves with the pages</h3>

<p>URLs get the attention, but several other things are routinely lost in a rebuild:</p>

<ul>
  <li><strong>Page titles and meta descriptions</strong> that were deliberately written, replaced by templated ones</li>
  <li><strong>Structured data</strong> that was implemented and then not carried across</li>
  <li><strong>Internal links</strong> inside body content, dropped when content is reflowed into new templates</li>
  <li><strong>Image alt text</strong>, lost when images are re-uploaded</li>
  <li><strong>Analytics and conversion tracking</strong>, silently broken so you cannot measure the outcome</li>
  <li><strong>The XML sitemap</strong>, left pointing at the old structure</li>
</ul>

<p>The analytics one deserves emphasis. If tracking breaks at launch, you lose the ability to tell whether the redesign worked at exactly the moment you need to know. Verify conversion tracking with a real test submission on the new site before launch, not after.</p>

<h2>Audit the content before designing around it</h2>

<p>Designing templates before knowing what content exists produces layouts that real content does not fit — the heading that was drawn for four words and receives fourteen, the case study grid built for nine entries when you have five.</p>

<p>List every page and decide: keep as is, rewrite, merge into another page, or remove. Base it on evidence — traffic, conversions, and whether the page still describes something you do — rather than on which pages people are attached to.</p>

<p>Most sites carry a substantial tail of pages that receive almost no traffic and serve no purpose. A redesign is a good opportunity to remove them, provided anything with backlinks is redirected rather than deleted outright.</p>

<p>Do this before design, not during build. Content decided late is the single most common cause of redesigns running over schedule.</p>

<h2>Redesign or iterate?</h2>

<p>The framing is usually "redesign or leave it alone", which is a false choice. Continuous improvement is often the better investment.</p>

<table>
  <thead>
    <tr><th></th><th>Full redesign</th><th>Iterative improvement</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Best when</strong></td><td>Platform, structure or foundation is the constraint</td><td>The site works; specific pages underperform</td></tr>
    <tr><td><strong>Risk</strong></td><td>High — everything changes at once</td><td>Low — changes are isolated and reversible</td></tr>
    <tr><td><strong>Learning</strong></td><td>One large bet, evaluated after launch</td><td>Continuous, with each change measurable</td></tr>
    <tr><td><strong>Disruption</strong></td><td>Months, with a launch cliff</td><td>Minimal</td></tr>
    <tr><td><strong>SEO risk</strong></td><td>Significant, needs active management</td><td>Negligible</td></tr>
  </tbody>
</table>

<p>A reasonable test: if you can list the specific pages that underperform and say what is wrong with each, you probably need improvement rather than a redesign. If you cannot describe the problem except as a general feeling about the site, either the problem is foundational or it has not been diagnosed yet — and in the second case a redesign is a very expensive way to avoid diagnosis.</p>

<h2>Decide what carries over from the old site</h2>

<p>Redesigns are usually framed as replacement, which quietly assumes nothing currently works. That is rarely true, and starting from a blank page throws away information you already paid for.</p>

<p>Before design begins, identify what the current site does well enough to keep:</p>

<ul>
  <li><strong>Pages that convert.</strong> If a service page produces enquiries, understand why before redrawing it. The layout may be incidental, but the content order and the objections it answers usually are not.</li>
  <li><strong>Navigation labels people actually use.</strong> Site search queries and click data tell you which words your audience uses. Replacing plain labels with clever ones is a reliable way to reduce findability.</li>
  <li><strong>Content that earns links or traffic.</strong> Anything ranking or attracting links is doing work. Preserve it, at its URL, and improve it rather than replacing it.</li>
  <li><strong>Anything customers reference by name.</strong> If sales regularly send people to a specific page, that page has a job.</li>
</ul>

<p>Write this list down explicitly and hand it to whoever designs the new site as a constraint. Without it, the things that were working get redesigned away simply because they were on the old site, and nobody notices until the enquiry rate drops.</p>

<h3>Watch for the launch-day regression</h3>

<p>A specific pattern worth naming: the new site is genuinely better in most respects, but one high-value page loses a detail that was doing the persuading — a proof point, a price range, an FAQ that answered the common objection. Aggregate metrics look fine; that one page's conversion rate halves.</p>

<p>Guard against it by comparing the new version of each top-converting page against the old one, element by element, before launch. Ask of anything dropped: was that removed for a reason, or because it did not fit the new template?</p>

<h2>A planning checklist</h2>

<p>Settle these before design work starts.</p>

<h3>Strategy</h3>
<ul>
  <li>Written success criteria that can be evaluated</li>
  <li>Agreed primary audience and the main task they come to do</li>
  <li>Decision on which parts of the current site are working and stay</li>
</ul>

<h3>Content</h3>
<ul>
  <li>Full page inventory with keep / rewrite / merge / remove decisions</li>
  <li>Named owner for producing new content, with dates</li>
  <li>Real content available before templates are finalised</li>
</ul>

<h3>Technical and SEO</h3>
<ul>
  <li>Full crawl of the current site, exported</li>
  <li>Top pages by organic traffic and by backlinks identified</li>
  <li>URL mapping document — old to new, page by page</li>
  <li>301 redirects written and tested on staging</li>
  <li>Titles, descriptions, structured data and alt text carried across</li>
  <li>Analytics and conversion tracking verified on the new build</li>
  <li>XML sitemap regenerated for the new structure</li>
  <li>Staging environment blocked from indexing — and unblocked at launch</li>
</ul>

<h3>Project</h3>
<ul>
  <li>Named decision-maker for design sign-off</li>
  <li>Agreed scope, and what happens when something is added</li>
  <li>Clear split of design and development responsibilities</li>
  <li>Post-launch monitoring period with someone accountable</li>
</ul>

<p>That last technical item catches a genuinely common failure: staging sites are usually blocked from search engines, and the block is sometimes carried to production at launch. A site that launches with indexing disabled disappears from search until somebody notices.</p>

<h2>Mistakes that cost the most</h2>

<p><strong>Changing URLs without mapping them.</strong> The most damaging and most preventable error in the list.</p>

<p><strong>Redirecting everything to the homepage.</strong> Treated as a soft 404, and discards the equity of every page redirected.</p>

<p><strong>Launching without checking analytics.</strong> You lose the ability to evaluate the project at the moment it matters.</p>

<p><strong>Designing before content exists.</strong> Templates built for placeholder text break on real content, and the fix comes out of the build budget.</p>

<p><strong>Removing content because it looks dated.</strong> Old pages are often the ones holding backlinks and long-tail traffic. Check before deleting.</p>

<p><strong>Treating launch as the end.</strong> The first weeks after launch are when problems surface. Budget time for them rather than releasing the team the day after.</p>

<p><strong>No named decision-maker.</strong> Design by committee produces compromise layouts and schedule slippage. One person should own sign-off. Understanding <a href="/blog/what-is-the-difference-between-web-designing-and-web-development">design and development responsibilities</a> helps here, because a lot of redesign friction comes from unclear ownership of decisions rather than from disagreement.</p>

<h2>What to expect on time and budget</h2>

<p>Redesigns overrun for predictable reasons, and knowing them lets you plan around them.</p>

<p><strong>Content is the usual bottleneck.</strong> Design and build run to schedule; the copy for eighteen pages does not arrive. Assign content owners and dates at the start, and treat missing content as a schedule risk rather than something that will sort itself out.</p>

<p><strong>Scope grows quietly.</strong> A booking system, a portal, a calculator — each reasonable in isolation, each affecting the timeline. Agree how additions are handled before the first one is requested.</p>

<p><strong>Approval cycles are slower than estimated.</strong> If four people must approve, plan for four people's calendars, not one.</p>

<p>Actual figures vary enormously by scope and market, and any single number quoted here would be misleading — the drivers and ranges are covered separately in <a href="/blog/how-much-does-it-cost-to-redesign-a-website">what a redesign costs</a>.</p>

<h2>After launch</h2>

<p>Plan the two weeks after launch as part of the project, not as a return to business as usual.</p>

<ul>
  <li>Verify redirects resolve correctly, with no chains and no loops</li>
  <li>Confirm the new sitemap is submitted and the old one retired</li>
  <li>Watch Search Console for coverage errors and crawl anomalies</li>
  <li>Check conversion tracking is recording real submissions</li>
  <li>Expect some ranking fluctuation for a few weeks; treat sustained decline differently from short-term movement</li>
  <li>Keep the old site's analytics accessible for comparison</li>
</ul>

<p>A degree of turbulence is normal while search engines recrawl and reassess. What is not normal is a sustained drop after a month, which usually points to redirects, lost content, or a technical fault rather than to the algorithm.</p>

<h2>Frequently asked questions</h2>

<h3>What should I consider before redesigning my website?</h3>
<p>Whether a redesign is genuinely the right intervention rather than targeted fixes; what specific, checkable outcome defines success; which existing content and URLs are worth preserving; and how search traffic will be protected through the migration. The last is the one most briefs omit and the one that causes the most damage.</p>

<h3>What are the signs a website needs a redesign?</h3>
<p>It cannot be made to work on phones without a rebuild; the structure no longer matches what the business does; the platform is unsupported or insecure; or every change breaks something else. Feeling that the site looks dated, on its own, is not a sign — that judgement usually comes from people who see it daily.</p>

<h3>Will a redesign hurt my SEO?</h3>
<p>It can, badly, if URLs change without being mapped and redirected. It does not have to. Keep URLs where possible, 301 everything that moves to its closest equivalent, carry titles, structured data and internal links across, and verify before launch rather than after.</p>

<h3>How do I plan a website redesign?</h3>
<p>Decide whether you need one, write checkable success criteria, audit content and decide what to keep, crawl and map every URL, then design against real content. Technical and content planning belong before design, not alongside build.</p>

<h3>Should I redesign or improve the existing site?</h3>
<p>If you can name the specific pages that underperform and say what is wrong with each, improve them — lower risk, faster feedback, no migration exposure. Redesign when the platform, structure or foundation is the constraint, because those cannot be fixed page by page.</p>

<h2>Where to start</h2>

<p>Before commissioning anything, do two things. Crawl your current site and list your top twenty pages by organic traffic. Then write one sentence describing what would have to be true in six months for the project to have been worth it.</p>

<p>Those two artefacts change most redesign conversations, because they replace a general sense that the site needs work with a specific list of what must not be broken and a definition of what success looks like.</p>

<p>If you want that migration handled by people who treat it as a search project as well as a design one, that is what our <a href="/website-redesigning-services">website redesign services</a> are built around — URL mapping and redirect planning run alongside the design work rather than after it.</p>
```

---

## Self-audit

- **Cannibalization:** Absorbs the merged post's "signs you need a redesign" intent as a section rather than leaving it stranded. Cost is deliberately not quantified — that query belongs to the cost post, which is linked. One commercial link, in the final line.
- **Intent:** Names the four things to settle in the first sentence, then flags the migration risk immediately, since that is the costly unknown.
- **Keyword usage:** Primary in H1 and opening. "Signs your website needs a redesign", "website redesign checklist", "how to plan a website redesign" and "mistakes to avoid" each own a section and an FAQ.
- **E-E-A-T:** No cost figures, no invented timelines, no client results. Redirect guidance sourced to Google's site move documentation. Includes an explicit "redesign or iterate" section arguing against the service being sold.
