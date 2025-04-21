import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Counter = dynamic(() => import("../CounterHome"), { ssr: false });

const BannerSlider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only on the client
    setIsClient(true);
  }, []);

  const counterData = [
    { value: 617, label: "Increase in Organic Traffic" },
    { value: 315, label: "Increase in Qualified Leads" },
    { value: 344, label: "Increase in Sales Growth YOY" },
  ];

  return (
    <section className="homeBanner">
      <div className="containerFull">
        <h1 className="homeBannerText title text-center">
          India’s Premier <strong>Digital Marketing Agency</strong>
        </h1>

        <h2 className="heading mb-3 mt-4 text-center fontWeight700 text-white">
          Get More Traffic, Leads & Sales
        </h2>

        <h3 className="heading text-center text-white mt-1">
          <span className="fontWeight600 text_red">
            with Strategic, AI-Powered
          </span>
        </h3>

        <h4 className="heading text-center mt-3 text-white fontWeight600">
          <i>Digital Marketing Solutions</i>
        </h4>

        <div className="text-center mt-4 mt-lg-5">
          <Link href="/contact" className="btnHomeBanner">
            Start Growing Now
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </Link>
          <Link href="/contact" className="btnHomeBanner2">
            Explore Services
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </Link>
        </div>

        <div className="counterHome text-center mt-lg-5 mt-4">
          <div className="row justify-content-center">
            {counterData.map((item, index) => (
              <div
                key={index}
                className="col-6 col-lg-3 col-md-4 counterBannerHome text-center"
              >
                <h4 className="large_heading2 mt-3 fontWeight700 text-white">
                  {isClient ? <Counter targetValue={item.value} /> : item.value}
                  <span className="sub_heading ps-2">%</span>
                </h4>
                <p className="mt-1 text-white fontSmall">
                  <strong>{item.label}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
