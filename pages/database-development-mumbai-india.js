import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function DatabaseDevelopementMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Database Development Services Companies India London UK USA</title>
            <meta name="keywords" content="database development services,database development service,offshore database development,database development companies,database development company,database development india,database development delhi,database development mumbai,database development che"/>
            <meta name="description" content="SIB Infotech is a leading provide of database development solutions.We have thorough experience in the following databases: MySQL, MSSQL, Oracle, DB2, PostgreSQL and MS Access.We have extensive experience in database programming and are always prepared to take on new challenges."/>
            <link rel="canonical" href="https://www.sibinfotech.com/database-development-mumbai-india" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Database Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Database Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Database Development </span> Company in India</strong></p>
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
                        <p>We have thorough experience in the following databases: MySQL, MSSQL, Oracle, DB2, PostgreSQL and MS Access.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="col-md-12">
                  <p>Efficient database programming assists in enhanced business data management, secure storage and retrieval. We have extensive experience in database programming and are always prepared to take on new challenges.</p>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>
                           Our Database Programming services include
                        </p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Identification and Planning
                              </p>
                              <p>
                                 Our team identifies the specific requirements of the client to determine required application capacities and plan the solution architecture accordingly.
                              </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Workflow and User Analysis
                              </p>
                              <p>
                                 Depending on actions that the future DB solution will perform, required amount of users and user types elaborate DB tiers, users roles and rights suiting the clients needs and DB logics.
                              </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Capacity Strategy
                              </p>
                              <p>
                                 Capacity strategy planning includes space utilization, standby facilities for possible applications/features adding and performance optimization options etc.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Interface Design
                              </p>
                              <p>
                                 We implement a planned interface that offers better usability and enhances database administration and data management.
                              </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Migration of Legacy Systems and Data
                              </p>
                              <p>
                                 We deliver database implementation services that include integration of existing applications and data with newly developed database solution.
                              </p>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">
                                 Review and Implementation
                              </p>
                              <p>
                                 Before we implement the database our experts make final run-throughs to ensure that all systems are fully functional and flawless.
                              </p>
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
