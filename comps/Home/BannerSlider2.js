import React from "react";
import Counter from "../SEO2/Counter";

const BannerSlider2 = () => {
  return (
    <div className="banner2">
      <div className="circleBg"></div>
      <div className="containerFull">
        <div className="inner_banner2">
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="fontHeading2 fontWeight500 mb-0">
                <span className="title d-block preHeading fontWeight700">
                  SIB Infotech
                </span>
                <span className="small_heading letterSpacing1 mt-3">
                  India’s Premier{" "}
                  <strong className="text_red">Digital Marketing Agency</strong>
                </span>
              </h1>
              <h2 class="heading my-2">
                Delivering Smart Digital Marketing Solutions
              </h2>
              <h3 className="small_heading letterSpacing1">
                for <span className="text_red">Fast-Growing Brands</span>
              </h3>
              <p className="mt-3 fontWeight600">
                Your Growth Partner for SEO, PPC & Social Media Success – Boost
                Your Online Presence with Data-Driven Digital Marketing 
                <span>Since 2005.</span>
              </p>
              <p className="mt-1">
                From startups to enterprises, we craft strategies that deliver
                real results. Let's turn clicks into customers and traffic into
                revenue.
              </p>

              <div className="mt-5">
                <a className="btnHeader2" href="#">
                  <svg
                    className="small_heading"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                  </svg>
                  <span className="text ms-2">Discover More</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 rightBannner2 ">
              <div className=" d-flex justify-content-end ">
                <div className="right_section2  b p-4">
                  <div className="item_banner2">
                    <h4>
                      {" "}
                      <Counter targetValue={617} />
                    </h4>
                    <p>
                      Increase in <strong>Organic Traffic</strong>
                    </p>
                  </div>
                  <div className="item_banner2">
                    <h4>
                      {" "}
                      <Counter targetValue={344} />{" "}
                    </h4>
                    <p className="">
                      Increase in <strong>Sales Growth YOY</strong>
                    </p>
                  </div>
                  <div className="item_banner2 ">
                    <h4>
                      <Counter targetValue={315} />{" "}
                    </h4>
                    <p>
                      Increase in <strong>Qualified Leads</strong>
                    </p>
                  </div>

                  <img src="assets" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider2;
