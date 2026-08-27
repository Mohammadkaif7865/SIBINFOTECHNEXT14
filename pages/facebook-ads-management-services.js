import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import FacebookAdsMgt from "@/comps/FacebookAdsMgt/FacebookAdsMgt";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function FacebookAdsManagementServices() {
  const metaTags = (
    <>
      <title>Facebook Ads Management Services in Mumbai, India | SIB Infotech</title>
      <meta name="description" content="Grow your brand with SIB Infotech's Facebook ads management services in Mumbai. 355% increase in qualified leads for clients. Targeted campaigns, Reels ads, Advantage+ & high ROI. India's trusted Facebook ads agency." />
      <meta name="keywords" content="facebook advertising agency Mumbai, facebook ads management services, facebook ads company Mumbai, facebook ads management company, facebook ads agency India, facebook marketing agency, Meta ads management services, facebook advertising agency India, facebook ads expert Mumbai, social media advertising Mumbai" />


      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/facebook-ads-management-services" />
      <meta property="og:title" content="Facebook Ads Management Services in Mumbai, India | SIB Infotech" />
      <meta property="og:description" content="Grow your brand with SIB Infotech's Facebook ads management services in Mumbai. 355% increase in qualified leads. Targeted campaigns, Reels ads, Advantage+ & high ROI." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/facebook-ads-management-services.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/facebook-ads-management-services" />
      <meta property="twitter:title" content="Facebook Ads Management Services in Mumbai, India | SIB Infotech" />
      <meta property="twitter:description" content="Grow your brand with SIB Infotech's Facebook ads management services in Mumbai. 355% increase in qualified leads. Targeted campaigns, Reels ads & high ROI." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/facebook-ads-management-services.webp" />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/facebook-ads-management-services"
        breadcrumbTitle="Facebook Ads Management Services in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Grow your brand with SIB Infotech's Facebook ads management services in Mumbai. 355% increase in qualified leads. Targeted campaigns, Reels ads & high ROI."
        }
        reviewCount={"5195"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <FacebookAdsMgt />
    </CustomLayout>
  );
}
