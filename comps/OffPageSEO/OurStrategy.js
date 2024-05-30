import Link from "next/link";
import React from "react";

const OurStrategy = () => {
  return (
    <section className="customPadding radiudNone blueBg">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h5 className="text-off-white text-center margin-bottom">
              Our strategy
            </h5>
            <h3 className="customHeading text-center text-white">
              off-page SEO strategy
            </h3>
            <p className="customText text-center text-off-white">
              takes your brand to the top shelves of the digital world. With our
              expertise, experience, and excellence, we can help your brand
              reach the heights of the market in no time.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <p className="customText text-off-white">
              Our services increase organic search engine ranking drastically
              and getting the best placements for your website along with reach
              to new customers.
            </p>
            <Link className="action-btn" href="/contact-us">
              Speak to our experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrategy;
