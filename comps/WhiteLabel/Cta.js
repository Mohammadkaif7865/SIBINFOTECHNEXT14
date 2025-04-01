import Link from "next/link";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";

const Cta = () => {
  return (
    <section className="overflow-hidden cta_solution_main">
      <div className="containerFull">
        <div class="cta_solution">
          {/* <h4 className=" text-white text-center heading fontWeight600 z-3 position-relative">
            Did you know 80% of small and medium agencies use white-label
            digital marketing agencies to scale faster and reduce costs?
          </h4> */}
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className=" text-white large_heading2 fontWeight600 z-3 position-relative">
                SAVE 2X Cost
              </h4>

              <div className="z-3 position-relative mt-4 scaling-fade d-md-block d-none">
                <Link className="text-white small_heading" href="/contact">
                  Let’s Grow With US{" "}
                  <i class="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
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

              <div className="z-3 position-relative mt-4 scaling-fade d-flex justify-content-center d-md-none">
                <Link className="text-white small_heading text-center w-100 d-block" href="/contact">
                  Let’s Grow With US{" "}
                  <i class="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
