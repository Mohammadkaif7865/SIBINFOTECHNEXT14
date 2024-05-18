import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function Expertise() {
  return (
    <div>
        <Helmet>
            <title>Our Expertise</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Our Expertise</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Our Expertise </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Our Expertise </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row m-zero">
                <div className="col-md-4 col-6">
                    <div className="expertise-box">
                        <div className="expertise-icon">
                            <img src="assets/images/coding.png" alt="Web Development"/>
                        </div>
                        <div className="expertise-title">
                            <p>Web Development</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6">
                    <div className="expertise-box">
                        <div className="expertise-icon">
                            <img src="assets/images/responsive.png" alt="Web Design"/>
                        </div>
                        <div className="expertise-title">
                            <p>Web Design</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-6 ">
                    <div className="expertise-box">
                        <div className="expertise-icon">
                            <img src="assets/images/online-shop.png" alt="E-commerce"/>
                        </div>
                        <div className="expertise-title">
                            <p>E-commerce Portals</p>
                        </div>
                    </div>
                </div>
              <div className="col-md-4 col-6">
                  <div className="expertise-box">
                      <div className="expertise-icon">
                          <img src="assets/images/seo.png" alt="Search Engine Optimization"/>
                      </div>
                      <div className="expertise-title">
                          <p>Search Engine Optimization</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-6">
                  <div className="expertise-box">
                      <div className="expertise-icon">
                          <img src="assets/images/digital-campaign.png" alt="Digital Marketing"/>
                      </div>
                      <div className="expertise-title">
                          <p>Digital Marketing</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-4 col-6 ">
                  <div className="expertise-box">
                      <div className="expertise-icon">
                          <img src="assets/images/brand.png" alt="Corporate Branding"/>
                      </div>
                      <div className="expertise-title">
                          <p>Corporate Branding</p>
                      </div>
                  </div>
              </div>
          </div>
            </div>
         </section>
    </div>
  )
}
