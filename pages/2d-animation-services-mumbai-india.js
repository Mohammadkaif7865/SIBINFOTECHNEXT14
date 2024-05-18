import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function TwoDAnimationServicesMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>2D Animation Services Companies Mumbai London India UK USA</title>
            <meta name="keywords" content="2d animation services india,2d animation services bangalore,2d animation services mumbai,2d animation services delhi,2d animation services ,chennai,2d animation services pune,2d animation services hyderabad,2d animation india,2d animation bangalore,2d ani"/>
            <meta name="description" content="SIB Infotech India provides an range of 2D animation services. Our 2D animation services enable you to leverage cost benefits without compromising on quality."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">2D Animation Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">2D Animation Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">2D Animation Services </span> Company in India</strong></p>
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
                    <p>In creating interactive, impressive and expressive web designs, there's nothing better than using 2D Animation or Flash Presentations or designs.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    We have expert Flash designers who have expertise with modern tools and technologies and have experience in developing high-quality flash templates and websites which ultimately give the WOW!! a factor in your websites or designs.</p>
                  <p>
                    At SIB Infotech, we professionally create websites to suit client requirements and deliver high-quality results. We design flash templates and flash intros that are just impressive and unique but are also made interactive with active buttons, links and action scripts.</p>
                  <p>
                    Flash is the fastest way to create rich Internet applications. Flash development includes the creation of rich user interfaces, online advertising, eLearning course and enterprise application front-ends.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="2D Animation Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
