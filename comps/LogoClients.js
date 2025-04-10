import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "/assets/images/clients/airtel-logo.png",
    alt: "Airtel",
  },
  {
    src: "/assets/images/clients/Anurudhi-Jewels-Logo.png",
    alt: "Anuridhi Jewels",
  },
  {
    src: "/assets/images/clients/Archer-Chess-logo.png",
    alt: "Archer Chess",
  },
  {
    src: "/assets/images/clients/axixy-logo.png",
    alt: "Axisy",
  },
  {
    src: "/assets/images/clients/Bharat-Petrolium-logo.png",
    alt: "Bharat Petroleum",
  },
  {
    src: "/assets/images/clients/Citi-logo.png",
    alt: "Citi",
  },
  {
    src: "/assets/images/clients/Coco-Cola-logo.png",
    alt: "Coca Cola",
  },
  {
    src: "/assets/images/clients/DDS-logo.png",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "/assets/images/clients/Disnay-logo.png",
    alt: "Disney",
  },
  {
    src: "/assets/images/clients/D-mart-logo.png",
    alt: "Dmart",
  },
  {
    src: "/assets/images/clients/elder-logo.png",
    alt: "Elder",
  },
  {
    src: "/assets/images/clients/Finolex-logo.png",
    alt: "Finolex",
  },
  {
    src: "/assets/images/clients/Godrej-logo.png",
    alt: "Godrej",
  },
  {
    src: "/assets/images/clients/Hindustantimes-logo.png",
    alt: "Hindustan Times",
  },
  {
    src: "/assets/images/clients/HP-logo.png",
    alt: "HP",
  },
  {
    src: "/assets/images/clients/Jindal-Steel-logo.png",
    alt: "Jindal Steel",
  },
  {
    src: "/assets/images/clients/JSW-Logo.png",
    alt: "JSW",
  },
  {
    src: "/assets/images/clients/Kiana-Skin-logo.png",
    alt: "Kiana Skin",
  },
  {
    src: "/assets/images/clients/Kingfisher-logo.png",
    alt: "Kingfisher",
  },
  {
    src: "/assets/images/clients/Levis-logo.png",
    alt: "Levis",
  },
  {
    src: "/assets/images/clients/nsa-logo.png",
    alt: "NSA",
  },
  {
    src: "/assets/images/clients/NX-Audio.png",
    alt: "NX Audio",
  },
  {
    src: "/assets/images/clients/Patanjali-logo.png",
    alt: "Patanjali",
  },
  {
    src: "/assets/images/clients/pravaaian-logo.png",
    alt: "Pravaaian",
  },
  {
    src: "/assets/images/clients/RNB-logo.png",
    alt: "RNB Global University",
  },
  {
    src: "/assets/images/clients/Samsung-logo.png",
    alt: "Samsung",
  },
  {
    src: "/assets/images/clients/Shapoorji-pallonji-logo.png",
    alt: "Shapoorji Pallonji",
  },
  {
    src: "/assets/images/clients/supreme-court-logo.png",
    alt: "Supreme Court",
  },
  {
    src: "/assets/images/clients/TATA-logo.png",
    alt: "TATA",
  },
  {
    src: "/assets/images/clients/Veeraco-logo.png",
    alt: "Veeraco",
  },
  {
    src: "/assets/images/clients/Vinod-Cookware-logo.png",
    alt: "Vinod Cookware",
  },
];

export default function LogoClients() {
  return (
    <div className="d-flex flex-wrap mt-lg-5 justify-content-center mt-4">
      {logos.map((logo, index) => (
        <div className="itemClientLogo" key={index}>
          <div className="clientLogoBox">
            <Image
              width={150}
              height={100}
              quality={100}
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
