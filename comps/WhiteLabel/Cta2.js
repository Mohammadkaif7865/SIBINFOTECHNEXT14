import React from "react";

const Cta2 = () => {
  return (
    <section className="cta2 whiteLable">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className=" px-2 px-md-5 py-3 p-lg-0">
              <h4 className="large_heading2 text-center text-md-start position-relative z-3 fontWeight600 text-white ">
                Delegate the workload, <br /> elevate your success!
              </h4>
              <p className=" text-light position-relative z-3 mt-4   text-center text-md-start">
                Helping you deliver top-notch service and manage your clients
                better!
              </p>

              <p className="mt-4 text-white position-relative  text-center text-md-start z-3 small_heading fontWeight600">
                Your Brand Name, Our Services
              </p>

              <div className="position-relative z-3 mt-5">
                <a
                  href="#contact"
                  className="p-2 px-4 w-100 btnPrimary text-white"
                >
                  Schedule a Free Consultation
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="content d-flex w-100 z-3 position-relative">
              <img className="" src="/assets/images/success-arrow.svg" alt="" />
              {/* <div>
                <p>Your Brand Name</p>
                <p className="mt-2"> Our Services</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta2;
