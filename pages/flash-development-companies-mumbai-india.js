import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function FlashDevelopmentCopaniesMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Flash Website Designing & Development Companies Mumbai India</title>
            <meta name="keywords" content="Professional Web Design, Ecommerce, Online Marketing, Flash Web Design, Flash Design, Flash development companies, Flash website company India, India Flash website company, Flash website desgining companies in Mumbai, Mumbai Flash website. Flash Presentat"/>
            <meta name="description" content="Professional Flash Development Company in Mumbai, India providing Application Development in Flash Website Designing, Flash Application Developer for 2D, 3D Animation, flash web design solution"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Flash Development</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Development </span> Company in India</strong></p>
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
                        <p>Flash development in India has gained prominence as it helps attract your visitors by creating eye-catching flash animations and animated banners and it is also supported by all web browsers.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 order-lg-1 order-2">
                     <p>
                        Flash is an effective and visually appealing way of presenting the information of the organization on the website.
                     </p>
                     <p>
                        It is an amalgamation of animation, sound and dynamic web-pages that help in creating a lasting impression on the end-users through the medium of a website. Flash provides the designers with the power to develop animations and interactive movies that help in drawing more viewers. Moreover, as the graphics used in flash websites are based on mathematical functions instead of bitmaps, designers can easily increase and decrease their sizes without introducing the appearance of jagged edges with each change.
                     </p>
                     <p>
                        Exploiting our vast expertise in website designing, SIB Infotech are renowned flash development company, offering our clients with a unique design of website complete with Flash banners and introduction.
                     </p>
                  </div>
                  <div className="col-md-6 order-lg-2 order-1">
                     <div className="custom-page-img">
                        <img alt="Flash Development" className="img-fluid" src="assets/images/article-submission.png"/>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="custom-page-img">
                        <img alt="Flash Development Companies" className="img-fluid" src="assets/images/article-submission.png"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <p>
                        Working on Flash Application Development with a difference, we present optimum quality flash animations that set your site apart from the rest. Also, we completely understand the significance of your content and therefore create attention-grabbing and unique flash animations that will impress your clients without distracting them from your content.
                     </p>
                     <p>
                        We are a reliable and proficient flash development company, providing you with an effective multimedia, 3D animation and flash development services to enhance your internet business and attract your online customers. With our hands on experience, we are able to create a website which will give you continuous leads and high revenue making your website as the best marketing investment you ever made.
                     </p>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="custom-content-title">
                        <p>
                           Some of the exclusive features of our Flash development services are
                        </p>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>
                                    Attractive web pages complimented with sound and animation
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Flash movie presentations of the company's profile and its services
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Interactive user interface and enthralling user experience
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Customized animation including text, 2D animations, video clips and edits and image effects
                                 </p>
                              </li>
                           </ul>
                        </div>
                        <div className="col-md-6">
                           <ul>
                              <li>
                                 <p>
                                    Capability to design complex flash development structure as per your business requirements
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Expertise in creating a fast loading browser flash website that will facilitate your visitor to have fast browsing experience
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    High-quality flash website designs and flash scripting used to develop web applications such as online booking, vacation rentals, travel &amp; tourism, match making, and social networking sites.
                                 </p>
                              </li>
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
