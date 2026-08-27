import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import TechnicalSeoMgt from "@/comps/TechnicalSeo/TechnicalSeoMgt";

export default function TechnicalSeoServices() {
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
        name: "Technical SEO Services",
        item: "https://www.sibinfotech.com/technical-seo-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Technical SEO Services India",
    url: "https://www.sibinfotech.com/technical-seo-services/",
    description:
      "Expert technical SEO: Core Web Vitals (LCP/INP/CLS), crawl budget optimisation, JavaScript SEO, schema markup, site architecture, hreflang, XML sitemap, and page speed optimisation for Indian businesses.",
    serviceType: "Technical SEO",
    keywords:
      "technical SEO services India, Core Web Vitals optimisation, JavaScript SEO, crawl budget, schema markup, structured data, page speed optimisation",
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
        Technical SEO Services India | Core Web Vitals | SIB Infotech
      </title>
      <meta
        name="description"
        content="Expert technical SEO services in India. Core Web Vitals, crawlability, JavaScript SEO & schema markup. Google Premier Partner. Free technical SEO audit."
      />
      <meta
        name="keywords"
        content="technical SEO services India, technical SEO company India, technical SEO agency, Core Web Vitals optimisation, JavaScript SEO, website technical SEO, crawl budget, log file analysis, JavaScript rendering, server-side rendering, schema markup, canonical tags, hreflang, XML sitemap, page speed optimisation, structured data"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/technical-seo-services/"
      />
      <meta
        property="og:title"
        content="Technical SEO Services India | Core Web Vitals | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Expert technical SEO services in India. Core Web Vitals, crawlability, JavaScript SEO & schema markup. Google Premier Partner. Free technical SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/technical-seo-services/"
      />
      <meta
        property="twitter:title"
        content="Technical SEO Services India | Core Web Vitals | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Expert technical SEO services in India. Core Web Vitals, crawlability, JavaScript SEO & schema markup. Google Premier Partner. Free technical SEO audit."
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
      <TechnicalSeoMgt />
    </CustomLayout>
  );
}
