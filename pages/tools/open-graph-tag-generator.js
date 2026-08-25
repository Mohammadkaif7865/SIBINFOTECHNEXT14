import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaShareNodes,
  FaCopy,
  FaCheck,
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function OpenGraphTagGenerator() {
  const [title, setTitle] = useState("Best Digital Marketing Agency in India | SIB Infotech");
  const [description, setDescription] = useState(
    "Boost web traffic, generate leads, and maximize sales with SIB Infotech. Top SEO & digital marketing company in India."
  );
  const [url, setUrl] = useState("https://www.sibinfotech.com");
  const [siteName, setSiteName] = useState("SIB Infotech");
  const [imageUrl, setImageUrl] = useState("https://www.sibinfotech.com/assets/og/sib-infotech.webp");
  const [ogType, setOgType] = useState("website");
  const [twitterCardType, setTwitterCardType] = useState("summary_large_image");
  const [twitterHandle, setTwitterHandle] = useState("@sibinfotech");
  const [socialPlatform, setSocialPlatform] = useState("facebook");
  const [copied, setCopied] = useState(false);

  // Generate HTML Meta tags code snippet
  const generateMetaTags = () => {
    let output = `<!-- Open Graph Meta Tags -->\n`;
    output += `<meta property="og:title" content="${title}" />\n`;
    output += `<meta property="og:description" content="${description}" />\n`;
    output += `<meta property="og:url" content="${url}" />\n`;
    output += `<meta property="og:site_name" content="${siteName}" />\n`;
    output += `<meta property="og:type" content="${ogType}" />\n`;
    output += `<meta property="og:image" content="${imageUrl}" />\n\n`;

    output += `<!-- Twitter Card Meta Tags -->\n`;
    output += `<meta name="twitter:card" content="${twitterCardType}" />\n`;
    output += `<meta name="twitter:title" content="${title}" />\n`;
    output += `<meta name="twitter:description" content="${description}" />\n`;
    output += `<meta name="twitter:image" content="${imageUrl}" />\n`;
    if (twitterHandle) {
      output += `<meta name="twitter:site" content="${twitterHandle}" />\n`;
    }

    return output;
  };

  const metaCode = generateMetaTags();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(metaCode);
    setCopied(true);
    toast.success("Open Graph Meta Tags copied to clipboard!");
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
        name: "Open Graph Tag Generator",
        item: "https://www.sibinfotech.com/tools/open-graph-tag-generator",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Open Graph Tag Generator Tool",
    url: "https://www.sibinfotech.com/tools/open-graph-tag-generator",
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
      <title>Free Open Graph Tag Generator Tool | Social Meta Tags | SIB Infotech</title>
      <meta
        name="description"
        content="Free Open Graph Tag Generator tool. Generate Facebook Open Graph and Twitter Card meta tags with live social media post previews."
      />
      <meta
        name="keywords"
        content="open graph generator, og tag generator, twitter card generator, facebook meta tags, social preview generator"
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
      <Breadcrumb Pagetitle="Open Graph Tag Generator" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaShareNodes /> Social Media Meta Tag Utility
              </span>
              <h1 className="fw-bold display-6 mb-3">
                Open Graph <span className="text_red">& Twitter Card Generator</span>
              </h1>
              <p className="lead text-secondary">
                Generate Open Graph (OG) and Twitter Card meta tags so your web pages display rich images, titles, and descriptions when shared on Facebook, Twitter/X, and LinkedIn.
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
                  <FaWandMagicSparkles className="text-danger" /> Configure Social Meta Tags
                </h4>

                <div className="mb-3">
                  <label className="form-label fw-semibold">OG Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title for social media shares..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">OG Description *</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Short description for social media..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Canonical Page URL *</label>
                    <input
                      type="url"
                      className="form-control"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Site Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={siteName}
                      onChange={(e) => setSiteName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Social Image URL (1200x630 px) *</label>
                  <input
                    type="url"
                    className="form-control"
                    placeholder="https://example.com/social-share.jpg"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">OG Type</label>
                    <select
                      className="form-select"
                      value={ogType}
                      onChange={(e) => setOgType(e.target.value)}
                    >
                      <option value="website">website</option>
                      <option value="article">article</option>
                      <option value="product">product</option>
                      <option value="profile">profile</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Twitter Card Type</label>
                    <select
                      className="form-select"
                      value={twitterCardType}
                      onChange={(e) => setTwitterCardType(e.target.value)}
                    >
                      <option value="summary_large_image">Summary Card with Large Image</option>
                      <option value="summary">Summary Card</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Twitter Handle / Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="@sibinfotech"
                    value={twitterHandle}
                    onChange={(e) => setTwitterHandle(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Visual Social Card Previews */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold mb-0 text-dark">Social Media Card Live Preview</h5>
                  <div className="btn-group btn-group-sm">
                    <button
                      className={`btn ${socialPlatform === "facebook" ? "btn-primary" : "btn-outline-secondary"}`}
                      onClick={() => setSocialPlatform("facebook")}
                    >
                      <FaFacebook /> Facebook
                    </button>
                    <button
                      className={`btn ${socialPlatform === "twitter" ? "btn-dark" : "btn-outline-secondary"}`}
                      onClick={() => setSocialPlatform("twitter")}
                    >
                      <FaXTwitter /> Twitter / X
                    </button>
                    <button
                      className={`btn ${socialPlatform === "linkedin" ? "btn-info text-white" : "btn-outline-secondary"}`}
                      onClick={() => setSocialPlatform("linkedin")}
                    >
                      <FaLinkedin /> LinkedIn
                    </button>
                  </div>
                </div>

                {/* Facebook Card */}
                {socialPlatform === "facebook" && (
                  <div className="social-card-fb">
                    <div className="social-card-img-placeholder">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="OG Preview"
                          className="w-100 h-100 object-fit-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <span>1200 x 630 Image Preview</span>
                      )}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="text-uppercase text-muted small">{new URL(url || "https://example.com").hostname}</div>
                      <div className="fw-bold text-dark text-truncate my-1">{title}</div>
                      <div className="text-secondary small text-truncate">{description}</div>
                    </div>
                  </div>
                )}

                {/* Twitter Card */}
                {socialPlatform === "twitter" && (
                  <div className="social-card-tw">
                    <div className="social-card-img-placeholder" style={{ height: "180px" }}>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt="Twitter Card"
                          className="w-100 h-100 object-fit-cover"
                        />
                      ) : (
                        <span>Twitter Image Card</span>
                      )}
                    </div>
                    <div className="p-3 bg-white border-top">
                      <div className="fw-bold text-dark text-truncate mb-1">{title}</div>
                      <div className="text-muted small text-truncate mb-1">{description}</div>
                      <div className="text-secondary small">🔗 {new URL(url || "https://example.com").hostname}</div>
                    </div>
                  </div>
                )}

                {/* LinkedIn Card */}
                {socialPlatform === "linkedin" && (
                  <div className="social-card-fb border">
                    <div className="social-card-img-placeholder">
                      {imageUrl && (
                        <img src={imageUrl} alt="LinkedIn Card" className="w-100 h-100 object-fit-cover" />
                      )}
                    </div>
                    <div className="p-3 bg-white">
                      <div className="fw-bold text-dark text-truncate">{title}</div>
                      <div className="text-muted small">{new URL(url || "https://example.com").hostname}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Code Snippet Box */}
              <div className="tool-card-wrapper">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h5 className="fw-bold mb-0 text-dark">Generated HTML Meta Tags</h5>
                  <button className="btn btn-danger btn-sm" onClick={copyToClipboard}>
                    {copied ? <FaCheck /> : <FaCopy />} Copy Meta Tags
                  </button>
                </div>
                <div className="code-output-container">
                  <div className="code-output-header">
                    <span>HTML &lt;head&gt; Section</span>
                    <span>OG & Twitter Tags</span>
                  </div>
                  <pre className="code-output-body">{metaCode}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
