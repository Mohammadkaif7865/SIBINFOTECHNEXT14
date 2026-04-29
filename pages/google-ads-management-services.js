import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import GoogleAdsMgt from "@/comps/Google Ads/GoogleAdsMgt";
import Faq from "@/comps/Home/Faq";

export default function GoogleAdsManagementServices() {
  const faqsData = [
    {
      id: "faq15",
      question: "What Google Ads services does SIB Infotech offer?",
      answer: `<div className="accordion-body"><p>SIB Infotech offers a full suite of Google Ads services including Search Ads, Display Ads, Shopping Ads, YouTube Ads, Performance Max campaigns, and Remarketing. As a Google Premier Partner agency with 18+ years of experience, we manage everything from campaign strategy and ad copywriting to keyword research, bid optimisation, conversion tracking, and monthly performance reporting. Our Google Ads team has delivered measurable ROI for 850+ clients across India and 40+ countries.</p></div>`,
    },
    {
      id: "faq16",
      question:
        "How does SIB Infotech's Google Ads management differ from other agencies?",
      answer: `<div className="accordion-body"><p>SIB Infotech is a Google Premier Partner, which means our team meets Google's highest standards for campaign performance, ad spend management, and client growth. Unlike generic agencies, we combine deep technical expertise with a strong understanding of Indian market dynamics. We focus on leads, cost per lead, and revenue — not vanity metrics like impressions. Every client gets a dedicated account manager, transparent reporting, and a campaign built around their specific business goals.</p></div>`,
    },
    {
      id: "faq17",
      question:
        "Which industries does SIB Infotech manage Google Ads campaigns for?",
      answer: `<div className="accordion-body"><p>SIB Infotech manages Google Ads campaigns across a wide range of industries including real estate, healthcare, education, e-commerce, manufacturing, B2B services, legal, finance, hospitality, and home services. Our 18+ years of experience means we understand the buyer intent, keyword competition, and conversion patterns specific to each sector. Whether you are a local Mumbai business or a national brand, we build campaigns tailored to your industry.</p></div>`,
    },
    {
      id: "faq18",
      question:
        "What is SIB Infotech's process for setting up a Google Ads campaign?",
      answer: `<div className="accordion-body"><p>SIB Infotech follows a structured six-step process: (1) Business discovery and goal setting to understand your target audience and conversion objectives. (2) Keyword research and competitor analysis to find high-intent terms at the best cost per click. (3) Campaign architecture and ad group structuring for maximum Quality Score. (4) Ad copy and creative development with A/B testing built in from day one. (5) Conversion tracking setup via Google Tag Manager to measure every lead and sale. (6) Launch, monitor, and optimise weekly with transparent monthly reporting.</p></div>`,
    },
    {
      id: "faq19",
      question: "Can SIB Infotech help reduce my Google Ads cost per lead?",
      answer: `<div className="accordion-body"><p>Yes. Reducing cost per lead is one of SIB Infotech's core deliverables. Our approach includes cutting wasted spend through negative keyword management, shifting budget to high-intent commercial keywords, improving landing page conversion rates, and using Target CPA bidding once sufficient data is collected. Many of our clients have seen cost per lead reductions of 30–60% within the first three to six months of working with us.</p></div>`,
    },
    {
      id: "faq20",
      question:
        "Does SIB Infotech provide Google Ads management for small businesses in India?",
      answer: `<div className="accordion-body"><p>Absolutely. SIB Infotech works with businesses of all sizes, including startups and small businesses in Mumbai, Delhi, and across India. We offer flexible Google Ads management packages that are designed to deliver maximum returns even on modest budgets. We guide small business owners on realistic budget allocation, help them compete with larger brands through smart targeting, and provide simple, jargon-free reporting that explains performance in plain language.</p></div>`,
    },
    {
      id: "faq21",
      question:
        "What reporting does SIB Infotech provide for Google Ads campaigns?",
      answer: `<div className="accordion-body"><p>SIB Infotech provides detailed monthly performance reports covering all key metrics: impressions, clicks, click-through rate, average cost per click, conversions, cost per conversion, Quality Score trends, and return on ad spend. Reports are delivered in a clean, easy-to-read format and are reviewed on monthly calls with your dedicated account manager. We also provide access to live campaign dashboards so you can check performance at any time.</p></div>`,
    },
    {
      id: "faq22",
      question: "How much does SIB Infotech charge for Google Ads management?",
      answer: `<div className="accordion-body"><p>SIB Infotech's Google Ads management fees depend on your monthly ad spend, the number of campaigns, and the complexity of your account. We offer transparent pricing with no hidden fees. Our management fee is separate from your ad spend, which goes directly to Google. To get a customised quote, contact us for a free Google Ads audit — we will review your current campaigns and provide a clear proposal based on your business goals and budget.</p></div>`,
    },
    {
      id: "faq23",
      question: "Does SIB Infotech offer a free Google Ads audit?",
      answer: `<div className="accordion-body"><p>Yes. SIB Infotech offers a complimentary Google Ads audit for new clients. Our audit covers campaign structure, keyword quality, negative keyword gaps, Quality Score issues, conversion tracking accuracy, landing page performance, and wasted spend analysis. The audit gives you a clear picture of what is working, what is not, and what improvements would have the biggest impact on your results. Contact our team to request your free audit today.</p></div>`,
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/<[^>]+>/g, ""),
      },
    })),
  };

  const metaTags = (
    <>
      <title>
        Top Google Ads Management Services Company in Mumbai | SIB Infotech
      </title>
      <meta
        name="description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get top-rated PPC management & maximize ROI today!"
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
        content="Top Google Ads Management Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/google-ads-management-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/google-ads-management-services"
      />
      <meta
        property="twitter:title"
        content="Top Google Ads Management Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/google-ads-management-services.jpg"
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
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Faq title={"Frequently Asked Questions"} faqsData={faqsData} />
    </CustomLayout>
  );
}
