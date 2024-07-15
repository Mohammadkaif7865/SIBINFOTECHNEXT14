import Image from "next/image";
import React from "react";

const Strategies = () => {
  return (
    <section>
      <div class="containerFull">
        <div class="row align-items-center">
          <div class="col-lg-4 leftDigiSer">
            <div class="heading-section">
              <h3 class="customHeading text-white fontWeight700">
                SIB's strategy is the best you can get for your business
              </h3>
              <ul class="linkedin-list">
                <li class="customText text-off-white">
                  Target audience identification
                </li>
                <li class="customText text-off-white">
                  Market and user analytics
                </li>
                <li class="customText text-off-white">
                  Strategic content creation
                </li>
                <li class="customText text-off-white">Appealing ad designs</li>
                <li class="customText text-off-white">Ad monitoring</li>
                <li class="customText text-off-white">Reporting</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <h3 class="customHeading fontWeight800 mt-lg-0 mt-3">
              Our <span className="text_red">Strategies </span>help in
            </h3>
            <div class="row">
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linked-in-ads-management.svg"
                    alt="Linkedin-Ads-Management"
                  />
                  <h4>Building brand awareness</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linkedin-ads-management-company.svg"
                    alt="Linkedin-Ads-Management-Company"
                  />
                  <h4>Lead generation</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linkedin-ads-management-company-in-delhi.svg"
                    alt="Linkedin-Ads-Management-Company-In-Delhi"
                  />
                  <h4>Website conversions</h4>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linkedin-ads-management-firm.svg"
                    alt="Linkedin-Ads-Management-Company-In-Delhi"
                  />
                  <h4>Brand visibility increment</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linkedin-ads-firm-in-india.svg"
                    alt="Linkedin-Ads-Management-Firm-In-India"
                  />
                  <h4>Toughen brand reputation</h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="/assets/images/icons/linkedin-ads-firm-in-delhi.svg"
                    alt="Linkedin-Ads-Management-Firm-In-Mumbai"
                  />
                  <h4>Boosting website traffic</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategies;
