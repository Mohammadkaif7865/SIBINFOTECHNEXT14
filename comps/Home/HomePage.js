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
// import WhatWeDo from "./WhatWeDo";
import WeStrong from "./WeStrong";
import BannerSlider2 from "./BannerSlider2";
import BannerSlider3 from "./BannerSlider3";
// import WhatWeDo2 from "./WhatWeDo2";
import WhatWeDo3 from "./WhatWeDo3";
import About2 from "./About2";
import GooglePremier from "./GooglePremier";
import OurClients from "./OurClients";
// import PartnerBadges from "./PartnerBadges";
import PartnerBadges2 from "./PartnerBadges2";
import Cta from "./Cta";
import BrandBuild from "./BrandBuild";
import Pricing from "./Pricing";
import WhySIB from "./WhySIB";
import Conversions from "./Conversions";
import SIBPower from "./SIBPower";
import CaseStudy2 from "./CaseStudy2";
// import DeliverGrowth from "./DeliverGrowth";
import OurPeople from "./OurPeople";
import Tools from "./Tools";
import Industries2 from "./Industries2";
import Featured from "./Featured";
import Presence from "./Presence";
import Map from "./Map";

const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <About2 />
      {/* <BannerSlider /> */}
      {/* <TrustedSection /> */}
      <WeStrong />

      <WhatWeDo3 />
      <PartnerBadges2 />
      {/* <Counter /> */}
      <CaseStudy2 />
      <Madeby />
      <OurClients />
      <Testimonials />
      <Cta />
      <BrandBuild />
      <WhySIB />
      <Conversions />
      <OurPeople />
      <SIBPower />
      <Industries2 />
      <div className="toolsHome">
        <Tools />
      </div>
      <Featured />
      <Pricing />
      <Map />
      {/* <Presence/> */}

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
