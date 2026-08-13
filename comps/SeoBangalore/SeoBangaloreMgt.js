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
import SeoAudit from "@/comps/SEO2/SeoAudit";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const SeoBangaloreMgt = () => {
  const seoServices = [
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Core Web Vitals, site speed, mobile responsiveness, crawlability, and indexing fixes that give Google a clean, fast, rankable website. Specialized local schema alignment for Bangalore businesses.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `On-Page SEO <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Title tags, meta descriptions, header structure, schema markup, keyword placement, and internal linking — aligned to Google intent to rank your pages confidently.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
      link: "/on-page-seo-services",
    },
    {
      title: `Off-Page SEO & <br class="d-none d-md-lg "/> Link Building`,
      description:
        "High-authority backlinks, digital PR, guest posting, and brand mentions targeting authoritative Indian and international domains to build domain trust.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
      link: "/off-page-seo-services",
    },
    {
      title: `Local SEO & <br class="d-none d-md-lg "/> GBP Optimisation`,
      description:
        "Google Business Profile optimization, local citations, review management, and LocalBusiness schema implementation to capture Map Pack rankings across Bangalore.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
      link: "/local-seo-services",
    },
    {
      title: `Content Marketing & <br class="d-none d-md-lg "/> Topical Authority`,
      description:
        "Building content clusters around core services with pillar pages and supporting blogs that establish SIB Infotech as the trusted authority in your niche.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
      link: "/seo-content-writing-services",
    },
    {
      title: `AI SEO, AEO & <br class="d-none d-md-lg "/> Generative Engine Optimisation`,
      description:
        "Optimising content for Google AI Overviews, ChatGPT, Perplexity, and Gemini so your brand is cited in AI-generated answers capturing user attention in 2026.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Agency",
      description: "Ranked among the top 3% of Google Partners in India with direct access to beta features.",
    },
    {
      title: "18+ Years of SEO Expertise",
      description: "Battle-tested through Panda, Penguin, Helpful Content, and AI Overview updates.",
    },
    {
      title: "850+ Active Global Clients",
      description: "Proven track record across tech, SaaS, real estate, healthcare, and ecommerce.",
    },
    {
      title: "Full-Service Capability",
      description: "SEO, PPC, content marketing, social media, and web development under one roof.",
    },
    {
      title: "Transparent Performance Reporting",
      description: "Monthly performance reports, keyword dashboards, and dedicated account manager.",
    },
    {
      title: "Enterprise Client Proven",
      description: "Trusted by enterprise brands including Airtel, Finolex, Jindal Steel, and BPCL.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Bangalore Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "For Page-1 Google Rankings & Revenue Growth",
    cardTitle: "Get More Organic Leads with Data-Driven SEO",
    cardDescription:
      "Over 78% of consumers research online before making a purchase. Capture top Google positions and outrank competitors with expert SEO in Bangalore.",
    buttonText: "Book A FREE SEO Audit",
  };

  const rightBoxContent = {
    heading: "Top-Rated SEO Company Serving Bangalore Businesses",
    description:
      "Bangalore is India's Silicon Valley and one of the most competitive search markets. Ranking on page 1 of Google is essential to capture high-intent buyers. SIB Infotech delivers tailored SEO strategies that drive measurable traffic and qualified lead volume.",
  };

  const power_data = [
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Earned through certified performance, verified ad spend management, and consistent client results — placing SIB Infotech in the top 3% of all Google Partners in India.",
    },
    {
      title: "18+ Years of Search Engine Optimization Expertise",
      description:
        "From keyword-based optimization to AI Overviews and GEO in 2026 — SIB Infotech has adapted through every major Google algorithm update.",
    },
    {
      title: "AI-Powered SEO & GEO Frameworks",
      description:
        "Our search engine optimization services go beyond standard search, optimizing brands for ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "IT, SaaS, real estate, healthcare, manufacturing, e-commerce, education — our SEO services cover every vertical with proven results.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated SEO expert assigned to your account. Reachable on call, WhatsApp, and email with deep knowledge of your business goals.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Discovery & Technical SEO Audit",
      description: `<p>We start by analyzing your website, crawlability, indexation, Core Web Vitals, competitor rankings, and keyword opportunity gaps in Bangalore.</p>`,
    },
    {
      title: "Custom 90-Day SEO Strategy",
      description: `<p>Based on audit findings, we build a custom roadmap targeting your highest-opportunity keywords and content gaps to maximize quick wins.</p>`,
    },
    {
      title: "Technical & On-Page Optimisation",
      description: `<p>We clean up site speed errors, fix broken pages, optimize title tags, meta descriptions, header hierarchy, and JSON-LD schema markup.</p>`,
    },
    {
      title: "Content Marketing & Link Acquisition",
      description: `<p>We publish high-intent content clusters and acquire high-DA backlinks through digital PR, guest posting, and outreach campaigns.</p>`,
    },
    {
      title: "AI & Generative Engine Optimisation",
      description: `<p>We optimize your brand for visibility in Google AI Overviews, ChatGPT, Gemini, and Perplexity using GEO and AEO techniques.</p>`,
    },
    {
      title: "Performance Monitoring & Reporting",
      description: `<p>Weekly keyword tracking and transparent monthly reports showing organic traffic growth, rankings, and lead conversions.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "How much does SEO cost for a Bangalore business?",
      answer: `<p>SIB Infotech offers monthly SEO packages starting from Rs. 25,000 per month for local businesses, with enterprise-level campaigns ranging higher. Every engagement begins with a free audit.</p>`,
    },
    {
      id: "faq2",
      question: "How long does SEO take to show results in Bangalore?",
      answer: `<p>Most Bangalore clients see measurable ranking improvements within 3 to 4 months. Significant organic traffic growth typically becomes visible by month 6.</p>`,
    },
    {
      id: "faq3",
      question: "Do you offer local SEO for Bangalore businesses?",
      answer: `<p>Yes. Our local SEO service for Bangalore includes Google Business Profile optimisation, local citation building, review management, and LocalBusiness schema implementation.</p>`,
    },
    {
      id: "faq4",
      question: "Can SIB Infotech help a Bangalore startup with SEO?",
      answer: `<p>Absolutely. We work with businesses at every stage. For startups, we prioritise high-ROI quick wins such as technical fixes, GBP optimisation, and long-tail content.</p>`,
    },
    {
      id: "faq5",
      question: "Does SIB Infotech handle SEO for IT companies in Bangalore?",
      answer: `<p>Yes. We have extensive experience delivering SEO for IT companies, SaaS businesses, and technology service providers in Bangalore.</p>`,
    },
    {
      id: "faq6",
      question: "What makes SIB Infotech different from other SEO agencies in Bangalore?",
      answer: `<p>SIB Infotech is a Google Premier Partner with 18+ years of experience and a track record with enterprise clients including Airtel, Finolex, and Jindal Steel. We provide dedicated account management and report on actual business outcomes.</p>`,
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
                  SEO Company in{" "}
                  <span className="text_red fontWeight700">Bangalore</span> That Delivers Page-1 Rankings
                </h1>
                <p className="small_heading fontWeight500 mt-2 text-white" style={{ maxWidth: "85%" }}>
                  Google Premier Partner | 18+ Years Experience | 850+ Active Clients in 40+ Countries
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  SIB Infotech is a Google Premier Partner digital marketing agency with 18+ years of experience. We help Bangalore businesses achieve page-1 Google rankings, generate qualified leads, and grow revenue through data-driven SEO strategies tailored to the Bangalore market.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best SEO Company in Bangalore
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"SEO Company in Bangalore"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best SEO Company in Bangalore
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"SEO Company in Bangalore"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Enterprise-Grade SEO for Bangalore's{" "}
                <span className="text_red">Thriving Business Ecosystem</span>
              </h2>
              <p className="customText mt-3">
                Bangalore is India's Silicon Valley and one of the most competitive digital markets in the country. For businesses here, ranking on Google's first page is not just an advantage: it is a necessity. SIB Infotech is a Google Premier Partner SEO company with 18+ years of experience helping businesses across industries grow their organic visibility, generate qualified leads, and build long-term digital authority.
              </p>
              <p className="customText mt-3">
                With offices in Mumbai and Delhi and a client base spanning 40+ countries, SIB Infotech brings enterprise-grade SEO expertise to businesses of every size in Bangalore. Whether you are a startup in Bangalore's thriving IT and startup ecosystem or an established brand looking to dominate local search, our team delivers measurable, durable rankings.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech in Bangalore?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Top 3% agency tier in India.
                  </li>
                  <li className="mb-3">
                    <strong>18+ Years Experience:</strong> Battle-tested strategies.
                  </li>
                  <li className="mb-3">
                    <strong>Zero Lock-in Contracts:</strong> Flexible performance model.
                  </li>
                  <li className="mb-3">
                    <strong>Full-Funnel SEO & GEO:</strong> Standard search & AI Overviews.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bangalore Businesses Need SEO */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why Bangalore Businesses Need <span className="text_red">SEO in 2026</span>
              </h2>
              <p className="customText mt-3">
                Bangalore's business ecosystem is dominated by IT companies, startups, SaaS businesses, healthcare providers, real estate developers, and educational institutions. Every sector is fiercely competitive for online visibility. With over 12 million internet users in the Bangalore metropolitan area, the city represents one of the most high-value SEO markets in India.
              </p>
              <p className="customText mt-2">
                Search behaviour in Bangalore has shifted dramatically. Over 78% of consumers research a business online before making a purchase decision. Businesses that rank on page 1 of Google capture more than 90% of clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Solution
        hideImages
        heading={"Our SEO Services for Bangalore Businesses"}
        discription={
          "SIB Infotech offers a comprehensive suite of SEO services designed to deliver growth across every stage of the search funnel."
        }
        data={seoServices}
      />

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Choose SIB Infotech as Your Bangalore SEO Company"
        description_right="Choosing an SEO partner in Bangalore is a significant investment. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Process Section */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our SEO Process for Bangalore Clients"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to generate sustainable, long-term ranking growth."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Industries We Serve */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Industries We Serve in <span className="text_red">Bangalore</span>
              </h2>
              <p className="customText mt-3">
                Our Bangalore SEO team has delivered measurable organic growth across diverse B2B and B2C verticals:
              </p>
            </div>
          </div>

          <div className="row g-3">
            {[
              "IT & Software Companies",
              "E-commerce & Retail",
              "Real Estate & Property",
              "Healthcare & Pharmaceuticals",
              "Education & EdTech",
              "Manufacturing & Industrial",
              "Financial Services & FinTech",
              "Hospitality & Travel",
              "Legal & Professional Services",
            ].map((ind, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="customCard bg-white text-center h-100 p-3">
                  <h4 className="small_heading fontWeight600 text-dark mb-0">{ind}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: Bangalore SaaS Company Achieves{" "}
                <span className="text_red">285% Traffic Growth</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A Bangalore-based business in a competitive niche was receiving minimal organic traffic despite having a professionally designed website. Key commercial keywords were ranking beyond page 3, and the Google Business Profile was incomplete.
                </p>
              </div>
              <div>
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full technical SEO audit, rebuilt the on-page content structure around high-intent keywords, implemented LocalBusiness schema, optimised the Google Business Profile, and executed a three-month link acquisition campaign targeting Bangalore-relevant domains.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h4 className="small_heading fontWeight700 text-center mb-4">
                  Results After 6 Months
                </h4>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text_red">+285%</div>
                      <div className="small fw-bold">Organic Traffic</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">18</div>
                      <div className="small fw-bold">Keywords on Page 1</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">+340%</div>
                      <div className="small fw-bold">GBP Impressions</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">+190%</div>
                      <div className="small fw-bold">Qualified Leads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Component */}
      <SeoAudit />

      {/* Client Logos & Testimonials */}
      <OurClients />
      <Testimonials />

      {/* FAQs */}
      <Faq
        title={"Frequently Asked Questions about SEO in Bangalore"}
        description={"Everything you need to know about partnering with SIB Infotech for your Bangalore business."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO services and city pages from SIB Infotech."
        }
        links={[
          {
            title: "SEO Company in Delhi",
            href: "/seo-company-delhi",
            description:
              "Rank on page 1 in the Delhi NCR market with dedicated SEO services for Delhi businesses.",
          },
          {
            title: "SEO Company in Pune",
            href: "/seo-company-pune",
            description:
              "Get expert search engine optimisation for your Pune business and outrank local competitors.",
          },
          {
            title: "SEO Company in Hyderabad",
            href: "/seo-company-hyderabad",
            description:
              "Dominate Hyderabad search results with a Google Premier Partner SEO team.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
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

export default SeoBangaloreMgt;
