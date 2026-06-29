import Link from "next/link";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";
import BrandBuild from "../Home/BrandBuild";
import CaseStudy2 from "../Home/CaseStudy2";
import Conversions from "../Home/Conversions";
import Featured from "../Home/Featured";
import Industries from "../Home/Industries2";
import OurClients from "../Home/OurClients";
import PartnerBadges from "../Home/PartnerBadges2";
import Pricing from "../Home/Pricing";
import SIBPower from "../Home/SIBPower";
import Testimonials from "../Home/Testimonials";
import Tools from "../Home/Tools";

import WhySIB from "../Home/WhySIB";
// import Faqs from "../SEO2/Faqs";
// import OutsourcingServices from "../SEO2/OutsourcingServices";
import SeoAudit from "../SEO2/SeoAudit";
import SpecialisedServices from "../SEO2/SpecialisedServices";
import TalkWithExpert from "../SEO2/TalkWithExpert";
import Partnership from "../WhiteLabel/Partnership";
import Solution from "../WhiteLabel/Solution";
import About from "./About";
import Faq from "../Home/Faq";

const Seo = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "What are search engine optimization services in India?",
      answer: `<p>
    Search engine optimization services in India help businesses rank higher on Google and other search engines through on-page optimization, technical SEO, link building, and content strategy. SIB Infotech provides end-to-end SEO services in India for businesses of all sizes across 40+ countries.
    </p>`,
    },
    {
      id: "faq2",
      question: "How much do SEO services cost in India?",
      answer: `<p>
    SEO services in India typically start from $250 per month and can range higher depending on the website size, industry competition, and scope of work. SIB Infotech offers affordable SEO packages in India with no long-term lock-in contracts and transparent monthly pricing.
    </p>`,
    },
    {
      id: "faq3",
      question: "Which is the best SEO company in India?",
      answer: `<p>
    SIB Infotech is one of the top SEO companies in India, recognized as a Google Premier Partner — a distinction held by only the top 3% of agencies in India. With 20+ years of experience and 1000+ brands ranked across 40+ countries, SIB Infotech delivers measurable SEO results.
    </p>`,
    },
    {
      id: "faq4",
      question: "How long does SEO take to show results in India?",
      answer: `<p>
    Most businesses see initial SEO improvements within 60 to 90 days, with significant page 1 rankings appearing between 4 to 6 months depending on competition. Local SEO in Mumbai and other Indian cities typically shows results faster than national or global campaigns.
    </p>`,
    },
    {
      id: "faq5",
      question: "What is the difference between SEO, AEO, and GEO?",
      answer: `<p>
    SEO (Search Engine Optimization) improves your rankings on Google. AEO (Answer Engine Optimization) structures your content to be used as direct answers by AI assistants and voice search. GEO (Generative Engine Optimization) ensures your brand appears inside AI-generated answers from ChatGPT, Gemini, and Google AI Overviews. SIB Infotech offers all three.
    </p>`,
    },
    {
      id: "faq6",
      question: "Does SIB Infotech offer local SEO services in Mumbai?",
      answer: `<p>
    Yes. SIB Infotech provides specialized local SEO services in Mumbai including Google Business Profile optimization, local citation building, review management, and geo-specific keyword targeting. Businesses across Andheri, Bandra, BKC, Malad, and Thane partner with SIB Infotech for local search dominance.
    </p>`,
    },
    {
      id: "faq7",
      question:
        "What SEO packages are available for small businesses in India?",
      answer: `<p>
    SIB Infotech offers affordable SEO packages for small businesses in India starting from $250 per month. Packages include keyword research, on-page SEO, local SEO, link building, and monthly reporting — all without long-term contracts.
    </p>`,
    },
    {
      id: "faq8",
      question:
        "What makes SIB Infotech different from other SEO companies in India?",
      answer: `<p>
    SIB Infotech is a Google Premier Partner with 20+ years of SEO experience, serving 1000+ clients across 40+ countries. Unlike most SEO companies in India, SIB Infotech also provides AEO and GEO optimization for ChatGPT, Gemini, Perplexity, and Google AI Overviews — making brands visible across all modern search surfaces.
    </p>`,
    },
  ];
  const seoServices = [
    {
      title: `On-Page SEO <br class="d-none d-md-lg "/> Optimization`,
      description:
        "Title tags, meta descriptions, header structure, schema markup, keyword placement, and internal linking — all aligned to what Google needs to rank your pages confidently.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
      link: "/on-page-seo-services",
    },
    {
      title: `Off-Page SEO and <br class="d-none d-md-lg "/> Link Building`,
      description:
        "High-authority backlinks, digital PR, guest posting, and brand mentions that build domain trust and push rankings to page 1.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
      link: "/off-page-seo-services",
    },
    {
      title: `Technical SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Core Web Vitals, site speed, mobile responsiveness, crawlability, and indexing fixes that give Google a clean, fast, rankable website.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Local SEO Services <br class="d-none d-md-lg "/> in Mumbai and India`,
      description:
        "Google Business Profile optimization, local citations, review management, and geo-specific keyword targeting for 'near me' dominance across Mumbai and all major Indian cities.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
      link: "/local-seo-services",
    },
    {
      title: `E-Commerce SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Product page optimization, category structure, shopping intent content, and schema markup so your products get discovered and purchased.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
      link: "/e-commerce-website-design-development-services",
    },
    {
      title: `Content SEO <br class="d-none d-md-lg "/> Services`,
      description:
        "Blogs, pillar pages, service pages, and resource hubs that target the right keywords, answer buyer questions, and build organic traffic that compounds over time.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];
  const keyAdvantages = [
    {
      title: "Increased Organic Traffic",
      description:
        "Higher rankings mean more clicks and visitors to your site.",
    },
    {
      title: "Better User Experience",
      description:
        "SEO improves site speed, navigation, and mobile-friendliness.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Optimized content and targeted keywords attract the right audience.",
    },
    {
      title: "Cost-Effective Marketing",
      description:
        "SEO delivers sustainable, long-term results without high ad spend.",
    },
    {
      title: "Brand Credibility & Trust",
      description:
        "Ranking on the first page builds brand authority and credibility.",
    },
    {
      title: "Competitive Advantage",
      description: "Outperform your competitors and dominate search results.",
    },
    {
      title: "Local & Global Reach",
      description:
        "SEO helps you connect with local customers and international markets.",
    },
    {
      title: "Measurable Results",
      description:
        "Track performance with analytics and refine strategies for growth.",
    },
  ];
  const rightBoxContent = {
    heading: "Result-Driven SEO Services by India’s Top SEO Company ",
    description:
      "Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. Investing in SEO can transform your online presence and deliver long-term success. Here’s how:  ",
  };
  const leftBoxContent = {
    headingStart: "Benefits of Hiring an SEO Service Company in Mumbai   ",
    // headingHighlight: "of SEO",
    // subHeading: "for Your Business ",
    cardTitle: "Get More Traffic with Data-Driven SEO Solutions ",
    cardDescription:
      "80% of customers never look past the first page of Google. Outrank competitors, stop losing leads, and unlock your website's full potential with expert SEO services in Mumbai.",
    buttonText: "Book A FREE SEO Discovery Call ",
  };

  const power_data = [
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Not self-claimed. Earned through certified performance, verified ad spend management, and consistent client results — placing SIB Infotech in the top 3% of all Google Partners in India.",
    },
    {
      title: "20+ Years of Search Engine Optimization Expertise",
      description:
        "From keyword-based optimization in 2005 to AI Overviews and GEO in 2026 — SIB Infotech has adapted through every major Google algorithm update. This depth is rare among top SEO companies in India.",
    },
    {
      title: "AI-Powered SEO Strategies",
      description:
        "The best SEO services in India now go beyond Google rankings. SIB Infotech already optimizes brands for ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews using GEO and AEO frameworks.",
    },
    {
      title: "1000+ Brands Ranked Higher",
      description:
        "Real estate, healthcare, manufacturing, e-commerce, education, D2C, B2B SaaS — our search engine optimization services in India cover every vertical with proven results.",
    },
    {
      title: "Dedicated Account Manager — Not a Ticket System",
      description:
        "A real India-based SEO expert assigned to your account. Reachable on call, WhatsApp, and email. Knows your business, your competitors, and your goals.",
    },
  ];

  const testimonial_data = [
    {
      title: `What Our Clients Say About <span class="text_red"> Our SEO Services in Mumbai </span> `,
      description: `We are a five star rated SEO Agency in Mumbai, Delhi & Across India `,
    },
  ];

  const agencyWorkflow = [
    {
      title: " Free SEO Audit",
      description: `
      <p>
        We start by analyzing your website, your competitors, your current rankings, your content quality, your technical health, and your backlink profile. You will know exactly where you stand before we begin.
      </p>
    `,
    },
    {
      title: " Strategy & Planning",
      description: `
      <p>
        Based on the audit, we build a custom 6 to 12 month SEO roadmap. This includes keyword targets, content plans, technical fixes, and link-building goals tied directly to your business KPIs.
      </p>
    `,
    },
    {
      title: " On-Page & Technical Fixes",
      description: `
      <p>
        We clean up your site. Fix broken pages. Speed it up. Optimize titles, meta tags, schemas, and internal linking. This is the foundation everything else rests on.
      </p>
    `,
    },
    {
      title: " Content & Off-Page Execution",
      description: `
      <p>
        We publish high-value content that targets your buyer's search intent. We build authority through digital PR, guest posts, and high-DA backlinks. Slow, steady, sustainable.
      </p>
    `,
    },
    {
      title: " AI Search Optimization",
      description: `
      <p>
        We make your brand visible across Google AI Overviews, ChatGPT, Gemini, Perplexity, and other AI-powered search engines using GEO and AEO frameworks.
      </p>
    `,
    },
    {
      title: " Reporting & Continuous Optimization",
      description: `
      <p>
        Every month, you get a clear report showing rankings, traffic, leads, and conversions. We refine the strategy based on real performance data, not assumptions.
      </p>
      <p>
        The result is compounding growth that does not stop when we do.
      </p>
    `,
    },
  ];
  return (
    <div>
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                {/* <span className="fw-bold title text-white ">Your Trusted</span> */}

                <h1 className="mt-3 heading fontWeight700 text-white ">
                  Search Engine Optimization{" "}
                  <span className="text_red fontWeight700">
                    {" "}
                    Services in India
                  </span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2  mt-lg-2 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Google Premier Partner | Trusted by 1000+ Brands in 40+
                  Countries | 20+ Years of SEO Expertise
                </p>
                <p
                  className="mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  SIB Infotech provides result-driven search engine optimization
                  services in India, helping businesses improve Google rankings,
                  increase organic traffic, and generate quality leads. Since
                  2005, we have helped 1000+ brands across 40+ countries achieve
                  sustainable online growth through proven SEO strategies and
                  AI-powered search optimization
                </p>
                <div className="mt-4">
                  <Link href="#contact" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Free SEO
                    Audit
                  </Link>
                  <Link href="#contact" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Hire an SEO
                    Expert in Mumbai
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">SEO </span> Company in
                    India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Top SEO Company"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">SEO</span> Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Top SEO Company"} />
      </div>
      <About />
      <Solution
        heading={" Complete Search Engine Optimization Services in India"}
        discription={
          "Every business needs a different SEO strategy. SIB Infotech offers a full suite of search engine optimization services in India — from on-page and technical fixes to content, link building, and AI search optimization. Here is everything included under one roof."
        }
        data={seoServices}
      />
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />
      <section className="bgGrey2 ">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                AI SEO, AEO, and GEO: How SIB Infotech Optimizes for{" "}
                <span className="text_red">the Future of Search</span>
              </h2>

              <p className="mt-4">
                Modern search has changed. In 2026, buyers do not just type into
                Google — they ask ChatGPT, query Gemini, use Perplexity for
                research, and read Google AI Overviews before clicking any link.
                Brands not visible on these surfaces miss real buyers every day.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="customCard h-100">
                <h3 className="small_heading fontWeight600 mb-3">
                  What is AEO (Answer Engine Optimization)?
                </h3>

                <p>
                  AEO is the practice of structuring website content so AI
                  assistants, voice search, and featured snippets can extract
                  and use it as a direct answer. SIB Infotech implements AEO
                  through clear question-answer formatting, FAQPage schema,
                  HowTo schema, and concise factual sections that AI systems can
                  cite confidently.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="customCard h-100">
                <h3 className="small_heading fontWeight600 mb-3">
                  What is GEO (Generative Engine Optimization)?
                </h3>

                <p>
                  GEO ensures your brand name appears inside AI-generated
                  answers from ChatGPT, Gemini, Perplexity, Claude, and Google
                  AI Overviews. When someone asks 'What is the best SEO company
                  in India?' — GEO is what determines whether SIB Infotech gets
                  cited or ignored.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-4">
                  How SIB Infotech Implements AEO + GEO:
                </h3>

                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        Entity-rich writing that names SIB Infotech as a
                        subject, not just a website
                      </li>

                      <li className="mb-3">
                        Citation-friendly content structured for AI models to
                        extract and reference
                      </li>

                      <li className="mb-3">
                        FAQPage, HowTo, and Speakable schema markup on all key
                        pages
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6">
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        Consistent NAP (Name, Address, Phone) signals across all
                        directories
                      </li>

                      <li className="mb-3">
                        Brand mentions in authoritative publications that AI
                        models trust
                      </li>

                      <li className="mb-3">
                        Structured data (JSON-LD) to communicate facts clearly
                        to AI crawlers
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="mb-0">
                    <strong>
                      SIB Infotech is one of the few SEO companies in India
                      offering dedicated AEO and GEO optimization as part of
                      every SEO engagement.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6 ">
              <h3 className="heading fontWeight600">
                Why Mumbai Businesses Cannot{" "}
                <span className="text_red">Ignore This Shift</span>
              </h3>

              <p className="customText mt-3">
                Mumbai is one of the most competitive search markets in India.
                Every industry has dozens of established players already running
                aggressive SEO. To stand out today, you need more than keywords
                and backlinks. You need a brand that is visible everywhere your
                customers are looking. From Google search to AI Overviews. From
                voice assistants to chatbots. From AI search engines to
                traditional listings.
              </p>

              {/* <p className="customText">
                At SIB Infotech, we have built a custom AI SEO framework that
                blends traditional SEO with AEO and GEO strategies. We help
                Mumbai businesses get found across every modern search surface,
                today and tomorrow.
              </p> */}

              <p className="customText">
                The cost of SEO services in Mumbai varies based on factors such
                as your website size, industry competition, current search
                visibility, and business objectives. At SIB Infotech, we create
                customized SEO strategies tailored to your specific needs and
                growth goals. Our services include on-page SEO, off-page SEO,
                technical optimization, content enhancement, and detailed
                monthly reporting. With transparent communication, measurable
                results, and no long-term lock-in contracts, we focus on
                delivering sustainable organic growth. Request a free SEO audit
                and consultation to discover the best SEO approach for your
                business.
              </p>
            </div>

            <div className="col-lg-6 mt-2 mt-lg-0 ps-lg-5 ">
              <img
                className="image-full rounded"
                src="assets/images/google-ads/why-mumbai-shift-strategy.jpg"
                alt="AI SEO services in Mumbai – SIB Infotech GEO and AEO framework"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600  text-center mb-2">
                SEO Plans for Every{" "}
                <span className="text_red">Business Size and Budget</span> in
                Mumbai
              </h2>
              <p className="customText text-center">
                Not every business needs the same SEO. A local Mumbai bakery
                does not have the same needs as a global SaaS brand. That is why
                we offer tailored SEO solutions based on your size, your goals,
                and your budget.
              </p>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/on-page-seo-content123.svg"
                    alt="Small Business SEO Services"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Small Business SEO Services
                </h4>

                <p className="customText">
                  If you run a startup, local shop, or solo business, you don't
                  need enterprise-level SEO. You need quick wins, smart
                  strategy, and a plan that drives real customers without
                  breaking your budget. Our small business seo services are
                  built exactly for this. We focus on local visibility, Google
                  Business Profile optimization, low-competition keywords, and
                  conversion-focused content so you start seeing leads within
                  months, not years.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/on-page-seo-title.png"
                    alt="Enterprise & Corporate SEO"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Enterprise & Corporate SEO
                </h4>

                <p className="customText">
                  For multi-location brands, large e-commerce stores, and
                  corporate websites with thousands of pages, we offer
                  enterprise SEO that handles scale. This includes deep site
                  architecture audits, advanced schema, multi-region targeting,
                  content cluster strategies, and dedicated account management.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/off-page-seo-link-building.svg"
                    alt="White Label SEO Services"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  White Label SEO Services
                </h4>

                <p className="customText">
                  If you run a marketing agency or web design firm and want to
                  offer SEO to your clients without building an in-house team,
                  our white label seo services are designed for you. We handle
                  the strategy, execution, and reporting. You deliver it under
                  your brand. NDA backed, fully managed, and scalable.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="off-page-seo-box2">
                <div className="img-circle">
                  <img
                    src="assets/images/icons/off-page-seo-brand-mention.svg"
                    alt="Affordable SEO Packages for Indian SMEs"
                  />
                </div>

                <h4 className="small_heading  fontWeight600 mb-2">
                  Affordable SEO Packages for Indian SMEs
                </h4>

                <p className="customText">
                  We believe great SEO should not break your budget. As an
                  affordable seo company india businesses trust, we offer
                  transparent pricing, monthly flexibility, and zero hidden
                  fees. Our packages start small and scale with your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SIBPower
        title="Why SIB Infotech Is India's Most Trusted SEO Company"
        // subtitle=" SEO Service Company in Mumbai "
        description_right="Hundreds of agencies offer SEO services in India. Very few deliver what they promise. Here is what makes SIB Infotech genuinely different — and why brands across 40+ countries keep coming back."
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />

      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Proven 6-Step SEO Process"}
        rightDiscription={`The cost of SEO services in Mumbai depends on website size, competition, current visibility, and business goals. At SIB Infotech, we provide customized SEO strategies, including on-page SEO, off-page SEO, technical SEO, content optimization, and monthly reporting, with transparent communication and no long-term lock-in contracts`}
        // tagline={'Seamless, Scalable, and Results-Driven'}
      />
      <PartnerBadges />
      <section className=" bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="heading fontWeight600 ">
                How We Compare with Other{" "}
                <span className="text_red"> SEO Companies In Mumbai?</span>
              </h2>

              <p className="customText mt-3">
                Most SEO agencies in Mumbai follow the same playbook. We do not.
                Here is a clear, side-by-side breakdown of what makes SIB
                Infotech genuinely different.
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <div className="table-responsive  rounded">
                <table className="table table-bordered table-striped align-middle mb-0 bg-white seoComparisonTable">
                  <colgroup>
                    <col className="seoComparisonColPoint" />
                    <col className="seoComparisonColAgency" />
                    <col className="seoComparisonColSib" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-4">
                        Comparison Point
                      </th>
                      <th className="bgRedMenu text-white p-4">
                        Most Mumbai SEO Agencies
                      </th>
                      <th className="bgRedMenu text-white p-4">SIB Infotech</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="p-4">Search Coverage</td>
                      <td className="p-4">
                        Focus only on Google rankings. Ignore AI search engines
                        completely. Miss the new wave of buyer queries happening
                        on ChatGPT, Gemini, and Perplexity.
                      </td>
                      <td className="p-4">
                        We optimize your brand across Google, ChatGPT, Gemini,
                        Perplexity, Claude, and AI Overviews. Get found wherever
                        your customers are actually searching. Future-proof your
                        visibility today.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">AI Usage</td>
                      <td className="p-4">
                        Mass-produce thin, low-quality AI content. Repetitive
                        blogs that all sound the same. Google spots and
                        penalizes this fast.
                      </td>
                      <td className="p-4">
                        AI helps us research and plan smarter. Real humans
                        write, review, and refine every piece of content. The
                        result reads like a person and ranks like a pro.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Reporting Style</td>
                      <td className="p-4">
                        Reports filled with jargon and confusing metrics. Hard
                        to figure out what is actually happening. Most clients
                        nod along without truly understanding.
                      </td>
                      <td className="p-4">
                        Plain English reports with clear progress markers. Every
                        metric explained in business terms. You know exactly
                        what your money is doing every single month.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Success Focus</td>
                      <td className="p-4">
                        Celebrate vanity rankings and impressions. Show keyword
                        graphs that don't tie to revenue. No real link between
                        rankings and business outcomes.
                      </td>
                      <td className="p-4">
                        We track leads, conversions, and revenue alongside
                        rankings. Every SEO effort is connected to your bottom
                        line. Rankings only matter when they bring real
                        customers.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Account Support</td>
                      <td className="p-4">
                        Route you through ticket systems or overseas teams. Long
                        response times and slow communication. No real
                        understanding of your business.
                      </td>
                      <td className="p-4">
                        Dedicated India-based account manager assigned only to
                        you. Available on call, WhatsApp, and email. Knows your
                        industry, goals, and brand inside out.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Certifications</td>
                      <td className="p-4">
                        Few or no official certifications. Limited access to
                        platform tools and beta features. Strategies often run
                        on outdated information.
                      </td>
                      <td className="p-4">
                        Google Premier Partner &#40;Top 3% in India&#41;, Meta
                        Business Partner, Shopify Partner, and Microsoft
                        Advertising Partner. Direct access to betas, tools, and
                        consumer insights.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Industry Experience</td>
                      <td className="p-4">
                        Around 5 to 10 years in the market. Limited exposure to
                        major algorithm shifts. Less depth in handling complex
                        SEO challenges.
                      </td>
                      <td className="p-4">
                        20+ years of real-world SEO experience. Adapted through
                        every major Google update since 2005. Battle-tested
                        strategies that consistently deliver.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Strategy Approach</td>
                      <td className="p-4">
                        One-size-fits-all SEO templates. The same plan applied
                        across industries. Results vary because the strategy
                        doesn't fit your business.
                      </td>
                      <td className="p-4">
                        Custom SEO strategy built around your industry,
                        audience, and business goals. Research-led keyword and
                        content planning. Designed to compound month over month.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Tools & Tech</td>
                      <td className="p-4">
                        Free or basic SEO tools with limited data. Incomplete
                        view of competitors and rankings. Decisions made with
                        half the picture.
                      </td>
                      <td className="p-4">
                        Premium platforms like Ahrefs, SEMrush, Screaming Frog,
                        Surfer SEO, and a custom AI SEO framework. Complete view
                        of your performance. Smarter decisions, faster wins.
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4">Global Reach</td>
                      <td className="p-4">
                        Serve only Indian clients. Limited understanding of
                        international search behavior. Hard to scale strategies
                        for export-led or global brands.
                      </td>
                      <td className="p-4">
                        1000+ brands ranked across 40+ countries. Deep
                        experience in India, USA, UK, UAE, Canada, Australia,
                        and beyond. Built for businesses ready to go global.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with an SEO Expert in Mumbai – Free Audit, No Obligation"
        linkDestination="/contact-us"
      />

      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center">
            <div className="col-lg-9  text-center">
              <h2 className="heading fontWeight600 mt-4">
                Industries We Serve with{" "}
                <span className="text_red">
                  SEO Services <br className="d-lg-block d-none " /> in
                  Mumbai{" "}
                </span>
              </h2>

              <p className="customText mt-3">
                Search behavior changes from one industry to another. A real
                estate buyer searches differently from a SaaS founder. A patient
                looking for a clinic searches differently from a shopper
                browsing skincare. That is why our SEO strategies are never
                copy-paste. Over the past 20 years, we have helped brands rank
                higher across nearly every industry. Here are the sectors we
                serve.
              </p>
            </div>
          </div>

          <div className="row mt-4 mt-lg-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/ecommerce-seo.png"
                  alt="On-page SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  E-commerce and D2C Brands
                </h3>
                <p>
                  We optimize product pages, category structures, schema markup,
                  and conversion-focused funnels so your products get
                  discovered, ranked, and purchased.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/healthcare-seo.png"
                  alt="Off-page SEO and link building Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Healthcare and Pharma
                </h3>
                <p>
                  From local SEO for clinics to authority-led content for
                  hospitals, we help medical brands build trust, attract
                  patients, and stay compliant with healthcare advertising
                  guidelines.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/real-estate-seo.png"
                  alt="Technical SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Real Estate and Construction
                </h3>
                <p>
                  High-intent buyer leads, project page optimization,
                  location-based ranking, and local search dominance for
                  builders, brokers, and developers.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/education-seo.png"
                  alt="Local SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Education and EdTech
                </h3>
                <p>
                  Student enrollment campaigns, course page rankings, and a
                  smart blend of paid and organic strategies that help
                  institutions and edtech platforms grow.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/finance-seo.png"
                  alt="E-commerce SEO services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Finance and Banking
                </h3>
                <p>
                  Trust-led content for NBFCs, fintech firms, and advisory
                  platforms, paired with compliance-friendly SEO that builds
                  credibility and conversions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/travel-seo.png"
                  alt="SEO content writing services Mumbai"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Travel and Hospitality
                </h3>
                <p>
                  Booking-intent SEO for hotels, resorts, travel agencies, and
                  tour operators. We help your business show up the moment a
                  traveler is ready to book.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/it-saas-seo.png"
                  alt="IT and SaaS"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  IT and SaaS
                </h3>
                <p>
                  Lead-generating content, thought leadership, and SEO that
                  drives qualified leads for software companies, SaaS platforms,
                  and IT consultants.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/manufacturing-seo.png"
                  alt="Manufacturing and B2B"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Manufacturing and B2B
                </h3>
                <p>
                  Niche keyword targeting, lead-driven content, technical
                  product page optimization, and global market expansion
                  strategies for export-oriented businesses.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/legal-seo.png"
                  alt="Legal and Consultancy"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Legal and Consultancy
                </h3>
                <p>
                  Local visibility for law firms, expertise-led content for
                  consultants, and ranking strategies for branded and
                  high-intent service queries.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/beauty-fashion-seo.png"
                  alt="Beauty, Fashion and Lifestyle"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Beauty, Fashion and Lifestyle
                </h3>
                <p>
                  Influencer-led SEO, visual content optimization, and
                  trend-driven keyword targeting to grow brand awareness,
                  audience, and sales.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/ngo-seo.png"
                  alt="NGOs and Non-Profits"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  NGOs and Non-Profits
                </h3>
                <p>
                  Awareness-led SEO, donor-focused content, and outreach
                  campaigns that help non-profits get discovered and supported.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="industrySeoCard h-100">
                <img
                  src="/assets/images/seo/real-estate-seo.png"
                  alt="Home Services"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Home Services
                </h3>
                <p>
                  Plumbers, electricians, cleaning services, interior designers,
                  and more. We help service-based businesses rank locally and
                  bring in steady inquiries.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="industrySeoCard industrySeoWideCard">
                <img
                  src="/assets/images/seo/niche-sector-seo.png"
                  alt="Telecom, Matrimony, and Niche Sectors"
                />
                <h3 className="small_heading fontWeight600 mb-3">
                  Telecom, Matrimony, and Niche Sectors
                </h3>
                <p>
                  We have built SEO strategies for telecom companies,
                  matrimonial platforms, and other unique business models that
                  need specialized search visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <OurAproach /> */}
      {/* <SeoProcess /> */}
      <SpecialisedServices />

      <CaseStudy2
        description={`Client Success Stories That Prove
           We’re a Top SEO Company in India,our SEO results speak for themselves`}
      />
      <OurClients
        title={`India’s Trusted
          <span class="fontWeight600">SEO Experts</span>
          Behind <span class="fontWeight600 text_red">Fast-Growing Brands</span>`}
      />
      <Testimonials
        title={testimonial_data[0].title}
        description={testimonial_data[0].description}
      />
      <Conversions />
      <Featured />
      <div className="toolsHome">
        {/* Some of the Top SEO Tools for Auditing & Monitoring Effective SEO are used by us */}
        <Tools
          title={`Some of the 
            <span class="fontWeight600">
              Top SEO Tools
              </span>
              for
              <span class="fontWeight600">
              Auditing & Monitoring Effective SEO
              </span>
              are used by us
            
            `}
        />
      </div>
      {/* <Industries /> */}
      <Industries
        heading="Industries We Serve"
        subHeading={
          <>
            End-to End <span className="fontWeight600">SEO Services</span>
            <span className="fontWeight600"> for Every Industry</span>
          </>
        }
        description1="At SIB Infotech, we deliver custom SEO Services as per the needs of various industries. Whether you are in eCommerce, healthcare, finance, real estate, education, or any other domain, our expert team combines AI-driven strategies with proven SEO techniques to help you reach the right audience and drive real business results."
        description2="Whether you are a startup or an enterprise, we offer industry-focused SEO services that help you increase visibility, improve ROI, and scale your business efficiently."
      />

      <Pricing
        batchtitle={`SEO Pricing Plans`}
        heading={`360° <span class="fontWeight600">SEO</span>
          Solutions`}
        description={`  Our SEO Packages starts from $250 only. / Starts from: $250/Month  USD only – weak signal for Mumbai keyword.`}
      />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="/contact-us"
      />
      <SeoAudit />
      <Faq
        title={`<span class="text-black">Frequently Asked</span> Search Engine Optimization <span class="text-black">Question?</span>`}
        // description={faqDiscription}
        faqsData={faqsData}
      />
    </div>
  );
};

export default Seo;
