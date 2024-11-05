import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function MobileWebsiteDesigningServices() {
  const metaTags = (
    <>
      <title>Mobile Website Designing Services in India | SIB Infotech</title>
      <meta
        name="description"
        content="Get responsive mobile website designing services in Mumbai, India with SIB Infotech. Boost user experience and engagement with mobile-friendly web designs."
      />
      <meta name="keywords" content="Mobile Website Designing Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/mobile-website-designing-services"
      />
      <meta
        property="og:title"
        content="Mobile Website Designing Services in India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Get responsive mobile website designing services in Mumbai, India with SIB Infotech. Boost user experience and engagement with mobile-friendly web designs."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/mobile-website-designing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/mobile-website-designing-services"
      />
      <meta
        property="twitter:title"
        content="Mobile Website Designing Services in India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Get responsive mobile website designing services in Mumbai, India with SIB Infotech. Boost user experience and engagement with mobile-friendly web designs."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/mobile-website-designing-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/mobile-website-designing-services"
        breadcrumbTitle="Mobile Website Designing Services in India | SIB Infotech"
        PageRatingSchema
        description={
          "Get responsive mobile website designing services in Mumbai, India with SIB Infotech. Boost user experience and engagement with mobile-friendly web designs."
        }
        reviewCount={"5238"}
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
                  Mobile Website Designing Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Mobile Website Designing Company in India
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
                    <span className="textChange">Mobile Website Designing</span>{" "}
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
        <Breadcrumb Pagetitle={"Mobile Website Designing "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Mobile Website Designing</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Mobile Website Designing "} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="customHeading customLineHeight">
                At SIB Infotech, we are able to provide everything from mobile
                e-commerce shops to simple <span>Mobile Website Designing</span>
              </h3>
              <p className="customText">
                In recent years development of surfing on mobile device is in
                market. Every people like to be linked with internet and their
                searching on demand use of smart phone. In such situation if you
                want your website get main concern in such mobile device, you
                must have mobile website designing as sell as development. It is
                important to think about the user experience while designing a
                mobile version of your regular website.
              </p>
              <p className="customText">
                SIB Infotech provides a range of tools that can butter up a
                mobile web design. We can create Smartphone and Tablet Apps that
                are well-matched with any mobile device, and provide a
                collection of mobile marketing services, including paid ads, QR
                codes, and SMS text message marketing.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="bgBlueDarkRight bgBlueDarksmHeight">
                <p className="customText text-white">
                  As a leading IT platform we make our self updated with all the
                  latest information how as well as technologies of the market
                  and we are eager to deal our expertise for same.
                </p>
                <p className="customText text-white">
                  Your Mobile web site design should have an eye catchy look and
                  product exclusively for the smaller screen and altering user
                  experience of a smart phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="mobile-website-design">
                <img
                  className="first-img"
                  src="assets/images/mobile-website-designing-company-in-mumbai.png"
                  alt="mobile-website-designing-company-in-mumbai"
                />{" "}
                <img
                  className="second-img"
                  src="assets/images/mobile-website-designing-in-delhi.png"
                  alt="mobile-website-designing-company-in-mumbai"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <h3 className="customHeading customLineHeight">
                At SIB Infotech our <span>Mobile</span> based{" "}
                <span>Web Designing</span> includes following
              </h3>
              <ul className="square-li">
                <li className="customText">
                  Wide interface across cellular web internet explorer such as
                  iPad, iPhone,Android operating system, Blackberry mobile
                  phones, and Windows Phone.
                </li>
                <li className="customText">
                  Optimization of visual pictures to ensure fast running of your
                  web pages.
                </li>
                <li className="customText">
                  Simplified written text and design templates to provide a
                  enjoyable cellular surfing around experience.
                </li>
                <li className="customText">
                  Large, touch-friendly routing options.
                </li>
                <li className="customText">
                  Convenient contact choices for contacting your business, or
                  delivering you emails.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
