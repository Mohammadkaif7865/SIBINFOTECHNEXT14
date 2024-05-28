import Image from "next/image";
import Link from "next/link";
import React from "react";

const Why = () => {
  return (
    <>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5">
              <div className="leftSeoCompany">
                <Image
                  className="w-100 h-auto"
                  width={500}
                  height={500}
                  quality={100}
                  src="/assets/images/seo-company.jpg"
                  alt="SEO Company"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rightSeoCompany">
                <h4 className="sub_heading fontHeading">
                  We're more than just a Digital Marketing Company
                </h4>
                <p className="mt-3">
                  As a leading Digital Marketing agency in India, we pride
                  ourselves on a remarkable track record, successfully managing
                  over 1350+ projects within distinct niches. Our dedicated
                  teams specialize in various sectors, ensuring businesses
                  achieve top rankings. Whether its real estate SEO, healthcare
                  SEO, education SEO, or technology-based SEO, Google Ads, Meta
                  Ads, Social Media Marketing, Email Marketing each niche
                  benefits from a specialized team with the requisite skills and
                  extensive industry experience. This targeted approach allows
                  us to comprehend specific business requirements, leading to
                  outstanding results.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>Digital Marketing Experts</li>
                      <li>Customizable Strategies</li>
                      <li>Transparent Reporting</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>24/7 Support & Care</li>
                      <li>Affordable Packages</li>
                      <li>Guaranteed 100% Client Satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgAction2">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="leftAction">
                <h4 className="sub_heading text-white fontHeading fontWeight500">
                  We are an award winning Digital Marketing Agency in India
                </h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="rightAction text-center">
                <Link href="#bannerSection" className="btnAction mt-2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
