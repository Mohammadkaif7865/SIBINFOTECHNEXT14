import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";

const Banner = () => {
  return (
    <>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Instagram Ads Management
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Instagram Ads Management Company in India
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
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best{" "}
                    <span className="textChange">
                      Instagram Ads Management{" "}
                    </span>{" "}
                    Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none d-">
        <Breadcrumb  Pagetite={'Instagram Ads Management '} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Instagram Ads Management </span>{" "}
              Services in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb  Pagetitle={'Instagram Ads Management '} />
      </div>
    </>
  );
};

export default Banner;
