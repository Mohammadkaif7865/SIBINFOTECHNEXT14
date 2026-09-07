import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";
import { FaAward, FaChartLine, FaGlobe, FaComments, FaCircleQuestion } from "react-icons/fa6";

const HeroDigitalMarketing = () => {
  return (
    <>
      <div id="bannerSection" className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <span
                  className="badge bg-danger text-white px-3 py-2 text-uppercase mb-3 rounded-pill"
                  style={{ letterSpacing: "1px", fontSize: "0.8rem", width: "fit-content" }}
                >
                  ⭐ Google Premier Partner (Top 3% Agency)
                </span>
                <h1 className="heading fontWeight700 text-white fontHeading">
                  Best Digital Marketing Company in India{" "}
                </h1>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Delivering sustainable ROI-driven growth
                </p>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Engaging high-intent commercial audiences
                </p>
                <p className="text-white mt-2 title bulletPoint fw-bold">
                  Converting search &amp; social clicks into paying customers
                </p>

                <div className="mt-4">
                  <Link href="/contact-us">
                    <span className="btnThemeRed me-3 d-inline-flex align-items-center">
                      <FaComments className="me-2" /> Get a Free Audit
                    </span>
                  </Link>
                  <Link href="/contact-us">
                    <span className="btnThemewhiteBorder d-inline-flex align-items-center">
                      <FaCircleQuestion className="me-2" /> Speak with Expert
                    </span>
                  </Link>
                </div>

                <div className="d-flex flex-wrap align-items-center gap-3 mt-4 text-white pt-2">
                  <div className="d-flex align-items-center bg-dark bg-opacity-25 px-3 py-1 rounded-pill border border-white border-opacity-25">
                    <FaAward className="text-warning me-2 fs-5" />
                    <span className="small"><strong>18+ Years</strong> Track Record</span>
                  </div>
                  <div className="d-flex align-items-center bg-dark bg-opacity-25 px-3 py-1 rounded-pill border border-white border-opacity-25">
                    <FaChartLine className="text-success me-2 fs-5" />
                    <span className="small"><strong>1,000+</strong> Brands Scaled</span>
                  </div>
                  <div className="d-flex align-items-center bg-dark bg-opacity-25 px-3 py-1 rounded-pill border border-white border-opacity-25">
                    <FaGlobe className="text-info me-2 fs-5" />
                    <span className="small"><strong>40+</strong> Countries Served</span>
                  </div>
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
