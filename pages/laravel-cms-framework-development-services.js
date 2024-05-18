import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function LaravelCmsDevelopmentCompany() {
  return (
    <div>
         <Helmet>
            <title>Laravel</title>
            <meta name="keywords" content=""/>
             <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Laravel</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Laravel Framework Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Laravel Framework Development </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
          <div className="containerFull">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="service-sub-title">
                        <p>We, at SIB Infotech, have been offering Laravel web development services to clients from across the globe. With a dedicated team of Laravel developers.</p>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>

            <div className="row">
              <div className="col-md-6">
                  <p>It is free, open source framework. Using this it is easy to build large &amp; complex web applications. </p>
                  <p> We develop and execute solutions that get better results and help us to achieve goals for you. Our profound PHP Development experience allows us to accomplish integration and personalization of Laravel applications. And, your business preference is never adjusted or lost in the process. To bring out the best, SIB uses all of Laravel's features for developing e-commerce and enterprise applications.</p>
              </div>
              <div className="col-md-6">
                  <div className="custom-page-img">
                      <img src="assets/images/article-submission.png" alt="Laravel CMS Framework Development Services" className="img-fluid"/>
                  </div>
              </div>
          </div>
          <div className="row">
                  <div className="col-md-12">
                      <div className="custom-content-title">
                          <h2 className="mainCustom">What will Laravel do for me?</h2>
                      </div>

                      <div className="row m-zero">
                          <div className="col-md-6">
                              <ul>
                                  <li>
                                      <p>The unit testing tool offered by the technology saves development time, project money, and personal stress.</p>
                                  </li>
                                  <li>
                                      <p>Available with unmatchable features, the platform makes implementing authentication very simple. Almost everything is configured out-of-the-box.</p>
                                  </li>
                                  <li>
                                      <p>Whether it is SQL injection or cross-site request forgery and cross-site scripting, Laravel helps to secure the web application by protecting it against such security risks.</p>
                                  </li>
                                  <li>
                                      <p>The unit testing tool offered by the technology saves development time, project money, and personal stress.</p>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-6">
                              <ul>
                                  <li>
                                      <p>Laravel is the only framework that includes a variety of pre-installed libraries, i.e. 20 high-level libraries where Authentication library is considered as one of the most popular and useful library of Laravel.</p>
                                  </li>
                                  <li>
                                      <p>Laravel implementation assures timely and cost effective delivery of any process. It is scalable and not a problem to find Laravel developer due to its popularity.</p>
                                  </li>
                                  <li>
                                      <p>Clean and simple&nbsp;API's&nbsp;make its very reliable and faster in operation</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         </section>
    </div>
  )
}
