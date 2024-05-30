import Link from "next/link";
import React from "react";


const SpeakWithExpert = () => {
  return (
    <section className="customPadding blueBg2">
      <div className="containerFull">
        <div className="callAction">
          <h3 className="text-white">
            We believe in delivering service with the perfection that leads to
            worldwide 750+ happy clients
          </h3>
          <p className="customText text-off-white">
            We ensure that your brand gets the desired exposure it needs.
          </p>
          <Link href="/request-a-quote">
            Speak to our social media marketing experts
          </Link>
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

export default SpeakWithExpert;
