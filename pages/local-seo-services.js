import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";
import Image from "next/image";
import Intro from "@/comps/local-seo/Intro";
import Cta from "@/comps/local-seo/Cta";
import Services from "@/comps/local-seo/Services";
import Benefits from "@/comps/local-seo/Benefits";
import WhyChoose from "@/comps/local-seo/WhyChoose";
import Process from "@/comps/local-seo/Process";
import Cta2 from "@/comps/local-seo/Cta2";
import Cta3 from "@/comps/local-seo/Cta3";
import Faqs from "@/comps/local-seo/Faqs";
import Old from "@/comps/local-seo/Old";

export default function LocalSeoServices() {
  const metaTags = (
    <>
      <title>Best Local SEO Company India | Local SEO Services in Mumbai</title>
      <meta
        name="description"
        content="SIB Infotech is among the best SEO companies in India that expertise in Local SEO services bringing your company listing to the top of Google Maps listings."
      />
      <meta
        name="keywords"
        content="Local SEO services in India, Local SEO Services in India, Local Marketing Services India, Best Local SEO Agency"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/local-seo-services
"
      />
      <meta
        property="og:title"
        content="Best Local SEO Company India | Local SEO Services in Mumbai"
      />
      <meta
        property="og:description"
        content="SIB Infotech is among the best SEO companies in India that expertise in Local SEO services bringing your company listing to the top of Google Maps listings."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/local-seo-services.jpg
"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/local-seo-services"
      />
      <meta
        property="twitter:title"
        content="Best Local SEO Company India | Local SEO Services in Mumbai"
      />
      <meta
        property="twitter:description"
        content="SIB Infotech is among the best SEO companies in India that expertise in Local SEO services bringing your company listing to the top of Google Maps listings."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/local-seo-services.jpg"
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/local-seo-services"
        breadcrumbTitle="Best Local SEO Company India | Local SEO Services in Mumbai"
        PageRatingSchema
        description={
          "SIB Infotech is among the best SEO companies in India that expertise in Local SEO services bringing your company listing to the top of Google Maps listings."
        }
        reviewCount={"5230"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign lseo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Boost Your Business Visibility with the Best Local SEO
                  Services in India!
                </h1>
                <ul className="list_local_seo title fontWeight600 col-lg-10 ps-lg-3">
                  <li>Dominate Local Search Results</li>
                  <li>Attract Nearby Customers</li>
                  <li>Drive More Walk-Ins</li>
                  <li>Increase Store Visits</li>
                  <li>Increase Sales & Leads</li>
                </ul>

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
                  Accelerate Your Local Business 
                </h4>
                <p>
                  with the 
                  <strong className="fontWeight600 text_red">
                    <span className="textChange"> Best Local SEO Company in India</span>{" "}
                    
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Local SEO Services "} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Local SEO Services</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Local SEO Services "} />
      </div>
      <div className="bg_gray py-4">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="icon_grid_lseo">
                <div class="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/local-seo-resturaent.svg"
                      alt="Restaurants near me"
                    />
                  </div>
                  <p>Restaurants near me</p>
                </div>
                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/law.png"
                      alt="Lawyer Near me"
                    />
                  </div>
                  <p>Lawyer Near me</p>
                </div>
                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/local-seo-doctor.svg"
                      alt="Doctors near me"
                    />
                  </div>
                  <p>Doctors near me</p>
                </div>

                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/florist.png"
                      alt="Florist Near me"
                    />
                  </div>
                  <p>Florist Near me</p>
                </div>

                <div className="item">
                  <div className="item_icon">
                    <Image
                      width={128}
                      height={128}
                      src="/assets/images/icons/hospital.png"
                      alt="Hospital Near me"
                    />
                  </div>
                  <p>Hospital Near me</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <h2 className="sub_heading fontHeading text-center  fontWeight700 ">
              Your Trusted <span className="text_red">Local SEO Optimization Experts </span>{" "}
                Since 2005!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <Services />
      <Cta />
      <Benefits />
      <WhyChoose />
      <Process />
      <Cta3/>
      {/* <Old/> */}
      <Faqs/>
      <Cta2 />
    </CustomLayout>
  );
}
