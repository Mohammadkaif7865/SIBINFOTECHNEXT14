import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import CaseStudiesMgt from "@/comps/CaseStudies/CaseStudiesMgt";

export default function CaseStudies() {
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
        name: "Case Studies",
        item: "https://www.sibinfotech.com/case-studies/",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Client Results | SIB Infotech Case Studies",
    url: "https://www.sibinfotech.com/case-studies/",
    description:
      "Real SEO and digital marketing results for 850+ clients across 40+ countries. Case studies in FMCG, B2B manufacturing, ecommerce, healthcare, real estate, and international markets.",
    publisher: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
  };

  const metaTags = (
    <>
      <title>Case Studies | Real SEO & Marketing Results | SIB Infotech</title>
      <meta
        name="description"
        content="See how SIB Infotech has grown traffic, leads and revenue for 850+ clients. Real data. Real growth stories. Find a case study for your industry."
      />
      <meta
        name="keywords"
        content="SIB Infotech case studies, SEO results India, digital marketing success stories, agency case studies, SEO agency results, Google ranking case study, organic traffic growth, lead generation results, ROAS case study, page 1 ranking, domain authority improvement, conversion rate optimisation results, content marketing ROI"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/case-studies/" />
      <meta
        property="og:title"
        content="Case Studies | Real SEO & Marketing Results | SIB Infotech"
      />
      <meta
        property="og:description"
        content="See how SIB Infotech has grown traffic, leads and revenue for 850+ clients. Real data. Real growth stories. Find a case study for your industry."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/case-studies/" />
      <meta
        property="twitter:title"
        content="Case Studies | Real SEO & Marketing Results | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="See how SIB Infotech has grown traffic, leads and revenue for 850+ clients. Real data. Real growth stories. Find a case study for your industry."
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
          __html: JSON.stringify(collectionSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <CaseStudiesMgt />
    </CustomLayout>
  );
}
