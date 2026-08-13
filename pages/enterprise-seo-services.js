import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import EnterpriseSeoMgt from "@/comps/EnterpriseSeo/EnterpriseSeoMgt";

export default function EnterpriseSeoServices() {
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
        name: "Enterprise SEO Services",
        item: "https://www.sibinfotech.com/enterprise-seo-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Enterprise SEO Services India",
    url: "https://www.sibinfotech.com/enterprise-seo-services/",
    description:
      "Enterprise SEO for large Indian brands with 10,000+ URLs. Crawl budget optimisation, JavaScript SEO (React/Angular/Vue), scalable on-page architecture, multi-location SEO, log file analysis, and enterprise reporting dashboards. Dedicated team.",
    serviceType: "Enterprise SEO",
    keywords:
      "enterprise SEO company India, large scale SEO India, corporate SEO agency, JavaScript SEO, crawl budget optimisation",
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
        name: "What is enterprise SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enterprise SEO is delivering search optimisation for large, complex websites with 10,000+ URLs, multiple product lines, multi-location presence, and cross-functional stakeholder teams.",
        },
      },
      {
        "@type": "Question",
        name: "How does SIB Infotech handle JavaScript SEO for enterprise sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We audit JavaScript SEO using Google's URL Inspection tool, identify content not indexed due to client-side rendering, and provide SSR or SSG recommendations for React, Angular, Next.js, and Vue sites.",
        },
      },
      {
        "@type": "Question",
        name: "What reporting do enterprise clients receive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Enterprise clients receive organic revenue attribution reports, share of voice analysis, content performance by category, technical health trending, and executive-level dashboards connecting SEO to business outcomes.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>
        Enterprise SEO Services India | Scalable SEO | SIB Infotech
      </title>
      <meta
        name="description"
        content="Enterprise SEO for large Indian brands. Dedicated teams, advanced reporting & proven methodology for organic growth at scale. Google Premier Partner. Free consultation."
      />
      <meta
        name="keywords"
        content="enterprise SEO company India, enterprise SEO services India, large scale SEO India, corporate SEO agency, enterprise SEO for big brands, SEO for large websites, crawl budget optimisation, log file analysis, JavaScript SEO, scalable SEO methodology, enterprise content strategy, technical SEO at scale, multi-location SEO, enterprise reporting dashboards, dedicated SEO team"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/enterprise-seo-services/"
      />
      <meta
        property="og:title"
        content="Enterprise SEO Services India | Scalable SEO | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Enterprise SEO for large Indian brands. Dedicated teams, advanced reporting & proven methodology for organic growth at scale. Google Premier Partner. Free consultation."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/enterprise-seo-services/"
      />
      <meta
        property="twitter:title"
        content="Enterprise SEO Services India | Scalable SEO | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Enterprise SEO for large Indian brands. Dedicated teams, advanced reporting & proven methodology for organic growth at scale. Google Premier Partner. Free consultation."
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
      <EnterpriseSeoMgt />
    </CustomLayout>
  );
}
