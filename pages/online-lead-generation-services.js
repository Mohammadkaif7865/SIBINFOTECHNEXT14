import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function OnlineLedGenerationServices() {
  return (
    <div>
        <Helmet>
            <title>Online Lead Generation Services</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Lead Generation Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Lead Generation </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Lead Generation </span> Company in India</strong></p>
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
                        We have been helping firms to achieve their revenue goals with an unyielding, reliable lead generation services. SIB Infotech can help you generate the leads you need to succeed.</p>
                    </div>
                </div>
                <div className="col-md-1">
                    &nbsp;</div>
                </div>
                <div className="row mt-4">
                <div className="col-md-6">
                    <p>
                    Specialists gathering are also offered to lead you through greatest practices to reach the best profits results. Our line of attack is uncomplicated and we sustain you every step of the way.</p>
                    <p>
                    Confer with our team of professional through project-based workshops or tailored services to assemble your exact requirements for lead generation services. As your firm raises and transform, how you use SIB Infotech will change. Our skilled services offer ongoing control on promotion, sales, and business processes.</p>
                    <div className="custom-content-title">
                    <p>
                        Practised Lead Generation Services</p>
                    </div>
                    <div className="custom-page-icon-box">
                    <p>
                        Campaign Training</p>
                    </div>
                    <div className="custom-page-icon-box">
                    <p>
                        Reporting Training</p>
                    </div>
                    <div className="custom-page-icon-box">
                    <p>
                        Social Marketing Expert Services</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="custom-page-img">
                    <img alt="Online Lead Generation Services in India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                </div>
                <div className="row mt-4">
                <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                        Inspired Services</p>
                    <p>
                        Impressive appearing resources aren't just striking; they describe in additional leads to raise your viewers. Get assist designing email and landing page templates that bring into line with your company's brand character.</p>
                    <p>
                        Moreover, our proficient lead generation services team recommend workshops, consulting correspondence, and routine services to guide with selling best practices and technical incorporation.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                        Web Services</p>
                    <p>
                        In case you haven’t observed, the Web has become a significant marketplace for brands. We delight ourselves in the services we give our clients that help them in their online profile.</p>
                    <p>
                        From search engine optimization to e-mail marketing to social media services, we give online exposure for each of our important partners so that they can really make a niche in their respective online market.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
