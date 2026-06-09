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
        name: "SEO Service Company",
        item: "https://www.sibinfotech.com/search-engine-optimization-seo-services",
      },
    ],
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.sibinfotech.com/#localbusiness",
    name: "SIB Infotech",
    url: "https://www.sibinfotech.com/",
    image: ["https://www.sibinfotech.com/assets/og/sib-infotech.png"],
    logo: {
      "@type": "ImageObject",
      url: "https://www.sibinfotech.com/assets/images/logo.webp",
    },
    description:
      "SIB Infotech is a digital marketing and SEO company in Mumbai, India, offering SEO, PPC, web design, social media marketing, content marketing, and online reputation management services.",
    telephone: "+91-92222-60000",
    email: "contact@sibinfotech.com",
    priceRange: "$$",
    sameAs: [
      "https://x.com/sibinfotech",
      "https://www.linkedin.com/company/sib-infotech",
      "https://www.facebook.com/sibinfotech",
      "https://www.youtube.com/user/sibinfotech",
      "https://www.instagram.com/sibinfotech",
      "https://www.pinterest.com/sibinfotech",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400064",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.1018364,
      longitude: 72.887766,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-92222-60000",
      email: "contact@sibinfotech.com",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "2022",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id":
      "https://www.sibinfotech.com/search-engine-optimization-seo-services/#service",
    name: "Search Engine Optimization (SEO) Services",
    serviceType: "SEO Services",
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
        name: "What is SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO or 'search engine optimization is the process of improving the quality and quantity of website traffic. This is achieved by increasing its visibility on search engines, improving rankings for unpaid results. As a marketing strategy, SEO has long-term benefits and provides a high return-on-investment.",
        },
      },
      {
        "@type": "Question",
        name: "What are your SEO plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>SEO is a results-oriented process that requires goal strategies to bring good results. We continuously strive to provide a complete package of SEO services including:</p><ul><li>Content analysis and optimization</li><li>Website Structure Analysis</li><li>Off-Page SEO and On-Page SEO</li><li>Website code optimization</li><li>Website structure optimization</li><li>Keyword Research</li><li>Local SEO Content Writing and Placement</li></ul><p>SEO Plans are based on customer requirements and their objective. Our SEO Packages offered are tailored made suitable for all kinds of budgets</p>",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see the result?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO grows over time and the entire SEO process takes about 3 to 6 months to see the expected results, with a minimum of 2 to 3 months in link building, on-page optimization, off-page optimization, content creation, and marketing. Is complete. Another fact is that SEO results are expected to increase over time, so results in 6 months will be slightly lower than in 12 months",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our SEO services' cost depends on the client's requirements. We provide custom SEO packages tailor-made to fit as per clients budget for SEO. We cover a vast range of services in our SEO packages' intending to improve website traffic and bring higher ranking on Google search result pages.",
        },
      },
      {
        "@type": "Question",
        name: "Why do you need SEO service for your website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO services offer visibility to your websites and improve SEO ranking gradually over search engines like Google, Yahoo, Bing, DuckDuckGo etc. A high ranking website would bring more traffic to its website and help lead generation for the business.",
        },
      },
      {
        "@type": "Question",
        name: "Ask for an initial SEO audit of your website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer free SEO audit services as a part of the entire SEO package. We have dedicated professionals to provide SEO audit reports for your website, unlike some SEO companies in India that entirely rely on audit tools. We ensure that the audit report is developed thoroughly with covering elements like keyword research and competitor analysis.",
        },
      },
      {
        "@type": "Question",
        name: "How much does SEO Services cost per month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our SEO services' cost depends on the client's requirements. We provide custom SEO packages tailor-made to fit as per client's budget for SEO. We cover a vast range of services in our SEO packages' intending to improve website traffic and bring higher ranking on Google search result pages. SEO packages start from around USD 300 per month onwards.",
        },
      },
      {
        "@type": "Question",
        name: "Is SEO worth it in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With years crossing by, the emphasis on SEO is never degrading instead it is turning more prominent than ever. It is one of the most compelling digital marketing strategies that stimulate long-term results. In 2026, SEO continues to be significant and savvy marketers should discover their ways of managing content marketing alongside other traffic channels such as social media management. By targeting long-tailed keywords, SEO as inbound marketing broadens your brand's reach.",
        },
      },
      {
        "@type": "Question",
        name: "Why SEO services are so expensive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>There are several reasons for SEO being expensive:</p><ul><li>It is a time taking process.</li><li>Calls for several resources to build up and maintain a campaign.</li><li>Relies on the expertise of the SEO specialist to establish and advance your strategy.</li></ul>",
        },
      },
      {
        "@type": "Question",
        name: "How do you rank first on Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no tried and tested method for ranking first on Google. However, with the right keywords and SEO campaigns, your chances of ranking high can be increased. For that, you'll have to create tons of optimized content and you're good to go! With the right strategies, this will happen much sooner than you think.",
        },
      },
      {
        "@type": "Question",
        name: "How does Google rank SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Authority and relevancy are the two primary things Google looks for when crawling a website. Google will produce the results based on algorithms and information gathered by the spiders. These web pages are placed on the search results page in an order reflecting their page.",
        },
      },
      {
        "@type": "Question",
        name: "How do I choose a company for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>For choosing a suitable SEO Company for your brand follows these six steps:</p><ul><li>Ask for examples and case studies of successful SEO campaigns.</li><li>Think beyond SEO.</li><li>Visit the SEO Company in person.</li><li>Understand the risks of low-cost SEO agencies.</li><li>Avoid SEO guarantees.</li><li>Familiarize yourself with SEO pricing models and make an SEO budget.</li></ul>",
        },
      },
      {
        "@type": "Question",
        name: "What are SEO tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SEO tools determine the potential of your webpage for high rankings in search engine results. They provide keywords and backlinks information as well as insights into SEO competition on the Internet.",
        },
      },
      {
        "@type": "Question",
        name: "Why Hire SEO Company in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hiring an SEO company in India is a strategic choice fueled by a vast pool of skilled professionals focused on digital marketing. The cost-effective nature of Indian SEO services, coupled with competitive pricing, ensures businesses receive optimal value. With a proven track record and a diverse talent pool, these companies bring innovation and expertise to enhance online presence. The ability to navigate evolving industry trends and leverage cultural diversity allows for nuanced and targeted SEO strategies. Businesses can trust in achieving improved search engine rankings, driving organic traffic, and ultimately experiencing sustained growth by tapping into the comprehensive offerings of Indian SEO companies.",
        },
      },
    ],
  };
  const metaTags = (
    <>
      <title>Result-Driven SEO Services Company in Mumbai, India </title>
      <meta
        name="description"
        content="Grow with the SEO services company in Mumbai trusted by leading brands across 40+ countries. Google Premier Partner with 20 years of SEO expertise."
      />
      <meta
        name="keywords"
        content="SEO Company in India, SEO Company in Mumbai, SEO Agency India, SEO Agency in India, SEO Agency in Mumbai, seo services, seo services in India, seo services in Mumbai, seo optimization service, India seo company, seo providers in India, search engine optimization companies in India, seo firms India, search engine optimization agencies"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/search-engine-optimization-seo-services"
      />
      <meta
        property="og:title"
        content="Result-Driven SEO Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Grow with the SEO services company in Mumbai trusted by leading brands across 40+ countries. Google Premier Partner with 20 years of SEO expertise."
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
        content="Result-Driven SEO Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Grow with the SEO services company in Mumbai trusted by leading brands across 40+ countries. Google Premier Partner with 20 years of SEO expertise."
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
          __html: JSON.stringify(localBusinessSchema),
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
      <Seo />
    </CustomLayout>
  );
}
