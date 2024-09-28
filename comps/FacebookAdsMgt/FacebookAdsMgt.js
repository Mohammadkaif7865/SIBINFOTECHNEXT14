import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Banner from "./Banner";
import WhyNeed from "./WhyNeed";
import Contact from "./Contact";
import HowWorks from "./HowWorks";
import AdsBenefit from "./AdsBenefit";
import TargetAudience from "./TargetAudience";
import EngagingAds from "./EngagingAds";
import Estimate from "./Estimate";
import AdsType from "./AdsType";
import Launchcampaign from "./Launchcampaign";

const FacebookAdsMgt = () => {
  return (
    <>
      <Banner />
      <WhyNeed />
      <Contact
        heading="Our experts make sure that your brand gets the limelight."
        subheading="of a major proportion of the audience."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
      <HowWorks />
      <Contact
        heading="We believe your success is our success."
        subheading=" We always make certain that your company gets the exposure it
        needs."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
      <AdsBenefit />
      <TargetAudience />
      <Contact
        heading="We believe your success is our success."
        subheading=" We always make certain that your company gets the exposure it
        needs."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
    <EngagingAds />
      <Estimate />
      <AdsType />
      <Launchcampaign />
    </>
  );
};

export default FacebookAdsMgt;
