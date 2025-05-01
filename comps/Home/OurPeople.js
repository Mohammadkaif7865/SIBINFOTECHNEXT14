import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurPeople = () => {
  return (
    <section>
      <div className=" containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p class="title fontWeight600">Our Team</p>
            <h3 className="large_heading2 fontHeading2 fontWeight300 mt-3  text_red">
              Meet the Team Behind{" "}
              <span className="fontWeight600">Your Digital Success</span>
            </h3>
            <p className="mt-4">
              At SIB Infotech, we believe data-driven strategy and creative
              excellence go hand in hand. When you partner with us, you gain
              access to a powerhouse team of digital marketing experts,
              designers, developers, and strategists—all under one roof. We
              blend passion, precision, and performance to turn your vision into
              results that drive real business growth.
            </p>
            <div className="mt-4">
              <Link class="fancy4" href="/about-us">
                <span class="top-key"></span>
                <span class="text"> About us </span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </Link>
              <Link class="fancy3 ms-3" href="/career">
                <span class="top-key"></span>
                <span class="text">Join Us</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
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
