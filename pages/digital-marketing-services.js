  import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import DigitalMarkServices from "@/comps/digitalmarketingservices/DigitalMarkServices";
import "aos/dist/aos.css";


export default function DigitalMarketingServices() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services in India",
    serviceType: "Digital Marketing",
    url: "https://www.sibinfotech.com/digital-marketing-services",
    description:
      "SIB Infotech provides comprehensive digital marketing services in India including SEO, PPC, social media marketing, content marketing, email marketing, and web analytics for businesses across Mumbai, Delhi, and 40+ countries.",
    provider: {
      "@type": "Organization",
      "@id": "https://www.sibinfotech.com/#organization",
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com",
    },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Full-Funnel Digital Marketing Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization (SEO & AI Search GEO)",
            url: "https://www.sibinfotech.com/seo-company-mumbai",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pay-Per-Click Advertising (PPC & Google Ads)",
            url: "https://www.sibinfotech.com/search-engine-marketing-companies-mumbai-india",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing (SMM & Paid Meta Ads)",
            url: "https://www.sibinfotech.com/social-media-marketing-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Marketing & Authority Strategy",
            url: "https://www.sibinfotech.com/content-marketing-services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Email Marketing & Marketing Automation",
            url: "https://www.sibinfotech.com/email-marketing-services-companies-mumbai-india",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Online Reputation Management & SMO",
            url: "https://www.sibinfotech.com/social-media-optimization-services",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Digital Marketing Services in India",
        item: "https://www.sibinfotech.com/digital-marketing-services",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is SIB Infotech rated the best digital marketing company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIB Infotech is recognized among the best digital marketing companies in India due to our 18+ years of continuous operating excellence, official Google Premier Partner status (placing us in the top 3% of agencies nationwide), and a proven record of ranking over 1,000 brands across 40+ countries. We engineer custom, data-backed customer acquisition funnels that prioritize measurable Return on Investment (ROI) and lower Customer Acquisition Costs (CAC) rather than vanity impressions.",
        },
      },
      {
        "@type": "Question",
        name: "What solutions do digital marketing firms in India provide for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full-service digital marketing firms in India provide comprehensive, end-to-end growth solutions including Search Engine Optimization (SEO & AI Search GEO), Pay-Per-Click advertising (Google Ads, Performance Max, Shopping), Social Media Marketing & Paid Social (Meta, LinkedIn, Instagram), Content Marketing & Authority Strategy, Conversion Rate Optimization (CRO), Lifecycle Email Automation, Programmatic Media Buying, and Online Reputation Management (ORM).",
        },
      },
      {
        "@type": "Question",
        name: "How much do digital marketing services cost in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Digital marketing pricing in India varies based on campaign scope, channel complexity, target geography, and industry competition. Typically, monthly retainers for small businesses and local firms range from ₹25,000 to ₹60,000/month, growth-stage brands invest ₹75,000 to ₹2,00,000/month, and enterprise or multi-channel e-commerce campaigns are custom-quoted. SIB Infotech offers modular, scalable packages tailored to your budget with zero hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can a digital marketing business in India expect tangible ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on the chosen marketing channels. Paid advertising (Google Ads, Meta Ads, LinkedIn Ads) can drive qualified leads and e-commerce transactions within 24 to 48 hours of campaign launch. Organic growth channels such as Search Engine Optimization (SEO) and Content Marketing build sustainable compounding momentum, typically delivering significant first-page ranking jumps and organic pipeline growth within 3 to 6 months.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure and report digital marketing campaign performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At SIB Infotech, transparency is paramount. We provide clients with 24/7 access to live interactive reporting dashboards integrating Google Analytics 4 (GA4), Google Search Console, Google Ads, Meta Business Manager, and CRM pipelines. Every monthly performance review analyzes commercial metrics: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), organic pipeline value, conversion rates, and revenue attribution.",
        },
      },
      {
        "@type": "Question",
        name: "How does your digital marketing company handle AI search and Google AI Overviews?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "As search behavior shifts toward conversational AI, SIB Infotech employs proprietary Generative Engine Optimization (GEO) strategies. We structure your website content with semantic entity mapping, knowledge graph connections, and authoritative Q&A syntax so that leading AI models—including Google AI Overviews, SearchGPT, Perplexity, and Gemini—cite your brand as the definitive authority in your industry.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide local digital marketing services across Mumbai, Delhi, and other Indian cities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. With corporate offices in Mumbai and New Delhi, we provide specialized hyper-local digital marketing and local SEO across the Mumbai Metropolitan Region (Andheri, BKC, Malad, Goregaon, Powai, Thane, Navi Mumbai), Delhi NCR (Gurgaon, Noida, South Delhi), Bangalore, Pune, Hyderabad, and Tier-2 emerging commercial hubs throughout India.",
        },
      },
      {
        "@type": "Question",
        name: "What makes a full-service digital marketing agency better than hiring separate vendors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiring separate vendors for SEO, PPC, and social media creates misaligned messaging, siloed data, and wasted marketing spend. A full-service digital marketing agency like SIB Infotech aligns all digital channels under a single cohesive growth strategy, sharing conversion data between paid and organic channels to compound your overall return on investment.",
        },
      },
      {
        "@type": "Question",
        name: "Are there long-term contracts or lock-in periods when working with SIB Infotech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We believe in earning our client partnerships through demonstrable results and continuous revenue growth, not restrictive multi-year lock-ins. We offer flexible, month-to-month and quarterly retainers with clear SLAs, allowing your business to adapt budgets as commercial requirements evolve.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started with SIB Infotech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Getting started is seamless. Contact our senior digital marketing consultants for a free, comprehensive digital marketing audit. We evaluate your current organic visibility, paid search efficiency, competitor landscape, and conversion funnels, delivering a customized strategic growth proposal within 48 hours.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>Digital Marketing Services India | #1 Digital Marketing Company in India | SIB Infotech</title>
      <meta name="description" content="Looking for the top digital marketing company in India? SIB Infotech offers full-suite digital marketing services in India — SEO, PPC, Google Ads, SMM, and ROI solutions for businesses across Mumbai & Delhi. Free audit!" />
      <meta name="keywords" content="digital marketing company in india, digital marketing services india, digital marketing firms in india, digital marketing business in india, digital marketing company india, best digital marketing company in india, digital marketing services in india, top digital marketing services in india, best digital marketing services in india, digital marketing solutions india, digital marketing firm in india, best digital marketing services company in india, digital marketing agency mumbai, online marketing services india" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/digital-marketing-services" />
      <meta property="og:title" content="Digital Marketing Services India | #1 Digital Marketing Company in India | SIB Infotech" />
      <meta property="og:description" content="Looking for the top digital marketing company in India? SIB Infotech offers full-suite digital marketing services in India — SEO, PPC, Google Ads, SMM, and ROI solutions for businesses across Mumbai & Delhi. Free audit!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/digital-marketing-services.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/digital-marketing-services" />
      <meta property="twitter:title" content="Digital Marketing Services India | #1 Digital Marketing Company in India | SIB Infotech" />
      <meta property="twitter:description" content="Looking for the top digital marketing company in India? SIB Infotech offers full-suite digital marketing services in India — SEO, PPC, Google Ads, SMM, and ROI solutions." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/digital-marketing-services.webp" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/digital-marketing-services"
        breadcrumbTitle="Digital Marketing Services India | #1 Digital Marketing Company in India"
        PageRatingSchema
        description={
          "SIB Infotech offers result-driven digital marketing services in India — SEO, PPC, social media marketing, content marketing, and web analytics. Google Premier Partner."
        }
        reviewCount={"5182"}
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
          __html: JSON.stringify(breadcrumbSchema),
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
    <>
      <CustomLayout meta={metaTags}>
        <DigitalMarkServices />
      </CustomLayout>
    </>
  );
}
