import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";

const Banner = () => {
  return (
    <div>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white">
                  Pay Per Click Management Services
                </h1>
                <h2 className="small_heading fw-bold mt-lg-3 mt-2 text-white">
                  Top Rated PPC Management Company in India
                </h2>
                <div className="mt-4">
                  <Link href="https://www.sibinfotech.com/#requestQuote">
                    <span className="btnThemeRed me-3">
                      <i className="fa-solid fa-comment-dots"></i> Get a Quote
                    </span>
                  </Link>

                  <Link href="#">
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
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">PPC Management</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">PPC Management</span> Company in
              India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
