import React from "react";

const Cta2 = ({
  heading,
  subheading,
  tagline,
  buttonText,
  buttonLink,
  imageSrc,
}) => {
  return (
    <section className="cta2 whiteLable">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="px-2 px-md-5 py-3 p-lg-0">
              <h4
                className="large_heading2 text-center text-md-start position-relative z-3 fontWeight600 text-white"
                dangerouslySetInnerHTML={{ __html: heading }}
              ></h4>
              <p className="text-light position-relative z-3 mt-4 text-center text-md-start">
                {subheading}
              </p>
              <p className="mt-4 text-white position-relative text-center text-md-start z-3 small_heading fontWeight600">
                {tagline}
              </p>
              <div className="position-relative z-3 mt-5 d-flex justify-content-center justify-content-md-start">
                <a
                  href={buttonLink}
                  className="p-2 px-4 btnPrimary text-white"
                >
                  {buttonText}
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="content d-flex w-100 z-3 position-relative">
              {imageSrc && <img className="" src={imageSrc} alt="CTA visual" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
