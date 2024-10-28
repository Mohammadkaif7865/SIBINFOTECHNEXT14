import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import GoogleAdsMgt from "@/comps/Google Ads/GoogleAdsMgt";


export default function GoogleAdsManagementServices() {
  const metaTags = (
    <>
      <title>Top Google Ads Management Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
      />
      <meta
        name="keywords"
        content="PPC Management, Pay Per Click Management, PPC Account Management, AdWords Management, Google AdWords Management Services, Google Ads Management, Google Ads Company, Google Ads Service, Ads Management Company, best ppc management company"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/google-ads-management-services
"
      />
      <meta
        property="og:title"
        content="Top Google Ads Management Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/google-ads-management-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/google-ads-management-services"
      />
      <meta
        property="twitter:title"
        content="Top Google Ads Management Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/google-ads-management-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/google-ads-management-services"
        breadcrumbTitle="Top Google Ads Management Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Optimize your Google Ads campaigns with SIB Infotech, India's certified Google AdWords service provider in Mumbai. Get the top-rated Google Ads solutions today!"
        }
        reviewCount={"5208"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <GoogleAdsMgt />
    </CustomLayout>
  );
}
