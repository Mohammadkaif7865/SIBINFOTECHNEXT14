import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function FlashIntroDevelopmentMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Flash Intro Development Company</title>
            <meta name="keywords" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Flash Intro Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Intro Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Intro Services </span> Company in India</strong></p>
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
                        <p>SIB Infotech is a leading specialist in Flash application development including Flash web introduction.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <p>The company provides end-end services in Flash development for clients across diverse industry segments. The company is promoted by experienced IT professionals who have vast experience in delivering offshore IT projects.
                     </p>
                     <p>The company provides end-end services in Flash development for clients across diverse industry segments. The company is promoted by experienced IT professionals who have vast experience in delivering offshore IT projects.
                     </p>
                     <p>Flash Web Introduction is an animated banner that provides information about the company or product in an attractive way by using animated text, graphics, objects etc. Animated web introductions are attractive in nature and help to hold-back the visitors. Animation &amp; other attractive features play a very important role in lead generation.</p>
                    <p>We are equipped with a talented team of Flash developers, animation experts and multimedia professionals. The team has wide experience in working on a variety of flash based projects. Our team has also worked on a range of Flash Web Introduction projects, providing higher-end animation &amp; other attractive features to suit individual client requirements.</p>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img alt="Flash Intro Development Company" className="img-fluid" src="assets/images/article-submission.png"/>
                     </div>
                  </div>
               </div>
               
            </div>
         </section>
    </div>
  )
}
