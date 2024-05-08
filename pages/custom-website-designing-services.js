import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';


export default function CustomWebsiteDesigningServices() {
  return (
    <div>
        <Helmet>
            <title>Custom Web Designing</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
            <link rel="canonical" href="https://www.sibinfotech.com/custom-website-designing-services"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Custom Web Designing</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Custom Web Designing</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Custom Web Designing</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-1 d-lg-block d-none">
                        &nbsp;</div>
                    <div className="col-md-10">
                        <div className="service-sub-title">
                            <p>
                                SIB Infotech offers you an inexpensive custom website design solutions that are sharply purposeful on your trade goals and customized to fit your budget.</p>
                        </div>
                    </div>
                    <div className="col-md-1 d-lg-block d-none">
                        &nbsp;</div>
                </div>
                <div className="row mb-0">
                    <div className="col-md-6">
                        <p>
                            We provide Reasonable, custom designs and services for all types of small corporation. Our experts are well qualified in SEO friendly website design that encourages specially for small business SEO Internet marketing.</p>
                        <p>
                            We build customized website designs for our clients to make their own goals. We are offering unique and useful content management for website depending upon our clients business. We design Inspired Custom Websites and inventive skill of our qualified expert who have constructed more than 100 web sites that beautify the web today.</p>
                        <p>
                            SEO is the lifeline of online marketing. We offer our valued clients a high quality and affordable package. Leave the rest up to us as our experts are trained on the latest guidelines from all major search engines such as Google, Bing, Yandex and Yahoo.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-page-img">
                            <img className="img-responsive" src="assets/images/article-submission.png" alt="Article submission"/></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
