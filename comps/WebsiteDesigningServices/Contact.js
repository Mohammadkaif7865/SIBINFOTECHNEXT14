import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="bgGradient ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="leftCall">
              <h4 className="small_heading text-white fontHeading ">
                A Creative Web Design Agency India Offering Professional Website
                Design Services
              </h4>
              <h5 className="heading fw-bold mt-4 text-white fontHeading">
                Making Your Dream Website A Reality.
              </h5>
              <div className="mt-lg-5 mt-3">
                <Link href="#">
                  <span className="btnThemeRed me-lg-3 me-1">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </span>
                </Link>
                <Link href="tel:+91-9222260000">
                  <span className="btnThemewhiteBorder">
                    <i className="fa-solid fa-phone"></i> Contact Our Experts
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="rightCall">
              <img
                src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/call-action.png"
                alt="Call to Action"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
