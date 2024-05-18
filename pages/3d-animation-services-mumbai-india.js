import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ThreeDAnimationServices() {
  return (
    <div>
        <Helmet>
            <title>3D Animation Services Companies Mumbai London India UK USA</title>
            <meta name="keywords" content="3d animation services india,3d animation services bangalore,3d animation services mumbai,3d animation services delhi,3d animation services chennai,3d animation services pune,3d animation services hyderabad,3d animation india,3d animation bangalore,3d anim"/>
            <meta name="description" content="At SIB Infotech, we have an expert team of 3d animators having expertise in 3D modeling, Rendering, 3D character, cartoon animation, walkthroughs and other animation designs."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">3D Animation Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">3D Animation </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">3D Animation </span> Company in India</strong></p>
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
                    <p>3D Walkthroughs, 3D Modelling are fast picking up in today's business scenario. Such 3D Models or 3D Animations help you to create a virtual presentation of characters and animated designs to express your thoughts or ideas.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    2D Animation or 3D Animation is essential for businesses which require to showcase their product or processes before it is made. For eg. Builders are required to make a 3D Walkthrough of their upcoming Residential or Commercial project in order to give a sales pitch to their prospecting customers. Manufacturers are required to make a 3D Animation of their manufacturing process to explain the lifecycle of the product.</p>
                  <p>
                    At SIB Infotech, we strive to give best web designing services with high-quality and desirable output format. We have a team of 3D Designers who have years of hands-on experience in 3D Modelling, Animations, and Walkthroughs. We have our in-house high-speed systems which help them do work effectively and quickly</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="3D Animation Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
