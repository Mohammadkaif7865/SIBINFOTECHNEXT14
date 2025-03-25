import React from "react";
import Counter from "../SEO2/Counter";

const BannerSlider2 = () => {
  return (
    <div className="banner2">
      <div className="containerFull">
        <div className="inner_banner2">
          <div className="row mt-5">
            <div className="col-lg-6">
              <h1 className="  fontHeading2 fontWeight700">
                <span className="title d-block preHeading">SIB Infotech</span>

                <div className="mt-3 d-block">
                  Best{" "}
                  <span className="text_red">Digital Marketing Agency</span> in
                  India Delivering{" "}
                  <span className="text_red">Growth since 2005</span>
                </div>
                {/* since
                2005 */}
              </h1>

              <p className="mt-3">
                From SEO to Google Ads, we drive growth with data-driven
                strategies tailored to your business.
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
                      <Counter targetValue={617} />%
                    </h4>
                    <p>Increase in Organic Traffic</p>
                  </div>
                  <div className="item_banner2 ">
                    <h4>
                      {" "}
                      <Counter targetValue={344} />%{" "}
                    </h4>
                    <p className="">Increase in Sales Growth YOY</p>
                  </div>
                  <div className="item_banner2 ">
                    <h4>
                      <Counter targetValue={315} />%{" "}
                    </h4>
                    <p>Increase in Qualified Leads</p>
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
