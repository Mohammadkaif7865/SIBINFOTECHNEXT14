import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Banner from "./Banner";
import Introduction from "./Introduction";
import OnPageSeoServices from "./OnPageSeoServices";
import Benifits from "./Benifits";
import Invest from "./Invest";
import Optimization from "./Optimization";
import Contact from "./Contact";

const OnPageSeo = () => {
  return (
    <>
      <Banner />
     
      <Introduction />
    
      <OnPageSeoServices />
    
      <Benifits />
    
      <Invest />

      <Optimization />
      <Contact />
    </>
  );
};

export default OnPageSeo;
