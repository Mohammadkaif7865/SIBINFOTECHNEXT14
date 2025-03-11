import React from "react";

const About2 = () => {
  return (
    <section
      className="about2"
      style={{
        background: "#f6f6f675",
      }}
    >
      <div className="containerFull">
        <div className="row align-items-md-center">
          <div className="col-lg-6">
            {/* <h5 className="title_about_2 position-relative">
              Let’s Grow Your Business?
            </h5> */}
            <h4 className="fontHeading2 large_heading2 fontWeight600 mt-5">
              <span className="text_red">Guaranteed Visibility</span> <br /> Through our Digital <br /> Marketing
              Services
            </h4>

            <h5 className="title_about_2 position-relative mt-5 right">
             <a href="/contact-us">Let’s Grow Your Business?</a>
            </h5>
          </div>
          <div className="col-lg-6">
            <p>
              SIB Infotech is an award-winning top digital marketing company
              based in Mumbai and New Delhi, India. Our expertise in Search
              Engine Optimization (SEO), PPC Management, Graphic Design, Social
              Media Marketing, Website Design, and Branding helps businesses in
              India, the US, the UK, Canada, Australia, and beyond enhance
              visibility, engagement, and conversions while ensuring measurable
              results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
