import React, { useEffect } from "react";
import AOS from "aos";
import dynamic from "next/dynamic";
import LazyLoad from "../LazyLoad";

import HeroDigitalMarketing from "./HeroDigitalMarketing";

const BestCompany = dynamic(() => import("./BestCompany"), { ssr: true });
const WeOffer = dynamic(() => import("./WeOffer"), { ssr: true });
const Benefits = dynamic(() => import("./Benefits"), { ssr: true });
const OurSteps = dynamic(() => import("./OurSteps"), { ssr: false });
const SpecializedServices = dynamic(() => import("./SpecializedServices"), { ssr: true });
const DigitalMarketingGuide = dynamic(() => import("./DigitalMarketingGuide"), { ssr: true });
const Why = dynamic(() => import("./Why"), { ssr: true });
const MarketingTools = dynamic(() => import("./MarketingTools"), { ssr: false });
const Faqs = dynamic(() => import("./Faqs"), { ssr: true });

const DigitalMarkServices = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <HeroDigitalMarketing />
      <LazyLoad>
        <BestCompany />
      </LazyLoad>
      <LazyLoad>
        <WeOffer />
      </LazyLoad>
      <LazyLoad>
        <Benefits />
      </LazyLoad>
      <LazyLoad>
        <OurSteps />
      </LazyLoad>
      <LazyLoad>
        <SpecializedServices />
      </LazyLoad>
      <LazyLoad>
        <DigitalMarketingGuide />
      </LazyLoad>
      <LazyLoad>
        <Why />
      </LazyLoad>
      <LazyLoad>
        <MarketingTools />
      </LazyLoad>
      <LazyLoad>
        <Faqs />
      </LazyLoad>
    </>
  );
};

export default DigitalMarkServices;
