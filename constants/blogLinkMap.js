/**
 * Service page -> supporting blog posts.
 *
 * Audited 2026-09-01: not one of the 208 service pages linked to any of the 22
 * legacy blog posts. Those posts were reachable only from the blog index and a
 * generic sidebar, which is why Google had stopped recrawling them — nothing on
 * the site vouched for them.
 *
 * This map is the inbound half of the internal-linking plan. The outbound half
 * (one contextual commercial link per article, placed in body copy) lives in the
 * article content itself and carries more weight than a related-content block,
 * so this supplements those links rather than replacing them.
 *
 * Rules when editing:
 *   - Keys are service page paths. Values are informational blog posts only.
 *   - Never point a service page at a post that targets the same commercial
 *     query — the blog should feed the service page, not compete with it.
 *   - Vary the anchor text. Repeating one exact-match anchor sitewide is itself
 *     a cannibalization signal.
 */

export const SERVICE_BLOG_LINKS = {
  // --- Website design & UX cluster ---
  "/website-designing-services": [
    {
      href: "/blog/what-is-the-difference-between-web-designing-and-web-development",
      title: "Web design vs web development: what actually differs",
      description:
        "Where design work ends, where development begins, and which skills sit on each side.",
    },
    {
      href: "/blog/which-colors-should-i-use-for-my-website-and-why",
      title: "Choosing a website colour palette",
      description:
        "Contrast, accessibility and brand consistency when picking colours for a site.",
    },
    {
      href: "/blog/necessary-elements-of-a-great-website",
      title: "Practical web design tips for business sites",
      description:
        "The elements a business website needs before anything else is worth doing.",
    },
  ],

  "/responsive-website-designing-services": [
    {
      href: "/blog/what-is-responsive-design-and-why-my-website-need-it",
      title: "What responsive web design actually means",
      description:
        "A plain explanation of responsive design and how it differs from adaptive.",
    },
    {
      href: "/blog/does-your-website-need-a-mobile-makeover",
      title: "How to make a website mobile friendly",
      description:
        "A step-by-step guide to auditing and fixing a site that fails on phones.",
    },
  ],

  "/mobile-website-designing-services": [
    {
      href: "/blog/does-your-website-need-a-mobile-makeover",
      title: "Making an existing site work properly on mobile",
      description:
        "What to check, what to fix first, and how to tell whether a rebuild is warranted.",
    },
    {
      href: "/blog/what-is-responsive-design-and-why-my-website-need-it",
      title: "Responsive design explained",
      description: "Why one flexible layout beats maintaining a separate mobile site.",
    },
  ],

  "/website-redesigning-services": [
    {
      href: "/blog/things-to-consider-before-redesigning-your-website",
      title: "What to settle before a redesign starts",
      description:
        "The planning checklist that keeps a redesign from losing rankings and traffic.",
    },
    {
      href: "/blog/how-much-does-it-cost-to-redesign-a-website",
      title: "What a website redesign costs",
      description: "How redesign budgets break down and what drives the range.",
    },
  ],

  "/professional-website-designing-services": [
    {
      href: "/blog/role-of-a-professional-website-designing-company",
      title: "How a web design project actually runs",
      description:
        "Phases, deliverables, client responsibilities and where projects typically go wrong.",
    },
  ],

  // --- WordPress cluster ---
  "/wordpress-website-design-development-services": [
    {
      href: "/blog/why-design-websites-on-wordpress",
      title: "Why businesses build on WordPress",
      description:
        "How WordPress compares to hosted builders for a business site, and when it doesn't fit.",
    },
    {
      href: "/blog/limitations-of-a-wordpress-website",
      title: "Where WordPress falls short",
      description: "The honest constraints worth knowing before committing to the platform.",
    },
  ],

  "/themes-customization-services": [
    {
      href: "/blog/how-to-build-your-first-wordpress-theme",
      title: "Building and customising a WordPress theme",
      description:
        "A developer walkthrough of theme structure, templates and safe customisation.",
    },
  ],

  // --- Social cluster ---
  "/social-media-marketing-services": [
    {
      href: "/blog/key-elements-of-an-effective-social-media-marketing-strategy",
      title: "Building a social media marketing plan",
      description:
        "Goals, audience, channels, cadence and governance — the planning work before posting.",
    },
    {
      href: "/blog/tips-for-improving-social-media-roi",
      title: "Measuring social media ROI",
      description: "Which metrics tie social activity to revenue, and which ones mislead.",
    },
  ],

  "/facebook-ads-management-services": [
    {
      href: "/blog/social-media-advertising-tips-and-tricks",
      title: "Running social ads that perform",
      description:
        "Targeting, creative testing and budget structure for paid social campaigns.",
    },
  ],

  "/instagram-ads-managsement-services": [
    {
      href: "/blog/social-media-advertising-tips-and-tricks",
      title: "Paid social advertising fundamentals",
      description: "What separates ads that convert from ads that only collect impressions.",
    },
  ],

  // --- Search & traffic cluster ---
  "/off-page-seo-services": [
    {
      href: "/blog/steps-to-increase-domain-authority-of-a-website",
      title: "How to build genuine website authority",
      description:
        "What authority actually means to search engines, and why third-party scores aren't it.",
    },
  ],

  "/link-building-services": [
    {
      href: "/blog/steps-to-increase-domain-authority-of-a-website",
      title: "Website authority, explained properly",
      description: "Where links fit into authority, and what a good link is worth.",
    },
  ],

  "/blog-management-services": [
    {
      href: "/blog/how-to-increase-traffic-to-your-website-through-blogging",
      title: "Using blogging to grow site traffic",
      description:
        "How a blog compounds into search traffic, and the content strategy behind it.",
    },
    {
      href: "/blog/how-to-design-your-own-blog",
      title: "Designing a blog that people read",
      description: "Layout, readability and structure decisions for a blog section.",
    },
  ],

  "/seo-content-writing-services": [
    {
      href: "/blog/how-to-increase-traffic-to-your-website-through-blogging",
      title: "Blog content strategy for traffic growth",
      description: "Planning content that earns search visibility rather than filling a calendar.",
    },
  ],

  "/email-marketing-services-companies-mumbai-india": [
    {
      href: "/blog/how-email-marketing-impacts-lead-generation-on-digital-platform",
      title: "Email marketing best practices",
      description:
        "List quality, segmentation, deliverability and the sequences that generate leads.",
    },
  ],

  "/google-ads-management-services": [
    {
      href: "/blog/how-ai-powered-tools-revolutionize-ppc-bid-strategies",
      title: "Where PPC is heading",
      description:
        "Automation, first-party data and the measurement shifts reshaping paid search.",
    },
  ],

  // --- Ecommerce cluster ---
  "/e-commerce-seo-services": [
    {
      href: "/blog/improving-ecommerce-seo-and-user-experience",
      title: "Ecommerce SEO and user experience",
      description:
        "Product architecture, crawl efficiency and the experience signals that affect both.",
    },
  ],

  "/e-commerce-website-design-development-services": [
    {
      href: "/blog/improving-ecommerce-seo-and-user-experience",
      title: "Designing an ecommerce experience that converts",
      description: "Navigation, product pages and site search decisions that move revenue.",
    },
  ],

  // --- Brand & business cluster ---
  "/corporate-branding-service-mumbai-india": [
    {
      href: "/blog/when-to-rebrand-your-company",
      title: "Knowing when a rebrand is warranted",
      description: "The signals that justify rebranding, and the ones that don't.",
    },
  ],

  "/conversion-rate-optimization": [
    {
      href: "/blog/ways-to-make-your-website-s-landing-page-a-conversion-machine",
      title: "Landing page best practices",
      description:
        "Structure, copy, proof and friction — what to change first on an underperforming page.",
    },
  ],
};

/** Returns the supporting posts for a service path, or an empty array. */
export function getRelatedInsights(path) {
  if (!path) return [];
  return SERVICE_BLOG_LINKS[path.replace(/\/$/, "") || "/"] || [];
}
