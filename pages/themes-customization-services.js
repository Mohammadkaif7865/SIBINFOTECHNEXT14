import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function ThemeCustomizationServices() {
  const metaTags = (
    <>
      <title>Themes Customization Services | Tailored Website Designs</title>
      <meta
        name="description"
        content="Get professional theme customization services in Mumbai to enhance your website design. SIB Infotech delivers unique, responsive, and user-friendly solutions."
      />
      <meta name="keywords" content="Themes Customization" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/themes-customization-services"
      />
      <meta
        property="og:title"
        content="Themes Customization Services | Tailored Website Designs"
      />
      <meta
        property="og:description"
        content="Get professional theme customization services in Mumbai to enhance your website design. SIB Infotech delivers unique, responsive, and user-friendly solutions."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/themes-customization-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/themes-customization-services"
      />
      <meta
        property="twitter:title"
        content="Themes Customization Services | Tailored Website Designs"
      />
      <meta
        property="twitter:description"
        content="Get professional theme customization services in Mumbai to enhance your website design. SIB Infotech delivers unique, responsive, and user-friendly solutions."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/themes-customization-services.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/themes-customization-services"
        breadcrumbTitle="Themes Customization Services | Tailored Website Designs"
        PageRatingSchema
        description={
          "Get professional theme customization services in Mumbai to enhance your website design. SIB Infotech delivers unique, responsive, and user-friendly solutions."
        }
        reviewCount={"5294"}
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
                  Themes Customization
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Themes Customization Company in India
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
                    Best{" "}
                    <span className="textChange">Themes Customization </span>{" "}
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
        <Breadcrumb Pagetitle={"Themes Customization Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Themes Customization </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Themes Customization Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech's Themes Customization Services will help you
                  making custom changes for the theme to be exactly as you want.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                SIB offers the best Theme Customization Services. We have many
                tools by which we offer the customization such as Wordpress. One
                can use many aspects of design in creating theme customizations,
                from graphics to still images, to life like images, a caricature
                to anything that goes beyond imagination. We often tend to
                rebuild our websites to give its freshness to the user. With
                theme customization, one can save the web layout design, for it
                will be customized and not change often. It saves time, effort
                and money. It can be used for personalized web pages,
                e-commerce, social networking websites, educational websites and
                many others.
              </p>
            </div>
            <div className="col-md-6 order-2 order-lg-1">
              <p>
                Every business has a different requirement. This is because the
                services and products they offer are unique. Today the
                competition is rising rapidly. The necessity here is to make the
                statement. The statement that will make your potential clients
                choose you. We at SIB Infotech will help you in making that
                statement. This will impact your business future in a very
                profitable manner.
              </p>
              <p>
                SIB Infotech gives you the opportunity with best of the
                experienced designers in the industry to customize your theme of
                the web page or website you use. You can do it for your personal
                sites and for business, trading, NGOs etc. It is an inexpensive
                way to keep your site updated, and does not consume much time
                and effort. This gives you a uniqueness to display yourself
                well, along with describing your views, thoughts, business
                model, etc. So, become designers of your website and make us
                customize the theme chosen by you.
              </p>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Themes Customization"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Themes Customization"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="custom-content-title">
                <p>Why Choose Sib Infotech</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Quality</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Security</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Affordability</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icon-verical-box">
                    <p>Easy Set up</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Flexibility</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>Future-Proofing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
