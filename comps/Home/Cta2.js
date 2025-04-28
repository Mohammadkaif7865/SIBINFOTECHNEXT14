import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaMousePointer, FaPhoneAlt, FaStore } from "react-icons/fa"; 

const Cta2 = () => {
  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid h-100">
        <div className="row h-100 align-items-stretch">
          {/* Left Content */}
          <div
            className="col-md-7 position-relative text-white d-flex flex-column justify-content-center text-start"
            style={{
              backgroundImage: "url('/assets/images/cta2/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            <div
              className="position-absolute top-0 start-0 w-100 h-100 opacity-50"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
              }}
            ></div>

            <div className="p-4" style={{ position: "relative", zIndex: 1 }}>
              <h2 className="fw-bold display-6">
                OUR Digital Marketing <br /> Experts will Answer all <br /> your
                Questions
              </h2>
              <Link href="/contact" className="btnHomeBanner mt-5 py-2 px-5">
                Start Growing Now
                <span>
                  <i className="fa fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-5 Cta-bg text-white py-5 d-flex flex-column justify-content-between">
            <div className="container">
              <div className="mb-5 text-center">
                <div className="icon-box">
                  <FaMousePointer />
                </div>
                <h5 className="mt-3 fw-bold">More Clicks</h5>
                <p className="small">
                  Targeted traffic that converts <br />
                  or Maximize your online visibility
                </p>
              </div>

              <div className="mb-5 text-center">
                <div className="icon-box">
                  <FaPhoneAlt />
                </div>
                <h5 className="mt-3 fw-bold">More Phone Calls</h5>
                <p className="small">
                  Boost inquiries & leads <br />
                  or We get your phone ringing
                </p>
              </div>

              <div className="text-center">
                <div className="icon-box">
                  <FaStore />
                </div>
                <h5 className="mt-3 fw-bold">More Store Traffic</h5>
                <p className="small">
                  Turn browsers into buyers <br />
                  or Bring more customers through your doors
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-5">
          <Image
            src="/assets/images/cta2/team.png"
            alt="Team"
            width={400}
            height={300}
            className="img-fluid rounded-pill shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta2;
