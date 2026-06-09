import Head from "next/head";
import { usePathname } from "next/navigation";
import React from "react";

export const CustomLayout = ({ children, meta }) => {
  const path = usePathname();
  return (
    <>
      <Head>
        <meta name="geography" content="INDIA" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.1018364;72.887766" />
        <meta name="ICBM" content="19.1018364, 72.887766" />
        <meta name="dc.language" content="English" />
        <meta name="language" content="English" />
        <meta name="category" content="Business" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="Rating" content="General" />
        <meta
          name="subject"
          content="Digital Marketing and Website Desigining"
        />
        <meta name="topic" content="Digital Marketing and Website Desigining" />
        <meta
          name="robots"
          content={
            path === "/index" ||
            path === "/index.php" ||
            path === "/blog/test-blog" ||
            path ===
              "/blog/google-updated-its-core-web-vitals-and-page-experience-faqs" ||
            path === "/blogs/elements-that-influence-conversion" ||
            path === "/blog/reason-why-you-should-own-an-e-commerce-website"
              ? "noindex, follow"
              : "index, follow"
          }
        />

        <meta content="yes" name="ALLOW-SEARCH" />
        <meta content="all" name="AUDIENCE" />
        <meta content="index, follow" name="YahooSeeker" />
        <meta content="index, follow" name="msnbot" />
        <meta
          name="googlebot"
          content={
            path === "/index" ||
            path === "/index.php" ||
            path === "/blog/test-blog" ||
            path ===
              "/blog/google-updated-its-core-web-vitals-and-page-experience-faqs" ||
            path === "/blogs/elements-that-influence-conversion" ||
            path ===
              "/blog/google-updated-its-core-web-vitals-and-page-experience-faqs"
              ? "noindex, follow"
              : "index, follow"
          }
        />
        <meta name="author" content="SIB Infotech" />
        <meta name="publisher" content="SIB Infotech" />
        <meta name="copyright" content="SIB Infotech" />
        <meta name="owner" content="SIB Infotech" />

        {/* <link rel="canonical" href={`https://www.sibinfotech.com${path}`} /> */}
        <link
          rel="canonical"
          href={
            path === "/index" || path === "/index.php"
              ? "https://www.sibinfotech.com/"
              : path === "/search-engine-optimization-seo-services" ||
                  path === "/search-engine-optimization-seo-services-packages"
                ? "https://www.sibinfotech.com/search-engine-optimization-seo-services"
                : path === "/pay-per-click-ppc-management-services"
                  ? "https://www.sibinfotech.com/google-ads-management-services"
                  : `https://www.sibinfotech.com${path}`
          }
        />
        {meta}
      </Head>

      {children}
    </>
  );
};
