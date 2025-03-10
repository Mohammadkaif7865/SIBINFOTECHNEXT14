import React from "react";
import HomeHero from "./HomeHero";
import BannerLogos from "./BannerLogos";
import Counter from "./Counter";
import Madeby from "./Madeby";
import Expertise from "./Expertise";
import DigitalMarketingServices from "./DigitalMarketingServices";
import AboutUs from "./AboutUs";
import DigitalMarketingWebAgency from "./DigitalMarketingWebAgency";
import DigitalMarketingAgency from "./DigitalMarketingAgency";
import WebsiteDesignServices from "./WebsiteDesignServices";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Blog from "./Blog";
import BannerSlider from "./BannerSlider";
import TrustedSection from "./TrustedSection";
import WhatWeDo from "./WhatWeDo";
import WeStrong from "./WeStrong";
import BannerSlider2 from "./BannerSlider2";

const HomePage = () => {
  return (
    <>
      {/* <HomeHero />
      <BannerLogos /> */}
      <BannerSlider2/>
      {/* <BannerSlider /> */}
      <TrustedSection />
      <WhatWeDo />
      <WeStrong />
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
