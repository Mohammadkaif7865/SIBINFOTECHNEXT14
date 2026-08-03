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

const ShopifySeoMgt = () => {
  const shopifyServices = [
    {
      title: `Shopify Technical <br class="d-none d-md-lg "/> SEO Audit`,
      description:
        "We conduct a comprehensive technical audit of your Shopify store covering canonical tag implementation, URL structure, site speed (Core Web Vitals across mobile and desktop), crawl efficiency, internal linking architecture, schema markup, and indexation health. Every issue is documented with Shopify-specific resolution guidance.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Collection Page <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Collection pages are the highest-traffic opportunity pages in a Shopify store. We optimise collection pages with keyword-aligned titles, meta descriptions, unique introductory content, breadcrumb navigation, and Product schema to maximise category-level keyword rankings.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Product Page <br class="d-none d-md-lg "/> SEO`,
      description:
        "We create optimised product page templates covering title structure, meta descriptions, heading hierarchy, unique product descriptions (removing manufacturer copy that causes duplicate content), and Product schema implementation including price, availability, and review aggregate markup.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Shopify Site Speed <br class="d-none d-md-lg "/> Optimisation`,
      description:
        "Page speed is a direct Google ranking factor and a major conversion driver. We audit and improve Shopify store speed by identifying render-blocking resources, optimising image delivery, deferring unnecessary JavaScript, and recommending app removal where apps are causing speed degradation without delivering proportionate business value.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.jpg",
    },
    {
      title: `Internal Linking <br class="d-none d-md-lg "/> Architecture`,
      description:
        "A well-structured internal linking system distributes link equity from high-authority pages (homepage, top collection pages) to product and deeper category pages. We build a Shopify-specific internal linking strategy that improves crawl efficiency and page-level authority distribution.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `Content Marketing <br class="d-none d-md-lg "/> for Shopify`,
      description:
        "Blog content is consistently underutilised by Shopify stores. We build topical authority through strategic blog clusters that target buyer-intent informational queries, driving traffic from users researching before purchase. Shopify's native blog functionality is used with full schema markup implementation.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.jpg",
    },
  ];

  const checklist = [
    {
      area: "Canonical Tags",
      fix: "Canonical pointing to preferred URL on all duplicate /collections/ product URLs",
    },
    {
      area: "Pagination",
      fix: "Proper canonical implementation on paginated collection pages",
    },
    {
      area: "Site Speed",
      fix: "Core Web Vitals: LCP, INP, CLS on mobile and desktop",
    },
    {
      area: "Schema Markup",
      fix: "Product, BreadcrumbList, FAQPage, Organisation schema",
    },
    {
      area: "Internal Linking",
      fix: "Crawl depth audit, link equity distribution, anchor text analysis",
    },
    {
      area: "Content Quality",
      fix: "Thin page identification, duplicate content, manufacturer copy removal",
    },
    {
      area: "XML Sitemap",
      fix: "Dynamic sitemap including all collection and product URLs",
    },
    {
      area: "hreflang",
      fix: "Correct implementation for multi-market Shopify stores",
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
    headingStart: "Why Shopify Merchants Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "Platform-Specific SEO That Drives Organic Revenue",
    cardTitle: "Rank on Shopify, Not Just on Google",
    cardDescription:
      "Shopify's unique URL structures, theme speed limits, and app bloat need platform-native expertise. SIB Infotech combines 18+ years of organic growth strategy with deep Shopify technical knowledge.",
    buttonText: "Get Your Free Shopify SEO Audit",
  };

  const rightBoxContent = {
    heading: "The Shopify SEO Agency That Understands the Platform",
    description:
      "Shopify has specific technical SEO constraints that generic ecommerce SEO agencies do not understand. Our Shopify SEO team combines platform-specific expertise with 18+ years of organic growth strategy to help Indian and international Shopify merchants rank, convert, and grow.",
  };

  const power_data = [
    {
      title: "Platform-Native Shopify Expertise",
      description:
        "Our team works exclusively with Shopify's Liquid architecture, app ecosystem, and technical constraints — not generic ecommerce SEO applied to Shopify.",
    },
    {
      title: "Revenue-Focused Measurement",
      description:
        "We measure success in organic revenue contribution, not just traffic or rankings. Every optimisation is prioritised by its impact on your bottom line.",
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
        "A dedicated strategist assigned to your account, reachable on call, WhatsApp, and email with deep knowledge of your store's goals.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Shopify Store Audit",
      description: `<p>Full technical, on-page, and content audit with Shopify-specific findings across canonicals, site speed, schema, and crawl health.</p>`,
    },
    {
      title: "Keyword Strategy",
      description: `<p>Collection, product, and content keyword mapping across buyer journey stages, prioritised by revenue potential.</p>`,
    },
    {
      title: "Technical Fixes",
      description: `<p>Canonical tags, site speed, schema, and crawl issues resolved in priority order with Shopify-native solutions.</p>`,
    },
    {
      title: "Collection Page Optimisation",
      description: `<p>Content and technical work on your highest-traffic category pages to capture category-level keyword rankings.</p>`,
    },
    {
      title: "Product Page Templates",
      description: `<p>SEO-optimised product page structure and description templates rolled out across your catalogue.</p>`,
    },
    {
      title: "Content Strategy",
      description: `<p>Blog cluster development for buyer-intent informational queries that feed organic traffic before purchase.</p>`,
    },
    {
      title: "Performance Reporting",
      description: `<p>Monthly organic traffic, revenue attribution, and keyword ranking reports with clear next steps.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "How is Shopify SEO different from WooCommerce SEO?",
      answer: `<p>Shopify and WooCommerce both require ecommerce SEO but have different technical architectures. Shopify has specific challenges with duplicate URLs, fixed URL structures, and theme-based speed issues. WooCommerce offers more flexibility but requires more careful plugin management for SEO. Both benefit from specialist platform knowledge.</p>`,
    },
    {
      id: "faq2",
      question: "Can you help if my Shopify store already has an SEO app installed?",
      answer: `<p>Yes. Apps like SEO Manager and Smart SEO are useful tools but they do not replace a comprehensive SEO strategy. We audit your existing app settings, identify any conflicts or limitations, and build a full SEO strategy that uses your apps effectively alongside direct technical optimisation.</p>`,
    },
    {
      id: "faq3",
      question: "How many pages should I optimise first on a Shopify store?",
      answer: `<p>We prioritise in order of revenue potential: collection (category) pages first, then the top 20% of product pages by sales volume, then new collection pages for high-opportunity keywords, then the blog. This sequence maximises early ROI before extending to the full catalogue.</p>`,
    },
    {
      id: "faq4",
      question: "How long before Shopify SEO shows results?",
      answer: `<p>Technical fixes and collection page optimisations typically produce initial ranking improvements within 6 to 8 weeks. Meaningful organic traffic growth develops by month 4 to 5. Full organic revenue impact, including blog content contributions, develops over 6 to 9 months.</p>`,
    },
    {
      id: "faq5",
      question: "Do you offer WooCommerce SEO as well?",
      answer: `<p>Yes. We offer dedicated WooCommerce SEO services covering the platform's specific technical considerations and plugin ecosystem. Contact our team to learn more about our WooCommerce SEO offering.</p>`,
    },
    {
      id: "faq6",
      question: "Does Shopify SEO help with Google Shopping?",
      answer: `<p>Yes. Our Shopify SEO work, particularly Product schema implementation, directly improves your Google Shopping feed quality. We also optimise product titles and descriptions using best practices shared between organic SEO and Google Shopping, improving performance across both channels.</p>`,
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
                  Shopify SEO Services That Drive{" "}
                  <span className="text_red fontWeight700">
                    Organic Revenue, Not Just Traffic
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
                  Shopify has unique technical SEO constraints that generic
                  ecommerce SEO agencies do not understand. SIB Infotech's
                  Shopify SEO team combines platform-specific expertise with
                  18+ years of organic growth strategy to help Indian and
                  international Shopify merchants rank, convert, and grow.
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
                  Get Your Free Shopify SEO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Shopify SEO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Shopify SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free Shopify SEO Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Shopify SEO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Shopify SEO Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Shopify SEO: The Platform-Specific{" "}
                <span className="text_red">Advantage</span>
              </h2>
              <p className="customText mt-3">
                Shopify powers over 4.5 million active stores globally. In
                India, Shopify is the dominant platform for DTC brands, fashion
                retailers, electronics stores, and B2B wholesale businesses.
                With so much competition on the same platform, organic search
                visibility is the single most powerful differentiator for
                Shopify store owners.
              </p>
              <p className="customText mt-3">
                SIB Infotech is a Google Premier Partner SEO agency with 18+
                years of experience. Our Shopify SEO service is built around the
                platform's specific technical architecture, combining deep
                Shopify knowledge with proven organic growth methodology to
                deliver rankings that drive revenue.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech on Shopify?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Platform-Native Expertise:</strong> Built around
                    Shopify's Liquid architecture and constraints.
                  </li>
                  <li className="mb-3">
                    <strong>Revenue-Focused:</strong> Measured in organic
                    revenue contribution, not just rankings.
                  </li>
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Top 3% agency tier
                    in India.
                  </li>
                  <li className="mb-3">
                    <strong>18+ Years Experience:</strong> Battle-tested
                    strategies across every algorithm era.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shopify SEO Is Different */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why Shopify SEO Is Different from{" "}
                <span className="text_red">Generic Ecommerce SEO</span>
              </h2>
              <p className="customText mt-3">
                Shopify is a powerful platform, but it has specific technical
                SEO characteristics that require platform-specific expertise:
              </p>
            </div>
          </div>

          <p className="customText mt-4 text-center">
            Our Shopify SEO team understands all of these constraints and has
            developed methodologies to optimise within and around them.
          </p>
        </div>
      </section>

      {/* Our Shopify SEO Services */}
      <Solution
        hideImages
        heading={"Our Shopify SEO Services"}
        discription={
          "SIB Infotech delivers a complete Shopify SEO framework built around the platform's technical architecture and revenue potential."
        }
        data={shopifyServices}
      />

      {/* Technical Checklist */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Shopify SEO{" "}
                <span className="text_red">Technical Checklist</span>
              </h2>
              <p className="customText mt-3">
                Our Shopify SEO audit covers these critical areas:
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-bordered align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-3">
                        Technical Area
                      </th>
                      <th className="bgRedMenu text-white p-3">
                        What We Audit and Fix
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklist.map((item, index) => (
                      <tr key={index}>
                        <td className="p-3">
                          <strong>{item.area}</strong>
                        </td>
                        <td className="p-3">{item.fix}</td>
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
        title="Why Choose SIB Infotech for Shopify SEO"
        description_right="Choosing a Shopify SEO partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our Shopify SEO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to build durable organic revenue."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Case Study */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="heading fontWeight600 mb-3">
                Case Study: Fashion Retailer Grows Organic Revenue{" "}
                <span className="text_red">260%</span>
              </h2>
              <div className="mb-3">
                <h5 className="fontWeight600 text_red mb-1">Challenge:</h5>
                <p className="customText">
                  A Bangalore-based Shopify fashion store was receiving 90% of
                  its traffic from paid ads. Organic search contributed less
                  than 10% of revenue. The store had 800+ product SKUs but
                  minimal collection page content and no schema markup.
                </p>
              </div>
              <div>
                <h5 className="fontWeight600 text-dark mb-1">Approach:</h5>
                <p className="customText">
                  SIB Infotech conducted a full technical audit, resolved all
                  canonical tag issues, added unique content to 35 collection
                  pages, implemented Product and BreadcrumbList schema across
                  all pages, improved mobile site speed from 42 to 78
                  (PageSpeed Insights), and launched a 12-post fashion styling
                  blog cluster.
                </p>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="customCard bgGrey2">
                <h4 className="small_heading fontWeight700 text-center mb-4">
                  Results After 8 Months
                </h4>
                <div className="row g-3 text-center">
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text_red">+260%</div>
                      <div className="small fw-bold">Organic Revenue</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-success">
                        +340%
                      </div>
                      <div className="small fw-bold">Organic Traffic</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-primary">
                        4 → 31
                      </div>
                      <div className="small fw-bold">
                        Collection Pages Ranking Page 1
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <div className="heading fontWeight700 text-dark">
                        10% → 38%
                      </div>
                      <div className="small fw-bold">
                        Organic Revenue Share
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
                Get Your Free{" "}
                <span className="text_red">Shopify SEO Audit</span>
              </h2>
              <p className="customText mt-3">
                Find out exactly what is holding your Shopify store back from
                ranking — canonical issues, speed problems, thin collection
                pages, missing schema, or weak internal linking.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Audit My
                  Shopify Store for Free
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
                  Request Your Free Shopify SEO Audit
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
        title={"Frequently Asked Questions about Shopify SEO"}
        description={
          "Everything you need to know about SEO for your Shopify store."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more ecommerce SEO and digital growth services from SIB Infotech."
        }
        links={[
          {
            title: "WooCommerce SEO Services",
            href: "/woocommerce-seo-services",
            description:
              "Grow organic sales for WooCommerce stores with ecommerce-specific SEO strategies.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large ecommerce websites and multi-location brands.",
          },
          {
            title: "Conversion Rate Optimization for Shopify",
            href: "/conversion-rate-optimization",
            description:
              "Turn more Shopify traffic into sales with data-driven CRO programmes.",
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

export default ShopifySeoMgt;
