import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import OurClients from "@/comps/Home/OurClients";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const SeoPackagesMgt = () => {
  const pricingFactors = [
    {
      title: "Industry Competition",
      description:
        "Highly competitive industries such as real estate, finance, and legal require more investment to achieve page-1 rankings.",
    },
    {
      title: "Website Size",
      description:
        "Larger websites with more pages require more extensive technical work and ongoing optimisation.",
    },
    {
      title: "Keyword Difficulty",
      description:
        "Targeting nationally competitive keywords requires more domain authority and content investment than local or long-tail terms.",
    },
    {
      title: "Starting Point",
      description:
        "A website with strong existing domain authority reaches page-1 faster than one starting from scratch.",
    },
    {
      title: "Geographic Scope",
      description:
        "National campaigns targeting multiple cities require more content and local SEO investment than single-city campaigns.",
    },
  ];

  const planRows = [
    { feature: "Best For", starter: "Local businesses, SMEs, new websites", growth: "Growing businesses, national campaigns, ecommerce" },
    { feature: "Target Keywords", starter: "Up to 20 keywords", growth: "Up to 60 keywords" },
    { feature: "Technical SEO Audit", starter: "Initial audit (one-time)", growth: "Ongoing monthly audits" },
    { feature: "On-Page Optimisation", starter: "Up to 10 pages/month", growth: "Up to 25 pages/month" },
    { feature: "Content Creation", starter: "2 blog posts/month", growth: "6 blog posts/month" },
    { feature: "Link Building", starter: "4 quality backlinks/month", growth: "10 quality backlinks/month" },
    { feature: "Local SEO / GBP", starter: "Included", growth: "Included + 2 city pages" },
    { feature: "Schema Markup", starter: "Basic (Organization, LocalBusiness)", growth: "Advanced (FAQ, Service, Product)" },
    { feature: "Monthly Reporting", starter: "Keyword rankings + traffic summary", growth: "Full campaign dashboard + commentary" },
    { feature: "Account Manager", starter: "Dedicated manager", growth: "Senior dedicated manager" },
    { feature: "Pricing", starter: "Contact us for pricing", growth: "Contact us for pricing" },
  ];

  const includedItems = [
    {
      icon: "fa-solid fa-magnifying-glass-chart",
      title: "Keyword Research and Strategy",
      description:
        "Every package begins with a comprehensive keyword research exercise covering primary, secondary, and long-tail keywords relevant to your business. We map keywords to search intent and create a prioritised target keyword list focused on the highest-opportunity terms for your budget.",
    },
    {
      icon: "fa-solid fa-microscope",
      title: "Technical SEO Audit and Fixes",
      description:
        "We audit your website for technical issues that may be preventing Google from crawling, indexing, and ranking your pages. This includes Core Web Vitals, mobile usability, canonical tags, structured data, page speed, internal linking, and crawl efficiency. Technical fixes are implemented monthly.",
    },
    {
      icon: "fa-solid fa-file-code",
      title: "On-Page Optimisation",
      description:
        "We optimise page titles, meta descriptions, heading hierarchy, content structure, internal links, image alt tags, and schema markup on all target pages. On-page work is conducted methodically across your highest-priority pages each month.",
    },
    {
      icon: "fa-solid fa-pen-nib",
      title: "Content Creation",
      description:
        "Each package includes a set number of SEO-optimised blog posts per month. All content is written by human writers (not generic AI-generated content), optimised for target keywords, structured for featured snippets, and designed to build topical authority in your niche.",
    },
    {
      icon: "fa-solid fa-link",
      title: "Link Building",
      description:
        "We earn quality backlinks from relevant, authoritative websites through content-based outreach and digital PR. All link building is white-hat and Google-compliant. Monthly link reports detail each acquisition with domain authority, linking page, anchor text, and target URL.",
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Monthly Reporting and Strategy Review",
      description:
        "Every month you receive a comprehensive performance report covering keyword ranking movements, organic traffic trends, technical health scores, content performance, and link acquisitions. Quarterly strategy reviews align the campaign with your evolving business goals.",
    },
  ];

  const outperforms = [
    {
      title: "Google Premier Partner",
      description:
        "Access to exclusive Google insights, beta features, and direct support that generic providers do not have.",
    },
    {
      title: "18+ Years of Algorithm Experience",
      description:
        "We have navigated every Google algorithm update. Our strategies are built for long-term durability, not short-term ranking tricks.",
    },
    {
      title: "Human-First Content",
      description:
        "Every piece of content is written by an expert, not generated by generic AI tools. This is fundamental to EEAT compliance and long-term rankings.",
    },
    {
      title: "No Keyword-Count Games",
      description:
        "We do not pad packages with uncompetitive keywords to inflate performance reports. Every keyword in our strategy has real search volume and revenue potential.",
    },
    {
      title: "Transparent Deliverables",
      description:
        "You know exactly what work is being done each month before it starts.",
    },
  ];

  const faqsData = [
    {
      id: "faq-seo-packages-1",
      question: "How much do SEO packages cost in India?",
      answer: `<p>Quality SEO packages in India for small to medium businesses start from Rs. 20,000 to Rs. 30,000 per month. Mid-market packages for competitive national campaigns range from Rs. 50,000 to Rs. 1,20,000 per month. Enterprise SEO programmes are priced on a custom basis. Contact us for a specific quote.</p>`,
    },
    {
      id: "faq-seo-packages-2",
      question: "What is included in an SEO package?",
      answer: `<p>A comprehensive SEO package should include technical SEO auditing and implementation, on-page optimisation, keyword-targeted content creation, link building, local SEO, and monthly reporting. SIB Infotech's packages include all of these components with transparent deliverable counts.</p>`,
    },
    {
      id: "faq-seo-packages-3",
      question: "Is monthly SEO better than one-time SEO?",
      answer: `<p>Monthly SEO is more effective than one-time SEO for sustained rankings and traffic growth. SEO is a compounding discipline: the authority and rankings you build each month reinforce the previous month's work. One-time SEO fixes technical issues but does not build the ongoing authority and content depth that drives long-term rankings.</p>`,
    },
    {
      id: "faq-seo-packages-4",
      question: "How long before an SEO package shows results?",
      answer: `<p>Most businesses see initial ranking improvements within 3 months of starting an SEO campaign. Meaningful organic traffic growth and lead generation impact typically develops between months 4 and 6. Highly competitive industries may take 9 to 12 months for full impact.</p>`,
    },
    {
      id: "faq-seo-packages-5",
      question: "Can I upgrade my SEO package as my business grows?",
      answer: `<p>Yes. You can upgrade from our Starter to Growth package at any time. We review package suitability at every quarterly strategy review and proactively recommend upgrades when the campaign has outgrown the current scope.</p>`,
    },
    {
      id: "faq-seo-packages-6",
      question: "Do your SEO packages include content writing?",
      answer: `<p>Yes. All SIB Infotech SEO packages include monthly content creation. Content is written by human SEO content specialists, not generic AI tools. The number of pieces per month varies by package tier.</p>`,
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
                  SEO Packages That Fit Your{" "}
                  <span className="text_red fontWeight700">Budget and Growth Goals</span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | Transparent Monthly SEO Plans
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  Transparent, results-focused SEO packages from India's most trusted Google Premier
                  Partner. No hidden costs. No keyword-count games. Just real, measurable organic
                  growth.
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
                  Get Your Free SEO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best SEO Packages in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"SEO Packages"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free SEO Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best SEO Packages in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"SEO Packages"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Transparent SEO Packages, <span className="text_red">No Surprises</span>
              </h2>
              <p className="customText mt-3">
                If you are searching for SEO packages in India, you have likely encountered two types
                of offerings: providers who compete on price with packages that promise the world and
                deliver very little, and agencies that are vague about what is included and what it
                costs.
              </p>
              <p className="customText mt-3">
                SIB Infotech takes a different approach. We believe in transparent, outcome-focused
                SEO that you understand before you invest. Every package below lists exactly what is
                included, what you will receive each month, and what outcomes you can reasonably
                expect.
              </p>
              <p className="customText mt-3">
                We are a Google Premier Partner with 18+ years of SEO experience and 850+ active
                clients across 40+ countries. Our packages are not designed to win the cheapest quote:
                they are designed to win you rankings, traffic, and leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding SEO Pricing in India */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Understanding <span className="text_red">SEO Pricing in India</span>
              </h2>
              <p className="customText mt-3">
                SEO costs in India in 2026 vary significantly based on the factors listed here.
                As a general benchmark, quality SEO services in India for small to medium businesses
                start from Rs. 20,000 to Rs. 30,000 per month. Competitive national campaigns for
                mid-size businesses typically require Rs. 50,000 to Rs. 1,20,000 per month. Enterprise
                campaigns can go higher.
              </p>
              <p className="customText mt-3">
                The question to ask is not "what is the cheapest SEO package?" but "what is the ROI on
                my SEO investment?" Our clients consistently see 3x to 8x returns on their SEO
                investment over a 12-month period.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  What Drives SEO Pricing?
                </h3>
                <ul className="list-unstyled">
                  {pricingFactors.map((factor, i) => (
                    <li className="mb-3" key={i}>
                      <strong>{factor.title}:</strong> {factor.description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Packages */}
      <section id="seo-packages">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Our <span className="text_red">SEO Packages</span>
              </h2>
              <p className="customText mt-3">
                Two transparent monthly plans, each with clearly defined deliverables. Upgrade anytime
                as your business grows.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="table-responsive rounded">
                <table className="table table-bordered table-striped align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-4">Feature</th>
                      <th className="bgRedMenu text-white p-4">Starter SEO</th>
                      <th className="bgRedMenu text-white p-4">Growth SEO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planRows.map((row, i) => (
                      <tr key={i}>
                        <td className="p-4 fw-bold">{row.feature}</td>
                        <td className="p-4">{row.starter}</td>
                        <td className="p-4">{row.growth}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-10">
              <div className="rounded p-4 p-lg-5 bg-danger text-white shadow">
                <h4 className="small_heading fontWeight700 mb-2">
                  Enterprise SEO: Custom Scope for Large Businesses
                </h4>
                <p className="mb-0">
                  For large websites with 10,000+ pages, multi-location businesses, and enterprise
                  brands requiring dedicated team allocation, custom enterprise SEO packages are
                  available.{" "}
                  <Link href="/contact-us" className="text-white fw-bold text-decoration-underline">
                    Contact us
                  </Link>{" "}
                  for a custom scope and pricing.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <Link href="/contact-us" className="btnThemeRed">
                <i className="fa-solid fa-comment-dots me-2"></i> Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included in Every Package */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                What's Included in Every{" "}
                <span className="text_red">SIB Infotech SEO Package</span>
              </h2>
              <p className="customText mt-3">
                Every plan includes the six disciplines that make SEO work — executed by specialists,
                not bundled by a salesperson.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {includedItems.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="off-page-seo-box2 h-100">
                  <div className="img-circle">
                    <i className={item.icon} style={{ fontSize: "24px", color: "#fff" }}></i>
                  </div>
                  <h4 className="small_heading fontWeight600 mb-2">{item.title}</h4>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SIB Infotech SEO Packages Outperform */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Why SIB Infotech SEO Packages{" "}
                <span className="text_red">Outperform Generic Providers</span>
              </h2>
              <p className="customText mt-3">
                The difference is not the price — it is what the price buys.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {outperforms.map((point, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="customCard h-100 p-4">
                  <h4 className="small_heading fontWeight600 mb-2">{point.title}</h4>
                  <p className="customText mb-0">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cheap SEO Packages Fail */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why <span className="text_red">Cheap SEO Packages Fail</span>
              </h2>
              <p className="customText mt-3">
                Rs. 8,000 per month SEO packages are common in India. Here is the economic reality: at
                that price point, after tool costs, administration, and minimum viable effort, an
                agency has approximately 3 to 4 hours of billable time per month to allocate to your
                campaign. That is not enough to move rankings in any competitive market.
              </p>
              <p className="customText mt-3">
                The real cost of cheap SEO is not just wasted budget: it is the opportunity cost of 6
                to 12 months of lost growth while a competitor builds their organic authority.
              </p>
              <p className="customText mt-3">
                Quality SEO that actually works in competitive markets requires sustained effort across
                technical, content, and link acquisition dimensions simultaneously. SIB Infotech's
                packages are priced to deliver this level of effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Packages in Mumbai */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                <span className="text_red">Affordable SEO Packages</span> in Mumbai
              </h2>
              <p className="customText mt-3">
                SIB Infotech offers affordable SEO packages in Mumbai designed for businesses of all sizes. As a leading SEO agency based in Mumbai with 18+ years of experience, we understand the local market dynamics and create tailored SEO packages that deliver measurable results for Mumbai businesses.
              </p>
              <p className="customText mt-3">
                Whether you are a startup in Andheri, an e-commerce business in Bandra, or an enterprise in BKC, our SEO packages in Mumbai include everything you need to dominate local and national search results. From technical SEO audits and on-page optimization to content creation and link building, our transparent monthly plans give you full visibility into the work being done.
              </p>
              <p className="customText mt-3">
                Our Mumbai SEO packages have helped businesses across industries increase organic traffic by 200-400% and generate significant revenue growth. Get started with a free SEO audit today and discover how our affordable SEO packages in Mumbai can transform your online presence.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get Your Free Mumbai SEO Audit
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Choose Our Mumbai SEO Packages?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <i className="fa-solid fa-check text_red me-2"></i>
                    <strong>Local Market Expertise:</strong> Deep understanding of the Mumbai business landscape
                  </li>
                  <li className="mb-3">
                    <i className="fa-solid fa-check text_red me-2"></i>
                    <strong>Transparent Pricing:</strong> No hidden costs or surprise invoices
                  </li>
                  <li className="mb-3">
                    <i className="fa-solid fa-check text_red me-2"></i>
                    <strong>Dedicated Account Manager:</strong> Senior SEO expert assigned to your account
                  </li>
                  <li className="mb-3">
                    <i className="fa-solid fa-check text_red me-2"></i>
                    <strong>Proven Results:</strong> 850+ clients across 40+ countries trust our expertise
                  </li>
                  <li className="mb-3">
                    <i className="fa-solid fa-check text_red me-2"></i>
                    <strong>Google Premier Partner:</strong> Exclusive access to Google insights and beta features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="dots curve1 bgEffect">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="fontHeading sub_heading text_blue_light fontWeight800">
                NO LOCK-IN CONTRACTS
              </h5>
              <h4 className="sub_heading fontHeading fontWeight600 mt-3">
                Get Started with an <span className="text_red">SEO Package</span>
              </h4>
              <p className="customText mt-3">
                The best way to find the right SEO package for your business is to start with a free
                audit. Our team will assess your website, competitive landscape, and keyword
                opportunities, then recommend the package and investment level most likely to deliver
                your goals.
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
                  <i className="fa-solid fa-comment-dots me-2"></i> Get My Free SEO Audit
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
                    Best SEO Packages in India
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
        title={"SEO Package FAQs"}
        description={"Everything you need to know about SEO packages in India from SIB Infotech."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more SEO services and city pages from SIB Infotech."
        }
        links={[
          {
            title: "Best SEO Agency in Mumbai",
            description:
              "See why Mumbai businesses pick SIB Infotech: transparent pricing, a named strategist, no lock-in.",
            href: "/search-engine-optimization-seo-services",
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
            title: "SEO Company in Hyderabad",
            href: "/seo-company-hyderabad",
            description:
              "Dominate Hyderabad search results with a Google Premier Partner SEO team.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "White Label SEO Services",
            href: "/white-label-seo-services",
            description:
              "White label SEO delivery for agencies — sell SIB Infotech's SEO services under your own brand.",
          },
        ]}
      />
    </div>
  );
};

export default SeoPackagesMgt;
