import React from 'react';
import Link from 'next/link';

const Help = ({ heading, linkTitle, linkDestination }) => {
  return (
    <section className="bgAction2">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="leftAction">
              <h4 className="sub_heading text-white fontHeading fontWeight500">
                {heading}
              </h4>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="rightAction text-center">
              {/* Use the provided linkDestination prop for the href */}
              <Link href={linkDestination} className="btnAction mt-2">
                {linkTitle}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
