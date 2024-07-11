import React from "react";

const engagementModels = [
  {
    imgSrc: "/assets/images/prject-based.jpg",
    title: "Project Based",
    description:
      "We offer this model to our clients who have well-defined project requirements and fixed timelines.",
  },
  {
    imgSrc: "/assets/images/time-material.svg",
    title: "Time & Material Based",
    description:
      "We offer this model to our clients when project requirements are unclear, evolving, and require constant variations.",
  },
  {
    imgSrc: "/assets/images/hire-resources.svg",
    title: "Hire Dedicated Resource",
    description:
      "We offer this model to our clients who already have an existing team and are looking for an extension of their team.",
  },
  {
    imgSrc: "/assets/images/webdesign.svg",
    title: "White label Web design Services",
    description:
      "We offer this model to our clients when they are looking to expand capabilities, lack in-house talent, cut costs, and focus more effectively on sales.",
  },
];

const Engagement = () => {
  return (
    <section className="bgDarkGrey ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="heading fw-bold text-center fontHeading">
              Our Engagement Models
            </h4>
            <p className="small_heading textGrey text-center mt-3">
              Can't decide what is the best website design package for your
              business? If you are not sure what is the best website design
              solution for your business then We have packages based on your
              requirements.
            </p>
          </div>
        </div>
        <div className="space"></div>
        <div className="row">
          {engagementModels.map((model, index) => (
            <div key={index} className="col-lg-3 px-2">
              <div className="itemEngage">
                <div className="innerEngage">
                  <div className="frontEngage">
                    <img src={model.imgSrc} alt={model.title} />
                    <div className="desCrip">
                      <h4 className="small_heading">{model.title}</h4>
                    </div>
                  </div>
                  <div className="backEngage">
                    <h4 className="sub_heading2 fontHeading fw-bold text-white">
                      {model.title}
                    </h4>
                    <p className="mt-3 text-white">{model.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagement;
