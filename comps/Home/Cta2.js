import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMousePointer, FaPhoneAlt, FaStore } from "react-icons/fa";

const Cta2 = () => {
  return (
    <section className="cta2-section position-relative overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row min-vh-100 m-0">

          
          <div className="col-lg-7 position-relative cta-left text-white d-flex flex-column justify-content-center">
            <div className="overlay" />
            <div className="position-relative z-1 p-5">
              <h2 className="fw-bold display-6">
                Our Digital Marketing <br /> Experts will Answer all <br /> your Questions
              </h2>
              <Link href="/contact" className="btnHomeBanner mt-5 py-2 px-5">
                Start Growing Now <i className="fa fa-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>

          
          <div className="col-lg-5 d-flex flex-column justify-content-center text-white cta-bg p-5">
            <div className="mb-5 text-center">
              <div className="icon-box"><FaMousePointer /></div>
              <h5 className="mt-3 fw-bold">More Clicks</h5>
              <p className="small">Targeted traffic that converts <br /> or Maximize your online visibility</p>
            </div>

            <div className="mb-5 text-center">
              <div className="icon-box"><FaPhoneAlt /></div>
              <h5 className="mt-3 fw-bold">More Phone Calls</h5>
              <p className="small">Boost inquiries & leads <br /> or We get your phone ringing</p>
            </div>

            <div className="text-center">
              <div className="icon-box"><FaStore /></div>
              <h5 className="mt-3 fw-bold">More Store Traffic</h5>
              <p className="small">Turn browsers into buyers <br /> or Bring more customers through your doors</p>
            </div>
          </div>
        </div>

       
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-0">
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
