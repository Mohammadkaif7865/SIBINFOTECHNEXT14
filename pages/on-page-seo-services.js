import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import OnPageSeo from "@/comps/OnPageSeo/OnPageSeo";

export default function OnPageSeoServices() {
  const metaTags = (
    <>
      <title>On-Page SEO Services India | On-Page Optimization Experts | SIB Infotech</title>
      <meta name="description" content="Improve your Google rankings with SIB Infotech's on-page SEO services. We optimize titles, meta tags, headings, internal linking, content structure, schema markup, and Core Web Vitals to make your pages rank faster and higher." />
      <meta name="keywords" content="on-page SEO services, on-page optimization services, on-page SEO company india, on-site SEO services, HTML optimization, content structure optimization, meta tag optimization, internal linking strategy, on-page SEO experts, Core Web Vitals optimization" />


      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/on-page-seo-services" />
      <meta property="og:title" content="Best On-Page SEO Optimization Services in India" />
      <meta property="og:description" content="Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/on-page-seo-services.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/on-page-seo-services" />
      <meta property="twitter:title" content="Best On-Page SEO Optimization Services in India" />
      <meta property="twitter:description" content="Struggling to rank on Google? Our On-Page SEO experts fix content, structure, and technical issues to help your website perform better and drive more traffic." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/on-page-seo-services.webp" />
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
