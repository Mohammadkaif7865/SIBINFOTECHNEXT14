import React from "react";

import Link from "next/link";
import BannerForm from "../comps/BannerForm";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import Breadcrumb from "@/comps/BreadCrumb";

export default function EmailMarketingServicesCompaniesMumbai() {
  const metaTags = (
    <>
      <title>Top Email Marketing Services Company in Mumbai, India</title>
      <meta
        name="description"
        content="Enhance your email campaigns with SIB Infotech, an effective email marketing company in Mumbai, India. Contact us for customized email marketing strategies!"
      />
      <meta
        name="keywords"
        content="email marketing solutions,email marketing solution,email marketing experts,email marketing expert,email marketing seo services,email marketing firms,email marketing services,email marketing companies,email marketing india,email marketing delhi,email marke"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://www.sibinfotech.com/email-marketing-services-companies-mumbai-india"
      />
      <meta
        property="og:title"
        content="Top Email Marketing Services Company in Mumbai, India"
      />
      <meta
        property="og:description"
        content="Enhance your email campaigns with SIB Infotech, an effective email marketing company in Mumbai, India. Contact us for customized email marketing strategies!"
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/og/email-marketing-services-companies-mumbai-india.jpg"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://www.sibinfotech.com/email-marketing-services-companies-mumbai-india"
      />
      <meta
        property="twitter:title"
        content="Top Email Marketing Services Company in Mumbai, India"
      />
      <meta
        property="twitter:description"
        content="Enhance your email campaigns with SIB Infotech, an effective email marketing company in Mumbai, India. Contact us for customized email marketing strategies!"
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/og/email-marketing-services-companies-mumbai-india.jpg"
      />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/email-marketing-services-companies-mumbai-india"
        breadcrumbTitle="Top Email Marketing Services Company in Mumbai, India"
        PageRatingSchema
        description={
          "Enhance your email campaigns with SIB Infotech, an effective email marketing company in Mumbai, India. Contact us for customized email marketing strategies!"
        }
        reviewCount={"5192"}
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
                  Email Marketing Services
                </h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                  Top Rated Email Marketing Company in Mumbai
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
                    <span className="textChange">Email Marketing Services</span>{" "}
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
          Pagetitle={"Email Marketing Services"}
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
              Best <span className="textChange">Email Marketing Services</span>{" "}
              Company in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb
          Pagetitle={"Email Marketing Services"}
        />
      </div>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="customHeading customLineHeight">
                SIB Infotech is the{" "}
                <span className="text_red">Email Marketing</span> Provider in
                India. We provide web-based mass mailing solutions with the
                database
              </h3>
              <p className="customText">
                Marketing is playing very important role in each and every
                business, Bulk Mailing or Email Marketing is relatively
                inexpensive and objective oriented standard of business of now
                days very vital part in Promotion and Exposure, because of bulk
                mailing you be able to show your product and services to end
                user.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="email-marketing-img-section">
                <img
                  className="image-full"
                  src="assets/images/email-marketing-company-in-india.svg"
                  alt="email-marketing-company-in-india"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-6">
              <div className="table-responsive">
                <table className="table text-center table-bordered">
                  <tbody>
                    <tr>
                      <th className="bgGreen" colspan="4">
                        <h4>Low Volume Plans</h4>
                      </th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Essential Email</th>
                      <th>Premium Email</th>
                      <th>Ultimate Email</th>
                    </tr>
                    <tr>
                      <th>Daily Email Limit</th>
                      <td>5000</td>
                      <td>10000</td>
                      <td>20000</td>
                    </tr>
                    <tr>
                      <th>Total Emails Per Month</th>
                      <td>150000</td>
                      <td>300000</td>
                      <td>600000</td>
                    </tr>
                    <tr>
                      <th>Price Per Email*</th>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                    </tr>
                    <tr className="table-last-row">
                      <td colspan="4">
                        Email Template Designing charges extra, as applicable
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bgBlueDarkRight bgBlueDarksmHeight">
                <p className="customText text-white">
                  Sending newsletter to our customer is not often seen as a way
                  for some businesses. Whereas other thinks it's irritating and
                  other finds it an expensive way of marketing. But it is more
                  effective because of only one single click of viewer can come
                  up to your website. The practice of sending customer
                  newsletters by email is seldom seen as a way forward for some
                  businesses. While some individuals think it can be annoying,
                  many businesses find it a cost effective marketing tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="customText">
                SIB Infotech also provides Email Database in India, offering you
                the email database as for each your need and if available with
                us. We also provide SMTP IP Solutions for you if you want Email
                Marketing through diverse range of Email Marketing Softwares.
                Our Email Marketing features include Online Stats, Report,
                Schedule Sending, Email Campaign Templates, and Contact List
                Management etc. our compact features also contain Autoresponder,
                ready for Survery, Custom Fields, Online Registration form etc.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="table-responsive">
                <table className="table text-center table-bordered">
                  <tbody>
                    <tr>
                      <th className="bgOrange" colspan="4">
                        <h4>High Volume Plans</h4>
                      </th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Essential Email</th>
                      <th>Premium Email</th>
                      <th>Ultimate Email</th>
                    </tr>
                    <tr>
                      <th>Daily Email Limit</th>
                      <td>50000</td>
                      <td>100000</td>
                      <td>200000</td>
                    </tr>
                    <tr>
                      <th>Total Emails Per Month</th>
                      <td>1500000</td>
                      <td>3000000</td>
                      <td>6000000</td>
                    </tr>
                    <tr>
                      <th>Price Per Email*</th>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                      <td>
                        <Link className="package-btn" href="/contact-us">
                          ENQIRE
                        </Link>
                      </td>
                    </tr>
                    <tr className="table-last-row-2">
                      <td colspan="4">
                        Email Template Designing charges extra, as applicable
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
