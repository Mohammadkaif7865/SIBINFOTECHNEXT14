// import {Link} from 'react-router-dom';
import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb"
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function BootstrapDesigningServices() {
  const metaTags = (
    <>
      <title>Bootstrap Website Designing Services in Mumbai, India</title>
      <meta
        name="description"
        content="Create responsive, mobile-friendly websites with Bootstrap designing services by  SIB Infotech. Enhance user experience and attract more visitors effortlessly."
      />
      <meta name="keywords" content="Bootstrap Website Designing Services " />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/bootstrap-website-designing-services"
      />
      <meta
        property="og:title"
        content="Bootstrap Website Designing Services in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Create responsive, mobile-friendly websites with Bootstrap designing services by  SIB Infotech. Enhance user experience and attract more visitors effortlessly."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/bootstrap-website-designing-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/bootstrap-website-designing-services"
      />
      <meta
        property="twitter:title"
        content="Bootstrap Website Designing Services in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Create responsive, mobile-friendly websites with Bootstrap designing services by  SIB Infotech. Enhance user experience and attract more visitors effortlessly."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/bootstrap-website-designing-services.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/bootstrap-website-designing-services"
        breadcrumbTitle="Bootstrap Website Designing Services in Mumbai, India"
        PageRatingSchema
        description={
          "Create responsive, mobile-friendly websites with Bootstrap designing services by  SIB Infotech. Enhance user experience and attract more visitors effortlessly."
        }
        reviewCount={"5166"}
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
                <h1 className="heading fontWeight700 fontHeading text-white">
                  Bootstrap Designing Services
                </h1>
                <h2 className="small_heading fw-bold mt-lg-3 text-white">
                  Top Rated Bootstrap Designing Company in India
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
                    Best <span className="textChange">Bootstrap Designing</span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm
                
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-lg-none">
        <Breadcrumb Pagetitle={"Bootstrap Website Designing"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Bootstrap Designing</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={"Bootstrap Website Designing"}
        />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <h3 className="customHeaing">
                  What will Bootstrap Designing do for me?
                </h3>
              </div>
              <div className="row m-zero">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>It is easy to use</p>
                    </li>
                    <li>
                      <p>
                        As a number of Mobile devices are continuously growing
                        in popularity year after year there is a need to have a
                        responsive website
                      </p>
                    </li>
                    <li>
                      <p>The Speed of the Development increases</p>
                    </li>
                    <li>
                      <p>It is simple to integration</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        Bootstrap can be changed according to the specifications
                        of your project
                      </p>
                    </li>
                    <li>
                      <p>
                        Bootstrap is compatible with almost all the latest
                        version browsers such as Internet Explorer, Google
                        Chrome, Opera, Firefox, and Safari. It supports the
                        responsiveÂ web designÂ and dynamically adjusts the
                        layout of web pages by considering the characteristics
                        of the device used.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Best Bootstrap Designing Company in india"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="custom-content-title">
                <h4 className="customHeaing">
                  Our Bootstrap web designing services
                </h4>
              </div>
              <div className="icon-verical-box">
                <p>
                  We create responsive Bootstrap templates using HTML, and
                  nicely links it with Wordpress, &amp; relative CMS
                </p>
              </div>
              <div className="icon-verical-box">
                <p>Integrated Bootstrap Migration services</p>
              </div>
              <div className="icon-verical-box">
                <p>
                  Remodeling of Bootstrap templates and make it a perfect fit
                  for multiple devices
                </p>
              </div>
              <div className="icon-verical-box">
                <p>
                  We are good at transforming ordinary CSS to Bootstrap
                  framework
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
