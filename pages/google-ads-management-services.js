import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import GoogleAdsMgt from "@/comps/Google Ads/GoogleAdsMgt";
import Faq from "@/comps/Home/Faq";

export default function GoogleAdsManagementServices() {
  const faqsData = [
    {
      id: "faq15",
      question: "How much do Google Ads services cost in India?",
      answer: `<div className="accordion-body"><p>Google Ads pricing in India typically ranges from ₹15,000 to ₹50,000 per month depending on campaign complexity, competition level, targeting requirements, and monthly ad spend. At SIB Infotech, pricing is customized based on your business goals and advertising requirements. The service fee is separate from the actual ad budget, which is paid directly to Google. Complete pricing transparency is provided before onboarding.</p></div>`,
    },
    {
      id: "faq16",
      question: "How quickly can I expect results from Google Ads campaigns?",
      answer: `<div className="accordion-body"><p>Most businesses start seeing increased website traffic and impressions within 24 to 48 hours after campaign launch. However, meaningful performance insights and conversion data usually take 2 to 4 weeks to develop. Continuous optimization during the first few months helps improve lead quality, conversion rates, and overall return on ad spend over time.</p></div>`,
    },
    {
      id: "faq17",
      question: "What is the recommended monthly ad budget for Google Ads?",
      answer: `<div className="accordion-body"><p>For small and medium-sized businesses, a monthly budget of ₹30,000 to ₹50,000 is generally recommended to generate enough performance data for optimization. Highly competitive industries such as real estate, finance, healthcare, and e-commerce often require larger budgets for better reach and scalability. Budget recommendations should always align with business goals, competition, and target locations.</p></div>`,
    },
    {
      id: "faq18",
      question: "Do you work with small businesses and startups?",
      answer: `<div className="accordion-body"><p>Yes. SIB Infotech works with startups, local businesses, and growing brands across different industries. Smaller budgets are managed with a strong focus on high-intent targeting, location-based campaigns, and cost-efficient bidding strategies to maximize lead generation while minimizing wasted spend.</p></div>`,
    },
    {
      id: "faq19",
      question: "Why should businesses hire a professional Google Ads agency?",
      answer: `<div className="accordion-body"><p>Managing paid advertising campaigns effectively requires continuous monitoring, keyword optimization, bidding adjustments, audience analysis, conversion tracking, and landing page improvements. Working with an experienced team helps businesses avoid common mistakes, reduce unnecessary spending, and improve campaign performance more efficiently than relying on trial-and-error methods internally.</p></div>`,
    },
    {
      id: "faq20",
      question: "What makes SIB Infotech different from other PPC agencies?",
      answer: `<div className="accordion-body"><p>SIB Infotech focuses on measurable business outcomes rather than vanity metrics like clicks or impressions alone. As a Google Premier Partner, the company follows proven optimization strategies backed by 18+ years of industry experience. Clients receive transparent reporting, dedicated account management, regular campaign optimization, and data-driven performance tracking focused on lead quality and return on investment.</p></div>`,
    },
    {
      id: "faq21",
      question: "Do you provide a free Google Ads audit?",
      answer: `<div className="accordion-body"><p>Yes. A complimentary audit is available for businesses looking to evaluate their current advertising performance. The audit includes analysis of campaign structure, keyword targeting, bidding strategies, ad copy, conversion tracking, audience settings, and landing page performance. Actionable recommendations are shared without any obligation to proceed further.</p></div>`,
    },
    {
      id: "faq22",
      question: "Which industries do you have experience working with?",
      answer: `<div className="accordion-body"><p>SIB Infotech has experience working with businesses across e-commerce, healthcare, education, real estate, travel, hospitality, manufacturing, finance, SaaS, and local service industries. With clients across India and international markets, the team develops industry-specific strategies tailored to different customer behaviors and competition levels.</p></div>`,
    },
    {
      id: "faq23",
      question:
        "Do you provide Google Ads services for businesses in Mumbai and across India?",
      answer: `<div className="accordion-body"><p>Yes. SIB Infotech provides paid advertising solutions for businesses in Mumbai, Navi Mumbai, Thane, and across India. Campaigns are also managed for international businesses targeting audiences in countries such as the USA, UK, UAE, and Australia.</p></div>`,
    },
    {
      id: "faq24",
      question: "How do you measure the success of Google Ads campaigns?",
      answer: `<div className="accordion-body"><p>Campaign success is measured using key performance indicators such as qualified leads, conversion rate, cost per acquisition, click-through rate, and return on ad spend. Accurate conversion tracking and analytics setup help monitor how users interact with ads and landing pages. Regular performance reports provide clear insights into campaign progress, audience behavior, and opportunities for further optimization.</p></div>`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Google Ads Management Services",
    serviceType: "Google Ads Management",
    url: "https://www.sibinfotech.com/google-ads-management-services",
    description:
      "Professional Google Ads management services including campaign setup, keyword research, ad optimization, conversion tracking, audience targeting, remarketing, landing page analysis, and performance reporting to help businesses improve lead generation and return on ad spend.",
    provider: {
      "@type": "Organization",
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
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
        name: "PPC Management Services",
        item: "https://www.sibinfotech.com/pay-per-click-ppc-management-services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Google Ads Management Services",
        item: "https://www.sibinfotech.com/google-ads-management-services",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, "").trim(),
      },
    })),
  };

  const metaTags = (
    <>
      <title>Boost ROI with #1 Google Ads Management Services in India</title>
      <meta
        name="description"
        content="Drive more leads, sales, and ROI with expert Google Ads management services by SIB Infotech, a Google Premier Partner trusted by 850+ clients for 18+ years."
      />
      <meta
        name="keywords"
        content="PPC Management, Pay Per Click Management, PPC Account Management, AdWords Management, Google AdWords Management Services, Google Ads Management, Google Ads Company, Google Ads Service, Ads Management Company, best ppc management company"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/google-ads-management-services
"
      />
      <meta
        property="og:title"
        content="Boost ROI with #1 Google Ads Management Services in India"
      />
      <meta
        property="og:description"
        content="Drive more leads, sales, and ROI with expert Google Ads management services by SIB Infotech, a Google Premier Partner trusted by 850+ clients for 18+ years."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/images/instagram-ads-business-objective.svg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/google-ads-management-services"
      />
      <meta
        property="twitter:title"
        content="Boost ROI with #1 Google Ads Management Services in India"
      />
      <meta
        property="twitter:description"
        content="Drive more leads, sales, and ROI with expert Google Ads management services by SIB Infotech, a Google Premier Partner trusted by 850+ clients for 18+ years."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/images/instagram-ads-business-objective.svg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/google-ads-management-services"
        breadcrumbTitle="Top Google Ads Management Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
        }
        reviewCount={"5208"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <GoogleAdsMgt />
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
      <Faq title={"Frequently Asked Questions"} faqsData={faqsData} />
    </CustomLayout>
  );
}
