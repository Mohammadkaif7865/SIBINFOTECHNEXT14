import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="blueBg2">
      <div className="containerFull">
        <div className="callAction">
          <h3 className="customLineHeight2 fontHeading fontWeight800">
            Are you ready to optimize your seo plan start using #1 On-page SEO
            strategy to optimize your
            <br />
            website performance with the top SEO company in INDIA?
          </h3>
          <Link href="/contact-us">Speak to our experts</Link>
        </div>
        <svg
          id="pattner"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,229.3C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#4784FF"
            fill-opacity="1"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
