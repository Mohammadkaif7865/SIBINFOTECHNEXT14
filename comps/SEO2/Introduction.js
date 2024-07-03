import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="rightPPC">
              <h2 className="sub_heading fontHeading fontWeight600">
              Your Next{" "}
                <span className="text_red">SEO Agency In India</span> -
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
          <div className="col-lg-6 mt-4 mt-lg-0 ">
            <div className="">
              <div className=" d-flex introduction_seo_list ">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/services/chart.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h4>Average 218% Growth in Traffic</h4>
                  <p>
                    Watch your analytics soar as you collect more clicks than
                    ever before.
                  </p>
                </div>
              </div>
              <div className=" mt-5 d-flex introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/services/metrics.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h4>Average 82% Growth in Leads</h4>
                  <p>
                    Gain the attation from those  who are truely reday to take action with your brand.
                  </p>
                </div>
              </div>
              <div className="mt-5 d-flex introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/icons/services/statistics.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h4>Average 205% Growth in ROI</h4>
                  <p>
                    Get more bang for your buck with Campaigns that eleminate budget wastage 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
