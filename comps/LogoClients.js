import React from "react";
import Image from "next/image";

const logos = [
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/axis-y.svg",
    alt: "Axisy - Compact Lifting Solutions",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
  {
    src: "assets/images/clients/dudley.svg",
    alt: "Dudley Digital Marketing",
  },
];

export default function LogoClients() {
  return (
    <div className="row mt-lg-5 justify-content-center mt-4">
      {logos.map((logo, index) => (
        <div className="col-lg-2" key={index}>
          <div className="clientLogoBox">
            <Image
              width={100}
              height={80}
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
