import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import WebDesigning from "@/comps/WebsiteDesigningServices/WebDesigning";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function WebsiteDesigningServices() {
  const metaTags = (
    <>
      <title>Best Website Designing Company in Mumbai, Delhi, India</title>
      <meta
        name="description"
        content="Get professional and responsive website designing services in Mumbai, Delhi & across India. SIB Infotech crafts custom websites that boost user experience, SEO, and business growth."
      />
      <meta
        name="keywords"
        content="web designing India, website designing Mumbai, website design, E-Commerce website design, professional web designer, custom website designing, web design company, website design mumbai, web design company mumbai, Mumbai website design company, shopify web design, website design services in india, website design in mumbai, website designing company in mumbai, website designers in mumbai, landing page designing"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/website-designing-services
"
      />
      <meta
        property="og:title"
        content="Best Website Designing Company in Mumbai, Delhi, India"
      />
      <meta
        property="og:description"
        content="Get professional and responsive website designing services in Mumbai, Delhi & across India. SIB Infotech crafts custom websites that boost user experience, SEO, and business growth."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/website-designing-services.jpg
"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/website-designing-services"
      />
      <meta
        property="twitter:title"
        content="Best Website Designing Company in Mumbai, Delhi, India"
      />
      <meta
        property="twitter:description"
        content="Get professional and responsive website designing services in Mumbai, Delhi & across India. SIB Infotech crafts custom websites that boost user experience, SEO, and business growth."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/website-designing-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/website-designing-services"
        breadcrumbTitle="Best Website Designing Company in Mumbai, Delhi, India"
        PageRatingSchema
        description={
          "Get professional and responsive website designing services in Mumbai, Delhi & across India. SIB Infotech crafts custom websites that boost user experience, SEO, and business growth."
        }
        reviewCount={"5308"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <WebDesigning />
    </CustomLayout>
  );
}
