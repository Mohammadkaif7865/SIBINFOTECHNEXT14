

import React from "react";
import WorkSlider from "react-slick";
import LogoSlider from "./LogoSlider";
import Image from "next/image";

const slides = [
  {
    imgSrc: "/assets/images/works/omee.png",
    alt: "OMEE - Alkem Generic",
    heading: "OMEE - Alkem Generic",
    text: "Omee is India’s favourite antacid and an iconic brand by Alkem Generic. The unique formulation of Omee dissolves quickly and neutralizes stomach acid to provide effective relief from acidity and gas.",
  },
  {
    imgSrc: "/assets/images/works/roswalt.png",
    webpSrc: "/assets/images/works/roswalt.webp",
    alt: "Roswalt - Roswalt Realty: Residential commercial Projects Mumbai",
    heading: "Roswalt Realty",
    text: "Roswalt realty believes in creating spaces that are an extension of one’s self and this philosophy is infused in every project undertaken by us. The company boasts of a proud lineage and finds its roots in the prestigious red brick group known for providing...",
  },
  {
    imgSrc: "/assets/images/works/netsys.png",
    webpSrc: "/assets/images/works/netsys.webp",
    alt: "Online Netsys",
    heading: "Online Netsys",
    text: "OnLine Netsys is inspired by the objective of empowering enterprises with leading global IT Infrastructure, Networking and AV Technology.",
  },
  {
    imgSrc: "/assets/images/works/shaurya.png",
    webpSrc: "/assets/images/works/shaurya.webp",
    alt: "Shaurya Dedhia",
    heading: "Shaurya Dedhia",
    text: "Shaurya Dedhia - The studio practices architecture, interior and product designing, specializing in bespoke, end-to-end design solutions.",
  },
  {
    imgSrc: "/assets/images/works/alarm-avenue.png",
    webpSrc: "/assets/images/works/alarm-avenue.webp",
    alt: "Alarm Avenue",
    heading: "Alarm Avenue",
    text: "Alarm Avenue is a team of highly trained Technicians and Installers. We are specialized in Commercial & Home Security. We are fully licensed, insured, and covered by WorkSafe BC.",
  },
];

export default function WorkWebdesign() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="circleIcon ">
        <img src="assets/images/icons/circle.svg" alt="Circle Icon" />
      </div>
      <div className="containerFull">
        <p className="text-center title fontWeight600">Our Portfolio</p>
        <h3 className="text-center large_heading2 mt-4 fontHeading2 fontWeight300">
          Made by <span className="fontWeight600 text_red">SIB Infotech</span>
        </h3>
        <div className="space"></div>
        <div className="portfolioHome mt-4">
          <p className="sub_heading fontWeight600   ">Our Portfolio</p>
          <p className="title mt-2">
            Website Design you'll want to tell all your friends about
          </p>
        </div>
        <WorkSlider className="workSlider" {...settings}>
          {slides.map((slide, index) => (
            <div className="innerSlider" key={index}>
              <div className="itemSliderWork">
                <div className="row align-items-md-center ">
                  <div className="col-lg-6">
                    <div className="imgWork">
                      {/* <picture>
                        <source srcSet={slide?.webpSrc} type="image/webp" />

                        <img className="w-100" src={slide?.imgSrc} alt={slide?.alt} />
                      </picture> */}
                      <Image
                        width={500}
                        height={500}
                        quality={100}
                        className="w-100 h-auto"
                        src={slide?.imgSrc}
                        alt={slide?.alt}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="workHomeRight mt-4 ">
                      <p className="text_red small_heading fontWeight700 ">
                        {slide?.heading}
                      </p>
                      <p className="mt-3">{slide?.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </WorkSlider>
        {/* <div className="bottomTextSlider">
          <h4 className="small_heading fontHeading fontWeight600">
            Some of the{" "}
            <span className="text_red fontHeading fontWeight600 ">
              Best Companies in India
            </span>{" "}
            & Worldover, We’re working with
          </h4>
        </div>
        <div className="logoMarqueeHome">
          <LogoSlider />
        </div> */}
      </div>
    </div>
  );
}
