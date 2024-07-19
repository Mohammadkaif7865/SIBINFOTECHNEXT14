import Image from "next/image";
import React from "react";

const SmartTargetting2 = () => {
  return (
    <section className="overflow-hidden">
      <div className="containerFull ">
        <div>
          <h4  data-aos="flip-up" className="fontHeading2 heading fontWeight700">
            Smart Retargeting For <span className="text_red"> 3X Sales</span>
          </h4>
          <p className="mt-2 fontWeight600 mt-3 fontHeading2 text-primary">
            Segregate your Audiences Smartly and Re-Broadcast for Higher
            Conversions!
          </p>
        </div>

        <div className="row mt-5">
          <div  data-aos="fade-right" className="col-lg-6">
          <Image className="w-100 h-100 rounded-3" width={500} height={400} src={"/assets/images/sale.jpg"} alt="" />
          
          </div>
          <div data-aos="fade-left" className="col-lg-6 ">
            <div className="row innerItem_targeting ">
                <div className="col-lg-2">
                    <Image width={80} height={80} src={"/assets/images/icons/target.png"} alt="" />

                </div>
              <div className="col-lg-9">
                <h4 className="fontHeading2 small_heading fontWeight700">SMART AUTO-SEGREGATION</h4>
                <p className="mt-2">
                  AiSensy automatically segregates your broadcast audience by
                  Delivered, Read, Replied Audiences. Run Retargeting Campaigns
                  on the Basis of these filters.
                </p>
              </div>
            </div>
            <div className="row innerItem_targeting ">
                <div className="col-lg-2">
                <Image width={80} height={80} src={"/assets/images/icons/business-and-finance.png"} alt="" />

                </div>
              <div className="col-lg-8">
                <h4 className="fontHeading2 small_heading fontWeight700"> DRIVE 3X SALES</h4>
                <p className="mt-2">
                Retargeting Campaigns have proven to Increase sales and engagement for Businesses
                </p>
              </div>
            </div>
            <div className="row innerItem_targeting ">
                <div className="col-lg-2">
                <Image width={80} height={80} src={"/assets/images/icons/noise.png"} alt="" />

                </div>
              <div className="col-lg-8">
                <h4 className="fontHeading2 small_heading fontWeight700">Lorem ipsum dolor</h4>
                <p className="mt-2">
               Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, voluptatum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTargetting2;
