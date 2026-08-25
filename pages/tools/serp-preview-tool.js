import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaGoogle,
  FaCopy,
  FaCheck,
  FaDesktop,
  FaMobileScreen,
  FaMoon,
  FaSun,
  FaStar,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function SerpPreviewTool() {
  const [title, setTitle] = useState(
    "Best Digital Marketing Services India | SIB Infotech"
  );
  const [description, setDescription] = useState(
    "SIB Infotech is a top-rated digital marketing agency in India providing expert SEO, PPC, Social Media Marketing, and custom website designing services. Get a free quote today!"
  );
  const [url, setUrl] = useState("https://www.sibinfotech.com/digital-marketing-services");
  const [siteName, setSiteName] = useState("SIB Infotech");
  const [highlightTerm, setHighlightTerm] = useState("digital marketing");
  const [enableRating, setEnableRating] = useState(true);
  const [rating, setRating] = useState("4.9");
  const [reviews, setReviews] = useState("184");
  const [previewDevice, setPreviewDevice] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);
  const [copied, setCopied] = useState(false);

  const titleChars = title.length;
  const titlePixels = Math.round(titleChars * 9.5);
  const descChars = description.length;
  const descPixels = Math.round(descChars * 6.2);

  const generatedHtml = `<title>${title}</title>\n<meta name="description" content="${description}" />`;

  const copyHtml = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopied(true);
    toast.success("SERP HTML Tags copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
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
        name: "SERP Preview Tool",
        item: "https://www.sibinfotech.com/tools/serp-preview-tool",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free SERP Preview Tool",
    url: "https://www.sibinfotech.com/tools/serp-preview-tool",
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
      <title>Free SERP Preview Tool | Google Search Simulator | SIB Infotech</title>
      <meta
        name="description"
        content="Free SERP Preview Simulator tool. Test how your title tag, meta description, and URL will look in Google desktop and mobile search engine result pages."
      />
      <meta
        name="keywords"
        content="serp preview tool, google serp simulator, title description preview, pixel length checker, serp snippet generator"
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
      <Breadcrumb Pagetitle="SERP Preview Tool" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaGoogle /> Google Search Simulator
              </span>
              <h1 className="fw-bold display-6 mb-3">
                Google <span className="text_red">SERP Preview Tool</span>
              </h1>
              <p className="lead text-secondary">
                Simulate how your meta titles and descriptions render in Google search results on desktop & mobile devices in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Input Controls */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <h4 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
                  <FaWandMagicSparkles className="text-danger" /> Snippet Controls
                </h4>

                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label fw-semibold mb-0">Meta Title Tag</label>
                    <small className={titleChars > 60 ? "text-danger fw-bold" : "text-muted"}>
                      {titleChars} chars (~{titlePixels}px / 580px)
                    </small>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {titleChars > 60 && (
                    <small className="text-danger">⚠️ Title exceeds 60 chars (580px) limit and will be cut off with ...</small>
                  )}
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <label className="form-label fw-semibold mb-0">Meta Description</label>
                    <small className={descChars > 160 ? "text-danger fw-bold" : "text-muted"}>
                      {descChars} chars (~{descPixels}px / 990px)
                    </small>
                  </div>
                  <textarea
                    rows={3}
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {descChars > 160 && (
                    <small className="text-danger">⚠️ Description exceeds 160 chars limit and will be truncated.</small>
                  )}
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Target URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Site Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Highlight Search Keyword</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. digital marketing"
                      value={highlightTerm}
                      onChange={(e) => setHighlightTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Rating Badge</label>
                    <div className="input-group">
                      <div className="input-group-text bg-white">
                        <input
                          type="checkbox"
                          className="form-check-input mt-0"
                          checked={enableRating}
                          onChange={(e) => setEnableRating(e.target.checked)}
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rating"
                        disabled={!enableRating}
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Reviews"
                        disabled={!enableRating}
                        value={reviews}
                        onChange={(e) => setReviews(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SERP Simulator Display */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold mb-0 text-dark">Google Search Result Preview</h5>
                  <div className="d-flex gap-2">
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "desktop" ? "btn-secondary" : "btn-outline-secondary"
                      }`}
                      onClick={() => setPreviewDevice("desktop")}
                    >
                      <FaDesktop /> Desktop
                    </button>
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "mobile" ? "btn-secondary" : "btn-outline-secondary"
                      }`}
                      onClick={() => setPreviewDevice("mobile")}
                    >
                      <FaMobileScreen /> Mobile
                    </button>
                    <button
                      className={`btn btn-sm ${darkMode ? "btn-dark" : "btn-outline-dark"}`}
                      onClick={() => setDarkMode(!darkMode)}
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
                    <span className="serp-site-name">{siteName}</span>
                    <span className="serp-breadcrumb">
                      {url}
                    </span>
                  </div>

                  <div className="serp-title">
                    {titleChars > 60 ? title.substring(0, 57) + "..." : title}
                  </div>

                  {enableRating && (
                    <div className="d-flex align-items-center gap-1 text-warning small my-1">
                      <span className="fw-bold text-dark me-1">{rating}</span>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="text-muted ms-1">({reviews} reviews)</span>
                    </div>
                  )}

                  <div className="serp-description">
                    <span className="serp-date">Aug 24, 2026 — </span>
                    {descChars > 160 ? description.substring(0, 157) + "..." : description}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold text-dark">Generated HTML Code</span>
                    <button className="btn btn-danger btn-sm" onClick={copyHtml}>
                      {copied ? <FaCheck /> : <FaCopy />} Copy HTML Tags
                    </button>
                  </div>
                  <div className="code-output-container">
                    <pre className="code-output-body mb-0">{generatedHtml}</pre>
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
