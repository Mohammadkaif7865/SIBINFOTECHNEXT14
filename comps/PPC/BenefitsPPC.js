import Image from "next/image";
import React from "react";

const BenefitsPPC = () => {
  return (
    <section>
      <div className="containerFull">
        <h3 className="customHeading text-center">
          Benefits of <span className="text_red">PPC Ads</span>
        </h3>
        <div className="row marginTop2">
          <div className="col-lg-4">
            <div className="beniftsDigi">
              <ul>
                <li>It gives you immediate results.</li>
                <li>PPC traffic is higher tendency to convert.</li>
                <li>It is very much measurable.</li>
                <li>It is real time advertisement.</li>
                <li>
                  You will only charged when someone will click on your
                  advertisements.
                </li>
                <li>
                  It provide your brand a good exposer in front of right people.
                </li>
                <li>
                  PPC advertisement dramatically increase your revenue and
                  sales.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="rightBenefit">
              <Image
              className="h-auto"
                width={417}
                quality={100}
                height={442}
                src="assets/images/best-digital-marketing-company-in-delhi.svg"
                alt="Digital Marketing Agency in India"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="beniftsDigi">
              <ul>
                <li>
                  If you are a new business PPC advertising is the best way to
                  grow your business.
                </li>
                <li>It can also help you to build your good SEO.</li>
                <li>It is a controllable from of advertising.</li>
                <li>
                  It will advertise directly to those people who are actively
                  searching a business like you.
                </li>
                <li>It is a controllable from of advertising.</li>
                <li>It can also help you to build your good SEO.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPPC;
