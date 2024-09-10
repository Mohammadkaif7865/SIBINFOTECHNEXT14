import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import OnPageSeo from "@/comps/OnPageSeo/OnPageSeo";
import Head from "next/head";

export default function OnPageSeoServices() {
  return (
    <div>
      <Head>
        <title>
          On-Page SEO & On-Site Optimization Services, SEO Analysis Company
          India
        </title>
        <meta
          name="keywords"
          content="On Page SEO, On-Site Optimization Services, On Page Optimization, On Page SEO Optimization, On Page SEO Analysis."
        />
        <meta
          name="description"
          content="SIB Infotech is the Top SEO Company in India offers On-Page SEO & On-Site Optimization Services which  enables Google to read and rank your website ensure you #1 position on organic results"
        />
        {/* <link
          rel="canonical"
          href="https://www.sibinfotech.com/on-page-seo-services"
        /> */}
      </Head>
      <OnPageSeo />
    </div>
  );
}
