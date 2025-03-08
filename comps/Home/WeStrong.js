import React from "react";

const WeStrong = () => {
  return (
    <section className="bg-dark-blue ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="heading fontHeading2 fontWeight600 text-white">
              We are as STRONG <br /> as YOU Make us
            </h4>
            <div class="mt-5">
              <a class="fancy2" href="#">
                <span class="top-key"></span>
                <span class="text">Discover More</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="counterGrid">
              <div className="home_counterGrid_item">
                <h4 className="fontheading2 heading fontWeight700 text-white">
                  20+{" "}
                </h4>
                <p>Years in Business</p>
              </div>
              <div className="home_counterGrid_item">
                <h4 className="fontheading2 heading fontWeight700 text-white">
                  1,350+{" "}
                </h4>
                <p>Projects delivered</p>
              </div>
              <div className="home_counterGrid_item">
                <h4 className="fontheading2 heading fontWeight700 text-white">
                  750+{" "}
                </h4>
                <p>Active clients/users </p>
              </div>
              <div className="home_counterGrid_item">
                <h4 className="fontheading2 heading fontWeight700 text-white">
                  30+{" "}
                </h4>
                <p>Team Members </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStrong;
