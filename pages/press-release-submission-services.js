import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function PressReleaseSubmissionServices() {
  return (
    <div>
        <Helmet>
            <title>Press Release Submission Services Companies Mumbai London India SIB Infotech</title>
            <meta name="keywords" content=""/>
            <meta name="description" content="SIB Infotech's Press release service will post the press releases for you regarding your business and then allocate them to the various media channels. We offer Press Release Writing And Distribution service for High traffic an High Search Engine Visibillity."/>
            <link rel="canonical" href="https://www.sibinfotech.com/press-release-submission-services"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Press Release Submission Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Press Release Submission </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Press Release Submission </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <h3 className="customHeading customLineHeight text-center">
                    An effectual promotion and <span className="text_red">Effective Advertising </span>is essential for the success of you're marketing business, No matters what its scope and size is</h3>
                <div className="row align-items-center mt-4">
                    <div className="col-lg-6">
                        <p className="customText">
                            When it comes to online marketing promotions, things become significantly simpler and easier. Promoting the online business is fairly different with the marketing that you would generally perform for your business. You usually present your Website with lots of advertising products and services to draw customers. Thus, one of the most effectual services in online marketing is the online press release.As we all know that the success of any type online business Website is highly dependent on effectual advertising.</p>
                        <p className="customText">
                            As you know, the main intention of news distribution is to provide media with correct and appealing information related to your products and services.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="tiktok-img-section">
                            <img className="image-full" src="assets/images/pr-submission-company-in-india.png" alt="Press-Release-Submission-Services-Company-In-India"/></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="bgBlueDarkLeft bgBlueDarksmHeight">
                            <p className="customText text-white">
                                Press release is basically a traditional way to encourage your Website. Press release service will post the press releases for you regarding your business and then allocate them to the various media channels.</p>
                            <p className="customText text-white">
                                Now days, in the Internet world press release services are one of the most prominent online marketing tools that you can apply at your Website.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="customText">
                            However, press release takes both time and skill so press release service can prove to be a great benefit for you.</p>
                        <p className="customText">
                            At SIB Infotech, this service will help you obtain the guess-work of what you should comprise or leave out for your press release to capture the consideration of the visitors.</p>
                        <p className="customText">
                            PR release service will help you raise the Website traffic which will create into more earnings for you. Thus, there are numerous benefits of press release services.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
