import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="containerFull marketing_hero_main bgsection_m1 overflow-hidden ">
      <div className="row  marketing_hero">
        <div data-aos="fade-right" className="col-lg-6">
          <h1 className="fontHeading2 heading fontWeight700">
            Your Complete<span className="text_red"> WhatsApp Engagement</span>{" "}
            Platform
          </h1>
          <p className="fontWeight600 mt-3 fontHeading2 text-primary title">
            Businesses drive 25-60% Revenues with SIB Infotech
          </p>
          <ul className="mt-3 marketing_hero_listing">
            <li> Broadcast Promotional Offers to Unlimited Users</li>
            <li> Sell your Products on WhatsApp using Catalogs</li>
            <li> Automate Messages via Integrations</li>
            <li> Enable Multi-Agent Live Chat for Customer Support</li>
            <li> Build Chatbots & Solve for 24 x 7 Support & Engagement</li>
          </ul>
          <div class="mt-4">
            <a href="/contact-us">
              <span class="btnThemeRed2 fontWeight600 me-3">
                <i class="fa-solid fa-comment-dots"></i> Get a Quote
              </span>
            </a>
            <a href="/contact-us">
              <span class="btnThemeRed3 fontWeight600">
                <i class="fa-solid fa-circle-question"></i> Ask a Question
              </span>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="position-relative  marketing_hero_right ">
            <Image
              className=""
              fill
              quality={100}
              src={"/assets/images/Mobile Marketing.gif"}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
