import AOS from "aos";
import { useEffect } from "react";
import Banner from "./Banner";
import Benifits from "./Benifits";
import BookConsultation from "./BookConsultation";
import Faqs from "./Faqs";
import Help from "./Help";
import Introduction from "./Introduction";
import NewsWebsites from "./NewsWebsites";
import OutsourcingServices from "./OutsourcingServices";
import SeoAudit from "./SeoAudit";
import SeoProcess from "./SeoProcess";
import SeoServices from "./SeoServices";
import SeoTools from "./SeoTools";
import ServicesLogo from "./ServicesLogo";
import SpecialisedServices from "./SpecialisedServices";
import Strategy from "./Strategy";
import TalkWithExpert from "./TalkWithExpert";
import WhyChoose from "./WhyChoose";
import SeoTools2 from "./SeoTool2";
import Counter from "./Counter";

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
      <ServicesLogo />
      <Introduction />
      <SeoServices />
 
      <SeoTools2 />
      <TalkWithExpert
        heading="Are you ready to Expand Your Business online with our SEO Services?"
        linkTitle="Speak with one of our SEO Experts in Mumbai today!"
        linkDestination="#bannerSection"
      />
      <Benifits />
      <Strategy />

      <SpecialisedServices />
      <Help
        heading="How can we help you to Stop Loosing Leads to Your Competitors?"
        linkTitle="Contact Us"
        linkDestination="#bannerSection"
      />

      <WhyChoose />
      <SeoProcess />
      {/* <BookConsultation /> */}

      <NewsWebsites />

      <OutsourcingServices />

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
