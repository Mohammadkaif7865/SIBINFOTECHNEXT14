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
        item: "https://www.sibinfotech.com/seo-company-mumbai",
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
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
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
      <SeoBangaloreMgt />
    </CustomLayout>
  );
}
