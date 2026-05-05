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
            "@graph": [
              {
                "@type": "Service",
                "@id":
                  "https://www.sibinfotech.com/law-website-development-mumbai-india#service",
                name: "Law Website Development",
                url: "https://www.sibinfotech.com/law-website-development-mumbai-india",
                description:
                  "Professional law firm website development services in Mumbai by SIB Infotech. We build authoritative and conversion-focused legal websites.",
                provider: {
                  "@id": "https://www.sibinfotech.com/#organization",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
                serviceType: "Law Website Development",
              },
              {
                "@type": "Organization",
                "@id": "https://www.sibinfotech.com/#organization",
                name: "SIB Infotech",
                url: "https://www.sibinfotech.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.sibinfotech.com/assets/images/logo.webp",
                },
                telephone: "+91-92222-60000",
                email: "info@sibinfotech.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress:
                    "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
                  addressLocality: "Mumbai",
                  addressRegion: "Maharashtra",
                  postalCode: "400064",
                  addressCountry: "IN",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "99",
                  bestRating: "5",
                  worstRating: "1",
                },
                sameAs: [
                  "https://www.facebook.com/sibinfotech",
                  "https://www.linkedin.com/company/sibinfotech",
                  "https://twitter.com/sibinfotech",
                ],
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.sibinfotech.com/law-website-development-mumbai-india#webpage",
                url: "https://www.sibinfotech.com/law-website-development-mumbai-india",
                name: "Law Website Development | SIB Infotech",
                isPartOf: {
                  "@id": "https://www.sibinfotech.com/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.sibinfotech.com/law-website-development-mumbai-india#breadcrumb",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.sibinfotech.com/#website",
                url: "https://www.sibinfotech.com",
                name: "SIB Infotech",
                publisher: {
                  "@id": "https://www.sibinfotech.com/#organization",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.sibinfotech.com/law-website-development-mumbai-india#breadcrumb",
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
                    name: "Web Development",
                    item: "https://www.sibinfotech.com/website-development-services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Law Website Development",
                    item: "https://www.sibinfotech.com/law-website-development-mumbai-india",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/law-website-development-mumbai-india"
        breadcrumbTitle="Law Website Development in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Get specialized law website development services in Mumbai, India. SIB Infotech creates professional, user-friendly, top law sites tailored for legal firms."
        }
        reviewCount={"5225"}
      />
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
