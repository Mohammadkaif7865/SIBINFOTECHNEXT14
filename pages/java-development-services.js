import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function JavaDevelopmentServices() {
  return (
    <div>
        <Helmet>
            <title>JAVA Development Services</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Java Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Java Development Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Java Development Services </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-10">
                     <div className="service-sub-title">
                        <p>We have an excellent team of Java experts who are qualified and have a hands-on experience handling various Java projects.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
              <div className="row">
                  <div className="col-md-6">
                      <div className="custom-content-title">
                          <p>Our services in core JAVA Platform</p>
                      </div>
                      <ul>
                          <li>
                              <p>JAVA, Swings, Applets, TCP/IP Developments</p>
                          </li>
                          <li>
                              <p>Tomcat, WebSphere, JBoss, SunOne, BEA Weblogic for Web/Application Servers</p>
                          </li>
                          <li>
                              <p>J2ME (CLDC/CDC), J2MEPolish, Blackberry for mobile platforms</p>
                          </li>
                          <li>
                              <p>Web Application Development,Â&nbsp;Desktop Application Development, System Programming Solution,Â&nbsp;JAVA Embedded technology solution, Components, className Utility</p>
                          </li>
                      </ul>
                  </div>
                  <div className="col-md-6">
                      <div className="custom-page-img">
                          <img src="assets/images/article-submission.png" alt="Java Development Services" className="img-fluid"/>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                    <div className="custom-content-title">
                        <p>Our Experts Guide will help you out</p>
                    </div>

                    <div className="row m-zero">
                        <div className="col-md-6">
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Java web services development</p>
                                <p>We develop Web Services like Restful, SOAP, XML and WSDL using development tools like Net Beans, Eclipse.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Java Application Maintenance </p>
                                <p>We provide maintenance, support and data migration services that will help you to grow your business</p>
                            </div>
                        </div>
                    </div>

                    <div className="row m-zero">
                        <div className="col-md-6">
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Java Web Application Development </p>
                                <p>we provide you end-to-end application development for empowerment of your business</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">Java desktop Application Development</p>
                                <p>we develop multi-platform desktop applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         </section>
    </div>
  )
}
