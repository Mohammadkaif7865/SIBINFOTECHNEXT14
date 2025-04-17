import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta2 = () => {
  return (
    <section className="dots curve1 bgEffect">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-6 ">
            <div>
              <h5 className="fontHeading sub_heading   text_blue_light fontWeight800">
                Get Started with <br />
                Our Local SEO Services Today
              </h5>

              <h4 className="sub_heading fontHeading mt-3 fontWeight600">
                What do you get?
              </h4>
            </div>
            <div className="row mt-4 mx-auto  ">
              <div className="col-2 d-none d-md-block">
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
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Local Directory Listings
                </p>
                <p>
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Higher Local rankings
                </p>
                <p>
                  <i className="fa-solid fa-square-check me-2 text_red"></i>SEO
                  Relevant Local traffic
                </p>
              </div>
              <div className="col-4 d-md-none d-block">
                <Image
                  className="w-100 h-100 object-fit-contain"
                  width={100}
                  height={100}
                  quality={100}
                  src={"/assets/images/icons/lock.png"}
                  alt=""
                />
              </div>
            </div>

            {/* **************************** */}

            <div className=" mt-4    ">
              <div className="rounded-4  p-4  ">
                <h4 className="blink-animation fontHeading text-center title mb-4  fontWeight600">
                  Free SEO Audit & Strategy Session
                </h4>

                <div className=" audit_contact d-flex gap-2 align-items-center justify-content-center  ">
                  <Link
                    href={"/contact-us"}
                    className="audits_btn btnThemeRed d-flex align-items-center justify-content-center gap-1  rounded-2"
                    style={{
                      padding: "10px 10px",
                    }}
                  >
                    <Image
                      width={40}
                      height={40}
                      className=" d-block h-auto  nolock-img"
                      src={"/assets/images/icons/software-developer-icon-2.png"}
                      alt=""
                    />
                    {/* <i className="fa-regular fa-user sub_heading"></i> */}
                    <p className=" text-center text-white text-uppercase ">
                      Contact a SEO Specialist
                    </p>
                  </Link>
                  <Link
                    href={"/contact-us"}
                    className="audits_btn bg_sky  d-flex align-items-center justify-content-center gap-1  px-2 py-1 rounded-2"
                  >
                    <Image
                      width={40}
                      height={40}
                      className=" d-block h-auto nolock-img"
                      src={"/assets/images/icons/phone.png"}
                      alt=""
                    />
                    <p className=" text-center text-white text-uppercase ">
                      Schedule a Call With Us
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4">
            <div className="desktopFrame">
              <picture>
                <source srcset="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/desktop-frame.webp" />
                <img
                  src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/desktop-frame.png"
                  alt="Desktop Frame"
                />
              </picture>
              <div className="frameActivity">
                <div className="googleLogo">
                  <picture>
                    <source srcset="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/google-social.webp" />
                    <img
                      src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/google-social.png"
                      alt="Google Logo"
                    />
                  </picture>
                </div>
                <div className="searchResult shadow">
                  <div className="searchBar">
                    <div className="searchLeftIcon">
                      <picture>
                        <source srcset="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/search-interface-symbol.webp" />
                        <img
                          src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/search-interface-symbol.png"
                          alt="Search IconS"
                        />
                      </picture>
                    </div>
                    <p className="w-100">SEO near me </p>
                    <div className="searchIconsRight">
                      <picture>
                        <source srcset="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/google-icon.webp" />
                        <img
                          src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/google-icon.png"
                          alt="Google Icons"
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="listSearch">
                    <ul>
                      <li>SEO Near Me</li>
                      <li>Search Engine Optimization Near Me</li>
                      <li>SEO Company Near Me</li>
                      <li>SEO Services Near Me</li>
                      <li>SEO Agency Near Me</li>
                      <li>Ecommerce SEO Services</li>
                      <li>Mobile SEO Services</li>
                      <li>Local SEO Services</li>
                      <li>On-Page SEO Services</li>
                      <li>Off-Page SEO Services</li>
                      <li>Amazon SEO</li>
                      <li>Travel SEO</li>
                      <li>Shopify SEO</li>
                      <li>Real Estate SEO</li>
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

export default Cta2;
