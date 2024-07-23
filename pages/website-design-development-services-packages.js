import React from "react";
import { Helmet } from "react-helmet-async";
// import {Link} from 'react-router-dom';
import Link from "next/link";
import BannerForm from "../comps/BannerForm";

export default function ServicesPayPerClickManagement() {
  return (
    <div>
      <Helmet>
        <title>Website Design Development Services Packages</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </Helmet>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h3 className="heading fontWeight700 text-white">
                  Website Design Development Services Packages
                </h3>
                <div className="mt-4">
                  <Link href="/#requestQuote" className="btnThemeRed me-3">
                    <i class="fa-solid fa-comment-dots"></i> Get a Quote
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
                    <span className="textChange">
                      Website Design Development Packages{" "}
                    </span>{" "}
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
              Best{" "}
              <span className="textChange">
                Website Design Development Packages{" "}
              </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    </div>
  );
}
