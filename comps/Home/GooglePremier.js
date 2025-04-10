import Image from "next/image";
import Link from "next/link";
import React from "react";

const GooglePremier = () => {
  return (
    <section className="google_premier">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <div className="sub_heading" 
            style={{
                color:"#FFE17D",
            }}
            >
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h4 className="large_heading2 fontHeading2 fontWeight600 text_red mt-4 ">
              Top 3% Google Premier Partner Agency
            </h4>

            <p className="mt-4">
              World-class Google Ads service, delivered by local experts. Our
              award-winning Google Ads team has once again earned Google Premier
              Partner status – which puts us in the top 3% of Google Ads
              Agencies in Australia. What does that mean for you? Exclusive
              access to product betas, dedicated account support direct from
              Google, consumer insights and more.
            </p>
            <p className="mt-4">
              See it for yourself, check out our 90+ 5 star reviews!
            </p>

            <div className="mt-5">
              <a className="fancy3" href="#">
                <span className="top-key"></span>
                <span className="text">Click Here</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className=" d-flex h-100 align-items-center justify-content-center">
              <Link
                href="https://www.google.com/partners/agency?id=4328223643"
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  className="w-100  h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                  alt="Google Partner"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePremier;
