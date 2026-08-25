import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import {
  FaHeading,
  FaFileLines,
  FaCode,
  FaGoogle,
  FaLink,
  FaRobot,
  FaFont,
  FaChartSimple,
  FaArrowRightArrowLeft,
  FaShareNodes,
  FaArrowRight,
  FaMagnifyingGlass,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function ToolsHubPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toolsList = [
    {
      id: "meta-title-generator",
      title: "Meta Title Generator",
      slug: "/tools/meta-title-generator",
      category: "content",
      icon: <FaHeading />,
      description:
        "Generate high-CTR, SEO-optimized page titles using AI formulas, power words, and pixel width counters.",
      badge: "Content SEO",
    },
    {
      id: "meta-description-generator",
      title: "Meta Description Generator",
      slug: "/tools/meta-description-generator",
      category: "content",
      icon: <FaFileLines />,
      description:
        "Craft compelling meta descriptions with real-time character counters and SERP preview simulators.",
      badge: "Content SEO",
    },
    {
      id: "schema-markup-generator",
      title: "Schema Markup Generator",
      slug: "/tools/schema-markup-generator",
      category: "technical",
      icon: <FaCode />,
      description:
        "Generate JSON-LD structured data for Articles, FAQs, Local Businesses, Products, Organizations, and more.",
      badge: "Technical SEO",
    },
    {
      id: "serp-preview-tool",
      title: "SERP Preview Tool",
      slug: "/tools/serp-preview-tool",
      category: "content",
      icon: <FaGoogle />,
      description:
        "Simulate Google search engine results on Desktop and Mobile to check title & description truncation limits.",
      badge: "SERP Simulator",
    },
    {
      id: "utm-url-builder",
      title: "UTM URL Builder",
      slug: "/tools/utm-url-builder",
      category: "tracking",
      icon: <FaLink />,
      description:
        "Build custom campaign tracking URLs with UTM parameters for Google Analytics, Facebook Ads, and email marketing.",
      badge: "Analytics & Tracking",
    },
    {
      id: "robots-txt-generator",
      title: "Robots.txt Generator",
      slug: "/tools/robots-txt-generator",
      category: "technical",
      icon: <FaRobot />,
      description:
        "Create custom robots.txt files with search bot rules, crawl delays, disallow paths, and sitemap directives.",
      badge: "Technical SEO",
    },
    {
      id: "seo-url-slug-generator",
      title: "SEO URL Slug Generator",
      slug: "/tools/seo-url-slug-generator",
      category: "content",
      icon: <FaFont />,
      description:
        "Convert post titles into clean, keyword-dense, user-friendly URL slugs with stop-word filtering.",
      badge: "Content SEO",
    },
    {
      id: "keyword-density-checker",
      title: "Keyword Density Checker",
      slug: "/tools/keyword-density-checker",
      category: "content",
      icon: <FaChartSimple />,
      description:
        "Analyze text content to measure keyword frequency, N-gram density percentages, and detect keyword stuffing.",
      badge: "Content Audit",
    },
    {
      id: "redirect-generator",
      title: "Redirect Generator",
      slug: "/tools/redirect-generator",
      category: "technical",
      icon: <FaArrowRightArrowLeft />,
      description:
        "Generate 301 & 302 redirect rules for Apache .htaccess, Nginx, Netlify, Vercel, and WordPress.",
      badge: "Technical SEO",
    },
    {
      id: "open-graph-tag-generator",
      title: "Open Graph Tag Generator",
      slug: "/tools/open-graph-tag-generator",
      category: "tracking",
      icon: <FaShareNodes />,
      description:
        "Generate Facebook Open Graph and Twitter/X Card meta tags with live social media post previews.",
      badge: "Social Media SEO",
    },
  ];

  const filteredTools = toolsList.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sibinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Free SEO Tools",
        item: "https://www.sibinfotech.com/tools",
      },
    ],
  };

  const metaTags = (
    <>
      <title>Free SEO Tools Suite | Free Online SEO Utility Generators | SIB Infotech</title>
      <meta
        name="description"
        content="Access our suite of free online SEO tools including Meta Title Generator, Meta Description Generator, Schema Generator, SERP Preview, UTM Builder, Robots.txt Generator, and more."
      />
      <meta
        name="keywords"
        content="free seo tools, online seo tools, meta title generator, schema markup generator, serp preview, utm builder, robots.txt generator, keyword density checker, redirect generator, open graph generator"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/tools" />
      <meta
        property="og:title"
        content="Free SEO Tools Suite | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Free online SEO tools for digital marketers, webmasters, and developers. Title & Description Generators, Schema Markup, SERP Simulator, UTM Builder, Robots.txt, and more."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <Breadcrumb Pagetitle="Free SEO Tools Suite" />

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <span className="tool-header-badge">
                <FaWandMagicSparkles /> 100% Free Professional SEO Tools
              </span>
              <h1 className="fw-bold display-5 mb-3 text-dark">
                Free Online <span className="text_red">SEO Tools Suite</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Boost your search engine rankings, optimize technical markup, and streamline your digital marketing workflow with our suite of free, webmaster-approved SEO utilities.
              </p>

              {/* Search & Filter Controls */}
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group input-group-lg shadow-sm mb-4">
                    <span className="input-group-text bg-white border-end-0">
                      <FaMagnifyingGlass className="text-muted" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                      placeholder="Search SEO tools (e.g. schema, title, robots, redirect)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <button
                  className={`btn rounded-pill px-4 btn-sm ${
                    activeCategory === "all"
                      ? "btn-danger fw-bold"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveCategory("all")}
                >
                  All Tools ({toolsList.length})
                </button>
                <button
                  className={`btn rounded-pill px-4 btn-sm ${
                    activeCategory === "content"
                      ? "btn-danger fw-bold"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveCategory("content")}
                >
                  Content & On-Page SEO
                </button>
                <button
                  className={`btn rounded-pill px-4 btn-sm ${
                    activeCategory === "technical"
                      ? "btn-danger fw-bold"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveCategory("technical")}
                >
                  Technical & Server SEO
                </button>
                <button
                  className={`btn rounded-pill px-4 btn-sm ${
                    activeCategory === "tracking"
                      ? "btn-danger fw-bold"
                      : "btn-outline-secondary"
                  }`}
                  onClick={() => setActiveCategory("tracking")}
                >
                  Analytics & Social
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-5">
        <div className="container">
          {filteredTools.length === 0 ? (
            <div className="text-center py-5">
              <h4 className="text-muted mb-3">No SEO tools matching your search</h4>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredTools.map((tool) => (
                <div key={tool.id} className="col-lg-4 col-md-6">
                  <div className="tool-grid-card">
                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="tool-icon-wrapper">{tool.icon}</div>
                        <span className="badge bg-light text-danger border border-danger-subtle rounded-pill px-3 py-2">
                          {tool.badge}
                        </span>
                      </div>
                      <h3 className="tool-title">{tool.title}</h3>
                      <p className="tool-desc">{tool.description}</p>
                    </div>
                    <div className="pt-3 border-top">
                      <Link href={tool.slug} className="tool-link-btn">
                        Launch Tool <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info & CTA Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="fw-bold text-dark mb-2">
                Need Professional SEO Strategy & Execution?
              </h3>
              <p className="text-secondary mb-0">
                While automated tools help solve quick technical tasks, achieving top rankings requires comprehensive technical audits, high-authority link building, and content optimization strategies.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Link href="/contact-us" className="btn btn-danger btn-lg px-4 fw-bold">
                Get Free Custom SEO Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
