import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function AmazonWebServicesAws() {
  return (
    <div>
        <Helmet>
            <title>Amazon Web Services (AWS)</title>
            <link rel="canonical" href="https://www.sibinfotech.com/amazon-web-services-aws"/>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-7 ps-lg-5">
                  <div className="innerBannerTitle venter">
                     <h3 className="heading fontWeight700 text-white">Amazon Web Services (Aws)</h3>
                     <div className="mt-4">
                        <Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                        <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                  <div className="bannerForm">
                     <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                     <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Amazon Web Services </span> Company in India</strong></p>
                     <BannerForm/>
                  </div>
               </div>
            </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
         <div className="bannerForm">
            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Amazon Web Services </span> Company in India</strong></p>
            <BannerForm/>
         </div>
      </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-6 order-lg-1 order-2">
                     <div className="custom-content-title">
                        <p>AWS Benefits</p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <div className="icon-verical-box">
                              <p>Pay for what you use</p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Scalable Infrastructure</p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Increased on-demand availability</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="icon-verical-box">
                              <p>24Ã—7 live IT level support</p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Lower cost, no overhead</p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Increases business agility</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 order-lg-2 order-1">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Amazon Web Services Company in India" className="img-fluid"/>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Amazon Web Services in Delhi" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-content-title">
                        <p>AWS Services</p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>Amazon EC2</p>
                              </li>
                              <li>
                                 <p>Amazon RDS</p>
                              </li>
                              <li>
                                 <p>Amazon Aurora</p>
                              </li>
                              <li>
                                 <p>Amazon Redshift</p>
                              </li>
                           </ul>
                        </div>
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>Amazon ElastiCache</p>
                              </li>
                              <li>
                                 <p>Amazon Athena</p>
                              </li>
                              <li>
                                 <p>Amazon DynamoDB</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row mt-4">
                  <div className="col-md-6  order-lg-1 order-2">
                     <div className="custom-content-title">
                        <p>SIB Infotech Benefits</p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>Consulting, project, and managed service offerings</p>
                              </li>
                              <li>
                                 <p>Experts in all major platforms</p>
                              </li>
                              <li>
                                 <p>Solution provisioning and upgrades</p>
                              </li>
                              <li>
                                 <p>Migration of existing database to the Cloud</p>
                              </li>
                              <li>
                                 <p>Configuration and backups to the Cloud</p>
                              </li>
                           </ul>
                        </div>
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>Workload analysis and optimization</p>
                              </li>
                              <li>
                                 <p>Robust data warehousing solutions with Amazon Redshift</p>
                              </li>
                              <li>
                                 <p>Fully managed NoSQL database services with Amazon DynamoDB</p>
                              </li>
                              <li>
                                 <p>AWS support</p>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 order-lg-2 order-1">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Amazon Web Services in Delhi" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
        </section>
    </div>
  )
}
