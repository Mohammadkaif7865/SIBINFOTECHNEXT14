import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function Dba2DbaServicesAdministration() {
  return (
    <div>
        <Helmet>
            <title>DB2 DBA Services and Administration</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
            <link rel="canonical" href="https://www.sibinfotech.com/db2-dba-services-administration" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">DB2 DBA Services and Administration</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">DB2 DBA Services & Administration </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">DB2 DBA Services & Administration </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div class="containerFull">
               <div class="row">
                  <div class="col-md-6">
                      <p>For good business performance optimization of DB2 software, applications and databases is critically important.SIB Infotech has the experience, diagnostic tools, proven processes, project plans and expert resources to address the challenges your resident DBA may face at any time regardless of when they arise. Our acuity with DB2 performance, administration and recovery services enables you to free up your in-house resources to work on other necessary projects.</p>
                  </div>
                  <div class="col-md-6">
                      <div class="custom-page-img">
                          <img src="assets/images/article-submission.png" alt="DB2 DBA Services and Administration" class="img-fluid"/>
                      </div>
                  </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                    <div class="custom-content-title">
                        <p>Our DB2 database administrators are experienced with</p>
                    </div>

                    <div class="row m-zero">
                        <div class="col-md-6">
                            <ul>
                                <li><p>Monitoring and calibrating both static and dynamic SQL</p></li>
                                <li><p>Managing and tuning DB2 specific software</p></li>
                                <li><p>Addressing data migration and rebinding issues resulting from scheduled enhancements and version upgrades</p></li>
                                <li><p>Supporting legacy DB2 applications as well as new development efforts</p></li>
                                <li><p>Managing the DB2 utilities</p></li>
                                <li><p>Maintaining data sharing and high availability features of DB2</p></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li><p>Manage and support DB2 Replication â€“ both SQL and Queue Replication</p></li>
                                <li><p>Setup and support for DR exercises</p></li>
                                <li><p>Install, manage and support DB2 Purescale</p></li>
                                <li><p>Health Checks of DB2 servers and Subsystems</p></li>
                                <li><p>Migration of DB2 utilities from one vendor to another (BMC, CA, IBM)</p></li>
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
