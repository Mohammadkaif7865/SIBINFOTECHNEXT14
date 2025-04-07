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

            <h5 className="title_about_2 position-relative mt-5 right">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
          <div className="col-lg-6">
            <p>
           <strong> SIB Infotech</strong> is a <strong>leading digital marketing agency in India</strong>, with offices in Mumbai and New Delhi. As a Google Premier Partner, we specialize in  <strong>SEO services, PPC management, social media marketing, website design, graphic design, and branding. Our expertise helps businesses in India, the US, the UK, Canada, Australia </strong>, and beyond boost online visibility, engagement, and conversions while delivering measurable ROI. 
            </p>
            <p className="mt-2">
            With 19+ years of experience, we leverage AI-driven marketing strategies, data analytics, and result-oriented campaigns to maximize growth. Whether you're a startup or an enterprise, our customized digital marketing solutions ensure higher rankings, increased traffic, and improved lead generation to help you stay ahead of the competition. 
            </p>
          </div>
        </div>
        <div className="row mt-lg-5 align-items-center">
          <div class="col-lg-6">
            <p>
              World-class <strong>Google Ads service</strong>, delivered by
              local experts. Our award-winning Google Ads team has once again
              earned <strong>Google Premier Partner</strong> status – which puts
              us in the top 3% of Google Ads Agencies in Australia. What does
              that mean for you? Exclusive access to product betas, dedicated
              account support direct from Google, consumer insights and more.
              See it for yourself, check out our 90+ 5 star reviews!
            </p>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cardAbout shadow bg-black rounded-4 d-flex justify-content-between">
              <div>
                <div className="text-warning">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h3 className="sub_heading text-white mt-2 fontWeight300">
                  Top 3%{" "}
                  <span className="fontWeight600">Google Premier Partner</span>{" "}
                  Agency
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
