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
              Result-Driven{" "}
              <span className="text_red">SEO Service Company in Mumbai</span>{" "}
              Since 2005
            </h2>
            <p className="mt-4">
              Since 2005, SIB Infotech has been helping businesses grow as a
              trusted SEO Services Company in Mumbai through cutting-edge SEO
              strategies that improve search rankings, boost online visibility,
              and drive real organic traffic across Google and modern AI-powered
              search platforms.
            </p>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <p>
            SIB Infotech is a leading SEO service company in Mumbai with an office at Mindspace, Malad West. Businesses across Mumbai, from Andheri startups and Bandra D2C brands to BKC firms and Thane manufacturers, partner with us for SEO that delivers measurable growth. We understand Mumbai’s search landscape, local buyer behaviour, and industry-wise keyword difficulty. Our Mumbai team offers strategy sessions, Google Business Profile optimization, local citation building, and review management so your business dominates Google Search and Maps.
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
