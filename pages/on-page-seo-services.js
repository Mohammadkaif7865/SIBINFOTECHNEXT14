import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import OnPageSeo from "@/comps/OnPageSeo/OnPageSeo";

export default function OnPageSeoServices() {
  const metaTags = (
    <>
      <title>Best On-Page SEO Optimization Services in India</title>
      <meta name="description" content="Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic." />
      <meta name="keywords" content="On Page SEO, On-Site Optimization Services, On Page Optimization, On Page SEO Optimization, On Page SEO Analysis." />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/on-page-seo-services" />
      <meta property="og:title" content="Best On-Page SEO Optimization Services in India" />
      <meta property="og:description" content="Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/on-page-seo-services.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/on-page-seo-services" />
      <meta property="twitter:title" content="Best On-Page SEO Optimization Services in India" />
      <meta property="twitter:description" content="Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/on-page-seo-services.jpg" />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/on-page-seo-services"
        breadcrumbTitle="Best On-Page SEO Optimization Services in India"
        PageRatingSchema
        description={
          "Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic."
        }
        reviewCount={"5243"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <OnPageSeo />
    </CustomLayout>
  );
}
