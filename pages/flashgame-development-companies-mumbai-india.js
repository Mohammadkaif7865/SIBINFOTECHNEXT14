import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
export default function FlashGameDevelopmentCompanies() {
  return (
    <div>
        <Helmet>
            <title>Flash Game Development Services Companies India USA UK Asia</title>
            <meta name="keywords" content="flash game development services india,flash game development services bangalore,flash game development services mumbai,flash game development services delhi,flash game development services ,chennai,flash game development services pune,flash game developme"/>
            <meta name="description" content="SIB Infotech takes pride in introducing itself as one of the leading providers of Flash game development to prominent clients both in India and overseas. We have a team of expert Flash game developers who are well versed and experienced to revamp your website by incorporating Flash based hi-end solutions, especially gaming."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Flash Game Development</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Game Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Game Development </span> Company in India</strong></p>
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
                        <p>While this has been an innovative way to increase traffic to your website, it has at the same time given rise to stiffer competition in the arena of Flash games development.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                <div className="col-md-6">
                  <p>The world of online gaming is captivates most internet savvy people and entices them to spend considerable time playing online.In such a scenario, keeping the visitors glued to your website and turning the first time visitors into permanent users is nonetheless a challenging task. You need extraordinarily entrancing and highly interactive interface, exceptionally designed graphics, and innovative ideas.</p>
                  <p>SIB Infotech takes pride in introducing itself as one of the leading providers of Flash game development to prominent clients both in India and overseas. We have a team of expert Flash game developers who are well versed and experienced to revamp your website by incorporating Flash based hi-end solutions, especially gaming.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Flash Game Development Companies" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Quality is our utmost concern</p>
                    <p>
                      Quality is what each of our Flash game developer endeavors to deliver. The developers have hands on experience in various technologies encompassing .NET, XML, JAVA and Flash to name a few.</p>
                    <p>
                      Vast experience and exposure to various technologies has enabled our developers to take on the challenging task of Flash based games development without missing the deadlines.</p>
                  </div>
                  <div className="custom-page-icon-box icon-with-title">
                    <p className="custom-box-title">
                      Outsourcing the Flash gaming development with us bestows you with</p>
                    <ol>
                      <li>
                        <p>
                          Cost-efficient development of Flash based games</p>
                      </li>
                      <li>
                        <p>
                          More powerful and attractive interface</p>
                      </li>
                      <li>
                        <p>
                          Stimulating games that keep the audience engaged</p>
                      </li>
                      <li>
                        <p>
                          Hi-end synchronized gaming solutions</p>
                      </li>
                      <li>
                        <p>
                          Scalable, reliable, robust and innovative games</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
         </section>
    </div>
  )
}
