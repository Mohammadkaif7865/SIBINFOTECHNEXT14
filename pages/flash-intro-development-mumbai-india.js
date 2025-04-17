import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function FlashIntroDevelopmentMumbaiIndia() {
  const metaTags = (
    <>
      <title>Flash Intro Development Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Create stunning Flash intro development with SIB Infotech. Our experts design engaging, dynamic, and interactive Flash intros to captivate your audience."
      />
      <meta name="keywords" content="Flash Intro Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/flash-intro-development-mumbai-india"
      />
      <meta
        property="og:title"
        content="Flash Intro Development Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Create stunning Flash intro development with SIB Infotech. Our experts design engaging, dynamic, and interactive Flash intros to captivate your audience."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/flash-intro-development-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/flash-intro-development-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Flash Intro Development Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Create stunning Flash intro development with SIB Infotech. Our experts design engaging, dynamic, and interactive Flash intros to captivate your audience."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/flash-intro-development-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/flash-intro-development-mumbai-india"
        breadcrumbTitle="Flash Intro Development Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Create stunning Flash intro development with SIB Infotech. Our experts design engaging, dynamic, and interactive Flash intros to captivate your audience."
        }
        reviewCount={"5201"}
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
                  Flash Intro Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Flash Intro Development Company in Mumbai, India
                </h2>
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
                    Best{" "}
                    <span className="textChange">Flash Intro Services </span>{" "}
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
        <Breadcrumb Pagetitle={"Flash Intro Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Flash Intro Services </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Flash Intro Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech is a leading specialist in Flash application
                  development including Flash web introduction.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                The company provides end-end services in Flash development for
                clients across diverse industry segments. The company is
                promoted by experienced IT professionals who have vast
                experience in delivering offshore IT projects.
              </p>
              <p>
                The company provides end-end services in Flash development for
                clients across diverse industry segments. The company is
                promoted by experienced IT professionals who have vast
                experience in delivering offshore IT projects.
              </p>
              <p>
                Flash Web Introduction is an animated banner that provides
                information about the company or product in an attractive way by
                using animated text, graphics, objects etc. Animated web
                introductions are attractive in nature and help to hold-back the
                visitors. Animation &amp; other attractive features play a very
                important role in lead generation.
              </p>
              <p>
                We are equipped with a talented team of Flash developers,
                animation experts and multimedia professionals. The team has
                wide experience in working on a variety of flash based projects.
                Our team has also worked on a range of Flash Web Introduction
                projects, providing higher-end animation &amp; other attractive
                features to suit individual client requirements.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Flash Intro Development Company"
                  className="img-fluid"
                  src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
