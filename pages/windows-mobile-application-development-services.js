import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function WindosMobileApplicationDevelopementServices() {
  return (
    <div>
        <Helmet>
            <title>Windows Mobile Application Development Services India USA UK SIB Infotech</title>
            <meta name="keywords" content="windows mobile application development services,windows mobile application development service,offshore windows mobile application development,windows mobile application development companies,windows mobile application development company,windows mobile a"/>
            <meta name="description" content="We are providing a wide range of windows mobile applications development, programming for windows mobile software by windows mobile programmer at affordable cost.We provide application development on broad Windows OS platforms such as Windows Mobile 5.0, Windows Mobile 6.0, Windows Mobile 6.1, Windows Mobile 6.5"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Windows Mobile Application Development</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Windows Mobile App Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Windows Mobile App Development </span> Company in India</strong></p>
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
                        <p>We provide end-to-end development services in Windows Mobile Application Development. Our expert programmers have extensive knowledge in the applications that can help you expand your mobile applications’ user base. Whatever our team suggests for the entire solution, meets your business needs.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row mt-4">
                <div className="col-md-12">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Hiring Windows Mobile Application Developers</p>
                    <p>
                      If you want to hire Window Mobile Application Developers from SIB Infotech's team, you can surely get the utilization of up-to-date technologies such as Microsoft .Net, emphasis only on the client needs to develop clients’ choices for Window Mobile Application etc. Plus our Window Mobile Developers ensures the Microsoft reliability. We provide application development on broad Windows OS platforms such as Windows Mobile 5.0, Windows Mobile 6.0, Windows Mobile 6.1, Windows Mobile 6.5, Our in house development team of resources enables us to deliver applications that are robust , reliable any easily updatable for future enhancement based on the client need. Our project management approach provide on time delivery of the application.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Outsourcing Windows Mobile Application Development</p>
                    <p>
                      Before involving in outsourcing with any Window Mobile Application developer you should check out some vital things such as defining the roles and responsibility of Application programmers, determining how your existing process will need to be adapted, availability of communication modes, processes and channels etc and deciding on resource acquisition etc. Then you can be set to start. Outsourcing is a long term vision, so we at SIB Infotech, aim to forge extensive bond with our clients so that they transcend some trouble due to different time zone, people and culture.</p>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
