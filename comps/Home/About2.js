import React from "react";
import Link from "next/link";
import Image from "next/image";

const About2 = () => {
  return (
    <section className="about2 redDot">
      <div className="containerFull">
        <div className="row align-items-md-center">
          <div className="col-lg-6">
            {/* <h5 className="title_about_2 position-relative">
              Let’s Grow Your Business?
            </h5> */}
            <h4 className="fontHeading2 large_heading2 fontWeight600">
              <span className="text_red">Guaranteed Visibility</span> <br />{" "}
              <span className="fontWeight300">
                Through our Digital <br /> Marketing Services
              </span>
            </h4>

            <h5 className="d-none d-lg-block title_about_2 position-relative mt-5 right">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
          <div className="col-lg-6 mt-4 ">
            <p>
              <strong> SIB Infotech</strong> is a{" "}
              <strong>leading digital marketing agency in India</strong>, with
              offices in Mumbai and New Delhi. As a Google Premier Partner, we
              specialize in{" "}
              <strong>
                SEO services, PPC management, social media marketing, website
                design, graphic design, and branding. Our expertise helps
                businesses in India, the US, the UK, Canada, Australia{" "}
              </strong>
              , and beyond boost online visibility, engagement, and conversions
              while delivering measurable ROI.
            </p>
            <p className="mt-2">
              With 19+ years of experience, we leverage{" "}
              <strong>AI-driven marketing strategies, data analytics</strong>,
              and result-oriented campaigns to maximize
              {/* growth. Whether you're a
              startup or an enterprise, our customized{" "}
              <strong>digital marketing solutions</strong> ensure higher
              rankings, increased traffic, and improved lead generation to help
              you stay ahead of the competition. */}
            </p>
          </div>
          <h5 className=" d-lg-none title_about_2 position-relative mt-4 right">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
        </div>
        <div className="row mt-4 mt-lg-5 align-items-center">
          <div class="col-lg-6">
            <p>
              As a <strong>Google Premier Partner</strong>, SIB Infotech ranks
              among the top 3% of Google Ads agencies, recognized for delivering
              exceptional <strong>Google Ads performance</strong>. Our expert
              team leverages exclusive access to Google’s latest tools, product
              betas, and consumer insights, ensuring higher ROI,{" "}
              <strong>lower ad costs</strong>, and maximum conversions for your
              business.
            </p>
            <p className="mt-2">
              With dedicated <strong>support from Google</strong>, we craft
              data-driven, high-performing campaigns tailored to your goals.
              {/* Partner with certified experts and experience{" "}
              <strong>data-driven, result-oriented campaigns</strong> that fuel
              your business growth */}
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1  mt-4 mt-lg-0">
            <div className="cardAbout shadow bg-black rounded-4 d-flex flex-wrap gap-3 flex-md-nowrap align-items-center justify-content-center">
              <div>
                <div className="text-warning text-center text-md-start">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h3 className="meduim_heading text-white mt-2 text-center text-md-start fontWeight300">
                  Top 3%
                  <span className="fontWeight600">
                    {" "}
                    Google Premier Partner
                  </span>{" "}
                  Agency - Elite Google Ads Expertise
                </h3>
              </div>
              <div>
                <Link
                  href="https://www.google.com/partners/agency?id=4328223643"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    className="h-auto"
                    width={150}
                    height={150}
                    quality={100}
                    src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                    alt="Google Partner"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
