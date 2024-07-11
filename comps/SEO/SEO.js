import Link from "next/link";
import React, { useEffect, useState } from "react";
import BannerForm from "../BannerForm";
import AOS from "aos";
import Image from "next/image";
import Banner from "./Banner";
import Introduction from "./Introduction";
import SeoServices from "./SeoServices";
import SeoTools from "./SeoTools";
import TalkWithExpert from "./TalkWithExpert";
import Benifits from "./Benifits";
import SeoProcess from "./SeoProcess";
import Help from "./Help";
import WhyChoose from "./WhyChoose";
import SpecialisedServices from "./SpecialisedServices";
import NewsWebsites from "./NewsWebsites";
import Faqs from "./Faqs";
import SeoAudit from "./SeoAudit";

export function SearchEngineOptimizationServices() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);
}

const SEO = () => {
  const tools = [
    {
      src: "/assets/images/google-search-console.webp",
      alt: "Google Search Console Logo",
    },
    {
      src: "/assets/images/moz.webp",
      alt: "Moz Logo",
    },
    {
      src: "/assets/images/searchmetrics.webp",
      alt: "Searchmetrics Logo",
    },
    {
      src: "/assets/images/semrush.webp",
      alt: "Semrush Logo",
    },
    {
      src: "/assets/images/ahrefs.webp",
      alt: "ahrefs Logo",
    },
    {
      src: "/assets/images/screamingfrog.webp",
      alt: "Screaming Frog Logo",
    },
    {
      src: "/assets/images/similarweb.webp",
      alt: "Similar Web Logo",
    },
    {
      src: "/assets/images/rankwatch.webp",
      alt: "Rankwatch Logo",
    },
    {
      src: "/assets/images/ubersuggest.webp",
      alt: "Ubersuggest Logo",
    },
    {
      src: "/assets/images/kwfinder.webp",
      alt: "KW finder Logo",
    },
    {
      src: "/assets/images/spy-fu.webp",
      alt: "Spy Fu Logo",
    },
    {
      src: "/assets/images/quilbot.webp",
      alt: "Quilbot Logo",
    },
  ];

  return (
    <>
      <Banner />
      <Introduction />

      <SeoServices />

      <SeoTools />

      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in India today!"
        linkDestination="#bannerSection"
      />

      <Benifits />

      <SeoProcess />
      <Help
        heading="How can we help you to Stop Loosing Leads to Your Competitors?"
        linkTitle="Contact Us"
        linkDestination="#bannerSection"
      />

      <WhyChoose />

      <SpecialisedServices />
      <NewsWebsites />

      <Help
        heading="80% of Customers will never look past the first search engine
        results page."
        linkTitle="Get to know how"
        linkDestination="#bannerSection"
      />
      <Faqs />

      <SeoAudit />
    </>
  );
};

export default SEO;
