import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaFont,
  FaCopy,
  FaCheck,
  FaWandMagicSparkles,
  FaListCheck,
} from "react-icons/fa6";

export default function SeoUrlSlugGenerator() {
  const [inputText, setInputText] = useState(
    "How to Optimize Web Pages for Higher Search Rankings & ROI in 2026!"
  );
  const [separator, setSeparator] = useState("-");
  const [removeStopWords, setRemoveStopWords] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [maxChars, setMaxChars] = useState(80);
  const [activeTab, setActiveTab] = useState("single");
  const [batchInput, setBatchInput] = useState(
    "10 Best Digital Marketing Tips\nWhy Technical SEO Matters for E-Commerce\nTop Reasons to Hire an SEO Agency"
  );
  const [copied, setCopied] = useState(false);

  const stopWords = new Set([
    "a", "an", "the", "and", "or", "but", "about", "above", "after", "along",
    "amid", "among", "as", "at", "by", "for", "from", "in", "into", "of",
    "off", "on", "onto", "out", "over", "to", "under", "with", "is", "are",
    "was", "were", "be", "been", "being", "how", "what", "why", "where",
  ]);

  // Single Slug Converter Function
  const generateSlug = (text) => {
    if (!text.trim()) return "";

    let str = text.trim();

    if (lowercase) {
      str = str.toLowerCase();
    }

    // Replace accents & special chars
    str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Split words
    let words = str.replace(/[^a-zA-Z0-9\s]/g, "").split(/\s+/);

    if (removeNumbers) {
      words = words.filter((w) => !/^\d+$/.test(w));
    }

    if (removeStopWords) {
      const filtered = words.filter((w) => !stopWords.has(w.toLowerCase()));
      if (filtered.length > 0) words = filtered;
    }

    let slug = words.join(separator);

    if (maxChars > 0 && slug.length > maxChars) {
      slug = slug.substring(0, maxChars).replace(new RegExp(`\\${separator}+$`), "");
    }

    return slug;
  };

  const activeSlug = generateSlug(inputText);

  // Batch Slug Converter
  const generateBatchSlugs = () => {
    const lines = batchInput.split("\n");
    return lines
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => `${line}  -->  ${generateSlug(line)}`)
      .join("\n");
  };

  const batchResult = generateBatchSlugs();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("SEO URL Slug copied to clipboard!");
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
        name: "SEO URL Slug Generator",
        item: "https://www.sibinfotech.com/tools/seo-url-slug-generator",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free SEO URL Slug Generator Tool",
    url: "https://www.sibinfotech.com/tools/seo-url-slug-generator",
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
      <title>Free SEO URL Slug Generator Tool | Clean Permalink Creator | SIB Infotech</title>
      <meta
        name="description"
        content="Free SEO URL Slug Generator tool. Convert article titles and text into clean, keyword-dense, human-readable URL permalinks with stop-word filtering."
      />
      <meta
        name="keywords"
        content="url slug generator, seo slug creator, clean url generator, permalink builder, remove stop words url"
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
      <Breadcrumb Pagetitle="SEO URL Slug Generator" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaFont /> Clean URL & Permalink Creator
              </span>
              <h1 className="fw-bold display-6 mb-3">
                SEO <span className="text_red">URL Slug Generator</span>
              </h1>
              <p className="lead text-secondary">
                Transform article headlines and raw text into clean, search-engine-friendly URL slugs. Automatically filter stop-words and remove special characters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Options & Input Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="fw-bold mb-0 text-dark d-flex align-items-center gap-2">
                    <FaWandMagicSparkles className="text-danger" /> Configure Slug Settings
                  </h4>
                  <div className="btn-group btn-group-sm">
                    <button
                      className={`btn ${activeTab === "single" ? "btn-danger" : "btn-outline-secondary"}`}
                      onClick={() => setActiveTab("single")}
                    >
                      Single Mode
                    </button>
                    <button
                      className={`btn ${activeTab === "batch" ? "btn-danger" : "btn-outline-secondary"}`}
                      onClick={() => setActiveTab("batch")}
                    >
                      Batch Mode
                    </button>
                  </div>
                </div>

                {activeTab === "single" ? (
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Input Title / Headline *</label>
                    <textarea
                      rows={3}
                      className="form-control form-control-lg"
                      placeholder="e.g. 10 Best Digital Marketing Strategies for 2026..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                ) : (
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Batch Titles (One per line) *</label>
                    <textarea
                      rows={5}
                      className="form-control"
                      placeholder="Enter multiple titles separated by new lines..."
                      value={batchInput}
                      onChange={(e) => setBatchInput(e.target.value)}
                    />
                  </div>
                )}

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Word Separator</label>
                    <select
                      className="form-select"
                      value={separator}
                      onChange={(e) => setSeparator(e.target.value)}
                    >
                      <option value="-">Hyphen (-)</option>
                      <option value="_">Underscore (_)</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Max Character Limit</label>
                    <input
                      type="number"
                      className="form-control"
                      value={maxChars}
                      onChange={(e) => setMaxChars(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="stopWordsCheck"
                        checked={removeStopWords}
                        onChange={(e) => setRemoveStopWords(e.target.checked)}
                      />
                      <label className="form-check-label text-dark small fw-semibold" htmlFor="stopWordsCheck">
                        Remove Stop Words (and, the, in, at)
                      </label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="lowercaseCheck"
                        checked={lowercase}
                        onChange={(e) => setLowercase(e.target.checked)}
                      />
                      <label className="form-check-label text-dark small fw-semibold" htmlFor="lowercaseCheck">
                        Force Lowercase
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Output Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold mb-0 text-dark">Generated SEO URL Slug</h5>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => copyToClipboard(activeTab === "single" ? activeSlug : batchResult)}
                    >
                      {copied ? <FaCheck /> : <FaCopy />} Copy Output
                    </button>
                  </div>

                  {activeTab === "single" ? (
                    <div>
                      <div className="p-3 bg-light rounded-3 border mb-3">
                        <div className="text-muted small mb-1">Full URL Preview:</div>
                        <span className="text-danger fw-bold font-monospace text-break">
                          https://www.sibinfotech.com/<span className="text-dark">{activeSlug}</span>
                        </span>
                      </div>

                      <div className="code-output-container">
                        <div className="code-output-header">
                          <span>Clean Slug String</span>
                          <span>{activeSlug.length} Chars</span>
                        </div>
                        <pre className="code-output-body">{activeSlug}</pre>
                      </div>
                    </div>
                  ) : (
                    <div className="code-output-container">
                      <div className="code-output-header">
                        <span>Batch Converted Slugs</span>
                        <span>Multi-Line</span>
                      </div>
                      <pre className="code-output-body">{batchResult}</pre>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-top text-muted small">
                  💡 <strong>SEO Best Practice:</strong> Shorter, keyword-focused URL slugs (3 to 5 words) perform significantly better in search results than long, wordy URLs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
