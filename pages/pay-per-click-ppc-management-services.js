import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import Ppc from "@/comps/PPC/Ppc";
import Head from "next/head";

export default function PpcManagementServices() {
  const metaTags = (
    <>
      <title>
        PPC Management Company India | Pay Per-Click Services Mumbai
      </title>
      <meta
        name="description"
        content="Drive traffic and boost ROI with SIB Infotech, an expert PPC management company in India. Our Pay-Per-Click services in Mumbai ensure optimal ad performance."
      />
      <meta name="keywords" content="Pay Per Click Management Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/pay-per-click-ppc-management-services"
      />
      <meta
        property="og:title"
        content="PPC Management Company India | Pay Per-Click Services Mumbai"
      />
      <meta
        property="og:description"
        content="Drive traffic and boost ROI with SIB Infotech, an expert PPC management company in India. Our Pay-Per-Click services in Mumbai ensure optimal ad performance."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/pay-per-click-ppc-management-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/pay-per-click-ppc-management-services"
      />
      <meta
        property="twitter:title"
        content="PPC Management Company India | Pay Per-Click Services Mumbai"
      />
      <meta
        property="twitter:description"
        content="Drive traffic and boost ROI with SIB Infotech, an expert PPC management company in India. Our Pay-Per-Click services in Mumbai ensure optimal ad performance."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/pay-per-click-ppc-management-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/pay-per-click-ppc-management-services"
        breadcrumbTitle="PPC Management Company India | Pay Per-Click Services Mumbai"
        PageRatingSchema
        description={
          "Drive traffic and boost ROI with SIB Infotech, an expert PPC management company in India. Our Pay-Per-Click services in Mumbai ensure optimal ad performance."
        }
        reviewCount={"5250"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <Ppc />
    </CustomLayout>
  );
}
