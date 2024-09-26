import React from 'react';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function DesktopApplicationMumbaiIndia() {
  const metaTags = (
    <>
      <title>Title</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Desktop Application Development</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Desktop Application Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Desktop Application Development </span> Company in India</strong></p>
              <BannerForm/>
          </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row">
                <div className="col-md-1">
                  &nbsp;</div>
                <div className="col-md-10">
                  <div className="service-sub-title">
                    <p>Our dedicated software team delivers customized desktop applications that facilitate specific business processes.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-6 order-lg-1 order-2">
                  <div className="custom-content-title">
                    <p>
                      GUI Designing</p>
                  </div>
                  <p>
                    SIB Infotech creates distinct Graphic User interfaces that are simple, easy to use, build brand awareness and sell products. These high quality Graphical User Interface (GUI) applications are designed to effectively meet today's demanding business / product users needs. Whether it is a desktop application, embedded system, mobile computing, software oriented architectures (SOA) or software as a service (SaaS), we design your GUI and make sure it satisfies your end users.</p>
                  <p>
                    We offer rich, user friendly desktop applications that can be used offline and run off the web. Our extensive expertise in desktop application development ensures that in each project we select optimum technologies for each customer needs.</p>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                  <div className="custom-page-img">
                    <img alt="Desktop Application Mumbai India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Desktop Application Mumbai India" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
                <div className="col-md-6">
                  <p>
                    We deliver desktop applications such as Email campaign software, Custom CRM, Billing systems and Inventory management systems to name a few.</p>
                  <p>
                    At SIB Infotech, we design for graphical user interfaces for the masses and do our best to deliver a user-friendly experience. We consult with the client's business to distinguish who the users are and what the client wants to enable them to do. We design GUIs with accessibility and web usability in mind.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      GUI Process</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <p>
                            Input / Requirement Gathering</p>
                        </li>
                        <li>
                          <p>
                            Brainstorming Session</p>
                        </li>
                        <li>
                          <p>
                            Creation of Basic Screens (Images/HTML)</p>
                        </li>
                        <li>
                          <p>
                            Peer Review, Client Review, Feedback</p>
                        </li>
                        <li>
                          <p>
                            Development of most of the important screens which has the most important functionality.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <p>
                            Mockup of the functionalities with Javascript and HTML</p>
                        </li>
                        <li>
                          <p>
                            User Walk through and Feedback</p>
                        </li>
                        <li>
                          <p>
                            User Approval</p>
                        </li>
                        <li>
                          <p>
                            Functional Prototypes to Development Team, Training Division, Testing Team.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
