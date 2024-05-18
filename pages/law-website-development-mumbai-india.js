import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function LawWebsiteDevelopmentMumbai() {
  return (
    <div>
        <Helmet>
            <title>Law Website Development</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Law Website Development</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Law Website Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Law Website Development </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="service-sub-title">
                        <p>The information and document based legal industry has reformed immensely and now has the ability to both manage and deliver information with the click of a mouse.</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
                </div>
                <div className="row mt-5">
                <div className="col-md-6">
                    <p>Huge amounts of paperwork and related office labor are no longer incurred. Attorneys can make their law practice more client friendly, use multiple methods of contact, news retrieval and educational resources that are always available to the client.</p>
                    <div className="custom-content-title">
                        <p>Law Website Design Features</p>
                    </div>
                    <p>We specialize in knowing what your law-clients are looking for and how best to incorporate special features into your Web site. Our goal is to focus on your online strategy and enhance your law Web site with the proper elements that will build referrals, present your professional image and enhance the visitors experience and do it with a strict budget in mind.</p>
                    <p>Our Website Design team has been helping create professional, custom websites and marketing solutions to acquire new clients and raise a strong public image.</p>
                    <p>We pursue a fresh approach to create a website, content writing and marketing let us create custom websites and successful marketing plans</p>
                </div>
                <div className="col-md-6">
                    <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Law Website Development Company in India" className="img-fluid"/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}
