import React from "react";

const Introduction = () => {
  return (
    <>
      <section className="">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="leftDesign">
                <h4 className="heading fw-bold text-center fontHeading">
                  Award Winning{" "}
                  <span className="titleHighlight">Website Designing</span>{" "}
                  Company in India
                </h4>
                <div className="mt-4">
                  <p className="small_heading textGrey text-center">
                    We are an established, award-winning best web design agency
                    in Mumbai, India since 2005 which have been crafting
                    beautiful &amp; functional bespoke web design experiences
                    tailored to your needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="space"></div>
            <div className="col-lg-5">
              <div className="awardWinningRight">
                <video playsInline autoPlay muted>
                  <source
                    src="assets/images/programming.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="awardWinning">
                <h4 className="regular_heading fontWeight600 mt-3 mb-3  fontHeading">
                  A Web Design Agency in the heart of India
                </h4>
                <p>
                  Looking for the Best Web Design Company in India? Website
                  Designing is the first and the foremost area which must be
                  concentrated on as it is the virtual face of an organization
                  and the most important marketing asset.
                </p>
                <p>
                  Our web design Mumbai team uses cutting edge technology to
                  develop beautiful and memorable custom websites which are user
                  friendly to increase customer engagement ensuring high
                  performance, security &amp; scalability.
                </p>
                <p>
                  Over the years we have delivered growth to 1000+ websites and
                  today have positioned ourselves as one of India's top Web
                  Design Company and Digital Marketing services provider. So if
                  you are located in Mumbai, New Delhi or Noida or anywhere in
                  the world and are looking for professional website designs
                  then you have landed at the right place.
                </p>
                <p>
                  Engage users with our best web designs services. We aim to
                  make sure you achieve your goals through your website. Our
                  best web designers in Mumbai, India will help you to design a
                  responsive and lead generating website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
