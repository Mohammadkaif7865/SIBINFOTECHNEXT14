import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function WebsiteMaintenanceServices() {
  const metaTags = (
    <>
      <title>
        Website Maintenance Services in Mumbai, India | SIB Infotech
      </title>
      <meta
        name="description"
        content="Ensure your website runs smoothly with expert website maintenance services in Mumbai from SIB Infotech. Regular updates, security, and performance optimization."
      />
      <meta name="keywords" content="Website Maintenance Services" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/website-maintenance-services"
      />
      <meta
        property="og:title"
        content="Website Maintenance Services in Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Ensure your website runs smoothly with expert website maintenance services in Mumbai from SIB Infotech. Regular updates, security, and performance optimization."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/website-maintenance-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/website-maintenance-services"
      />
      <meta
        property="twitter:title"
        content="Website Maintenance Services in Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Ensure your website runs smoothly with expert website maintenance services in Mumbai from SIB Infotech. Regular updates, security, and performance optimization."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/website-maintenance-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/website-maintenance-services"
        breadcrumbTitle="Website Maintenance Services in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Ensure your website runs smoothly with expert website maintenance services in Mumbai from SIB Infotech. Regular updates, security, and performance optimization."
        }
        reviewCount={"5310"}
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
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Website Maintenance Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                Top Rated Website Maintenance Company in India

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
                <h4 className="small_heading  fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    Best <span className="textChange">Website Maintenance</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Website Maintenance "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Website Maintenance</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Website Maintenance "} />
      </div>
      <section>
        <div className="containerFull">
          <h3 className="customHeading customLineHeight text-center">
            All web sites necessitate to be{" "}
            <span className="text_red">Maintained</span> to keep the website
            content alive. As a result, some websites need daily updates while
            others only need periodic <span>Maintenance</span>
          </h3>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="customText">
                Our Website Maintenance Services provides you revising, editing,
                or changing existing web pages to remain your website
                reorganized with brand new content. The addition of new web
                pages is also main part of website maintenance.
              </p>
              <p className="customText">
                SIB Infotech bestow you gainful website maintenance and take on
                the task of routine website maintenance to existing web sites.
                Our website maintenance services make sure that your site will
                remain always current and your project continues within budget.
                Our activities includes campaign to search engines and
                directories, content modification, reform web pages, image
                optimization, and 24X7 technical support.
              </p>
              <p className="customText">
                We make able our customers to update certain content on their
                site without having any technical skills or without having to
                call us. Our developers will set-up your site under advanced
                technology so anyone one can make personal updates for general
                content.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="website-maintainenace-img">
                <img
                  className="image-full"
                  src="assets/images/website-maintenance-company-in-india.png"
                  alt="Website-Maintenance-Services-Company-In-India"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <h3 className="customHeading text-center">
            Our <span className="text_red">Website Maintenance</span> services
          </h3>
          <div className="row">
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-seasonal-changes.svg"
                  alt="Website-Maintenance-Services-Company-In-Delhi"
                />
                <p className="customText">Seasonal Changes</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-bloging-content.svg"
                  alt="Website-Maintenance-Services-Company-In-Mumbai"
                />
                <p className="customText">Blogging Content</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-blog-mederation.svg"
                  alt="Website-Maintenance-Services-Company"
                />
                <p className="customText">Blog moderation</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-update-content.svg"
                  alt="Website-Maintenance-Services-Firm-In-India"
                />
                <p className="customText">Updating of Content</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-update-images.svg"
                  alt="Website-Maintenance-Services-Firm-In-Delhi"
                />
                <p className="customText">Updating of Images and Graphics</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-latest-product.svg"
                  alt="Website-Maintenance-Services-Firm-In-India"
                />
                <p className="customText">Showcase of Latest Products</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-latest-services.svg"
                  alt="Website-Maintenance-Services-Firm-In-Delhi"
                />
                <p className="customText">
                  Showcase of Latest Services offered
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-latest-offer.svg"
                  alt="Website-Maintenance-Services-Firm-In-India"
                />
                <p className="customText">Updating of Latest Offers</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-website-features.svg"
                  alt="Website-Maintenance-Services-Firm-In-Mumbai"
                />
                <p className="customText">
                  Addition of Latest Features to your Websites
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-nes-and-event.svg"
                  alt="Website-Maintenance-Services-Agency-In-Delhi"
                />
                <p className="customText">News, Specials and Events</p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-bug-fixing.svg"
                  alt="Website-Maintenance-Services-Agency-In-India"
                />
                <p className="customText">
                  Fixing of Bugs/Issues in the website
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/web-maintenance-programming-issue.svg"
                  alt="Website-Maintenance-Services-Firm-In-Mumbai"
                />
                <p className="customText">Programming issues in PHP, CMS</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <div className="maintenance-box">
                <img
                  src="assets/images/icons/websiteMaintenance-online-store.svg"
                  alt="Website-Maintenance-Services-Agency"
                />
                <p className="customText">Manage &amp; Update Online Store</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
