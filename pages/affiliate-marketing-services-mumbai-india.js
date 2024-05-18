import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function AffiliateMarketingServicesMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Affiliate Marketing Services Companies Mumbai London India UK</title>
            <meta name="keywords" content="local internet marketing services,local internet marketing,internet marketing consultancy,Internet Marketing Consultant, search engine optimizer, Search Engine Optimization India, Outsource SEO, Internet Marketing Company India, Search Engine Optimization"/>
            <meta name="description" content="SIB Infotech is an India based affiliate marketing company offering internet marketing, SEO, PPC, Email marketing and Web analytics solution from India."/>
            <link rel="canonical" href="https://www.sibinfotech.com/affiliate-marketing-services-mumbai-india" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Affiliate Marketing Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Affiliate Marketing Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Affiliate Marketing Services </span> Company in India</strong></p>
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
                    <p>Affiliate Marketing could be a sort of online campaign wherein the publisher is rewarded with some gifts or money as commission.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6 order-lg-1 order-2">
                  <p>Affiliate Marketing overlaps different sorts of internet selling ways like email selling where the publishers should take care of their online retailers.</p>
                  <p>SIB Infotech provides you with the absolute solution for affiliate marketing campaign that assists you in preserving your product, growing sale, and reaching your goals of expanding online revenue.</p>
                  <p>At SIB Infotech we deal with a range of advertisers those who are involved in offering a space for affiliation and also deal with various web portals who want to publish their products to different affiliate websites. So, we act as a vendor or third party where one can expect reliable and worthy services under the program of affiliate marketing campaign and get ROI oriented marketing through Shaping Technologies.</p>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                  <div className="custom-page-img">
                    <img alt="Affiliate Marketing Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Affiliate Marketing" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                <div className="col-md-6">
                  <div className="custom-content-title">
                    <p>
                      In affiliate marketing services there are three main points which surely bring exact solutions in respect of high diverted traffic.</p>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Cost per Action/Cost per Lead (CPA/CPL)</p>
                    </li>
                    <li>
                      <p>
                        Contextual Advertising</p>
                    </li>
                    <li>
                      <p>
                        Revenue Sharing</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
