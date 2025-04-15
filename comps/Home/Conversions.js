import React from "react";
import Counter from "../CounterHome";
import Image from "next/image";

const Conversions = () => {
  const stats = [
    {
      number: 200,
      unit: "K",
      description: "Keywords ranked on first page of Google",
    },
    {
      number: 10,
      unit: "+",
      description: "Cumulative website visits for clients per month",
    },
    {
      number: 7,
      unit: "X",
      description: "Return on marketing investment",
    },
    {
      number: 340,
      unit: "%",
      description: "Average More Impressions in Search engines",
    },
    {
      number: 300,
      unit: "%",
      description: "Average increase in Inbound Leads",
    },
    {
      number: 35,
      unit: "%",
      description: "Average Reduction in Bounce Rate",
    },
  ];

  return (
    <section className="homeBanner">
      <div className="containerFull">
        <h5 className="fontWeight600 text-center text-white">
          Our Facts
        </h5>

        <h4 class=" text-center large_heading2 mt-4 fontHeading2 fontWeight600  fontHeading2 text_white">
          Turning Clicks into Conversions.
        </h4>
        <h5 class="mt-3 text-center text-white">
          Optimized for <span className="text_red">Success.</span> Engineered
          for <span className="text_red">Growth.</span>
        </h5>

        <div className="row mt-5 d-lg-none">
          {stats.map((sts, index) => {
            return (
              <div className="col-6 col-lg-4  mb-3">
                <div className="conversionBox w-100  ">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={sts.number} />
                      <span className="sub_heading ps-2">{sts.unit}</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      {sts.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mt-lg-5 mt-4 justify-content-center">
          <div></div>

          <div className="col-lg-4">
            <div className="d-none d-lg-block">
              <div className="text-left ">
                <div className="conversionBox ">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={200} />
                      <span className="sub_heading ps-2">K</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Keywords ranked on first page of Google
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="conversionBox">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={10} />M
                      <span className="sub_heading ps-2">+</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Cumulative website visits for clients per month
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="conversionBox">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={7} />X
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Return on marketing investment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="imgConversionCenter">
              <Image
                width="500"
                height="500"
                src="/assets/images/center-mobile-conversion.png"
              />
            </div>
          </div>
          <div className="col-lg-4  ">
            <div className="d-none d-lg-block">
              <div className="d-flex justify-content-end ">
                <div className="conversionBox">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={340} />
                      <span className="sub_heading ps-2">%</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Average More Impressions in Search engines
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="conversionBox">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={300} />
                      <span className="sub_heading ps-2">%</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Average increase in Inbound Leads
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="conversionBox">
                  <div className="boxStronItegHome position-relative">
                    <div className="glossyBorder"></div>
                    <div className="glossyBorder2"></div>
                    <div className="glossyBorder3"></div>
                    <h4 className="large_heading2 mt-3 fontWeight700 text_red">
                      <Counter targetValue={35} />
                      <span className="sub_heading ps-2">%</span>
                    </h4>
                    <p className="mt-1 fontSmall text-white">
                      Average Reduction in Bounce Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversions;
