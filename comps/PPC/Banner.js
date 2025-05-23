import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";
import Breadcrumb from "../BreadCrumb";

const Banner = () => {
  return (
    <div id="contact">
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading">
                Best PPC Managment Company in India to Maximize Your ROI 
                </h1>
                <h2 className="small_heading fw-bold mt-lg-3 mt-2 text_red">
                Maximize Your ROI with Expert PPC Management Services  
                </h2>    <p
                  className="small_heading fontWeight500 mt-2  mt-lg-3 text-white "
                  style={{
                    maxWidth: "80%",
                  }}
                >
                Pay-Per-Click (PPC) Management Services    
                </p>
                <p
                  className="mt-2  mt-lg-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  At SIB Infotech, we understand the power of paid search marketing and its ability to drive targeted traffic, generate leads, and boost revenue. 
                </p>
                
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
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">PPC Management</span>{" "}
                    Agency in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
              <Breadcrumb Pagetitle={"PPC Management Company"} />
            </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">PPC Management</span> Agency in
              India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"PPC Management Company"} />
      </div>
    </div>
  );
};

export default Banner;
