import Link from "next/link";
import React from "react";
import BannerForm from "../BannerForm";

const HeroDigitalMarketing = () => {
  return (
    <>
      <div id="bannerSection" className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white">
                  Best Digital Marketing Company in India{" "}
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
                {/* <h2 className="small_heading fw-bold mt-2 text-white">We Can Help You:</h2>
                      <ul className="bannerIcon">
                          <li>
                              <img src="assets/images/icons/visitor.png" alt="Customer"/>
                              <div>Bring more customers to your Website</div>
                          </li>
                          <li>
                              <img src="assets/images/icons/quality.png" alt="Customer"/>
                              <div>Rank #1 on Google & Bing</div>
                          </li>
                          <li>
                              <img src="assets/images/icons/computer-icon.png" alt="Customer"/>
                              <div>Establishing a strong online presence</div>
                          </li>
                          <li>
                              <img src="assets/images/icons/quality.png" alt="Customer"/>
                              <div>Rank #1 on Google Maps</div>
                          </li>
                          <li>
                              <img src="assets/images/icons/privacy-policy.png" alt="Customer"/>
                              <div>Build trust & creditability with your audience</div>
                          </li>
                          <li>
                              <img src="assets/images/icons/low-price-seo.png" alt="Customer"/>
                              <div>Decreases Advertising Cost</div>
                          </li>
                      </ul> */}
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
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Digital Marketing</span>{" "}
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
              Best <span className="textChange">Digital Marketing</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    </>
  );
};

export default HeroDigitalMarketing;
