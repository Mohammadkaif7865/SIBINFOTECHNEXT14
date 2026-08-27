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
import RelatedServices from "@/comps/RelatedServices";
import Faq from "@/comps/Home/Faq";

const SeoAuditServicesMgt = () => {
  const auditTypes = [
    {
      title: `Technical <br class="d-none d-md-lg "/> SEO Audit`,
      description:
        "Core Web Vitals, crawlability and crawl budget, indexation coverage, JavaScript rendering, canonical tags, XML sitemaps, robots.txt, schema markup, site architecture, and duplicate content.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `On-Page <br class="d-none d-md-lg "/> SEO Audit`,
      description:
        "Title tags, meta descriptions, header hierarchy, keyword targeting and cannibalisation, internal linking, image optimisation, content quality, and topical relevance for every priority page.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
    },
    {
      title: `Off-Page & <br class="d-none d-md-lg "/> Link Profile Audit`,
      description:
        "Backlink portfolio analysis, toxic link identification, anchor text distribution, competitor link gaps, and digital PR opportunities that can outrank your closest rivals.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `Competitor <br class="d-none d-md-lg "/> Audit`,
      description:
        "Head-to-head comparison against 3 to 5 direct competitors: keywords they rank for, content they publish, links they earn, and the exact gaps holding your site back.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
    {
      title: `Keyword & <br class="d-none d-md-lg "/> SERP Audit`,
      description:
        "Keyword opportunity mapping, search intent classification, SERP feature analysis (AI Overviews, people also ask, featured snippets), and content gap discovery.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
    },
    {
      title: `Local SEO <br class="d-none d-md-lg "/> Audit`,
      description:
        "Google Business Profile optimisation, NAP consistency, citation quality, review strategy, LocalBusiness schema, and Map Pack visibility for local businesses.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
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
        "Our audit methodology is stress-tested across industries and markets worldwide.",
    },
    {
      title: "Named Enterprise Clients",
      description:
        "Trusted by Airtel, Finolex, Jindal Steel, and BPCL for their digital growth.",
    },
    {
      title: "Actionable, Prioritised Findings",
      description:
        "Every issue ranked by impact on rankings and traffic — not just a raw list of problems.",
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
    subHeading: "An SEO Audit That Becomes Your Growth Roadmap",
    cardTitle: "Know Exactly What to Fix First",
    cardDescription:
      "SIB Infotech combines 18+ years of organic growth strategy with a full technical, on-page, and off-page audit toolkit to show you precisely what is holding your rankings back — and what to fix first.",
    buttonText: "Get Your Free SEO Audit",
  };

  const rightBoxContent = {
    heading: "The SEO Audit Agency That Finds What Others Miss",
    description:
      "Most SEO audits list problems. Ours prioritise them by business impact, benchmark you against competitors, and hand your team a step-by-step roadmap. Our auditors combine crawler-based analysis, Google Search Console data, and 18+ years of Google algorithm experience.",
  };

  const power_data = [
    {
      title: "Deep Technical Tool Stack",
      description:
        "Screaming Frog, Google Search Console, PageSpeed Insights, Rich Results Test, Ahrefs, Semrush, and log file analysis tools deployed across every audit.",
    },
    {
      title: "Prioritised by Business Impact",
      description:
        "Every finding classified by severity and ranked by ranking impact, so your team fixes what matters first.",
    },
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Among the top 3% of Google Partners in India with direct access to Google insights, AI Overviews intelligence, and beta features.",
    },
    {
      title: "18+ Years Across Every Algorithm Era",
      description:
        "From Panda and Penguin through Helpful Content and AI Overviews, our audit methodology has been battle-tested through every major update.",
    },
    {
      title: "Competitor Benchmarking Included",
      description:
        "Your site is scored head-to-head against 3 to 5 direct competitors so you can see exactly where you win and where you lose.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Discovery & Data Collection",
      description: `<p>We gather Google Search Console and Analytics data, crawl your website, and identify your competitor set.</p>`,
    },
    {
      title: "Full Site Crawl & Technical Review",
      description: `<p>Crawlability, indexation, Core Web Vitals, JavaScript rendering, schema, site architecture, and duplicate content analysis.</p>`,
    },
    {
      title: "On-Page & Content Assessment",
      description: `<p>Title tags, meta descriptions, keyword mapping, search intent alignment, and content quality evaluation for priority pages.</p>`,
    },
    {
      title: "Off-Page & Link Profile Analysis",
      description: `<p>Backlink portfolio review, toxic link identification, anchor text distribution, and competitor link gap analysis.</p>`,
    },
    {
      title: "Issue Prioritisation & Roadmap",
      description: `<p>All findings ranked by business impact with clear, developer-ready implementation guidance and realistic effort estimates.</p>`,
    },
    {
      title: "Strategy Presentation",
      description: `<p>We walk you through the findings, the roadmap, and a 90-day SEO action plan tailored to your goals and budget.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "What does an SEO audit include?",
      answer: `<p>A comprehensive SEO audit covers technical health (crawlability, indexation, Core Web Vitals, schema, site architecture), on-page optimisation (titles, meta descriptions, keyword mapping, content quality), off-page signals (backlink profile and anchor text), and competitor benchmarking.</p>`,
    },
    {
      id: "faq2",
      question: "How long does an SEO audit take?",
      answer: `<p>Most SEO audits are completed within 7 to 14 days depending on website size. Large enterprise websites with thousands of URLs may take 2 to 3 weeks for a complete technical crawl and prioritised roadmap.</p>`,
    },
    {
      id: "faq3",
      question: "Is your SEO audit free?",
      answer: `<p>Yes. SIB Infotech offers a free initial SEO audit and discovery session that includes a complete SEO analysis, competitor analysis, performance and gap analysis, and channel-specific SEO needs. There are no lock-in contracts.</p>`,
    },
    {
      id: "faq4",
      question: "Do I need an SEO audit before starting an SEO campaign?",
      answer: `<p>Yes. An SEO audit is the essential first step of any campaign. It reveals technical issues blocking indexation, keyword opportunities, competitor gaps, and content weaknesses — so your budget is spent on fixes that actually move rankings.</p>`,
    },
    {
      id: "faq5",
      question: "Can you fix the issues found in the audit?",
      answer: `<p>Yes. SIB Infotech provides complete technical, on-page, and off-page SEO services. If you choose to engage us after the audit, our team implements the roadmap directly — or your in-house team can use our developer-ready implementation briefs.</p>`,
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
                  SEO Audit Services That Reveal{" "}
                  <span className="text_red fontWeight700">
                    Exactly What Is Costing You Rankings
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
                  An SEO audit is the first step of every successful campaign.
                  SIB Infotech's professional SEO audit service crawls your
                  entire website, benchmarks it against competitors, and
                  delivers a prioritised roadmap of fixes ranked by business
                  impact — so you know exactly what to fix first.
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
                  Get Your Free SEO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    SEO Audit Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"SEO Audit Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">Get Your Free SEO Audit</h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              SEO Audit Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"SEO Audit Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                What Is an{" "}
                <span className="text_red">SEO Audit?</span>
              </h2>
              <p className="customText mt-3">
                An SEO audit is a comprehensive health check of your website's
                search engine performance. It analyses the technical
                infrastructure, on-page optimisation, content quality, and
                backlink profile of your site, then benchmarks it against
                competitors to identify exactly why your pages are not ranking
                at their full potential.
              </p>
              <p className="customText mt-3">
                Our SEO audit services in India go beyond a simple checklist.
                Every finding is ranked by business impact and paired with an
                implementation roadmap, so your development and marketing teams
                know precisely what to fix first to move rankings and organic
                revenue.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  What You Get in Every Audit
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Complete SEO Analysis:</strong> Technical, on-page,
                    and off-page health scores.
                  </li>
                  <li className="mb-3">
                    <strong>Competitor Analysis:</strong> Head-to-head scoring
                    against 3 to 5 direct rivals.
                  </li>
                  <li className="mb-3">
                    <strong>Keyword Gap Analysis:</strong> Opportunities your
                    competitors are capturing.
                  </li>
                  <li className="mb-3">
                    <strong>Prioritised Roadmap:</strong> Every fix ranked by
                    ranking and traffic impact.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of SEO Audits */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Types of{" "}
                <span className="text_red">SEO Audits We Deliver</span>
              </h2>
              <p className="customText mt-3">
                Every engagement is tailored to your website, industry, and
                goals — from single-page technical checks to enterprise
                multi-site crawls:
              </p>
            </div>
          </div>

          <Solution
            hideImages
            heading={"Our SEO Audit Service"}
            discription={
              "SIB Infotech delivers a complete audit framework covering every layer of the crawl, render, index, and rank pipeline."
            }
            data={auditTypes}
          />
        </div>
      </section>

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Choose SIB Infotech for SEO Audits"
        description_right="Choosing an SEO audit partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our SEO Audit Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to turn audit findings into a ranking growth roadmap."
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
                <span className="text_red">SEO Audit</span>
              </h2>
              <p className="customText mt-3">
                Find out exactly what is holding your website back — technical
                errors, on-page gaps, weak content, or toxic backlinks — with a
                complete SEO analysis and strategy session. No lock-in
                contracts.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get My Free
                  SEO Audit
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
                  Request Your Free SEO Audit
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
        title={"Frequently Asked Questions about SEO Audits"}
        description={
          "Everything you need to know about professional SEO audit services."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore our full range of SEO services designed to turn audit findings into rankings, traffic, and revenue."
        }
        links={[
          {
            title: "Best SEO Agency in Mumbai",
            description:
              "See why Mumbai businesses pick SIB Infotech: transparent pricing, a named strategist, no lock-in.",
            href: "/search-engine-optimization-seo-services",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix crawlability, indexation, Core Web Vitals, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Remove manual actions and algorithm penalties that are suppressing your rankings.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "LLM SEO Services",
            href: "/llm-seo-services",
            description:
              "Optimise your brand for AI Overviews, ChatGPT, Perplexity, and Gemini.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 for Indian businesses.",
          },
          {
            title: "SEO Case Studies",
            href: "/case-studies",
            description:
              "See how we delivered traffic, ranking, and revenue growth for our clients.",
          },
        ]}
      />
    </div>
  );
};

export default SeoAuditServicesMgt;
