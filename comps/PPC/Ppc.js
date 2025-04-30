import React from "react";
import BannerForm from "../BannerForm";
import Link from "next/link";
import Banner from "./Banner";
import Introduction from "./Introduction";
import PpcPlatform from "./PpcPlatform";
import PpcCampaign from "./PpcCampaign";
import BenefitsPPC from "./BenefitsPPC";
import PPCServices from "./PPcServices";
import PPCFaq from "./PPcFaq";
import WhyPPC from "./WhyPPc";
import SIBPower from "@/comps/Home/SIBPower";
import PPcWebervices from "./PPcWebservices";
import PPcStrategy from "./PPcStrategy";
import PPcServicess from "./PPcServicess";
import WhatisPPc from "./WhatisPPc";

const Ppc = () => {
  const power_data = [
    {
      title: "Certified Google Premier Partner",
      description:
        "With a long-standing partnership with Google, we stay up-to-date with the latest PPC trends and tools.",
    },
    {
      title: "Tailored Campaigns",
      description:
        "We don’t believe in one-size-fits-all. Every PPC campaign we manage is uniquely designed for your business.",
    },
    {
      title: "Data-Driven Results",
      description:
        "Our strategies are backed by data, ensuring your ad spend is optimized for maximum returns.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Stay in the loop with detailed reports on your PPC campaign’s performance.",
    },
    {
      title: "Maximize ROI",
      description:
        "We focus on delivering high conversions at the lowest possible cost to maximize your return on investment.",
    },
    {
      title: "Cross-Platform Expertise",
      description:
        "From Google Ads to Facebook, Instagram, and YouTube — we manage PPC campaigns across all major platforms.",
    },
  ];

  return (
    <>
      <Banner />
      <WhatisPPc/>
      <WhyPPC />
      <PPCServices />
      <SIBPower
        title="Why Choose SIB Infotech?   "
        // subtitle="Experts in India "
        description="We are more than just a PPC Company"
        title_right="Benefits of getting PPC services from the best PPC agency in India "
        description_right="At SIB Infotech, we don’t just run ads — we deliver performance. Our PPC experts create data-driven, ROI-focused campaigns that put your brand in front of the right audience at the right time. From Google Ads to Bing and social media platforms, we optimize every click and keyword to ensure maximum conversions with minimal ad spend. Whether your goal is lead generation, eCommerce sales, or brand visibility, we customize each PPC strategy to align with your business goals and deliver measurable results that matter."
        // description_right="Did you know that over 75% of users never scroll past the first page of Google? More importantly, the top three search results capture over 60% of all clicks. That’s why being at the top isn’t an option—it’s a necessity! Our expertise as a leading SEO company in India ensures that your website doesn’t just rank—it dominates. "
        data={power_data}
      />
      <PPcStrategy />
      <PPcWebervices />
      <PPcServicess />

      <PPCFaq />
      <Introduction />
      <PpcPlatform />
      <PpcCampaign />
      <BenefitsPPC />
    </>
  );
};

export default Ppc;
