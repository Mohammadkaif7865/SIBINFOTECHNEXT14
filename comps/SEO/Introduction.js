import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <div className="rightPPC">
              <h2 className="sub_heading fontHeading fontWeight600">
                SIB Infotech{" "}
                <span className="text_red">SEO Services In India</span> -
                Trusted By Over 1000+ Companies
              </h2>
              <p className="customText mt-3">
                <strong>Since 2005</strong>, SIB Infotech has been providing
                excellent SEO services in India. We're known as the top SEO
                company, not just for delivering great results but also for
                boosting your online visibility and Return On Investment (ROI).
                Everyone knows that the first page of Google gets the most
                visitors, but did you know there's a big difference in how many
                people click on the top results compared to the bottom ones?
                Recent studies show the following click through rates on Google:
              </p>
              <p className="cutomText mt-2">
                Remember, there's no such thing as second place. You're either
                first or nothing. With our years of experience as a leading SEO
                company in India, we know how important Search Engine
                Optimization (SEO) is for businesses.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="rightSeoImgInner">
              <div className="itemInfographic shadow" data-aos="zoom-in">
                <h3 className="heading fontWeight600">7000</h3>
                <p className="mt-2">
                  Keywords ranked on 1st Page in Last 1 Year
                </p>
              </div>
              <div className="itemInfographic shadow" data-aos="zoom-in">
                <h3 className="heading fontWeight600">
                  50 <sub>%</sub>
                </h3>
                <p className="mt-2">Keywords Ranked in the Top 5 Positions</p>
              </div>
              <div className="itemInfographic shadow" data-aos="zoom-in">
                <h3 className="heading fontWeight600">
                  200 <sub>%</sub>
                </h3>
                <p className="mt-2">Traffic Growth in Last Year</p>
              </div>
              <div className="itemInfographic shadow" data-aos="zoom-in">
                <h3 className="heading fontWeight600">
                  97 <sub>%</sub>
                </h3>
                <p className="mt-2">Project Retention Rate in SEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
