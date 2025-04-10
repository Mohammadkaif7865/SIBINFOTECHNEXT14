import React from "react";
import Link from "next/link";
import Image from "next/image";

const About2 = () => {
  return (
    <section className="about2 redDot">
      <div className="containerFull">
        <div className="row align-items-md-center">
          <div className="col-lg-6">
            <h4 className=" large_heading2 fontWeight600">
              <span className="text_red"> Your Brand Name</span> <br className="d-sm-none d-lg-block" />{" "}
              <span className="fontWeight300">Our Services</span>
            </h4>

            <h5 className="title_about_2 position-relative mt-5 right d-none d-lg-block">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
          <div className="col-lg-6  mt-4 mt-lg-0">
            <p>
              Scale your agency to the next level with our White Label Digital
              Marketing Services—offering expert solutions in SEO, PPC, Social
              Media, and Link Building, all delivered seamlessly under your
              brand name. With a dedicated remote team, that works as an
              extension of your business, ensuring high-quality results while
              saving up to 50% on operational costs without the overhead costs.
              
            </p>
            <p className="mt-2">
            Whether you're looking to scale, expand your service offerings, or
              streamline your workflow, we provide the expertise and execution
              while you focus on client relationships and business growth. Let’s
              build success together—your brand, our strategy
              
            </p>

            <h5 className="title_about_2 position-relative mt-5 right  d-lg-none">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
