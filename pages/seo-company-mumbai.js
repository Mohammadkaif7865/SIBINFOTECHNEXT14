import { CustomLayout } from "@/comps/CustomLayout";
import Seo from "@/comps/seo-template/Seo";
import "aos/dist/aos.css";

export default function SearchEngineOptimizationServices() {
  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sibinfotech.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Company in Mumbai",
        item: "https://www.sibinfotech.com/seo-company-mumbai",
      },
    ],
  };
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Search Engine Optimization Services in India",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".hero-intro", ".faq-section", ".seo-services-summary"],
    },
    url: "https://www.sibinfotech.com/seo-company-mumbai",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.sibinfotech.com/seo-company-mumbai/#service",
    name: "SEO Services in Mumbai",
    serviceType: "Search Engine Optimization",
    url: "https://www.sibinfotech.com/seo-company-mumbai",
    description:
      "SIB Infotech is a Google Premier Partner SEO company in Mumbai delivering on-page SEO, technical SEO, link building, local SEO and AI search optimization for businesses across Mumbai, Navi Mumbai and Thane.",
    areaServed: [
      {
        "@type": "City",
        name: "Mumbai",
        "@id": "https://www.wikidata.org/wiki/Q1156",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Maharashtra",
        },
      },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Thane" },
      { "@type": "Country", name: "India" },
    ],
    // TODO: re-enable ONLY with your real, verifiable Google Business Profile
    // numbers. Invented ratings breach Google's review-snippet policy.
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: "<real average>",
    //   reviewCount: "<real count>",
    //   bestRating: "5",
    //   worstRating: "1",
    // },
    provider: {
      "@id": "https://www.sibinfotech.com/#localbusiness",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "SEO Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "On-Page SEO Services",
            url: "https://www.sibinfotech.com/on-page-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Off-Page SEO Services",
            url: "https://www.sibinfotech.com/off-page-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Commerce SEO Services",
            url: "https://www.sibinfotech.com/e-commerce-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile SEO Services",
            url: "https://www.sibinfotech.com/mobile-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Outsourcing Services",
            url: "https://www.sibinfotech.com/search-engine-optimization-outsourcing-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO Services",
            url: "https://www.sibinfotech.com/local-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Penalty Recovery Services",
            url: "https://www.sibinfotech.com/google-penalty-recovery",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "International & Multilingual SEO Services",
            url: "https://www.sibinfotech.com/multilingual-seo-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "YouTube SEO Services",
            url: "https://www.sibinfotech.com/youtube-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Store Optimization (ASO) Services",
            url: "https://www.sibinfotech.com/app-store-optimization",
          },
        },
      ],
    },
  };
  const metaTags = (
    <>
      {/*
        The hero background is a CSS background-image, so the browser cannot
        discover it until the stylesheet has parsed - which made it the LCP
        element and left LCP very late on mobile. Preloading it starts the
        download immediately. Page-scoped on purpose: other pages use
        different hero images, so this does not belong in _document.
      */}
      <link
        rel="preload"
        as="image"
        href="/assets/images/banner-white-lable.webp"
        type="image/webp"
        fetchPriority="high"
      />
      <title>Top SEO Company in Mumbai | Best SEO Agency &amp; SEO Services | SIB Infotech</title>
      <meta
        name="description"
        content="SIB Infotech is a top SEO company in Mumbai offering result-driven SEO services in Mumbai since 2005. Google Premier Partner SEO agency in Mumbai with 20+ years experience and 1000+ brands ranked. Serving Andheri, Bandra, BKC, Malad, Powai, Lower Parel & Navi Mumbai. Free SEO audit, no lock-in contracts."
      />
      <meta
        name="keywords"
        content="seo company in mumbai, seo services in mumbai, seo agency in mumbai, best seo company in mumbai, seo services company in mumbai, seo expert in mumbai, top seo company in mumbai, best seo agency in mumbai, best seo services in mumbai, search engine optimization company in mumbai, top seo agency in mumbai, seo experts in mumbai, search engine optimization services in mumbai, seo firm in mumbai, seo consultant in mumbai, affordable seo services mumbai, local seo company mumbai, seo company in andheri, seo company in bandra, seo agency navi mumbai"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/seo-company-mumbai"
      />
      <meta
        property="og:title"
        content="Top SEO Company in Mumbai | Best SEO Agency &amp; SEO Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a top SEO company in Mumbai offering result-driven SEO services in Mumbai since 2005. Google Premier Partner SEO agency in Mumbai with 20+ years experience and 1000+ brands ranked. Serving Andheri, Bandra, BKC, Malad, Powai, Lower Parel & Navi Mumbai. Free SEO audit, no lock-in contracts."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/seo-company-mumbai.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/seo-company-mumbai"
      />
      <meta
        property="twitter:title"
        content="Top SEO Company in Mumbai | Best SEO Agency &amp; SEO Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is a top SEO company in Mumbai offering result-driven SEO services in Mumbai since 2005. Google Premier Partner SEO agency in Mumbai with 20+ years experience and 1000+ brands ranked. Serving Andheri, Bandra, BKC, Malad, Powai, Lower Parel & Navi Mumbai. Free SEO audit, no lock-in contracts."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/seo-company-mumbai.webp"
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
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <Seo />
    </CustomLayout>
  );
}
