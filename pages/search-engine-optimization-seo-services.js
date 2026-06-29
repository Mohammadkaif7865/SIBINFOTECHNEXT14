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
        name: "SEO Services",
        item: "https://www.sibinfotech.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Service Company",
        item: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
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
    url: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.sibinfotech.com/search-engine-optimization-seo-services/#service",
    name: "Search Engine Optimization (SEO) Services",
    serviceType:
      " Search Engine Optimization, provider: SIB Infotech, areaServed: Mumbai, India",
    url: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
    description:
      "Enhance your online visibility and organic traffic with SIB Infotech's professional SEO services. Improve rankings, drive qualified traffic, and achieve long-term business growth through strategic search engine optimization.",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
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
      ],
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are search engine optimization services in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Search engine optimization services in India help businesses rank higher on Google through on-page optimization, technical SEO, link building, and content strategy. SIB Infotech provides end-to-end SEO services for businesses across 40+ countries.",
        },
      },
      {
        "@type": "Question",
        name: "How much do SEO services cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO services in India start from $250 per month at SIB Infotech, with flexible packages covering on-page SEO, off-page SEO, technical SEO, and local SEO. No long-term contracts.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best SEO company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIB Infotech is one of the top SEO companies in India, recognized as a Google Premier Partner (top 3% of agencies in India) with 20+ years of experience and 1000+ brands ranked.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between SEO, AEO, and GEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO improves Google rankings. AEO (Answer Engine Optimization) structures content for AI assistants and voice search. GEO (Generative Engine Optimization) ensures brand visibility inside AI-generated answers from ChatGPT, Gemini, and Google AI Overviews.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most businesses see SEO improvements within 60 to 90 days, with significant page 1 rankings in 4 to 6 months. Local SEO in Mumbai shows results faster.",
        },
      },
    ],
  };
  const metaTags = (
    <>
      <title>
        Search Engine Optimization Services in India | SEO Company in Mumbai |
        SIB Infotech
      </title>
      <meta
        name="description"
        content="Get result-driven search engine optimization services in India from SIB Infotech - Google Premier Partner with 20+ years experience. 1000+ brands ranked across 40+ countries. Free SEO audit. No lock-in contracts."
      />
      <meta
        name="keywords"
        content="search engine optimization services india, seo services in india, best seo services in india, seo optimization services, search engine optimization services in india, seo company in mumbai, seo services india, top seo companies in india, seo packages india, search engine optimization packages, professional search engine optimization services, seo optimization companies, search optimization companies, seo management services, top seo services india, search engine optimisation services, seo company india"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/search-engine-optimization-seo-services"
      />
      <meta
        property="og:title"
        content="Search Engine Optimization Services in India | SEO Company in Mumbai | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Get result-driven search engine optimization services in India from SIB Infotech - Google Premier Partner with 20+ years experience. 1000+ brands ranked across 40+ countries. Free SEO audit. No lock-in contracts."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/search-engine-optimization-seo-services"
      />
      <meta
        property="twitter:title"
        content="Search Engine Optimization Services in India | SEO Company in Mumbai | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Get result-driven search engine optimization services in India from SIB Infotech - Google Premier Partner with 20+ years experience. 1000+ brands ranked across 40+ countries. Free SEO audit. No lock-in contracts."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.jpg"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
