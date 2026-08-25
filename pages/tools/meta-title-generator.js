import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaHeading,
  FaCopy,
  FaCheck,
  FaDesktop,
  FaMobileScreen,
  FaMoon,
  FaSun,
  FaWandMagicSparkles,
  FaLightbulb,
  FaCircleQuestion,
} from "react-icons/fa6";

export default function MetaTitleGenerator() {
  const [keyword, setKeyword] = useState("");
  const [brand, setBrand] = useState("");
  const [pageType, setPageType] = useState("Service");
  const [powerWord, setPowerWord] = useState("Best");
  const [customTitle, setCustomTitle] = useState("");
  const [previewDevice, setPreviewDevice] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Generate Title Suggestions based on input
  const generateTitles = () => {
    const kw = keyword.trim() || "Digital Marketing Services";
    const br = brand.trim() ? ` | ${brand.trim()}` : " | SIB Infotech";
    const pw = powerWord || "Best";

    if (pageType === "Blog") {
      return [
        `How to ${kw}: Complete Guide for 2026${br}`,
        `10 ${pw} Ways to Master ${kw} in 2026${br}`,
        `Why ${kw} is Crucial for Your Success${br}`,
        `The Ultimate Guide to ${kw} (Step-by-Step)${br}`,
        `${pw} ${kw} Strategies That Work in 2026${br}`,
      ];
    } else if (pageType === "Product" || pageType === "Ecommerce") {
      return [
        `Buy ${pw} ${kw} Online at Best Price${br}`,
        `${kw} - High Quality & Fast Delivery${br}`,
        `Shop ${pw} ${kw} | Special Discounts Inside${br}`,
        `Top-Rated ${kw} for Sale Online${br}`,
        `Affordable ${kw}: Order Online Today${br}`,
      ];
    } else if (pageType === "Homepage") {
      return [
        `${kw}: ${pw} Solutions for Business Growth${br}`,
        `Leading ${kw} Agency - Proven Results${br}`,
        `${pw} ${kw} Company | Award-Winning Agency${br}`,
        `${kw} Experts - Transform Your Business${br}`,
        `${pw} ${kw} Services & Solutions Provider${br}`,
      ];
    } else {
      // Service
      return [
        `${pw} ${kw} Services in 2026${br}`,
        `Professional ${kw} Services | Get Free Quote${br}`,
        `${kw} Company: Boost Growth & ROI${br}`,
        `Custom ${kw} Solutions for Your Business${br}`,
        `Top-Rated ${kw} Agency | Expert Consultants${br}`,
      ];
    }
  };

  const generatedTitles = generateTitles();
  const activeTitle = customTitle || generatedTitles[0] || "";
  const charCount = activeTitle.length;
  // Estimate pixel width: ~10px per average char
  const pixelWidth = Math.round(charCount * 9.5);

  const getMeterColor = () => {
    if (charCount >= 50 && charCount <= 60) return "bg-meter-green";
    if (charCount >= 40 && charCount < 50) return "bg-meter-yellow";
    return "bg-meter-red";
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Meta Title copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: "Meta Title Generator",
        item: "https://www.sibinfotech.com/tools/meta-title-generator",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Meta Title Generator Tool",
    url: "https://www.sibinfotech.com/tools/meta-title-generator",
    applicationCategory: "SEO Tool",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  const metaTags = (
    <>
      <title>Free Meta Title Generator Tool | SERP Preview & Counter | SIB Infotech</title>
      <meta
        name="description"
        content="Free Meta Title Generator tool with live SERP preview, character count meter, and pixel width checker. Generate click-worthy, SEO-optimized title tags in seconds."
      />
      <meta
        name="keywords"
        content="meta title generator, title tag generator, seo title generator, serp title preview, title tag character counter, free title generator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <Breadcrumb Pagetitle="Meta Title Generator" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaHeading /> AI & Keyword-Powered Generator
              </span>
              <h1 className="fw-bold display-6 mb-3">
                SEO <span className="text_red">Meta Title Generator</span> & SERP Preview
              </h1>
              <p className="lead text-secondary">
                Create high-CTR, search-engine-friendly Meta Title tags. Check character length, pixel width, and preview live Google search snippets instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool Main Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Input Controls Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <h4 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
                  <FaWandMagicSparkles className="text-danger" /> Configure Your Meta Title
                </h4>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Target Keyword / Topic *</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="e.g. SEO Services, Custom Web Design"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <small className="text-muted">Enter your primary target keyword phrase.</small>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Brand Name (Optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. SIB Infotech"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Page Type</label>
                    <select
                      className="form-select"
                      value={pageType}
                      onChange={(e) => setPageType(e.target.value)}
                    >
                      <option value="Service">Service Page</option>
                      <option value="Blog">Blog Post / Article</option>
                      <option value="Product">Product / E-commerce</option>
                      <option value="Homepage">Homepage</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">Power Modifier Word</label>
                  <div className="d-flex flex-wrap gap-2">
                    {["Best", "Top", "Proven", "Free", "Ultimate", "Guide 2026", "Fast"].map(
                      (pw) => (
                        <button
                          key={pw}
                          type="button"
                          className={`btn btn-sm rounded-pill ${
                            powerWord === pw
                              ? "btn-danger fw-bold"
                              : "btn-outline-secondary"
                          }`}
                          onClick={() => setPowerWord(pw)}
                        >
                          {pw}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Custom Title Editor / Active Title
                  </label>
                  <textarea
                    rows={2}
                    className="form-control"
                    placeholder="Type or click any generated title below to edit..."
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                  />
                </div>

                {/* Length & Meter Summary */}
                <div className="p-3 bg-light rounded-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold text-dark">
                      Length: <span className={charCount > 60 ? "text-danger fw-bold" : "text-dark"}>{charCount} / 60 chars</span>
                    </span>
                    <span className="text-muted small">Est. {pixelWidth}px / 580px</span>
                  </div>
                  <div className="progress-meter">
                    <div
                      className={`progress-meter-bar ${getMeterColor()}`}
                      style={{
                        width: `${Math.min(100, (charCount / 60) * 100)}%`,
                      }}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">
                    {charCount > 60
                      ? "⚠️ Warning: Title exceeds 60 characters and may get truncated with '...' on Google SERPs."
                      : charCount >= 50
                      ? "✅ Optimal title length for search engines!"
                      : "💡 Tip: Recommended length is 50 - 60 characters for best CTR."}
                  </small>
                </div>
              </div>
            </div>

            {/* Preview & Suggestions Column */}
            <div className="col-lg-6">
              {/* Google SERP Preview Box */}
              <div className="tool-card-wrapper mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold mb-0 text-dark">Google SERP Snippet Preview</h5>
                  <div className="d-flex gap-2">
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "desktop"
                          ? "btn-secondary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setPreviewDevice("desktop")}
                      title="Desktop View"
                    >
                      <FaDesktop />
                    </button>
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "mobile"
                          ? "btn-secondary"
                          : "btn-outline-secondary"
                      }`}
                      onClick={() => setPreviewDevice("mobile")}
                      title="Mobile View"
                    >
                      <FaMobileScreen />
                    </button>
                    <button
                      className={`btn btn-sm ${
                        darkMode ? "btn-dark" : "btn-outline-dark"
                      }`}
                      onClick={() => setDarkMode(!darkMode)}
                      title="Toggle Dark Mode"
                    >
                      {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                  </div>
                </div>

                <div
                  className={`serp-preview-box ${darkMode ? "dark-mode" : ""}`}
                  style={{
                    maxWidth: previewDevice === "mobile" ? "360px" : "100%",
                    margin: previewDevice === "mobile" ? "0 auto" : "0",
                  }}
                >
                  <div className="serp-url-row">
                    <div className="serp-favicon">S</div>
                    <span className="serp-site-name">
                      {brand || "SIB Infotech"}
                    </span>
                    <span className="serp-breadcrumb">
                      https://www.sibinfotech.com › {keyword ? keyword.toLowerCase().replace(/\s+/g, "-") : "service"}
                    </span>
                  </div>
                  <div className="serp-title">
                    {charCount > 60 ? activeTitle.substring(0, 57) + "..." : activeTitle}
                  </div>
                  <div className="serp-description">
                    Discover high-impact digital solutions and SEO strategies. Maximize web traffic and online rankings with expert services.
                  </div>
                </div>

                <div className="mt-3 text-end">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => copyToClipboard(activeTitle, "active")}
                  >
                    {copiedIndex === "active" ? <FaCheck /> : <FaCopy />} Copy Active Title
                  </button>
                </div>
              </div>

              {/* Generated Suggestions List */}
              <div className="tool-card-wrapper">
                <h5 className="fw-bold mb-3 text-dark">
                  AI & Pattern Generated Variations
                </h5>
                <div className="list-group list-group-flush">
                  {generatedTitles.map((t, idx) => (
                    <div
                      key={idx}
                      className={`list-group-item list-group-item-action p-3 rounded-3 mb-2 border ${
                        activeTitle === t ? "border-danger bg-light" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setCustomTitle(t)}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold text-dark">{t}</span>
                        <button
                          className="btn btn-sm btn-light border ms-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(t, idx);
                          }}
                        >
                          {copiedIndex === idx ? <FaCheck className="text-success" /> : <FaCopy />}
                        </button>
                      </div>
                      <div className="d-flex gap-3 text-muted small">
                        <span>Chars: {t.length}</span>
                        <span>Est: ~{t.length * 9.5}px</span>
                        {t.length > 60 && <span className="text-danger">Truncated</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational & Guide Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4 text-dark">
                Why Meta Title Tags are Critical for SEO
              </h2>
              <p className="text-secondary">
                The Title Tag (`&lt;title&gt;`) is one of the most vital on-page SEO ranking signals. It serves as the headline for your web page in search engine result pages (SERPs), social media shares, and browser tabs.
              </p>

              <div className="row g-4 my-4">
                <div className="col-md-6">
                  <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="fw-bold text-danger d-flex align-items-center gap-2">
                      <FaLightbulb /> Meta Title Best Practices
                    </h5>
                    <ul className="text-secondary ps-3 mb-0">
                      <li className="mb-2">
                        <strong>Optimal Length:</strong> Keep titles between 50 to 60 characters (or under 580 pixels).
                      </li>
                      <li className="mb-2">
                        <strong>Front-Load Keywords:</strong> Place your main keyword near the beginning of the title.
                      </li>
                      <li className="mb-2">
                        <strong>Brand Addition:</strong> Append your brand name at the end separated by a pipe (`|`) or dash (`-`).
                      </li>
                      <li>
                        <strong>Unique Titles:</strong> Avoid duplicate title tags across different pages.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="fw-bold text-danger d-flex align-items-center gap-2">
                      <FaCircleQuestion /> Frequently Asked Questions
                    </h5>
                    <div className="accordion accordion-flush" id="titleFaq">
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq1"
                          >
                            Why does Google rewrite my meta titles?
                          </button>
                        </h6>
                        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#titleFaq">
                          <div className="accordion-body text-secondary small">
                            Google may rewrite your title if it is too long, keyword-stuffed, repetitive, or doesn't match the user's search query accurately.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h6 className="accordion-header">
                          <button
                            className="accordion-button collapsed fw-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq2"
                          >
                            Should every page have a unique title tag?
                          </button>
                        </h6>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#titleFaq">
                          <div className="accordion-body text-secondary small">
                            Yes. Duplicate title tags can confuse search engines and make it harder for search bots to determine which page should rank for a query.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
