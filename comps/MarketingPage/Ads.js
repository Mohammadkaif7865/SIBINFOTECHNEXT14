import Image from "next/image";
import React from "react";

const Ads = () => {
  return (
    <section className="dots overflow-hidden">
      <div className="containerFull">
        <div className="row">
          {" "}
          <div data-aos="fade-right" className="col-lg-6 position-relative">
            <Image
              className="w-100 h-100 object-fit-contain rounded-3"
              width={400}
              height={400}
              quality={100}
              src={
                "/assets/images/top-view-workmates-talking-about-bar-chart_1098-338.jpg"
              }
              alt={""}
            />
            <div className="clicks_impression">
              <div className="clicks_impression_inner rounded-3">
                <h5> Impression</h5>
                <p className="">
                  22,885{" "}
                  <Image
                    className=""
                    width={50}
                    height={50}
                    src={"/assets/images/icons/like.gif"}
                    alt={""}
                  />
                </p>
              </div>
              <div className="mt-3 clicks_impression_inner rounded-3">
                <h5>Clicks</h5>
                <p>
                  22,885{" "}
                  <Image
                    className=""
                    width={50}
                    height={50}
                    src={"/assets/images/icons/click.gif"}
                    alt={""}
                  />
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="col-lg-6 ps-lg-4 ">
            <h4 className="fontHeading2 heading fontWeight700">
              Run Ads With SIB Infotech And  <span className="text_red">Achieve 5X Leads.</span>
            </h4>
            <p className="fontWeight600 mt-3 title fontWeight600 mt-3 fontHeading2 text-primary">
              Businesses drive 25-60% Revenues with SIB Infotech
            </p>
            <p className="mt-3">
              Run Ads on Facebook & Instagram that land on WhatsApp. 5X Your
              lead generations & 2-3X Conversions Instantly! Build Click to
              WhatsApp Ads from AiSensy Platform Get all your Leads Segregated
              according to Ad Campaigns Build Chatbot Flows based on Ads or
              Retarget via Broadcast
            </p>
            {/* <p className="mt-3">
              Well, WhatsApp recently allowed Businesses to Broadcast and
              Automate Promotional Messages via WhatsApp Business API
            </p> */}
            <div class="mt-4 fontWeight600"><a href="tel:+91-92222-60000"><span class="btnThemeRed2 me-3"><i class="fa-solid fa-phone"></i> +91-92222-60000</span></a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
