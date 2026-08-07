import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoBangaloreMgt from "@/comps/SeoBangalore/SeoBangaloreMgt";

export default function SeoCompanyBangalore() {
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
        name: "SEO Company in Bangalore",
        item: "https://www.sibinfotech.com/seo-company-bangalore/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Bangalore",
    url: "https://www.sibinfotech.com/seo-company-bangalore/",
    description:
      "Comprehensive SEO services for Bangalore businesses including technical SEO, on-page optimisation, link building, local SEO, content marketing, and AI SEO. Google Premier Partner with 18+ years of proven results.",
    serviceType: "Search Engine Optimisation",
    keywords:
      "SEO company in Bangalore, SEO agency Bangalore, local SEO Bangalore, technical SEO, link building India",
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
        name: "How much does SEO cost for a Bangalore business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIB Infotech offers monthly SEO packages starting from Rs. 25,000 per month for local businesses, with enterprise-level campaigns ranging higher. Every engagement begins with a free audit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Bangalore clients see measurable ranking improvements within 3 to 4 months. Significant organic traffic growth typically becomes visible by month 6.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer local SEO for Bangalore businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our local SEO service for Bangalore includes Google Business Profile optimisation, local citation building, review management, and LocalBusiness schema implementation.",
        },
      },
      {
        "@type": "Question",
        name: "Can SIB Infotech help a Bangalore startup with SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We work with businesses at every stage. For startups, we prioritise high-ROI quick wins such as technical fixes, GBP optimisation, and long-tail content.",
        },
      },
      {
        "@type": "Question",
        name: "Does SIB Infotech handle SEO for IT companies in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We have extensive experience delivering SEO for IT companies, SaaS businesses, and technology service providers in Bangalore.",
        },
      },
      {
        "@type": "Question",
        name: "What makes SIB Infotech different from other SEO agencies in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIB Infotech is a Google Premier Partner with 18+ years of experience and a track record with enterprise clients including Airtel, Finolex, and Jindal Steel. We provide dedicated account management and report on actual business outcomes.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>SEO Company in Bangalore | 18+ Years | SIB Infotech</title>
      <meta
        name="description"
        content="Top-rated SEO company in Bangalore. Google Premier Partner with 18+ years of experience. Data-driven SEO for page-1 rankings. Get your free SEO audit."
      />
      <meta
        name="keywords"
        content="SEO company in Bangalore, SEO agency Bangalore, best SEO company Bangalore, digital marketing Bangalore, SEO services Bangalore, organic traffic Bangalore, local SEO Bangalore, Google Business Profile Bangalore, keyword rankings, technical SEO audit, on-page optimisation, link building India, Google Premier Partner"
      />


      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-company-bangalore/"
      />
      <meta
        property="og:title"
        content="SEO Company in Bangalore | 18+ Years | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Top-rated SEO company in Bangalore. Google Premier Partner with 18+ years of experience. Data-driven SEO for page-1 rankings. Get your free SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-company-bangalore/"
      />
      <meta
        property="twitter:title"
        content="SEO Company in Bangalore | 18+ Years | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Top-rated SEO company in Bangalore. Google Premier Partner with 18+ years of experience. Data-driven SEO for page-1 rankings. Get your free SEO audit."
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
      <SeoBangaloreMgt />
    </CustomLayout>
  );
}
