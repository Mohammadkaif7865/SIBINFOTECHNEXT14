import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function OnlineLedGenerationServices() {
  const metaTags = (
    <>
      <title>
        Online Lead Generation Services Mumbai, India | SIB Infotech
      </title>
      <meta
        name="description"
        content="Boost your business with online lead generation services in Mumbai by SIB Infotech. Attract quality leads and increase conversions with our expert strategies."
      />
      <meta name="keywords" content="Lead Generation Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/online-lead-generation-services"
      />
      <meta
        property="og:title"
        content="Online Lead Generation Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Boost your business with online lead generation services in Mumbai by SIB Infotech. Attract quality leads and increase conversions with our expert strategies."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/online-lead-generation-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/online-lead-generation-services"
      />
      <meta
        property="twitter:title"
        content="Online Lead Generation Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Boost your business with online lead generation services in Mumbai by SIB Infotech. Attract quality leads and increase conversions with our expert strategies."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/online-lead-generation-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/online-lead-generation-services"
        breadcrumbTitle="Online Lead Generation Services Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Boost your business with online lead generation services in Mumbai by SIB Infotech. Attract quality leads and increase conversions with our expert strategies."
        }
        reviewCount={"5244"}
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
                  Lead Generation Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Lead Generation Company in India 
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
                    Best <span className="textChange">Lead Generation </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Online Lead Generation "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Lead Generation </span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Online Lead Generation "} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  We have been helping firms to achieve their revenue goals with
                  an unyielding, reliable lead generation services. SIB Infotech
                  can help you generate the leads you need to succeed.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                Specialists gathering are also offered to lead you through
                greatest practices to reach the best profits results. Our line
                of attack is uncomplicated and we sustain you every step of the
                way.
              </p>
              <p>
                Confer with our team of professional through project-based
                workshops or tailored services to assemble your exact
                requirements for lead generation services. As your firm raises
                and transform, how you use SIB Infotech will change. Our skilled
                services offer ongoing control on promotion, sales, and business
                processes.
              </p>
              <div className="custom-content-title">
                <p>Practised Lead Generation Services</p>
              </div>
              <div className="custom-page-icon-box">
                <p>Campaign Training</p>
              </div>
              <div className="custom-page-icon-box">
                <p>Reporting Training</p>
              </div>
              <div className="custom-page-icon-box">
                <p>Social Marketing Expert Services</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Online Lead Generation Services in India"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Inspired Services</p>
                <p>
                  Impressive appearing resources aren't just striking; they
                  describe in additional leads to raise your viewers. Get assist
                  designing email and landing page templates that bring into
                  line with your company's brand character.
                </p>
                <p>
                  Moreover, our proficient lead generation services team
                  recommend workshops, consulting correspondence, and routine
                  services to guide with selling best practices and technical
                  incorporation.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">Web Services</p>
                <p>
                  In case you haven’t observed, the Web has become a significant
                  marketplace for brands. We delight ourselves in the services
                  we give our clients that help them in their online profile.
                </p>
                <p>
                  From search engine optimization to e-mail marketing to social
                  media services, we give online exposure for each of our
                  important partners so that they can really make a niche in
                  their respective online market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
