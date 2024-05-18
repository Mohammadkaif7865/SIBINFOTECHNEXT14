import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function ForumPostingServices() {
  return (
    <div>
        <Helmet>
            <title>Forum Postings Services Companies England London Delhi India UK</title>
            <meta name="keywords" content="forum posting service,forum posting services,manual forum posting,seo forum posting,manual forum posting service,forum posting india,forum posting delhi,forum posting mumbai,forum posting chennai,forum posting bangalore,forum posting pune,forum posting hy"/>
            <meta name="description" content="SIB Infotech provides quality Forum posting services at very cheap prices. We post your links at online forums and at signatures to grow your business. We offer forum link building services and quality forum posting services to better enhance your website on the internet for search engines."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Forum Postings Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Forum Postings Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Forum Postings Services </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-1">
                     &nbsp;
                  </div>
                  <div className="col-md-10">
                     <div className="service-sub-title">
                        <p>Forum posting service is a nice way of getting topic based links and getting the right kind of traffic on your website.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                <div className="col-md-6 order-2 order-lg-1">
                  <p>It is an important stance in boosting SEO efforts. It’s simply means posting new threads or replying to old ones in forums to get quality inbound links to a website. If it is done in proper manner then it can drive targeted traffic to a website. Forum Posting is one of the best ways to connect your potential viewers and encouraging them to check out your website.</p>
                  <p>SIB Infotech is an unmatched and top Forum Posting specialist and can assist you to make and build a huge database of posts to detain customers. We are an online service specializing in providing affordable, quality &amp; user-friendly content to websites. Our signature service is BOOST paid forum posting, which is a forum population service that brings users &amp; posts to your website to bring the site to life and make it active.</p>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                  <div className="custom-page-img">
                    <img alt="Forum Posting Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Forum Postings Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                <div className="col-md-6">
                  <div className="custom-content-title">
                    <p>
                      Key Benefits of Forums</p>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Signatures towards your money site (exceptional case)</p>
                    </li>
                    <li>
                      <p>
                        Direct Marketing of your niche</p>
                    </li>
                    <li>
                      <p>
                        Bring direct and indirect traffic towards your site.</p>
                    </li>
                    <li>
                      <p>
                        Forums are the best approach for providing good quality information</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      Features of the Forum Service</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Posting mainly on the popular and niche related forums</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          An approach to get permanent links towards your website</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Forum posting by the experienced forum-posting experts</p>
                      </div>
                    </div>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Replying to the old threads and creating new threads</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Niche related and informative comments<br/>
                          &nbsp;</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Signature consists of 1 to 3 Anchor Text Links<br/>
                          &nbsp;</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
