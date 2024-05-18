import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function MobileOptimizationTechniques() {
  return (
    <div>
        <Helmet>
            <title>Mobile Website Optimization Techniques Mumbai Delhi Pune India SIB Infotech</title>
            <meta name="keywords" content="website design delhi,website design and development,website design companies,web design service,website design in delhi,website design company in delhi,flash website design,Web Design Company, Website Development, E-Commerce Solution, Web Development Outs"/>
            <meta name="description" content="Mobile Website designing services India, SIB Infotech offers, mobile phones based website development services, mobile websites developed for WAP, XHTML browsers for mobile phones, PDA and smartphones, coded in WML and XHTML MP (Mobile profiles)"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Mobile Optimization Techniques</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Mobile Optimization Techniques </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Mobile Optimization Techniques </span> Company in India</strong></p>
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
                    <p>
                      At SIB Infotech, we provide specialist services helping our clients ensure their SEO works across all devices and specifically targets users of smart devices.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
               <div className="row">
                <div className="col-md-6">
                  <p>
                    We understand everything to do with search. It’s not an add-on to our business – it’s the core of what we do. Search engine optimisation for mobile phones, smartphones and handheld devices requires an in-depth understanding of how user behaviour differs from PC browsing.</p>
                  <div className="custom-content-title">
                    <p>
                      Our mobile SEO services include</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Mobile optimisation audits</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Local SEO</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Accessibility and usability consulting</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Multilingual mobile site optimisation</p>
                  </div>
                  <div className="icon-verical-box">
                    <p>
                      Mobile website design</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Mobile Optimization Techniques in India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
               <div className="row">
                  <div className="col-md-12">
                    <div className="custom-content-title">
                      <p>
                        We at SIB Infotech, use the following techniques for optimization of mobile websites</p>
                    </div>
                    <div className="row m-zero">
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <p>
                              Ununderstand mobile design limitations</p>
                          </li>
                          <li>
                            <p>
                              Mobile users hate scrolling.</p>
                          </li>
                          <li>
                            <p>
                              Feature timely information prominently.</p>
                          </li>
                          <li>
                            <p>
                              Render images on a percentage basis, not an absolute pixel basis.</p>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li>
                            <p>
                              Cater to mobile SEO needs</p>
                          </li>
                          <li>
                            <p>
                              Different Mobile keywords</p>
                          </li>
                          <li>
                            <p>
                              Compact HTML or XHTML mobile files must be present on your site.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
         </section>
    </div>
  )
}
