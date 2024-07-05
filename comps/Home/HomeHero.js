import React from "react";
import BannerForm from "../BannerForm";
import BannerTextSlider from "../BannerTextSlider";
import Image from "next/image";

const HomeHero = () => {
  const images = [
    {
      src: "/assets/images/best-website-deigning-ana-development-company-in-india.svg",
      alt: "Best website desining and development company in India",
    },
    {
      src: "/assets/images/best-design-comapnies-in-india.svg",
      alt: "Best Designing Company in India",
    },
    {
      src: "/assets/images/facebook-reviews.svg",
      alt: "Facebook Reviews",
    },
    {
      src: "/assets/images/search-engine-optimization-firm-in-delhi.svg",
      alt: "Search engine optimization firm in delhi",
    },
    {
      src: "/assets/images/top-advertising-and-marketing-company.png",
      alt: "Top adverstising and marketing company",
    },
  ];

  return (
    <div>
      <div className="bannerBlock ">
        <video loop playsInline autoPlay muted>
          <source
            src="assets/images/banner/banner-video2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="videoText">
          <div className="containerFull">
            <div className="row">
              <div className="col-lg-7">
                <div className="videoLeft">
                  <h1 className="large_heading  fontHeading fontWeight600 text-white">
                    <span className="sub_heading text_red fontWeight700">
                      Best
                    </span>
                    <br />
                    Digital Marketing Company &<br /> SEO Agency in India
                  </h1>
                  <div className="banner-services-list mt-3">
                    <p className="dot_points">
                      {" "}
                      <span className="list-marker"> </span> SEO Services
                    </p>
                    <p className="dot_points">
                      {" "}
                      <span className="list-marker"> </span> Google Ads
                      Management
                    </p>
                    <p className="dot_points">
                      {" "}
                      <span className="list-marker"> </span> Meta Ads Management
                    </p>
                    <p className="dot_points">
                      {" "}
                      <span className="list-marker"> </span> Graphic Design
                      Services
                    </p>
                  </div>
                  {/* <div className="bannerLogo mt-5">
                    {images.map((image, index) => (
                      <div className="bannerLogo-item" key={index}>
                        <Image
                          width={100}
                          height={100}
                          quality={100}
                          src={image.src}
                          alt={image.alt}
                        />
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
              <div className="col-lg-5 d-none d-md-block">
                <div className="bannerForm">
                  <h4 className="small_heading fontHeading  fontWeight700">
                    Accelerate Your Business Growth
                  </h4>
                  <p className="fontHeading">
                    with{" "}
                    <strong className="fontWeight600 text_red">
                      Best <span className="textChange">Digital Marketing</span>{" "}
                      Company in India
                    </strong>
                  </p>
                  <BannerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 d-block d-md-none">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Digital Marketing</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
