// import {Link} from 'react-router-dom';
import { CustomLayout } from "@/comps/CustomLayout";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";

export default function AdobeAirDevelopmentCompanyMumbiaIndia() {
  const metaTags = (
    <>
      <title>Adobe AIR Development Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Leverage cross-platform apps with Adobe AIR development services in India by SIB Infotech. Build dynamic, high-performance apps for desktop, mobile, and web."
      />
      <meta
        name="keywords"
        content="adobe air development services india,adobe air development services bangalore,adobe air development services mumbai,adobe air development services delhi,adobe air development services ,chennai,adobe air development services pune,adobe air development serv"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/adobe-air-development-companies-mumbai-india"
      />
      <meta
        property="og:title"
        content="Adobe AIR Development Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Leverage cross-platform apps with Adobe AIR development services in India by SIB Infotech. Build dynamic, high-performance apps for desktop, mobile, and web."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/adobe-air-development-companies-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/adobe-air-development-companies-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Adobe AIR Development Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Leverage cross-platform apps with Adobe AIR development services in India by SIB Infotech. Build dynamic, high-performance apps for desktop, mobile, and web."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/adobe-air-development-companies-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/adobe-air-development-companies-mumbai-india"
        breadcrumbTitle="Adobe AIR Development Services Company in Mumbai, India "
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
                <h3 className="heading fontWeight700 text-white">
                  Adobe Air Development
                </h3>
                <div className="mt-4">
                  <Link href="/#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
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
                    <span className="textChange">Adobe Air Development </span>{" "}
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
        <Breadcrumb
          Pagetitle={
            "Adobe AIR Development Services Company in Mumbai, India"
          }
        />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Adobe Air Development </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb  Pagetitle={'Adobe AIR Development Services Company in Mumbai, India'} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  SIB Infotech is a leading IT solutions company, engaged in
                  providing a wide range of Flash based solutions including
                  Adobe AIR Development.
                </p>
              </div>
            </div>
            <div className="col-md-1">&nbsp;</div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <p>
                Adobe Systems has introduced AIR runtime environment that
                provides the flash developers with the capability to develop
                rich Internet applications. Adobe AIR Development has made it
                possible to develop applications that can run outside the
                browser on multiple operating systems.
              </p>
              <p>
                Adobe AIR offers a wide range of interesting &amp; exciting
                features to engage customers without requiring them to make
                changes to their existing technology, people or processes. A
                wide range of applications ranging from on-line shopping to
                music management can benefit from Adobe AIR Development.
              </p>
              <p>
                SIB Infotech is equipped with years of experience in Flash
                development, a talented team of Flash developers, hi-tech
                offshore development center and a commitment to deliver advanced
                &amp; customized Adobe AIR Development solutions to clients
                across the globe.
              </p>
              <p>
                The company provides a wide range of Flash application
                development services such as Flash eCommerce Website
                Development, Flex Internet Application Development, Flash
                Multimedia Presentation, Flash Template Designing, Flash Banner
                Designing and More.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  alt="Adobe Air Development"
                  className="img-fluid"
                  src="assets/images/article-submission.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
