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

const EnterpriseSeoMgt = () => {
  const enterpriseServices = [
    {
      title: `Crawl Budget <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Enterprise sites with tens or hundreds of thousands of pages routinely waste Google's crawl budget on low-value URLs. We conduct log file analysis to identify which pages are being crawled and which are being ignored, implement noindex strategies for low-value content, and restructure internal linking to concentrate crawl equity on the pages that drive revenue.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `JavaScript <br class="d-none d-md-lg "/> SEO`,
      description:
        "Modern enterprise websites built on React, Angular, or Vue face specific JavaScript rendering challenges. We audit JavaScript SEO performance, identify content not being indexed by Googlebot, implement server-side rendering (SSR) recommendations, and validate rendering output through Google's URL Inspection tool.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
    },
    {
      title: `Scalable On-Page <br class="d-none d-md-lg "/> Architecture`,
      description:
        "Manually optimising thousands of product, category, and location pages is not viable. We build scalable on-page templates and content frameworks that apply SEO best practices systematically across large page groups, with spot-check auditing to maintain quality.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `Multi-Location and <br class="d-none d-md-lg "/> International SEO`,
      description:
        "Enterprise brands with multiple physical locations or international markets require LocalBusiness schema for each location, hreflang implementation for international variants, geo-targeted content strategies, and Google Business Profile management at scale.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
    },
    {
      title: `Enterprise Reporting and <br class="d-none d-md-lg "/> Business Intelligence`,
      description:
        "We provide advanced reporting that goes beyond keyword rankings to connect SEO performance to business outcomes. Our enterprise reporting covers organic revenue attribution, share of voice analysis, content performance by category, and technical health trending over time.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
    {
      title: `Cross-Team SEO <br class="d-none d-md-lg "/> Governance`,
      description:
        "We work within enterprise structures, providing SEO guidelines for development teams, editorial frameworks for content teams, and executive-level reporting for marketing leadership. Our team serves as the centralising SEO intelligence function within your organisation.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
    },
  ];

  const industriesData = [
    {
      title: "FMCG and Consumer Products",
      description: "National brand campaigns across the full product portfolio.",
      img: "/assets/images/seo/beauty-fashion-seo.webp",
      alt: "FMCG and consumer products enterprise SEO",
    },
    {
      title: "Manufacturing and Industrial B2B",
      description: "Large product catalogue SEO for complex B2B buyers.",
      img: "/assets/images/seo/manufacturing-seo.webp",
      alt: "Manufacturing and industrial B2B enterprise SEO",
    },
    {
      title: "Financial Services and Banking",
      description: "High-competition regulatory environment with strict compliance.",
      img: "/assets/images/seo/finance-seo.webp",
      alt: "Financial services and banking enterprise SEO",
    },
    {
      title: "Telecommunications",
      description: "Multi-product, multi-location search visibility at scale.",
      img: "/assets/images/seo/it-saas-seo.webp",
      alt: "Telecommunications enterprise SEO",
    },
    {
      title: "Real Estate Developers",
      description: "Large project portfolio visibility across major metros.",
      img: "/assets/images/seo/real-estate-seo.webp",
      alt: "Real estate developers enterprise SEO",
    },
    {
      title: "Pharmaceutical and Healthcare",
      description: "Compliance-sensitive, technical content for regulated markets.",
      img: "/assets/images/seo/healthcare-seo.webp",
      alt: "Pharmaceutical and healthcare enterprise SEO",
    },
    {
      title: "Education and Universities",
      description: "Multi-department content governance and authority building.",
      img: "/assets/images/seo/education-seo.webp",
      alt: "Education and universities enterprise SEO",
    },
    {
      title: "Retail and Ecommerce",
      description: "Large SKU catalogue with category-level keyword coverage.",
      img: "/assets/images/seo/ecommerce-seo.webp",
      alt: "Retail and ecommerce enterprise SEO",
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
        "Trusted by Airtel, Finolex, Jindal Steel, and BPCL — organisations that operate at national scale with complex digital ecosystems.",
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
    headingStart: "Why Enterprise Brands Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "Scalable SEO Methodology Built for National-Scale Operations",
    cardTitle: "Enterprise SEO, Delivered at Scale",
    cardDescription:
      "Enterprise websites need more than an SEO campaign — they need a methodology. SIB Infotech combines 18+ years of organic growth strategy with a dedicated team model built for 10,000+ page websites, multi-location complexity, and cross-team implementation.",
    buttonText: "Schedule an Enterprise SEO Consultation",
  };

  const rightBoxContent = {
    heading: "The Enterprise SEO Agency That Operates at Your Scale",
    description:
      "Large websites have large SEO problems. Crawl budget waste across 100,000+ pages, JavaScript rendering issues, multi-location complexity, and cross-team implementation challenges require an enterprise SEO partner with the methodology and team to execute at scale. SIB Infotech delivers enterprise SEO with a dedicated team, advanced reporting, and a track record that includes Airtel, Finolex, and Jindal Steel.",
  };

  const power_data = [
    {
      title: "Dedicated Team Model",
      description:
        "Enterprise clients receive a dedicated account team — technical SEOs, content specialists, link builders, and a strategist — not a shared resource pool.",
    },
    {
      title: "Scalable SEO Methodology",
      description:
        "A repeatable framework for crawl budget, on-page architecture, content, and authority that applies across 10,000+ page websites, not page-by-page work.",
    },
    {
      title: "Enterprise Reporting Dashboards",
      description:
        "Custom dashboards with organic revenue attribution, share of voice, content performance by category, and executive-level reporting.",
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
      title: "Consultative Enterprise Engagement",
      description:
        "Enterprise clients convert better through conversation than forms. We use a consultative selling approach for enterprise clients, not a standard form submission workflow.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Discovery and Stakeholder Alignment",
      description: `<p>Understanding your business objectives, technical architecture, and internal stakeholder landscape.</p>`,
    },
    {
      title: "Comprehensive Technical Audit",
      description: `<p>Log file analysis, JavaScript rendering assessment, crawl coverage analysis, and Core Web Vitals across device types.</p>`,
    },
    {
      title: "Keyword Architecture",
      description: `<p>Enterprise keyword strategy mapped to your full product and service taxonomy.</p>`,
    },
    {
      title: "Scalable On-Page Framework",
      description: `<p>Content templates, title and meta frameworks, and internal linking models applicable across large page groups.</p>`,
    },
    {
      title: "Technical Implementation Roadmap",
      description: `<p>Developer-ready specifications for all technical SEO improvements, prioritised by ranking impact.</p>`,
    },
    {
      title: "Content and Authority Strategy",
      description: `<p>Editorial framework, content cluster plan, and link acquisition strategy.</p>`,
    },
    {
      title: "Reporting Infrastructure",
      description: `<p>Custom dashboard setup with organic revenue attribution, share of voice, and monthly executive reporting.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "What makes enterprise SEO different from standard SEO?",
      answer: `<p>Enterprise SEO operates at a fundamentally different scale and complexity level. It requires log file analysis for crawl budget management, JavaScript SEO expertise, scalable content frameworks rather than page-by-page work, multi-location and hreflang management, and advanced business-outcome reporting. The stakeholder environment is also more complex, requiring cross-team coordination.</p>`,
    },
    {
      id: "faq2",
      question: "How long does enterprise SEO take to show results?",
      answer: `<p>Enterprise SEO typically shows initial technical improvements within 60 to 90 days of implementation. Meaningful organic traffic growth develops between months 4 and 6. Full competitive authority in primary commercial keywords takes 12 to 18 months of consistent investment.</p>`,
    },
    {
      id: "faq3",
      question: "How do you handle multi-location SEO for enterprise brands?",
      answer: `<p>We implement LocalBusiness schema for each location, create location-specific landing pages with unique content for each market, manage Google Business Profile at scale, and build a geo-targeted internal linking structure that concentrates local authority on the most competitive markets.</p>`,
    },
    {
      id: "faq4",
      question: "What does enterprise SEO cost?",
      answer: `<p>Enterprise SEO is priced on a custom basis depending on website scale, competitive environment, internal team resources, and scope of work. Serious enterprise SEO investments typically start from Rs. 1,50,000 to Rs. 3,00,000 per month. We recommend a discovery consultation before any pricing discussion to understand your specific requirements.</p>`,
    },
    {
      id: "faq5",
      question: "How do you measure ROI for enterprise SEO?",
      answer: `<p>We build custom attribution models that connect organic traffic to actual business outcomes: tracked leads, e-commerce revenue, or assisted conversion value. Our enterprise reporting covers organic revenue contribution, cost per organic acquisition, share of voice versus competitors, and content performance by topic cluster.</p>`,
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
                  Enterprise SEO Services for{" "}
                  <span className="text_red fontWeight700">
                    Large-Scale Organic Growth
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
                  Large websites have large SEO problems. Crawl budget waste
                  across 100,000+ pages, JavaScript rendering issues,
                  multi-location complexity, and cross-team implementation
                  challenges require an enterprise SEO partner with the
                  methodology and team to execute at scale.
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
                  Schedule an Enterprise SEO Consultation
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Enterprise SEO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Enterprise SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Schedule an Enterprise SEO Consultation
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Enterprise SEO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Enterprise SEO Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                What Is{" "}
                <span className="text_red">Enterprise SEO?</span>
              </h2>
              <p className="customText mt-3">
                Enterprise SEO is the practice of delivering search engine
                optimisation for large, complex websites — typically
                organisations with 10,000+ URLs, multiple product lines,
                multi-location presence, and cross-functional teams involved in
                web content decisions.
              </p>
              <p className="customText mt-3">
                Enterprise SEO differs from standard SEO in several critical
                dimensions.{" "}
                <Link href="/technical-seo-services" className="text_red">
                  Technical issues
                </Link>{" "}
                that are minor on a 50-page website can suppress thousands of
                pages on a 100,000-page enterprise site. Enterprise SEO requires
                alignment between SEO, marketing, development, legal, and product
                teams — each with competing priorities — and demands
                JavaScript-ready technical expertise, scalable content
                frameworks, and attribution models that connect organic traffic
                to actual business outcomes.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  What Makes Enterprise SEO Different?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Scale:</strong> Minor issues on a 50-page website
                    can suppress thousands of pages on an enterprise site.
                  </li>
                  <li className="mb-3">
                    <strong>Stakeholder Complexity:</strong> SEO, marketing,
                    development, legal, and product teams with competing
                    priorities.
                  </li>
                  <li className="mb-3">
                    <strong>Technical Sophistication:</strong> JavaScript-heavy
                    architectures, complex CMS systems, multi-CDN, and
                    international hreflang structures.
                  </li>
                  <li className="mb-3">
                    <strong>Content Governance:</strong> Scalable content
                    frameworks, not page-by-page SEO work.
                  </li>
                  <li className="mb-3">
                    <strong>ROI Measurement:</strong> Attribution models that
                    connect organic traffic to revenue, leads, and brand
                    metrics.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise SEO Challenges We Solve */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Enterprise SEO{" "}
                <span className="text_red">Challenges We Solve</span>
              </h2>
              <p className="customText mt-3">
                Large websites have large SEO problems. Here is how we solve the
                challenges that suppress organic growth at enterprise scale:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Enterprise SEO Services */}
      <Solution
        hideImages
        heading={"Our Enterprise SEO Services"}
        discription={
          "SIB Infotech delivers a complete enterprise SEO framework built around scalability, technical sophistication, and business-outcome measurement."
        }
        data={enterpriseServices}
      />

      {/* Industries We Serve */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Industries We Serve with{" "}
                <span className="text_red">Enterprise SEO</span>
              </h2>
              <p className="customText mt-3">
                Proven enterprise SEO delivery across national-scale industries:
              </p>
            </div>
          </div>

          <div className="row g-4">
            {industriesData.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="customCard h-100 text-center">
                  <div className="img-circle mx-auto mb-3">
                    <img src={item.img} alt={item.alt} />
                  </div>
                  <h4 className="small_heading fontWeight600 mb-2">
                    {item.title}
                  </h4>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </div>
            ))}
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
        title="Why Choose SIB Infotech for Enterprise SEO"
        description_right="Choosing an enterprise SEO partner is a strategic decision. Here is why 850+ businesses across 40+ countries — including Airtel, Finolex, Jindal Steel, and BPCL — trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Enterprise SEO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to build durable organic revenue at scale."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Enterprise SEO Case Study */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: National FMCG Brand Achieves{" "}
                <span className="text_red">380% Traffic Growth</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A national FMCG brand with pan-India distribution and a
                  product catalogue spanning 5 categories and 200+ SKUs. The
                  client had a technically sophisticated website but organic
                  search contributed only 12% of digital revenue. Rankings were
                  scattered across pages 3 to 5 for all primary commercial
                  keywords.
                </p>
              </div>
              <div className="mb-3">
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full technical audit across 15,000
                  indexed pages, identified 147 critical issues, rebuilt the
                  content architecture around a keyword cluster model, and
                  executed a 12-month authority building campaign.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h4 className="small_heading fontWeight700 text-center mb-4">
                  Results After 12 Months
                </h4>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text_red">+380%</div>
                      <div className="small fw-bold">Organic Traffic</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">
                        67
                      </div>
                      <div className="small fw-bold">
                        Commercial Keywords on Page 1
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">
                        12% → 41%
                      </div>
                      <div className="small fw-bold">
                        Organic Revenue Share
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">-64%</div>
                      <div className="small fw-bold">
                        Organic Cost per Acquisition vs Paid
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Schedule an{" "}
                <span className="text_red">Enterprise SEO Consultation</span>
              </h2>
              <p className="customText mt-3">
                Enterprise clients convert better through conversation than
                forms. Book a 45-minute strategy call with our enterprise SEO
                director to discuss your objectives and current challenges.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Schedule Your
                  Enterprise SEO Consultation
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
                  Request Your Enterprise SEO Consultation
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
        title={"Frequently Asked Questions about Enterprise SEO"}
        description={
          "Everything you need to know about SEO for large, complex websites."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more enterprise-grade SEO services from SIB Infotech."
        }
        links={[
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix crawlability, indexation, Core Web Vitals, and schema at enterprise scale.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Recover enterprise rankings from manual actions and algorithm penalties.",
          },
          {
            title: "LLM SEO Services",
            href: "/llm-seo-services",
            description:
              "Get your enterprise brand cited by ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
          },
          {
            title: "SEO Audit Services",
            href: "/seo-audit-services",
            description:
              "Enterprise website audits with prioritised roadmaps ranked by business impact.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent SEO plans for businesses of every size, from startups to enterprises.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn more enterprise traffic into pipeline and revenue with data-driven CRO.",
          },
        ]}
      />
    </div>
  );
};

export default EnterpriseSeoMgt;
