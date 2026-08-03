import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import OurClients from "@/comps/Home/OurClients";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const CaseStudiesMgt = () => {
  const caseStudies = [
    {
      number: "Case Study 1",
      title: "Enterprise FMCG Brand",
      tags: "SEO | +380% Organic Traffic",
      client:
        "Leading FMCG brand with national distribution across India",
      challenge:
        "The client was investing heavily in paid search but had minimal organic visibility. Core commercial keywords for their product categories were ranking on pages 3 to 5. Organic traffic represented less than 12% of total website traffic.",
      approach: [
        "Full technical SEO audit identifying 147 critical issues including crawl errors, duplicate content, and missing schema.",
        "Keyword strategy development targeting 280 high-intent commercial and informational keywords.",
        "Complete on-page optimisation across 85 product and category pages.",
        "Content cluster strategy with 24 pillar-and-cluster blog posts.",
        "Link acquisition campaign securing 35 editorial backlinks from DA 40+ domains.",
      ],
      resultsPeriod: "Results After 12 Months",
      results: [
        { metric: "+380%", label: "Organic traffic growth" },
        { metric: "67", label: "Target keywords on Page 1" },
        { metric: "12% → 41%", label: "Organic revenue contribution" },
        { metric: "-64%", label: "CPA vs paid search" },
      ],
    },
    {
      number: "Case Study 2",
      title: "B2B Manufacturing Company",
      tags: "SEO + Content | +260% Qualified Leads",
      client:
        "Industrial manufacturer with pan-India distribution seeking B2B procurement leads",
      challenge:
        "The client had a technically sound website but ranked for almost no commercially relevant keywords. B2B procurement searches in their category returned competitors on page 1 across all major terms.",
      approach: [
        "B2B keyword research identifying 120 high-intent procurement and specification search terms.",
        "Complete restructuring of product page hierarchy and URL architecture.",
        "Development of 15 specification-level content assets targeting engineer and procurement manager search intent.",
        "Implementation of Product schema, FAQPage schema, and BreadcrumbList across all product pages.",
        "Digital PR campaign generating 12 backlinks from industry publications.",
      ],
      resultsPeriod: "Results After 9 Months",
      results: [
        { metric: "+260%", label: "Organic lead volume" },
        { metric: "43", label: "Page 1 rankings achieved" },
        { metric: "+68%", label: "Average session duration" },
        { metric: "+38%", label: "Quote-to-close conversion" },
      ],
    },
    {
      number: "Case Study 3",
      title: "E-commerce Brand",
      tags: "SEO + Google Shopping | +190% Revenue",
      client: "Online retailer in competitive lifestyle category",
      challenge:
        "The client had strong paid search performance but was almost invisible in organic results. Product pages were thin, category pages had no optimised content, and there was no structured data implementation.",
      approach: [
        "Full ecommerce SEO audit covering product page quality, faceted navigation, canonical issues, and schema gaps.",
        "Category page content strategy with SEO-optimised descriptions for 40 category pages.",
        "Product page optimisation template applied across 1,200 SKUs.",
        "Product schema and BreadcrumbList implementation across all product and category pages.",
        "Google Shopping feed optimisation alongside SEO for integrated search coverage.",
      ],
      resultsPeriod: "Results After 10 Months",
      results: [
        { metric: "+190%", label: "Organic revenue growth" },
        { metric: "+420%", label: "Category page organic traffic" },
        { metric: "+85%", label: "Google Shopping impression share" },
        { metric: "-43%", label: "Blended cost per acquisition" },
      ],
    },
    {
      number: "Case Study 4",
      title: "Healthcare Provider",
      tags: "Local SEO + GBP | +310% Map Pack Impressions",
      client: "Multi-location healthcare provider with 6 clinics across Maharashtra",
      challenge:
        "Individual clinic locations had poor or unclaimed Google Business Profiles. None appeared in the Google Map Pack for high-intent local search terms. Online appointment bookings were negligible.",
      approach: [
        "Full Google Business Profile audit and optimisation for all 6 locations.",
        "LocalBusiness schema implementation for each location.",
        "Local citation building across 45 relevant Indian directories with consistent NAP.",
        "Patient review generation strategy resulting in 180+ new Google reviews.",
        "Location-specific landing pages for each clinic with unique content.",
      ],
      resultsPeriod: "Results After 6 Months",
      results: [
        { metric: "+310%", label: "GBP impressions across locations" },
        { metric: "5 of 6", label: "Locations in the Google Map Pack" },
        { metric: "+240%", label: "Appointments via organic search" },
        { metric: "4.6", label: "Average rating (up from 3.9)" },
      ],
    },
    {
      number: "Case Study 5",
      title: "Real Estate Developer",
      tags: "SEO + PPC | +175% Qualified Enquiries",
      client: "Premium real estate developer in Mumbai and Pune",
      challenge:
        "The developer was spending heavily on offline and digital advertising but generating minimal organic leads. The website ranked for no project-specific or location-specific search terms.",
      approach: [
        "Keyword research covering project names, location terms, and buyer-intent queries.",
        "On-page optimisation for 25 project and micro-market pages.",
        "Content strategy for 12 buyer-intent blog articles targeting research phase queries.",
        "Google Ads campaign restructure with project-specific ad groups and landing pages.",
        "Call tracking implementation to measure lead quality from both organic and paid channels.",
      ],
      resultsPeriod: "Results After 8 Months",
      results: [
        { metric: "+175%", label: "Combined qualified enquiries" },
        { metric: "2nd", label: "Organic as lead source" },
        { metric: "-52%", label: "Cost per enquiry from Google Ads" },
        { metric: "21", label: "Project keywords on Page 1" },
      ],
    },
  ];

  const industries = [
    "FMCG and Consumer Products",
    "Manufacturing and Industrial B2B",
    "E-commerce and Retail",
    "Healthcare and Medical Services",
    "Real Estate and Property Development",
    "Education and EdTech",
    "Financial Services and Insurance",
    "Hospitality and Travel",
    "Legal and Professional Services",
    "Technology and SaaS",
  ];

  const faqsData = [
    {
      id: "faq-case-studies-1",
      question: "Can you show me case studies from my specific industry?",
      answer: `<p>Yes. Use the industry filter above to find case studies relevant to your sector. If you do not see your industry represented, contact us directly and we will share relevant references from our portfolio.</p>`,
    },
    {
      id: "faq-case-studies-2",
      question: "Are the results in your case studies independently verified?",
      answer: `<p>All results cited in our case studies are based on actual campaign data from Google Analytics, Google Search Console, and Google Ads. We document results rigorously and present them accurately. Client names are anonymised where requested but the data is genuine.</p>`,
    },
    {
      id: "faq-case-studies-3",
      question: "What kind of results can I expect from SIB Infotech?",
      answer: `<p>Results vary by industry, keyword competition, existing website authority, and investment level. We provide realistic expectations in our initial audit and strategy presentation, based on comparable client benchmarks. Our case studies above give you a representative range of outcomes across different industries and timelines.</p>`,
    },
    {
      id: "faq-case-studies-4",
      question: "How long do results like these typically take?",
      answer: `<p>Most case studies above reflect 6 to 12 months of consistent work. Quick wins in technical SEO and local SEO are often visible within 60 to 90 days. Full organic traffic transformation typically takes 6 to 9 months for mid-competition markets.</p>`,
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
                  Client Results That{" "}
                  <span className="text_red fontWeight700">Speak for Themselves</span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | 850+ Active Clients in 40+ Countries
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  Real numbers. Real industries. Real growth. Explore how SIB Infotech has delivered
                  measurable digital marketing results for businesses across 40+ countries.
                </p>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <Link href="/contact-us" className="btnThemeRed">
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
                  Get Real, Documented Results
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    SIB Infotech Case Studies
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Case Studies"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Real, Documented Results
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              SIB Infotech Case Studies
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Case Studies"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Evidence-Backed Results, <span className="text_red">Not Empty Promises</span>
              </h2>
              <p className="customText mt-3">
                At SIB Infotech, we believe that every claim made in marketing should be backed by
                evidence. This page exists for one reason: to show you the actual, verifiable results
                we have delivered for real clients across real industries.
              </p>
              <p className="customText mt-3">
                With 18+ years in digital marketing, Google Premier Partner status since 2005, and
                850+ active clients across 40+ countries, our track record is deep. The case studies
                below represent a cross-section of our client work across SEO, Google Ads, content
                marketing, and full-service digital growth engagements.
              </p>
              <p className="customText mt-3">
                Client names have been anonymised in some cases at client request. Results shown are
                genuine and documented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row g-4">
            {caseStudies.map((cs, i) => (
              <div className="col-12" key={i}>
                <div className="customCard h-auto p-4 p-lg-5">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <span className="badge bg-danger text-white mb-3">{cs.number}</span>
                      <h3 className="heading fontWeight700 mb-2">
                        {cs.title}{" "}
                        <span className="small_heading fontWeight600 text_red d-block mt-1">
                          {cs.tags}
                        </span>
                      </h3>
                      <h5 className="fontWeight600 text-dark mb-1">Client:</h5>
                      <p className="customText">{cs.client}</p>
                      <h5 className="fontWeight600 text-dark mb-1">Challenge:</h5>
                      <p className="customText">{cs.challenge}</p>
                      <h5 className="fontWeight600 text-dark mb-1">Our Approach:</h5>
                      <ul className="list-unstyled">
                        {cs.approach.map((item, j) => (
                          <li className="mb-2" key={j}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0">
                      <div className="bgGrey2 rounded p-4 h-100">
                        <h4 className="small_heading fontWeight700 text-center mb-4">
                          {cs.resultsPeriod}
                        </h4>
                        <div className="row g-3 text-center">
                          {cs.results.map((r, j) => (
                            <div className="col-6" key={j}>
                              <div className="p-3 bg-white rounded shadow-sm">
                                <div className="heading fontWeight700 text_red">{r.metric}</div>
                                <div className="small fw-bold">{r.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Have Delivered Results In */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Industries We Have <span className="text_red">Delivered Results In</span>
              </h2>
              <p className="customText mt-3">
                Proven, documented results across the industries that power the Indian and global economy.
              </p>
            </div>
          </div>

          <div className="row g-3">
            {industries.map((ind, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="customCard bg-white text-center h-100 p-3">
                  <h4 className="small_heading fontWeight600 text-dark mb-0">{ind}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Be Our Next Case Study */}
      <section className="dots curve1 bgEffect">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="fontHeading sub_heading text_blue_light fontWeight800">
                REAL DATA. REAL GROWTH STORIES.
              </h5>
              <h4 className="sub_heading fontHeading fontWeight600 mt-3">
                Ready to Be Our <span className="text_red">Next Case Study?</span>
              </h4>
              <p className="customText mt-3">
                If you are serious about growing organic traffic, qualified leads, and digital
                revenue, we would like to show you what we can achieve for your business.
              </p>
              <div className="mt-4">
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Phone: +91 22 2605 7575
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Email: info@sibinfotech.com
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Website: https://sibinfotech.com/contact-us/
                </p>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <Link href="/contact-us" className="btnThemeRed">
                  <i className="fa-solid fa-comment-dots me-2"></i> Book a Free Strategy Call
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    SIB Infotech Case Studies
                  </strong>
                </p>
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
        title={"Frequently Asked Questions"}
        description={"Everything you need to know about the results SIB Infotech delivers."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "See how SIB Infotech's SEO services deliver real business outcomes for clients across industries."
        }
        links={[
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Shopify SEO Services",
            href: "/shopify-seo-services",
            description:
              "Rank Shopify stores on page 1 with platform-specific SEO, speed, and schema optimisation.",
          },
          {
            title: "WooCommerce SEO Services",
            href: "/woocommerce-seo-services",
            description:
              "Grow organic sales for WooCommerce stores with ecommerce-specific SEO strategies.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn more traffic into customers with data-driven CRO programmes.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Recover rankings from manual actions and algorithm penalties with a proven remediation process.",
          },
        ]}
      />
    </div>
  );
};

export default CaseStudiesMgt;
