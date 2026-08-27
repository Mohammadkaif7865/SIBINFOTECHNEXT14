import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import SeoPackagesMgt from "@/comps/SeoPackages/SeoPackagesMgt";

export default function SeoPackages() {
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
        name: "SEO Packages",
        item: "https://www.sibinfotech.com/seo-packages/",
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SEO Packages India – Monthly SEO Plans",
    url: "https://www.sibinfotech.com/seo-packages/",
    description:
      "Transparent monthly SEO packages in India. Starter, Growth, and Enterprise plans with on-page, off-page, technical SEO, content, and monthly reporting. From Rs. 20,000/month.",
    brand: {
      "@id": "https://www.sibinfotech.com/#organization",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Starter SEO Package",
        description:
          "Up to 20 keywords, technical audit, 10 pages/month, 2 blog posts, 4 backlinks, local SEO, basic schema, monthly reporting.",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://www.sibinfotech.com/contact-us/",
      },
      {
        "@type": "Offer",
        name: "Growth SEO Package",
        description:
          "Up to 60 keywords, ongoing monthly audits, 25 pages/month, 6 blog posts, 10 backlinks, local SEO + 2 city pages, advanced schema, full campaign dashboard.",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://www.sibinfotech.com/contact-us/",
      },
      {
        "@type": "Offer",
        name: "Enterprise SEO Package",
        description:
          "Custom scope for large websites (10,000+ pages), multi-location businesses, and enterprise brands. Dedicated team allocation.",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: "https://www.sibinfotech.com/contact-us/",
      },
    ],
  };


  const metaTags = (
    <>
      <title>SEO Packages India | Monthly SEO Plans & Pricing | SIB Infotech</title>
      <meta
        name="description"
        content="Transparent SEO packages in India. Starter, Growth, and Enterprise plans with on-page, off-page, technical SEO, and monthly reporting. Get your free audit."
      />
      <meta
        name="keywords"
        content="SEO packages India, monthly SEO packages India, SEO pricing India, affordable SEO packages, SEO plans India, SEO packages Mumbai, SEO retainer, monthly SEO plan, on-page SEO included, link building package, technical SEO audit, keyword research, content creation, monthly reporting, SEO ROI, affordable SEO packages in Mumbai"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/seo-packages/" />
      <meta
        property="og:title"
        content="SEO Packages India | Monthly SEO Plans & Pricing | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Transparent SEO packages in India. Starter, Growth, and Enterprise plans with on-page, off-page, technical SEO, and monthly reporting. Get your free audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/seo-packages/" />
      <meta
        property="twitter:title"
        content="SEO Packages India | Monthly SEO Plans & Pricing | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Transparent SEO packages in India. Starter, Growth, and Enterprise plans with on-page, off-page, technical SEO, and monthly reporting. Get your free audit."
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
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <SeoPackagesMgt />
    </CustomLayout>
  );
}
