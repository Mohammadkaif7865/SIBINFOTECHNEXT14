# SIB Infotech — Keyword Cannibalization Map

Scope: SEO / PPC / Web-Design / Web-Dev / Social clusters + proposed new pages (items 8, 9, 19 of the Master SEO Action Plan).
Created: 2026-08-14. Sources: sitemap-meta-table.md, pages/*.js meta, next.config.mjs redirects, CustomLayout canonicals, middleware.js 410s.

Legend for "Owner URL": the single URL that should rank for that keyword/phrase. Everything else must either 301 into it, self-canonicalize with a distinct intent, or be de-optimized.

---

## 1. High-risk conflicts (act first)

### C1 — Duplicate AEO/SearchAI pages (worst overlap on the site)
`/answer-engine-optimization` and `/search-ai-optimization` ship **identical** meta titles and descriptions ("Search AI Optimization for Faster Rankings | SIB Infotech"). Two URLs, same intent, same copy → textbook cannibalization + duplicate content.

**Recommended owner:** `/search-ai-optimization` (cleaner commercial term).
**Action:** 301 `/answer-engine-optimization` → `/search-ai-optimization`, or (if keeping both) differentiate hard: AEO page = "Answer Engine Optimization" (voice/featured snippets), SearchAI page = "AI search visibility". Do not leave identical copy.

### C2 — AI-SEO cluster (9 pages, all chasing "AI SEO services")
| URL | Current target (title-derived) |
| --- | --- |
| /ai-seo-services | AI SEO services India |
| /chatgpt-seo-services | ChatGPT SEO services |
| /claude-seo-services | Claude SEO services |
| /gemini-seo-services | Gemini SEO services |
| /perplexity-seo-services | Perplexity SEO |
| /llm-seo-services | LLM SEO / ChatGPT & Gemini visibility |
| /answer-engine-optimization | Search AI Optimization (= C1) |
| /generative-engine-optimization | Generative Engine Optimization (GEO) |
| /search-ai-optimization | Search AI Optimization (= C1) |

Six of these describe themselves as "get cited in ChatGPT, Gemini, Perplexity" — the same promise, different tool brand. Google cannot decide which page answers "AI SEO services in India."

**Recommended owners:**
- "AI SEO services" → `/ai-seo-services`
- "LLM SEO" → `/llm-seo-services`
- "GEO" → `/generative-engine-optimization`
- Everything else is a **brand-specific landing** (ChatGPT / Claude / Gemini / Perplexity). These are acceptable ONLY if each is explicitly scoped to that tool in H1 + copy (e.g., "ChatGPT SEO: make your brand answer in ChatGPT"). De-optimize their titles/descriptions from generic "AI SEO" language.
- `/answer-engine-optimization` → resolve per C1.

### C3 — PPC flagship vs /pay-per-click-ppc-management-services (canonical conflict)
`/pay-per-click-ppc-management-services` (10,949 GSC impressions) currently canonicalizes to `/google-ads-management-services` in `comps/CustomLayout.js`. The PPC URL earns impressions but hands all equity/signals to the Ads page. (Action-plan item 11.)

**Recommended owner:** keep `/google-ads-management-services` as the PPC umbrella; make the canonical explicit and add self-referencing canonical on the PPC URL only after a deliberate decision — either (a) 301 the PPC page into the Ads page, or (b) make the PPC page the umbrella and 301 the Ads page into it. Do not leave a silent cross-canonical.

### C4 — Facebook / LinkedIn "marketing vs ads" pairs
| URL A (ads) | URL B (marketing) | Overlap |
| --- | --- | --- |
| /facebook-ads-management-services | /facebook-marketing | "Facebook advertising/marketing in Mumbai" |
| /linkedin-ads-management-services | /linkedin-marketing | "LinkedIn advertising/marketing" |

**Recommended owners:** `/facebook-ads-management-services` = paid (ads, campaigns, spend). `/facebook-marketing` = organic/content/branding. Same for LinkedIn. Each page must lead with its distinction in H1 + intro; otherwise one page per pair.

### C5 — SEO packages page vs flagship
`/search-engine-optimization-seo-services-packages` canonicals to `/seo-company-mumbai` in CustomLayout but is a fully separate 120KB page. "SEO packages India" is a distinct query class from "SEO services."

**Recommended owner for "SEO packages India":** the packages page (self-canonical), so it can own the query; flagship keeps "SEO services / SEO company India." Either that, or hard 301 the packages page into the flagship and fold pricing there. Pick one.

---

## 2. Cluster keyword map — intended owner per keyword

### Digital Marketing umbrella
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "digital marketing agency Mumbai/Delhi" | `/` (homepage) | Home already owns this (title: "Top Digital Marketing Agency in Mumbai & Delhi, India"). |
| "digital marketing services India/Mumbai" | `/digital-marketing-services` | Thin page (3KB) — beef up before relying on it. |
| "internet marketing company Mumbai" | `/internet-marketing-company-mumbai-india` | Distinct legacy keyword; keep. |
| **"digital marketing agency in India" (item 8 proposal)** | **Conflicts with homepage + /digital-marketing-services + /internet-marketing-company-mumbai-india.** | Do NOT build a separate page unless the homepage is first refocused on Mumbai/Delhi local and the new page claims national. Recommended: strengthen `/digital-marketing-services` as the national pillar instead of a new URL. |

### SEO cluster
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "SEO services India" | /seo-company-mumbai | Flagship. H1 now: "Search Engine Optimization Services in India & SEO Company in Mumbai." |
| "SEO company India" | /seo-company-mumbai | **Item 9 proposes a new "SEO Company in India" page → direct conflict with the flagship.** Do not create; the flagship must own this. See §3. |
| "SEO company Mumbai" | /seo-company-mumbai | Covered by flagship H1/meta. |
| "SEO company Bangalore/Delhi/Hyderabad/Pune" | /seo-company-bangalore / -delhi / -hyderabad / -pune | Distinct geo pages — fine. Ensure no city page targets "India" generically. |
| "SEO packages India" | /search-engine-optimization-seo-services-packages | Per C5 — needs self-canonical or 301. |
| "e-commerce SEO" | /e-commerce-seo-services | Platform variants (Shopify/WooCommerce) link here as umbrella. |
| "Shopify SEO" | /shopify-seo-services | Distinct platform keyword. |
| "WooCommerce SEO" | /woocommerce-seo-services | Distinct platform keyword. |
| "enterprise SEO" | /enterprise-seo-services | |
| "technical SEO" | /technical-seo-services | |
| "local SEO" | /local-seo-services | Legacy /regional-local-seo-services already 301s here. |
| "mobile SEO" | /mobile-seo-services | |
| "on-page SEO" | /on-page-seo-services | |
| "off-page SEO / link building" | /off-page-seo-services | Article/directory/press/forum/social-bookmark submission pages already 301 here. |
| "SEO audit" | /seo-audit-services | |
| "SEO outsourcing" | /search-engine-optimization-outsourcing-seo-services | |
| "white label SEO" | /white-label-seo-services | |
| "multilingual/international SEO" | /multilingual-seo-services | Used by flagship "International SEO" subtopic link. |
| "SEO content writing" | /seo-content-writing-services | Flagship "Content SEO" subtopic now links here. |
| "keyword research" | /keyword-research-services-mumbai-india | |
| "Google penalty removal/recovery" | /google-penalty-recovery | Flagship subtopic now links here. |
| "YouTube SEO" | /youtube-marketing (closest live page) | Flagship subtopic now links here. If "YouTube SEO" becomes a real query target, consider a dedicated /youtube-seo-services page later — do not retarget /youtube-marketing until traffic data confirms. |
| "app store optimization (ASO)" | /app-store-optimization | Flagship subtopic now links here. |

### PPC cluster
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "Google Ads management India" | /google-ads-management-services | PPC umbrella. |
| "PPC management services India" | /pay-per-click-ppc-management-services | Per C3 — resolve canonical conflict. |
| "PPC packages" | /ppc-management-services-packages | Keep distinct "packages" intent; avoid repeating umbrella H1. |
| "Facebook Ads" | /facebook-ads-management-services | vs /facebook-marketing → C4. |
| "Instagram Ads" | /instagram-ads-management-services | |
| "LinkedIn Ads" | /linkedin-ads-management-services | vs /linkedin-marketing → C4. |
| "TikTok Ads" | /tiktok-ads-management-services | |
| "AI PPC services" | /ai-ppc-services | Other AI-PPC pages (chatgpt/claude/gemini/perplexity) must scope to tool brand only. |

### Web Design cluster
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "web design agency Mumbai" | /website-designing-services | Flagship. |
| "web design company Mumbai/India" | /website-designing-companies-mumbai | Distinct "companies in Mumbai" query. |
| "custom website design" | /custom-website-designing-services | |
| "corporate website design" | /corporate-website-designing-services | |
| "responsive website design" | /responsive-website-designing-services | |
| "dynamic website design" | /dynamic-website-designing-services | |
| "professional website design" | /professional-website-designing-services | HIGH overlap risk with flagship — if it cannot earn separate impressions, 301 into flagship. |
| "mobile website design" | /mobile-website-designing-services | |
| "Bootstrap website design" | /bootstrap-website-designing-services | |
| "CMS website design & development" | /cms-website-design-development-services | |
| "website redesigning" | /website-redesigning-services | vs /website-redevelopment-services — verify separate intent (visual refresh vs rebuild); if not, consolidate. |

### Web Development cluster
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "web development company Mumbai" | /website-development-services | Flagship. |
| "custom website development" | /custom-website-development-companies-mumbai-india | Distinct "companies in Mumbai" query. |
| "PHP development" | /php-website-development-services | |
| "WordPress development" | /wordpess-development-services + /wordpress-website-design-development-services | **Two WordPress development URLs** — de-conflict: one = WordPress dev, other = WordPress design+dev. Flagged; currently thin overlap. |
| "CMS development" | /cms-development-companies-mumbai-india | |
| Framework pages (ASP.NET, Laravel, CodeIgniter, Drupal, Joomla, etc.) | each `/xxx-*-services` | Generally distinct; safe. |

### Social cluster
| Keyword / phrase | Owner URL | Notes |
| --- | --- | --- |
| "social media marketing" | /social-media-marketing-services | |
| "social media optimization / SMO" | /social-media-optimization-services | /social-media-optimization already 301s here. |
| "content marketing" | /content-marketing-services | |
| "influencer marketing" | /influencer-marketing-services | |
| "email marketing" | /email-marketing-services-companies-mumbai-india | |
| "WhatsApp marketing" | /whatsapp-marketing | |
| "ORM / reputation management" | /online-reputation-management-services | /online-reputation-repair-service is a separate "repair" intent page — verify they don't both target "reputation management." |

---

## 3. Audit of proposed new pages (items 8, 9, 19)

Per decision: **audit first, do not create unless conflict-free.**

### Item 8 — "Digital Marketing Agency in Mumbai/India" pillar (new page)
- **Conflicts:** homepage (already "Top Digital Marketing Agency in Mumbai & Delhi, India", 9,900–49,500 vol), `/digital-marketing-services`, `/internet-marketing-company-mumbai-india`.
- **Verdict:** DO NOT create a new URL. Instead, upgrade `/digital-marketing-services` into the national pillar (it is currently 3KB and generic). This captures the demand without splitting the cluster. If a separate pillar is still desired later, the homepage must be refocused to local (Mumbai/Delhi) intent first.

### Item 9 — "SEO Company / Providers in India" (new page)
- **Conflicts:** the flagship `/seo-company-mumbai` already targets "SEO company India" in its meta description, FAQs ("Which is the best SEO company in India?"), and now H1. City pages cover Bangalore/Delhi/Hyderabad/Pune.
- **Verdict:** HIGH CONFLICT. Do NOT create. The flagship is the correct owner of "SEO company India." Route the demand there and strengthen it (the 9,900-vol keyword is already partially owned).

### Item 19 — "Best Digital Marketing Companies in India" (listicle)
- **Conflicts:** top-of-funnel listicle intent is distinct from transactional service pages, but overlaps homepage + /digital-marketing-services for "best digital marketing company/agency India" phrasing.
- **Verdict:** ACCEPTABLE if built as an editorial/blog-style listicle (blog section, not a service page), self-canonicalized, and never titled with service-page language ("digital marketing services"). If it cannot be a blog/listicle, do not build.

---

## 4. Monitoring (action-plan item 28)

| Cluster | Pages | Watch for |
| --- | --- | --- |
| SEO | /seo-company-mumbai, -packages, /e-commerce-seo-services, /enterprise-seo-services, /technical-seo-services | Any page reaching top 20 for "seo services india" / "seo packages india". |
| Web design | /website-designing-services, /custom-website-designing-services, /professional-website-designing-services, /website-designing-companies-mumbai | Any page reaching top 20 for "website design company mumbai" / "web design agency mumbai". |
| AI SEO | 9 pages in C2 | Any page reaching top 20 for "ai seo services". |
| PPC | /google-ads-management-services, /pay-per-click-ppc-management-services, /ppc-management-services-packages | Any page reaching top 20 for "ppc management services india". |

Check GSC quarterly: if two URLs of a cluster appear in the same query's top 20, consolidate to the owner URL listed above.

---

## 5. Quick-fix actions from this map (already applied or recommended)

- **Applied in this session:** flagship SEO H1 now explicitly owns "SEO services in India & SEO company in Mumbai" (removes ambiguity with future /seo-company pages); flagship internal-links its 6 sub-services + 4 new subtopics; Google Ads page now links sibling paid-ads pages.
- **Recommended next:** resolve C1 (AEO/SearchAI 301 or re-split), C3 (PPC canonical), C5 (packages canonical), and the WordPress development pair. These are small config edits (`next.config.mjs` / `comps/CustomLayout.js`) with the highest cannibalization payoff.
