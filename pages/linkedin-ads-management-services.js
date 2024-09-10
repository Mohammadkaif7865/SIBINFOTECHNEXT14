import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import LinkedinAdsPage from "@/comps/LinkedinAdsMgt/LinkedinAdsPage";
import Head from "next/head";

export default function LinkedinAdsManagementServices() {
  return (
    <div>
      <Head>
        <title>
          Best LinkedIn Advertising Agency in India ,LinkedIn Ads Management
          Services
        </title>
        <meta
          name="keywords"
          content="linkedin ad management, linkedin advertising management, linkedin advertising agency, linkedin marketing agency"
        />
        <meta
          name="description"
          content="We are a professional Linkedin ad management and advertising agency in India that helps to setup Linkedin advertising campaigns for B2B & B2C businesses to generate leads & drive conversions with LinkedIn ads."
        />
        {/* <link
          rel="canonical"
          href="https://www.sibinfotech.com/linkedin-ads-management-services"
        /> */}
      </Head>
      <LinkedinAdsPage />
    </div>
  );
}
