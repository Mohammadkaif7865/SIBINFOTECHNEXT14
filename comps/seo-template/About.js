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
          <div className="col-lg-6">
            {/* <h5 className="fontWeight600">About Us</h5> */}
            <h2 className="mt-4 heading fontWeight600">
              Dominate <span className="text_red">Google Rankings</span> <br />{" "}
              <span className="text_red">& Drive Organic Growth</span>{" "}
            </h2>
            <p className="mt-4">
             Since 2005, SIB Infotech has been helping businesses grow as a trusted SEO Services Company in Mumbai through cutting-edge SEO strategies that improve search rankings, boost online visibility, and drive real organic traffic across Google and modern AI-powered search platforms.
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
              Most customers never go beyond Google’s first page. If your business is not ranking there, your competitors are getting the clicks, leads, and sales. Today, search goes beyond Google. Buyers now discover businesses through ChatGPT, Google AI Overviews, Gemini, voice search, and Google Maps. You need to be visible across traditional search, AI search, and local search at the same time.
            </p>
         <div className="mt-3">
  <Link className="btnHomeBanner about3" href={"/contact-us"}>
    Want to Improve your Ranking? Let’s Talk.
    <span className="bg-black">
      <i className="fa fa-arrow-right"></i>
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
