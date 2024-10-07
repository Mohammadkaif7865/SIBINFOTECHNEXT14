import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import FacebookAdsMgt from "@/comps/FacebookAdsMgt/FacebookAdsMgt";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";

export default function FacebookAdsManagementServices() {
  const metaTags = (
    <>
      <title>Top Facebook Ads Management Services Company Mumbai, India</title>
      <meta name="description" content="Grow your brand awareness with SIB Infotech, India's well-known top Facebook ads management agency in Mumbai. Contact us for a customized Facebook Ads strategy!" />
      <meta name="keywords" content="facebook advertising agency, facebook ads management services, facebook ads company, facebook ads management company , facebook ads management agency" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/facebook-ads-management-services" />
      <meta property="og:title" content="Top Facebook Ads Management Services Company Mumbai, India" />
      <meta property="og:description" content="Grow your brand awareness with SIB Infotech, India's well-known top Facebook ads management agency in Mumbai. Contact us for a customized Facebook Ads strategy!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/facebook-ads-management-services
.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/facebook-ads-management-services" />
      <meta property="twitter:title" content="Top Facebook Ads Management Services Company Mumbai, India" />
      <meta property="twitter:description" content="Grow your brand awareness with SIB Infotech, India's well-known top Facebook ads management agency in Mumbai. Contact us for a customized Facebook Ads strategy!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/facebook-ads-management-services
.jpg" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <FacebookAdsMgt />
    </CustomLayout>
  );
}
