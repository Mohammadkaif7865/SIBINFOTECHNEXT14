
import React from "react";
import Link from "next/link";

const Contact = ({
  heading,
  subheading,
  buttonText,
  buttonLink,
  isPBeforeH3,
}) => {
  return (
    <section className="section-4">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-4-left">
              {isPBeforeH3 && (
                <p className="customText text-white">{subheading}</p>
              )}
              <h3 className="customHeading fontHeading contactTitle text-white">{heading}</h3>
              {!isPBeforeH3 && (
                <p className="customText text-white">{subheading}</p>
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="section-4-right">
              <Link className="customBtn" href={buttonLink}>
                 {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
