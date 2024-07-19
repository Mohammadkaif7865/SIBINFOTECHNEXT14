import Image from "next/image";
import React, { useState } from "react";

const SmartTargeting = () => {
  const [show, setShow] = useState(1);
  return (
    <section data-aos="fade-up" className="bgsection_m2">
      <div className="containerFull ">
        <div>
          <h4 className="fontHeading2 text-center heading fontWeight700">
          The Most <span className="text_red">'Complete'</span>  WhatsApp Platform
          </h4>
          <p className="text-center title mt-3 fontWeight600 mt-3 fontHeading2 text-primary">
          Everything you need to notify, chat & engage your users<br /> all in one place 
          </p>
          <div className="button_targeting">
            <button
              onClick={() => {
                setShow(1);
              }}
              className={`${show == 1 ? "btn_active titleHighlight2" : ""}`}
            >
              Broadcast Messaging
            </button>
            <button
              onClick={() => {
                setShow(2);
              }}
              className={`${show == 2 ? "btn_active titleHighlight2" : ""}`}
            >
              Live Chat
            </button>
            <button
              onClick={() => {
                setShow(3);
              }}
              className={`${show == 3 ? "btn_active titleHighlight2" : ""}`}
            >
              Track Analytics
            </button>
          </div>
        </div>
        <div className={`row targetting_tabs align-items-center mt-5 ${show == 1 ? "" : "d-none"}`}>
          <div className="col-lg-7 targetting_tabs_left">
          <h4 className="fontHeading2 text-primary  fontWeight700 ">
            Import & Broadcast Instantly
            </h4>
            <p className="fontWeight600 mt-3">
              Businesses drive 25-60% Revenues with SIB Infotech
            </p>
            <p className="mt-3">
            You can simply Import all your Contacts and Broadcast approved messages Instantly. 
            </p>
            <p className="mt-3">
            See real-time analytics on the SIB Infotech Platform for delivered, read rates and more


            </p>
            <p className="mt-3">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero culpa labore quia reprehenderit, illo doloremque eius, sunt assumenda asperiores distinctio quas quos laudantium ut laborum soluta quisquam necessitatibus nisi!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minus vero magnam quis quas, odit cum ut natus eaque voluptates eos autem obcaecati accusantium, vel tempore molestiae iusto velit impedit?


            </p>
           
          </div>

          <div className="col-lg-5  targetting_tabs_right">
            <Image
              className="w-100 h-100 object-fit-cover rounded-3"
              width={400}
              height={400}
              quality={100}
              src={
                "/assets/images/broadcast1.png"
                // "/assets/images/social-media-marketing-concept-marketing-with-applications_23-2150063172 (1).avif"
              }
              alt={""}
            />
          </div>
        </div>
        <div className={`row targetting_tabs align-items-center mt-5 ${show == 2 ? "" : "d-none"}`}>
          <div className="col-lg-7 targetting_tabs_left ">
            <h4 className="fontHeading2 text-primary  fontWeight700 ">
              Google Ads
            </h4>
            <p className="fontWeight600 mt-3">
              Businesses drive 25-60% Revenues with SIB Infotech
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              laudantium nesciunt itaque nihil aspernatur alias accusantium
              quaerat exercitationem magni voluptate fuga facilis amet autem
              libero odit, numquam id. Alias beatae maxime accusamus dolor
              dolorem, dolores eaque aperiam laudantium iusto eligendi, mollitia
              facilis quaerat accusantium temporibus ea dicta consequuntur nulla
              dolore?
            </p>
            <p className="mt-3">
              Well, WhatsApp recently allowed Businesses to Broadcast and
              Automate Promotional Messages via WhatsApp Business API
            </p>
           
          </div>

          <div className="col-lg-5 targetting_tabs_right">
            <Image
                 className="w-100 h-100 object-fit-cover rounded-3"
              width={400}
              height={400}
              quality={100}
              src={
                "/assets/images/3d-render-marketing-podium-background_23-2150756434.avif  "
              }
              alt={""}
            />
          </div>
        </div>
        <div className={`row targetting_tabs align-items-center mt-5 ${show == 3 ? "" : "d-none"}`}>
          <div className="col-lg-7 targetting_tabs_left">
            <h4 className="fontHeading2 text-cheading fontWeight700 text-primary">
              Track Analytics
            </h4>
            <p className="fontWeight600 mt-3">
              Businesses drive 25-60% Revenues with SIB Infotech
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              laudantium nesciunt itaque nihil aspernatur alias accusantium
              quaerat exercitationem magni voluptate fuga facilis amet autem
              libero odit, numquam id. Alias beatae maxime accusamus dolor
              dolorem, dolores eaque aperiam laudantium iusto eligendi, mollitia
              facilis quaerat accusantium temporibus ea dicta consequuntur nulla
              dolore?
            </p>
            <p className="mt-3">
              Well, WhatsApp recently allowed Businesses to Broadcast and
              Automate Promotional Messages via WhatsApp Business API
            </p>
            
          </div>

          <div className="col-lg-5 targetting_tabs_right">
            <Image
                 className="w-100 h-100 object-fit-cover rounded-3"
              width={400}
              height={400}
              quality={100}
              src={
                "/assets/images/business-commercial-corporate-development-concept_53876-124899.avif"
              }
              alt={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTargeting;
