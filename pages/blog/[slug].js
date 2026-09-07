import React, { useState, useEffect } from "react";
import Link from "next/link";
import { format } from "date-fns";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import RelatedServices from "@/comps/RelatedServices";
import { getArticleBySlug, listArticles } from "@/lib/trendsDb";

function formatBlogImageUrl(imagePath) {
  if (!imagePath) return "https://www.sibinfotech.com/assets/og/sib-infotech.webp";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  return `${CONSTANTS.BACKEND_URL}${imagePath}`;
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const headers = {
    "Content-Type": "application/json",
    Authorization: CONSTANTS.API_TOKEN,
  };

  const axiosOpts = { timeout: 8000 };

  let blog = null;
  let blogs = [];
  let blogSections = [];
  let blogFaqs = [];
  let author = null;

  try {
    const [resBlog, resBlogs] = await Promise.allSettled([
      axios.get(`${CONSTANTS.API_URL}blog/single/${slug}?slug=1`, { headers, ...axiosOpts }),
      axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, { headers, ...axiosOpts }),
    ]);

    if (resBlog.status === "fulfilled" && resBlog.value.data?.blog?.length > 0) {
      blog = resBlog.value.data.blog;
      blogSections = resBlog.value.data.blog_sections || [];
      blogFaqs = resBlog.value.data.blog_faqs || [];
    }

    if (resBlogs.status === "fulfilled" && resBlogs.value.data?.blogs) {
      blogs = resBlogs.value.data.blogs || [];
    }
  } catch (error) {
    console.error("Error fetching remote blog data:", error);
  }

  // Load published articles from trendsDb
  let localTrendsAsBlogs = [];
  let localArticle = null;
  try {
    localArticle = getArticleBySlug(slug);
    const publishedTrends = listArticles({ status: "Published" });
    localTrendsAsBlogs = (publishedTrends?.items || []).map((a) => ({
      id: a.id,
      name: a.title,
      slug: a.slug,
      description: a.excerpt || a.metaDescription,
      image: a.featuredImage || "/assets/og/sib-infotech.webp",
      image_alt: a.featuredImageAlt || a.title,
      bdate: a.publishDate || a.createdAt,
      createdAt: a.createdAt,
      category_id: null,
      category_name: a.category || "Digital Marketing",
    }));
  } catch (err) {
    console.error("Error loading local trendsDb:", err);
  }

  // Combine and deduplicate blogs for recent sidebar
  const allBlogsMap = new Map();
  localTrendsAsBlogs.forEach((b) => allBlogsMap.set(b.slug, b));
  (blogs || []).forEach((b) => {
    if (!allBlogsMap.has(b.slug)) {
      allBlogsMap.set(b.slug, b);
    }
  });
  blogs = Array.from(allBlogsMap.values()).sort((a, b) => {
    const dateA = new Date(a.bdate || a.createdAt || 0).getTime();
    const dateB = new Date(b.bdate || b.createdAt || 0).getTime();
    return dateB - dateA;
  });

  // If blog wasn't found in remote API, render from local trendsDb
  if (!blog && localArticle && localArticle.status === "Published") {
    blog = [
      {
        id: localArticle.id,
        name: localArticle.title,
        slug: localArticle.slug,
        description: localArticle.html,
        meta_title: localArticle.seoTitle || localArticle.title,
        meta_description: localArticle.metaDescription || localArticle.excerpt,
        meta_keywords: [
          localArticle.primaryKeyword,
          ...(localArticle.secondaryKeywords || []),
        ]
          .filter(Boolean)
          .join(", "),
        bdate: localArticle.publishDate || localArticle.createdAt,
        createdAt: localArticle.createdAt,
        updatedAt: localArticle.updatedAt,
        image: localArticle.featuredImage || "/assets/og/sib-infotech.webp",
        image_alt: localArticle.featuredImageAlt || localArticle.title,
        category_id: null,
        category_name: localArticle.category || "Digital Marketing",
        author_id: null,
        schema_jsonld: localArticle.schemaJsonLd || null,
        banner_background_color: null,
        banner_text_color: null,
      },
    ];

    blogFaqs = (localArticle.faqs || []).map((f, i) => ({
      id: i + 1,
      question: f.question,
      answer: f.answer,
    }));

    let authorBio = "<p>Radhey Shyam is the Co-Founder of SIB Infotech and spearheads content outreach and digital visibility strategies. With deep expertise in SEO, link building, and audience engagement, Radhey plays a key role in aligning content with both user intent and ranking goals.</p>";
    if (localArticle.author === "SIB Infotech Editorial") {
      authorBio = "<p>SIB Infotech Editorial Team delivers industry-leading insights on SEO, PPC, GEO, AI Search, and Digital Marketing strategies.</p>";
    } else if (localArticle.author && localArticle.author !== "Radhey Shyam") {
      authorBio = localArticle.authorBio || `<p>${localArticle.author} is a content strategist at SIB Infotech specializing in organic visibility, AI search optimization, and search marketing.</p>`;
    }

    author = {
      name: localArticle.author || "Radhey Shyam",
      image: "uploads/author/author_1752648487492.jpg",
      description: authorBio,
    };
  }

  if (!blog || !Array.isArray(blog) || blog.length === 0) {
    return { notFound: true };
  }

  // If author exists on remote API
  if (blog[0]?.author_id && !author) {
    try {
      const resAuthor = await axios.get(
        `${CONSTANTS.API_URL}author/single/${blog[0].author_id}`,
        { headers, ...axiosOpts },
      );
      author = resAuthor.data?.author || null;
    } catch {
      author = null;
    }
  }

  // Universal Author Fallback so 100% of blogs have an identical author card
  if (!author) {
    author = {
      name: "Anuj Bajaj",
      image: "uploads/author/author_1752648487492.jpg",
      description:
        "<p>Anuj Bajaj is the Co-Founder of SIB Infotech and a seasoned digital strategist with over 18 years of experience in website development, SEO, and performance marketing. He leads the agency’s content and digital growth initiatives, ensuring that every piece of content is both search-engine optimized and value-driven. Anuj believes in blending AI-powered efficiency with human creativity to deliver content that educates, converts, and builds authority.</p>",
    };
  }

  return {
    props: {
      blog,
      blogs: blogs || [],
      blogSections: blogSections || [],
      blogFaqs: blogFaqs || [],
      author,
    },
  };
}

const BLOG_META_OVERRIDES = {
  "ppc-management-pricing-mumbai": {
    title: "PPC Management Pricing in Mumbai 2026: Costs, Fees & CPC Benchmarks",
    description:
      "Compare PPC management costs in Mumbai for 2026: ₹1.5L–₹17.3L+ monthly retainers, CPC benchmarks by industry, and pricing models explained. Updated for Mumbai market dynamics.",
  },
  "top-seo-companies-in-mumbai": {
    title: "Top 10 SEO Companies in Mumbai 2026 | Reviewed & Ranked",
    description:
      "Independent review of the best SEO companies in Mumbai for 2026 — ranked by results, client reviews, and expertise. Use this guide to shortlist the right SEO agency for your business.",
  },
  "digital-marketing-importance-and-types": {
    title: "Importance and Types of Digital Marketing in 2026 | Guide",
    description:
      "A complete guide to understanding the importance of digital marketing and the different types of digital marketing channels — SEO, PPC, social media, content, and site marketing explained.",
  },
  "how-much-the-average-seo-services-cost-in-india": {
    title: "SEO Services Cost in India 2026: Pricing, Packages & What to Expect",
    description:
      "How much do SEO services cost in India in 2026? A transparent breakdown of SEO pricing, monthly packages, and what you get at each price point — with honest advice on what to avoid.",
  },
};

// CTA interceptor banners for posts that cannibalise key service pages
const BLOG_CTA_INTERCEPTORS = {
  "top-seo-companies-in-mumbai": {
    heading: "Looking for the Top SEO Company in Mumbai?",
    body: "SIB Infotech is a Google Premier Partner and one of the most reviewed SEO agencies in Mumbai. We have ranked 1000+ brands across 40+ countries since 2005.",
    primaryText: "Top SEO Company in Mumbai & Best SEO Agency in India",
    primaryHref: "/seo-company-mumbai",
    secondaryText: "View SEO Packages",
    secondaryHref: "/search-engine-optimization-seo-services-packages",
  },
  "digital-marketing-importance-and-types": {
    heading: "Need a Site Marketing & Digital Marketing Partner?",
    body: "SIB Infotech provides full-funnel site marketing and digital marketing services in India — SEO, PPC, social media, content, and analytics under one roof.",
    primaryText: "Site Marketing & Digital Marketing Services in India",
    primaryHref: "/digital-marketing-services",
    secondaryText: "Talk to an Expert",
    secondaryHref: "/contact-us",
  },
  "how-much-the-average-seo-services-cost-in-india": {
    heading: "Get Transparent SEO Pricing from a Google Premier Partner",
    body: "SIB Infotech offers affordable monthly SEO packages in India with no lock-in contracts. Starter plans from ₹20,000/month, full pricing published on our packages page.",
    primaryText: "View Monthly SEO Packages & Pricing",
    primaryHref: "/search-engine-optimization-seo-services-packages",
    secondaryText: "Get a Free SEO Audit",
    secondaryHref: "/seo-company-mumbai",
  },
  "things-to-consider-before-redesigning-your-website": {
    heading: "Planning a Website Redesign Without Losing SEO Rankings?",
    body: "SIB Infotech delivers conversion-focused website redesigns with 100% SEO migration safety. Preserve your traffic, backlinks, and brand authority.",
    primaryText: "Professional Website Redesign Services",
    primaryHref: "/website-redesigning-services",
    secondaryText: "Request Free Redesign Proposal",
    secondaryHref: "/contact-us",
  },
  "improving-ecommerce-seo-and-user-experience": {
    heading: "Scale Your Online Store Revenue with Proven E-Commerce SEO",
    body: "Drive high-intent product searches into profitable checkouts. SIB Infotech provides Shopify, WooCommerce & custom e-commerce SEO services.",
    primaryText: "Explore E-Commerce SEO Services",
    primaryHref: "/e-commerce-seo-services",
    secondaryText: "View E-Commerce Packages",
    secondaryHref: "/ecommerce-seo-services-packages",
  },
  "core-web-vitals-google-new-official-ranking-factor-signal": {
    heading: "Fix Core Web Vitals (LCP, INP, CLS) & Site Speed Gaps",
    body: "Google demands fast, responsive websites. SIB Infotech's technical SEO team diagnoses and solves Core Web Vitals bottlenecks.",
    primaryText: "Technical SEO Audit & Speed Optimization",
    primaryHref: "/technical-seo-services",
    secondaryText: "Get Free Speed Audit",
    secondaryHref: "/contact-us",
  },
  "ways-to-make-your-website-s-landing-page-a-conversion-machine": {
    heading: "Turn Clicks into Paying Customers with Conversion Rate Optimization",
    body: "Stop wasting ad spend on low-converting pages. SIB Infotech designs high-converting landing pages backed by data-driven CRO testing.",
    primaryText: "Conversion Rate Optimization Services",
    primaryHref: "/conversion-rate-optimization",
    secondaryText: "Talk to a CRO Specialist",
    secondaryHref: "/contact-us",
  },
  "how-to-increase-traffic-to-your-website-through-blogging": {
    heading: "Generate Compounding Organic Leads with Content SEO",
    body: "Rank for high-volume informational search queries with search-optimized blog articles and semantic topic clusters.",
    primaryText: "SEO Content Writing Services",
    primaryHref: "/seo-content-writing-services",
    secondaryText: "Explore Organic Growth Plans",
    secondaryHref: "/seo-company-mumbai",
  },
};

function BlogCtaInterceptor({ slug }) {
  const cta = BLOG_CTA_INTERCEPTORS[slug];
  if (!cta) return null;
  return (
    <div
      className="blog-cta-interceptor my-4 p-4 rounded"
      style={{
        background: "linear-gradient(135deg, #0a0a2e 0%, #1a1a4e 100%)",
        border: "1px solid #e63946",
        color: "#fff",
      }}
    >
      <h3 style={{ color: "#fff", marginBottom: "0.5rem", fontSize: "1.2rem", fontWeight: 700 }}>
        {cta.heading}
      </h3>
      <p style={{ color: "#ccc", marginBottom: "1rem", fontSize: "0.95rem" }}>{cta.body}</p>
      <div className="d-flex flex-wrap gap-2">
        <a
          href={cta.primaryHref}
          style={{
            background: "#e63946",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            display: "inline-block",
          }}
        >
          {cta.primaryText}
        </a>
        <a
          href={cta.secondaryHref}
          style={{
            background: "transparent",
            color: "#fff",
            padding: "0.5rem 1.25rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "1px solid #fff",
            display: "inline-block",
          }}
        >
          {cta.secondaryText}
        </a>
      </div>
    </div>
  );
}

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const validFaqs = (faqs || []).filter((f) => f && (f.question || f.answer));
  if (!validFaqs.length) return null;

  return (
    <div className="blog-faqs">
      <div className="faq-header">
        <div className="faq-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <span>Frequently Asked Questions</span>
        </div>
        <h3 className="faq-main-title">Common Questions & Answers</h3>
      </div>
      <div className="faq-accordion">
        {validFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id || index}
              className={`faq-card ${isOpen ? "faq-card-open" : ""}`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="faq-toggle-btn"
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className={`faq-icon-pill ${isOpen ? "faq-icon-active" : ""}`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="faq-chevron"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="faq-answer-wrapper">
                  <div
                    className="faq-answer-body"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
function cleanSchemaJsonLd(schema) {
  if (!schema || typeof schema !== "string") return "";

  return schema
    .replace(/^<script[^>]*type=["']application\/ld\+json["'][^>]*>/i, "")
    .replace(/<\/script>$/i, "")
    .trim();
}

function stripHtml(html) {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text, max) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max).trim() + "…";
}

/**
 * Fallback BlogPosting + BreadcrumbList graph.
 *
 * Only used when a post has no hand-authored schema_jsonld. Most posts don't:
 * the column is null for the majority of the catalogue, which left those pages
 * emitting nothing but the site-wide WebSite/Organization/LocalBusiness blocks
 * and no article-level markup at all.
 */
function buildBlogPostingSchema({ post, title, description, author }) {
  if (!post) return "";

  const url = `https://www.sibinfotech.com/blog/${post.slug}`;
  const image = post.image
    ? `${CONSTANTS.BACKEND_URL}${post.image}`
    : "https://www.sibinfotech.com/images/logo.png";

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: truncate(title, 110),
        description,
        image,
        datePublished: post.bdate || post.createdAt || undefined,
        dateModified: post.updatedAt || post.bdate || undefined,
        inLanguage: "en-IN",
        author: author?.name
          ? { "@type": "Person", name: author.name }
          : { "@type": "Organization", name: "SIB Infotech" },
        publisher: {
          "@type": "Organization",
          name: "SIB Infotech",
          logo: {
            "@type": "ImageObject",
            url: "https://www.sibinfotech.com/images/logo.png",
          },
        },
        ...(post.category_name ? { articleSection: post.category_name } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.sibinfotech.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.sibinfotech.com/blog",
          },
          { "@type": "ListItem", position: 3, name: post.name, item: url },
        ],
      },
    ],
  });
}

function SingleBlog({ blog, blogs, blogSections, blogFaqs, author }) {
  if (!blog || !Array.isArray(blog) || blog.length === 0) return null;

  const selectedcategory = blog[0]?.category_id || null;

  const blogName = blog && blog[0] ? blog[0].name : "";
  const postSlug = blog && blog[0] ? blog[0].slug : "";
  const metaOverride = BLOG_META_OVERRIDES[postSlug];
  const metaTitle =
    (metaOverride && metaOverride.title) ||
    (blog && blog[0]?.meta_title?.trim()
      ? blog[0].meta_title.trim()
      : `${blogName || "SIB Infotech Blog"} | SIB Infotech`);
  const metaDescription =
    (metaOverride && metaOverride.description) ||
    (blog && blog[0]?.meta_description?.trim()
      ? blog[0].meta_description.trim()
      : truncate(stripHtml(blog && blog[0]?.description), 160) ||
        "Read expert insights from SIB Infotech on SEO, PPC, digital marketing and web design.");
  const metaKeywords =
    blog && blog[0]?.meta_keywords?.trim()
      ? blog[0].meta_keywords.trim()
      : "digital marketing, seo, ppc, sib infotech blog";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sidebar = document.getElementById("blog-sidebar");
    const faqSection = document.querySelector(".blog-faqs");
    if (!sidebar || !faqSection) return;

    const sidebarInitialTop = sidebar.offsetTop;
    const sidebarHeight = sidebar.offsetHeight;
    const offsetBuffer = 150;
    const scrollOffset = 100;

    const handleScroll = () => {
      if (window.innerWidth < 992) {
        sidebar.classList.remove("fixed-sidebar");
        sidebar.style.visibility = "visible";
        sidebar.style.maxHeight = "none";
        sidebar.style.overflowY = "visible";
        return;
      }

      const scrollTop = window.scrollY;
      const faqTop = faqSection.getBoundingClientRect().top + window.scrollY;
      const sidebarBottom = scrollTop + sidebarHeight;

      if (
        scrollTop > sidebarInitialTop + offsetBuffer &&
        sidebarBottom < faqTop
      ) {
        sidebar.classList.add("fixed-sidebar");
        sidebar.style.visibility = "visible";
        sidebar.style.maxHeight = `calc(100vh - ${scrollOffset + 20}px)`; // Adjust height to fit viewport
        sidebar.style.overflowY = "auto";
      } else if (sidebarBottom >= faqTop) {
        sidebar.classList.remove("fixed-sidebar");
        sidebar.style.visibility = "hidden";
      } else {
        sidebar.classList.remove("fixed-sidebar");
        sidebar.style.visibility = "visible";
        sidebar.style.maxHeight = "none";
        sidebar.style.overflowY = "visible";
      }
    };

    // Smooth scroll with offset
    const anchorLinks = sidebar.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const top =
          target.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div>
      {blog && (
        <CustomLayout>
          <Head>
            <title>{metaTitle}</title>
            <meta name="keywords" content={metaKeywords} />
            <meta name="description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://www.sibinfotech.com/blog/${blog[0].slug}`}
            />
            <meta property="og:title" content={metaTitle} />
            <meta
              property="og:description"
              content={metaDescription}
            />
            <meta
              property="og:image"
              content={formatBlogImageUrl(blog[0].image)}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="og:image"
              content={formatBlogImageUrl(blog[0].image)}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta
              property="twitter:url"
              content={`https://www.sibinfotech.com/blog/${blog[0].slug}`}
            />
            <meta property="twitter:title" content={metaTitle} />
            <meta
              property="twitter:description"
              content={metaDescription}
            />
            <meta
              property="twitter:image"
              content={formatBlogImageUrl(blog[0].image)}
            />
            {blog[0]?.schema_jsonld ? (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: cleanSchemaJsonLd(blog[0].schema_jsonld),
                }}
              />
            ) : (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: buildBlogPostingSchema({
                    post: blog[0],
                    title: metaTitle,
                    description: metaDescription,
                    author,
                  }),
                }}
              />
            )}
            {blogFaqs && blogFaqs.length >= 2 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: blogFaqs
                      .filter((f) => f.question && f.answer)
                      .slice(0, 20)
                      .map((f) => ({
                        "@type": "Question",
                        name: f.question,
                        acceptedAnswer: {
                          "@type": "Answer",
                          text: stripHtml(f.answer),
                        },
                      })),
                  }),
                }}
              />
            )}
          </Head>

          {/* Banner Section */}
          <section id="single_blog">
            <div className="containerFull">
              <div className="singleBlogInners">
                <div className="row align-items-center">
                  <div className="col-lg-10">
                    <div className="rightSingleBlog">
                      <div className="inlineAdded">
                        <ul>
                          <li>
                            {blog[0]?.bdate
                              ? format(new Date(blog[0].bdate), "MMM dd, yyyy")
                              : "SIB Infotech Editorial"}
                          </li>
                        </ul>
                      </div>
                      <h1 className="regular_heading fontHeading fontWeight600">
                        {blog[0]?.name}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumb */}
          <section className="blog_breadcrumb">
            <div className="containerFull">
              <p className="breadcrum-text">
                <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>
                  Home
                </Link>{" "}
                <i className="fa-solid fa-angle-right"></i>{" "}
                <Link href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>
                  Blog
                </Link>{" "}
                <i className="fa-solid fa-angle-right"></i>{" "}
                <span className="text_primary">{blog[0]?.name}</span>
              </p>
            </div>
          </section>

          {/* Content Section with Sidebar */}
          <section className="py-5">
            <div className="containerFull">
              <div className="row">
                {/* Main Content */}
                <div className="col-lg-9 order-1 order-lg-2">
                  {blog[0]?.image &&
                    !blog[0].image.includes("sib-infotech.webp") &&
                    !blog[0].image.includes("/assets/og/") && (
                      <div className="mb-4">
                        <img
                          src={formatBlogImageUrl(blog[0].image)}
                          alt={blog[0].image_alt || blog[0].name}
                          className="img-fluid br-5"
                          style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
                        />
                      </div>
                    )}

                  {author && (
                    <div className="blog_section_shadow">
                      <h2 className="blog_section_item">About The Author</h2>
                      <div className="blogAuthor">
                        <div className="authorImage">
                          <img
                            src={formatBlogImageUrl(author.image)}
                            alt={author.name}
                          />
                        </div>
                        <div className="authorContent">
                          <p className="authorName">{author.name}</p>
                          <div
                            className="authorDescription"
                            dangerouslySetInnerHTML={{
                              __html: author.description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Blog Description */}
                  {blog[0]?.description && (
                    <div
                      dangerouslySetInnerHTML={{ __html: blog[0].description }}
                      className="blogDescriptions mb-4"
                    ></div>
                  )}

                  {/* Cannibalization Interceptor CTA */}
                  <BlogCtaInterceptor slug={postSlug} />

                  {/* Legacy Blog Sections (rendered inside universal typography flow) */}
                  {blogSections &&
                    blogSections.length > 0 &&
                    blogSections.some(
                      (section) =>
                        section.title ||
                        section.description ||
                        section.media ||
                        section.grey_quote,
                    ) && (
                      <div className="blogDescriptions">
                        {blogSections.map((section) => (
                          <div key={section.id} id={`section-${section.id}`} className="mb-4">
                            {section.title && <h2>{section.title}</h2>}
                            {section.media_type === "image" && section.media && (
                              <div className="mb-3">
                                <img
                                  src={formatBlogImageUrl(section.media)}
                                  alt=""
                                  className="img-fluid br-5"
                                />
                              </div>
                            )}
                            {section.description && (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: section.description,
                                }}
                              />
                            )}
                            {section.grey_quote && (
                              <blockquote
                                dangerouslySetInnerHTML={{
                                  __html: section.grey_quote,
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                  {/* FAQs */}
                  {blogFaqs &&
                    blogFaqs.length > 0 &&
                    blogFaqs.some((faq) => faq.question || faq.answer) && (
                      <FaqAccordion faqs={blogFaqs} />
                    )}
                </div>

                {/* Sidebar */}
                <div className="col-lg-3 order-2 order-lg-1">
                  <div className="blog-sidebar" id="blog-sidebar">
                    {blogSections && blogSections.some((s) => s.section_link_title) && (
                      <>
                        <h5 className="mb-3">Blog Sections</h5>
                        <ul className="blog-sidebar list-unstyled border-shadow mb-4">
                          {blogSections
                            .filter((s) => s.section_link_title)
                            .map((section) => (
                              <li key={section.id}>
                                <a href={`#section-${section.id}`}>
                                  {section.section_link_title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </>
                    )}

                    <div>
                      <h5 className="mb-3">Recent posts</h5>

                      {blogs &&
                        blogs
                          .filter(
                            (blogItem) =>
                              !(blog && blog[0] && blogItem.slug === blog[0].slug),
                          )
                          .slice(0, 8)
                          .map((blogItem, index) => (
                            <div
                              key={index}
                              className="inline_blog_card border-shadow mb-3"
                            >
                              <Link href={"/blog/" + blogItem.slug}>
                                <div className="img">
                                  <img
                                    src={formatBlogImageUrl(blogItem.image)}
                                    alt={blogItem.image_alt || blogItem.name}
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="content">
                                  <p className="title">{blogItem.name}</p>
                                </div>
                              </Link>
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        
        </CustomLayout>
      )}
    </div>
  );
}

export default SingleBlog;
