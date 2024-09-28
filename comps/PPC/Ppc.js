import React from "react";
import BannerForm from "../BannerForm";
import Link from "next/link";
import Banner from "./Banner";
import Introduction from "./Introduction";
import PpcPlatform from "./PpcPlatform";
import PpcCampaign from "./PpcCampaign";
import BenefitsPPC from "./BenefitsPPC";

const Ppc = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <PpcPlatform />
      <PpcCampaign />
      <BenefitsPPC />
    </>
  );
};

export default Ppc;
