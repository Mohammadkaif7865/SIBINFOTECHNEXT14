import React from "react";
import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function LinkedinMarketing() {
  const metaTags = (
    <>
      <title>LinkedIn Marketing Services in Mumbai, India | SIB Infotech</title>
      <meta
        name="description"
        content="Boost your brand presence with LinkedIn marketing services in India by SIB Infotech. Engage professionals and drive leads through our tailored strategies."
      />
      <meta name="keywords" content="Linked Marketing" />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/linkedin-marketing"
      />
      <meta
        property="og:title"
        content="LinkedIn Marketing Services in Mumbai, India | SIB Infotech"
      />
      <meta
        property="og:description"
        content="Boost your brand presence with LinkedIn marketing services in India by SIB Infotech. Engage professionals and drive leads through our tailored strategies."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/linkedin-marketing.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/linkedin-marketing"
      />
      <meta
        property="twitter:title"
        content="LinkedIn Marketing Services in Mumbai, India | SIB Infotech"
      />
      <meta
        property="twitter:description"
        content="Boost your brand presence with LinkedIn marketing services in India by SIB Infotech. Engage professionals and drive leads through our tailored strategies."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/linkedin-marketing.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/linkedin-marketing"
        breadcrumbTitle="LinkedIn Marketing Services in Mumbai, India | SIB Infotech"
        PageRatingSchema
        description={
          "Boost your brand presence with LinkedIn marketing services in India by SIB Infotech. Engage professionals and drive leads through our tailored strategies."
        }
        reviewCount={"5229"}
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
                  Linked Marketing
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Linked Marketing Company in India
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
                    Best <span className="textChange">Linked Marketing</span>{" "}
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
        <Breadcrumb Pagetitle={"LinkedIn Marketing Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading  fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              Best <span className="textChange">Linked Marketing</span> Company
              in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"LinkedIn Marketing Services"} />
      </div>
      <section id="sib-custom-page">
        <div className="containerFull">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="service-sub-title">
                <p>
                  The first thing you should do as a Social Seller is enhance
                  your LinkedIn profile. It makes sure they create a good
                  impression.
                </p>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <p>
                LinkedIn was founded on December 28, 2002. It was launched on
                May 5, 2003. LinkedIn is actually Business and employee
                oriented. Its use for employment purposes, business connectivity
                breaking all barriers. Today LinkedIn has 500 Million worldwide.
                Monthly LinkedIn has 250 Million users. Every 2-second new
                member is joins LinkedIn. 70% of Linkedin users are from Outside
                of Us. India has one of the highest numbers of Linkedin users.
                SIB Infotech will make your profile amazing.
              </p>
            </div>
            <div className="col-md-6">
              <div className="custom-page-img">
                <img
                  src="assets/images/article-submission.png"
                  alt="Linkedin Marketing Company in India"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="custom-content-title">
                <h2 className="mainCustom">
                  SIB Infotech has the following procedure towards promoting
                  your brand
                </h2>
              </div>

              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <h3 className="custom-box-title text_light_blue">
                      Power Up Your LinkedIn Profile
                    </h3>
                    <p>
                      Our experts will help you to build a powerful profile.
                      This will lead more customers to visit your profile. You
                      just need to be clear regarding your companyâ€™s
                      objective. Also the services you wish to offer to your
                      clients.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Explore highly targeted customers and connections
                    </p>
                    <p>
                      SIB Infotech will help your business to provide the
                      connectivity which will boost your growth rate. You need
                      to build relation with the customers who are be ready to
                      spend on your business.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Stay on customers' radars
                    </p>
                    <p>
                      You need to stay connected with your clients. Keep a track
                      on their requirement. Provide them with your services.
                      Prioritize users who have shown interest in your brand.
                      Keep them engage. Our experts will do this for you
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Grow your email marketing list
                    </p>
                    <p>
                      Our experts believe that you need to be crafty. Write and
                      message them for being connected to us. Appreciate them
                      always. Mail them regarding your services. Keep them
                      updated and keep on adding customers to your email list.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Use Sponsored Updates
                    </p>
                    <p>
                      Our experts can target interested industries. A sponsored
                      update is an excellent way to promote leadership content
                      useful primarily to the targeted audience with a strong
                      call to take action.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Post high-quality content
                    </p>
                    <p>
                      We will provide your profile with rich, sensible content
                      that will keep your connections interested.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row m-zero">
                <div className="col-md-6">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title text_light_blue">
                      Join and Create group's Stay active
                    </p>
                    <p>
                      We will keep your brand in groups that will be beneficial
                      to you. We will create a group, community that will keep
                      users engage constantly with satisfactory discussions.
                    </p>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
