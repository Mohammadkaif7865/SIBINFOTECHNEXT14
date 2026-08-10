import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import ShopifySeoMgt from "@/comps/ShopifySeo/ShopifySeoMgt";

export default function ShopifySeoServices() {
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
        name: "Shopify SEO Services",
        item: "https://www.sibinfotech.com/shopify-seo-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Shopify SEO Services India",
    url: "https://www.sibinfotech.com/shopify-seo-services/",
    description:
      "Platform-specific SEO for Shopify stores. Canonical tag management for dual URLs, collection page optimisation, product page SEO, Core Web Vitals, app bloat auditing, and internal linking architecture.",
    serviceType: "Shopify SEO / Ecommerce SEO",
    keywords:
      "Shopify SEO company India, Shopify SEO agency, Shopify store SEO, Shopify ecommerce SEO, Shopify technical SEO, collection page SEO",
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
        name: "How is Shopify SEO different from WooCommerce SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shopify and WooCommerce both require ecommerce SEO but have different technical architectures. Shopify has specific challenges with duplicate URLs, fixed URL structures, and theme-based speed issues. WooCommerce offers more flexibility but requires more careful plugin management for SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help if my Shopify store already has an SEO app installed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Apps like SEO Manager and Smart SEO are useful tools but they do not replace a comprehensive SEO strategy. We audit your existing app settings, identify any conflicts or limitations, and build a full SEO strategy that uses your apps effectively alongside direct technical optimisation.",
        },
      },
      {
        "@type": "Question",
        name: "How many pages should I optimise first on a Shopify store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We prioritise in order of revenue potential: collection (category) pages first, then the top 20% of product pages by sales volume, then new collection pages for high-opportunity keywords, then the blog.",
        },
      },
      {
        "@type": "Question",
        name: "How long before Shopify SEO shows results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical fixes and collection page optimisations typically produce initial ranking improvements within 6 to 8 weeks. Meaningful organic traffic growth develops by month 4 to 5. Full organic revenue impact develops over 6 to 9 months.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer WooCommerce SEO as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer dedicated WooCommerce SEO services covering the platform's specific technical considerations and plugin ecosystem.",
        },
      },
      {
        "@type": "Question",
        name: "Does Shopify SEO help with Google Shopping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Shopify SEO work, particularly Product schema implementation, directly improves your Google Shopping feed quality. We also optimise product titles and descriptions using best practices shared between organic SEO and Google Shopping.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>
        Shopify SEO Company India | Shopify Store SEO | SIB Infotech
      </title>
      <meta
        name="description"
        content="Expert Shopify SEO in India. Platform-specific SEO for Shopify stores that drives organic revenue. Google Premier Partner. 18+ years experience. Free Shopify SEO audit."
      />
      <meta
        name="keywords"
        content="Shopify SEO company India, Shopify SEO agency India, Shopify SEO services, Shopify store SEO, Shopify ecommerce SEO, Shopify SEO expert, Shopify technical SEO, Shopify URL structure, Shopify collection page SEO, Shopify product page optimisation, Shopify schema markup, Shopify site speed, canonical tags Shopify, Liquid SEO, faceted navigation Shopify"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/shopify-seo-services/"
      />
      <meta
        property="og:title"
        content="Shopify SEO Company India | Shopify Store SEO | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Expert Shopify SEO in India. Platform-specific SEO for Shopify stores that drives organic revenue. Google Premier Partner. 18+ years experience. Free Shopify SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/shopify-seo-services/"
      />
      <meta
        property="twitter:title"
        content="Shopify SEO Company India | Shopify Store SEO | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Expert Shopify SEO in India. Platform-specific SEO for Shopify stores that drives organic revenue. Google Premier Partner. 18+ years experience. Free Shopify SEO audit."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
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
      <ShopifySeoMgt />
    </CustomLayout>
  );
}
