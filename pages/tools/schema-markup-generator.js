import React, { useState } from "react";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import { toast } from "react-toastify";
import {
  FaCode,
  FaCopy,
  FaCheck,
  FaUpRightFromSquare,
  FaWandMagicSparkles,
  FaLightbulb,
  FaPlus,
  FaTrash,
} from "react-icons/fa6";

export default function SchemaMarkupGenerator() {
  const [schemaType, setSchemaType] = useState("FAQPage");
  const [copied, setCopied] = useState(false);

  // Schema Specific State Fields
  // FAQ Schema
  const [faqs, setFaqs] = useState([
    {
      question: "What is an SEO audit?",
      answer: "An SEO audit is a comprehensive evaluation of a website's search engine friendliness across technical, on-page, and off-page factors.",
    },
    {
      question: "How long does SEO take to produce results?",
      answer: "SEO results typically begin appearing within 3 to 6 months depending on competition, technical health, and content quality.",
    },
  ]);

  // Article Schema
  const [article, setArticle] = useState({
    headline: "The Ultimate Guide to Technical SEO in 2026",
    description: "Learn how to optimize your website for crawlability, indexation, and Core Web Vitals.",
    authorName: "SIB Infotech Team",
    publisherName: "SIB Infotech",
    publisherLogo: "https://www.sibinfotech.com/assets/images/logo.webp",
    url: "https://www.sibinfotech.com/blog/technical-seo-guide",
    datePublished: "2026-08-24",
    image: "https://www.sibinfotech.com/assets/og/sib-infotech.webp",
  });

  // LocalBusiness Schema
  const [business, setBusiness] = useState({
    name: "SIB Infotech - Digital Marketing Agency",
    type: "ProfessionalService",
    url: "https://www.sibinfotech.com",
    telephone: "+91-9222260000",
    streetAddress: "123 Business Park, Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "MH",
    postalCode: "400069",
    addressCountry: "IN",
    priceRange: "$$",
  });

  // Product Schema
  const [product, setProduct] = useState({
    name: "SEO Optimization Package",
    image: "https://www.sibinfotech.com/assets/images/seo-package.webp",
    description: "Full-service enterprise SEO optimization package.",
    brand: "SIB Infotech",
    price: "499",
    currency: "USD",
    ratingValue: "4.9",
    reviewCount: "128",
  });

  // Organization Schema
  const [organization, setOrganization] = useState({
    name: "SIB Infotech",
    url: "https://www.sibinfotech.com",
    logo: "https://www.sibinfotech.com/assets/images/logo.webp",
    sameAs: "https://www.facebook.com/sibinfotech, https://twitter.com/sibinfotech",
  });

  // Dynamic JSON-LD builder based on selected schema
  const generateJsonLd = () => {
    if (schemaType === "FAQPage") {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      };
    } else if (schemaType === "Article") {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        image: article.image,
        datePublished: article.datePublished,
        author: {
          "@type": "Person",
          name: article.authorName,
        },
        publisher: {
          "@type": "Organization",
          name: article.publisherName,
          logo: {
            "@type": "ImageObject",
            url: article.publisherLogo,
          },
        },
        mainEntityOfPage: article.url,
      };
    } else if (schemaType === "LocalBusiness") {
      return {
        "@context": "https://schema.org",
        "@type": business.type || "LocalBusiness",
        name: business.name,
        url: business.url,
        telephone: business.telephone,
        priceRange: business.priceRange,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.streetAddress,
          addressLocality: business.addressLocality,
          addressRegion: business.addressRegion,
          postalCode: business.postalCode,
          addressCountry: business.addressCountry,
        },
      };
    } else if (schemaType === "Product") {
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image,
        description: product.description,
        brand: {
          "@type": "Brand",
          name: product.brand,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: product.currency,
          price: product.price,
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: product.ratingValue,
          reviewCount: product.reviewCount,
        },
      };
    } else {
      // Organization
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: organization.name,
        url: organization.url,
        logo: organization.logo,
        sameAs: organization.sameAs.split(",").map((s) => s.trim()),
      };
    }
  };

  const jsonString = JSON.stringify(generateJsonLd(), null, 2);
  const formattedScriptTag = `<script type="application/ld+json">\n${jsonString}\n</script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedScriptTag);
    setCopied(true);
    toast.success("JSON-LD Schema copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const addFaqItem = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaqItem = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
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
        name: "Schema Markup Generator",
        item: "https://www.sibinfotech.com/tools/schema-markup-generator",
      },
    ],
  };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Schema Markup Generator Tool",
    url: "https://www.sibinfotech.com/tools/schema-markup-generator",
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
      <title>Free Schema Markup Generator Tool | JSON-LD Structured Data | SIB Infotech</title>
      <meta
        name="description"
        content="Free JSON-LD Schema Markup Generator for FAQPage, Article, LocalBusiness, Product, and Organization schemas. Generate valid structured data for Google rich snippets."
      />
      <meta
        name="keywords"
        content="schema markup generator, json-ld generator, faq schema generator, article schema generator, local business schema, rich snippet generator"
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
      <Breadcrumb Pagetitle="Schema Markup Generator" />

      {/* Hero Header */}
      <section className="bg-light py-5 border-bottom">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="tool-header-badge">
                <FaCode /> Structured Data & Rich Snippet Generator
              </span>
              <h1 className="fw-bold display-6 mb-3">
                JSON-LD <span className="text_red">Schema Markup Generator</span>
              </h1>
              <p className="lead text-secondary">
                Generate valid Schema.org structured data in JSON-LD format for Google Rich Snippets (FAQs, Articles, Products, Local Business, and Organizations).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tool Interface */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Form Inputs Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper">
                <div className="mb-4">
                  <label className="form-label fw-bold h5 text-dark">Select Schema Type</label>
                  <select
                    className="form-select form-select-lg border-danger text-dark fw-semibold"
                    value={schemaType}
                    onChange={(e) => setSchemaType(e.target.value)}
                  >
                    <option value="FAQPage">FAQ Page Schema</option>
                    <option value="Article">Article / Blog Post Schema</option>
                    <option value="LocalBusiness">Local Business Schema</option>
                    <option value="Product">Product Schema</option>
                    <option value="Organization">Organization Schema</option>
                  </select>
                </div>

                <hr className="my-4" />

                {/* FAQ Schema Form */}
                {schemaType === "FAQPage" && (
                  <div>
                    <h5 className="fw-bold mb-3 text-dark">FAQ Questions & Answers</h5>
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="p-3 bg-light rounded-3 mb-3 border position-relative">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-bold text-danger">Question #{idx + 1}</span>
                          {faqs.length > 1 && (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger border-0"
                              onClick={() => removeFaqItem(idx)}
                            >
                              <FaTrash />
                            </button>
                          )}
                        </div>
                        <div className="mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="e.g. What is SEO?"
                            value={faq.question}
                            onChange={(e) => {
                              const updated = [...faqs];
                              updated[idx].question = e.target.value;
                              setFaqs(updated);
                            }}
                          />
                        </div>
                        <div>
                          <textarea
                            rows={2}
                            className="form-control"
                            placeholder="Answer text..."
                            value={faq.answer}
                            onChange={(e) => {
                              const updated = [...faqs];
                              updated[idx].answer = e.target.value;
                              setFaqs(updated);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm fw-bold"
                      onClick={addFaqItem}
                    >
                      <FaPlus /> Add Question
                    </button>
                  </div>
                )}

                {/* Article Schema Form */}
                {schemaType === "Article" && (
                  <div>
                    <h5 className="fw-bold mb-3 text-dark">Article Information</h5>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Headline / Title *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={article.headline}
                        onChange={(e) => setArticle({ ...article, headline: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Description</label>
                      <textarea
                        rows={2}
                        className="form-control"
                        value={article.description}
                        onChange={(e) => setArticle({ ...article, description: e.target.value })}
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Author Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={article.authorName}
                          onChange={(e) => setArticle({ ...article, authorName: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Publisher Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={article.publisherName}
                          onChange={(e) => setArticle({ ...article, publisherName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Article URL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* LocalBusiness Form */}
                {schemaType === "LocalBusiness" && (
                  <div>
                    <h5 className="fw-bold mb-3 text-dark">Local Business Details</h5>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Business Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        value={business.name}
                        onChange={(e) => setBusiness({ ...business, name: e.target.value })}
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Telephone</label>
                        <input
                          type="text"
                          className="form-control"
                          value={business.telephone}
                          onChange={(e) => setBusiness({ ...business, telephone: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">City</label>
                        <input
                          type="text"
                          className="form-control"
                          value={business.addressLocality}
                          onChange={(e) => setBusiness({ ...business, addressLocality: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Street Address</label>
                      <input
                        type="text"
                        className="form-control"
                        value={business.streetAddress}
                        onChange={(e) => setBusiness({ ...business, streetAddress: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Product Form */}
                {schemaType === "Product" && (
                  <div>
                    <h5 className="fw-bold mb-3 text-dark">Product Details</h5>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Product Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={product.name}
                        onChange={(e) => setProduct({ ...product, name: e.target.value })}
                      />
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Price</label>
                        <input
                          type="text"
                          className="form-control"
                          value={product.price}
                          onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Currency</label>
                        <input
                          type="text"
                          className="form-control"
                          value={product.currency}
                          onChange={(e) => setProduct({ ...product, currency: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Organization Form */}
                {schemaType === "Organization" && (
                  <div>
                    <h5 className="fw-bold mb-3 text-dark">Organization Details</h5>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Organization Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={organization.name}
                        onChange={(e) => setOrganization({ ...organization, name: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Website URL</label>
                      <input
                        type="text"
                        className="form-control"
                        value={organization.url}
                        onChange={(e) => setOrganization({ ...organization, url: e.target.value })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Generated Code Output Column */}
            <div className="col-lg-6">
              <div className="tool-card-wrapper h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="fw-bold mb-0 text-dark">Generated JSON-LD Code</h5>
                    <button
                      className="btn btn-danger btn-sm d-flex align-items-center gap-1"
                      onClick={copyToClipboard}
                    >
                      {copied ? <FaCheck /> : <FaCopy />} Copy Code
                    </button>
                  </div>

                  <div className="code-output-container mb-3">
                    <div className="code-output-header">
                      <span>HTML Header Script</span>
                      <span>JSON-LD Format</span>
                    </div>
                    <pre className="code-output-body">{formattedScriptTag}</pre>
                  </div>
                </div>

                <div className="p-3 bg-light rounded-3 d-flex align-items-center justify-content-between">
                  <div>
                    <span className="fw-bold text-dark d-block">Test Structured Data</span>
                    <small className="text-muted">Validate generated JSON-LD on Google Rich Results Test</small>
                  </div>
                  <a
                    href="https://search.google.com/test/rich-results"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                  >
                    Google Test <FaUpRightFromSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Guide */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-4 text-dark">
                Understanding JSON-LD Schema Markup
              </h2>
              <p className="text-secondary">
                Schema markup is standardized structured data code that you place in your HTML `&lt;head&gt;` tag to help search engines understand your content and display rich snippet enhancements (stars, FAQ accordions, price, availability).
              </p>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
