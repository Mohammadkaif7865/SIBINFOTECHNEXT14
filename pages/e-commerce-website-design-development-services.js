
import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function EcommerceWebsiteDesignDevelopmentServices() {
  const metaTags = (
    <>
      <title>E-commerce Website Design & Development Company in Mumbai</title>
      <meta name="description" content="Create a stunning e-commerce website with SIB Infotech. Our design and development services ensure a seamless shopping experience and boost your online sales." />
      <meta name="keywords" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/e-commerce-website-design-development-services" />
      <meta property="og:title" content="E-commerce Website Design & Development Company in Mumbai" />
      <meta property="og:description" content="Create a stunning e-commerce website with SIB Infotech. Our design and development services ensure a seamless shopping experience and boost your online sales." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/e-commerce-website-design-development-services.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/e-commerce-website-design-development-services" />
      <meta property="twitter:title" content="E-commerce Website Design & Development Company in Mumbai" />
      <meta property="twitter:description" content="Create a stunning e-commerce website with SIB Infotech. Our design and development services ensure a seamless shopping experience and boost your online sales." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/e-commerce-website-design-development-services.jpg
" />
     <BreadcrumbSchema
        url="https://www.sibinfotech.com/e-commerce-website-design-development-services"
        breadcrumbTitle="E-commerce Website Design & Development Company in Mumbai"
        PageRatingSchema
        description={
          "Create a stunning e-commerce website with SIB Infotech. Our design and development services ensure a seamless shopping experience and boost your online sales."
        }
        reviewCount={"5187"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-white fontHeading">
                  E-commerce Website Designing Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated E-commerce Website Designing Company in India
                </h2>
                <div className="mt-4">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading  fontWeight700 fontHeading">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best{" "}
                    <span className="textChange">
                      E-commerce Website Designing
                    </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={'E-commerce Website Design & Development'}/>
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700 fontHeading">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best{" "}
              <span className="textChange">E-commerce Website Designing</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm  />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={'E-commerce Website Design & Development'} />
      </div>
      <section className="customPadding">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-7">
              <p className="customText">
                Well, there are high chances that the customer is now buying the
                same product online on an E commerce website which could be your
                competitor. Well, it is time now to get your business a
                smooth-functioning E-commerce website.
              </p>
              <div className="bgGrey spaceBg">
                <p className="customText">
                  Are you struggling to sell your product in a traditional shop?
                </p>
                <h4 className="fontHeading">
                  Are you waiting for your customer who didn't turned up since
                  ages?
                </h4>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ecommerceWeb">
                <img
                  className="imgAnimation"
                  src="assets/images/ecommerce-website-company-in-mumbai.svg"
                  alt="E-commerce website design and developement company in Mumbai"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customPadding bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h4 className="customHeading text-blue text-center customLineHeight2">
                With the help of{" "}
                <span className="text_red">E-Commerce website</span> you get an
                opportunity to have your products and services available to your
                customers <span className="text_red">24x7, 365 Days</span>.
              </h4>
              <div className="text-center">
                <Link
                  className="btnDiscuss"
                  href="https://www.sibinfotech.com/contact-us"
                >
                  let's Discuss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customPadding">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-5 text-center">
              <img
                className="imgFulll2 dropShadow imgAnimation"
                src="assets/images/ecommerce-website-company-in-delhi.svg"
                alt="E-Commerce Website Designing Company in India"
              />
            </div>
            <div className="col-lg-6 offset-lg-1 pl-0">
              <h4 className="customHeading ml-10 customLineHeight">
                Why <span className="text_red">Ecommerce website</span> is
                important for your brand?
              </h4>
              <ul className="bulletList">
                <li>It is more convenient</li>
                <li>It can glorifyyour Brand</li>
                <li>It is Scalable</li>
                <li>It increasesyour customer reach</li>
                <li>It gives you great marketing opportunities</li>
                <li>It is lesscostly than traditional shopping and selling</li>
                <li>Less time consuming</li>
                <li>Faster business expansion</li>
                <li>Low maintenance cost</li>
                <li>Multiple selling and marketing options</li>
                <li>Personalized customer experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="customPadding bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="customHeading customLineHeight">
                What is <span className="text_red">E-commerce website?</span>
              </h3>
              <p className="customText">
                E-commerce has changed the way businesses are runningglobally.
                Due to the increase in mobile and smartphones users, the global
                e-commerce market is expected to growexponentially.{" "}
                <strong>Electronic Commerce (E-Commerce)</strong> is a paperless
                exchange of business information via{" "}
                <strong>Electronic Data Interchange (EDI)</strong> and Internet
                related technologies.
              </p>
              <p className="customText">
                Developing business online has turned into the need of hour.
                Many startups as well as larger businesses have earned huge
                benefits from their own e-commerce websites where they can sell
                their products and services on global level.
              </p>
              <p className="customText">
                These websites can be tailored according to the requirements and
                kind of your business and therefore it has become the demand of
                every business.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                className="dropShadow imgFulll imgAnimation"
                src="assets/images/ecommerce-website-company-in-india.svg"
                alt="Best E-Commece Website Designing Services in India"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="customPadding radiudNone blueBg">
        <div className="containerFull">
          <div className="headerIndustry">
            <h3 className="customText white-text customLineHeight">
              We are one of the best E-commerce website designing and
              development companies in India. We at SIB Infotech, offer tailored
              mobile responsive and SEO friendly E-Commerce websites to help the
              business in targeting huge client base efficiently.
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/easy-to-use.svg"
                    alt="Top E-Commerce Website Designing Agency in Delhi"
                  />
                </div>
                <h5>Easy Navigation &amp; User Friendly</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/content-managment.svg"
                    alt="E-commerce Website Designing Agency in Mumbai"
                  />
                </div>
                <h5>Content Management</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/camparison.svg"
                    alt="Best E-commerce Website Designing Services Companies in Delhi"
                  />
                </div>
                <h5>Product Comparison</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/news-letter.svg"
                    alt="Top E-commerce Website Designing Agencies in Mumbai"
                  />
                </div>
                <h5>Newsletter Management</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/sales-report.svg"
                    alt="E-commerce Web Designing Agency in Mumbai"
                  />
                </div>
                <h5>Sales and Delivery Reporting</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/payment-gateway.svg"
                    alt="E-commerce Web Designing Agency in Delhi"
                  />
                </div>
                <h5>Multiple Payment Gateway Integration</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/mobile-friendly-web.svg"
                    alt="E-commerce Web Designing Agency in India"
                  />
                </div>
                <h5>Mobile Friendly</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/special-feature.svg"
                    alt="E-commerce Web Designing Company in Mumbai"
                  />
                </div>
                <h5>Special Offer Features</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/cart-reminder.svg"
                    alt="E-commerce Web Designing Company in Delhi"
                  />
                </div>
                <h5>Cart Reminders</h5>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="itemInduster servOffer">
                <div className="indutryRelatImg">
                  <img
                    src="assets/images/icons/wishlist.svg"
                    alt="E-commerce Web Designing Company in India"
                  />
                </div>
                <h5>Wishlist</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customPadding bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h4 className="customHeading text-blue text-center customLineHeight2">
                #1 Agency for{" "}
                <span className="text_red">
                  E-commerce Website Designing and Development
                </span>{" "}
                in India with offices in Mumbai and Delhi.
              </h4>
              <div className="text-center">
                <Link className="btnDiscuss" href="#">
                  Speak to our experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
