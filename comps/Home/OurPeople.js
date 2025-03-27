import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPeople = () => {
  return (
    <section>
      <div className=" containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontHeading2 fontWeight300  text_red">
              Our people are just{" "}
              <span className="fontWeight600">as amazing as our work.</span>
            </h4>
            <p className="mt-4">
              A big part of our culture is rooted in the belief that being
              data-driven and creative are not mutually exclusive traits.
              Working with Elite means getting full access to a team of subject
              matter experts all under one roof. We thrive on infusing creative
              passion with strategic decisions and flawless execution to bring
              your vision to life
            </p>
            <div className="mt-4">
              <Link class="fancy4" href="#">
                <span class="top-key"></span>
                <span class="text"> Our culture </span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </Link>
              <Link class="fancy3 ms-3" href="#">
                <span class="top-key"></span>
                <span class="text">Work at Elite</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rightImgBox">
              <Image
                width={500}
                height={400}
                src="/assets/images/sib-team.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
