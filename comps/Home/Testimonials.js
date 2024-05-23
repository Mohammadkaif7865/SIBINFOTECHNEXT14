import React from "react";
import SliderTestimonials from "../SliderTestimonials";

const Testimonials = () => {
  return (
    <section className="bgTestimonial">
      <div className="containerFull">
        <div className="testimonialHeader">
          <h4 className="small_heading text-center text_red fontWeight700">
            DIGITAL MARKETING TESTIMONIALS
          </h4>
          <h3 className="heading text-center mt-2 fontWeight700">
            Clients say about our SEO Services
          </h3>
        </div>
        <SliderTestimonials />
      </div>
    </section>
  );
};

export default Testimonials;
