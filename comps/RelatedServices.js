import React from "react";
import Link from "next/link";

const RelatedServices = ({ title, subtitle, links }) => {
  return (
    <section className="bgGrey py-5">
      <div className="containerFull">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-9">
            <h2 className="heading fontWeight600">
              {title || "Explore More "}
              <span className="text_red">SEO Services</span>
            </h2>
            {subtitle && <p className="customText mt-3">{subtitle}</p>}
          </div>
        </div>
        <div className="row g-3">
          {links.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <Link
                href={item.href}
                className="text-decoration-none"
                aria-label={item.title}
              >
                <div className="customCard bg-white h-100 p-3">
                  <h3 className="small_heading fontWeight600 mb-2">
                    <i className="fa-solid fa-arrow-right me-2 text_red"></i>
                    {item.title}
                  </h3>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
