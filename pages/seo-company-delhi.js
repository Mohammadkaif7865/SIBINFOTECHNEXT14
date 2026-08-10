import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoDelhiMgt from "@/comps/SeoDelhi/SeoDelhiMgt";

export default function SeoCompanyDelhi() {
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
        name: "SEO Company in Delhi NCR",
        item: "https://www.sibinfotech.com/seo-company-delhi/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Delhi NCR",
    url: "https://www.sibinfotech.com/seo-company-delhi/",
    description:
      "Full-service SEO for Delhi NCR businesses including Delhi, Gurgaon, Noida, Faridabad and Ghaziabad. Local office. Technical SEO, on-page, link building, local SEO, and AI SEO services.",
    serviceType: "Search Engine Optimisation",
    keywords:
      "SEO company in Delhi, SEO agency Delhi NCR, SEO company Gurgaon, SEO company Noida, local SEO Delhi",
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
        name: "Does SIB Infotech have an office in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech has a Delhi office in addition to our Mumbai headquarters. Delhi NCR clients can meet our team in person.",
        },
      },
      {
        "@type": "Question",
        name: "How much does SEO cost in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our monthly packages start from Rs. 25,000 per month for local businesses. We also offer enterprise-level SEO for large Delhi businesses. Every engagement begins with a free SEO audit.",
        },
      },
      {
        "@type": "Question",
        name: "Can you help with SEO for both Delhi and Gurgaon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide SEO services across the entire Delhi NCR region, including Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to work in a competitive market like Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delhi is a competitive market so realistic timelines are 4 to 6 months for initial ranking improvements and 6 to 12 months for substantial organic traffic growth.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer Google Ads alongside SEO in Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech is a Google Premier Partner and manages Google Ads campaigns for Delhi businesses in addition to SEO.",
        },
      },
      {
        "@type": "Question",
        name: "Which industries do you serve in Delhi NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve businesses across all major Delhi NCR industries including real estate, retail, healthcare, education, manufacturing, FMCG, B2B services, legal, and e-commerce.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>SEO Company in Delhi NCR | Google Partner | SIB Infotech</title>
      <meta
        name="description"
        content="Leading SEO company in Delhi NCR with an office in Delhi. Google Premier Partner. 18+ years of experience. Transparent SEO for real business growth. Free audit."
      />
      <meta
        name="keywords"
        content="SEO company in Delhi, SEO agency Delhi NCR, best SEO company Delhi, digital marketing Delhi, SEO services Delhi NCR, SEO company Gurgaon, SEO company Noida, organic search Delhi, local SEO Delhi NCR, Google Business Profile Delhi, on-page SEO, technical SEO, link building, Google Premier Partner India, ecommerce SEO Delhi"
      />


      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-company-delhi/"
      />
      <meta
        property="og:title"
        content="SEO Company in Delhi NCR | Google Partner | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Leading SEO company in Delhi NCR with an office in Delhi. Google Premier Partner. 18+ years of experience. Transparent SEO for real business growth. Free audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-company-delhi/"
      />
      <meta
        property="twitter:title"
        content="SEO Company in Delhi NCR | Google Partner | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Leading SEO company in Delhi NCR with an office in Delhi. Google Premier Partner. 18+ years of experience. Transparent SEO for real business growth. Free audit."
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
      <SeoDelhiMgt />
    </CustomLayout>
  );
}
