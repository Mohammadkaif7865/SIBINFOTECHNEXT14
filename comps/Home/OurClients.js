import React from "react";
import LogoSlider from "../LogoSlider";

const OurClients = () => {
  return (
    <section className="home_our_client">
      <div className="containerFull">
        <h4 className="large_heading2 fontHeading2 fontWeight600 text-center text_red">
          Our Clients
        </h4>
        <p className="text-center mt-4 ">
          Trusted by 1000+ Companies Worldwide <br />
          20 Years of Excellence Driving Growth for them
        </p>

        <div className="mt-5">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default OurClients;
