import React, { useState } from "react";

const Solution = () => {
  const [indexNo, setIndexNo] = useState("0");

  const whiteLabelServices = [
    {
      title: `White Label <br class="d-none d-md-lg "/> SEO Services`,
      description:
        "Boost your clients' rankings with our White Label SEO—expert strategies, seamless execution, your brand!",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg", 
      
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> PPC Management`,
      description:
        "Scale your agency effortlessly with expert White Label PPC Management—high performance, low hassle!",
      img: "/assets/images/white-lable/White-Label-PPC-Services.jpg", 
      
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> SMO Marketing `,
      description:
        "Grow your clients’ brands with our White Label SMO—engaging content, expert management, your branding!",
      img: "/assets/images/white-lable/White-Label-Social-Media-Marketing.jpg", 
      
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Facebook Ads`,
      description:
        "Scale your agency with our White Label Facebook Ads—expertly managed, fully branded, and results-driven!",
      img: "/assets/images/white-lable/White-Label-Facebook-ads.jpg", 
     
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Google Ads`,
      description:
        "Boost client ROI with our White Label Google Ads—expertly managed, fully branded, and performance-focused!",
      img: "/assets/images/white-lable/White-Label-Google-ads.jpg", 
     
    },
    {
      title: ` White label <br class="d-none d-md-lg "/> Link Building`,
      description:
        "High-quality, White Label Link Building for SEO agencies—authority links, seamless delivery, your brand! ",
      img: "/assets/images/white-lable/White-label-link-building.jpg", 
     
    },
  ];

  const handelIndex = (index) => {
    setIndexNo(index);
  };

  return (
    <section className="bg-black position-relative solution_white_label">
      <div className="containerFull">
        <div className="row text-white align-items-center">
          <div className="col-lg-10 ">
            <h4 className=" large_heading fontWeight4 00">
             <span className="fontWeight large_heading2 fontWeight600">Services We Offer As a</span> 
              <br />
              White Label Digital Marketing Agency
            </h4>
            <p className="mt-4">
              Powering Growth for Agencies, Resellers & Global Businesses with
              White-Label Expertise
            </p>
          </div>
          <div className="col-lg-2 mt-4 mt-lg-0  d-none d-lg-block">
            <div className="d-flex justify-content-lg-end">
              <a className="btnThemeRed  fw-bold" href="#contact">
                Know More
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-xxl-4 col-xl-4 col-lg-0 col-md-0 position-relative d-none d-lg-block">
            <div className=" img_solutions ">
              <div className="img_solutions_inner">
                {whiteLabelServices.map((images, index) => {
                  return (
                    <img
                      className={`img-solution ${
                        indexNo == index ? "active" : ""
                      }`}
                      src={images?.img}
                      alt="images"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
            {whiteLabelServices.map((value, index) => {
              return (
                <div
                  className="service__item "
                  key={index}
                  onMouseOver={() => {
                    handelIndex(index);
                  }}
                >
                  <div className="service__number">
                    <span className="">0{index + 1}</span>
                  </div>
                  <div className="service__title-wrapper">
                    <h3
                      className="service__title "
                      dangerouslySetInnerHTML={{ __html: value.title }}
                    ></h3>
                  </div>
                  <div className="service__text">
                    <p>{value.description}</p>
                  </div>
                  <div className="service__link">
                    <p
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                        opacity: "1",
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
