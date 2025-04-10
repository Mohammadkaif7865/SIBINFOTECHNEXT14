import React from "react";
import Link from "next/link";
import Counter from "../CounterHome";

const BannerSlider = () => {
  return (
    <section className="homeBanner">
      <div className="containerFull">
        <div className="text-center">
          <span className="homeBannerText text-center">
            India’s Premier <strong>Digital Marketing Agency</strong>
          </span>
        </div>
        <h1 className="heading mb-3 mt-4 text-center fontWeight700 text-white">
          Delivering Smart Digital Marketing Solutions
        </h1>
        <h2 className="sub_heading text-center text-white mt-1">
          for{" "}
          <span className="fontWeight700 text_red">Fast-Growing Brands</span>
        </h2>
        <p className="title mt-3 text-center text-white  w-75 mx-auto w-lg-100">
          Your <strong>Growth Partner for SEO, PPC & Social Media</strong>{" "}
          Success – Boost Your <strong>Online Presence</strong>
          <br className="d-none d-lg-block" /> with Data-Driven Digital
          Marketing Since 2005.
        </p>
        <div className="text-center mt-4 mt-lg-5">
          <Link href="/contact" className="btnHomeBanner">
            Start Growing Now
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </Link>
          <Link href="/contact" className="btnHomeBanner2">
            Explore Services
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </Link>
        </div>
        <div className="counterHome text-center mt-lg-5 mt-4">
          <div className="row justify-content-center">
            <div className="col-6 col-lg-3 col-md-4">
              <div className="counterBannerHome text-center">
                <h4 className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={617} />
                  <span className="sub_heading ps-2">%</span>
                </h4>
                <p className="mt-1 text-white fontSmall">
                  Increase in <strong>Organic Traffic</strong>
                </p>
              </div>
            </div>
            <div className=" col-6 col-lg-3 col-md-4">
              <div className="counterBannerHome text-center">
                <h4 className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={315} />
                  <span className="sub_heading ps-2">%</span>
                </h4>
                <p className="mt-1 text-white fontSmall">
                  Increase in <strong>Qualified Leads</strong>
                </p>
              </div>
            </div>
            <div className=" col-6 col-lg-3 col-md-4">
              <div className="counterBannerHome text-center">
                <h4 className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={344} />
                  <span className="sub_heading ps-2">%</span>
                </h4>
                <p className="mt-1 text-white fontSmall">
                  Increase in <strong>Sales Growth YOY</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
