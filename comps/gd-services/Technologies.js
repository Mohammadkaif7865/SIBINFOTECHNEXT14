import Image from "next/image";
import React from "react";

const Technologies = () => {
  const logos = [
    "/assets/images/gd-services/affinity.svg",
    "/assets/images/gd-services/create.webp",
    "/assets/images/gd-services/calligrakrita.svg",
    "/assets/images/gd-services/sectech.png",
    "/assets/images/gd-services/figma.png",
    "/assets/images/gd-services/xd.png",
    "/assets/images/gd-services/a.png",
    "/assets/images/gd-services/id.png",
    "/assets/images/gd-services/ps.png",
    "/assets/images/gd-services/canva.png",
    "/assets/images/gd-services/ai.png",
    "/assets/images/gd-services/Blender.png",
  ];

  return (
    <section className="bg_gray">
      <div className="containerFull">
        <h4 className="sub_heading fontHeading fontWeight700 text-center">
            Technologies We Used
        </h4>
        <div className="row mt-5 ">
          {logos.map((logo, index) => (
            <div key={index} className="col-lg-2 mb-4">
              <div className="logo-item shadow bg-white">
                <Image src={logo} width={80} height={80} alt={""} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
