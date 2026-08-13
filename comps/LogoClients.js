import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "/assets/images/clients/airtel-logo.webp",
    alt: "Airtel",
  },
  {
    src: "/assets/images/clients/Anurudhi-Jewels-Logo.webp",
    alt: "Anuridhi Jewels",
  },
  {
    src: "/assets/images/clients/Archer-Chess-logo.webp",
    alt: "Archer Chess",
  },
  {
    src: "/assets/images/clients/axixy-logo.webp",
    alt: "Axisy",
  },
  {
    src: "/assets/images/clients/Bharat-Petrolium-logo.webp",
    alt: "Bharat Petroleum",
  },
  {
    src: "/assets/images/clients/Citi-logo.webp",
    alt: "Citi",
  },
  {
    src: "/assets/images/clients/Coco-Cola-logo.webp",
    alt: "Coca Cola",
  },
  {
    src: "/assets/images/clients/DDS-logo.webp",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "/assets/images/clients/Disnay-logo.webp",
    alt: "Disney",
  },
  {
    src: "/assets/images/clients/D-mart-logo.webp",
    alt: "Dmart",
  },
  {
    src: "/assets/images/clients/elder-logo.webp",
    alt: "Elder",
  },
  {
    src: "/assets/images/clients/Finolex-logo.webp",
    alt: "Finolex",
  },
  {
    src: "/assets/images/clients/Godrej-logo.webp",
    alt: "Godrej",
  },
  {
    src: "/assets/images/clients/Hindustantimes-logo.webp",
    alt: "Hindustan Times",
  },
  {
    src: "/assets/images/clients/HP-logo.webp",
    alt: "HP",
  },
  {
    src: "/assets/images/clients/Jindal-Steel-logo.webp",
    alt: "Jindal Steel",
  },
  {
    src: "/assets/images/clients/JSW-Logo.webp",
    alt: "JSW",
  },
  {
    src: "/assets/images/clients/Kiana-Skin-logo.webp",
    alt: "Kiana Skin",
  },
  {
    src: "/assets/images/clients/Kingfisher-logo.webp",
    alt: "Kingfisher",
  },
  {
    src: "/assets/images/clients/Levis-logo.webp",
    alt: "Levis",
  },
  {
    src: "/assets/images/clients/nsa-logo.webp",
    alt: "NSA",
  },
  {
    src: "/assets/images/clients/NX-Audio.webp",
    alt: "NX Audio",
  },
  {
    src: "/assets/images/clients/Patanjali-logo.webp",
    alt: "Patanjali",
  },
  {
    src: "/assets/images/clients/pravaaian-logo.webp",
    alt: "Pravaaian",
  },
  {
    src: "/assets/images/clients/RNB-logo.webp",
    alt: "RNB Global University",
  },
  {
    src: "/assets/images/clients/Samsung-logo.webp",
    alt: "Samsung",
  },
  {
    src: "/assets/images/clients/Shapoorji-pallonji-logo.webp",
    alt: "Shapoorji Pallonji",
  },
  {
    src: "/assets/images/clients/supreme-court-logo.webp",
    alt: "Supreme Court",
  },
  {
    src: "/assets/images/clients/TATA-logo.webp",
    alt: "TATA",
  },
  {
    src: "/assets/images/clients/Veeraco-logo.webp",
    alt: "Veeraco",
  },
  {
    src: "/assets/images/clients/Vinod-Cookware-logo.webp",
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
