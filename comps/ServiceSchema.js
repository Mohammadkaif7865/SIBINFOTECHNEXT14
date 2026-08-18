import React from "react";

const SITE = "https://www.sibinfotech.com";

const NON_SERVICE_PATHS = [
  "/",
  "/index",
  "/index.php",
  "/about-us",
  "/contact-us",
  "/career",
  "/thanks",
  "/blog",
  "/cookie-policy",
  "/privacy-policy",
  "/terms-conditions",
  "/search",
  "/404",
];

const HAS_OWN_SERVICE_SCHEMA = [
  "/ai-ppc-services",
  "/ai-seo-services",
  "/amazon-web-services-aws",
  "/android-mobile-application-development-services",
  "/answer-engine-optimization",
  "/app-store-optimization",
  "/aspnet-development-companies-mumbai-india",
  "/chatgpt-ppc-services",
  "/chatgpt-seo-services",
  "/claude-ppc-services",
  "/claude-seo-services",
  "/cms-development-companies-mumbai-india",
  "/conversion-rate-optimization",
  "/corporate-website-designing-services",
  "/custom-calculator-development-services",
  "/ecommerce-seo-services-packages",
  "/enterprise-seo-services",
  "/facebook-marketing",
  "/flash-templates-designing-services-mumbai-india",
  "/flash-website-designing-services",
  "/gemini-ppc-services",
  "/gemini-seo-services",
  "/generative-engine-optimization",
  "/google-ads-management-services",
  "/google-penalty-recovery",
  "/keyword-research-services-mumbai-india",
  "/law-website-development-mumbai-india",
  "/linkedin-ads-management-services",
  "/llm-seo-services",
  "/local-seo-services",
  "/m-commerce-solution",
  "/microsoft-application-development-services",
  "/perplexity-ppc-services",
  "/perplexity-seo-services",
  "/ppc-management-services-packages",
  "/search-ai-optimization",
  "/search-engine-optimization-seo-services",
  "/seo-audit-services",
  "/seo-company-bangalore",
  "/seo-company-delhi",
  "/seo-company-hyderabad",
  "/seo-company-pune",
  "/shopify-seo-services",
  "/social-media-marketing-services",
  "/social-media-optimization",
  "/software-development-services",
  "/technical-seo-services",
  "/webportal-development-companies-mumbai-india",
  "/website-redevelopment-services",
  "/whatsapp-marketing",
  "/white-label-digital-marketing-services",
  "/white-label-seo-services",
  "/woocommerce-seo-services",
];

function titleFromPath(path) {
  const cleaned = path.replace(/^\/+|\/+$/g, "");
  return cleaned
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const ServiceSchema = ({ path, name, description, serviceType }) => {
  const currentPath = (path || "").split("?")[0];

  const isNonService = NON_SERVICE_PATHS.some(
    (p) =>
      currentPath === p || (p !== "/" && currentPath.startsWith(p + "/")),
  );
  if (isNonService || HAS_OWN_SERVICE_SCHEMA.includes(currentPath)) return null;

  const serviceName = name || titleFromPath(path);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    url: `${SITE}${path}`,
    description:
      description ||
      `${serviceName} services by SIB Infotech, a digital marketing, SEO and website design company in India.`,
    serviceType: serviceType || serviceName,
    provider: {
      "@type": "Organization",
      name: "SIB Infotech",
      url: "https://www.sibinfotech.com/",
    },
    areaServed: { "@type": "Country", name: "India" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServiceSchema;
