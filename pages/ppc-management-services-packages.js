import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function PpcManagementServicesPackages() {
  const metaTags = (
    <>
      <title>
        Result-Driven PPC Management Services Packages | SIB Infotech
      </title>
      <meta
        name="description"
        content="Maximize ROI with top PPC management services by SIB Infotech. Explore customized, result-driven PPC packages to boost traffic and grow your business online."
      />
      <meta name="keywords" content="PPC Package" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/ppc-management-services-packages"
      />
      <meta
        property="og:title"
        content="Result-Driven PPC Management Services Packages | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Maximize ROI with top PPC management services by SIB Infotech. Explore customized, result-driven PPC packages to boost traffic and grow your business online."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/ppc-management-services-packages"
      />
      <meta
        property="twitter:title"
        content="Result-Driven PPC Management Services Packages | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Maximize ROI with top PPC management services by SIB Infotech. Explore customized, result-driven PPC packages to boost traffic and grow your business online."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://www.sibinfotech.com/ppc-management-services-packages#service",
          "name": "PPC Management Services Packages",
          "url": "https://www.sibinfotech.com/ppc-management-services-packages",
          "description": "Affordable PPC management service packages from SIB Infotech. We manage Google Ads, Facebook Ads, and more to drive targeted traffic.",
          "provider": {
            "@id": "https://www.sibinfotech.com/#organization"
          },
          "areaServed": {
            "@type": "Country",
            "name": "India"
          },
          "serviceType": "PPC Management Services Packages"
        },
        {
          "@type": "Organization",
          "@id": "https://www.sibinfotech.com/#organization",
          "name": "SIB Infotech",
          "url": "https://www.sibinfotech.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.sibinfotech.com/assets/images/logo.webp"
          },
          "telephone": "+91-92222-60000",
          "email": "info@sibinfotech.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "107, Orbit Premises, Mindspace, Near Inorbit Mall, Malad West",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400064",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "99",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.facebook.com/sibinfotech",
            "https://www.linkedin.com/company/sibinfotech",
            "https://twitter.com/sibinfotech"
          ]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.sibinfotech.com/ppc-management-services-packages#webpage",
          "url": "https://www.sibinfotech.com/ppc-management-services-packages",
          "name": "PPC Management Services Packages | SIB Infotech",
          "isPartOf": {
            "@id": "https://www.sibinfotech.com/#website"
          },
          "breadcrumb": {
            "@id": "https://www.sibinfotech.com/ppc-management-services-packages#breadcrumb"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.sibinfotech.com/#website",
          "url": "https://www.sibinfotech.com",
          "name": "SIB Infotech",
          "publisher": {
            "@id": "https://www.sibinfotech.com/#organization"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.sibinfotech.com/ppc-management-services-packages#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.sibinfotech.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "PPC Services",
              "item": "https://www.sibinfotech.com/pay-per-click-ppc-management-services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "PPC Management Services Packages",
              "item": "https://www.sibinfotech.com/ppc-management-services-packages"
            }
          ]
        }
      ]
    })
  }}
/>
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/ppc-management-services-packages"
        breadcrumbTitle="Result-Driven PPC Management Services Packages | SIB Infotech"
        PageRatingSchema
        description={
          "Maximize ROI with top PPC management services by SIB Infotech. Explore customized, result-driven PPC packages to boost traffic and grow your business online."
        }
        reviewCount={"5256"}
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
                  PPC Packages
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Increase Sale With Our PPC Packages India
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
                    Best <span className="textChange">PPC Packages </span>{" "}
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
        <Breadcrumb Pagetitle={"Result-Driven PPC Management "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">PPC Packages </span> Company in
              India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Result-Driven PPC Management "} />
      </div>
      <section className="customPadding">
        <div className="containerFull">
          <h3 className="customHeading text-center">
            <span>PPC Management </span>Packages, Pricing &amp; Plans
          </h3>
          <div className="tabs">
            <div className="row">
              <div className="col-lg-3">
                <div className="tag-line">
                  <img
                    alt="PPC Management Service Packages in India"
                    className="image-full"
                    src="assets/images/seo-packages-3.png"
                  />
                  <h4>CHOOSE YOUR PLAN</h4>
                  <p className="customText">
                    INCREASE YOUR WEBSITE
                    <br />
                    CONVERSIONS
                  </p>
                  <Link
                    className="green-btn"
                    href="tel:+91-9222260000"
                    target="_blank"
                  >
                    CALL US NOW
                  </Link>
                </div>
                <div className="tab-header">
                  <div className="tab">
                    <h5>Initial Research &amp; Analysis</h5>
                  </div>
                  <div className="tab active">
                    <h5>Campaign Setup &amp; Optimization</h5>
                  </div>
                  <div className="tab">
                    <h5>Reporting</h5>
                  </div>
                  <div className="tab">
                    <h5>Customer Support</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="tab-content">
                  <div className="">
                    <h4>Initial Research &amp; Analysis</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">Start Up</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Minimum Duration
                          </td>
                          <td data-label="Self Employed">3 Months</td>
                          <td data-label="Start Up">3 Months</td>
                          <td data-label="Grow">3 Months</td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Website Analysis
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Grow">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Keywords Analysis
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Market Analysis
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Competitor Analysis
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Pricing
                          </td>
                          <td data-label="Enterepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Wantrepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Custom">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="active">
                    <h4>Campaign Setup &amp; Optimization</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">Start Up</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Minimum Duration
                          </td>
                          <td data-label="Self Employed">3 Months</td>
                          <td data-label="Start Up">3 Months</td>
                          <td data-label="Grow">3 Months</td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Campaign Account Creation
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Grow">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Landing Page Recommendation
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Landing Page Optimization
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Text Ads
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Conversion Tracking
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Lead Tracking
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            A/B Testing
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Goal Setup
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Keywords Bid Analysis
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            ROI Tracking
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            CTR Tracking
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            CPC Tracking
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Mobile Ads
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-times crossIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Gmail Ads (GSP)
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-times crossIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Pricing
                          </td>
                          <td data-label="Enterepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Wantrepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Custom">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="">
                    <h4>Reporting</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">Start Up</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Minimum Duration
                          </td>
                          <td data-label="Self Employed">3 Months</td>
                          <td data-label="Start Up">3 Months</td>
                          <td data-label="Grow">3 Months</td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Reporting
                          </td>
                          <td data-label="Start Up">Monthly</td>
                          <td data-label="Grow">15 Days</td>
                          <td data-label="Wantrepreneur">Weekly</td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Adwords Campaign Performance Report
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Google Analytics Report
                          </td>
                          <td data-label="Self Employed">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Custom">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Pricing
                          </td>
                          <td data-label="Enterepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Wantrepreneur">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Custom">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4>Customer Support</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Deliverables</th>
                          <th className="bg-blue-4">Start Up</th>
                          <th className="bg-blue-4">Enterepreneur</th>
                          <th className="bg-blue-4">Wantrepreneur</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Minimum Duration
                          </td>
                          <td data-label="Self Employed">3 Months</td>
                          <td data-label="Start Up">3 Months</td>
                          <td data-label="Grow">3 Months</td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Email
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Chat / Skype
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Phone
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Phone Call for Review Meetings
                          </td>
                          <td data-label="Start Up">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Enterepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                          <td data-label="Wantrepreneur">
                            <i className="fa fa-check checkIcon"></i>
                          </td>
                        </tr>
                        <tr>
                          <td data-label="Key phrases to be Optimized">
                            Pricing
                          </td>
                          <td data-label="Self Employed">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Start Up">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                          <td data-label="Custom">
                            <Link
                              className="package-btn"
                              href="/contact-us"
                              target="_blank"
                            >
                              ENQUIRE
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
