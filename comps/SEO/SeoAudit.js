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
                    <p>What SEO Service does SIB Infotech Offers</p>
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
