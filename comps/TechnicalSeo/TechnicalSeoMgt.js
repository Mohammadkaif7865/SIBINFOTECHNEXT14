import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import Solution from "@/comps/WhiteLabel/Solution";
import WhySIB from "@/comps/Home/WhySIB";
import SIBPower from "@/comps/Home/SIBPower";
import Partnership from "@/comps/WhiteLabel/Partnership";
import PartnerBadges from "@/comps/Home/PartnerBadges2";
import OurClients from "@/comps/Home/OurClients";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const TechnicalSeoMgt = () => {
  const technicalServices = [
    {
      title: `Core Web Vitals <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Google's Core Web Vitals are a direct ranking factor. We audit and improve all three metrics: LCP under 2.5 seconds (image compression and lazy loading, resource prioritisation, server response time), INP under 200ms (JavaScript execution optimisation, event handler deferral, main thread unblocking), and CLS under 0.1 (explicit dimensions on images and embeds, font loading stability, avoiding DOM injection above visible content).",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Crawl Budget <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Large websites can waste significant crawl budget on low-value URLs: faceted navigation parameters, duplicate content, thin pages, and session IDs. We conduct log file analysis to identify actual Googlebot crawl patterns, implement noindex and canonical strategies for low-value pages, and rebuild internal linking to concentrate crawl equity on revenue-driving pages.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `JavaScript <br class="d-none d-md-lg "/> SEO`,
      description:
        "Websites built with React, Angular, Next.js, Vue, or custom JavaScript frameworks face specific rendering challenges. We audit JavaScript SEO using Google's URL Inspection tool and custom rendering tests, identify content not being indexed due to client-side rendering, and provide server-side rendering (SSR) or static site generation (SSG) implementation recommendations.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Schema Markup and <br class="d-none d-md-lg "/> Structured Data`,
      description:
        "Schema markup helps search engines understand the type and meaning of your content, enabling rich results and improving AI search visibility. We implement and validate schema for all applicable page types: Organisation and LocalBusiness, Service and Product, FAQPage and HowTo, Article and BlogPosting, BreadcrumbList, and AggregateRating and Review.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
    {
      title: `Site Architecture and <br class="d-none d-md-lg "/> Internal Linking`,
      description:
        "How your pages connect determines how link equity flows through your site. We audit crawl depth (every important page should be reachable within 3 clicks), identify orphan pages, optimise anchor text distribution, and build a systematic internal linking framework that concentrates authority on your highest-value pages.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `Canonical Tags and <br class="d-none d-md-lg "/> Duplicate Content`,
      description:
        "Duplicate and near-duplicate content confuses Google's indexation and dilutes ranking signals. We audit all sources of duplication — URL parameter variations, HTTP/HTTPS variants, www/non-www, session IDs, trailing slash inconsistencies — and implement canonical tags to consolidate ranking signals on the preferred version of each page.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.jpg",
    },
    {
      title: `XML Sitemaps and <br class="d-none d-md-lg "/> Robots.txt`,
      description:
        "We audit and rebuild XML sitemaps to ensure all indexable pages are included, all non-indexable pages are excluded, and sitemaps are submitted and validated in Google Search Console. We audit robots.txt to confirm no critical pages or directories are accidentally blocked from Googlebot.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];

  const issuesTable = [
    {
      issue: "Poor Core Web Vitals (LCP > 4s)",
      impact: "Direct ranking penalty + high bounce rate + lower conversions",
    },
    {
      issue: "Pages blocked by robots.txt",
      impact: "Key pages not visible to Google at all",
    },
    {
      issue: "Missing or incorrect canonical tags",
      impact: "Ranking signal dilution across duplicate pages",
    },
    {
      issue: "JavaScript-only content",
      impact: "Content not indexed by Google if not server-rendered",
    },
    {
      issue: "Crawl depth > 3 clicks",
      impact: "Deep pages receive minimal crawl and low ranking authority",
    },
    {
      issue: "Missing schema markup",
      impact: "No rich results, lower AI search visibility",
    },
    {
      issue: "Duplicate title/meta tags",
      impact: "Confused signals about page purpose and keyword targeting",
    },
    {
      issue: "XML sitemap errors",
      impact: "Important pages not submitted for crawl, slower indexation",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Since 2005",
      description:
        "Among the top 3% of Google Partners in India, with direct access to Google insights and beta features.",
    },
    {
      title: "18+ Years of Expertise",
      description:
        "Proven performance across every major algorithm era, from Panda and Penguin through AI Overviews and generative search.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "Our strategies are stress-tested across industries and markets worldwide.",
    },
    {
      title: "Named Enterprise Clients",
      description:
        "Trusted by Airtel, Finolex, Jindal Steel, and BPCL for their digital growth.",
    },
    {
      title: "Full-Service Team",
      description:
        "Technical SEOs, content specialists, link builders, and strategists working as one integrated unit.",
    },
    {
      title: "Transparent Monthly Reporting",
      description:
        "Keyword rankings, traffic trends, and ROI analysis delivered every month.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "Technical SEO That Makes Every Other SEO Investment Work",
    cardTitle: "Fix the Foundation, Unlock the Rankings",
    cardDescription:
      "Content and links only work if Google can efficiently crawl, render, and index your website. SIB Infotech combines 18+ years of organic growth strategy with a deep technical SEO toolkit to fix the infrastructure your rankings are built on.",
    buttonText: "Get Your Free Technical SEO Audit",
  };

  const rightBoxContent = {
    heading: "The Technical SEO Agency That Fixes Rankings at the Root",
    description:
      "You can create excellent content and earn powerful backlinks — but if Google cannot efficiently crawl, render, and index your website, none of it works. Our technical SEO team fixes the infrastructure that determines whether all your other SEO investment pays off.",
  };

  const power_data = [
    {
      title: "Deep Technical Tool Stack",
      description:
        "Screaming Frog, Google Search Console, PageSpeed Insights, Rich Results Test, and log file analysis tools deployed across every technical audit.",
    },
    {
      title: "Developer-Ready Implementation Briefs",
      description:
        "Every fix is documented with clear acceptance criteria, so your development team can implement our specifications without guesswork.",
    },
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Among the top 3% of Google Partners in India with direct access to Google insights, AI Overviews intelligence, and beta features.",
    },
    {
      title: "18+ Years Across Every Algorithm Era",
      description:
        "From Panda and Penguin through Helpful Content and AI Overviews, our methodology has been battle-tested through every major update.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated strategist assigned to your account, reachable on call, WhatsApp, and email with deep knowledge of your site's goals.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Technical Audit",
      description: `<p>Full site crawl, log file analysis (for enterprise), Google Search Console data review, and manual issue verification.</p>`,
    },
    {
      title: "Issue Prioritisation",
      description: `<p>All findings classified by severity and ranked by ranking impact, not just issue count.</p>`,
    },
    {
      title: "Developer Briefing",
      description: `<p>Implementation specifications written for your development team with clear acceptance criteria.</p>`,
    },
    {
      title: "Implementation Review",
      description: `<p>We review all developer implementations before deployment and validate with Screaming Frog, GSC, and Google's Rich Results Test.</p>`,
    },
    {
      title: "Core Web Vitals Testing",
      description: `<p>Before/after PageSpeed Insights testing on all optimised pages.</p>`,
    },
    {
      title: "GSC Monitoring",
      description: `<p>Google Search Console monitoring for coverage errors, new indexation issues, and Core Web Vitals field data.</p>`,
    },
    {
      title: "Monthly Technical Health Reporting",
      description: `<p>Technical SEO health score trending with new issue identification.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "What does a technical SEO audit cover?",
      answer: `<p>A comprehensive technical SEO audit covers Core Web Vitals performance, crawlability and crawl budget efficiency, indexation coverage, JavaScript rendering, canonical tag implementation, schema markup, site architecture, XML sitemaps, robots.txt, duplicate content, HTTPS security, and mobile usability.</p>`,
    },
    {
      id: "faq2",
      question: "How do Core Web Vitals affect rankings?",
      answer: `<p>Core Web Vitals are a confirmed Google ranking factor, applied as a tiebreaker when content quality is comparable. In competitive markets, poor Core Web Vitals can suppress rankings by 1 to 3 positions. Improving CWV also directly reduces bounce rates and increases conversions — the business impact extends beyond rankings.</p>`,
    },
    {
      id: "faq3",
      question: "Do I need technical SEO if my website is on WordPress?",
      answer: `<p>Yes. WordPress sites are susceptible to all common technical SEO issues: plugin-caused speed problems, duplicate content from category/tag pages, crawl waste from infinite scroll or filter URLs, and JavaScript rendering issues. WordPress's flexibility is also its technical SEO challenge.</p>`,
    },
    {
      id: "faq4",
      question: "How long does technical SEO take to show results?",
      answer: `<p>Technical SEO fixes can show results faster than content or link building because Google recrawls and reindexes improved pages relatively quickly. Core Web Vitals improvements can reflect in Google's field data within 28 days. Crawl budget improvements can improve indexation coverage within 4 to 6 weeks. Canonical and duplicate content fixes may take 4 to 8 weeks to fully reflect in rankings.</p>`,
    },
    {
      id: "faq5",
      question: "Can you fix technical SEO without access to our website backend?",
      answer: `<p>We can identify all technical issues through external auditing. Implementing fixes requires backend access or a developer who can implement our specifications. We provide implementation briefs that your development team can execute without us needing direct CMS access.</p>`,
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="mt-3 heading fontWeight700 text-white">
                  Technical SEO Services That Fix the{" "}
                  <span className="text_red fontWeight700">
                    Foundation Your Rankings Are Built On
                  </span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | 850+ Active
                  Clients in 40+ Countries
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  You can create excellent content and earn powerful backlinks —
                  but if Google cannot efficiently crawl, render, and index your
                  website, none of it works. SIB Infotech's technical SEO
                  service fixes the infrastructure that determines whether all
                  your other SEO investment pays off.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Get Your Free Technical SEO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Technical SEO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Technical SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free Technical SEO Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Technical SEO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Technical SEO Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                What Is{" "}
                <span className="text_red">Technical SEO?</span>
              </h2>
              <p className="customText mt-3">
                Technical SEO is the practice of optimising a website's
                technical infrastructure to ensure search engines can
                efficiently crawl, render, index, and rank its pages. Unlike
                on-page SEO (which addresses content and keywords) or off-page
                SEO (which addresses backlinks), technical SEO addresses the
                underlying systems that determine whether search engine bots can
                access and process your content at all.
              </p>
              <p className="customText mt-3">
                In 2026, technical SEO encompasses several distinct disciplines:
                Core Web Vitals, crawlability and crawl budget, indexation,
                JavaScript SEO, structured data, site architecture, and
                international SEO. SIB Infotech's technical SEO service covers
                every one of these layers with a dedicated technical team and a
                proven, results-focused methodology. Every engagement begins
                with a{" "}
                <Link href="/seo-audit-services" className="text_red">
                  comprehensive SEO audit
                </Link>{" "}
                that identifies exactly which technical issues are suppressing
                your rankings.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  The Disciplines of Technical SEO
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Core Web Vitals:</strong> Loading performance (LCP),
                    interactivity (INP), and visual stability (CLS).
                  </li>
                  <li className="mb-3">
                    <strong>Crawlability and Crawl Budget:</strong> How
                    efficiently Googlebot discovers and crawls important pages.
                  </li>
                  <li className="mb-3">
                    <strong>Indexation:</strong> Whether the right pages are
                    included in Google's index.
                  </li>
                  <li className="mb-3">
                    <strong>JavaScript SEO:</strong> How search engines handle
                    client-side rendered content.
                  </li>
                  <li className="mb-3">
                    <strong>Structured Data:</strong> Schema markup that helps
                    search engines understand page content.
                  </li>
                  <li className="mb-3">
                    <strong>Site Architecture:</strong> How pages are organised
                    and how link equity flows through the site.
                  </li>
                  <li className="mb-3">
                    <strong>International SEO:</strong> hreflang implementation
                    for multi-language and multi-country websites.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical SEO Factors We Optimise */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Technical SEO{" "}
                <span className="text_red">Factors We Optimise</span>
              </h2>
              <p className="customText mt-3">
                Every engagement covers the full technical SEO stack that
                determines how Google crawls, renders, and indexes your website:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technical SEO Services */}
      <Solution
        hideImages
        heading={"Our Technical SEO Services"}
        discription={
          "SIB Infotech delivers a complete technical SEO framework covering every layer of the crawl, render, index, and rank pipeline."
        }
        data={technicalServices}
      />

      {/* Common Technical SEO Issues We Fix */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Common Technical SEO{" "}
                <span className="text_red">Issues We Fix</span>
              </h2>
              <p className="customText mt-3">
                These are the issues we find and resolve in almost every
                technical SEO engagement:
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-3">Issue</th>
                      <th className="bgRedMenu text-white p-3">
                        Business Impact
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {issuesTable.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3">
                          <strong>{item.issue}</strong>
                        </td>
                        <td className="p-3">{item.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Choose SIB Infotech for Technical SEO"
        description_right="Choosing a technical SEO partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Technical SEO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to fix the foundation your rankings are built on."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Final CTA */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Get Your Free{" "}
                <span className="text_red">Technical SEO Audit</span>
              </h2>
              <p className="customText mt-3">
                Find out exactly what is holding your website back — slow Core
                Web Vitals, crawl budget waste, JavaScript rendering issues,
                duplicate content, or missing schema markup.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get My Free
                  Technical SEO Audit
                </Link>
                <Link
                  href="tel:+912226057575"
                  className="btnThemewhiteBorder"
                >
                  <i className="fa-solid fa-phone me-2"></i> +91 22 2605 7575
                </Link>
              </div>
              <p className="customText mt-4 mb-0">
                Contact SIB Infotech:{" "}
                <a href="mailto:info@sibinfotech.com" className="text_red">
                  info@sibinfotech.com
                </a>
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard bg-white">
                <h4 className="small_heading fontWeight700 text-center mb-3">
                  Request Your Free Technical SEO Audit
                </h4>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos & Testimonials */}
      <OurClients />
      <Testimonials />

      {/* FAQs */}
      <Faq
        title={"Frequently Asked Questions about Technical SEO"}
        description={
          "Everything you need to know about the technical foundation of search rankings."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO services that build on a healthy technical foundation."
        }
        links={[
          {
            title: "SEO Audit Services",
            href: "/seo-audit-services",
            description:
              "Get a complete SEO health check with a prioritised roadmap of fixes ranked by business impact.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable technical SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Recover rankings from manual actions and algorithm penalties with a proven remediation process.",
          },
          {
            title: "LLM SEO Services",
            href: "/llm-seo-services",
            description:
              "Make your technical foundation AI-ready for ChatGPT, Gemini, Perplexity, and AI Overviews.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "SEO Case Studies",
            href: "/case-studies",
            description:
              "See how SIB Infotech delivered traffic, ranking, and revenue growth for real clients.",
          },
        ]}
      />
    </div>
  );
};

export default TechnicalSeoMgt;
