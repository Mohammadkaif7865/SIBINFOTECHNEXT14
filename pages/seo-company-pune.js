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
        item: "https://www.sibinfotech.com/seo-company-mumbai",
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


  const metaTags = (
    <>
      <title>SEO Company in Pune | IT & Startup SEO | SIB Infotech</title>
      <meta
        name="description"
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 20+ years of experience. Page-1 rankings. Free Pune SEO audit."
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
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 20+ years of experience. Page-1 rankings. Free Pune SEO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
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
        content="Expert SEO company in Pune for IT companies, startups, and SMEs. Google Premier Partner. 20+ years of experience. Page-1 rankings. Free Pune SEO audit."
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
      <SeoPuneMgt />
    </CustomLayout>
  );
}
