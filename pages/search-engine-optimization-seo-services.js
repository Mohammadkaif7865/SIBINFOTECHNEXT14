import SEO from "@/comps/SEO2/SEO";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function SearchEngineOptimizationServices() {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refreshHard();
    };
  }, []);

  const [activeTab, setActiveTab] = useState("section1");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
      <Head>
        <title>
          Best SEO Company In India, SEO Services Mumbai, SEO Agency India
        </title>
        <meta
          name="description"
          content="Are you looking for the best SEO Company in India? SIB Infotech is the best SEO Company in India providing white-label SEO Services in India. With a comprehensive list of seo services."
        />
        <meta
          name="keywords"
          content="SEO Company in India, SEO Company in Mumbai, SEO Agency India, SEO Agency in India, SEO Agency in Mumbai, seo services, seo services in India, seo services in Mumbai, seo optimization service, India seo company, seo providers in India, search engine optimization companies in India, seo firms India, search engine optimization agencies"
        />
        {/* <link
          rel="canonical"
          href="https://www.sibinfotech.com/search-engine-optimization-seo-services"
        /> */}
      </Head>
      <SEO />
    </div>
  );
}
