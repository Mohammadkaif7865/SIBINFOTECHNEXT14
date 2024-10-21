import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import InstagramAdsMgt from "@/comps/InstagramAdsMgt/InstagramAdsMgt";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function InstagramAdsManagementServices() {
  const metaTags = (
    <>
      <title>Instagram Ads Management Services Company in Mumbai, India</title>
      <meta name="description" content="Unlock the power of Instagram advertising with SIB Infotech—a professional Instagram Ads management agency in India. Contact us to grow your business today!" />
      <meta name="keywords" content="Instagram advertising agency, Instagram advertising services, Instagram ads manager, Instagram advertising company, promote products on Instagram" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/instagram-ads-management-services
" />
      <meta property="og:title" content="Instagram Ads Management Services Company in Mumbai, India" />
      <meta property="og:description" content="Unlock the power of Instagram advertising with SIB Infotech—a professional Instagram Ads management agency in India. Contact us to grow your business today!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/instagram-ads-management-services.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/instagram-ads-management-services
" />
      <meta property="twitter:title" content="Instagram Ads Management Services Company in Mumbai, India" />
      <meta property="twitter:description" content="Unlock the power of Instagram advertising with SIB Infotech—a professional Instagram Ads management agency in India. Contact us to grow your business today!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/instagram-ads-management-services.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/instagram-ads-management-services"
        breadcrumbTitle="Instagram Ads Management Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Unlock the power of Instagram advertising with SIB Infotech—a professional Instagram Ads management agency in India. Contact us to grow your business today!"
        }
        reviewCount={"5215"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <InstagramAdsMgt />
    </CustomLayout>
  );
}
