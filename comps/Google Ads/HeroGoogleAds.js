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
                <h1 className="large_heading2 fontWeight600 text-white ">
                  Google Ads Management{" "}
                  <span class="text_red fontWeight700">Services in India</span>
                </h1>
                <p className="small_heading fontWeight600 mt-lg-2 mt-2 text-white ">
                  Google Premier Partner Agency Trusted by 850+ Brands in 40+
                  Countries
                </p>{" "}
                <p className="text-white mt-2 title">
                  Based in Mumbai, SIB Infotech offers Google Ads campaign
                  management services that help businesses generate leads,
                  increase conversions, and maximize ROI through targeted,
                  results-driven campaigns.
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
