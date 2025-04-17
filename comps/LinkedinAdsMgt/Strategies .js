import Image from "next/image";
import React from "react";

const Strategies = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 leftDigiSer">
            <div className="heading-section">
              <h3 className="customHeading text-white">
                SIB's strategy is the best you can get for your business
              </h3>
              <ul className="linkedin-list">
                <li className="customText text-off-white">
                  Target audience identification
                </li>
                <li className="customText text-off-white">
                  Market and user analytics
                </li>
                <li className="customText text-off-white">
                  Strategic content creation
                </li>
                <li className="customText text-off-white">
                  Appealing ad designs
                </li>
                <li className="customText text-off-white">Ad monitoring</li>
                <li className="customText text-off-white">Reporting</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="customHeading mt-lg-0 mt-3">
              Our <span className="text_red">Strategies </span>help in
            </h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linked-in-ads-management.svg"
                    alt="Linkedin-Ads-Management"
                  />
                  <h4>Building brand awareness</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linkedin-ads-management-company.svg"
                    alt="Linkedin-Ads-Management-Company"
                  />
                  <h4>Lead generation</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linkedin-ads-management-company-in-delhi.svg"
                    alt="Linkedin-Ads-Management-Company-In-Delhi"
                  />
                  <h4>Website conversions</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linkedin-ads-management-firm.svg"
                    alt="Linkedin-Ads-Management-Company-In-Delhi"
                  />
                  <h4>Brand visibility increment</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linkedin-ads-firm-in-india.svg"
                    alt="Linkedin-Ads-Management-Firm-In-India"
                  />
                  <h4>Toughen brand reputation</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="linkedin-box">
                  <Image
                    width={50}
                    height={50}
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/linkedin-ads-firm-in-delhi.svg"
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
