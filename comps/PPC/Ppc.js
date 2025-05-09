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
import Solution from "@/comps/WhiteLabel/Solution";

const Ppc = () => {
  const PPcServices = [
    {
      title: `Google Ads <br class="d-none d-md-lg "/> Management`,
      description: `We create and manage high-performing Google Ads across Search, Display, Shopping, and YouTube to maximize ROI. As a Google Premier Partner, we optimize campaigns for better reach and lower CPC.`,
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: `Bing Ads <br class="d-none d-md-lg "/> Management`,
      description: `Tap into a unique audience with cost-effective Bing Ads campaigns. Our team optimizes for reach, relevance, and results across Microsoft’s search network.`,
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.jpg",
    },
    {
      title: `Social Media <br class="d-none d-md-lg "/> Advertising`,
      description: `We run data-driven paid campaigns on platforms like Facebook, Instagram, and LinkedIn to boost engagement, generate leads, and drive conversions.`,
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.jpg",
    },
    {
      title: `Yandex Ads <br class="d-none d-md-lg "/> Management`,
      description: `Target Russian and CIS audiences with localized ads on Yandex. Our experts optimize your campaigns with cultural insights and native targeting strategies.`,
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.jpg",
    },
    {
      title: `Amazon Ads <br class="d-none d-md-lg "/> Management`,
      description: `We help boost your product visibility and sales through Amazon Sponsored Ads, Product Display Ads, and Brand Campaigns tailored to shopping behavior.`,
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.jpg",
    },
  ];
  
  
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
      <Solution
        heading={" Our PPC Management Services  "}
        // subHeading={"We offer Best PPC Marketing Services in India"}
        discription={
           "Maximize your brand's visibility and ROI with our expert PPC solutions tailored for search engines, social platforms, and marketplaces. From keyword strategy to performance tracking, we deliver data-driven ad campaigns that convert — powered by white-label expertise trusted by agencies and global brands."
        }
        data={PPcServices}
      />
      {/* <PPcServicess /> */}

      <PPCFaq />
      <Introduction />
      <PpcPlatform />
      <PpcCampaign />
      <BenefitsPPC />
    </>
  );
};

export default Ppc;
