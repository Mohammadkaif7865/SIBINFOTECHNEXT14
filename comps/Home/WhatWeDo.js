import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      category: "Get Ranked on Google",
      services: ["Search Engine Optimization", "Local SEO", "Ecommerce SEO"],
    },
    {
      category: "Drive Instant Growth",
      services: ["Google Ads", "Meta & Instagram Ads", "LinkedIn Ads"],
    },
    {
      category: "Accelerate Digital Dominance",
      services: [
        "Website Design & Development",
        "Graphic Design",
        "Software Development",
      ],
    },
    {
      category: "Build Trust & Credibility",
      services: [
        "Social Media Marketing",
        "Content Marketing",
        "Influencer Marketing",
      ],
    },
    
  ];

  return (
    <section className="what-we-do">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontHeading2 fontWeight700 ">
              What We Do
            </h4>
            <p className="mt-3  title">Digital Marketing Services</p>
            <div className="services_main mt-5">
              <div className="services-container">
                {services.map((section, index) => (
                  <div key={index} className="service-section mt-5">
                    <h4  className="services-title heading fontHeading2 fontWeight600">{section.category}</h4>
                    <ul className="services-list ps-5 mt-4">
                      {section.services.map((service, subIndex) => (
                        <li key={subIndex} className="service-item fontWeight500 title  mt-2">
                        <i className="fa-solid fa-circle-check me-2 text_light_blue"></i>  {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="what_we_do_img">
            <h4 className="text-center fontHeading2 large_heading2 fontWeight700 power_sib">
              Power of <br />
              SIB Infotech
            </h4>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
