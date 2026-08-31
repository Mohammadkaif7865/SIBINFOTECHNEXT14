import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import WhiteLabelSeoMgt from "@/comps/WhiteLabelSeo/WhiteLabelSeoMgt";

export default function WhiteLabelSeoServices() {
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
        name: "White Label SEO Services",
        item: "https://www.sibinfotech.com/white-label-seo-services",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "White Label SEO Services India",
    url: "https://www.sibinfotech.com/white-label-seo-services",
    description:
      "NDA-protected white label SEO for agencies. Full-service SEO delivery under your brand including technical audits, on-page optimisation, link building, branded reports, and dedicated account management. Trusted by 100+ agencies.",
    serviceType: "White Label SEO",
    keywords:
      "white label SEO services India, SEO reseller India, private label SEO, reseller SEO program, white label link building",
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
      url: "https://www.sibinfotech.com/contact-us",
    },
  };

  const metaTags = (
    <>
      <title>White Label SEO Services India | SEO Reseller | SIB Infotech</title>
      <meta
        name="description"
        content="Offer world-class SEO under your brand. NDA-protected white label SEO from SIB Infotech. Trusted by 100+ agencies. Scalable, transparent, and results-driven."
      />
      <meta
        name="keywords"
        content="white label SEO services India, SEO reseller India, white label SEO agency, private label SEO, reseller SEO program, white label SEO reports, NDA SEO services, branded SEO reports, SEO fulfillment partner, scalable SEO, white label link building, white label content"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/white-label-seo-services"
      />
      <meta
        property="og:title"
        content="White Label SEO Services India | SEO Reseller | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Offer world-class SEO under your brand. NDA-protected white label SEO from SIB Infotech. Trusted by 100+ agencies. Scalable, transparent, and results-driven."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/white-label-seo-services"
      />
      <meta
        property="twitter:title"
        content="White Label SEO Services India | SEO Reseller | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Offer world-class SEO under your brand. NDA-protected white label SEO from SIB Infotech. Trusted by 100+ agencies. Scalable, transparent, and results-driven."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/white-label-digital-marketing-services.webp"
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
      <WhiteLabelSeoMgt />
    </CustomLayout>
  );
}
