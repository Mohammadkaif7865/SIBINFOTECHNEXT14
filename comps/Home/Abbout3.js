import Image from "next/image";
import Link from "next/link";
import React from "react";

const Abbout3 = () => {
  return (
    <section className="about3_section" id="about">
      <div className="containerFull">
        <div className="row align-items-center">
          {/* Image Column */}
          <div className="col-lg-4 mt-4 mt-lg-0 order-lg-1 order-2">
            <div className="about3_img_box position-relative">
              <Image
                width={370}
                height={500}
                src="/assets/images/aboout-3.png"
                alt="Team Collaboration"
                className="img-fluid img-about-3-1 shadow"
                priority // Important for LCP if in viewport
                placeholder="blur"
                blurDataURL="/assets/images/aboout-3.png"
              />
              <Image
                width={400}
                height={500}
                src="/assets/images/about-3-2.png"
                alt="Digital Strategy"
                className="img-fluid img-about-3-2 shadow"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/assets/images/about-3-2.png"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-8 order-lg-2 order-1">
            <h5 className="fontWeight600">Welcome to SIB Infotech</h5>
            <h4 className="mt-4 fontHeading2 large_heading2 fontWeight600">
              Guaranteed Visibility Through{" "}
              <span className="text_red">Our Digital Marketing Services</span>
            </h4>

            <div className="about3_text_box_main">
              <div className="about3_text_box mt-2 mt-lg-5">
                <p>
                  <strong>SIB Infotech</strong> is a{" "}
                  <strong>leading digital marketing agency in India</strong>, with offices in Mumbai and New Delhi. As a Google Premier Partner, we specialize in <strong>SEO services, PPC management, social media marketing, website design, graphic design, and branding.</strong> Our expertise helps businesses across India, the US, UK, Canada, and Australia improve visibility, engagement, and conversions with measurable ROI.
                </p>
                <p className="mt-2">
                  <strong>With 20+ years of experience</strong>, we leverage AI-driven strategies, data analytics, and performance-based campaigns to scale your business. Whether you're a startup or an enterprise, our customized digital solutions ensure better rankings, higher traffic, and qualified leads.
                </p>
              </div>

              {/* Buttons */}
              <div className="about3_text_box_btn mt-4 d-flex gap-3 gap-lg-5 align-items-center flex-wrap">
                <Link className="btnHomeBanner about3" href="/contact">
                  Let’s Grow Your Business
                  <span className="bg-black">
                    <i className="fa fa-arrow-right"></i>
                  </span>
                </Link>

                <Link className="aboutBtn" href="tel:+919222260000">
                  <div className="about3_btn_box d-flex align-items-center">
                    <div className="icon me-2">
                      <Image
                        width={48}
                        height={48}
                        src="/assets/images/icons/call-icon.svg"
                        alt="Call Icon"
                        loading="eager"
                      />
                    </div>
                    <div>
                      <p className="mb-0">Need Help?</p>
                      <h5 className="fontWeight600 mb-0">+91 92222-60000</h5>
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
