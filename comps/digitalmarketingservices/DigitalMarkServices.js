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

const DigitalMarkServices = ({ service }) => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <>
      <HeroDigitalMarketing service={service} />
      <BestCompany service={service} />
      <WeOffer service={service} />
      <Benefits service={service} />
      <OurSteps service={service} />
      <SpecializedServices service={service} />
      <Why service={service} />
      <MarketingTools service={service} />

      <Faqs service={service} />
    </>
  );
};

export default DigitalMarkServices;
