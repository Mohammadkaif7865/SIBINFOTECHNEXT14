import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPeople = () => {
  return (
    <section>
      <div className=" containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h4 className="large_heading2 fontHeading2 fontWeight600  text_red">
              Our people are just as amazing as our work.
            </h4>
            <p className="mt-4">
              A big part of our culture is rooted in the belief that being
              data-driven and creative are not mutually exclusive traits.
              Working with Elite means getting full access to a team of subject
              matter experts all under one roof. We thrive on infusing creative
              passion with strategic decisions and flawless execution to bring
              your vision to life
            </p>
            <div className="mt-5">
            

              <Link class="fancy4" href="#">
                <span class="top-key"></span>
                <span class="text">   Our culture </span>
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
            <Image
              width={500}
              height={500}
              src="https://groupfractal.com/wp-content/uploads/2025/02/phone-seo-local-squares.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
