import Image from "next/image";
import React from "react";

const BookConsultation = () => {
  return (
    <section className=" book-consultation">
      <div className="containerFull ">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-5">
                <Image
                  className=" BookConsultation_lockImg"
                  width={400}
                  height={400}
                  src={"/assets/images/icons/lock.png"}
                  alt="lock"
                />
              </div>
              <div className="col-md-7">
                {" "}
                <h3 className="BookConsultation_mainheading fontHeading sub_heading fontWeight600">
                  <span className="text_blue_light ">BOOK A FREE</span> <br />
                  SEO Discovery Call
                </h3>
                <h4 className="mt-4">What do you get?</h4>
                <div className="mt-3">
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check me-2 text_red"></i>
                    Complete SEO Audit and Analysis
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check me-2 text_red"></i>
                    Competitor Analysis
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check me-2 text_red"></i>SEO
                    Performance and Gap Analysis
                  </p>
                  <p>
                    {" "}
                    <i class="fa-solid fa-square-check me-2 text_red"></i>
                    Analyzing Channel-Specific SEO Needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <h3 className="fontHeading text-center sub_heading text_blue_light fontWeight600">
              NO LOCK IN CONTRACTS
            </h3>
            <h4 className="fontHeading text-center small_heading  fontWeight600">
              Free SEO Audit & Strategy session
            </h4>

            <div className=" mt-4">
              <div className=" d-flex gap-2 align-items-center justify-content-center  ">
                <div className=" p-4  shadow border-rounded  ">
                  <Image
                    width={65}
                    height={51}
                    className="mx-auto d-block h-auto"
                    src={"/assets/images/icons/software-developer-icon-2.png"}
                    alt=""
                  />
                  <p className="mt-2 text-center ">contact a SEO specialist</p>
                </div>
                <div className="p-4  shadow border-rounded ">
                  <Image
                    width={50}
                    height={50}
                    className=" mx-auto d-block h-auto"
                    src={"/assets/images/icons/phone.png"}
                    alt=""
                  />
                  <p className="mt-2 text-center">schedule a call with us</p>
                </div>
              </div>

              <a
                className="text-center   w-100 d-block mt-4 text-black fontHeading fontWeight600 regular_heading"
                target="_blank"
                href="tel:+91-92222-60000"
              >
                {" "}
                +91-92222-60000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
