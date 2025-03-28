import React from "react";
import Link from "next/link";
import Image from "next/image";

const About2 = () => {
  return (
    <section className="about2 redDot">
      <div className="containerFull">
        <div className="row align-items-md-center">
          <div className="col-lg-6">
            {/* <h5 className="title_about_2 position-relative">
              Let’s Grow Your Business?
            </h5> */}
            <h4 className="fontHeading large_heading2 fontWeight600">
              <span className="text_red"> Your Brand Name</span> <br />{" "}
              <span className="fontWeight300">
      Our Services  
              </span>
            </h4>

            <h5 className="title_about_2 position-relative mt-5 right">
              <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
          <div className="col-lg-6">
            <p>
            SIB Infotech is a leading digital marketing company in India, offering white-label digital marketing solutions to agencies and businesses worldwide. We help you scale your services by providing Premium White Label SEO, PPC, and Social Media Marketing (SMO) at 50% lower costs—all under your brand name. 
            </p>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default About2;
