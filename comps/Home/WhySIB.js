import React, { memo } from "react";

const WhySIB = ({ keyAdvantages, leftBoxContent, rightBoxContent }) => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          {/* LEFT BOX */}
          <div className="col-lg-4 mb-3 position-relative">
            <div className="why_left_item">
              <h4 className="fontHeading2 heading fontWeight300 text_red">
                {leftBoxContent.headingStart}{" "}
                <span className="fontWeight600">
                  {leftBoxContent.headingHighlight}
                </span>
              </h4>
              <h5 className="mt-3 sub_heading fontHeading2 fontWeight600">
                {leftBoxContent.subHeading}
                <span className="text_red">.</span>
              </h5>
              <div className="why_left_card mt-4 text-center">
                <h4 className="fontHeading2 text-white fontWeight600">
                  {leftBoxContent.cardTitle}
                </h4>
                <p className="mt-3 text-white">
                  {leftBoxContent.cardDescription}
                </p>
                <button className="p-2 mt-4 w-100 btnPrimary text-white">
                  {leftBoxContent.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="col-lg-8">
            <div className="rightWhyBlock">
              <div className="headerRightWhy py-lg-3 bgGrey">
                <h3 className="fontWeight600 text_red font ps-4">
                  {rightBoxContent.heading}
                </h3>
                <p className="mt-3 ps-4">{rightBoxContent.description}</p>
              </div>
              <div className="row mt-4">
                {keyAdvantages.map((value, index) => (
                  <div
                    className="col-lg-6 mb-3 position-relative"
                    key={index}
                  >
                    <div className="item_why_sib hover h-100">
                      <div className="item_why_title align-items-center">
                        <h4 className="small_heading fontHeading2 fontWeight600">
                          {value.title}
                        </h4>
                        <h5 className="fontHeading2 fontWeight600">
                          0{index + 1}
                        </h5>
                      </div>
                      <p className="mt-4">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Use React.memo to avoid unnecessary re-renders if props remain the same
export default memo(WhySIB);
