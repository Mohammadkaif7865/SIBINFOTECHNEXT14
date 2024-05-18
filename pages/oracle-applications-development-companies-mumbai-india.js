import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function OracleApplicationDevelopmentCompanies() {
  return (
    <div>
        <Helmet>
            <title>Oracle Application Development Services Companies India USA SIB Infotech</title>
            <meta name="keywords" content="oracle application development services,oracle application development service,offshore oracle application development,oracle application development companies,oracle application development company,oracle application development india,oracle application "/>
            <meta name="description" content="We have the capabilities to develop Oracle Applications and we provide solutions like ERP and CRM. At SIB Infotech we are well versed with the implementation processes for the Oracle Application products. Our professionals are trained and experienced in Oracle Applications with the relevant skills such as Functional, Technical, Business Analysis and Project Management. And the main focus is exclusively on Oracle Applications."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Oracle Application Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
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
    </div>
  )
}
