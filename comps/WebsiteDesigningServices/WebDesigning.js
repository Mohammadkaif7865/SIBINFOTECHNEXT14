import React from "react";
import Banner from "../SEO/Banner";
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
      <Engagement />
      <Industries />
      <Faqs />
    </>
  );
};

export default WebDesigning;
