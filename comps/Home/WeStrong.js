import React from "react";
import Image from "next/image";
import Counter from "../CounterHome";

const WeStrong = () => {
  return (
    <section className="weStrongHome">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8 ">
            <h4 className="title fontWeight600 text-white">Our Facts</h4>
            <h3 className="heading mt-4 fontWeight300">
              How We Became a Trusted Name <br /> in{" "}
              <span className="text_red fontWeight700">Digital Marketing</span>
            </h3>
            <p className="mt-4 text-white pe-lg-5">
              From our roots in Mumbai and New Delhi to serving companies
              worldwide, SIB Infotech's 20+ year journey reflects our passion
              for growth-focused digital marketing. What started as a small team
              with big ambitions has grown into a full-service top digital
              marketing company delivering growth to businesses locally across
              India and around the world
            </p>
            <p className="mt-4 text-white pe-lg-5">
              From building high-converting websites to executing data-driven
              SEO, PPC, and social media strategies, we help startups,
              enterprises, and global brands to achieve success with
              result-oriented strategies.
            </p>

            <div className=" item_numberd_row">
              <div className="row">
                <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                  <h4>2000+ </h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                  <h4> 20 </h4>
                  <p>Years of Experience</p>
                </div>
                <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                  <h4> 30+ </h4>
                  <p>Team Members</p>
                </div>
                <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                  <h4> 1200+ </h4>
                  <p>Satisficed Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="we_strong img_box">
              <Image
                className="object-fit-cover w-100 "
                width={400}
                height={300}
                src={"/assets/images/party-img.png"}
                alt=""
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStrong;
