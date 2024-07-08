import Link from "next/link";
import React from "react";

const WhySib = () => {
  return (
    <section className="bgGrey insta-services">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-5">
            <div className="insta-keyword-section">
              <h3 className="fontHeading customHeading text-white customLineHeight2">
                Our services assure that your brand gets the best possible
                publicity
              </h3>
              <p className="customText text-off-white">
                SIB Infotech is your one-in-all stop for the marketing
                solutions, as we are the best social media marketing agency in
                India
              </p>
              <Link className="insta-btn" href="/contact-us">
                Speak To Our Experts
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="instaKeywordRight">
              <h3 className="customHeading mt-lg-0 mt-3 fontHeading">
                Why SIB <span className="text_red">Instagram Advertising</span>{" "}
                Services for your company
              </h3>
              <p className="customText">
                At SIB our Instagram advertising strategy is an all-in-one blend
                that can set your sales on fire. We make sure that the Instagram
                ads drive traffic to your website and take your sales to the
                next level. We take follow some basic aspects like:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySib;
