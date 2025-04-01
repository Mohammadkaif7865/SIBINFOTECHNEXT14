import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";

const HeroDigitalMarketing = ({service}) => {
  return (
    <>
      <div id="bannerSection" className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Best Digital Marketing Company in {service.region}{" "}
                </h1>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Delivering growth
                </p>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Engaging audiences
                </p>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Converting clicks to customers
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
                    Services in {service.region}
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
            "Digital Marketing Services"
          }
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Digital Marketing</span> Services
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={
            "Digital Marketing Services"
          }
        />
      </div>
    </>
  );
};

export default HeroDigitalMarketing;
