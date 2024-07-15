import Image from "next/image";
import React from "react";

const AdsMgt = () => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="AdsMgtImage   position-relative">
              <Image
                fill
                quality={100}
                className="image-full imgAnimation"
                src="assets/images/linkedin-ads-management-company-in-delhi-mumbai.svg"
                alt="LinkedIn ads management company in mumbai"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="customHeading fontWeight800">
              How SIB <span className="text_red">LinkedIn Ads Management</span>{" "}
              Services can help your company?
            </h3>
            <p className="customText">
              Our robust LinkedIn marketing strategy proves to be a successful
              booster for your business, it can help your business to be
              established as an industry thought leader.
            </p>
            <p className="customText">
              We have a 360-degree LinkedIn marketing strategy that yields the
              best possible results, increases the brand’s visibility engage a
              huge audience and sets your sales on fire in no time.
            </p>
            <p className="customText">
              We assure you that with our expertise, experience, efficiency, and
              excellence your business reaches the top graphs of the market.
            </p>
            <p className="customText">
              Ranging from strategy creation to campaign analysis, we can help
              you accomplish your LinkedIn objectives, whether it be to generate
              leads, drive website traffic, or build brand awareness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsMgt;
