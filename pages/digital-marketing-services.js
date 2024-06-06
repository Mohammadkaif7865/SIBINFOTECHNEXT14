import { CustomLayout } from "@/comps/CustomLayout";
import DigitalMarkServices from "@/comps/digitalmarketingservices/DigitalMarkServices";
import "aos/dist/aos.css";

export default function DigitalMarketingServices() {
  const metaTags = (
    <>
      <title>
        Best Digital Marketing Company in India, Top Digital Marketing Agency in
        Mumbai & Delhi
      </title>
      <meta
        name="description"
        content="SIB Infotech is an award winning best digital marketing agency in India offering comprehensive digital marketing services like SEO, social media management ,PPC & content marketing to elevate your company’s online presence. Our digital marketing strategies help you to engage with your audiences, drive growth and achieve success online."
      />
      <meta
        name="keywords"
        content="digital marketing agency malad, best digital marketing company in malad west mumbai, content marketing agency in malad, top digital marketing agency in mumbai, best digital marketing company in mumbai, digital marketing agency in malad west, best digital marketing company in janakpuri, digital marketing company in mumbai, best digital marketing agency in mumbai, top digital marketing company in india, best digital marketing agency in delhi, digital marketing services in mumbai, digital marketing company in india, digital marketing service in mumbai, media company in mumbai, seo strategies, social media marketing, local digital marketing consultancy in mumbai, web promotion strategies for local businesses, local digital marketing sgency in mumbai, best digital marketing agency Mumbai"
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
