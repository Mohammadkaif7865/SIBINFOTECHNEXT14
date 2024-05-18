import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ProfessionalWebsiteDesigningServices() {
  return (
    <div>
        <Helmet>
            <title>Professional Website Designing Services Companies Mumbai India SIB Infotech</title>
            <meta name="keywords" content="professional web designing,professional website designing,professional web designing services,professional website designing services,professional web designing companies,professional website designing companies,professional web designing india,profession"/>
            <meta name="description" content="Quality Web site Designing India, Professional web designers company Mumbai, Affordable web site, Superb designs with amazing concepts and rich graphics."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Professional Website Designing Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Professional Website Designing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Professional Website Designing </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                <div className="col-md-10">
                    <div className="service-sub-title">
                    <p>
                        Professional website design services are the key to your business's durable marketability and enlargement.</p>
                    </div>
                </div>
                    <div className="col-md-1">
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <p>
                    With SIB Infotech you can make up your website by professional layout and design required to uphold your online brand and business.</p>
                    <p>
                    In spite of the size of your firm, our team of Expert Website Services professional can help you incorporate the newest technologies with your online business and utilise as an expansion of your company. It doesn’t matter if you’re just started or need higher managed services; we are here to assist you. Our Professional Website Services include an original one-on-one consultation to know your needs and give you an opinion of your options.</p>
                    <p>
                    Our professional website designing services is ranging from basic to cutting edge site design and execution, to custom application development. Our services will fulfil all your requirements with a great looking online presence. For our clientele, we provide a one-on-one consultation to understand your needs and advise you of your options.</p>
                </div>
                <div className="col-md-6">
                    <div className="custom-page-img">
                    <img alt="Professional Website Designing Company in India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}
