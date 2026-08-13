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

const WooCommerceSeoMgt = () => {
  const wooCommerceServices = [
    {
      title: `Technical SEO for <br class="d-none d-md-lg "/> WooCommerce`,
      description:
        "Full technical audit covering crawl budget management, canonicalisation, noindex implementation for low-value pages, robots.txt optimisation, XML sitemap verification, Core Web Vitals improvement, and plugin performance assessment.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `WooCommerce Plugin <br class="d-none d-md-lg "/> SEO Stack`,
      description:
        "We configure your WooCommerce SEO plugin (Yoast SEO Premium or RankMath Pro) for maximum effectiveness. We do not just install and activate: we configure every setting according to WooCommerce-specific best practices and validate output with Google's Rich Results Test.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.webp",
    },
    {
      title: `Category and Product <br class="d-none d-md-lg "/> Page Optimisation`,
      description:
        "We optimise category pages with unique SEO content, keyword-aligned titles, and breadcrumb navigation. Product pages receive title structure optimisation, unique description guidelines, and schema markup implementation.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `WooCommerce <br class="d-none d-md-lg "/> Site Speed`,
      description:
        "Slow WooCommerce stores lose both rankings and conversions. We improve page speed through image compression, caching implementation, database optimisation, JavaScript deferral, and CDN setup recommendations. Target: achieving a Google PageSpeed Insights score above 80 on mobile.",
      img: "/assets/images/seo/White-Label-Mobile-SEO 1.webp",
    },
    {
      title: `Product Schema <br class="d-none d-md-lg "/> Implementation`,
      description:
        "We implement Product schema with all recommended fields: name, description, sku, brand, price, priceCurrency, availability, rating, reviewCount, and image. Correct Product schema improves Google Shopping feed quality, enables price and availability rich results, and supports Google's product knowledge graph.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
    {
      title: `Content Marketing <br class="d-none d-md-lg "/> for WooCommerce`,
      description:
        "Buying guide blog posts are among the most effective organic traffic drivers for ecommerce stores. We build topical content clusters around your product categories, targeting the informational queries that buyers use before they are ready to purchase.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
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
    headingStart: "Why WooCommerce Stores Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "WordPress-Native SEO That Drives Rankings and Revenue",
    cardTitle: "WooCommerce Flexibility, Expertly Managed",
    cardDescription:
      "WooCommerce's flexibility creates plugin conflicts, crawl waste, and database bloat that generic agencies miss. SIB Infotech combines 18+ years of organic growth strategy with deep WordPress and WooCommerce technical knowledge.",
    buttonText: "Get Your Free WooCommerce SEO Audit",
  };

  const rightBoxContent = {
    heading: "The WooCommerce SEO Agency That Understands WordPress",
    description:
      "WooCommerce is the world's most flexible ecommerce platform — but that flexibility creates real SEO complexity. Our WooCommerce SEO team combines WordPress-native technical expertise with 18+ years of organic growth strategy to help stores rank, convert, and grow.",
  };

  const power_data = [
    {
      title: "WordPress-Native WooCommerce Expertise",
      description:
        "Our team works directly with WooCommerce's plugin ecosystem, database architecture, and theme system — not generic ecommerce SEO applied to WordPress.",
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
      title: "WooCommerce Audit",
      description: `<p>Technical, on-page, content, and plugin performance audit of your WordPress store.</p>`,
    },
    {
      title: "Crawl Budget Strategy",
      description: `<p>noindex, canonical, and parameter handling for all low-value URL types including tags, filters, and empty categories.</p>`,
    },
    {
      title: "Plugin Configuration",
      description: `<p>Yoast or RankMath configured to WooCommerce-specific best practices with rich results validation.</p>`,
    },
    {
      title: "Category Page Optimisation",
      description: `<p>Content and technical work on all category pages to capture category-level keyword rankings.</p>`,
    },
    {
      title: "Product Page Template",
      description: `<p>SEO-optimised product page structure and description guidelines applied across your catalogue.</p>`,
    },
    {
      title: "Schema Implementation",
      description: `<p>Product, BreadcrumbList, and FAQ schema implemented across all eligible pages.</p>`,
    },
    {
      title: "Content Marketing",
      description: `<p>Monthly blog content targeting buyer-intent informational queries that feed organic traffic before purchase.</p>`,
    },
  ];

  const pluginsData = [
    {
      title: "Yoast SEO Premium",
      description:
        "The most widely used WordPress SEO plugin, with WooCommerce-specific features for product and category page optimisation.",
    },
    {
      title: "RankMath Pro",
      description:
        "A powerful alternative with built-in schema markup, keyword tracking, and WooCommerce integration.",
    },
    {
      title: "WP Rocket",
      description:
        "The leading WordPress caching and performance plugin, essential for Core Web Vitals improvement.",
    },
    {
      title: "Smush Pro / ShortPixel",
      description:
        "Image compression at scale, critical for WooCommerce stores with large product libraries.",
    },
    {
      title: "Advanced Custom Fields",
      description:
        "Used for custom product data fields that support rich schema markup.",
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "Is WooCommerce SEO harder than Shopify SEO?",
      answer: `<p>Neither is harder — they are different. WooCommerce offers more flexibility but creates more surface area for SEO problems (plugin conflicts, crawl waste, database performance). Shopify has fixed limitations that require workarounds. Both benefit significantly from platform-specific expertise.</p>`,
    },
    {
      id: "faq2",
      question: "Do I need Yoast SEO for WooCommerce?",
      answer: `<p>A dedicated SEO plugin like Yoast SEO or RankMath is strongly recommended for any WooCommerce store. It handles meta output, XML sitemaps, schema markup, and breadcrumbs more efficiently than manual implementation. We configure whichever plugin you prefer to WooCommerce-specific best practices.</p>`,
    },
    {
      id: "faq3",
      question: "How do I handle SEO for WooCommerce product variations?",
      answer: `<p>Product variations in WooCommerce (e.g., a shirt in 5 colours and 4 sizes) create URL parameter combinations that can generate hundreds of near-duplicate pages. We implement canonical tags pointing all variation URLs to the parent product page, consolidating ranking signals and preventing crawl budget waste.</p>`,
    },
    {
      id: "faq4",
      question: "Can you improve my WooCommerce store's Google PageSpeed score?",
      answer: `<p>Yes. WooCommerce site speed is a specific area of expertise. We address all common WooCommerce performance issues: unoptimised images, plugin script bloat, database query inefficiency, lack of caching, and missing CDN configuration. Our standard target is a mobile PageSpeed Insights score above 80.</p>`,
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
                  WooCommerce SEO Services That Turn Your WordPress Store{" "}
                  <span className="text_red fontWeight700">
                    into a Lead Machine
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
                  WooCommerce is the world's most flexible ecommerce platform,
                  but flexibility without SEO expertise leads to bloated sites,
                  crawl waste, and missed ranking opportunities. SIB Infotech's
                  WooCommerce SEO service optimises your WordPress store from the
                  ground up for organic growth.
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
                  Get Your Free WooCommerce SEO Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    WooCommerce SEO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"WooCommerce SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free WooCommerce SEO Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              WooCommerce SEO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"WooCommerce SEO Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                WooCommerce SEO: The Flexibility{" "}
                <span className="text_red">Advantage</span>
              </h2>
              <p className="customText mt-3">
                WooCommerce powers over 6.5 million online stores globally,
                making it the most widely used ecommerce platform in the world.
                Its flexibility is unmatched — but that flexibility creates SEO
                complexity that generic agencies consistently underestimate.
                Plugin conflicts, bloated databases, unoptimised product images,
                poor crawl budget management, and duplicate content from product
                variations are all common issues that suppress rankings for
                WooCommerce stores.
              </p>
              <p className="customText mt-3">
                SIB Infotech has 18+ years of ecommerce SEO experience and deep
                expertise in WordPress and WooCommerce. Our WooCommerce SEO
                service addresses every layer of the platform — from database
                queries that slow crawl, to category page content strategy, to
                product schema implementation — delivering rankings and revenue.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech on WooCommerce?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>WordPress-Native Expertise:</strong> Built around
                    WooCommerce's plugin ecosystem and architecture.
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

      {/* WooCommerce-Specific SEO Challenges */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                WooCommerce-Specific SEO{" "}
                <span className="text_red">Challenges We Solve</span>
              </h2>
              <p className="customText mt-3">
                WooCommerce's flexibility creates SEO problems that generic
                agencies consistently underestimate:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our WooCommerce SEO Services */}
      <Solution
        hideImages
        heading={"Our WooCommerce SEO Services"}
        discription={
          "SIB Infotech delivers a complete WooCommerce SEO framework built around WordPress, the platform's plugin ecosystem, and revenue potential."
        }
        data={wooCommerceServices}
      />

      {/* Key WooCommerce SEO Plugins */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Key WooCommerce SEO{" "}
                <span className="text_red">Plugins We Work With</span>
              </h2>
              <p className="customText mt-3">
                We configure and manage the plugins that matter for WordPress
                ecommerce SEO:
              </p>
            </div>
          </div>

          <div className="row g-4">
            {pluginsData.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="customCard h-100">
                  <h4 className="small_heading fontWeight600 mb-2">
                    <i className="fa-solid fa-puzzle-piece me-2 text_red"></i>
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
        title="Why Choose SIB Infotech for WooCommerce SEO"
        description_right="Choosing a WooCommerce SEO partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our WooCommerce SEO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to build durable organic revenue."
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
                <span className="text_red">WooCommerce SEO Audit</span>
              </h2>
              <p className="customText mt-3">
                Find out exactly what is holding your WooCommerce store back
                from ranking — crawl budget waste, plugin conflicts, duplicate
                variation content, weak category pages, or missing schema.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Audit My
                  WooCommerce Store for Free
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
                  Request Your Free WooCommerce SEO Audit
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
        title={"Frequently Asked Questions about WooCommerce SEO"}
        description={
          "Everything you need to know about SEO for your WooCommerce store."
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
            title: "Shopify SEO Services",
            href: "/shopify-seo-services",
            description:
              "Rank Shopify stores on page 1 with platform-specific SEO, speed, and schema optimisation.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix Core Web Vitals, crawlability, indexation, and schema with a dedicated technical SEO team.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn more WooCommerce traffic into sales with data-driven CRO programmes.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large ecommerce websites and multi-location brands.",
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

export default WooCommerceSeoMgt;
