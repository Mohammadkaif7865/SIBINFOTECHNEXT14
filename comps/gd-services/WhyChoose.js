import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section className="">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="leftBenefits">
              <h4 className="sub_heading fontHeading fontWeight700">
                Why Choose Us?
              </h4>

              <ul className="mt-4 list_benifits_lseo">
                <li>
                  <span className="fontWeight700 title">
                    Experienced Designers
                  </span>
                  <br />
                  <span className="text-dark">
                    Our expert team brings creativity and innovation to every
                    project.
                  </span>
                </li>
                <li>
                  <span className="fontWeight700 title">Tailored Designs</span>
                  <br />
                  <span className="text-dark">
                    We create designs that align with your brand's identity and
                    goals.
                  </span>
                </li>
                <li>
                  <span className="fontWeight700 title">
                    High-Quality Graphics
                  </span>
                  <br />
                  <span className="text-dark">
                    Stunning visuals that make a lasting impression.
                  </span>
                </li>
                <li>
                  <span className="fontWeight700 title">Quick Turnaround</span>
                  <br />
                  <span className="text-dark">
                    We deliver designs promptly without compromising quality.
                  </span>
                </li>
                <li>
                  <span className="fontWeight700 title">
                    Affordable Pricing
                  </span>
                  <br />
                  <span className="text-dark">
                    Premium designs at competitive rates.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 px-4 px-lg-0">
            <div className="w-100 h-100 img_benifits  ">
              <Image
                className="w-100 h-100 object-fit-cover"
                src="/assets/images/gd-services/why-choose.jpg"
                alt=""
                width="1050"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
