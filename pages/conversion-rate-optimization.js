import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import ConversionRateOptimizationMgt from "@/comps/ConversionRateOptimization/ConversionRateOptimizationMgt";

export default function ConversionRateOptimization() {
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
        name: "Digital Marketing Services",
        item: "https://www.sibinfotech.com/digital-marketing-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Conversion Rate Optimisation",
        item: "https://www.sibinfotech.com/conversion-rate-optimization/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "CRO Services India – Conversion Rate Optimisation",
    url: "https://www.sibinfotech.com/conversion-rate-optimization/",
    description:
      "Systematic CRO using Hotjar heatmaps, VWO A/B testing, session recordings, and funnel analysis. Turn more existing traffic into leads, sales, and sign-ups without increasing ad spend.",
    serviceType: "Conversion Rate Optimisation",
    keywords:
      "CRO services India, conversion rate optimisation India, A/B testing services India, landing page optimisation, heatmap analysis, Hotjar, VWO",
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
      <title>
        CRO Services India | Conversion Rate Optimisation | SIB Infotech
      </title>
      <meta
        name="description"
        content="Boost conversions without increasing ad spend. SIB Infotech's CRO services use A/B testing, heatmaps & UX analysis to turn more visitors into customers. Free CRO audit."
      />
      <meta
        name="keywords"
        content="CRO services India, conversion rate optimisation India, CRO agency India, A/B testing services India, landing page optimisation India, CRO company India, A/B testing, multivariate testing, heatmaps, session recordings, user behaviour analysis, landing page optimisation, funnel analysis, click maps, VWO, Hotjar, Google Optimize, conversion audit, UX optimisation, bounce rate reduction, cart abandonment, checkout optimisation, revenue per visitor"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/conversion-rate-optimization/"
      />
      <meta
        property="og:title"
        content="CRO Services India | Conversion Rate Optimisation | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Boost conversions without increasing ad spend. SIB Infotech's CRO services use A/B testing, heatmaps & UX analysis to turn more visitors into customers. Free CRO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/conversion-rate-optimization/"
      />
      <meta
        property="twitter:title"
        content="CRO Services India | Conversion Rate Optimisation | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Boost conversions without increasing ad spend. SIB Infotech's CRO services use A/B testing, heatmaps & UX analysis to turn more visitors into customers. Free CRO audit."
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
      <ConversionRateOptimizationMgt />
    </CustomLayout>
  );
}
