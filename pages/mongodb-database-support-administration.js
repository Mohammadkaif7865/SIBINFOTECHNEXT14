import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function MangoDbDatabaseSupportAdministration() {
   const metaTags = (
      <>
        <title>MongoDB Database Support & Administration | SIB Infotech</title>
        <meta name="description" content="Ensure optimal performance with MongoDB support and administration services by SIB Infotech. Get expert solutions for database management and maintenance." />
        <meta name="keywords" content="Mongodb Database Support & Administration" />
       
  
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sibinfotech.com/mongodb-database-support-administration" />
        <meta property="og:title" content="MongoDB Database Support & Administration | SIB Infotech" />
        <meta property="og:description" content="Ensure optimal performance with MongoDB support and administration services by SIB Infotech. Get expert solutions for database management and maintenance." />
        <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
  
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.sibinfotech.com/mongodb-database-support-administration" />
        <meta property="twitter:title" content="MongoDB Database Support & Administration | SIB Infotech" />
        <meta property="twitter:description" content="Ensure optimal performance with MongoDB support and administration services by SIB Infotech. Get expert solutions for database management and maintenance." />
        <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
      </>
    );
    return (
      <CustomLayout meta={metaTags}>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Mongodb Database Support & Administration</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
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
    </CustomLayout>
  )
}
