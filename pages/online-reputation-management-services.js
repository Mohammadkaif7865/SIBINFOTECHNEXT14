import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function OnlineReputationManagementServices() {
  const metaTags = (
    <>
      <title>Top Online Reputation Management Services in Mumbai, India</title>
      <meta
        name="description"
        content="Restore, protect, and improve your online reputation with SIB Infotech—Mumbai’s trusted ORM company. We manage reviews, monitor mentions, and boost brand credibility."
      />
      <meta
        name="keywords"
        content="online reputation management, Online Reputation Experts, online reputation management, reputation management services, Reputation repair, remove negative comment, remove google content"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/online-reputation-management-services
"
      />
      <meta
        property="og:title"
        content="Top Online Reputation Management Services in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Restore, protect, and improve your online reputation with SIB Infotech—Mumbai’s trusted ORM company. We manage reviews, monitor mentions, and boost brand credibility."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/online-reputation-management-services.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/online-reputation-management-services"
      />
      <meta
        property="twitter:title"
        content="Top Online Reputation Management Services in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Restore, protect, and improve your online reputation with SIB Infotech—Mumbai’s trusted ORM company. We manage reviews, monitor mentions, and boost brand credibility."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/online-reputation-management-services.jpg"
      />
      <BreadcrumbSchema
        url="https:/www.sibinfotech.com/online-reputation-management-services"
        breadcrumbTitle="Top Online Reputation Management Services in Mumbai, India"
        PageRatingSchema
        description={
          "Restore, protect, and improve your online reputation with SIB Infotech—Mumbai’s trusted ORM company. We manage reviews, monitor mentions, and boost brand credibility."
        }
        reviewCount={"5245"}
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
                  Online Reputation Management Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Online Reputation Management Company in India
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
                      Online Reputation Management
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
      <div className="d-lg-none ">
        <Breadcrumb Pagetitle={" Online Reputation Management"} />
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
              <span className="textChange">Online Reputation Management</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={" Online Reputation Management"} />
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <p className="customText">
                The online image of your brand or business is the key player
                that has a great impact on the success of your business in the
                digital world. More precisely, your brand becomes what people
                say about it online.
              </p>
              <p className="customText">
                When the users search for your business online, the first
                impression is shaped by the reviews and comments that influence
                your brand image to a major extent. Online Reputation Management
                or ORM works to exterminate online negative feedback, reviews,
                and comments about your business and promote positive ones. The
                ORM tactics play an important role as it sheds the best possible
                light on your brand or company when people search you online.
              </p>
              <p className="customText">
                Online Reputation Management is parallel to the public relations
                practices which include influencing or controlling the brand
                image on the online platforms. It includes reducing the
                negativity and false reviews on the SERPs.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="image-full"
                src="assets/images/best-orm-company-in-delhi.svg"
                alt="online-reputation-mangement-company-in-delhi"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p className="customText">
                At SIB Infotech we consider the reputation of a company is a
                company's greatest asset and its fortification being the
                priority. Reputation plays a very important role in any
                businesses success. 85% of the consumers rely on online reviews
                and 49% of consumers look for at least a 4-star rating to
                purchase any product or choose any business for availing
                services.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="customText">
                The online reputation of your business is the determinant of how
                others look upon your company. Online reputation management is a
                very complicated task and calls for experts that can handle any
                situations with ease. The success of any business is dependent
                on its brand reputation and user engagement. Online or digital
                existence of the brand plays a very important role in achieving
                goals which ultimately lead to success.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img
                className="image-full"
                src="assets/images/orm-companyinidia.svg"
                alt="Online Reputation Management"
              />
            </div>
            <div className="col-lg-6">
              <p className="customText">&nbsp;</p>
              <p className="customText">
                Public relations, customer satisfaction, and feedback are the
                backbone for reputation consistency. Online Reputation
                Management or ORM focuses on the management of the reputation
                and brand image of any company over the internet.
              </p>
              <p className="customText">
                Brands usually prefer ORM Services when they are facing
                criticism, negative comments, and feedback. The ORM strategies
                bring down the negative comments from page 1 to page
                no-where-to-be-found by shaping the perception of the audience
                and influencing information that is found to be misleading on
                the search engines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
