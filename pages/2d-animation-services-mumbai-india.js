import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function TwoDAnimationServicesMumbaiIndia() {
  const metaTags = (
    <>
      <title>2D Animation Services Company Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        name="keywords"
        content="2d animation services india,2d animation services bangalore,2d animation services mumbai,2d animation services delhi,2d animation services ,chennai,2d animation services pune,2d animation services hyderabad,2d animation india,2d animation bangalore,2d animation"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="2D Animation Services Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/2d-animation-services-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="2D Animation Services Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/2d-animation-services-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
        breadcrumbTitle="2D Animation Services Company Mumbai, India | SIB Infotech "
        PageRatingSchema
        description={
          "Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
        }
        reviewCount={"5155"}
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
                  2D Animation Services
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
                    <span className="textChange">2D Animation Services </span>{" "}
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
        <Breadcrumb
          Pagetitle={
            "2D Animation Services Company Mumbai, India | SIB Infotech"
          }
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">2D Animation Services </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={
            "2D Animation Services Company Mumbai, India | SIB Infotech"
          }
        />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  In creating interactive, impressive and expressive web
                  designs, there's nothing better than using 2D Animation or
                  Flash Presentations or designs.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>
                We have expert Flash designers who have expertise with modern
                tools and technologies and have experience in developing
                high-quality flash templates and websites which ultimately give
                the WOW!! a factor in your websites or designs.
              </p>
              <p>
                At SIB Infotech, we professionally create websites to suit
                client requirements and deliver high-quality results. We design
                flash templates and flash intros that are just impressive and
                unique but are also made interactive with active buttons, links
                and action scripts.
              </p>
              <p>
                Flash is the fastest way to create rich Internet applications.
                Flash development includes the creation of rich user interfaces,
                online advertising, eLearning course and enterprise application
                front-ends.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="2D Animation Services"
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
