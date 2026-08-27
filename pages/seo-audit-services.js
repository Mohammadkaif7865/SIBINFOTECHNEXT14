import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoAuditServicesMgt from "@/comps/SeoAuditServices/SeoAuditServicesMgt";

export default function SeoAuditServices() {
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
        name: "SEO Audit Services",
        item: "https://www.sibinfotech.com/seo-audit-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Audit Services",
    url: "https://www.sibinfotech.com/seo-audit-services/",
    description:
      "Professional SEO audit services in India covering technical SEO audit, on-page audit, off-page and link profile audit, competitor audit, keyword and SERP audit, and local SEO audit with a prioritised implementation roadmap.",
    serviceType: "Search Engine Optimisation Audit",
    keywords:
      "SEO audit services, SEO audit India, technical SEO audit, website audit service, SEO health check, competitor audit, backlink audit",
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
      <title>SEO Audit Services India | Free SEO Audit | SIB Infotech</title>
      <meta
        name="description"
        content="Professional SEO audit services in India covering technical, on-page, off-page, competitor, and local SEO audits. Google Premier Partner with 18+ years of experience. Get your free SEO audit."
      />
      <meta
        name="keywords"
        content="SEO audit services, SEO audit India, technical SEO audit, website audit service, SEO health check, on-page audit, off-page audit, competitor audit, backlink audit, free SEO audit, SIB Infotech"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-audit-services/"
      />
      <meta
        property="og:title"
        content="SEO Audit Services India | Free SEO Audit | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Professional SEO audit services in India covering technical, on-page, off-page, competitor, and local SEO audits. Get your free SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-audit-services/"
      />
      <meta
        property="twitter:title"
        content="SEO Audit Services India | Free SEO Audit | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Professional SEO audit services in India covering technical, on-page, off-page, competitor, and local SEO audits. Get your free SEO audit."
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
      <SeoAuditServicesMgt />
    </CustomLayout>
  );
}
