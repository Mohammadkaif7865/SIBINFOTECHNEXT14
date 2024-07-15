import Link from "next/link";
import React from "react";

const Launchcampaign = () => {
  return (
    <section className="blueBg2">
      <div className="containerFull">
        <div className="callAction">
          <h4 className="customLineHeight2 fontWeight800">
            Are you ready to launch your Facebook Advertising campaign
          </h4>
          <p className="customText text-off-white">
            with the best Facebook advertising company in India with offices in
            Mumbai and Delhi?
          </p>
          <Link href="#">Speak to our influencer marketing experts</Link>
        </div>
        <svg
          id="pattner"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#528af9"
            fill-opacity="1"
          ></path>{" "}
        </svg>
      </div>
    </section>
  );
};

export default Launchcampaign;
