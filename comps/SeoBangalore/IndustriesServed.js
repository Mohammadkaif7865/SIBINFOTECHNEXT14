import React from "react";

const IndustriesServed = () => {
  const industries = [
    { name: "IT & Software Companies", icon: "fa-solid fa-laptop-code" },
    { name: "E-commerce & Retail", icon: "fa-solid fa-cart-shopping" },
    { name: "Real Estate & Property", icon: "fa-solid fa-building" },
    { name: "Healthcare & Pharmaceuticals", icon: "fa-solid fa-heart-pulse" },
    { name: "Education & EdTech", icon: "fa-solid fa-graduation-cap" },
    { name: "Manufacturing & Industrial", icon: "fa-solid fa-industry" },
    { name: "Financial Services & FinTech", icon: "fa-solid fa-coins" },
    { name: "Hospitality & Travel", icon: "fa-solid fa-plane-departure" },
    { name: "Legal & Professional Services", icon: "fa-solid fa-scale-balanced" },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="containerFull">
        <div className="text-center mb-5">
          <span className="badge bg-danger-subtle text-danger px-3 py-2 rounded-pill fw-bold text-uppercase mb-2">
            Domain Expertise
          </span>
          <h2 className="customHeading fontHeading fontWeight700">
            Industries We Serve in Bangalore
          </h2>
          <p className="customText text-muted max-700 mx-auto">
            Our Bangalore SEO team has delivered measurable organic growth across diverse B2B and B2C verticals:
          </p>
        </div>

        <div className="row g-3">
          {industries.map((ind, i) => (
            <div className="col-6 col-md-4 col-lg-4" key={i}>
              <div className="bglr-ind-pill p-3 bg-white rounded-3 shadow-sm d-flex align-items-center border border-light-subtle h-100">
                <div className="ind-icon bg-danger-subtle text-danger p-2 rounded-2 me-3">
                  <i className={`${ind.icon} fs-5`}></i>
                </div>
                <span className="fontWeight600 text-dark fs-6">{ind.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
