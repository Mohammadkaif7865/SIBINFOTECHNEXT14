import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoHyderabadMgt from "@/comps/SeoHyderabad/SeoHyderabadMgt";

export default function SeoCompanyHyderabad() {
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
        name: "SEO Company in Hyderabad",
        item: "https://www.sibinfotech.com/seo-company-hyderabad/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Services in Hyderabad",
    url: "https://www.sibinfotech.com/seo-company-hyderabad/",
    description:
      "Specialist SEO for Hyderabad's pharmaceutical, IT (HITEC City), and ecommerce sectors. Technical SEO, on-page optimisation, local SEO, pharma-compliant content strategy, and AI SEO.",
    serviceType: "Search Engine Optimisation",
    keywords:
      "SEO company in Hyderabad, pharma SEO Hyderabad, IT company SEO Hyderabad, local SEO Hyderabad, ecommerce SEO",
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
      <title>SEO Company in Hyderabad | Pharma & IT SEO | SIB Infotech</title>
      <meta
        name="description"
        content="Top SEO company in Hyderabad for pharma, IT, and ecommerce businesses. Google Premier Partner. 18+ years of experience. Proven page-1 rankings. Free audit."
      />
      <meta
        name="keywords"
        content="SEO company in Hyderabad, SEO agency Hyderabad, best SEO company Hyderabad, digital marketing Hyderabad, SEO services Hyderabad, pharma SEO Hyderabad, organic traffic Hyderabad, local SEO Hyderabad, pharma SEO, IT company SEO Hyderabad, Google Business Profile, technical SEO, link building, Google Premier Partner"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-company-hyderabad/"
      />
      <meta
        property="og:title"
        content="SEO Company in Hyderabad | Pharma & IT SEO | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Top SEO company in Hyderabad for pharma, IT, and ecommerce businesses. Google Premier Partner. 18+ years of experience. Proven page-1 rankings. Free audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-company-hyderabad/"
      />
      <meta
        property="twitter:title"
        content="SEO Company in Hyderabad | Pharma & IT SEO | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Top SEO company in Hyderabad for pharma, IT, and ecommerce businesses. Google Premier Partner. 18+ years of experience. Proven page-1 rankings. Free audit."
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
      <SeoHyderabadMgt />
    </CustomLayout>
  );
}
