import React from "react";
import Image from "next/image";
import Counter from "../CounterHome";

const WeStrong = () => {
  return (
    <section className="weStrongHome">
      <div className="containerFull">
        <h4 className="title fontWeight600 text-white">Our Facts</h4>
        <h3 className="heading mt-2 fontWeight300">
          We are as <span className="text_red fontWeight700">STRONG</span> as{" "}
          <span className="text_red fontWeight700">YOU</span> Make us
        </h3>
        <div className="row mt-3 align-items-end">
          <div className="col-lg-7">
            <p className="title text-white">
              <strong>
                Award Winning Performance Marketing Company in India
              </strong>{" "}
              that Designs, Develops & Delivers.
            </p>
            <div className="strongBoxHome  mt-lg-5 mt-4">
              <div className="glossyBorder"></div>
              <div className="glossyBorder2"></div>
              <div className="glossyBorder3"></div>
              <div className="leftBoxStrong">
                <Image
                  width="100"
                  height="100"
                  quality={100}
                  src={
                    "/assets/images/calculator-development-company-in-mumbai.png"
                  }
                />
              </div>
              <div className="rightBoxStrong">
                <p className="title">
                  We are a young creative{" "}
                  <strong>digital marketing agency</strong> &{" "}
                  <strong>web development company</strong> for any business -
                  anywhere to promote their business online and engage users
                  with brands and convert them to customers and{" "}
                  <strong>experience an overall improvement</strong> in client
                  base.
                </p>
                <p className="mt-2 title">
                  We understand that no two businesses can be the same and so is
                  there website usage and therefore they will need a different
                  <strong> digital marketing solution</strong>. We do Your
                  business in your way.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5 mt-4">
            <div className="row">
              <div className=" col-6 col-lg-6 mb-3">
                <div className="boxStronItegHome position-relative">
                  <div className="glossyBorder"></div>
                  <div className="glossyBorder2"></div>
                  <div className="glossyBorder3"></div>
                  <div className="boxStrongIcon text-end">
                    <i className="fa-solid fa-users regular_heading"></i>
                  </div>
                  <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                    <Counter targetValue={1200} />
                    <span className="sub_heading ps-2">+</span>
                  </h4>
                  <p className="mt-1 text-white">Satisfied Customers</p>
                </div>
              </div>
              <div className="col-6 col-lg-6 mb-3 ">
                <div className="boxStronItegHome">
                  <div className="glossyBorder"></div>
                  <div className="glossyBorder2"></div>
                  <div className="glossyBorder3"></div>
                  <div className="boxStrongIcon text-end">
                    <i className="far fa-paper-plane regular_heading"></i>
                  </div>
                  <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                    <Counter targetValue={2000} />
                    <span className="sub_heading ps-2">+</span>
                  </h4>
                  <p className="mt-1 text-white">Projects Delivered</p>
                </div>
              </div>
              <div className="col-6 col-lg-6 mb-3">
                <div className="boxStronItegHome">
                  <div className="glossyBorder"></div>
                  <div className="glossyBorder2"></div>
                  <div className="glossyBorder3"></div>
                  <div className="boxStrongIcon text-end">
                    <i className="fas fa-briefcase regular_heading"></i>
                  </div>
                  <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                    <Counter targetValue={20} />
                    <span className="sub_heading ps-2">+</span>
                  </h4>
                  <p className="mt-1 text-white">Years of Expertise</p>
                </div>
              </div>
              <div className="col-6 col-lg-6 mb-3">
                <div className="boxStronItegHome">
                  <div className="glossyBorder"></div>
                  <div className="glossyBorder2"></div>
                  <div className="glossyBorder3"></div>
                  <div className="boxStrongIcon text-end">
                    <i className="fas fa-users regular_heading"></i>
                  </div>
                  <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                    <Counter targetValue={30} />
                    <span className="sub_heading ps-2">+</span>
                  </h4>
                  <p className="mt-1 text-white">Team <br className="d-md-none"/> Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeStrong;
