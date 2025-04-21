import Image from "next/image";
import React from "react";
const webDevFeatures = [
  {
    title: "Performance",
    description:
      "UI responsiveness, Transaction completion (s), Peak load performance",
    img: "assets/images/icons/web-devlp-img-22.svg",
    alt: "Web Application Development Firm in Mumbai",
  },
  {
    title: "Compatibility",
    description:
      "Mobile Platform Compatibility (e.g. iOS 6, iOS 5.1.1), Device Model Compatibility, Backward Compatibility (with previous app version)",
    img: "assets/images/icons/web-devlp-img-23.svg",
    alt: "Web Application Development Firm in Delhi",
  },
  {
    title: "Conformance",
    description:
      "Marketplace guideline compliance (e.g. Apple App Store policies), Enterprise policy compliance (e.g. prohibited content)",
    img: "assets/images/icons/web-devlp-img-24.svg",
    alt: "Web Application Development Firm in India",
  },
  {
    title: "Installation and Provisioning",
    description:
      "Installation process, Un-installation process, User provisioning and de-provisioning",
    img: "assets/images/icons/web-devlp-img-25.svg",
    alt: "Custom Web Application Development",
  },
  {
    title: "Usability",
    description: "User Experience",
    img: "assets/images/icons/web-devlp-img-26.svg",
    alt: "Custom Web Application Development in India",
  },
  {
    title: "Security",
    description: "Data Retention on device, Transmission Security",
    img: "assets/images/icons/web-devlp-img-27.svg",
    alt: "Custom Web Application Development in Delhi",
  },
  {
    title: "Functionality",
    description: "User Interaction Testing, Transaction testing",
    img: "assets/images/icons/web-devlp-img-28.svg",
    alt: "Custom Web Application Development in Mumbai",
  },
  {
    title: "Network",
    description:
      "Network type (Wi-Fi, 2G, 3G, 4G), Impact of connectivity Issues",
    img: "assets/images/icons/web-devlp-img-29.svg",
    alt: "Custom Web Application Development in Delhi",
  },
  {
    title: "Network",
    description:
      "Network type (Wi-Fi, 2G, 3G, 4G), Impact of connectivity Issues",
    img: "assets/images/icons/web-devlp-img-29.svg",
    alt: "Custom Web Application Development in Delhi",
  },
];

const QA = () => {
  return (
    <section className="qa_main">
      <div className="containerFull">
        <h3 className=" text-center fontWeight600 text-white large_heading2">
          Affordable <span className="text_red">QA Testing Services </span>In
          India
        </h3>

        <div className="col-lg-9  mx-auto">
          <p className="text-center mt-4 text-white">
            We provide full-cycle testing and quality assurance services to help
            you craft a product through accelerated testing methods that
            minimize errors, mitigate risk and defects in software and augments
            the user experience at a whole new level. Our QA model efficiently
            meets today's dynamic business needs and helps assure quality and
            maturity of testing capabilities that would lead to delivering
            successful business outcomes.
          </p>
        </div>

        <div className="row mt-5 pt-3">
          {webDevFeatures.map((item, i) => {
            return (
              <div className="col-lg-4 mb-4">
                <div className="item_qa">
                  <div className="img_box">
                    <Image
                      width={100}
                      height={100}
                      src={item.img}
                      alt={item.alt}
                    />
                  </div>
                  <div className="content w-100">
                    <h4 className="fontWeight600 text-white">{item.title}</h4>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* <div className="row">
          <div className="col-lg-5">
            <div className="stickyItem">
             
              <p className="customText margin-left">
                We provide full-cycle testing and quality assurance services to
                help you craft a product through accelerated testing methods
                that minimize errors, mitigate risk and defects in software and
                augments the user experience at a whole new level. Our QA model
                efficiently meets today's dynamic business needs and helps
                assure quality and maturity of testing capabilities that would
                lead to delivering successful business outcomes.
              </p>
              <img
                className="image-full"
                src="assets/images/web-devlp-img-19.svg"
                alt="Web Development"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-22.svg"
                        alt="Web Application Development Firm in Mumbai"
                      />
                    </div>
                    <h4>Performance</h4>
                  </div>
                  <p className="customText">
                    UI responsiveness Transaction completion (s) Peak load
                    performance
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-23.svg"
                        alt="Web Application Development Firm in Delhi"
                      />
                    </div>
                    <h4>Compatibility</h4>
                  </div>
                  <p className="customText">
                    Mobile Platform Compatibility (e.g.ios6,ios 5.1.1,ios 5.1.1)
                    Device Model Compatibility Backward Compatibility (with
                    previous app version)
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-24.svg"
                        alt="Web Application Development Firm in India"
                      />
                    </div>
                    <h4>Conformance</h4>
                  </div>
                  <p className="customText">
                    Marketplace guideline compliance (e.g.apple App Store
                    policies) Enterprise policy compliance (e.g. prohibited
                    content
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-25.svg"
                        alt="Custom Web Application Development"
                      />
                    </div>
                    <h4>Installation and Provisioning</h4>
                  </div>
                  <p className="customText">
                    Installation process Un-installation process User
                    provisioning and de-provisioning
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-26.svg"
                        alt="Custom Web Application Development in India"
                      />
                    </div>
                    <h4>Usability</h4>
                  </div>
                  <p className="customText">User Experience</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-27.svg"
                        alt="Custom Web Application Development in Delhi"
                      />
                    </div>
                    <h4>Security</h4>
                  </div>
                  <p className="customText">
                    Data Retention on device Transmission Security
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-28.svg"
                        alt="Custom Web Application Development in Mumbai"
                      />
                    </div>
                    <h4>Functionally</h4>
                  </div>
                  <p className="customText">
                    User Interaction Testing Transaction testing
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="web-devlp-box bg-white">
                  <div className="front-end-box-heading">
                    <div className="front-end-img-circle">
                      <img
                        src="assets/images/icons/web-devlp-img-29.svg"
                        alt="Custom Web Application Development in Delhi"
                      />
                    </div>
                    <h4>Network</h4>
                  </div>
                  <p className="customText">
                    Network type (Wi-Fi, 2G, 3G, 4G) Impact of connectivity
                    Issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default QA;
