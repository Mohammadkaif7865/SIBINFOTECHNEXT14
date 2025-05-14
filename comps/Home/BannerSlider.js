import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Counter from "../CounterHome"; // Make sure this path is correct

const BannerSlider = () => {
  return (
    <section className="homeBanner">
      <div className="containerFull">
        <div className="text-center">
          <h1 className="d-inline-block homeBannerText title text-center">
            India’s Premier <strong>Digital Marketing Agency</strong>
          </h1>
        </div>

        <h2 className="heading mb-3 mt-4 text-center fontWeight700 text-white">
          Get More Traffic, Leads & Sales
          <span className="heading text-center d-block text-white mt-3">
            <span className="fontWeight600 text_red">
              with Strategic, AI-Powered{" "}
            </span>
          </span>
          <span className="heading text-center d-block mt-3 text-white fontWeight600">
            <i className="text_white">
              <Typewriter
                words={[
                  "Digital Marketing Solutions",
                  "Social Media Marketing",
                  "Search Engine Optimization",
                  "Website Designing",
                  "Google & Facebook Ads",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </i>
          </span>
        </h2>

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
                <p className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={617} />
                  <span className="sub_heading ps-2">%</span>
                </p>
                <p className="mt-1 text-white fontSmall">
                  Increase in <strong>Organic Traffic</strong>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="counterBannerHome text-center">
                <p className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={315} />
                  <span className="sub_heading ps-2">%</span>
                </p>
                <p className="mt-1 text-white fontSmall">
                  Increase in <strong>Qualified Leads</strong>
                </p>
              </div>
            </div>
            <div className="col-6 col-lg-3 col-md-4">
              <div className="counterBannerHome text-center">
                <p className="large_heading2 mt-3 fontWeight700 text-white">
                  <Counter targetValue={344} />
                  <span className="sub_heading ps-2">%</span>
                </p>
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
