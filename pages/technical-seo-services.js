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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is technical SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical SEO optimises a website's infrastructure so search engines can efficiently crawl, render, index, and rank its pages. It covers Core Web Vitals, crawlability, JavaScript rendering, structured data, and site architecture.",
        },
      },
      {
        "@type": "Question",
        name: "What are the Core Web Vitals targets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google's targets are LCP under 2.5 seconds, INP under 200ms, and CLS under 0.1. We audit and improve all three metrics as part of every technical SEO engagement.",
        },
      },
      {
        "@type": "Question",
        name: "Do you fix JavaScript SEO issues?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We audit sites built with React, Angular, Next.js, and Vue for rendering challenges, identify unindexed content, and provide SSR or SSG implementation recommendations.",
        },
      },
    ],
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
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
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
      <TechnicalSeoMgt />
    </CustomLayout>
  );
}
