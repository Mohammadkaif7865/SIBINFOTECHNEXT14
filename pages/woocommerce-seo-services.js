import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import WooCommerceSeoMgt from "@/comps/WooCommerceSeo/WooCommerceSeoMgt";

export default function WooCommerceSeoServices() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sibinfotech.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Services",
        item: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "E-Commerce SEO",
        item: "https://www.sibinfotech.com/e-commerce-seo-services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "WooCommerce SEO Services",
        item: "https://www.sibinfotech.com/woocommerce-seo-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "WooCommerce SEO Services India",
    url: "https://www.sibinfotech.com/woocommerce-seo-services/",
    description:
      "Specialist WooCommerce SEO fixing crawl budget waste, duplicate product variation content, plugin conflicts, category page SEO, image optimisation, and Product schema for WordPress ecommerce stores.",
    serviceType: "WooCommerce SEO / Ecommerce SEO",
    keywords:
      "WooCommerce SEO services, WooCommerce SEO India, WordPress ecommerce SEO, WooCommerce technical SEO, Yoast SEO WooCommerce",
    provider: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://www.sibinfotech.com/contact-us/",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is WooCommerce SEO harder than Shopify SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Neither is harder — they are different. WooCommerce offers more flexibility but creates more surface area for SEO problems (plugin conflicts, crawl waste, database performance). Shopify has fixed limitations that require workarounds. Both benefit significantly from platform-specific expertise.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need Yoast SEO for WooCommerce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dedicated SEO plugin like Yoast SEO or RankMath is strongly recommended for any WooCommerce store. It handles meta output, XML sitemaps, schema markup, and breadcrumbs more efficiently than manual implementation. We configure whichever plugin you prefer to WooCommerce-specific best practices.",
        },
      },
      {
        "@type": "Question",
        name: "How do I handle SEO for WooCommerce product variations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Product variations in WooCommerce (e.g., a shirt in 5 colours and 4 sizes) create URL parameter combinations that can generate hundreds of near-duplicate pages. We implement canonical tags pointing all variation URLs to the parent product page, consolidating ranking signals and preventing crawl budget waste.",
        },
      },
      {
        "@type": "Question",
        name: "Can you improve my WooCommerce store's Google PageSpeed score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WooCommerce site speed is a specific area of expertise. We address all common WooCommerce performance issues: unoptimised images, plugin script bloat, database query inefficiency, lack of caching, and missing CDN configuration. Our standard target is a mobile PageSpeed Insights score above 80.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>
        WooCommerce SEO Services India | WP Store SEO | SIB Infotech
      </title>
      <meta
        name="description"
        content="Specialist WooCommerce SEO services in India. Platform-specific SEO for WordPress stores. Google Premier Partner. 18+ years. Get your free WooCommerce SEO audit."
      />
      <meta
        name="keywords"
        content="WooCommerce SEO services, WooCommerce SEO India, WooCommerce SEO agency, WordPress ecommerce SEO, WooCommerce store optimisation, WooCommerce SEO expert, WooCommerce technical SEO, Yoast SEO WooCommerce, RankMath WooCommerce, product schema WooCommerce, category page SEO WordPress, WooCommerce site speed, WooCommerce crawl budget"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/woocommerce-seo-services/"
      />
      <meta
        property="og:title"
        content="WooCommerce SEO Services India | WP Store SEO | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Specialist WooCommerce SEO services in India. Platform-specific SEO for WordPress stores. Google Premier Partner. 18+ years. Get your free WooCommerce SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/woocommerce-seo-services/"
      />
      <meta
        property="twitter:title"
        content="WooCommerce SEO Services India | WP Store SEO | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Specialist WooCommerce SEO services in India. Platform-specific SEO for WordPress stores. Google Premier Partner. 18+ years. Get your free WooCommerce SEO audit."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <WooCommerceSeoMgt />
    </CustomLayout>
  );
}
