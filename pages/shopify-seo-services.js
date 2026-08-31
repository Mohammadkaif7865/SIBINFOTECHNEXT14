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
        item: "https://www.sibinfotech.com/seo-company-mumbai",
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
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <ShopifySeoMgt />
    </CustomLayout>
  );
}
