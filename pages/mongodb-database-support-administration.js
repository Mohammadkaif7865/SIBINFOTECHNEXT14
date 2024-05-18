import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function MangoDbDatabaseSupportAdministration() {
  return (
    <div>
        <Helmet>
            <title>MongoDB Database Support & Administration</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Mongodb Database Support & Administration</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Mongodb Administration </span> Company in India</strong></p>
                              <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Mongodb Administration </span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>What is MongoDB?</p>
                     </div>
                     <p>MongoDB is a highly-available open source NoSQL database. A popular Big Data technology, MongoDB is used to support rapid application development with extreme scalability and availability at a low cost.</p>
                  </div>
               </div>
               <div className="row">
                  <div className="custom-content-title">
                     <p>
                        Complete, technically deep, operationally sound MongoDB support.
                     </p>
                  </div>
                  <div className="col-md-8">
                     <div className="col-md-6">
                        <ul>
                           <li>
                              <p>Application Administration</p>
                           </li>
                           <li>
                              <p>Profiling System</p>
                           </li>
                           <li>
                              <p>Security Management (Typically done at the OS level)</p>
                           </li>
                           <li>
                              <p>Backups</p>
                           </li>
                           <li>
                              <p>RAID Management</p>
                           </li>
                           <li>
                              <p>Code/Framework review</p>
                           </li>
                        </ul>
                     </div>
                     <div className="col-md-6">
                        <ul>
                           <li>
                              <p>Index Management</p>
                           </li>
                           <li>
                              <p>Moving Data into RAM</p>
                           </li>
                           <li>
                              <p>Configuring Authentication Methods (ie Kerberos)</p>
                           </li>
                           <li>
                              <p>Compacting Data
                              </p>
                           </li>
                           <li>
                              <p>Moving Collections and Data</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="MangoDb Database Support" className="img-fluid"/>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}
