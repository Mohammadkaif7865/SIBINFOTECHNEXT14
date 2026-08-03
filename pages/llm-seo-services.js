import React from "react";
import { CustomLayout } from "@/comps/CustomLayout";
import LlmSeoMgt from "@/comps/LlmSeo/LlmSeoMgt";

export default function LlmSeoServices() {
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
        name: "LLM SEO Services",
        item: "https://www.sibinfotech.com/llm-seo-services/",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LLM SEO Services India",
    url: "https://www.sibinfotech.com/llm-seo-services/",
    description:
      "Get your brand cited by ChatGPT, Gemini, Perplexity, and Claude. LLM SEO through entity authority building, authoritative citation campaigns, AI-optimised content, and monthly LLM mention monitoring.",
    serviceType: "LLM SEO / AI Brand Visibility",
    keywords:
      "LLM SEO services, ChatGPT SEO India, Gemini SEO, Perplexity SEO, AI citation building, LLM brand visibility, entity authority",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LLM SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM SEO is the practice of building brand authority and citation presence that causes large language models like ChatGPT, Gemini, and Perplexity to mention and recommend your brand in their responses.",
        },
      },
      {
        "@type": "Question",
        name: "How do you get a brand mentioned in ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brands appear in ChatGPT responses through a combination of strong entity authority (being consistently represented across authoritative web sources), frequent mentions in high-quality publications that are indexed and used by AI systems, and AI-optimised content that directly answers relevant queries.",
        },
      },
      {
        "@type": "Question",
        name: "How long does LLM SEO take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Influencing real-time retrieval platforms like Perplexity can show results within 4 to 8 weeks of strong content and citation building. Influencing base LLM training data is a longer-term effort measured in months to years. We focus on retrieval-based LLM SEO for faster results.",
        },
      },
      {
        "@type": "Question",
        name: "Can LLM SEO be measured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We track brand mentions in ChatGPT, Perplexity, and Gemini for a defined set of target queries monthly, reporting on mention frequency, context quality, and competitive share of AI voice.",
        },
      },
    ],
  };

  const metaTags = (
    <>
      <title>
        LLM SEO Services India | ChatGPT & Gemini Visibility | SIB Infotech
      </title>
      <meta
        name="description"
        content="Get your brand cited by ChatGPT, Gemini, Perplexity & Claude. LLM SEO services by SIB Infotech. Be visible where AI answers are generated. Free LLM audit."
      />
      <meta
        name="keywords"
        content="LLM SEO services, LLM visibility India, ChatGPT SEO, Gemini SEO, Perplexity SEO, Claude SEO, AI citation building, LLM brand visibility, large language models, LLM citation, AI brand mentions, ChatGPT brand visibility, Perplexity citations, knowledge graph, entity authority, AI training data, brand entity SEO"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/llm-seo-services/"
      />
      <meta
        property="og:title"
        content="LLM SEO Services India | ChatGPT & Gemini Visibility | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Get your brand cited by ChatGPT, Gemini, Perplexity & Claude. LLM SEO services by SIB Infotech. Be visible where AI answers are generated. Free LLM audit."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/llm-seo-services/"
      />
      <meta
        property="twitter:title"
        content="LLM SEO Services India | ChatGPT & Gemini Visibility | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Get your brand cited by ChatGPT, Gemini, Perplexity & Claude. LLM SEO services by SIB Infotech. Be visible where AI answers are generated. Free LLM audit."
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
      <LlmSeoMgt />
    </CustomLayout>
  );
}
