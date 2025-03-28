import React from "react";

const WhyChoose = () => {
  const keyAdvantages = [
    {
      title: "Scalable & Cost-Effective Solutions",
      description: "Scale effortlessly without hiring, training, or fulfillment bottlenecks. Get premium marketing services at 50% lower costs, maximizing your profit margins. Enjoy real-time resource availability and operational flexibility to handle large projects seamlessly."
    },
    {
      title: "100% White-Label Fulfillment",
      description: "All services are fully branded under your agency, ensuring your clients see your brand while we deliver results."
    },
    {
      title: "Dedicated Project Management",
      description: "A single point of contact ensures smooth communication and fast, responsive support from experienced account managers."
    },
    {
      title: "Proven Expertise & Measurable Results",
      description: "With 20+ years of experience, we craft data-driven strategies that drive consistent growth and success."
    },
    {
      title: "Transparent & Agency-Centric Processes",
      description: "Seamlessly integrate with your agency’s workflow, track campaigns in real-time, and enjoy complete transparency—no hidden processes."
    },
    {
      title: "Uncompromised Quality Standards",
      description: "We maintain strict quality benchmarks to protect your agency’s reputation and credibility."
    },
    {
      title: "Data Security & NDA Protection",
      description: "Your data and intellectual property remain fully confidential under our strict NDA agreements."
    },
    {
      title: "Fast Turnaround & Global Reach",
      description: "Meet urgent client deadlines with quick execution and minimum TAT. With 1,000+ clients worldwide, we deliver top-tier solutions for both B2B and B2C businesses."
    }
  ];
  

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          <div className="col-lg-4 mb-3  position-relative">
            <div className="why_left_item">
              <h4 className="fontHeading2 fontWeight300 text_red">
                Why <span className="fontWeight600">SIB Infotech</span>
              </h4>
              <h5 className=" mt-3 large_heading2 fontHeading2 fontWeight600">
                in a nutshell<span className="text_red">.</span>
              </h5>
              <div className="why_left_card mt-4 text-center">
                <h4 className="fontHeading2 text-white fontWeight600 ">
                  Seal the Sales Leak in Your Website Today!
                </h4>
                <p className="mt-3 text-white">
                  We're your one-stop shop for innovative digital marketing
                  strategies and creative web design-everything your business.
                  needs to succeed.
                </p>

                <button className="p-2 mt-4 w-100 btnPrimary text-white">
                  Get a Free Analysis
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="rightWhyBlock">
              <div className="headerRightWhy py-lg=3 bgGrey">
                <h5 className="fontWeight500 text_red regular_heading ps-4">
                Why Choose Our White Label Services? 
                </h5>
                <p className="mt-3 ps-4">
                  With a sea of digital agencies in India, what makes SIB
                  Infotech the preferred choice for brands looking to scale? We
                  don’t just execute campaigns—we create impactful, data-driven
                  strategies that drive measurable growth and long-term success
                </p>
              </div>
              <div className="row mt-4">
                {keyAdvantages.map((value, index) => {
                  return (
                    <div
                      className="col-lg-6 mb-3 position-relative"
                      key={index}
                    >
                      <div className=" item_why_sib hover h-100 ">
                        <div className="item_why_title align-items-center">
                          <h4 className="small_heading fontHeading2 fontWeight600">
                            {value.title}
                          </h4>
                          <h5 className=" fontHeading2 fontWeight600">
                            0{index + 1}
                          </h5>
                        </div>
                        <p className="mt-4">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;