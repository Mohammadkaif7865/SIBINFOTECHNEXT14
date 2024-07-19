import Image from "next/image";
import React from "react";

const Broadcast = () => {
  return (
    <section className="overflow-hidden">
      <div className="containerFull ">
        <div className="row">
          <div data-aos="fade-right" className="col-lg-6">
            <h4 className="fontHeading2 heading fontWeight700">
              Broadcast <span className="text_red">Promotional</span> Messages
              (Officially)
            </h4>
            <p className="fontWeight600 mt-3 title fontWeight600 mt-3 fontHeading2 text-primary">
              Businesses drive 25-60% Revenues with SIB Infotech
            </p>
            <p className="mt-3">
              Well, WhatsApp recently allowed Businesses to Broadcast and
              Automate Promotional Messages via WhatsApp Business API
            </p>
            <p className="mt-3">
              You can Now Send Exciting Offers, Discount Coupon Code and
              Festival Wishes without getting your Number blocked!
            </p>
            <div class="mt-4">
              <a href="/contact-us">
                <span class="btnThemeRed2 me-3 fontWeight700">
                  <i class="fa-solid fa-comment-dots"></i> Talk to Our Expert
                </span>
              </a>
              
            </div>
          </div>

          <div data-aos="fade-left" className="col-lg-6">
            <div className="position-relative w-100 h-100 ">
              <Image
                className="w-100 rounded-3 object-fit-contain img_broadcast "
                width={400}
             
                height={400}
                quality={100}
                src={
                  "/assets/images/isometric-complain-concept-illustration.png"
                }
                alt={""}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Broadcast;
