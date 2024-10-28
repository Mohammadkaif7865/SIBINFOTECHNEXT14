import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import { CustomLayout } from "@/comps/CustomLayout";
import SEO from "@/comps/SEO2/SEO";
import "aos/dist/aos.css";

export default function SearchEngineOptimizationServices() {


  const metaTags = (
    <>
      <title>Top SEO Company in India | Best SEO Services Agency Mumbai</title>
      <meta name="description" content="Enhance your online visibility and organic traffic with SIB Infotech, the best SEO company in India. Achieve lasting results with expert SEO services in Mumbai." />
      <meta name="keywords" content="SEO Company in India, SEO Company in Mumbai, SEO Agency India, SEO Agency in India, SEO Agency in Mumbai, seo services, seo services in India, seo services in Mumbai, seo optimization service, India seo company, seo providers in India, search engine optimization companies in India, seo firms India, search engine optimization agencies" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/search-engine-optimization-seo-services" />
      <meta property="og:title" content="Top SEO Company in India | Best SEO Services Agency Mumbai" />
      <meta property="og:description" content="Enhance your online visibility and organic traffic with SIB Infotech, the best SEO company in India. Achieve lasting results with expert SEO services in Mumbai." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/search-engine-optimization-seo-services" />
      <meta property="twitter:title" content="Top SEO Company in India | Best SEO Services Agency Mumbai" />
      <meta property="twitter:description" content="Enhance your online visibility and organic traffic with SIB Infotech, the best SEO company in India. Achieve lasting results with expert SEO services in Mumbai." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/search-engine-optimization-seo-services.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/search-engine-optimization-seo-services"
        breadcrumbTitle="Top SEO Company in India | Best SEO Services Agency Mumbai"
        PageRatingSchema
        description={
        "Enhance your online visibility and organic traffic with SIB Infotech, the best SEO company in India. Achieve lasting results with expert SEO services in Mumba"
        }
        reviewCount={"5274"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <SEO />
    </CustomLayout>
  );
}
