import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import LinkedinAdsPage from "@/comps/LinkedinAdsMgt/LinkedinAdsPage";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function LinkedinAdsManagementServices() {
  const metaTags = (
    <>
      <title>
        LinkedIn Ads Management Services Agency India | SIB Infotech
      </title>
      <meta
        name="description"
        content="Maximize your B2B reach with LinkedIn Ads Management Services India by SIB Infotech. Drive engagement and generate leads with targeted advertising strategies."
      />
      <meta
        name="keywords"
        content="linkedin ad management, linkedin advertising management, linkedin advertising agency, linkedin marketing agency"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/linkedin-ads-management-services"
      />
      <meta
        property="og:title"
        content="LinkedIn Ads Management Services Agency India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Maximize your B2B reach with LinkedIn Ads Management Services India by SIB Infotech. Drive engagement and generate leads with targeted advertising strategies."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/linkedin-ads-management-services
.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/linkedin-ads-management-services"
      />
      <meta
        property="twitter:title"
        content="LinkedIn Ads Management Services Agency India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Maximize your B2B reach with LinkedIn Ads Management Services India by SIB Infotech. Drive engagement and generate leads with targeted advertising strategies."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/linkedin-ads-management-services
.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/linkedin-ads-management-services"
        breadcrumbTitle="LinkedIn Ads Management Services Agency India | SIB Infotech"
        PageRatingSchema
        description={
          "Maximize your B2B reach with LinkedIn Ads Management Services India by SIB Infotech. Drive engagement and generate leads with targeted advertising strategies."
        }
        reviewCount={"5228"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <LinkedinAdsPage />
    </CustomLayout>
  );
}
