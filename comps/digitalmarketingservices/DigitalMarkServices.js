import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Link from "next/link";
import BannerForm from "../BannerForm";
import HeroDigitalMarketing from "./HeroDigitalMarketing";
import BestCompany from "./BestCompany";
import WeOffer from "./WeOffer";
import Benefits from "./Benefits";
import OurSteps from "./OurSteps";
import SpecializedServices from "./SpecializedServices";
import Why from "./Why";
import MarketingTools from "./MarketingTools";
import Faqs from "./Faqs";

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
