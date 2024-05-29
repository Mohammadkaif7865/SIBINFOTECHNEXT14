import Image from "next/image";
import React from "react";

const Objective = () => {
  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <div className="insta-services-img-section">
              <Image
                width={450}
                height={450}
                quality={100}
                className="image-full h-auto "
                src="/assets/images/instagram-ads-business-objective.png"
                alt="instagram-ads-business-objective"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0">
            <div className="insta-services-content-section">
              <h3 className="margin-bottom">
                Determine your business objective
              </h3>
              <p className="customText">
                It is very important to make your business objectives in order
                to avoid wasting of time and resources. Write a list of targets
                which you want to achieve through Instagram advertising. Each of
                these objectives have different KPI and matrix to track.
              </p>
              <span className="divider2">&nbsp;</span>
              <h3 className="margin-bottom">Schedule Content in advance</h3>
              <p className="customText">
                In order to avoid any discrepancy in Instagram advertising it is
                very important to schedule the content in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
