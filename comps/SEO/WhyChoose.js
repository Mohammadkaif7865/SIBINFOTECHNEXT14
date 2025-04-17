import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-5">
            <div className="leftSeoCompany">
              <Image
                width={500}
                height={400}
                quality={100}
                className=" w-100 h-auto"
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/seo-company.jpg"
                alt="SEO Company"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="rightSeoCompany">
              <h4 className="sub_heading fontHeading">
                We are more than just a SEO Company
              </h4>
              <p className="mt-3">
                As a leading SEO agency in India, we pride ourselves on a
                remarkable track record, successfully managing over{" "}
                <strong>1350+ projects</strong> within distinct niches. Our
                dedicated teams specialize in various sectors, ensuring
                businesses achieve top rankings. Whether its real estate SEO,
                healthcare SEO, education SEO, or technology-based SEO, each
                niche benefits from a specialized team with the requisite skills
                and extensive industry experience. This targeted approach allows
                us to comprehend specific business requirements, leading to
                outstanding results.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>Professional SEO Experts</li>
                    <li>Customizable Strategies</li>
                    <li>Transparent Reporting</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>24/7 Support & Care</li>
                    <li>Affordable SEO Packages</li>
                    <li>Guaranteed 100% Client Satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
