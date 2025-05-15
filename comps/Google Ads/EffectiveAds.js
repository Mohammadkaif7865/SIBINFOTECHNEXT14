
import React from "react";
import Link from "next/link";

const benefitData = [
  "Improve brand recognition",
  "Immediate visibility through top page ads",
  "Increased brand awareness",
  "More customer reach through Gmail inbox",
  "Reconnecting with your website visitors",
  "Remarketing on Display and Search Network",
  "Tackling your market competitors",
  "Increased conversions",
];

const EffectiveAds = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="customHeading">
              Let our <span className="text_red">Google Ads </span>specialist
              make your paid marketing campaigns successful
            </h3>
            <p className="customText">
              Our Google Advertising strategies yield top-quality results for
              your business. Our Google Ad experts make sure that your business
              is showered with the extensive benefits of Google Advertising,
              such as
            </p>
            <div className="d-lg-flex">
              <div className="w-lg-50 ">
                {benefitData.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="  ">
                    <ul className="instagram-list">
                      <li className="customText">{benefit}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="w-lg-50 ">
                {benefitData.slice(4).map((benefit, index) => (
                  <div key={index} className="">
                    <ul className="instagram-list">
                      <li className="customText">{benefit}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bgBlueDarkRight">
              <p className="customText text-white">
                <b>We make sure that your business has an</b>
              </p>
              <h3 className="customHeading text-white customLineHeight">
                Effective &amp; Efficient
                <br />
                Google marketing campaign
              </h3>
              <p className="customText text-white">
                <b>that suits best for your industry</b>
              </p>
              <Link className="insta-btn" href="/contact-us">
                Speak To Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EffectiveAds;
