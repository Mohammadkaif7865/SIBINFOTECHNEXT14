import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function DirectorySubmissionServices() {
  return (
    <div>
        <Helmet>
            <title>Directory Submission Services Companies England London India UK</title>
    		<meta name="description" content=""/>

        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-7 ps-lg-5">
                     <div className="innerBannerTitle venter">
                        <h3 className="heading fontWeight700 text-white">Directory Submission Services </h3>
                        <div className="mt-4">
                           <Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                           <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                     <div className="bannerForm">
                           <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                           <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Directory Submission</span> Company in India</strong></p>
                           <BannerForm/>
                     </div>
                  </div>
               </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Directory Submission</span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                     <div className="service-sub-title">
                        <p>Our experts are well conscious with the concept of quality directory submission, and have strengthened our position as the best directory submission company in India as well as overseas.</p>
                     </div>
                  </div>
                  <div className="col-md-1"></div>
               </div>
               <div className="row">
                  <div className="col-md-6 order-lg-1 order-2 mt-lg-0 mt-3">
                     <p>
                        SIB Infotech has expertise and experience in providing the excellent directory submission services, having years of expertise knowledge and catering to the diverse requirements of a number of clients from various fields.
                     </p>
                     <p>
                        We offer you with a complete list of easy directories in your niche and ensure the rise in your rankings across all major search engines. At SIB Infotech we provide high value directory submission packages as well as customized directory submission plans to suit your requirements
                     </p>
                  </div>
                  <div className="col-md-6 order-lg-2 order-1">
                     <div className="custom-page-img">
                        <img  src="assets/images/article-submission.png" alt="Directory Submission Services Agencies in Delhi"/>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Directory Submission Services Companies in Mumbai"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <h2 className="mainCustom">
                           Why Choose SIB Infotech for SEO Services?
                        </h2>
                     </div>
                     <ul>
                        <li>
                           <p>
                              We better know what you want and we always try to offer complete pleased service to you as we submit your website's URL manually.
                           </p>
                        </li>
                        <li>
                           <p>
                             We revise your website cautiously to know accurately the right keywords and keyword phrases to use for links to your site. With Following all rules &amp; regulation of search engine we submit your links in right category with appropriate content.
                           </p>
                        </li>
                        <li>
                           <p>
                              We ensure that directories to which we submit our clients’ content are not “blacklisted” by any major search engine.
                           </p>
                        </li>
                        <li>
                           <p>
                              We will get you on the top rank of search engine while you focus on your business growth and goals!
                           </p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}
