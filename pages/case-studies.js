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
    name: "Digital Marketing Case Studies with Real Results | SIB Infotech",
    url: "https://www.sibinfotech.com/case-studies/",
    description:
      "See real SEO, Google Ads and social media results from SIB Infotech clients. Every number comes from a live account, with screenshots.",
    publisher: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
  };

  const metaTags = (
    <>
      <title>
        Digital Marketing Case Studies with Real Results | SIB Infotech
      </title>
      <meta
        name="description"
        content="See real SEO, Google Ads and social media results from SIB Infotech clients. Every number comes from a live account, with screenshots."
      />
      <meta
        name="keywords"
        content="digital marketing case studies, SEO case studies, Google Ads case studies, PPC case studies India"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/case-studies/" />
      <meta
        property="og:title"
        content="Digital Marketing Case Studies with Real Results | SIB Infotech"
      />
      <meta
        property="og:description"
        content="See real SEO, Google Ads and social media results from SIB Infotech clients. Every number comes from a live account, with screenshots."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/case-studies/" />
      <meta
        property="twitter:title"
        content="Digital Marketing Case Studies with Real Results | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="See real SEO, Google Ads and social media results from SIB Infotech clients. Every number comes from a live account, with screenshots."
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
