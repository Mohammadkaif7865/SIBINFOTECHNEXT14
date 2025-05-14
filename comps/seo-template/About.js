import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaArrowTrendDown } from "react-icons/fa6";

const About = () => {
  return (
    <section className="seo_about_temp">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h5 className="fontWeight600">About Us</h5>
            <h4 className="mt-4 heading fontWeight600">
              Dominate <span className="text_red">Google Rankings</span> <br />{" "}
              <span className="text_red">& Drive Organic Growth</span>{" "}
            </h4>
            <p className="mt-4">
              Since 2005, SIB Infotech has been offering cutting-edge SEO
              services in India. We're known as the top SEO company, for
              delivering customized SEO strategies that drive organic traffic,
              improve search rankings, boosts your online visibility and
              maximize ROI.
            </p>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <p>
              Everyone knows that the first page of Google gets the most
              visitors, but did you know there's a big difference in how many
              people click on the top results compared to the bottom ones?
              Remember, there's no such thing as second place. You're either
              first or nothing. With our years of experience as a leading SEO
              Services company in India, we know how important Search Engine
              Optimization (SEO) is for businesses
            </p>
            <div className="mt-3">
              <Link className="btnHomeBanner about3" href={"/contact"}>
              Improve your SEO Ranking{" "}
                <span class="bg-black">
                  <i class="fa fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5 align-items-center">
          <div className="col-lg-6">
            <div className="img_grid">
              <div className="item_img ">
                <Image
                  className=""
                  width="400"
                  height={400}
                  src="/assets/images/seo-about.jpg"
                  alt=""
                />
              </div>
              <div className="item_img">
                <Image
                  className=""
                  width="400"
                  height={400}
                  src="/assets/images/demo-2-about-img-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="list_about_ranked">
              <div className="item shadow">
                <div className="icon">
                  <FcGoogle />
                </div>
                <div className="text_content">Rank #1 on Google & Bing </div>
              </div>
              <div className="item shadow ">
                <div className="icon">
                  <img
                    className="m-2"
                    width={35}
                    src="/assets/images/google-map-icon.svg"
                    alt=" "
                  />
                </div>
                <div className="text_content">Rank #1 on Google Maps </div>
              </div>
              <div className="item shadow">
                <div className="icon">
                  <FaArrowTrendDown className="text-success" />
                </div>
                <div className="text_content">Decreases Advertising Cost </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
