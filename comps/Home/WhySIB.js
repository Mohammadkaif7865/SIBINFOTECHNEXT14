import React from "react";

const WhySIB = ({ keyAdvantages, leftBoxContent, rightBoxContent }) => {
  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row mt-5">
          {/* LEFT BOX */}
          <div className="col-lg-4 mb-3 position-relative">
            <div className="why_left_item">
              <h2 className="fontHeading2 heading fontWeight300 text_red">
                {leftBoxContent.headingStart}{" "}
                <span className="fontWeight600">
                  {leftBoxContent.headingHighlight}
                </span>
              </h2>
              <p className="mt-3 sub_heading fontHeading2 fontWeight600">
                {leftBoxContent.subHeading}
                <span className="text_red">.</span>
              </p>
              <div className="why_left_card mt-4 text-center">
                <p className="fontHeading2 sub_heading text-white fontWeight600">
                  {leftBoxContent.cardTitle}
                </p>
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
                <h2 className="fontWeight600 heading2 text_red font ps-4">
                  {rightBoxContent.heading}
                </h2>
                <p className="mt-3 ps-4">{rightBoxContent.description}</p>
              </div>
              <div className="row mt-4">
                {keyAdvantages.map((value, index) => (
                  <div className="col-lg-6 mb-3 position-relative" key={index}>
                    <div className="item_why_sib hover h-100">
                      <div className="item_why_title align-items-center">
                        <p className="small_heading fontHeading2 fontWeight600">
                          {value.title}
                        </p>
                        <p className="fontHeading2  numberBorder heading fontWeight600">
                          {(index + 1).toString().padStart(2, "0")}
                        </p>
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

export default WhySIB;
