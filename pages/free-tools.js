import React from "react";
import Link from "next/link";

const TOOLS = [
  {
    category: "Conversion Tools",
    tools: [
      {
        name: "Conversion Rate Calculator",
        slug: "conversion-rate-calculator",
        description: "Calculate your conversion rate and improve campaign effectiveness.",
        icon: "📈"
      },
      {
        name: "Marketing ROI Calculator",
        slug: "marketing-roi-calculator",
        description: "Measure the return on investment of your marketing efforts.",
        icon: "💰"
      },
      {
        name: "PPC Calculator",
        slug: "ppc-calculator",
        description: "Estimate pay-per-click campaign performance and profitability.",
        icon: "🧮"
      },
      {
        name: "SEO Calculator",
        slug: "seo-calculator",
        description: "Analyze your SEO investment returns and growth potential.",
        icon: "🔍"
      },
    ],
  },
  {
    category: "Content Tools",
    tools: [
      {
        name: "Paragraph Rewriter",
        slug: "paragraph-rewriter",
        description: "Rewrite entire paragraphs with your preferred tone and style.",
        icon: "✍️"
      },
      {
        name: "Sentence Rewriter",
        slug: "sentence-rewriter",
        description: "Paraphrase individual sentences with clarity and precision.",
        icon: "📝"
      },
      {
        name: "Password Generator",
        slug: "password-generator",
        description: "Generate strong, secure passwords instantly.",
        icon: "🔐"
      },
      {
        name: "Word Counter",
        slug: "word-counter",
        description: "Count characters, words, sentences, and more.",
        icon: "🔢"
      },
      {
        name: "Keyword Density Checker",
        slug: "keyword-density",
        description: "Analyze keyword density in your content for better SEO.",
        icon: "📊"
      },
    ],
  },
  {
    category: "Technical SEO Tools",
    tools: [
      {
        name: "Redirect Checker",
        slug: "redirect-checker",
        description: "Check your site redirects and identify redirect chains.",
        icon: "🔁"
      },
      {
        name: "SERP Snippet Generator",
        slug: "serp-snippet-generator",
        description: "Preview how your page appears in Google search results.",
        icon: "🖼️"
      },
      {
        name: "Title & Meta Description Checker",
        slug: "title-description-checker",
        description: "Check pixel width and SEO score of your meta tags.",
        icon: "🧾"
      },
      {
        name: "Robots.txt Generator",
        slug: "robots-generator",
        description: "Create optimized robots.txt files for your website.",
        icon: "🤖"
      },
      {
        name: "Robots.txt Tester",
        slug: "robots-txt-tester",
        description: "Test your robots.txt rules to ensure proper crawling.",
        icon: "🔬"
      },
      {
        name: "Robots & Sitemap Validator",
        slug: "robots-sitemap-validator",
        description: "Validate robots.txt and sitemap files for accuracy.",
        icon: "✔️"
      },
    ],
  },
  {
    category: "Website Tools",
    tools: [
      {
        name: "Website Speed Test",
        slug: "website-speed-test",
        description: "Test your website's loading speed and performance.",
        icon: "🚀"
      },
      {
        name: "Mobile Friendly Checker",
        slug: "mobile-checker",
        description: "Check how mobile-friendly your website is.",
        icon: "📱"
      },
      {
        name: "Website Compare Tool",
        slug: "website-compare",
        description: "Compare two websites side-by-side for SEO metrics.",
        icon: "⚖️"
      },
    ],
  },
  {
  category: "Design Tools",
    tools: [
      {
        name: "Color Palette Extractor",
        slug: "color-palette-extractor",
        description: "Extract the most dominant colors from any uploaded image.",
        icon: "🎨"
      },
    ],
  }
];

export default function FreeToolsPage() {
  return (
    <>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-center text-white">
                  Free SEO & Marketing Tools
                </h1>
                <h2 className="title text-center text-white">
                  Explore our collection of powerful, free tools for marketers, SEOs, and developers.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.wrapper}>
        {TOOLS.map((section, index) => (
          <div key={index} style={styles.section}>
            <h2 style={styles.category}>{section.category}</h2>
            <div style={styles.grid}>
              {section.tools.map((tool, i) => (
                <Link href={`/${tool.slug}`} key={i} legacyBehavior>
                  <a style={styles.card} target="_blank" rel="noopener noreferrer">
                    <div style={styles.icon}>{tool.icon}</div>
                    <div>
                      <div style={styles.toolName}>{tool.name}</div>
                      <div style={styles.description}>{tool.description}</div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    maxWidth: 1080,
    margin: "3rem auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: "3rem",
  },
  category: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#222",
    marginBottom: "1.5rem",
    borderBottom: "1px solid #eee",
    paddingBottom: "0.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#f9f9f9",
    padding: "1.25rem",
    borderRadius: 10,
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    textDecoration: "none",
    color: "#222",
    transition: "all 0.2s ease",
    flexDirection: "row",
  },
  icon: {
    fontSize: "28px",
    flexShrink: 0,
    marginTop: "3px",
  },
  toolName: {
    fontWeight: 600,
    fontSize: "15px",
    marginBottom: "0.4rem",
  },
  description: {
    fontSize: "13px",
    color: "#666",
  },
};