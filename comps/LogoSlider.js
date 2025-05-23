
import Image from "next/image";
import React from "react";
import LogoSliders from "react-slick";

const logos = [
  { src: "/assets/images/clients/3solutions.svg", alt: "3solutions" },
  { src: "/assets/images/clients/amisuzi.svg", alt: "Amisuzi" },
  { src: "/assets/images/clients/axis-y.svg", alt: "Axis Y" },
  {
    src: "/assets/images/clients/clients-anybody-can-help-website.svg",
    alt: "Anybody can help",
  },
  { src: "/assets/images/clients/clients-athena-website.svg", alt: "Athena" },
  {
    src: "/assets/images/clients/clients-bharat-petroleum-website.svg",
    alt: "Bharat Petroleum",
  },
  { src: "/assets/images/clients/clients-elder-website.svg", alt: "Elder" },
  { src: "/assets/images/clients/clients-finolex-website.svg", alt: "Finolex" },
  {
    src: "/assets/images/clients/clients-hindustan-petroleum-website.svg",
    alt: "Hindustan Petroleum",
  },
  {
    src: "/assets/images/clients/clients-hindustan-times-website.svg",
    alt: "Hindustan Times",
  },
  {
    src: "/assets/images/clients/clients-infertility-search-website.svg",
    alt: "Infertility Search",
  },
  {
    src: "/assets/images/clients/clients-mangorange-productions-website.svg",
    alt: "Mangorange Productions",
  },
  { src: "/assets/images/clients/clients-msg-website.svg", alt: "MSG" },
  {
    src: "/assets/images/clients/clients-narain-website-logo.svg",
    alt: "Narain",
  },
  {
    src: "/assets/images/clients/clients-nets-n-screens-website.svg",
    alt: "Nets-n-screen",
  },
  {
    src: "/assets/images/clients/clients-nsa-architects-website.svg",
    alt: "NSA Architects",
  },
  {
    src: "/assets/images/clients/clients-pravaasah-holiday-website.svg",
    alt: "Pravash Holiday",
  },
  {
    src: "/assets/images/clients/clients-red-cart-films-website.png",
    alt: "Red Cart Films",
  },
  {
    src: "/assets/images/clients/clients-tripplanners-world-website.svg",
    alt: "Tripplanners",
  },
  { src: "/assets/images/clients/competekaro.svg", alt: "Competekaro" },
  { src: "/assets/images/clients/dudley.svg", alt: "Dudley" },
];

export default function LogoSlider() {
  var sliderSettings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <LogoSliders className="logoSlider" {...sliderSettings}>
        {logos.map((logo, index) => (
          <div className="itemSlider" key={index}>
            <Image
              width={100}
              height={80}
              quality={100}
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </LogoSliders>
    </div>
  );
}
