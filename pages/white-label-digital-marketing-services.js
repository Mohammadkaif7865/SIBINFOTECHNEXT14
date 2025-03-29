import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import About2 from "@/comps/WhiteLabel/About";
import Solution from "@/comps/WhiteLabel/Solution";
import Cta from "@/comps/WhiteLabel/Cta";
import WhyChoose from "@/comps/WhiteLabel/WhyChoose";
import Partnership from "@/comps/WhiteLabel/Partnership";
import KeyBenifits from "@/comps/WhiteLabel/KeyBenifits";
import BrandBuild from "@/comps/WhiteLabel/BrandBuild";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/WhiteLabel/Faq";
import Cta2 from "@/comps/WhiteLabel/Cta2";
import CaseStudy from "@/comps/WhiteLabel/CaseStudy";
import DeliverGrowth from "@/comps/WhiteLabel/DeliverGrowth";
import Industries from "@/comps/WhiteLabel/Industries";
import Tools from "@/comps/WhiteLabel/Tools";
import Featured from "@/comps/WhiteLabel/Featured";

export default function TwoDAnimationServicesMumbaiIndia() {
  const metaTags = (
    <>
      <title>White Label Digital Marketing Services | SIB Infotech</title>
      <meta
        name="description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        name="keywords"
        content="2d animation services india,2d animation services bangalore,2d animation services mumbai,2d animation services delhi,2d animation services ,chennai,2d animation services pune,2d animation services hyderabad,2d animation india,2d animation bangalore,2d animation"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
      />
      <meta
        property="og:title"
        content="2D Animation Services Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/2d-animation-services-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="2D Animation Services Company Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/2d-animation-services-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/2d-animation-services-mumbai-india"
        breadcrumbTitle="2D Animation Services Company Mumbai, India | SIB Infotech "
        PageRatingSchema
        description={
          "Bring your ideas to life with 2D animation services by SIB Infotech. We create captivating animations for videos, ads, and presentations to engage the audience."
        }
        reviewCount={"5155"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign whiteLable">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                {/* <span className="fw-bold title text-white ">Your Trusted</span> */}

                <h1 className="mt-3 heading fontWeight700 text-white ">
                  Your Trusted White Label Marketing Agency in India <br />{" "}
                  <span className="text_red">Grow Faster, Scale Smarter!</span>
                </h1>
                <p
                  className="small_heading  mt-3 text-white"
                  style={{
                    maxWidth: "80%",
                  }}
                >
                  Power Your Agency’s Growth with Premium White Label SEO, PPC &
                  Social Media Services in India
                </p>
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
                    <span className="textChange">White Label Marketing </span>{" "}
                    Company in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"White Label Digital Marketing Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">2D Animation Services </span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block ">
        <Breadcrumb Pagetitle={"White Label Digital Marketing Services"} />
      </div>
      <About2 />

      <Solution />
      <WhyChoose />
      <Cta2 />
      <Partnership />
      <KeyBenifits />
      <BrandBuild />
      <Cta />
      <CaseStudy />
      <DeliverGrowth />
      <Industries />
      <Tools />
      <Featured />
      <div className="bg_light_gray">
        <Testimonials />
      </div>
      <Faq />
    </CustomLayout>
  );
}
