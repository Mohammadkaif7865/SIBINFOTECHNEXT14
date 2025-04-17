import React from "react";
import SliderTestimonials from "../SliderTestimonials";
import Image from "next/image";
import Link from "next/link";

const testimonialLogos = [
  "/assets/images/logos/google.png",
  "/assets/images/logos/clutch.png",
  "/assets/images/logos/trust-pilot.png",
  "/assets/images/logos/goodfirms.png",
  "/assets/images/logos/facebook.png",
  "/assets/images/logos/just-dial.png",
];

const Testimonials = ({ title, description }) => {
  return (
    <section className="bgTestimonial">
      <div className="containerFull">
        <div className="testimonialHeader">
          <h4 class="title fontWeight600 text-center">Our Testimonials</h4>
          <h4
            className="heading fontHeading2 text-center mt-3 fontWeight600"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h4>
          <p
            className="small_heading fontWeight300 text-center  mt-3 "
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {/* We are five star rated{" "}
            <span className="fontWeight600">Digital Agency</span> */}
          </p>
        </div>

        <div className="row mt-4 align-items-center">
          <div className="col-lg-4">
            <div className="testimonialLeftBox shadow-lg">
              <h4 className="large_heading3 text-white fontWeight600 text-center">
                5.0
              </h4>
              <div className="starIcontesti">
                <Image
                  width="300"
                  height="300"
                  src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/star.svg"
                />
              </div>
              <p className="title fontWeight400 mt-2 text-center text-white">
                Digital Marketing and SEO Agency Reviews about SIB Infotech
              </p>
              <div className="text-center">
                <Link href="/contact">
                  Contact Now <span className="fa fa-arrow-right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <SliderTestimonials />
          </div>
        </div>
        <div className="row mt-lg-4  mt-md-4">
          {testimonialLogos.map((logo, index) => (
            <div className="col-lg-2 col-6 mb-4" key={index}>
              <div className="logoTestimonial position-relative">
                <div className="glossyBorder7"></div>
                <div className="glossyBorder8"></div>
                <Image
                  width={400}
                  height={400}
                  src={logo}
                  alt={`Testimonial Logo ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
