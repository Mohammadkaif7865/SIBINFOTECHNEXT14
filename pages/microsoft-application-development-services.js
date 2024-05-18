import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function MicrosoftDevelopmentServices() {
  return (
    <div>
        <Helmet>
            <title>Microsoft Application & Development Services</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Microsoft Application & Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Microsoft App & Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
               <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
               <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Microsoft App & Development </span> Company in India</strong></p>
               <BannerForm/>
            </div>
         </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-12">
                     <p>
                        The higher the number of visitorsâ€™, the more the conversion rate. It impacts more references and you get more reviews as well. It is essential to submit your article on High PR sites which make nice web presence of your website. Article submission is one of the most popular approaches of content marketing and link building strategies used by SEO Experts to improve website traffic, backlinks and SERPs. We use white hat SEO for providing the best quality links pointing towards your site. Our well-written article makes it easier to get approved in High PR sites.
                     </p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-4">
                     <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt="Microsoft Application & Development Services" className="img-fluid"/>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <div className="custom-content-title">
                        <p>Our Application &amp; SQL Services Include</p>
                     </div>
                     <div className="row">
                        <div className="col-md-6">
                           <div className="icon-verical-box">
                              <p>Modernization</p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Customer Self-service
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Case tracking &amp; management
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Integration &amp; Application development
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Strategy &amp; Consulting
                              </p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="icon-verical-box">
                              <p>Database Development &amp; Management
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Reporting &amp; Dashboards
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Managed Application Services
                              </p>
                           </div>
                           <div className="icon-verical-box">
                              <p>Remote DBA
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>Benefits of working with SIB Infotech for your Microsoft technology needs</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Business and Technical Acumen</p>
                        <p>offering consulting, project, and managed services.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Experienced Integrators</p>
                        <p>deep integration knowledge across multiple types of legacy systems including Microsoft, IBM, Oracle, SAP, home-grown and others. We can connect back-end and front-end systems seamlessly.</p>
                     </div>
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Proven methodologies</p>
                        <p>development skill-sets including Agile, Scrum, Waterfall, DevOps, data cleansing and understanding source data / master data best practices.8</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </div>
  )
}
