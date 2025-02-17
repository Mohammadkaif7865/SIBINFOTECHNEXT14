import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="bg_light_gray">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6 mt-5 mt-lg-0 px-4 px-lg-0 order-2 order-lg-1">
            <div className="w-100 h-100 img_benifits ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="/assets/images/local-seo/why-choose.jpg"
                alt=""
                width="1050"
                height="600"
              />
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="ps-lg-5">
              <h4 className="sub_heading fontHeading fontWeight700">
                Why Choose <br />
                <span className="text_red">
                  SIB Infotech for Local SEO Services
                </span>{" "}
              </h4>
              <p className="mt-3">
                A business should always invest in the best. Our optimization
                strategies assure long-lasting and profitable results that can
                take your business to the topmost levels of the local business
                hierarchy. We guarantee expertise, an experienced team, and
                excellent services that assure the growth and success of your
                business making a non-washable imprint on the customer’s mind.
              </p>
              <p className="mt-3">
                Read on to learn more about why you chose SIB Infotech for local
                SEO and how to use it to grow your local business.
              </p>

              <ul className="mt-4 list_benifits_lseo">
                <li>
                 High-Quality Local Link Building
                </li>
                <li>
                 Effective ROI-Driven Solutions
                </li>
                <li>
                 
                    Customized SEO Strategies for Local Businesses
                  
                </li>
                <li>
                 Clear & Transparent Reporting
                </li>
                <li>
                 Proven Expertise in Local SEO
                </li>
                <li>
                 Affordable & Performance-Focused Approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
