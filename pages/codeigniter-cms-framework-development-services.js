import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function CodeigniterFrameworkDevelopmentServices() {
  return (
    <div>
        <Helmet>
            <title>Codeigniter Development</title>
    		<meta name="description" content="SIB Infotech is a leading designing and development company in Mumbai, India offers complete end to end web solutions for designing development services that will help to improve user experience."/>
			<link rel="canonical" href="https://www.sibinfotech.com/codeigniter-cms-framework-development-services" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Codeigniter Development</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Codeigniter Development</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div className="col-lg-5 d-block d-lg-none pe-lg-5">
			<div className="bannerForm">
				<h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
				<p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Codeigniter Development</span> Company in India</strong></p>
				<BannerForm/>
			</div>
		</div>
        <section>
		    <div className="containerFull">
		        <h2 className="small_heading text-lg-center">SIB Infotech has a handpicked team of highly-qualified and professional CodeIgniter programmers. The team makes it extremely easy for the clients to bring changes in design elements of their web applications and e-commerce applications.</h2>
		    </div>
		</section>
        <section>
		    <div className="containerFull">
		        <div className="row">
		            <div className="col-lg-8">
		                <p className="customText">SIB Infotech specializes in providing customized web application development aligned with MVC framework. We have a trained team of skilled CodeIgniter developers well versed with the ongoing trends in CodeIgniter website development, integration and upgrade services for diverse project requirements.</p>
		                <p className="customText">Our developers can work on any complex projects to deliver excellent performing CodeIgniter apps using frameworks different features &amp; libraries. Our professionals experience working on large scale CodeIgniter projects across diverse industry verticals, we can help you with your web applications to support your long-term business goals and requirement.</p>
		                <p className="customText">PHP Codeigniter framework is a forceful framework used for building fully functional captive applications. PHP Codeigniter developers from SIB Infotech provide low-cost PHP solutions and customization as per the client's requirements.</p>
		                <p className="customText">Get effective PHP programs at SIB Infotech. We create powerful web applications using CodeIgniter framework. The efficient and experienced team at SIB Infotech creates web applications in a very short span of time and that too within client's budget.</p>
		            </div>
		            <div className="col-lg-4">
		                <img src="assets/images/article-submission.png" alt="Codeigniter CMS Framework Development Company in India" className="w-100"/>
		            </div>
		        </div>
		    </div>
		</section>
        <section className="bgGrey">
		    <div className="containerFull">
		        <h3 className="sub_heading text_red">What We Offer: CodeIgniter Development Services</h3>
		        <p className="title text_primary mt-3"><strong>Develop Custom Web Applications</strong></p>
		        <p className="mt-2">Codeigniter convert your business value into database-driven web applications and it is customisable as per your needs.</p>
		        <p className="title text_primary mt-4"><strong>Create &amp; Custom e-Commerce Websites</strong></p>
		        <p className="mt-2">Whether you have a small or large business, you need to market your offerings on the web effectively to boost online sales and achieve success. Codeigniter framework makes your business easy and hassle-free by creating Custom e-Commerce Websites..</p>
		        <p className="title text_primary mt-4"><strong>Corporate Applications Development</strong></p>
		        <p className="mt-2">We make secure and full-featured application for corporate requirement easily with CodeIgniter.</p>
		    </div>
		</section>
        <section>
		    <div className="containerFull">
		        <h4 className="sub_heading">Our Proposition</h4>
		        <div className="row mt-3">
		            <div className="col-lg-6">
		                <div className="lists">
		                    <ul>
		                        <li>Full-Cycle CodeIgniter Development</li>
		                        <li>Customer friendly Engagement Model</li>
		                        <li>Quality Processes</li>
		                        <li>Guarantee result Methodologies</li>
		                    </ul>
		                </div>
		            </div>
		            <div className="col-lg-6">
		                <div className="lists">
		                    <ul>
		                        <li>100% Transparency</li>
		                        <li>Committed Team of Experts</li>
		                        <li>On-Time Delivery of projects</li>
		                        <li>Industry-leading Solutions</li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		    </div>
		</section>
    </div>
  )
}
