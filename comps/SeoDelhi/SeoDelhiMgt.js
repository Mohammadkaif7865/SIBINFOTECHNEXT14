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

const SeoDelhiMgt = () => {
  const seoServices = [
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Core Web Vitals, site speed, mobile responsiveness, crawlability, and indexing fixes that give Google a clean, fast, rankable website. Specialized local schema alignment for Delhi NCR businesses.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `On-Page SEO <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Title tags, meta descriptions, header hierarchy, schema markup, keyword placement, and internal linking — aligned to Google intent to rank your pages confidently.",
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
        "Google Business Profile optimization, local citations, review management, and LocalBusiness schema implementation to capture Map Pack rankings across Delhi NCR.",
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
      title: "Local Delhi Office & Support",
      description: "Delhi NCR clients can meet our local team in person for dedicated account management.",
    },
    {
      title: "Full-Service Capability",
      description: "SEO, PPC, content marketing, social media, and web development under one roof.",
    },
    {
      title: "Transparent Performance Reporting",
      description: "Monthly performance reports, keyword dashboards, and direct access to your account manager.",
    },
    {
      title: "Enterprise Client Proven",
      description: "Trusted by enterprise brands including Airtel, Finolex, Jindal Steel, and BPCL.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Delhi NCR Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "For Page-1 Google Rankings & Revenue Growth",
    cardTitle: "Get More Organic Leads with Data-Driven SEO",
    cardDescription:
      "Over 78% of consumers research online before making a purchase. Capture top Google positions in Delhi, Gurgaon, and Noida with expert SEO.",
    buttonText: "Book A FREE SEO Audit",
  };

  const rightBoxContent = {
    heading: "SEO Company in Delhi NCR with a Local Office and Proven Results",
    description:
      "Delhi NCR is one of India's most competitive commercial markets, spanning Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. SIB Infotech combines local Delhi office presence with 18+ years of enterprise SEO expertise.",
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
      title: "Local Delhi Office + National Capability",
      description:
        "Our Tagore Garden, New Delhi office gives Delhi NCR businesses in-person consultation backed by our full national SEO execution team.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "Real estate, IT, manufacturing, healthcare, ecommerce, education — our SEO services cover every vertical with proven results.",
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
      description: `<p>We conduct a comprehensive technical SEO audit, competitor analysis, and keyword opportunity mapping specific to the Delhi NCR market.</p>`,
    },
    {
      title: "Custom 90-Day SEO Strategy",
      description: `<p>We build a custom 90-day SEO roadmap targeting your highest-opportunity keywords and content gaps across Delhi, Gurgaon, and Noida.</p>`,
    },
    {
      title: "Technical Fixes & Core Web Vitals",
      description: `<p>We resolve all crawl errors, indexation issues, and Core Web Vitals problems that may be suppressing your rankings.</p>`,
    },
    {
      title: "On-Page & Geo-Targeted Optimisation",
      description: `<p>We update existing pages and create new landing pages, blog posts, and resource content aligned with your keyword strategy.</p>`,
    },
    {
      title: "Link Building & Digital PR",
      description: `<p>We execute a monthly link acquisition campaign to build domain authority and topical relevance across Indian domains.</p>`,
    },
    {
      title: "Performance Monitoring & Optimization",
      description: `<p>We track rankings, organic traffic, leads, and conversions weekly, reporting results monthly with clear commentary.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq-delhi-1",
      question: "Does SIB Infotech have an office in Delhi?",
      answer: `<p>Yes. SIB Infotech has a Delhi office in Tagore Garden Extension, New Delhi, in addition to our Mumbai headquarters. Delhi NCR clients can meet our team in person, and we provide dedicated local account management for all Delhi-based engagements.</p>`,
    },
    {
      id: "faq-delhi-2",
      question: "How much does SEO cost in Delhi?",
      answer: `<p>SEO pricing in Delhi depends on competition level, website size, and business goals. Our monthly packages start from Rs. 25,000 per month for local businesses. We also offer enterprise-level SEO for large Delhi businesses. Every engagement begins with a free SEO audit.</p>`,
    },
    {
      id: "faq-delhi-3",
      question: "Can you help with SEO for both Delhi and Gurgaon?",
      answer: `<p>Yes. We provide SEO services across the entire Delhi NCR region, including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. We can create geo-targeted landing pages for each location and optimise your Google Business Profile for the areas most relevant to your customers.</p>`,
    },
    {
      id: "faq-delhi-4",
      question: "How long does SEO take to work in a competitive market like Delhi?",
      answer: `<p>Delhi is a competitive market, so realistic timelines are 4 to 6 months for initial ranking improvements and 6 to 12 months for substantial organic traffic growth. Quick wins through technical SEO fixes and long-tail keyword targeting can show results within 60 to 90 days.</p>`,
    },
    {
      id: "faq-delhi-5",
      question: "Do you offer Google Ads alongside SEO in Delhi?",
      answer: `<p>Yes. SIB Infotech is a Google Premier Partner and manages Google Ads campaigns for Delhi businesses in addition to SEO. Combining SEO and Google Ads creates a full-funnel search strategy that maximises visibility across both paid and organic channels.</p>`,
    },
    {
      id: "faq-delhi-6",
      question: "Which industries do you serve in Delhi NCR?",
      answer: `<p>We serve businesses across all major Delhi NCR industries including real estate, retail, healthcare, education, manufacturing, FMCG, B2B services, legal, and e-commerce. Our team has specific experience with Delhi's industrial and manufacturing sector as well as the Gurgaon and Noida technology corridor.</p>`,
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
                  <span className="text_red fontWeight700">Delhi NCR</span> with a Local Office and Proven Results
                </h1>
                <p className="small_heading fontWeight500 mt-2 text-white" style={{ maxWidth: "85%" }}>
                  Google Premier Partner | Delhi Office in Tagore Garden | 18+ Years Experience
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  SIB Infotech is a Google Premier Partner digital marketing agency with 18+ years of experience. We help Delhi businesses achieve page-1 Google rankings, generate qualified leads, and grow revenue through data-driven SEO strategies tailored to the Delhi market.
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
                    Best SEO Company in Delhi NCR
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"SEO Company in Delhi NCR"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best SEO Company in Delhi NCR
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"SEO Company in Delhi NCR"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Enterprise-Grade SEO for Delhi NCR's{" "}
                <span className="text_red">Competitive Market</span>
              </h2>
              <p className="customText mt-3">
                Delhi NCR is one of India's most competitive commercial markets, spanning Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Businesses across industries face fierce online competition for Google's first page. SIB Infotech is a Google Premier Partner digital marketing agency with an office in Delhi and 18+ years of experience helping Delhi NCR businesses build lasting organic visibility.
              </p>
              <p className="customText mt-3">
                With offices in Mumbai and Delhi and a client base spanning 40+ countries, SIB Infotech brings enterprise-grade SEO expertise to businesses of every size in Delhi. Whether you are a startup in Delhi's thriving manufacturing, retail, and services ecosystem or an established brand looking to dominate local search, our team delivers measurable, durable rankings.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech in Delhi NCR?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Local Delhi Office:</strong> First Floor, Tagore Garden Extension, New Delhi.
                  </li>
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Top 3% agency tier in India.
                  </li>
                  <li className="mb-3">
                    <strong>18+ Years Experience:</strong> Battle-tested strategies.
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

      {/* Why Delhi Businesses Need SEO */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why Delhi Businesses Need <span className="text_red">SEO in 2026</span>
              </h2>
              <p className="customText mt-3">
                Delhi NCR is home to a vast concentration of enterprises, SMEs, e-commerce businesses, government contractors, real estate developers, and professional services firms. The region's internet-savvy population makes organic search one of the highest-ROI marketing channels available. With SIB Infotech's Delhi office, clients receive local account management combined with the full capabilities of an 18-year-old national agency.
              </p>
              <p className="customText mt-2">
                Search behaviour in Delhi has shifted dramatically. Over 78% of consumers research a business online before making a purchase decision. Businesses that rank on page 1 of Google capture more than 90% of clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Solution
        hideImages
        heading={"Our SEO Services for Delhi Businesses"}
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
        title="Why Delhi NCR Businesses Choose SIB Infotech for SEO"
        description_right="Choosing an SEO partner in Delhi is a significant investment. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Process Section */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our SEO Process for Delhi Clients"}
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
                Industries We Serve in <span className="text_red">Delhi NCR</span>
              </h2>
              <p className="customText mt-3">
                Our Delhi SEO team has delivered measurable organic growth across key commercial verticals:
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
                Case Study: Delhi Real Estate Developer Grows Organic Leads by{" "}
                <span className="text_red">210%</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A Delhi-based business in a competitive niche was receiving minimal organic traffic despite having a professionally designed website. Key commercial keywords were ranking beyond page 3, and the Google Business Profile was incomplete.
                </p>
              </div>
              <div>
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full technical SEO audit, rebuilt the on-page content structure around high-intent keywords, implemented LocalBusiness schema, optimised the Google Business Profile with keyword-rich descriptions, and executed a three-month link acquisition campaign targeting Delhi-relevant domains.
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
                      <div className="heading fontWeight700 text-success">+210%</div>
                      <div className="small fw-bold">Organic Leads</div>
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
        title={"Frequently Asked Questions about SEO in Delhi"}
        description={"Everything you need to know about partnering with SIB Infotech for your Delhi NCR business."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO services and city pages from SIB Infotech."
        }
        links={[
          {
            title: "SEO Company in Mumbai",
            description:
              "Our flagship SEO service. Google Premier Partner, 20+ years, ranking Mumbai businesses since 2005.",
            href: "/search-engine-optimization-seo-services",
          },
          {
            title: "SEO Company in Bangalore",
            href: "/seo-company-bangalore",
            description:
              "Get page-1 Google rankings in India's Silicon Valley with expert SEO for Bangalore businesses.",
          },
          {
            title: "SEO Company in Pune",
            href: "/seo-company-pune",
            description:
              "Outrank local competitors with a dedicated SEO company serving Pune businesses.",
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

export default SeoDelhiMgt;
