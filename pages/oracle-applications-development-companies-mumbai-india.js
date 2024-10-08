import React from 'react';

import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function OracleApplicationDevelopmentCompanies() {
  const metaTags = (
    <>
      <title>Top Oracle Applications Development Company in Mumbai, India</title>
      <meta name="description" content="Partner with SIB Infotech, a leading Oracle applications development company in Mumbai. Optimize your business processes with expert solutions. Contact today!" />
      <meta name="keywords" content="oracle application development services,oracle application development service,offshore oracle application development,oracle application development companies,oracle application development company,oracle application development india,oracle application" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/oracle-applications-development-companies-mumbai-india" />
      <meta property="og:title" content="Top Oracle Applications Development Company in Mumbai, India" />
      <meta property="og:description" content="Partner with SIB Infotech, a leading Oracle applications development company in Mumbai. Optimize your business processes with expert solutions. Contact today!" />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/oracle-applications-development-companies-mumbai-india.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/oracle-applications-development-companies-mumbai-india" />
      <meta property="twitter:title" content="Top Oracle Applications Development Company in Mumbai, India" />
      <meta property="twitter:description" content="Partner with SIB Infotech, a leading Oracle applications development company in Mumbai. Optimize your business processes with expert solutions. Contact today!" />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/oracle-applications-development-companies-mumbai-india.jpg" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Oracle Application Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                      <div className="bannerForm">
                          <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                          <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Oracle App Development </span> Company in India</strong></p>
                          <BannerForm/>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Oracle App Development </span> Company in India</strong></p>
              <BannerForm/>
          </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                <div className="col-md-12">
                    <div className="custom-content-title">
                        <p>Services we provide</p>
                    </div>

                    <div className="row">
                      
                      <div className="col-md-6 order-lg-1 order-2">
                        <p>
                          At SIB Infotech we are well versed with the implementation processes for the Oracle Application products. Our professionals have the capabilities to provide the complete Life Cycle of Development and Implementation processes for the said set of Applications using Oracle.</p>
                        <p>
                          Our professionals are trained and experienced in Oracle Applications with the relevant skills such as Functional, Technical, Business Analysis and Project Management. And the main focus is exclusively on Oracle Applications.</p>
                        <p>
                          We boost of having build pragmatic implementation methodology based on market standards. With the help of this we provide a core process, which can be adapted to meet the specific enterprise requirements and environment of the client.</p>
                      </div>
                      <div className="col-md-6 order-lg-2 order-1">
                        <div className="custom-page-img">
                          <img alt="Oracle Application Development Services in India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="custom-page-img">
                  <img alt="Oracle Application Development Services in Delhi" className="img-fluid" src="assets/images/article-submission.png"/></div>
              </div>
              <div className="col-md-6">
                <p>
                  SIB Infotech has developed a hard core competency with focus on Oracle Application products modules to impart specialized and detailed product development to its esteemed cliental with emphasis on developing good customer relationship. This way we maintain several pre-developed Oracle Application which very well suit the environments of our client's with a very strict view to provide on-site support to them.</p>
                <p>
                  As a highly experienced and most cost effective team of experts, we also integrate your web pages and social networking pages with your Oracle database and other CMS or CRM. We also embed analytical tools and other applications to help you understand customer dynamics and trends as well as sales force performance and other related issues. All this will help you attain your business goal and requirement.</p>
              </div>
            </div>
            </div>
         </section>
    </CustomLayout>
  )
}
