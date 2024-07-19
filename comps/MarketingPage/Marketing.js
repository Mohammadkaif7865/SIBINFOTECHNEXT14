import React, { useEffect } from "react";
import Hero from "./Hero";
import OurClients from "./OurClients";
import Broadcast from "./Broadcast";
import Ads from "./Ads";
import SmartTargeting from "./SmartTargeting";
import Faqs from "./Faqs";
import Reviews from "./Reviews";
import SellProduct from "./SellProduct";
import SmartTargetting2 from "./SmartTargetting2";
import WhyChoose from "./WhyChoose";
import Aos from "aos";

const Marketing = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
      offset:50,
    });
  }, []);

  return (
    <div>
      <Hero />
      <OurClients />
      <SmartTargeting />
      <Broadcast />
      <Ads />
      <SellProduct />
      <SmartTargetting2 />
      <WhyChoose />
      <Reviews />
      <Faqs />
    </div>
  );
};

export default Marketing;
