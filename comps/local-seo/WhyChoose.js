import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  const benefitsList = [
    { text: "High-Quality Local Link Building", icon: "link-building.png" },
    { text: "Effective ROI-Driven Solutions", icon: "promotion.png" },
    { text: "Customized SEO Strategies for Local Businesses", icon: "seo.png" },
    { text: "Clear & Transparent Reporting", icon: "audit.png" },
    { text: "Proven Expertise in Local SEO", icon: "expertise.png" },
    { text: "Affordable & Performance-Focused Approach", icon: "effective.png" },
  ];
  return (
    <section className="bg_light_gray">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-3 mt-5 mt-lg-0 px-4 px-lg-0 order-2 order-lg-1">
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
          <div className="col-lg-9 order-1 order-lg-2">
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

               <ul className="mt-4  l_why_grid  ">
                              {benefitsList.map((benefit, index) => (
                                <li key={index} className="p-3 item  bg-white">
                                  <div className="d-flex justify-content-center">
                                    <Image
                                      src={`/assets/images/local-seo/${benefit.icon}`}
                                      alt="Check Icon"
                                      className="me-2 "
                                      width={50}
                                      height={50}
                                    />
                                  </div>
                                  <p className="text-center mt-2">{benefit.text}</p>
                                </li>
                              ))}
                            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
