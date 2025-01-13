import React from "react";
import HomeHero from "./HomeHero"; 
import dynamic from "next/dynamic"; 
const BannerLogos = dynamic(() => import("./BannerLogos"), { ssr: false });
const Counter = dynamic(() => import("./Counter"), { ssr: false });
const Madeby = dynamic(() => import("./Madeby"), { ssr: false });
const Expertise = dynamic(() => import("./Expertise"), { ssr: false });
const DigitalMarketingServices = dynamic(() => import("./DigitalMarketingServices"), { ssr: false });
const AboutUs = dynamic(() => import("./AboutUs"), { ssr: false });
const DigitalMarketingWebAgency = dynamic(() => import("./DigitalMarketingWebAgency"), { ssr: false });
const DigitalMarketingAgency = dynamic(() => import("./DigitalMarketingAgency"), { ssr: false });
const WebsiteDesignServices = dynamic(() => import("./WebsiteDesignServices"), { ssr: false });
const Testimonials = dynamic(() => import("./Testimonials"), { ssr: false });
const Faq = dynamic(() => import("./Faq"), { ssr: false });
const Blog = dynamic(() => import("./Blog"), { ssr: false });


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
