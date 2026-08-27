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
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <SeoDelhiMgt />
    </CustomLayout>
  );
}
