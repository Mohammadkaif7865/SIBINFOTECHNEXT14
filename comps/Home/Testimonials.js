import React from "react";
import SliderTestimonials from "../SliderTestimonials";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bgTestimonial">
      <div className="containerFull">
        <div className="testimonialHeader">
          <h4 className="heading  text-center text_red fontWeight300">
            What our <span className="fontWeight600">Clients Say</span> about us
          </h4>
          <p className="small_heading fontWeight300 text-center  mt-3 ">
            <span className="fontWeight600">
              Digital Marketing and SEO Agency
            </span>{" "}
            Reviews about SIB Infotech
          </p>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col-lg-4">
            <h4 className="sub_heading fontHeading2 text-center text-lg-start  fontWeight600">
              We are five star rated Digital Agency
            </h4>
            <div
              className="small_heading mt-4 d-flex justify-content-center justify-content-lg-start"
              style={{
                color: "var(--red-color)",
              }}
            >
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span className="text-black fontWeight600 ms-2"> 5.0</span>
            </div>
            <div className="img_grid_review mt-4">
              <div className="">
                <Image
                  className=""
                  width={150}
                  height={150}
                  quality={100}
                  alt="Meta Partner Company"
                  src="/assets/images/meta-partner.jpg"
                />
              </div>
              <div className="">
                <Image
                  className=""
                  width={150}
                  height={150}
                  quality={100}
                  alt="clutch Partner Company"
                  src="/assets/images/clutch.png"
                />
              </div>
              <div className="">
                <Image
                  className=""
                  width={150}
                  height={150}
                  quality={100}
                  alt="Google Partner Company"
                  src="/assets/images/google-logo.png"
                />
              </div>
              <div className="">
                <Image
                  className=""
                  width={100}
                  height={100}
                  quality={100}
                  alt="Trustpilot Partner Company"
                  src="/assets/images/trustpilot.jpg"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <SliderTestimonials />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;