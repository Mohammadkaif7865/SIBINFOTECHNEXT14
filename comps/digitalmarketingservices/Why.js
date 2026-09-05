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
                  src="/assets/images/seo-company.webp"
                  alt="SEO Company"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="rightSeoCompany">
                <h4 className="sub_heading fontHeading">
                  Why SIB Infotech is the <span className="text_red">#1 Digital Marketing Company in India</span>
                </h4>
                <p className="mt-3 text-justify">
                  Since 2005, SIB Infotech has stood at the forefront of the Indian digital marketing ecosystem.
                  With over 1,350+ completed client engagements and active campaigns across 40+ countries,
                  we are officially recognized among the top 3% of digital agencies in India as a Google Premier Partner.
                </p>
                <p className="mt-2 text-justify">
                  Unlike conventional digital marketing firms in India that rely on outsourced talent or fragmented freelancing,
                  our client partners work directly with an elite, dedicated in-house team of senior digital strategists,
                  Google Ads certified professionals, SEO technical architects, creative storytellers, and conversion optimization engineers.
                </p>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <ul className="ps-0 list-unstyled">
                      <li className="mb-2"><strong>Google Premier Partner</strong> (Top 3% Tier)</li>
                      <li className="mb-2"><strong>18+ Years Track Record</strong> (Since 2005)</li>
                      <li className="mb-2"><strong>1,000+ Brands Ranked</strong> in 40+ Countries</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="ps-0 list-unstyled">
                      <li className="mb-2"><strong>100% Transparent</strong> Live Dashboards</li>
                      <li className="mb-2"><strong>No Rigid Lock-in</strong> Contracts</li>
                      <li className="mb-2"><strong>Proprietary AI &amp; Predictive</strong> Models</li>
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
