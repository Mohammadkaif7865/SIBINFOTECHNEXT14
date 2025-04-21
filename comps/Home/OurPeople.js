import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

const OurPeople = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <h4 className="title fontWeight600">Our Team</h4>
            <h4 className="large_heading2 fontHeading2 fontWeight300 mt-3 text_red">
              Meet the Team Behind{" "}
              <span className="fontWeight600">Your Digital Success</span>
            </h4>
            <p className="mt-4">
              At SIB Infotech, we believe data-driven strategy and creative
              excellence go hand in hand. When you partner with us, you gain
              access to a powerhouse team of digital marketing experts,
              designers, developers, and strategists—all under one roof. We
              blend passion, precision, and performance to turn your vision into
              results that drive real business growth.
            </p>
            <div className="mt-4 d-flex flex-wrap">
              <Link className="fancy4" href="/about-us">
                <span className="top-key"></span>
                <span className="text">About Us</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
              <Link className="fancy3 ms-3" href="/career">
                <span className="top-key"></span>
                <span className="text">Join Us</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="rightImgBox">
              <Image
                src="/assets/images/sib-team.jpg"
                width={500}
                height={400}
                alt="SIB Infotech Digital Marketing Team"
                className="img-fluid object-fit-cover w-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(OurPeople);
