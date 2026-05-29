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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "LinkedIn Ads Management Services",
            name: "LinkedIn Ads Management Services Agency India",
            alternateName: "LinkedIn Advertising Company in India",
            description:
              "SIB Infotech is a top-rated LinkedIn Ads management company in India offering result-driven LinkedIn advertising services including lead generation campaigns, brand awareness campaigns, audience targeting, sponsored content ads, LinkedIn PPC management, and B2B marketing solutions. Our LinkedIn advertising experts help businesses improve conversions, website traffic, professional engagement, and ROI through strategic LinkedIn campaigns.",
            url: "https://www.sibinfotech.com/linkedin-ads-management-services",
            image:
              "https://www.sibinfotech.com/assets/images/linkedin-ads-management-company-in-mumbai.jpg",

            provider: {
              "@type": "Organization",
              name: "SIB Infotech",
              url: "https://www.sibinfotech.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sibinfotech.com/assets/images/logo.webp",
              },
              foundingDate: "2005",
              telephone: "+91-9222260000",

              sameAs: [
                "https://www.facebook.com/sibinfotech/",
                "https://x.com/sibinfotech",
                "https://www.linkedin.com/company/sib-infotech/",
                "https://www.youtube.com/user/sibinfotech",
              ],

              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400064",
                  addressCountry: "IN",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress:
                    "First Floor, BF-21, Block BF, Tagore Garden, Tagore Garden Extension",
                  addressLocality: "New Delhi",
                  addressRegion: "Delhi",
                  postalCode: "110027",
                  addressCountry: "IN",
                },
              ],

              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "99",
                bestRating: "5",
                worstRating: "1",
              },
            },

            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United States" },
              { "@type": "Country", name: "United Kingdom" },
              { "@type": "Country", name: "Australia" },
              { "@type": "Country", name: "Canada" },
              { "@type": "Country", name: "Germany" },
              { "@type": "Country", name: "Singapore" },
              { "@type": "Country", name: "Portugal" },
              { "@type": "Country", name: "Belgium" },
              { "@type": "Country", name: "Netherlands" },
              { "@type": "Country", name: "Turkey" },
              { "@type": "Country", name: "New Zealand" },
              { "@type": "Country", name: "Japan" },
            ],

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "LinkedIn Advertising Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LinkedIn Lead Generation Campaigns",
                    description:
                      "Targeted LinkedIn advertising campaigns focused on generating high-quality B2B leads.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LinkedIn Sponsored Content Ads",
                    description:
                      "Sponsored content and feed advertising solutions for increased brand visibility and engagement.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LinkedIn Audience Targeting",
                    description:
                      "Advanced audience targeting based on industry, job title, company size, and professional interests.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LinkedIn Brand Awareness Campaigns",
                    description:
                      "Strategic LinkedIn campaigns designed to improve professional brand awareness and authority.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "LinkedIn PPC Management",
                    description:
                      "ROI-focused LinkedIn pay-per-click campaign management and optimization services.",
                  },
                },
              ],
            },

            serviceOutput: [
              "High-Quality B2B Lead Generation",
              "Professional Brand Visibility",
              "Increased Website Traffic",
              "Improved Conversion Rates",
              "Targeted Audience Reach",
              "Strategic LinkedIn Campaign Management",
              "Sponsored Content Advertising",
              "Real-Time Campaign Monitoring",
              "Enhanced Brand Reputation",
              "Detailed Performance Reporting",
            ],

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/linkedin-ads-management-services",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.sibinfotech.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "LinkedIn Ads Management Services",
                item: "https://www.sibinfotech.com/linkedin-ads-management-services",
              },
            ],
          }),
        }}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <LinkedinAdsPage />
    </CustomLayout>
  );
}
