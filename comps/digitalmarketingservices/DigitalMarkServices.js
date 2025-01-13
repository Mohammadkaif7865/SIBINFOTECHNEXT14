import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HeroDigitalMarketing from "./HeroDigitalMarketing";
import dynamic from "next/dynamic";

const Benefits = dynamic(() => import("./Benefits"), { ssr: false });
const BestCompany = dynamic(() => import("./BestCompany"), { ssr: false });
const Faqs = dynamic(() => import("./Faqs"), { ssr: false });
const MarketingTools = dynamic(() => import("./MarketingTools"), {
  ssr: false,
});
const OurSteps = dynamic(() => import("./OurSteps"), { ssr: false });
const SpecializedServices = dynamic(() => import("./SpecializedServices"), {
  ssr: false,
});
const WeOffer = dynamic(() => import("./WeOffer"), { ssr: false });
const Why = dynamic(() => import("./Why"), { ssr: false });

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
      <BestCompany />
      <WeOffer />
      <Benefits />
      <OurSteps />
      <SpecializedServices />
      <Why />
      <MarketingTools />

      <Faqs />
    </>
  );
};

export default DigitalMarkServices;
