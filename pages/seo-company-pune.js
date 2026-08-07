import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoPuneMgt from "@/comps/SeoPune/SeoPuneMgt";

export default function SeoCompanyPune() {
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
        name: "SEO Company in Pune",
        item: "https://www.sibinfotech.com/seo-company-pune/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Pune",
    url: "https://www.sibinfotech.com/seo-company-pune/",
    description:
      "Comprehensive SEO services for Pune IT companies, startups, and SMEs. Technical SEO, on-page optimisation, local SEO, content marketing, and AI SEO. Flexible packages from Rs. 20,000/month.",
    serviceType: "Search Engine Optimisation",
    keywords:
      "SEO company in Pune, SEO agency Pune, IT company SEO Pune, startup SEO Pune, local SEO Pune",
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
        name: "How much does SEO cost for a Pune business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our Pune SEO packages start from Rs. 20,000 per month for small and local businesses. Mid-size IT companies typically invest Rs. 40,000 to Rs. 80,000 per month.",
        },
      },
      {
        "@type": "Question",
        name: "Is SIB Infotech a good choice for Pune IT companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We have specific experience in SEO for IT companies, SaaS businesses, and software service providers and understand B2B decision-maker keywords.",
        },
      },
      {
        "@type": "Question",
        name: "How long before we see SEO results in Pune?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Initial ranking improvements are typically visible within 3 months. Meaningful organic traffic growth usually develops between months 4 and 6.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer local SEO for Pune retail businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our local SEO service includes Google Business Profile optimisation, local citation management, review strategy, and geo-targeted content.",
        },
      },
      {
        "@type": "Question",
        name: "Can SIB Infotech work with Pune-based startups on a budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer flexible engagement models for early-stage Pune startups prioritising high-ROI quick wins within constrained budgets.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between hiring an SEO agency versus an in-house SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An agency provides access to a full team of specialists for the cost of a single in-house hire. SIB Infotech brings 18 years of expertise and enterprise-grade tools to every engagement.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>SEO Company in Pune | IT & Startup SEO | SIB Infotech</title>
      <meta
        name="description"
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 18+ years of experience. Page-1 rankings. Free Pune SEO audit."
      />
      <meta
        name="keywords"
        content="SEO company in Pune, SEO agency Pune, best SEO company Pune, digital marketing agency Pune, SEO services Pune, SEO for startups Pune, organic traffic Pune, local SEO Pune, IT company SEO Pune, Google Business Profile Pune, content marketing, keyword research, Google Premier Partner India, startup SEO"
      />


      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-company-pune/"
      />
      <meta
        property="og:title"
        content="SEO Company in Pune | IT & Startup SEO | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 18+ years of experience. Page-1 rankings. Free Pune SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-company-pune/"
      />
      <meta
        property="twitter:title"
        content="SEO Company in Pune | IT & Startup SEO | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 18+ years of experience. Page-1 rankings. Free Pune SEO audit."
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
      <SeoPuneMgt />
    </CustomLayout>
  );
}
