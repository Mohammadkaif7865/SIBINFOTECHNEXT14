import React from "react";

import Introduction from "./Introduction";
import WorkWebdesign from "../WorkWebdesign";
import Link from "next/link";
import WhyBest from "./WhyBest";
import GrowBusiness from "./GrowBusiness";
import Contact from "./Contact";
import DesigningProcess from "./DesigningProcess";
import Engagement from "./Engagement";
import Industries from "./Industries";
import Faqs from "./Faqs";
import Banner from "./Banner";
import DigitalMarketingWebAgency from "../Home/DigitalMarketingWebAgency";
import WebsiteDesignServices from "../Home/WebsiteDesignServices";

const WebDesigning = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <WhyBest />
      <GrowBusiness />
      <section className="bg4 overflowHidden position-relative">
        <WorkWebdesign />
      </section>
      <Contact />
      <DesigningProcess />
      <DigitalMarketingWebAgency />
      {/* <DigitalMarketingAgency /> */}
      <WebsiteDesignServices />
      <Engagement />
      <Industries />
      <Faqs />
    </>
  );
};

export default WebDesigning;
