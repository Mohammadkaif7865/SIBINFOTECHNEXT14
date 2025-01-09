import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import Ppc from "@/comps/PPC/Ppc";
import Head from "next/head";

export default function PpcManagementServices() {
  const metaTags = (
    <>
      <title>
        Best PPC Company in India | Top PPC Services Agency 2025
      </title>
      <meta
        name="description"
        content="Drive exceptional ROI with a certified PPC company in Mumbai, India. SIB Infotech offers top-rated PPC management services to ensure optimal ad performance."
      />
      <meta name="keywords" content="best ppc company in india, top ppc company in india, ppc company in india, ppc management services in india, best ppc company in mumbai, top ppc company in mumbai, ppc company in mumbai, ppc management services in mumbai" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/pay-per-click-ppc-management-services"
      />
      <meta
        property="og:title"
        content="Best PPC Company in India | Top PPC Services Agency 2025"
      />
      <meta
        property="og:description"
        content="Drive exceptional ROI with a certified PPC company in Mumbai, India. SIB Infotech offers top-rated PPC management services to ensure optimal ad performance."
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
        content="Best PPC Company in India | Top PPC Services Agency 2025"
      />
      <meta
        property="twitter:description"
        content="Drive exceptional ROI with a certified PPC company in Mumbai, India. SIB Infotech offers top-rated PPC management services to ensure optimal ad performance."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/pay-per-click-ppc-management-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/pay-per-click-ppc-management-services"
        breadcrumbTitle="Best PPC Company in India | Top PPC Services Agency 2025"
        PageRatingSchema
        description={
          "Drive exceptional ROI with a certified PPC company in Mumbai, India. SIB Infotech offers top-rated PPC management services to ensure optimal ad performance."
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
