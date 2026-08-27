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
    name: "SEO Services in Mumbai",
    serviceType: "Search Engine Optimization",
    url: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best SEO company in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIB Infotech is among the best SEO companies in Mumbai, operating since 2005 as a Google Premier Partner (top 3% of agencies in India). We have ranked 1000+ brands across 40+ countries and are listed on Clutch and DesignRush among the top SEO companies in Mumbai. Our Mumbai SEO team works from Malad West and serves clients across Andheri, Bandra, BKC, Powai, Lower Parel, Thane and Navi Mumbai.",
        },
      },
      {
        "@type": "Question",
        name: "How much do SEO services in Mumbai cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO services in Mumbai typically cost between Rs. 25,000 and Rs. 2,50,000 per month depending on competition, website size and the number of keywords. At SIB Infotech, SEO packages in Mumbai start at Rs. 25,000 per month (approximately $250) for small businesses, Rs. 60,000 per month for growth-stage brands, and custom pricing for enterprise and e-commerce SEO. There are no lock-in contracts.",
        },
      },
      {
        "@type": "Question",
        name: "What does an SEO agency in Mumbai actually do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SEO agency in Mumbai improves your website's visibility in Google search results for the queries your customers use. At SIB Infotech this covers a technical SEO audit, on-page optimization, keyword research mapped to Mumbai search intent, content creation, local SEO and Google Business Profile optimization, authority link building, and AI search optimization for ChatGPT, Gemini and Google AI Overviews. You get a dedicated account manager and monthly reporting.",
        },
      },
      {
        "@type": "Question",
        name: "How long does SEO take to show results in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Mumbai businesses see measurable movement within 60 to 90 days and meaningful first-page rankings within 4 to 6 months. Local SEO in Mumbai, such as ranking in Google Maps for 'near me' searches, often shows results faster, typically in 30 to 60 days. Competitive commercial keywords like 'seo company in mumbai' take longer because established competitors hold years of accumulated authority.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide SEO services across all areas of Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech provides SEO services across the whole Mumbai Metropolitan Region, including Andheri East and West, Bandra, Bandra Kurla Complex (BKC), Malad, Goregaon, Powai, Lower Parel, Worli, Dadar, Nariman Point, Borivali, Vile Parle, Chembur, Thane and Navi Mumbai (Vashi, Belapur, Kharghar). Our office is in Malad West and we offer in-person strategy meetings anywhere in Mumbai.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose the right SEO expert in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check for verifiable credentials such as Google Premier Partner status, ask for case studies with real traffic and revenue numbers rather than only ranking screenshots, confirm you get a named account manager instead of a ticket queue, insist on transparent monthly reporting, and avoid anyone guaranteeing a #1 ranking. Also ask which link-building methods they use, because low-quality links cause Google penalties.",
        },
      },
      {
        "@type": "Question",
        name: "Is local SEO different from regular SEO in Mumbai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Local SEO targets location-based searches such as 'SEO company near me' or 'digital marketing agency in Andheri' and focuses on your Google Business Profile, local citations, reviews and map pack visibility. Regular SEO targets broader commercial and informational keywords across organic listings. Most Mumbai businesses need both, and SIB Infotech includes local SEO in every Mumbai SEO package.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a free SEO audit for Mumbai businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. SIB Infotech offers a free SEO audit covering technical health, Core Web Vitals, on-page gaps, backlink profile quality, keyword opportunities and a competitor comparison against the SEO companies currently ranking in Mumbai. The audit is delivered as an actionable report with prioritized fixes and there is no obligation to sign up.",
        },
      },
    ],
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
      <title>SEO Company in Mumbai | Best SEO Services Agency | SIB Infotech</title>
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
        content="https://www.sibinfotech.com/search-engine-optimization-seo-services"
      />
      <meta
        property="og:title"
        content="SEO Company in Mumbai | Best SEO Services Agency | SIB Infotech"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a top SEO company in Mumbai offering result-driven SEO services in Mumbai since 2005. Google Premier Partner SEO agency in Mumbai with 20+ years experience and 1000+ brands ranked. Serving Andheri, Bandra, BKC, Malad, Powai, Lower Parel & Navi Mumbai. Free SEO audit, no lock-in contracts."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/search-engine-optimization-seo-services"
      />
      <meta
        property="twitter:title"
        content="SEO Company in Mumbai | Best SEO Services Agency | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is a top SEO company in Mumbai offering result-driven SEO services in Mumbai since 2005. Google Premier Partner SEO agency in Mumbai with 20+ years experience and 1000+ brands ranked. Serving Andheri, Bandra, BKC, Malad, Powai, Lower Parel & Navi Mumbai. Free SEO audit, no lock-in contracts."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.webp"
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
