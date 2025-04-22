"use client";
import React, { useState } from "react";

const WhyChoose = () => {
  const [active, setActive] = useState(0);
  const customWebsiteFeatures = [
    {
      title: "Custom Website Development",
      description:
        "We build tailor-made websites that align with your brand identity and business needs.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "SEO-Optimized Structure",
      description:
        "Our websites are developed following the latest SEO trends to enhance search engine rankings.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Mobile-Responsive Design",
      description:
        "Fully responsive websites that provide a seamless experience across all devices.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Fast-Loading Pages",
      description:
        "Optimized coding and image compression to ensure quick load times, improving user experience and SEO performance.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Secure & Scalable Solutions",
      description:
        "Implementation of robust security measures and scalable frameworks for long-term success.",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Cost Effective Solutions",
      description: "",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "On Time Delivery",
      description: "",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Flexible Engagement Models",
      description: "",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
    {
      title: "Dedicated Team",
      description: "",
      img: "/assets/images/seo/White-Label-On-Page-SEO-Optimization 1.jpg",
    },
  ];

  return (
    <section className="bg-black">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7 ">
            <h4 className="fontWeight600 heading text-white">
              Why Choose Our{" "}
              <span className="text_red">Web Development Services</span>?
            </h4>
          </div>
          <div className="col-lg-5">
            <p className="mt-3 text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              accusantium unde molestiae, asperiores vitae voluptatibus. Dolor
              id consectetur consequatur officia! id consectetur consequatur
              officia!
            </p>
          </div>
        </div>

        <div className="row item_why_container mt-5 pt-5">
          <div className="col-lg-4">
            {customWebsiteFeatures.map((value, i) => (
              <button
                key={i}
                className={`item_button_why w-100 text-start ${
                  active === i ? "active" : ""
                }`}
                onClick={() => setActive(i)}
              >
                {value.title}
              </button>
            ))}
          </div>
          <div className="col-lg-8 ps-lg-5 ">
            <div className="row ">
              {active % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div className="col-lg-6 ">
                    <div>
                      <img
                        src={customWebsiteFeatures[active].img}
                        alt={customWebsiteFeatures[active].title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  {/* Text Right */}
                  <div className="col-lg-6 ">
                    <div className="content text-white w-100">
                      <h4>{customWebsiteFeatures[active].title}</h4>
                      <p className="mt-3">
                        {customWebsiteFeatures[active].description
                          ? customWebsiteFeatures[active].description
                          : "More details coming soon."}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div className="col-lg-6">
                    <div className="content text-white w-100">
                      <h4>{customWebsiteFeatures[active].title}</h4>
                      <p className="mt-3">
                        {customWebsiteFeatures[active].description
                          ? customWebsiteFeatures[active].description
                          : "More details coming soon."}
                      </p>
                    </div>
                  </div>
                  {/* Image Right */}
                  <div className="col-lg-6">
                    <div>
                      <img
                        src={customWebsiteFeatures[active].img}
                        alt={customWebsiteFeatures[active].title}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
