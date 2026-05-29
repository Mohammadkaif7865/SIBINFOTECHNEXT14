import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function LawWebsiteDevelopmentMumbai() {
  const metaTags = (
    <>
      <title>Law Website Development in Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Get specialized law website development services in Mumbai, India. SIB Infotech creates professional, user-friendly, top law sites tailored for legal firms."
      />
      <meta name="keywords" content="Law Website Development" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/law-website-development-mumbai-india"
      />
      <meta
        property="og:title"
        content="Law Website Development in Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Get specialized law website development services in Mumbai, India. SIB Infotech creates professional, user-friendly, top law sites tailored for legal firms."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/law-website-development-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/law-website-development-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Law Website Development in Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Get specialized law website development services in Mumbai, India. SIB Infotech creates professional, user-friendly, top law sites tailored for legal firms."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/law-website-development-mumbai-india.jpg"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Law Website Development",
            name: "Law Website Development Services",
            alternateName: "Top Law Website Development Company in India",
            description:
              "SIB Infotech specialises in professional law website development services in Mumbai, India. We create custom, user-friendly websites for law firms and attorneys — focusing on online strategy, professional image, client referrals, news retrieval, educational resources, and multiple contact methods. Our goal is to incorporate special features that build referrals, present a professional image, and enhance visitor experience, all within a strict budget.",
            url: "https://www.sibinfotech.com/law-website-development-mumbai-india",
            image:
              "https://www.sibinfotech.com/assets/og/law-website-development-mumbai-india.jpg",

            provider: {
              "@type": "Organization",
              name: "SIB Infotech",
              url: "https://www.sibinfotech.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sibinfotech.com/_next/image?url=%2Fassets%2Fimages%2Flogo%20(1).webp&w=3840&q=100",
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
              name: "Law Website Development Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Law Website Design",
                    description:
                      "Professional, custom-designed websites for law firms and attorneys that present a strong public image, support client acquisition, and enhance the visitor experience.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Law Firm Website Content Writing",
                    description:
                      "Specialist legal content writing services that inform clients, support educational resources, and help law firms communicate their services clearly and professionally online.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Law Website Marketing Solutions",
                    description:
                      "Custom marketing plans for law firms designed to build referrals, raise public image, and acquire new clients through a strategic and fresh approach to online presence.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Client-Friendly Law Practice Features",
                    description:
                      "Integration of client-friendly features including multiple methods of contact, news retrieval, and educational resources that are always available to clients online.",
                  },
                },
              ],
            },

            serviceOutput: [
              "Professional Law Firm Website",
              "Custom Legal Website Design",
              "Strong Public Image for Attorneys",
              "Client Referral Building Platform",
              "Multiple Client Contact Methods",
              "Online News Retrieval and Educational Resources",
              "Custom Legal Marketing Plan",
            ],

            termsOfService: "https://www.sibinfotech.com/terms-and-conditions",

            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://www.sibinfotech.com/law-website-development-mumbai-india",
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
                item: "https://www.sibinfotech.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Website Development Services",
                item: "https://www.sibinfotech.com/website-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Law Website Development",
                item: "https://www.sibinfotech.com/law-website-development-mumbai-india",
              },
            ],
          }),
        }}
      />

      {/* <BreadcrumbSchema
        url="https://www.sibinfotech.com/law-website-development-mumbai-india"
        breadcrumbTitle="Law Website Development in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Get specialized law website development services in Mumbai, India. SIB Infotech creates professional, user-friendly, top law sites tailored for legal firms."
        }
        reviewCount={"5225"}
      /> */}
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Law Website Development
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Law Website Development Company in India
                </h2>
                <div className="mt-4">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best{" "}
                    <span className="textChange">Law Website Development </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Law Website Development "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Law Website Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Law Website Development "} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  The information and document based legal industry has reformed
                  immensely and now has the ability to both manage and deliver
                  information with the click of a mouse.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <p>
                Huge amounts of paperwork and related office labor are no longer
                incurred. Attorneys can make their law practice more client
                friendly, use multiple methods of contact, news retrieval and
                educational resources that are always available to the client.
              </p>
              <div className="custom-content-title">
                <p>Law Website Design Features</p>
              </div>
              <p>
                We specialize in knowing what your law-clients are looking for
                and how best to incorporate special features into your Web site.
                Our goal is to focus on your online strategy and enhance your
                law Web site with the proper elements that will build referrals,
                present your professional image and enhance the visitors
                experience and do it with a strict budget in mind.
              </p>
              <p>
                Our Website Design team has been helping create professional,
                custom websites and marketing solutions to acquire new clients
                and raise a strong public image.
              </p>
              <p>
                We pursue a fresh approach to create a website, content writing
                and marketing let us create custom websites and successful
                marketing plans
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Law Website Development Company in India"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
