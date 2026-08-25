import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaFileLines,
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

export default function MetaDescriptionGenerator() {
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [benefit, setBenefit] = useState("");
  const [cta, setCta] = useState("Get Started Today");
  const [customDesc, setCustomDesc] = useState("");
  const [previewDevice, setPreviewDevice] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateDescriptions = () => {
    const kw = keyword.trim() || "SEO Services";
    const top = topic.trim() || "Digital Marketing";
    const ben = benefit.trim() || "boost web traffic & increase conversions";
    const action = cta.trim() || "Contact us for a free quote!";

    return [
      `Looking for high-impact ${kw}? Learn how our ${top} strategies can help you ${ben}. ${action}`,
      `Discover expert ${kw} solutions tailored to ${ben}. Explore top-rated ${top} strategies. ${action}`,
      `Maximize your online growth with ${kw}. Our ${top} experts deliver proven strategies to ${ben}. ${action}`,
      `Need professional ${kw}? Check out our complete ${top} guide & solutions designed to ${ben}. ${action}`,
      `Transform your digital presence with ${kw}. Partner with SIB Infotech to ${ben}. ${action}`,
    ];
  };

  const generatedList = generateDescriptions();
  const activeDesc = customDesc || generatedList[0] || "";
  const charCount = activeDesc.length;
  const pixelWidth = Math.round(charCount * 6.2); // ~990px limit for 160 chars

  const getMeterColor = () => {
    if (charCount >= 120 && charCount <= 160) return "bg-meter-green";
    if (charCount >= 90 && charCount < 120) return "bg-meter-yellow";
    return "bg-meter-red";
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success("Meta Description copied to clipboard!");
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
        name: "Meta Description Generator",
        item: "https://www.sibinfotech.com/tools/meta-description-generator",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Meta Description Generator Tool",
    url: "https://www.sibinfotech.com/tools/meta-description-generator",
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
      <title>Free Meta Description Generator Tool | SERP Preview | SIB Infotech</title>
      <meta
        name="description"
        content="Free Meta Description Generator tool. Generate click-through rate (CTR) boosting, SEO-optimized meta descriptions with real-time length counters and SERP previews."
      />
      <meta
        name="keywords"
        content="meta description generator, seo description generator, description counter, serp snippet description preview, free description generator"
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
      <Breadcrumb Pagetitle="Meta Description Generator" />

      {/* Hero Section */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaFileLines /> AI & Formula-Based Description Generator
              </span>
              <h1 className="fw-bold display-6 mb-3">
                SEO <span className="text_red">Meta Description Generator</span>
              </h1>
              <p className="lead text-secondary">
                Generate high-converting, keyword-rich meta descriptions. Keep character length in the optimal 120-160 range and preview Google SERP snippets live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Input Config Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <h4 className="fw-bold mb-4 text-dark d-flex align-items-center gap-2">
                  <FaWandMagicSparkles className="text-danger" /> Configure Meta Description
                </h4>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Target Keyword *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. SEO Services"
                      value={keyword}
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Page Topic / Niche</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Digital Marketing"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Key Benefit / Value Prop</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. boost web traffic & drive qualified sales"
                    value={benefit}
                    onChange={(e) => setBenefit(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Call To Action (CTA)</label>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {[
                      "Get Started Today!",
                      "Contact us for a free quote!",
                      "Learn more now!",
                      "Claim your free audit!",
                    ].map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={`btn btn-sm rounded-pill ${
                          cta === c ? "btn-danger fw-bold" : "btn-outline-secondary"
                        }`}
                        onClick={() => setCta(c)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    value={cta}
                    onChange={(e) => setCta(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Custom Meta Description Editor
                  </label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Type custom text or edit selected generated description..."
                    value={customDesc}
                    onChange={(e) => setCustomDesc(e.target.value)}
                  />
                </div>

                {/* Length & Meter */}
                <div className="p-3 bg-light rounded-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-semibold text-dark">
                      Length: <span className={charCount > 160 ? "text-danger fw-bold" : "text-dark"}>{charCount} / 160 chars</span>
                    </span>
                    <span className="text-muted small">Est. {pixelWidth}px / 990px</span>
                  </div>
                  <div className="progress-meter">
                    <div
                      className={`progress-meter-bar ${getMeterColor()}`}
                      style={{
                        width: `${Math.min(100, (charCount / 160) * 100)}%`,
                      }}
                    ></div>
                  </div>
                  <small className="text-muted d-block mt-2">
                    {charCount > 160
                      ? "⚠️ Warning: Description exceeds 160 characters and will be cut off with '...' in Google search results."
                      : charCount >= 120
                      ? "✅ Perfect length for maximizing CTR and search visibility!"
                      : "💡 Tip: Recommended description length is 120 - 160 characters."}
                  </small>
                </div>
              </div>
            </div>

            {/* Preview & Suggestions Column */}
            <div className="col-lg-6">
              {/* SERP Snippet Preview */}
              <div className="tool-card-wrapper mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold mb-0 text-dark">Live SERP Preview</h5>
                  <div className="d-flex gap-2">
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "desktop" ? "btn-secondary" : "btn-outline-secondary"
                      }`}
                      onClick={() => setPreviewDevice("desktop")}
                      title="Desktop View"
                    >
                      <FaDesktop />
                    </button>
                    <button
                      className={`btn btn-sm ${
                        previewDevice === "mobile" ? "btn-secondary" : "btn-outline-secondary"
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
                    <span className="serp-site-name">SIB Infotech</span>
                    <span className="serp-breadcrumb">
                      https://www.sibinfotech.com › {keyword ? keyword.toLowerCase().replace(/\s+/g, "-") : "services"}
                    </span>
                  </div>
                  <div className="serp-title">
                    {keyword || "SEO Services"} | Award-Winning Digital Agency
                  </div>
                  <div className="serp-description">
                    <span className="serp-date">Aug 24, 2026 — </span>
                    {charCount > 160 ? activeDesc.substring(0, 157) + "..." : activeDesc}
                  </div>
                </div>

                <div className="mt-3 text-end">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => copyToClipboard(activeDesc, "active")}
                  >
                    {copiedIndex === "active" ? <FaCheck /> : <FaCopy />} Copy Meta Description
                  </button>
                </div>
              </div>

              {/* Suggestions List */}
              <div className="tool-card-wrapper">
                <h5 className="fw-bold mb-3 text-dark">
                  Generated Description Options
                </h5>
                <div className="list-group list-group-flush">
                  {generatedList.map((desc, idx) => (
                    <div
                      key={idx}
                      className={`list-group-item list-group-item-action p-3 rounded-3 mb-2 border ${
                        activeDesc === desc ? "border-danger bg-light" : ""
                      }`}
                      style={{ cursor: "pointer" }}
                      onClick={() => setCustomDesc(desc)}
                    >
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="fw-medium text-dark small">{desc}</span>
                        <button
                          className="btn btn-sm btn-light border ms-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(desc, idx);
                          }}
                        >
                          {copiedIndex === idx ? <FaCheck className="text-success" /> : <FaCopy />}
                        </button>
                      </div>
                      <div className="d-flex gap-3 text-muted small">
                        <span>Chars: {desc.length}</span>
                        {desc.length > 160 && <span className="text-danger">Over Limit</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4 text-dark">
                How Meta Descriptions Drive Click-Through Rate (CTR)
              </h2>
              <p className="text-secondary">
                Although meta descriptions are not a direct Google ranking factor, they have a massive indirect impact on SEO by persuading searchers to click on your link over competitors.
              </p>

              <div className="row g-4 my-4">
                <div className="col-md-6">
                  <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="fw-bold text-danger d-flex align-items-center gap-2">
                      <FaLightbulb /> CTR Optimization Checklist
                    </h5>
                    <ul className="text-secondary ps-3 mb-0">
                      <li className="mb-2">Include your primary keyword so Google bolds it in search results.</li>
                      <li className="mb-2">Include a compelling benefit and strong call-to-action (CTA).</li>
                      <li className="mb-2">Keep length between 120 and 160 characters.</li>
                      <li>Make each description unique and specific to the page content.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-4 bg-white rounded-3 shadow-sm h-100">
                    <h5 className="fw-bold text-danger d-flex align-items-center gap-2">
                      <FaCircleQuestion /> Meta Description FAQs
                    </h5>
                    <p className="text-secondary small mb-2">
                      <strong>Q: Why does Google sometimes display a snippet from my page content instead?</strong>
                    </p>
                    <p className="text-muted small">
                      A: Google automatically generates snippets if it believes its extracted text answers the searcher's query better than your provided meta description.
                    </p>
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
