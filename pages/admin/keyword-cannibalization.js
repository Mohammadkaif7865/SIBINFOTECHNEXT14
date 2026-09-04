// pages/admin/keyword-cannibalization.js
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  FaWandMagicSparkles,
  FaTriangleExclamation,
  FaCircleCheck,
  FaShieldHalved,
  FaChartLine,
  FaKey,
  FaCopy,
  FaCheck,
  FaArrowRotateRight,
  FaMagnifyingGlass,
  FaLink,
  FaListOl,
  FaSitemap,
  FaLightbulb,
  FaRobot,
  FaSliders,
  FaCircleInfo,
  FaGoogle,
  FaGlobe,
  FaFileLines,
  FaArrowTrendUp,
  FaBolt,
} from "react-icons/fa6";

const PRESET_EXAMPLES = [
  {
    badge: "🔴 High Conflict",
    label: "AI SEO Services",
    topic: "AI Powered Search Engine Optimization Services",
    primaryKeyword: "AI SEO Services India",
    secondaryKeywords: "AI search optimization, ChatGPT SEO, Gemini search visibility",
    proposedSlug: "/ai-seo-services-india",
    intent: "Commercial",
    type: "Service",
  },
  {
    badge: "🟡 Moderate Risk",
    label: "Shopify Mumbai Agency",
    topic: "Shopify Store Design and Customization in Mumbai",
    primaryKeyword: "Shopify Development Company Mumbai",
    secondaryKeywords: "Shopify experts Mumbai, e-commerce web design",
    proposedSlug: "/shopify-agency-mumbai",
    intent: "Commercial",
    type: "Location Landing",
  },
  {
    badge: "🟢 Safe Guide",
    label: "2026 AEO Strategy Guide",
    topic: "How Answer Engine Optimization (AEO) Impacts B2B Buyer Journeys in 2026",
    primaryKeyword: "AEO strategy guide for B2B",
    secondaryKeywords: "answer engine optimization playbook, LLM citation factors",
    proposedSlug: "/blog/aeo-strategy-b2b-playbook-2026",
    intent: "Informational",
    type: "Blog Post",
  },
];

const INTENT_OPTIONS = [
  { value: "Commercial", label: "Commercial", desc: "Comparing solutions / Buying research" },
  { value: "Transactional", label: "Transactional", desc: "Ready to purchase / Hire agency" },
  { value: "Informational", label: "Informational", desc: "Guides, How-tos, Playbooks" },
  { value: "Navigational", label: "Navigational", desc: "Brand / Specific tool lookups" },
];

const PAGE_TYPE_OPTIONS = [
  "Core Service",
  "Blog Post / Guide",
  "Sub-service Specialization",
  "Location Landing Page",
  "Packages & Pricing",
];

export default function KeywordCannibalizationChecker() {
  const [topic, setTopic] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [proposedSlug, setProposedSlug] = useState("");
  const [targetIntent, setTargetIntent] = useState("Commercial");
  const [pageType, setPageType] = useState("Core Service");

  // API Config State
  const [apiKey, setApiKey] = useState("");
  const [showApiConfig, setShowApiConfig] = useState(false);
  const [selectedModel, setSelectedModel] = useState("claude-3-5-sonnet-20241022");

  // Analysis State
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);

  // Load custom API key from localStorage on mount
  useEffect(() => {
    try {
      const savedKey = localStorage.getItem("sib_claude_api_key");
      if (savedKey) setApiKey(savedKey);
    } catch (e) {}
  }, []);

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    try {
      if (key) {
        localStorage.setItem("sib_claude_api_key", key);
        toast.success("Claude API Key saved in browser!");
      } else {
        localStorage.removeItem("sib_claude_api_key");
        toast.info("Claude API Key cleared.");
      }
    } catch (e) {}
  };

  const handleApplyPreset = (preset) => {
    setTopic(preset.topic);
    setPrimaryKeyword(preset.primaryKeyword);
    setSecondaryKeywords(preset.secondaryKeywords);
    setProposedSlug(preset.proposedSlug);
    setTargetIntent(preset.intent);
    setPageType(preset.type);
    toast.info(`Loaded: "${preset.label}"`);
  };

  const handleCopy = (text, key) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleCopyFullReport = () => {
    if (!result) return;
    const reportText = `# AI Keyword Cannibalization Audit Report
**Topic:** ${topic}
**Primary Keyword:** ${primaryKeyword}
**Risk Verdict:** ${result.verdict} (${result.riskScore}% Risk)
**GSC Impact:** ${result.gscImpactExplanation}

## Competing Live Pages:
${result.competingUrls?.map((u) => `- ${u.url} (${u.title}): ${u.overlapReason}`).join("\n") || "None"}

## What To Build Instead:
- **Recommended Angle:** ${result.alternativeStrategy?.recommendedAngle}
- **Recommended Primary Keyword:** ${result.alternativeStrategy?.recommendedPrimaryKeyword}
- **Suggested Meta Title:** ${result.alternativeStrategy?.recommendedTitle}
- **Suggested Meta Description:** ${result.alternativeStrategy?.recommendedMetaDescription}
- **Suggested Safe Slug:** ${result.alternativeStrategy?.recommendedSlug}
- **Target Search Intent:** ${result.alternativeStrategy?.targetIntent}

### Recommended Outline:
${result.alternativeStrategy?.contentOutline?.map((o, i) => `${i + 1}. ${o}`).join("\n") || ""}

### Internal Linking & Canonical Directive:
- **Internal Linking:** ${result.alternativeStrategy?.internalLinkingAdvice}
- **Canonical Tag:** ${result.alternativeStrategy?.canonicalAdvice}
`;
    handleCopy(reportText, "full-report");
  };

  const handleAnalyze = async (e) => {
    if (e) e.preventDefault();
    if (!topic.trim() || !primaryKeyword.trim()) {
      toast.error("Please provide both Topic and Primary Keyword.");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/admin/check-cannibalization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          primaryKeyword: primaryKeyword.trim(),
          secondaryKeywords: secondaryKeywords.trim(),
          proposedSlug: proposedSlug.trim(),
          targetIntent,
          pageType,
          customApiKey: apiKey.trim(),
          selectedModel,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to analyze cannibalization risk.");
      }

      setResult(data);
      toast.success("AI Cannibalization analysis complete!");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "An error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>AI Keyword Cannibalization Guard | SIB Infotech</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="admin-page-container">
        {/* Sub-Header / Admin Navigation Bar */}
        <section className="admin-hero-bar">
          <div className="containerFull">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="hero-pill-badge">
                    <FaRobot className="me-1" /> Claude 3.5 Sonnet
                  </span>
                  <span className="hero-pill-badge-dark">
                    <FaShieldHalved className="me-1 text-danger" /> GSC Cannibalization Prevention
                  </span>
                </div>
                <h1 className="admin-page-title">
                  AI Keyword Cannibalization Guard
                </h1>
                <p className="admin-page-subtitle">
                  Audit new page concepts against SIB Infotech&apos;s 350+ indexed URLs before publishing to prevent rank splits in Google Search Console.
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  type="button"
                  className={`btn-api-toggle ${apiKey ? "active" : ""}`}
                  onClick={() => setShowApiConfig(!showApiConfig)}
                >
                  <FaKey className="me-2 text-warning" />
                  {apiKey ? "Claude API Key (Custom Active)" : "Configure Claude Key"}
                  <FaSliders className="ms-2 opacity-75" />
                </button>
              </div>
            </div>

            {/* API Config Panel */}
            {showApiConfig && (
              <div className="admin-config-drawer mt-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold mb-0 text-dark d-flex align-items-center gap-2">
                    <FaSlidersH className="text-primary" /> Claude AI Model & API Configuration
                  </h6>
                  <button
                    className="btn btn-sm btn-close"
                    onClick={() => setShowApiConfig(false)}
                  ></button>
                </div>
                <div className="row g-3">
                  <div className="col-md-7">
                    <label className="form-label small fw-bold text-secondary mb-1">
                      Anthropic API Key (sk-ant-...)
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="sk-ant-api03-..."
                      value={apiKey}
                      onChange={(e) => handleSaveApiKey(e.target.value)}
                    />
                    <span className="text-muted extra-small">
                      Saved safely in your browser localStorage. If left blank, server defaults or smart simulation will be used.
                    </span>
                  </div>
                  <div className="col-md-5">
                    <label className="form-label small fw-bold text-secondary mb-1">
                      Claude Model
                    </label>
                    <select
                      className="form-select form-select-sm"
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                    >
                      <option value="claude-3-5-sonnet-20241022">
                        Claude 3.5 Sonnet (Recommended)
                      </option>
                      <option value="claude-3-7-sonnet-20250219">
                        Claude 3.7 Sonnet (Latest)
                      </option>
                      <option value="claude-3-haiku-20240307">
                        Claude 3 Haiku (Fast)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Main Work Area */}
        <section className="py-5 bg-canvas">
          <div className="containerFull">
            {/* Quick Test Presets */}
            <div className="mb-4 d-flex flex-wrap align-items-center gap-2">
              <span className="small fw-bold text-muted text-uppercase me-2">
                <FaBolt className="text-warning me-1" /> Quick Presets:
              </span>
              {PRESET_EXAMPLES.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="preset-pill-btn"
                  onClick={() => handleApplyPreset(preset)}
                >
                  <span className="me-1">{preset.badge}</span>
                  <strong>{preset.label}</strong>
                </button>
              ))}
            </div>

            <div className="row g-4">
              {/* Form Card */}
              <div className="col-lg-5">
                <div className="premium-card">
                  <div className="premium-card-header">
                    <h3 className="h6 fw-bold mb-0 text-dark d-flex align-items-center gap-2">
                      <FaMagnifyingGlass className="text-primary" /> Proposed Page Details
                    </h3>
                  </div>

                  <div className="p-4">
                    <form onSubmit={handleAnalyze}>
                      {/* Topic Title */}
                      <div className="mb-3">
                        <label className="input-label">
                          1. Proposed Page Topic / Working Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control modern-input"
                          placeholder="e.g. AI SEO Services for Fast Rankings"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          required
                        />
                        <span className="input-help">The core subject or offer of the planned page.</span>
                      </div>

                      {/* Primary Focus Keyword */}
                      <div className="mb-3">
                        <label className="input-label">
                          2. Target Primary Keyword <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control modern-input font-semibold"
                          placeholder="e.g. AI SEO Services India"
                          value={primaryKeyword}
                          onChange={(e) => setPrimaryKeyword(e.target.value)}
                          required
                        />
                        <span className="input-help">The #1 query you want Google to rank this page for.</span>
                      </div>

                      {/* Secondary Keywords */}
                      <div className="mb-3">
                        <label className="input-label">
                          3. Secondary / LSI Keywords (Comma separated)
                        </label>
                        <textarea
                          className="form-control modern-input"
                          rows={2}
                          placeholder="e.g. AI search optimization, ChatGPT SEO, Gemini search visibility"
                          value={secondaryKeywords}
                          onChange={(e) => setSecondaryKeywords(e.target.value)}
                        />
                      </div>

                      {/* Proposed Slug */}
                      <div className="mb-3">
                        <label className="input-label">
                          4. Proposed URL Slug (Optional)
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-light text-muted small">/</span>
                          <input
                            type="text"
                            className="form-control modern-input font-monospace"
                            placeholder="ai-seo-services"
                            value={proposedSlug.replace(/^\//, "")}
                            onChange={(e) => setProposedSlug(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Search Intent Selector */}
                      <div className="mb-3">
                        <label className="input-label mb-2">
                          5. Target Search Intent
                        </label>
                        <div className="row g-2">
                          {INTENT_OPTIONS.map((opt) => (
                            <div className="col-6" key={opt.value}>
                              <div
                                className={`intent-radio-card ${
                                  targetIntent === opt.value ? "selected" : ""
                                }`}
                                onClick={() => setTargetIntent(opt.value)}
                              >
                                <div className="fw-bold small">{opt.label}</div>
                                <div className="extra-small text-muted">{opt.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Page Type Selector */}
                      <div className="mb-4">
                        <label className="input-label">6. Page Format</label>
                        <select
                          className="form-select modern-input"
                          value={pageType}
                          onChange={(e) => setPageType(e.target.value)}
                        >
                          {PAGE_TYPE_OPTIONS.map((pt) => (
                            <option key={pt} value={pt}>
                              {pt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={loading || !topic.trim() || !primaryKeyword.trim()}
                        className="btn-analyze-submit"
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                            Auditing SIB Infotech Sitemap...
                          </>
                        ) : (
                          <>
                            <FaWandMagicSparkles className="me-2" />
                            Run AI Cannibalization Audit
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Results Column */}
              <div className="col-lg-7">
                {loading && (
                  <div className="premium-card p-5 text-center d-flex flex-column justify-content-center align-items-center h-100 min-h-400">
                    <div className="audit-pulse-ring mb-4">
                      <FaRobot className="text-primary fs-2" />
                    </div>
                    <h4 className="fw-bold text-dark mb-2">Analyzing 350+ SIB Infotech URLs...</h4>
                    <p className="text-muted max-w-450 mx-auto small mb-4">
                      Claude is checking SERP query clusters, evaluating Google Search Console rank volatility risks, and formulating non-competing alternatives.
                    </p>
                    <div className="d-flex flex-column gap-2 text-start small text-muted">
                      <div className="d-flex align-items-center gap-2">
                        <span className="spinner-border spinner-border-sm text-primary"></span>
                        <span>Evaluating semantic query overlap...</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="spinner-grow spinner-grow-sm text-warning"></span>
                        <span>Calculating GSC keyword cannibalization probability...</span>
                      </div>
                    </div>
                  </div>
                )}

                {!loading && !result && (
                  <div className="premium-card p-5 text-center d-flex flex-column justify-content-center align-items-center h-100 min-h-400">
                    <div className="empty-state-icon mb-3">
                      <FaSitemap />
                    </div>
                    <h4 className="fw-bold text-dark mb-1">Ready for Keyword Audit</h4>
                    <p className="text-muted max-w-450 mx-auto small">
                      Enter your proposed page details on the left (or pick a Quick Preset). AI will instantly scan for keyword overlap and generate an actionable, zero-cannibalization blueprint.
                    </p>
                  </div>
                )}

                {!loading && result && (
                  <div className="d-flex flex-column gap-4">
                    {/* Verdict Card */}
                    <div
                      className={`verdict-banner ${
                        result.verdict === "HIGH_RISK" || result.riskScore >= 70
                          ? "verdict-high"
                          : result.verdict === "MODERATE_RISK" || result.riskScore >= 40
                          ? "verdict-moderate"
                          : "verdict-safe"
                      }`}
                    >
                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
                        <div className="d-flex align-items-center gap-2 fw-bold fs-6">
                          {result.verdict === "HIGH_RISK" || result.riskScore >= 70 ? (
                            <>
                              <FaTriangleExclamation className="text-danger fs-5" />
                              <span className="text-danger">HIGH RISK — CANNIBALIZATION DETECTED</span>
                            </>
                          ) : result.verdict === "MODERATE_RISK" || result.riskScore >= 40 ? (
                            <>
                              <FaTriangleExclamation className="text-warning fs-5" />
                              <span className="text-warning">MODERATE RISK — POTENTIAL QUERY OVERLAP</span>
                            </>
                          ) : (
                            <>
                              <FaCircleCheck className="text-success fs-5" />
                              <span className="text-success">SAFE TO PUBLISH — UNIQUE INTENT</span>
                            </>
                          )}
                        </div>

                        <div className="risk-score-badge">
                          Cannibalization Risk: <strong>{result.riskScore}%</strong>
                        </div>
                      </div>

                      <h4 className="fw-bold text-dark mb-3">{result.summaryHeadline}</h4>

                      {/* GSC Explainer */}
                      <div className="gsc-impact-box mb-3">
                        <div className="d-flex align-items-center gap-2 text-danger fw-bold small mb-1">
                          <FaGoogle /> GOOGLE SEARCH CONSOLE (GSC) ALGORITHM IMPACT
                        </div>
                        <p className="mb-0 text-dark small line-height-relaxed">
                          {result.gscImpactExplanation}
                        </p>
                      </div>

                      {/* Action Guide */}
                      <div className="action-guide-box">
                        <div className="d-flex align-items-start gap-2">
                          <FaCircleInfo className="text-primary mt-1 flex-shrink-0" />
                          <div>
                            <strong className="text-primary d-block small mb-1">
                              Action Directive: {result.recommendedAction?.replace(/_/g, " ")}
                            </strong>
                            <p className="mb-0 text-secondary extra-small">
                              {result.actionExplanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Competing URLs Card */}
                    {result.competingUrls && result.competingUrls.length > 0 && (
                      <div className="premium-card">
                        <div className="premium-card-header d-flex justify-content-between align-items-center">
                          <h4 className="h6 fw-bold mb-0 text-dark d-flex align-items-center gap-2">
                            <FaLink className="text-danger" /> Existing Competing URLs ({result.competingUrls.length})
                          </h4>
                          <span className="badge bg-danger-subtle text-danger small">
                            Direct GSC Competitors
                          </span>
                        </div>
                        <div className="list-group list-group-flush">
                          {result.competingUrls.map((item, idx) => (
                            <div key={idx} className="list-group-item p-3 border-bottom">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <Link
                                  href={item.url}
                                  target="_blank"
                                  className="fw-bold text-primary text-decoration-none small d-flex align-items-center gap-1"
                                >
                                  <FaGlobe className="extra-small" /> {item.url}
                                </Link>
                                <span className="badge bg-light text-muted border extra-small">Live Page</span>
                              </div>
                              <div className="fw-semibold text-dark small mb-1">{item.title}</div>
                              <div className="p-2 bg-light rounded text-muted extra-small">
                                <strong className="text-danger">Overlap Conflict:</strong> {item.overlapReason}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* AI Recommendation Card (What to Build Instead) */}
                    {result.alternativeStrategy && (
                      <div className="premium-card blueprint-border">
                        <div className="premium-card-header d-flex justify-content-between align-items-center bg-success-subtle">
                          <h4 className="h6 fw-bold mb-0 text-success d-flex align-items-center gap-2">
                            <FaLightbulb className="text-success" /> What To Build Instead (Zero-Cannibalization Blueprint)
                          </h4>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-success d-flex align-items-center gap-1"
                            onClick={handleCopyFullReport}
                          >
                            {copiedKey === "full-report" ? <FaCheck /> : <FaCopy />}
                            <span>Export Blueprint</span>
                          </button>
                        </div>

                        <div className="p-4">
                          {/* Differentiated Angle */}
                          <div className="mb-4">
                            <label className="section-subheading">
                              1. Differentiated Angle & Focus
                            </label>
                            <div className="p-3 bg-success bg-opacity-10 border border-success border-opacity-25 rounded fw-semibold text-dark small">
                              {result.alternativeStrategy.recommendedAngle}
                            </div>
                          </div>

                          {/* Recommended Primary Keyword & Intent */}
                          <div className="row g-3 mb-4">
                            <div className="col-md-7">
                              <label className="section-subheading">
                                Recommended Non-Competing Keyword
                              </label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control form-control-sm fw-bold text-primary"
                                  readOnly
                                  value={result.alternativeStrategy.recommendedPrimaryKeyword}
                                />
                                <button
                                  className="btn btn-sm btn-outline-secondary"
                                  type="button"
                                  onClick={() =>
                                    handleCopy(
                                      result.alternativeStrategy.recommendedPrimaryKeyword,
                                      "pkw"
                                    )
                                  }
                                >
                                  {copiedKey === "pkw" ? <FaCheck className="text-success" /> : <FaCopy />}
                                </button>
                              </div>
                            </div>

                            <div className="col-md-5">
                              <label className="section-subheading">Target Search Intent</label>
                              <div className="p-2 border rounded bg-light text-dark fw-bold small">
                                🎯 {result.alternativeStrategy.targetIntent || "Informational Guide"}
                              </div>
                            </div>
                          </div>

                          {/* Secondary Keywords */}
                          {result.alternativeStrategy.recommendedSecondaryKeywords && (
                            <div className="mb-4">
                              <label className="section-subheading">
                                Long-Tail & LSI Keyword Variations (Click to Copy)
                              </label>
                              <div className="d-flex flex-wrap gap-2">
                                {result.alternativeStrategy.recommendedSecondaryKeywords.map((kw, i) => (
                                  <button
                                    key={i}
                                    type="button"
                                    className="keyword-chip"
                                    onClick={() => handleCopy(kw, `sec-${i}`)}
                                  >
                                    <span>{kw}</span>
                                    {copiedKey === `sec-${i}` ? (
                                      <FaCheck className="text-success ms-1" />
                                    ) : (
                                      <FaCopy className="ms-1 opacity-50" />
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Google SERP Preview Box */}
                          <div className="mb-4">
                            <label className="section-subheading">
                              Google SERP Snippet Preview
                            </label>
                            <div className="serp-preview-card">
                              <div className="d-flex align-items-center gap-2 mb-1">
                                <div className="serp-favicon">S</div>
                                <div>
                                  <div className="serp-site-name">SIB Infotech</div>
                                  <div className="serp-url">
                                    https://www.sibinfotech.com
                                    {result.alternativeStrategy.recommendedSlug || "/guide"}
                                  </div>
                                </div>
                              </div>
                              <div
                                className="serp-title-preview"
                                onClick={() =>
                                  handleCopy(result.alternativeStrategy.recommendedTitle, "serp-title")
                                }
                                title="Click to copy title"
                              >
                                {result.alternativeStrategy.recommendedTitle || "Optimized Title"}
                              </div>
                              <div
                                className="serp-desc-preview"
                                onClick={() =>
                                  handleCopy(
                                    result.alternativeStrategy.recommendedMetaDescription,
                                    "serp-desc"
                                  )
                                }
                                title="Click to copy description"
                              >
                                {result.alternativeStrategy.recommendedMetaDescription ||
                                  "Optimized meta description"}
                              </div>
                            </div>
                          </div>

                          {/* URL Slug */}
                          <div className="mb-4">
                            <label className="section-subheading">
                              Recommended URL Slug
                            </label>
                            <div className="input-group">
                              <span className="input-group-text bg-light text-muted small">
                                https://www.sibinfotech.com
                              </span>
                              <input
                                type="text"
                                className="form-control form-control-sm font-monospace text-dark fw-bold"
                                readOnly
                                value={result.alternativeStrategy.recommendedSlug || ""}
                              />
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                type="button"
                                onClick={() =>
                                  handleCopy(result.alternativeStrategy.recommendedSlug, "slug")
                                }
                              >
                                {copiedKey === "slug" ? <FaCheck className="text-success" /> : <FaCopy />}
                              </button>
                            </div>
                          </div>

                          {/* Content Architecture */}
                          {result.alternativeStrategy.contentOutline && (
                            <div className="mb-4">
                              <label className="section-subheading d-flex align-items-center gap-1">
                                <FaListOl className="text-primary" /> Recommended Content Structure & H2 Outline
                              </label>
                              <ol className="list-group list-group-numbered">
                                {result.alternativeStrategy.contentOutline.map((item, idx) => (
                                  <li key={idx} className="list-group-item small text-dark py-2">
                                    {item}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )}

                          {/* Internal Linking & Canonical Directive */}
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="p-3 bg-light rounded border h-100">
                                <strong className="d-block text-dark small mb-1">
                                  🔗 Internal Linking Directive:
                                </strong>
                                <span className="extra-small text-muted line-height-relaxed d-block">
                                  {result.alternativeStrategy.internalLinkingAdvice}
                                </span>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="p-3 bg-light rounded border h-100">
                                <strong className="d-block text-dark small mb-1">
                                  🏷️ Canonical Tag Directive:
                                </strong>
                                <span className="extra-small text-muted line-height-relaxed d-block">
                                  {result.alternativeStrategy.canonicalAdvice}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Reset Button */}
                    <div className="text-center pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm px-4 rounded-pill"
                        onClick={() => {
                          setResult(null);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <FaArrowRotateRight className="me-2" /> Start Another Cannibalization Audit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .admin-page-container {
          min-height: 100vh;
          background: #f8fafc;
        }
        .bg-canvas {
          background-color: #f8fafc;
        }
        .admin-hero-bar {
          background: #ffffff;
          border-bottom: 1px solid #e2e8f0;
          padding: 2.5rem 0 2rem 0;
        }
        .admin-page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }
        .admin-page-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          max-width: 750px;
          margin-bottom: 0;
          line-height: 1.5;
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(37, 99, 235, 0.1);
          color: #2563eb;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .hero-pill-badge-dark {
          display: inline-flex;
          align-items: center;
          background: #0f172a;
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .btn-api-toggle {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .btn-api-toggle:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
        }
        .btn-api-toggle.active {
          border-color: #22c55e;
          background: #f0fdf4;
          color: #15803d;
        }
        .admin-config-drawer {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1.25rem;
        }
        .preset-pill-btn {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.8rem;
          padding: 0.4rem 0.9rem;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        .preset-pill-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }
        .premium-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          overflow: hidden;
        }
        .premium-card-header {
          padding: 1.1rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          background: #ffffff;
        }
        .blueprint-border {
          border-top: 4px solid #10b981;
        }
        .input-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.35rem;
          display: block;
        }
        .input-help {
          font-size: 0.75rem;
          color: #64748b;
          display: block;
          margin-top: 0.25rem;
        }
        .modern-input {
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 0.6rem 0.85rem;
          font-size: 0.9rem;
          color: #0f172a;
          transition: all 0.2s ease;
        }
        .modern-input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }
        .intent-radio-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 0.6rem;
          cursor: pointer;
          transition: all 0.2s ease;
          background: #f8fafc;
        }
        .intent-radio-card:hover {
          border-color: #94a3b8;
          background: #f1f5f9;
        }
        .intent-radio-card.selected {
          border-color: #2563eb;
          background: #eff6ff;
          color: #1e40af;
        }
        .btn-analyze-submit {
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          border: none;
          width: 100%;
          padding: 0.9rem;
          border-radius: 10px;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }
        .btn-analyze-submit:hover:not(:disabled) {
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        .btn-analyze-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .min-h-400 {
          min-height: 420px;
        }
        .max-w-450 {
          max-width: 450px;
        }
        .empty-state-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #eff6ff;
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
        }
        .audit-pulse-ring {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(37, 99, 235, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
          }
        }
        .verdict-banner {
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid;
        }
        .verdict-high {
          border-color: #fecaca;
          background: #fff5f5;
        }
        .verdict-moderate {
          border-color: #fef08a;
          background: #fefce8;
        }
        .verdict-safe {
          border-color: #bbf7d0;
          background: #f0fdf4;
        }
        .risk-score-badge {
          background: #0f172a;
          color: #ffffff;
          font-size: 0.8rem;
          padding: 0.35rem 0.8rem;
          border-radius: 9999px;
        }
        .gsc-impact-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 1rem;
        }
        .action-guide-box {
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.2);
          border-radius: 10px;
          padding: 0.9rem;
        }
        .section-subheading {
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 0.4rem;
        }
        .keyword-chip {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #1e293b;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .keyword-chip:hover {
          background: #e2e8f0;
          border-color: #cbd5e1;
        }
        .serp-preview-card {
          background: #ffffff;
          border: 1px solid #dfe1e5;
          border-radius: 12px;
          padding: 1rem;
          font-family: arial, sans-serif;
        }
        .serp-favicon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #dc2626;
          color: #ffffff;
          font-weight: bold;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .serp-site-name {
          font-size: 13px;
          color: #202124;
          line-height: 1.2;
        }
        .serp-url {
          font-size: 12px;
          color: #4d5156;
          line-height: 1.2;
        }
        .serp-title-preview {
          color: #1a0dab;
          font-size: 18px;
          line-height: 1.3;
          margin-top: 4px;
          cursor: pointer;
        }
        .serp-title-preview:hover {
          text-decoration: underline;
        }
        .serp-desc-preview {
          color: #4d5156;
          font-size: 13px;
          line-height: 1.4;
          margin-top: 4px;
          cursor: pointer;
        }
        .extra-small {
          font-size: 0.75rem;
        }
      `}</style>
    </>
  );
}
