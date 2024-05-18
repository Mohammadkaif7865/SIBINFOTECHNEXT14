import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WebsiteDesignMathodologyMumbai() {
  return (
    <div>
        <Helmet>
            <title>Website Design Methodology India Web Page Designing Mumbai SIB Infotech</title>
            <meta name="keywords" content="Web Design India, Software Development Companies, Web Development Companies India, Website Design India, Custom Web Design India, Web Design Delhi,indian web design company, india seo company,corporate website design,custom website design services,website"/>
            <meta name="description" content="SIB Infotech being a professional web designing company, offering you a bunch of talented designers to turn your dreams into reality. Good and affordable website design services are the dual keys of success in online business. We offer professional web designing services at affordable rates."/>
            <link rel="canonical" href="https://www.sibinfotech.com/website-designing-methodology-mumbai-india"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Website Design Methodology</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Design Methodology </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Design Methodology </span> Company in India</strong></p>
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
                        <p>At SIB Infotech, we have faith in that the design method is a teamwork that combines our inventive power with our clientele’s market skill and idea to make websites that deliver results.
                        </p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row m-zero mt-4">
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Measure</p>
                      <p>
                        Our preference is to look at your business, promotion, financial plan and customers’ needs before building any proposals. Intended for websites this can be accomplish rapidly with great results.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Recommendation</p>
                      <p>
                        Using variety of commodities and services can merge these to meet your needs. These services comprise content management system, ecommerce, online business solutions, search engine optimisation and internet marketing. We also provide a collection of technical, planning, design and administration services.</p>
                    </div>
                  </div>
                </div>
                <div className="row m-zero">
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Preparation</p>
                      <p>
                        The important point of this preparation is to delineate the timeline, structure and content, original &amp; technical briefs. All of these elements are vital to the development of your project and its long term success.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Design</p>
                      <p>
                        The design will motivate your marked viewers a visual demonstration of your business. SIB InfoTech’s designers will take your product requests, descriptions and means statement and make the valuable design. The excellence of the design is very important to make sure that every business and advertising requirements are carried to the target audience.</p>
                    </div>
                  </div>
                </div>
                <div className="row m-zero">
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Development</p>
                      <p>
                        SIB Infotech have an expert’s group of developers with an extensive variety of talent and experience. We recommend most likely used and user friendly CMS, that will well organised ready for the design combination.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Code Testing</p>
                      <p>
                        Our developers will examine at different phases right through the period of existence of the assignments. After completion of successfully development we will conduct diverse range of user-assisted testing. With this process we will cut off any alteration or problems related to the usability of the system.</p>
                    </div>
                  </div>
                </div>
                <div className="row m-zero">
                  <div className="col-md-6">
                    <div className="custom-page-icon-box icon-with-title">
                      <p className="custom-box-title">
                        Start on</p>
                      <p>
                        Finally SIB Infotech will give breathe to your site and make it live on servers by making sure that the whole thing is functioning well. Its next time to enjoy you, for any difficulty in cms or modification just contact us our dedicated technical support team is always there to help.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    &nbsp;</div>
                </div>
            </div>
         </section>
    </div>
  )
}
