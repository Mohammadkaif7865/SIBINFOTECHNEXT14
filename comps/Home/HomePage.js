import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("./HomeHero"));
const BannerLogos = dynamic(() => import("./BannerLogos"));
const Counter = dynamic(() => import("./Counter"));
const Madeby = dynamic(() => import("./Madeby"));
const Expertise = dynamic(() => import("./Expertise"));
const DigitalMarketingServices = dynamic(() =>
  import("./DigitalMarketingServices")
);
const AboutUs = dynamic(() => import("./AboutUs"));
const DigitalMarketingWebAgency = dynamic(() =>
  import("./DigitalMarketingWebAgency")
);
const DigitalMarketingAgency = dynamic(() =>
  import("./DigitalMarketingAgency")
);
const WebsiteDesignServices = dynamic(() => import("./WebsiteDesignServices"));
const Testimonials = dynamic(() => import("./Testimonials"));
const Faq = dynamic(() => import("./Faq"));
const Blog = dynamic(() => import("./Blog"));

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <BannerLogos />
      <Counter />
      <Madeby />
      <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices />
      <Testimonials />
      <Faq />
      <Blog />
    </>
  );
};

export default HomePage;
