import Image from "next/image";
import Link from "next/link";
import React from "react";

const Abbout3 = () => {
  return (
    <section className="about3_section" id="about">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 mt-4 mt-lg-0  order-lg-1 order-2">
            <div className="about3_img_box">
              <Image
                width={370}
                height={500}
                src="/assets/images/aboout-3.png"
                alt=""
                className="img-fluid img-about-3-1 shadow"
              />
              <Image
                width={400}
                height={500}
                src="/assets/images/about-3-2.png"
                alt=""
                className="img-fluid img-about-3-2 shadow"
              />
            </div>
          </div>
          <div className="col-lg-8    order-lg-2 order-1">
            <h5 className="fontWeight600">Welcome to SIB Infotech</h5>
            <h4 className="mt-4  fontHeading2 large_heading2 fontWeight600">
              Guaranteed Visibility Through{" "}
              <span className="text_red"> Our Digital Marketing Services</span>
            </h4>

            <div className="about3_text_box_main">
              <div className="about3_text_box mt-2 mt-lg-5">
                <p>
                  <strong> SIB Infotech</strong> is a{" "}
                  <strong>leading digital marketing agency in India</strong>,
                  with offices in Mumbai and New Delhi. As a Google Premier
                  Partner, we specialize in{" "}
                  <strong>
                    SEO services, PPC management, social media marketing,
                    website design, graphic design, and branding. Our expertise
                    helps businesses in India, the US, the UK, Canada, Australia{" "}
                  </strong>
                  , and beyond boost online visibility, engagement, and
                  conversions while delivering measurable ROI.
                </p>
                <p className="mt-2">
                  <b> With 20+ years of experience</b>, we leverage AI-driven
                  marketing strategies, data analytics, and result-oriented
                  campaigns to maximize growth. Whether you're a startup or an
                  enterprise, our customized digital marketing solutions ensure
                  higher rankings, increased traffic, and improved lead
                  generation to help you stay ahead of the competition.
                </p>
              </div>

              <div className="about3_text_box_btn mt-4 d-flex gap-3 gap-lg-5 align-items-center">
                <Link className="btnHomeBanner about3" href="/contact">
                  Let's Grow Your Business?{" "}
                  <span className="bg-black">
                    <i class="fa fa-arrow-right"></i>
                  </span>
                </Link>
                <Link className="aboutBtn" href="tel:+91 92222-60000">
                  <div className="about3_btn_box d-flex">
                    <div className="icon">
                      <Image
                        width={100}
                        height={100}
                        src={`/assets/images/icons/call-icon.svg`}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="">Need Help</p>
                      <h5 className="fontWeight600">+91 92222-60000</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abbout3;
