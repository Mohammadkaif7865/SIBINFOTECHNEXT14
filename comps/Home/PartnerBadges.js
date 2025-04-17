import Image from "next/image";
import Link from "next/link";
import React from "react";

const PartnerBadges = () => {
  return (
    <section className="partner_badges">
      <div className="containerFull">
        <div className="">
          <h4 className="large_heading2 fontHeading2 fontWeight600 text_red mt-4 ">
            Our Certifications & Partner Badges
          </h4>
          <p className="mt-3">
            Proudly Recognized by industry leaders for our expertise and
            <br />
            excellence as trusted & certified digital marketing experts
          </p>
        </div>
        <div className="mt-4">
          <div className="footerBottom">
            <div className="">
              <div className="footerLogos">
                <div className="itemFooterLogo">
                  <Link
                    href="https://www.google.com/partners/agency?id=4328223643"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      className="w-100 h-auto"
                      width={100}
                      height={100}
                      quality={100}
                      src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                      alt="Google Partner"
                    />
                  </Link>
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="Meta Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/meta-partner.jpg"
                  />
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="clutch Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/clutch.png"
                  />
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="Shopify Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/shopify-partner.png"
                  />
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="Trustpilot Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/trustpilot.jpg"
                  />
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="Google Analytics Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/google-analytics.jpg"
                  />
                </div>
                <div className="itemFooterLogo">
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    alt="Bing Partner Company"
                    src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/bing.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBadges;
