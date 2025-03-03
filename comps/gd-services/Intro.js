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
              Company in India
            </h3>
            <p className="customText mt-3">
              Want your brand to stand out with visuals that wow? At SIB
              Infotech, we believe that <b>great graphic design</b> is the secret sauce
              to making a memorable first impression. Whether it's a bold logo,
              stunning banners, or scroll-stopping social media graphics, our
              creative team knows how to grab attention and keep it. As a 
              <b> Premier Google Partner</b>, we are certainly not about "pretty"
              pictures. It's creativity combined with the purpose of planning
              that delivers actual results. <b>More than 98%</b> of our users and <b>more
              than 10,000+ designs</b> every month confirm this. Above all, all of
              this comes at a discount of 50% compared to market standards for
              these high-end services. Every brand has its uniqueness, and we
              customise each and every design to reflect your identity and
              connect with your customers.<b> SIB Infotech brings your customers
              closer with designs!</b>
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
                    <span className="text_red">98%</span> Satisfaction Rate
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
                  <span className="text_red"> 50%</span> Less Cost
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
                  <span className="text_red"> 10,000+</span> Designs Delivered Monthly
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
                  <span className="text_red">99%</span> On-Time Delivery  
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
