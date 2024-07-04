import Image from "next/image";
import Link from "next/link";
import React from "react";

const SeoAudit = () => {
  return (
    <section className="dots curve1 bgEffect">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div>
              <h4 className="sub_heading fontHeading fontWeight600">
                BOOK A FREE SEO Discovery Call
              </h4>
              <h4 className="sub_heading fontHeading mt-3 fontWeight600">
                What do you get?
              </h4>

              {/* <Link href="#bannerSection" className="btnTheme mt-4">
                Get your proposal today{" "}
              </Link> */}
            </div>
            <div className="row mt-4  ">
              <div className="col-2 ">
                <Image
                  className="w-100 h-100 object-fit-contain"
                  width={100}
                  height={100}
                  quality={100}
                  src={"/assets/images/icons/lock.png"}
                  alt=""
                />
              </div>
              <div className=" col-8  ">
                <p>
                  {" "}
                  <i class="fa-solid fa-square-check me-2 text_red"></i>
                  Complete SEO Audit and Analysis
                </p>
                <p>
                  {" "}
                  <i class="fa-solid fa-square-check me-2 text_red"></i>
                  Competitor Analysis
                </p>
                <p>
                  {" "}
                  <i class="fa-solid fa-square-check me-2 text_red"></i>SEO
                  Performance and Gap Analysis
                </p>
                <p>
                  {" "}
                  <i class="fa-solid fa-square-check me-2 text_red"></i>
                  Analyzing Channel-Specific SEO Needs
                </p>
              </div>
            </div>

            {/* **************************** */}

            <div className=" mt-4   ">
              <div className="rounded-4 border p-4 shadow bgGrey">
                <h3 className="fontHeading   sub_heading text_blue_light fontWeight600">
                  NO LOCK IN CONTRACTS
                </h3>
                <h4 className="fontHeading  title mb-4  fontWeight600">
                  Free SEO Audit & Strategy session
                </h4>
                {/* <a
                className="text-center   w-100 d-block mt-4 text-black fontHeading fontWeight600 regular_heading"
                target="_blank"
                href="tel:+91-92222-60000"
              >
                {" "}
                +91-92222-60000
              </a> */}
                <div className=" audit_contact d-flex gap-2 align-items-center justify-content-center  ">
                  {/* <Link
                    href="/contact-us"
                    className=" p-3  d-block text-black shadow border-rounded  "
                  >
                    <Image
                      width={65}
                      height={51}
                      className="mx-auto d-block h-auto"
                      src={"/assets/images/icons/software-developer-icon-2.png"}
                      alt=""
                    />
                    <p className="mt-2 text-center ">
                      Contact a SEO Specialist
                    </p>
                  </Link>
                  <Link
                    href="/contact-us"
                    className="p-3 d-block text-black  shadow border-rounded "
                  >
                    <Image
                      width={50}
                      height={50}
                      className=" mx-auto d-block h-auto"
                      src={"/assets/images/icons/phone.png"}
                      alt=""
                    />
                    <p className="mt-2 text-center fs-6">
                      Schedule a Call With Us
                    </p>
                  </Link> */}

                  <Link href={""} className=" btnThemeRed d-flex align-items-center gap-1 b px-2 py-2">
                  <Image
                      width={40}
                      height={40}
                      className="mx-auto d-block h-auto  nolock-img"
                      src={"/assets/images/icons/software-developer-icon-2.png"}
                      alt=""
                    />
                    {/* <i class="fa-regular fa-user sub_heading"></i> */}
                    <p className=" text-center text-white ">
                      Contact a SEO Specialist
                    </p>
                  
                  </Link>
                  <Link href={""} className=" bg_sky  d-flex align-items-center gap-1  px-2 py-1">
                  <Image
                      width={40}
                      height={40}
                      className="mx-auto d-block h-auto nolock-img"
                      src={"/assets/images/icons/phone.png"}
                      alt=""
                    />
                    <p className=" text-center text-white ">
                    Schedule a Call With Us
                    </p>
                  
                  </Link>
                </div>
              </div>
            </div>
            {/* <div>
              <h4 className="sub_heading fontHeading fontWeight600">
                Ready to Grow your Business Online
              </h4>
              <h4 className="sub_heading fontHeading mt-3 fontWeight600">
                Hire SIB Infotech as your Next SEO agency in India
              </h4>
              <p className="title mt-4 fontWeight500">
                Click on the button below for{" "}
                <span className="fontWeight800">free SEO Audit</span>
              </p>
              <Link href="#bannerSection" className="btnTheme mt-4">
                Get your proposal today{" "}
              </Link>
            </div> */}
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="desktopFrame">
              <picture>
                <source srcSet="assets/images/desktop-frame.webp" />
                <img
                  src="assets/images/desktop-frame.png"
                  alt="Desktop Frame"
                />
              </picture>
              <div className="frameActivity">
                <div className="googleLogo">
                  <picture>
                    <source srcSet="assets/images/google-social.webp" />
                    <img
                      src="assets/images/google-social.png"
                      alt="Google Logo"
                    />
                  </picture>
                </div>
                <div className="searchResult shadow">
                  <div className="searchBar">
                    <div className="searchLeftIcon">
                      <picture>
                        <source srcSet="assets/images/search-interface-symbol.webp" />
                        <img
                          src="assets/images/search-interface-symbol.png"
                          alt="Search IconS"
                        />
                      </picture>
                    </div>
                    <p>What SEO Service does SIB Infotech Offers</p>
                    <div className="searchIconsRight">
                      <picture>
                        <source srcSet="assets/images/google-icon.webp" />
                        <img
                          src="assets/images/google-icon.png"
                          alt="Google Icons"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="listSearch">
                    <ul>
                      <li>Ecommerce Services</li>
                      <li>Mobile SEO Services</li>
                      <li>Local SEO Servicess</li>
                      <li>On Page SEO Services </li>
                      <li>Off Page SEO Services </li>
                      <li>Amazon SEO</li>
                      <li>Travel SEO</li>
                      <li>Shopify SEO</li>
                      <li>Real Estate SEO</li>
                      <li>Health Care SEO</li>
                      <li>Finance SEO</li>
                      <li>Ecommerce SEO services India</li>
                      <li>Best SEO Company in Mumbai </li>
                      <li>Best SEO Company in Delhi </li>
                      <li>Best SEO Company in Kolkata </li>
                      <li>Best SEO Company in Hyderabad </li>
                      <li>Best SEO Company in Jaipur </li>
                      <li>Best SEO Company in Bangalore </li>
                      <li>Best SEO Company in Pune </li>
                      <li>Best SEO Company in London </li>
                      <li>Best SEO Company in Las Vegas </li>
                      <li>Best SEO Company in Los Angeles </li>
                      <li>Best SEO Company in Australia </li>
                      <li>Best SEO Company in Texas </li>
                      <li>Best SEO Company in Dallas </li>
                      <li>Best SEO Company in New Zealand </li>
                      <li>Best SEO Company in New York </li>
                      <li>Best SEO Company in San Francisco </li>
                      <li>Best SEO Company in Vancouver </li>
                      <li>Best SEO Company in Canada </li>
                      <li>Best SEO Company in Austin </li>
                      <li>Best SEO Company in California </li>
                      <li>Best SEO Company in San Jose </li>
                      <li>Best SEO Company in Phoenix</li>
                      <li>Best SEO Company in Whittmer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoAudit;
