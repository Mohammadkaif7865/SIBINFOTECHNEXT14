import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function AjaxDevelopmentCompaniesMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>AJAX Development Services Companies India London USA UK Asia</title>
            <meta name="keywords" content="ajax development services,ajax development service,offshore ajax development,ajax development companies,ajax development company,ajax development india,ajax development delhi,ajax development mumbai,ajax development chennai,ajax development bangalore,ajax"/>
            <meta name="description" content="SIB Infotech excels in AJAX web development. Our expert team of AJAX programmers has built up and delivered ecommerce shopping applications in open source (oscommerce) with AJAX web programming to turn the application flexible and faster."/>
            <link rel="canonical" href="https://www.sibinfotech.com/ajax-development-companies-mumbai-india" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Ajax Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Ajax Development Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Ajax Development Services </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row">
                <div className="col-md-1">
                  &nbsp;</div>
                <div className="col-md-10">
                  <div className="service-sub-title">
                    <p>AJAX or Asynchronous JavaScript and XML is an important tool of web development which helps in creating and developing interactive websites having a faster response time</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 order-2 order-lg-1">
                  <p>
                    SIB Infotech recognizes the importance of modern web technologies and helps customers to create amazing, dynamic and interactive websites with Ajax</p>
                  <div className="custom-content-title">
                    <p>
                      Some benefits of using AJAX are</p>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Better speed and performance</p>
                    </li>
                    <li>
                      <p>
                        More responsive, user-friendly websites and applications</p>
                    </li>
                    <li>
                      <p>
                        Won't slow down with limited bandwidth.&nbsp;With AJAX callbacks, the server won’t get overloaded by requests, which would otherwise cause the app to slow down.</p>
                    </li>
                    <li>
                      <p>
                        Browser and platform independent</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 order-lg-2 order-1">
                  <div className="custom-page-img">
                    <img alt="Ajax Development Company" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Ajax Development Company" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                <div className="col-md-6">
                  <div className="custom-content-title">
                    <p>
                      In affiliate marketing services there are three main points which surely bring exact solutions in respect of high diverted traffic.</p>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Cost per Action/Cost per Lead (CPA/CPL)</p>
                    </li>
                    <li>
                      <p>
                        Contextual Advertising</p>
                    </li>
                    <li>
                      <p>
                        Revenue Sharing</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
