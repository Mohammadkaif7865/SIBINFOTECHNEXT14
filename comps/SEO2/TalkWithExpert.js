import React from "react";
import Link from "next/link";

const TalkWithExpert = ({ heading, linkTitle, linkDestination }) => {
  return (
    <section className="seoCallAction">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="leftAction">
              <h4 className="sub_heading text-white fontHeading fontWeight800">
                {heading}
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="rightAction text-center">
              {/* Use the provided linkDestination prop for the href */}
              <Link href={linkDestination} className="btnAction">
                {linkTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkWithExpert;
