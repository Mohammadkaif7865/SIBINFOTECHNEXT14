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
import WhatWeDo2 from "./WhatWeDo2";
import About2 from "./About2";
import GooglePremier from "./GooglePremier";
import OurClients from "./OurClients";
import PartnerBadges from "./PartnerBadges";
import Cta from "./Cta";
import BrandBuild from "./BrandBuild";
import Pricing from "./Pricing";
import WhySIB from "./WhySIB";
import SIBPower from "./SIBPower";
import CaseStudy from "./CaseStudy";
import DeliverGrowth from "./DeliverGrowth";

const HomePage = () => {
  return (
    <>
      {/* <HomeHero />
      <BannerLogos /> */}
      <BannerSlider2/>
      <About2/>
      {/* <BannerSlider /> */}
      <TrustedSection />
      {/* <WhatWeDo2 /> */}
      
      <WhatWeDo />
    
      {/* <Counter /> */}
      <CaseStudy/>
      <Madeby />
      <WeStrong />
      <GooglePremier/>
      <OurClients/>
      <PartnerBadges/>
      <Testimonials />
      <Cta/>
      <BrandBuild/>
      <WhySIB/>
      <SIBPower/>
      <DeliverGrowth/>
      <Pricing/>

      {/* <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices /> */}
     
      <Faq />
      <Blog />
    </>
  );
};

export default HomePage;
