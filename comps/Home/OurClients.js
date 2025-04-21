import React from "react";
import LogoClients from "../LogoClients";

const OurClients = () => {
  return (
    <section className="home_our_client trusted">
      <div className="containerFull">
        <h4 class="title fontWeight600 text-center text-white ">Our Clients</h4>
        <h4 className="large_heading2 fontHeading2 fontWeight300 text-center mt-4 text-white">
          India’s Trusted{" "}
          <span className="fontWeight600">Digital Marketing Experts</span>{" "}
          Behind <span className="fontWeight600">Fast-Growing Brands</span>
        </h4>
        <p className="text-center small_heading mt-4 ">
          Trusted by 1000+ Companies Worldwide <br />
          20 Years of Excellence Driving Growth for them
        </p>

        <div className="mt-5">
          <LogoClients />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
