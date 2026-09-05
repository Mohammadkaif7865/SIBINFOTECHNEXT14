import Image from "next/image";
import React from "react";

const ItemInfographic = ({ src, alt, text }) => (
  <div className="itemInfographic shadow" data-aos="zoom-in">
    <div className="iconDigi py-0 h-auto">
      <Image width={500} height={500} className="w-100 h-auto" src={src} alt={alt} />
    </div>
    <p className="mt-2">{text}</p>
  </div>
);

const BestCompany = () => {
  
  const items = [
    {
      src: "/assets/images/icons/digital-marketing-copmany-in-mumbai.svg",
      alt: "Increase Brand Awareness",
      text: "Increase Brand Awareness",
    },
    {
      src: "/assets/images/icons/digital-marketing-company-in-delhi.svg",
      alt: "Increase Sales",
      text: "Increase Sales",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-india.svg",
      alt: "Increase customer Engagement",
      text: "Increase Customer Engagement",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-mumbai.svg",
      alt: "Maximize your ROI",
      text: "Maximize your ROI",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-md-5">
            <div className="rightSeoImgInner ps-lg-0">
              {items.map((item, index) => (
                <ItemInfographic key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-4">
            <div className="ps-lg-4">
              <h2 className="sub_heading fontHeading fontWeight600">
                Top{" "}
                <span className="text_red">
                  Digital Marketing Company &amp; Agency in India
                </span>
              </h2>
              <p className="customText text-justify mt-3">
                SIB Infotech is an award-winning, ROI-driven digital marketing company in India
                with flagship headquarters in Mumbai and corporate operations in New Delhi. Since 2005,
                our Google Premier Partner agency has partnered with more than 1,000 global and Indian
                brands across 40+ countries. Recognized among the premier digital marketing firms in India,
                we engineer custom-tailored customer acquisition engines that combine technical precision,
                predictive consumer behavioral analytics, and multi-channel performance marketing.
              </p>
              <p className="customText text-justify">
                The modern digital marketing industry in India is evolving at an unprecedented velocity.
                With over 900 million active internet users and fierce market competition across every commercial sector,
                traditional ad-hoc advertising is no longer enough. Forward-thinking enterprises, high-growth startups,
                and regional brands require cohesive, full-funnel digital marketing solutions in India that unite Search Engine
                Optimization (SEO), Pay-Per-Click advertising (PPC &amp; Google Ads), Social Media Marketing (SMM),
                Conversion Rate Optimization (CRO), and advanced AI search visibility under one unified growth strategy.
              </p>
              <p className="customText text-justify">
                Unlike transactional agencies that focus solely on vanity metrics like clicks and impressions, SIB Infotech
                operates as a strategic growth partner. Whether you are an established conglomerate expanding into new verticals
                or an ambitious digital marketing business in India seeking profitable customer acquisition, our digital marketing
                consultants craft scalable frameworks designed to lower Customer Acquisition Cost (CAC), accelerate qualified sales pipelines,
                and maximize lifetime customer value (LTV).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCompany;
