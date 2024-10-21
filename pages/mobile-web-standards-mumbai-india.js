import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MobileWebStandards() {
  const metaTags = (
    <>
      <title>Mobile Web Standards Services Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Ensure your website meets mobile web standards with expert services in Mumbai from SIB Infotech. Improve user experience and performance. Contact today!"
      />
      <meta
        name="keywords"
        content="web design company, web design company india, website design India, web development India, seo company india, website development company, seo services, web designing company, web design companies in india, seo companies in india, IT outsourcing company,"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/mobile-web-standards-mumbai-india"
      />
      <meta
        property="og:title"
        content="Mobile Web Standards Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Ensure your website meets mobile web standards with expert services in Mumbai from SIB Infotech. Improve user experience and performance. Contact today!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/mobile-web-standards-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/mobile-web-standards-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Mobile Web Standards Services Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Ensure your website meets mobile web standards with expert services in Mumbai from SIB Infotech. Improve user experience and performance. Contact today!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/mobile-web-standards-mumbai-india.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/mobile-web-standards-mumbai-india"
        breadcrumbTitle="Mobile Web Standards Services Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Ensure your website meets mobile web standards with expert services in Mumbai from SIB Infotech. Improve user experience and performance. Contact today!"
        }
        reviewCount={"5237"}
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
                  Mobile Web Standards
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
                    Best{" "}
                    <span className="textChange">Mobile Web Standards </span>{" "}
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
        <Breadcrumb Pagetitle={"Mobile Web Standards"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Mobile Web Standards </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Mobile Web Standards"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  Through the expertise knowledge of skilled professionals from
                  SIB Infotech, our clients stay assured of getting long term
                  benefits to in the form of browser friendly, user friendly and
                  search engine friendly website.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                W3C is an international standard framed by World Wide Web
                Consortium (W3C) organization for World Wide Web. These
                standards are designed to enhance the interoperability for all
                the web related products and develop and publish specifications,
                software, guidelines, and assorted Web tools. In SIB Infotech,
                we assure you the quality website designing standards are
                practiced in the most ethical manner.
              </p>
              <div className="custom-content-title">
                <p>Different W3C Standards SIB Infotech follows</p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">HTML 4.0</p>
                <p>
                  Hyper Text Markup Language-It is basically used for adding
                  text structure to the text documents on the Web.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">XML 1.0</p>
                <p>
                  Extensible Markup Language-It is a markup language which
                  provides flexibility to add our own elements and structural
                  systems in a text document. It even allows utilizing multiple
                  sets within a single document. Because of this peculiarity,
                  XML is more flexible than HTML.
                </p>
              </div>
              <div className="custom-page-icon-box icon-with-title">
                <p className="custom-box-title">XHTML 1.0</p>
                <p>XHTML 1.0 is a reformulated or enhanced version of HTML.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Mobile Web Standards Companies in India"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
