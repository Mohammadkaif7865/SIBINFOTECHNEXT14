import Image from "next/image";
import React from "react";

const DigitalMarketingWebAgency = () => {

  const technicalExpertise = [
    { src: "/assets/images/php.webp", alt: "PHP" },
    { src: "/assets/images/wordpress-logo.webp", alt: "WordPress" },
    { src: "/assets/images/asp.webp", alt: "ASP.net" },
    { src: "/assets/images/mysql.webp", alt: "MySQL" },
    { src: "/assets/images/html-5.webp", alt: "HTML" },
    { src: "/assets/images/drupal.webp", alt: "Drupal" },
    { src: "/assets/images/js.webp", alt: "JavaScript" },
    { src: "/assets/images/ci.webp", alt: "Codeigniter" },
    { src: "/assets/images/laravel.webp", alt: "Laravel" },
    { src: "/assets/images/magento.webp", alt: "Magento" },
    { src: "/assets/images/angular.webp", alt: "Angular" },
    { src: "/assets/images/css-3.webp", alt: "CSS" },
    { src: "/assets/images/photoshop.webp", alt: "Photoshop" },
    { src: "/assets/images/illustrator.webp", alt: "Illustrator" },
    { src: "/assets/images/figma.webp", alt: "Figma" },
    { src: "/assets/images/bootstrap.webp", alt: "Bootstrap" },
  ];

  return (
    <section className="marBlock overflowHidden ">
      <div className="marqBlock">
        <h2 className="large_heading  maqrquee fontHeading fw-bold text-uppercase">
          <span className="stroke">DIGITAL MARKETING</span> & WEB DESIGNING  </h2>
        <h2 className="large_heading mt-4  fontHeading maqrqueeReverse fw-bold text-uppercase">
          WEBSITE DEVELOPMENT & <span className="stroke">SEO AGENCY</span>
        </h2>
      </div>
      <div className="containerFull">
        <div className="technicalExpertise">
          {technicalExpertise.map((expertise, index) => (
            <div className="itemTechnicalExpertise" key={index}>
              <Image
                width={60}
                height={60}
                quality={100}
                className="object-fit-contain"
                src={expertise.src}
                alt={expertise.alt}
              />
              <h4 className="small_heading fontHeading">{expertise.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingWebAgency;
