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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does an SEO audit include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A comprehensive SEO audit covers technical health (crawlability, indexation, Core Web Vitals, schema, site architecture), on-page optimisation (titles, meta descriptions, keyword mapping, content quality), off-page signals (backlink profile and anchor text), and competitor benchmarking.",
        },
      },
      {
        "@type": "Question",
        name: "How long does an SEO audit take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most SEO audits are completed within 7 to 14 days depending on website size. Large enterprise websites with thousands of URLs may take 2 to 3 weeks for a complete technical crawl and prioritised roadmap.",
        },
      },
      {
        "@type": "Question",
        name: "Is your SEO audit free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech offers a free initial SEO audit and discovery session that includes a complete SEO analysis, competitor analysis, performance and gap analysis, and channel-specific SEO needs. There are no lock-in contracts.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need an SEO audit before starting an SEO campaign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An SEO audit is the essential first step of any campaign. It reveals technical issues blocking indexation, keyword opportunities, competitor gaps, and content weaknesses — so your budget is spent on fixes that actually move rankings.",
        },
      },
      {
        "@type": "Question",
        name: "Can you fix the issues found in the audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech provides complete technical, on-page, and off-page SEO services. If you choose to engage us after the audit, our team implements the roadmap directly — or your in-house team can use our developer-ready implementation briefs.",
        },
      },
    ],
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
      <SeoAuditServicesMgt />
    </CustomLayout>
  );
}
