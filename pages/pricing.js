import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function Pricing() {
  const metaTags = (
    <>
      <title>Affordable SEO Marketing Pricing Packages | SIB Infotech</title>
      <meta
        name="description"
        content="Explore competitive pricing for SEO marketing services in Mumbai, India. SIB Infotech offers affordable pricing packages to fit your business needs."
      />
      <meta name="keywords" content="Digital Marketing Pricing Packages" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/pricing" />
      <meta
        property="og:title"
        content="Affordable SEO Marketing Pricing Packages | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Explore competitive pricing for SEO marketing services in Mumbai, India. SIB Infotech offers affordable pricing packages to fit your business needs."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/pricing"
      />
      <meta
        property="twitter:title"
        content="Affordable SEO Marketing Pricing Packages | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Explore competitive pricing for SEO marketing services in Mumbai, India. SIB Infotech offers affordable pricing packages to fit your business needs."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/sib-infotech.png"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/pricing"
        breadcrumbTitle="Affordable SEO Marketing Pricing Packages | SIB Infotech"
        PageRatingSchema
        description={
          "Boost brand visibility with press release submission services by SIB Infotech. Reach a wider audience and improve online presence with expert PR distribution."
        }
        reviewCount={"5258"}
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
                  Digital Marketing Pricing Packages
                </h1>
                <h2 className="small_heading fw-bold mt-lg-3 text-white">
                  Explore Competitive Pricing for SEO Marketing Services
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
                    <span className="textChange">
                      Digital Marketing Packages{" "}
                    </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none  ">
        <Breadcrumb Pagetitle={"Pricing Packages"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best{" "}
              <span className="textChange">Digital Marketing Packages </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Pricing Packages"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title"></div>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row m-zero">
                <div className="col-md-4">
                  <div className="pricing-box shadow">
                    <div className="pricing-head">
                      <p className="pricing-name">Free Trial</p>
                    </div>
                    <div className="pricing-center">
                      <p className="pricing-value">Free</p>
                      <p className="pricing-content">
                        No hidden fees. No pressure.
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <p>Keyword Research &amp; Selection</p>
                        </li>
                        <li>
                          <p>Baseline SEO Ranking Report</p>
                        </li>
                        <li>
                          <p>On Page Optimization</p>
                        </li>
                        <li>
                          <p>XML Sitemap Generation &amp; Submission</p>
                        </li>
                        <li>
                          <p>Webmaster Tool Management</p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-foot">
                      <Link href="#" className="common-btn">
                        Start Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pricing-box shadow">
                    <div className="pricing-head">
                      <p className="pricing-name">Small Business</p>
                    </div>
                    <div className="pricing-center">
                      <p className="pricing-value">$ 49.99</p>
                      <p className="pricing-content">
                        Ideal for Bloggers / Start-Ups / Small Businesses with a
                        limited budget.
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <p>Keyword Research &amp; Selection</p>
                        </li>
                        <li>
                          <p>Baseline SEO Ranking Report</p>
                        </li>
                        <li>
                          <p>On Page Optimization</p>
                        </li>
                        <li>
                          <p>XML Sitemap Generation &amp; Submission</p>
                        </li>
                        <li>
                          <p>Webmaster Tool Management</p>
                        </li>
                        <li>
                          <p>Social Media Optimization</p>
                        </li>
                        <li>
                          <p>Weekly &amp; Monthly Reporting</p>
                        </li>
                        <li>
                          <p>24/7 Email Support</p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-foot">
                      <Link href="#" className="common-btn">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="pricing-box shadow">
                    <div className="pricing-head">
                      <p className="pricing-name">Enterprise</p>
                    </div>
                    <div className="pricing-center">
                      <p className="pricing-value">$ 129.99</p>
                      <p className="pricing-content">
                        Ideal for ecommerce, big companies with the goal to
                        reach massive audiences.
                      </p>
                      <ul className="pricing-list">
                        <li>
                          <p>Keyword Research &amp; Selection</p>
                        </li>
                        <li>
                          <p>Baseline SEO Ranking Report</p>
                        </li>
                        <li>
                          <p>On Page Optimization</p>
                        </li>
                        <li>
                          <p>XML Sitemap Generation &amp; Submission</p>
                        </li>
                        <li>
                          <p>Webmaster Tool Management</p>
                        </li>
                        <li>
                          <p>Social Media Optimization</p>
                        </li>
                        <li>
                          <p>Weekly &amp; Monthly Reporting</p>
                        </li>
                        <li>
                          <p>24/7 Email Support</p>
                        </li>
                        <li>
                          <p>Online Chat Support</p>
                        </li>
                        <li>
                          <p>Blog Creation &amp; Promotion</p>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-foot">
                      <Link href="#" className="common-btn">
                        Buy Now
                      </Link>
                    </div>
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
