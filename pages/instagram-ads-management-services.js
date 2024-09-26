import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import InstagramAdsMgt from "@/comps/InstagramAdsMgt/InstagramAdsMgt";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";

export default function InstagramAdsManagementServices() {
  const metaTags = (
    <>
      <title>Title</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <InstagramAdsMgt />
    </CustomLayout>
  );
}
