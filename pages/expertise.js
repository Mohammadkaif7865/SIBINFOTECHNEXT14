import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Expertise() {
  const metaTags = (
    <>
      <title>Expert Digital Solutions & Web Services | SIB Infotech</title>
      <meta
        name="description"
        content="SIB Infotech has expertise in web development, SEO, and digital marketing. Get tailored solutions with cutting-edge technology for your business growth."
      />
      <meta name="keywords" content="Our Expertise" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/expertise" />
      <meta
        property="og:title"
        content="Expert Digital Solutions & Web Services | SIB Infotech"
      />
      <meta
        property="og:description"
        content="SIB Infotech has expertise in web development, SEO, and digital marketing. Get tailored solutions with cutting-edge technology for your business growth."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/expertise.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/expertise"
      />
      <meta
        property="twitter:title"
        content="Expert Digital Solutions & Web Services | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech has expertise in web development, SEO, and digital marketing. Get tailored solutions with cutting-edge technology for your business growth."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/expertise.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/erp-crm-software-development-solutions"
        breadcrumbTitle="Best ERP & CRM Software Development Solutions Services India"
        PageRatingSchema
        description={
          "Optimize your business operations with ERP and CRM software development services by SIB Infotech. Contact us for tailored CRM solutions to meet your needs!"
        }
        reviewCount={"5193"}
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
                <h3 className="heading fontWeight700 text-white">
                  Our Expertise
                </h3>
                <div className="mt-4">
                  <Link href="/#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
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
                    Best <span className="textChange">Our Expertise </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={"Our Expertise"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Our Expertise </span> Company in
              India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Our Expertise"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row m-zero">
            <div className="col-md-4 col-6">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img src="assets/images/coding.png" alt="Web Development" />
                </div>
                <div className="expertise-title">
                  <p>Web Development</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img src="assets/images/responsive.png" alt="Web Design" />
                </div>
                <div className="expertise-title">
                  <p>Web Design</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 ">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img src="assets/images/online-shop.png" alt="E-commerce" />
                </div>
                <div className="expertise-title">
                  <p>E-commerce Portals</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img
                    src="assets/images/seo.png"
                    alt="Search Engine Optimization"
                  />
                </div>
                <div className="expertise-title">
                  <p>Search Engine Optimization</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img
                    src="assets/images/digital-campaign.png"
                    alt="Digital Marketing"
                  />
                </div>
                <div className="expertise-title">
                  <p>Digital Marketing</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-6 ">
              <div className="expertise-box">
                <div className="expertise-icon">
                  <img src="assets/images/brand.png" alt="Corporate Branding" />
                </div>
                <div className="expertise-title">
                  <p>Corporate Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
