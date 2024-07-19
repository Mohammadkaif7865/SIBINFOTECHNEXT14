import Image from "next/image";
import React from "react";

const SellProduct = () => {
  return (
    <section className="bgsection_m3">
      <div className="containerFull">
        <div>
          <h5  data-aos="flip-up" className="fontHeading2 heading fontWeight700">
            <span className="text_red">Sell Your Products</span> On WhatsApp
          </h5>
          <p className="mt-2 fontWeight500 fontWeight600 mt-3 fontHeading2 text-primary">
            WhatsApp Catalog, Cart & Payments in One Place!
          </p>
          <div data-aos="fade-up" className="sell_product">
            <div  className="row ">
              <div className="col-lg-6">
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}
                    DRAG & DROP CHATBOT & CATALOG BUILDER
                  </h5>
                  <p className="mt-2 ">
                    Build your Own Chatbot Flows your Way! Easy- to-use Chatbot
                    & Catalog Flow builder to build your conversational journeys
                  </p>
                </div>
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}
                    WHATSAPP CART & CATALOGS
                  </h5>
                  <p className="mt-2 ">
                    Drive Orders via WhatsApp with WhatsApp Catalogs and Cart.
                    Seamlessly build your Catalog in 10 minutes and get going!
                  </p>
                </div>
                <div className="items">
                  <h5 className="fontHeading2  fontWeight700">
                    {" "}     WHATSAPP PAYMENTS
                   
                  </h5>
                  <p className="mt-2 ">
             
                  Yes! Collect Payments now on WhatsApp Seamlessly with WhatsApp Pay and other modes of Payments (Razorpay, Payu etc) and grow your revenues.
                  </p>
                </div>
              </div>
              <div className=" col-lg-6 pt-3">
                <div className="imgboxm">
                  <Image
                    className="w-100 h-auto "
                    width={500}
                    height={400}
                    src={"/assets/images/api-features---whatsapp-screen-3.webp"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellProduct;
