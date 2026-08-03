import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import AppStoreOptimizationMgt from "@/comps/AppStoreOptimization/AppStoreOptimizationMgt";

export default function AppStoreOptimization() {
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
        name: "App Store Optimisation",
        item: "https://www.sibinfotech.com/app-store-optimization/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "App Store Optimisation (ASO) Services India",
    url: "https://www.sibinfotech.com/app-store-optimization/",
    description:
      "Data-driven App Store and Google Play optimisation services. Keyword research, metadata optimisation, visual asset testing, rating management, and conversion rate improvement for mobile apps.",
    serviceType: "App Store Optimisation",
    keywords:
      "app store optimisation India, ASO services India, app store SEO, Google Play optimisation, iOS App Store ranking, mobile app visibility",
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
      <title>App Store Optimisation India | ASO Services | SIB Infotech</title>
      <meta
        name="description"
        content="Boost your app downloads with expert ASO services in India. App Store and Google Play optimisation by SIB Infotech. 18+ years experience. Free ASO audit."
      />
      <meta
        name="keywords"
        content="app store optimisation India, ASO services India, app store SEO, Google Play optimisation, iOS App Store ranking, mobile app visibility, app ranking factors, keyword optimisation for apps, app title optimisation, app description, app screenshots, review management, conversion rate optimisation for apps, app store algorithm"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/app-store-optimization/"
      />
      <meta
        property="og:title"
        content="App Store Optimisation India | ASO Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Boost your app downloads with expert ASO services in India. App Store and Google Play optimisation by SIB Infotech. 18+ years experience. Free ASO audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/app-store-optimization/"
      />
      <meta
        property="twitter:title"
        content="App Store Optimisation India | ASO Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Boost your app downloads with expert ASO services in India. App Store and Google Play optimisation by SIB Infotech. 18+ years experience. Free ASO audit."
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
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <AppStoreOptimizationMgt />
    </CustomLayout>
  );
}
