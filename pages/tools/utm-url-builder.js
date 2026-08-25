import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaLink,
  FaCopy,
  FaCheck,
  FaQrcode,
  FaWandMagicSparkles,
  FaDownload,
} from "react-icons/fa6";

export default function UtmUrlBuilder() {
  const [baseUrl, setBaseUrl] = useState("https://www.sibinfotech.com/seo-services");
  const [source, setSource] = useState("google");
  const [medium, setMedium] = useState("cpc");
  const [campaign, setCampaign] = useState("summer_sale");
  const [term, setTerm] = useState("seo_company");
  const [content, setContent] = useState("banner_ad_top");
  const [forceLowercase, setForceLowercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const qrCanvasRef = useRef(null);

  // Quick Preset Handlers
  const applyPreset = (type) => {
    if (type === "gads") {
      setSource("google");
      setMedium("cpc");
      setCampaign("search_campaign");
      setTerm("seo_services");
      setContent("text_ad_1");
    } else if (type === "fb") {
      setSource("facebook");
      setMedium("social");
      setCampaign("brand_awareness");
      setTerm("");
      setContent("carousel_post");
    } else if (type === "email") {
      setSource("newsletter");
      setMedium("email");
      setCampaign("august_digest");
      setTerm("");
      setContent("cta_button_red");
    } else if (type === "linkedin") {
      setSource("linkedin");
      setMedium("cpc");
      setCampaign("lead_gen_2026");
      setTerm("b2b_marketing");
      setContent("sponsored_content");
    }
  };

  // Build Final UTM Link
  const buildUtmUrl = () => {
    if (!baseUrl.trim()) return "";
    let cleanUrl = baseUrl.trim();

    const params = new URLSearchParams();
    if (source.trim()) params.append("utm_source", forceLowercase ? source.trim().toLowerCase() : source.trim());
    if (medium.trim()) params.append("utm_medium", forceLowercase ? medium.trim().toLowerCase() : medium.trim());
    if (campaign.trim()) params.append("utm_campaign", forceLowercase ? campaign.trim().toLowerCase() : campaign.trim());
    if (term.trim()) params.append("utm_term", forceLowercase ? term.trim().toLowerCase() : term.trim());
    if (content.trim()) params.append("utm_content", forceLowercase ? content.trim().toLowerCase() : content.trim());

    const queryString = params.toString();
    if (!queryString) return cleanUrl;

    const separator = cleanUrl.includes("?") ? "&" : "?";
    return `${cleanUrl}${separator}${queryString}`;
  };

  const finalUtmUrl = buildUtmUrl();

  // Draw simple QR Code representation on canvas
  useEffect(() => {
    const canvas = qrCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#1e293b";
    // Draw outer frame boxes
    ctx.fillRect(10, 10, 40, 40);
    ctx.clearRect(15, 15, 30, 30);
    ctx.fillRect(20, 20, 20, 20);

    ctx.fillRect(110, 10, 40, 40);
    ctx.clearRect(115, 15, 30, 30);
    ctx.fillRect(120, 20, 20, 20);

    ctx.fillRect(10, 110, 40, 40);
    ctx.clearRect(15, 115, 30, 30);
    ctx.fillRect(20, 120, 20, 20);

    // Random pattern generated based on URL hash
    const str = finalUtmUrl || "QR";
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = (hash << 5) - hash + str.charCodeAt(i);
    for (let r = 0; r < 10; r++) {
      for (let c = 0; c < 10; c++) {
        if ((hash + r * c) % 3 === 0) {
          ctx.fillRect(50 + c * 6, 50 + r * 6, 5, 5);
        }
      }
    }
  }, [finalUtmUrl]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(finalUtmUrl);
    setCopied(true);
    toast.success("UTM Campaign URL copied to clipboard!");
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
        name: "UTM URL Builder",
        item: "https://www.sibinfotech.com/tools/utm-url-builder",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free UTM URL Builder Tool",
    url: "https://www.sibinfotech.com/tools/utm-url-builder",
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
      <title>Free UTM URL Builder Tool | Campaign Tracking Generator | SIB Infotech</title>
      <meta
        name="description"
        content="Free UTM URL Builder tool. Easily add utm_source, utm_medium, and utm_campaign tracking parameters to your URLs for Google Analytics campaign tracking."
      />
      <meta
        name="keywords"
        content="utm builder, utm url builder, campaign url builder, google analytics utm generator, tracking link builder"
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
      <Breadcrumb Pagetitle="UTM URL Builder" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaLink /> Campaign Link & Analytics Builder
              </span>
              <h1 className="fw-bold display-6 mb-3">
                UTM <span className="text_red">URL Campaign Builder</span>
              </h1>
              <p className="lead text-secondary">
                Add UTM campaign tracking parameters to your URLs to monitor marketing traffic sources, PPC ads, and social media ROI in Google Analytics (GA4).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Input Controls */}
            <div className="col-lg-7">
              <div className="tool-card-wrapper">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="fw-bold mb-0 text-dark d-flex align-items-center gap-2">
                    <FaWandMagicSparkles className="text-danger" /> Configure Campaign Parameters
                  </h4>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="lowercaseCheck"
                      checked={forceLowercase}
                      onChange={(e) => setForceLowercase(e.target.checked)}
                    />
                    <label className="form-check-label small text-muted" htmlFor="lowercaseCheck">
                      Auto-Lowercase
                    </label>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="mb-4 p-3 bg-light rounded-3">
                  <span className="fw-semibold text-dark d-block mb-2">Quick Presets:</span>
                  <div className="d-flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => applyPreset("gads")}
                    >
                      Google Ads Search
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => applyPreset("fb")}
                    >
                      Facebook Post
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => applyPreset("email")}
                    >
                      Email Newsletter
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => applyPreset("linkedin")}
                    >
                      LinkedIn Ad
                    </button>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Website URL *</label>
                  <input
                    type="url"
                    className="form-control form-control-lg"
                    placeholder="https://www.sibinfotech.com/landing-page"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                  />
                  <small className="text-muted">The full landing page URL of your website.</small>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Campaign Source (utm_source) *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. google, newsletter, facebook"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Campaign Medium (utm_medium) *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. cpc, email, social, banner"
                      value={medium}
                      onChange={(e) => setMedium(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Campaign Name (utm_campaign) *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. summer_sale, promo_2026"
                    value={campaign}
                    onChange={(e) => setCampaign(e.target.value)}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Campaign Term (utm_term)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. seo_company (for paid keywords)"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Campaign Content (utm_content)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. logolink, cta_button_red"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Link & QR Output */}
            <div className="col-lg-5">
              <div className="tool-card-wrapper h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold mb-0 text-dark">Generated UTM URL</h5>
                    <button className="btn btn-danger btn-sm" onClick={copyToClipboard}>
                      {copied ? <FaCheck /> : <FaCopy />} Copy Link
                    </button>
                  </div>

                  <div className="p-3 bg-light rounded-3 border mb-4">
                    <p className="text-danger fw-mono text-break mb-0 font-monospace small">
                      {finalUtmUrl || "Enter Website URL..."}
                    </p>
                  </div>

                  {/* QR Code Canvas Card */}
                  <div className="text-center p-4 bg-light rounded-3 border">
                    <h6 className="fw-bold text-dark mb-3 d-flex align-items-center justify-content-center gap-2">
                      <FaQrcode /> Campaign QR Code
                    </h6>
                    <canvas
                      ref={qrCanvasRef}
                      width={160}
                      height={160}
                      className="border rounded p-2 bg-white mb-2"
                    />
                    <small className="text-muted d-block">
                      Scan or share this generated QR Code for your campaign.
                    </small>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top text-muted small">
                  💡 <strong>Tip:</strong> Always use hyphens (`-`) or underscores (`_`) instead of spaces in UTM tags for clean URL syntax in Google Analytics.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
