import React from "react";

const BannerSlider2 = () => {
  return (
    <div className="banner2">
      <div className="containerFull">
        <div className="inner_banner2">
          <div className="row mt-5">
            <div className="col-lg-6">
              <h1 className="  fontHeading2 fontWeight700">
                Best Digital Marketing Agency in India Delivering Growth
                {/* since
                2005 */}
              </h1>

              <p className="mt-3">
                From SEO to Google Ads, we drive growth with data-driven
                strategies tailored to your business.
              </p>

              <div className="mt-5">
                <a className="fancy3" href="#">
                  <span className="top-key"></span>
                  <span className="text">Discover More</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className=" d-flex justify-content-end">
                <div className="right_section2 ">
                  <div className="item_banner2">
                    <h4>617%</h4>
                    <p>Increase in   <br/>Organic Traffic</p>
                  </div>
                  <div className="item_banner2 ">
                    <h4>344% </h4>
                    <p className="">Increase in Sales <br/> Growth YOY </p>
                  </div>
                  <div className="item_banner2 ">
                    <h4>315% </h4>
                    <p> Increase in  <br/> Qualified Leads</p>
                  </div>
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
