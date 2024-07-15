import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";

const HeroGoogleAds = () => {
  return (
    <>
    <div className="innerWebDesign">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 ps-lg-5">
            <div className="innerBannerTitle venter">
              <h3 className="heading fontWeight800 text-white fontHeading">
                Google Ads Management Services
              </h3>
              <div className="mt-4">
                <Link href="#requestQuote" className="btnThemeRed me-3">
                  <i class="fa-solid fa-comment-dots"></i> Get a Quote
                </Link>
                <Link href="#" className="btnThemewhiteBorder">
                  <i className="fa-solid fa-circle-question"></i> Ask a Question
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
            <div className="bannerForm">
              <h4 className="small_heading  fontWeight700  fontHeading">
                Accelerate Your Business Growth
              </h4>
              <p>
                with{" "}
                <strong className="fontWeight600 text_red">
                  Best{" "}
                  <span className="textChange">Google Ads Management </span>{" "}
                  Company in India
                </strong>
              </p>
              <BannerForm />
            </div>
          </div>
        </div>
      </div>
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
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    
    
    </>
  );
};

export default HeroGoogleAds;
