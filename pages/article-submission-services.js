import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ArticleSubmissionServices() {
  return (
    <div>
        <Helmet>
            <title>Article Submission Services Companies Mumbai London India UK</title>
            <meta name="keywords" content="article submission service,article submission services,manual article submission,seo article submission,manual article submission service,article submission india,article submission delhi,article submission mumbai,article submission chennai,article submis"/>
            <meta name="description" content="SIB Infotech specializes in Manual Article Submission and Writing work for High Search Engine Ranking and Traffic."/>
            <link rel="canonical" href="https://www.sibinfotech.com/article-submission-services" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Article Submission Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Article Submission</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Article Submission</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                    <div className="service-sub-title">
                        <p>Our Manual Article Submission Services is a great link building tool which uses High Quality Article Directories Websites to get High Quality Backlinks.</p>
                    </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row">
                <div className="col-md-6 order-lg-1 order-2 mt-lg-0 mt-3">
                    <div className="custom-content-title">
                    <h2 className="mainCustom">
                        What is Article Submission?</h2>
                    </div>
                    <p>
                    It helps in increasing visibility on the Internet and is one of the best tool for marketing your business. It is a method of creating relevant articles and publishing them to article directories. It gives people real important information concerning your company or your product or service. It helps your site by drawing attentions of your visitors and thereby encouraging communication with customers.</p>
                    <p>
                    The articles submitted by us, will generate high quality incoming links to your website, and you can rest assured that these links will provide a definite boost to your website’s search engine ranking.</p>
                    <p>
                    The higher the number of visitors’, the more the conversion rate. It impacts more references and you get more reviews as well. It is essential to submit your article on High PR sites which make nice web presence of your website. Article submission is one of the most popular approaches of content marketing and link building strategies used by SEO Experts to improve website traffic, backlinks and SERPs. We use white hat SEO for providing the best quality links pointing towards your site. Our well written article makes it easier to get approved in High PR sites.</p>
                </div>
                <div className="col-md-6 order-lg-2 order-1">
                    <div className="custom-page-img">
                    <img src="assets/images/article-submission.png" alt="Article Submission Company in Mumbai"/></div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="custom-page-img">
                    <img src="assets/images/article-submission.png" alt="Article Submission Company in Delhi"/></div>
                </div>
                <div className="col-md-6">
                    <div className="custom-content-title">
                    <h3 className="mainCustom">
                        What we do?</h3>
                    </div>
                    <p>
                    Using our single best strategy we write an article for your business that people would want to read in its entirety. Our well written piece of article will help ensure you attract all of the targeted traffic. As part of our services, we offer you the most efficiently composed articles which are distributed to most recognized article directories. Our services enhance your marketing campaign performance by driving good quality visitors to your website. For your article, we use the art of words &amp; our expert’s make the customized content such that it influences viewers to read more &amp; stay connected to your site.</p>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="custom-content-title">
                    <h4 className="mainCustom">
                        What will Article Submission do for me?</h4>
                    </div>
                    <ul>
                    <li>
                        <p>
                        Article marketing generates new and live traffic to a website</p>
                    </li>
                    <li>
                        <p>
                        Help to make a relationship with potential customers</p>
                    </li>
                    <li>
                        <p>
                        Produce awareness and attention in the services and brands of your website</p>
                    </li>
                    <li>
                        <p>
                        Establish yourself as an expert in your field.</p>
                    </li>
                    <li>
                        <p>
                        Great visibility on the internet</p>
                    </li>
                    <li>
                        <p>
                        You would get permanent links to your websites</p>
                    </li>
                    <li>
                        <p>
                        Article submission done by us does not require any reciprocal backlink.</p>
                    </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="custom-page-img">
                    <img src="assets/images/article-submission.png" alt="Article Submission"/></div>
                </div>
                </div>
            </div>
      </section>
    </div>
  )
}
