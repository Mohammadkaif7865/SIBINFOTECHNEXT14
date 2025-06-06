import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";

const HeroGoogleAds = () => {
  return (
    <>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Google Ads Management Services in India
                </h1>
                <h2 className="small_heading fontWeight600 mt-lg-3 mt-2 text-white ">
                  Accelerate Your Business Growth with the 
                </h2>{" "}
                <p
                  className="small_heading  mt-2  mt-lg-3 text-white "
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  #1 Google Ads Management Company
                </p>
                <p className="text-white mt-2 title">
                  Drive More Traffic. Generate Quality Leads. Maximize ROI.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us">
                    <span className="btnThemeRed me-3">
                      <i className="fa-solid fa-comment-dots"></i> Get a Quote
                    </span>
                  </Link>
                  <Link href="/contact-us">
                    <span className="btnThemewhiteBorder">
                      <i className="fa-solid fa-circle-question"></i> Ask a
                      Question
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Digital Marketing</span>{" "}
                    Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={"Google Ads Management "} />
      </div>
      <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Google Ads Management </span>{" "}
              Services in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Google Ads Management "} />
      </div>
    </>
  );
};

export default HeroGoogleAds;
