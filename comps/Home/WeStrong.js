import React from "react";
import Image from "next/image";

const WeStrong = () => {
  return (
    <section className="weStrongHome">
      <div className="containerFull">
        <div className="row">
          {/* Content */}
          <div className="col-lg-8">
            <h4 className="title fontWeight600 text-white">Our Facts</h4>

            <h3 className="heading mt-4 fontWeight300 text-white">
              How We Became a Trusted Name <br />
              in <span className="text_red fontWeight700">Digital Marketing</span>
            </h3>

            <p className="mt-4 text-white pe-lg-5">
              From our roots in Mumbai and New Delhi to serving companies worldwide,
              SIB Infotech's 20+ year journey reflects our passion for growth-focused
              digital marketing. What started as a small team with big ambitions has
              grown into a full-service digital agency delivering real business growth
              across India and globally.
            </p>

            <p className="mt-4 text-white pe-lg-5">
              From building high-converting websites to executing data-driven SEO,
              PPC, and social media strategies, we empower startups, enterprises, and
              global brands with result-oriented campaigns.
            </p>

            {/* Stats Grid */}
            <div className="item_numberd_row mt-4">
              <div className="row">
                {[
                  { value: "2000+", label: "Projects Delivered" },
                  { value: "20", label: "Years of Experience" },
                  { value: "30+", label: "Team Members" },
                  { value: "1200+", label: "Satisfied Customers" },
                ].map((item, index) => (
                  <div key={index} className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <h4 className="text-white fontWeight600">{item.value}</h4>
                    <p className="text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-4">
            <div className="we_strong img_box">
              <Image
                className="object-fit-cover w-100"
                width={400}
                height={300}
                src="/assets/images/party-img.png"
                alt="SIB Infotech Team Celebration"
                priority // Boost LCP if visible above the fold
                quality={85}
                placeholder="blur"
                blurDataURL="/assets/images/party-img.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStrong;
