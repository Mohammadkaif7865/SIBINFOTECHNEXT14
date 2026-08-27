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
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com",
    },
    areaServed: { "@type": "Country", name: "India" },
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

  const metaTags = (
    <>
      <title>Digital Marketing Services India | Site Marketing Agency | SIB Infotech</title>
      <meta name="description" content="SIB Infotech is India's leading site marketing and digital marketing services company — SEO, PPC, social media, content marketing, and web analytics under one roof. Google Premier Partner. 1000+ brands. 40+ countries. Free audit." />
      <meta name="keywords" content="digital marketing services india, site marketing, digital marketing agency india, digital marketing company mumbai, digital marketing agency mumbai, best digital marketing company in india, online marketing services india, digital marketing services in mumbai, internet marketing company india, top digital marketing agency in india, digital marketing services for small business, site marketing services" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/digital-marketing-services" />
      <meta property="og:title" content="Digital Marketing Services in India | #1 Digital Marketing Agency | SIB Infotech" />
      <meta property="og:description" content="SIB Infotech offers result-driven digital marketing services in India — SEO, PPC, social media marketing, content marketing, and web analytics. Google Premier Partner. 1000+ brands. 40+ countries." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/digital-marketing-services.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/digital-marketing-services" />
      <meta property="twitter:title" content="Digital Marketing Services in India | #1 Digital Marketing Agency | SIB Infotech" />
      <meta property="twitter:description" content="SIB Infotech offers result-driven digital marketing services in India — SEO, PPC, social media marketing, content marketing, and web analytics. Google Premier Partner." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/digital-marketing-services.webp" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/digital-marketing-services"
        breadcrumbTitle="Digital Marketing Services in India | #1 Digital Marketing Agency"
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
