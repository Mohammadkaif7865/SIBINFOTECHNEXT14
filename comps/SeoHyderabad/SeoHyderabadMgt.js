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

const SeoHyderabadMgt = () => {
  const seoServices = [
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Core Web Vitals, site speed, mobile responsiveness, crawlability, and indexing fixes that give Google a clean, fast, rankable website. Specialized local schema alignment for Hyderabad businesses.",
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
        "Google Business Profile optimization, local citations, review management, and LocalBusiness schema implementation to capture Map Pack rankings across Hyderabad.",
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
      title: "Specialized Pharma & IT SEO",
      description: "Proven strategies for Hyderabad's pharmaceutical, life sciences, and HITEC City IT ecosystem.",
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
    headingStart: "Why Hyderabad Businesses Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "For Page-1 Google Rankings & Revenue Growth",
    cardTitle: "Get More Organic Leads with Data-Driven SEO",
    cardDescription:
      "Over 78% of consumers research online before making a purchase. Capture top Google positions in Hyderabad with expert SEO tailored for pharma, IT, and high-growth businesses.",
    buttonText: "Book A FREE SEO Audit",
  };

  const rightBoxContent = {
    heading: "SEO Company in Hyderabad for Pharma, IT, and High-Growth Businesses",
    description:
      "Hyderabad is one of India's most dynamic commercial centres, home to a thriving pharmaceutical industry and a world-class IT corridor. SIB Infotech delivers data-driven SEO strategies tailored to the Hyderabad market that generate qualified leads and grow revenue.",
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
      title: "Pharma-Compliant SEO & Life Sciences Expertise",
      description:
        "Deep experience navigating the unique compliance considerations of the pharmaceutical sector while building strong organic visibility for high-intent research and procurement searches.",
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
      description: `<p>We conduct a comprehensive technical SEO audit, competitor analysis, and keyword opportunity mapping specific to the Hyderabad market.</p>`,
    },
    {
      title: "Custom 90-Day SEO Strategy",
      description: `<p>We build a custom 90-day SEO roadmap targeting your highest-opportunity keywords and content gaps across Hyderabad's pharma, IT, and consumer sectors.</p>`,
    },
    {
      title: "Technical Fixes & Core Web Vitals",
      description: `<p>We resolve all crawl errors, indexation issues, and Core Web Vitals problems that may be suppressing your rankings.</p>`,
    },
    {
      title: "On-Page & Keyword Optimisation",
      description: `<p>We update existing pages and create new landing pages, blog posts, and resource content aligned with your keyword strategy.</p>`,
    },
    {
      title: "Link Building & Digital PR",
      description: `<p>We execute a monthly link acquisition campaign to build domain authority and topical relevance across authoritative Indian domains.</p>`,
    },
    {
      title: "Performance Monitoring & Reporting",
      description: `<p>We track rankings, organic traffic, leads, and conversions weekly, reporting results monthly with clear commentary.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq-hyderabad-1",
      question: "Does SIB Infotech offer SEO specifically for pharma companies in Hyderabad?",
      answer: `<p>Yes. We have experience working with pharmaceutical companies, healthcare brands, and life sciences businesses. Our pharma SEO strategy is designed to navigate the unique compliance considerations of the sector while building strong organic visibility for high-intent research and procurement searches.</p>`,
    },
    {
      id: "faq-hyderabad-2",
      question: "How much does SEO cost in Hyderabad?",
      answer: `<p>SEO packages for Hyderabad businesses start from Rs. 20,000 per month for local businesses and scale to Rs. 1,00,000+ per month for enterprise pharmaceutical and IT companies with competitive national keyword targets. We provide a free audit to recommend the right investment level for your goals.</p>`,
    },
    {
      id: "faq-hyderabad-3",
      question: "How long does SEO take to deliver results for a Hyderabad IT company?",
      answer: `<p>For Hyderabad IT companies targeting B2B decision-maker keywords, early ranking improvements are typically visible within 3 to 4 months. Full organic traffic and lead generation impact develops between months 6 and 9, depending on keyword competition and starting domain authority.</p>`,
    },
    {
      id: "faq-hyderabad-4",
      question: "Can SIB Infotech improve our Google Business Profile ranking in Hyderabad?",
      answer: `<p>Yes. Our local SEO team specialises in Google Business Profile optimisation for Hyderabad businesses. We have helped businesses achieve Map Pack rankings for highly competitive local search terms within 60 to 90 days through a combination of profile optimisation, local citations, and review management.</p>`,
    },
    {
      id: "faq-hyderabad-5",
      question: "Do you offer SEO for e-commerce businesses in Hyderabad?",
      answer: `<p>Yes. We offer specialised ecommerce SEO services for Hyderabad-based online stores on Shopify, WooCommerce, and Magento. Our ecommerce SEO covers product page optimisation, category page strategy, schema markup, and conversion-focused content.</p>`,
    },
    {
      id: "faq-hyderabad-6",
      question: "What makes a good SEO agency in Hyderabad?",
      answer: `<p>A strong SEO agency should demonstrate a proven track record with verifiable client results, transparent reporting practices, a comprehensive methodology covering technical, on-page, and off-page SEO, and the ability to adapt to Google's evolving algorithm. SIB Infotech checks all of these: 18+ years of experience, Google Premier Partner status, and measurable client outcomes.</p>`,
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
                  <span className="text_red fontWeight700">Hyderabad</span> for Pharma, IT, and High-Growth Businesses
                </h1>
                <p className="small_heading fontWeight500 mt-2 text-white" style={{ maxWidth: "85%" }}>
                  Google Premier Partner | 18+ Years Experience | Packages from Rs. 20,000/month
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  SIB Infotech is a Google Premier Partner digital marketing agency with 18+ years of experience. We help Hyderabad businesses achieve page-1 Google rankings, generate qualified leads, and grow revenue through data-driven SEO strategies tailored to the Hyderabad market.
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
                    Best SEO Company in Hyderabad
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"SEO Company in Hyderabad"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best SEO Company in Hyderabad
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"SEO Company in Hyderabad"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Enterprise-Grade SEO for Hyderabad's{" "}
                <span className="text_red">Pharma & IT Ecosystem</span>
              </h2>
              <p className="customText mt-3">
                Hyderabad is one of India's most dynamic commercial centres, home to a thriving pharmaceutical industry, a world-class IT corridor, and a rapidly expanding consumer market. For businesses in Hyderabad competing online, the difference between page 1 and page 2 of Google is the difference between steady lead flow and digital invisibility. SIB Infotech is a Google Premier Partner SEO company with 18+ years of experience delivering measurable organic growth for businesses across industries.
              </p>
              <p className="customText mt-3">
                With offices in Mumbai and Delhi and a client base spanning 40+ countries, SIB Infotech brings enterprise-grade SEO expertise to businesses of every size in Hyderabad. Whether you are a startup in Hyderabad's thriving pharmaceutical and IT ecosystem or an established brand looking to dominate local search, our team delivers measurable, durable rankings.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech in Hyderabad?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Top 3% agency tier in India.
                  </li>
                  <li className="mb-3">
                    <strong>18+ Years Experience:</strong> Battle-tested strategies.
                  </li>
                  <li className="mb-3">
                    <strong>Pharma & IT Specialization:</strong> Compliance-aware SEO strategies.
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

      {/* Why Hyderabad Businesses Need SEO */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why Hyderabad Businesses Need <span className="text_red">SEO in 2026</span>
              </h2>
              <p className="customText mt-3">
                Hyderabad's economy is anchored by its pharmaceutical and life sciences sector, its HITEC City technology corridor, manufacturing, real estate, and education. The city's growing middle-class population drives strong consumer search volumes across categories from healthcare to real estate to e-commerce. Businesses in Hyderabad that invest in SEO today are building a compounding digital asset that delivers returns for years.
              </p>
              <p className="customText mt-2">
                Search behaviour in Hyderabad has shifted dramatically. Over 78% of consumers research a business online before making a purchase decision. Businesses that rank on page 1 of Google capture more than 90% of clicks. Without a strong SEO presence, your competitors are capturing the customers you should be winning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Solution
        hideImages
        heading={"Our SEO Services for Hyderabad Businesses"}
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
        title="Why Hyderabad Businesses Trust SIB Infotech for SEO"
        description_right="Choosing an SEO partner in Hyderabad is a significant investment. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Process Section */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our SEO Process for Hyderabad Clients"}
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
                Industries We Serve in <span className="text_red">Hyderabad</span>
              </h2>
              <p className="customText mt-3">
                Our Hyderabad SEO team has delivered measurable organic growth across diverse B2B and B2C verticals:
              </p>
            </div>
          </div>

          <div className="row g-3">
            {[
              "IT and Software Companies",
              "E-commerce and Retail",
              "Real Estate and Property",
              "Healthcare and Pharmaceuticals",
              "Education and EdTech",
              "Manufacturing and Industrial",
              "Financial Services and FinTech",
              "Hospitality and Travel",
              "Legal and Professional Services",
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
                Case Study: Hyderabad Pharma Brand Increases{" "}
                <span className="text_red">Organic Leads by 245%</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A Hyderabad-based business in a competitive niche was receiving minimal organic traffic despite having a professionally designed website. Key commercial keywords were ranking beyond page 3, and the Google Business Profile was incomplete.
                </p>
              </div>
              <div>
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full technical SEO audit, rebuilt the on-page content structure around high-intent keywords, implemented LocalBusiness schema, optimised the Google Business Profile with keyword-rich descriptions and regular posts, and executed a three-month link acquisition campaign targeting Hyderabad-relevant domains.
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
        title={"Frequently Asked Questions about SEO in Hyderabad"}
        description={"Everything you need to know about partnering with SIB Infotech for your Hyderabad business."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO services and city pages from SIB Infotech."
        }
        links={[
          {
            title: "SEO Services in Mumbai",
            description:
              "Full-service search engine optimization for Mumbai brands, from technical fixes to content and links.",
            href: "/seo-company-mumbai",
          },
          {
            title: "SEO Company in Bangalore",
            href: "/seo-company-bangalore",
            description:
              "Get page-1 Google rankings in India's Silicon Valley with expert SEO for Bangalore businesses.",
          },
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
              "Outrank local competitors with a dedicated SEO company serving Pune businesses.",
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

export default SeoHyderabadMgt;
