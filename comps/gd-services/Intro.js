import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3 className="fontWeight700 sub_heading fontHeading">
              Creative <span className="text_red"> Graphic Design </span>{" "}
              Company
            </h3>
            <p className="customText mt-3">
              Want your brand to stand out with visuals that wow? At SIB
              Infotech, we believe that great graphic design is the secret sauce
              to making a memorable first impression. Whether it's a bold logo,
              stunning banners, or scroll-stopping social media graphics, our
              creative team knows how to grab attention and keep it. As a
              Premier Google Partner, we are certainly not about "pretty"
              pictures. It's creativity combined with the purpose of planning
              that delivers actual results. More than 98% of our users and more
              than 10,000+ designs every month confirm this. Above all, all of
              this comes at a discount of 50% compared to market standards for
              these high-end services. Every brand has its uniqueness, and we
              customise each and every design to reflect your identity and
              connect with your customers. SIB Infotech brings your customers
              closer with designs!
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="list_intro_lseo">
              <div className="item d-flex align-items-center introduction_seo_list ">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/gd-services/satisfaction.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h5 className="fontHeading small_heading fontWeight600">
                    98% Satisfaction Rate
                  </h5>
                  <p className=" mt-2">Trusted by businesses worldwide.</p>
                </div>
              </div>
              <div className="item mt-4 d-flex align-items-center  introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/gd-services/down-arrow.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h5 className="fontHeading small_heading fontWeight600">
                    50% Less Cost
                  </h5>
                  <p className=" mt-2">
                    High-quality designs at unbeatable prices.{" "}
                  </p>
                </div>
              </div>
              <div className="item mt-4 d-flex align-items-center  introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/gd-services/web-design.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h5 className="fontHeading small_heading fontWeight600">
                    10,000+ Designs Delivered Monthly
                  </h5>
                  <p className=" mt-2">Creativity at scale.</p>
                </div>
              </div>
              <div className="item mt-4 d-flex align-items-center  introduction_seo_list">
                <div className="left">
                  <Image
                    width={50}
                    height={50}
                    src={"/assets/images/gd-services/clocks.png"}
                    alt="loading"
                  />
                </div>
                <div className="content">
                  <h5 className="fontHeading small_heading fontWeight600">
                  99% On-Time Delivery  
                  </h5>
                  <p className=" mt-2">Meeting deadlines with perfection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
