import React from "react";

const WhyChoose = () => {
  const keyAdvantages = [
    {
      title: "Scalable & Cost-Effective Solutions",
      description:
        "Grow your agency effortlessly with high-quality services at at 50% lower costs and maximize your profit margins. ",
    },
    {
      title: "100% White-Label Fulfillment",
      description:
        "All services are fully branded under your agency, ensuring your clients see your brand while we deliver results.",
    },
    {
      title: "Dedicated Project Management",
      description:
        "A single point of contact ensures smooth communication and fast, responsive support from experienced account managers.",
    },
    {
      title: "Proven Expertise & Measurable Results",
      description:
        "With 20+ years of experience, we craft data-driven strategies that drive consistent growth and success.",
    },
    {
      title: "Transparent & Agency-Centric Processes",
      description:
        "Seamlessly integrate with your agency’s workflow, track campaigns in real-time, and enjoy complete transparency—no hidden processes.",
    },
    {
      title: "Uncompromised Quality Standards",
      description:
        "We maintain strict quality benchmarks to protect your agency’s reputation and credibility.",
    },
    {
      title: "Data Security & NDA Protection",
      description:
        "Your data and intellectual property remain fully confidential under our strict NDA agreements.",
    },
    {
      title: "Fast Turnaround & Global Reach",
      description:
        "Meet urgent client deadlines with quick execution and minimum TAT. With 1,000+ clients worldwide, we deliver top-tier solutions for both B2B and B2C businesses.",
    },
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          <div className="col-lg-4 mb-3  position-relative">
            <div className="why_left_item">
              <h4 className=" fontWeight300 text_red">
                <span className="fontWeight600">We Power </span>
              </h4>
              <h5 className=" mt-3 large_heading2  fontWeight600">
                Your Success<span className="text_red">.</span>
              </h5>
              <div className="why_left_card mt-4 text-center">
                <h4 className=" text-white fontWeight600 ">
                We treat your clients like our own – Guaranteed! 
                </h4>
                <p className="mt-3 text-white">
                Our white-label digital marketing solutions ensure expert execution, seamless delivery, and top-notch results—all under your brand name. You focus on growth while we handle the rest!
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
                  Your brand, our expertise—seamless execution without the
                  overhead. We work behind the scenes, delivering top-tier
                  results while you take the credit, impress clients, and scale
                  effortlessly! With our White Label SEO, PPC & Social Media
                  Services in India & Scale Your Agency Today!
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
                          <h4 className="small_heading  fontWeight600">
                            {value.title}
                          </h4>
                          <h5 className="  fontWeight600">0{index + 1}</h5>
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
