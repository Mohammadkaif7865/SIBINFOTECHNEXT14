import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Cta = () => {
  return (
    <section className="overflow-hidden cta_solution_main">
      <div className="containerFull">
        <div class="cta_solution">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4 className=" text-white large_heading2 fontWeight600 z-3 position-relative">
                SAVE 2X Cost
              </h4>

              <div className="z-3 position-relative mt-4 scaling-fade ">
                <Link className="text-white small_heading" href="/contact">Let’s Grow With US  <i class="fa-solid fa-arrow-right ms-2"></i></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content w-100 z-3 position-relative">
                <p>
                  <img src="/assets/images/icons/double-tick-icon.svg" alt="" />
                  Maintain Confidentiality
                </p>
                <p className="mt-2">
                  {" "}
                  <img
                    src="/assets/images/icons/double-tick-icon.svg"
                    alt=""
                  />{" "}
                  Outsource with Confidence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
