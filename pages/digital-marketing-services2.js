import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import DigitalMarkServices from "@/comps/digitalmarketingservices/DigitalMarkServices";
import "aos/dist/aos.css";

export default function DigitalMarketingServices() {
  const metaTags = (
    <>
      <title>Top Digital Marketing Services Agency Mumbai, Delhi, India</title>
      <meta
        name="description"
        content="SIB Infotech is a leading digital marketing company in Mumbai, India. Get tailored strategies to boost your online visibility, traffic, leads, and conversions."
      />
      <meta
        name="keywords"
        content="digital marketing agency malad, best digital marketing company in malad west mumbai, content marketing agency in malad, top digital marketing agency in mumbai, best digital marketing company in mumbai, digital marketing agency in malad west, best digital marketing company in janakpuri, digital marketing company in mumbai, best digital marketing agency in mumbai, top digital marketing company in india, best digital marketing agency in delhi, digital marketing services in mumbai, digital marketing company in india, digital marketing service in mumbai, media company in mumbai, seo strategies, social media marketing, local digital marketing consultancy in mumbai, web promotion strategies for local businesses, local digital marketing sgency in mumbai, best digital marketing agency Mumbai"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/digital-marketing-services"
      />
      <meta
        property="og:title"
        content="Top Digital Marketing Services Agency Mumbai, Delhi, India"
      />
      <meta
        property="og:description"
        content="SIB Infotech is a leading digital marketing company in Mumbai, India. Get tailored strategies to boost your online visibility, traffic, leads, and conversions."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/digital-marketing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/digital-marketing-services"
      />
      <meta
        property="twitter:title"
        content="Top Digital Marketing Services Agency Mumbai, Delhi, India"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is a leading digital marketing company in Mumbai, India. Get tailored strategies to boost your online visibility, traffic, leads, and conversions."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/digital-marketing-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/digital-marketing-services"
        breadcrumbTitle="Top Digital Marketing Services Agency Mumbai, Delhi, India"
        PageRatingSchema
        description={
          "SIB Infotech is a leading digital marketing company in Mumbai, India. Get tailored strategies to boost your online visibility, traffic, leads, and conversions."
        }
        reviewCount={"5182"}
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
