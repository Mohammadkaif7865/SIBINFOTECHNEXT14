import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function KeywordResearchMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Conduct Keyword Research & Analysis Services London India UK SIB Infotech</title>
            <meta name="keywords" content="keyword research service,keyword research services,seo keyword research,keyword research india,keyword research delhi,keyword research mumbai,keyword research chennai,keyword research bangalore,keyword research pune,keyword research hyderabad,keyword rese"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Keyword Research</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Keyword Research </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                  <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                  <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Keyword Research </span> Company in India</strong></p>
                  <BannerForm/>
            </div>
         </div>
        <section>
          <div className="containerFull">
            <div className="row align-items-center">
               <div className="col-lg-6">
                  <h3 className="customHeading customLineHeight2">
                     The two things are the base for foundation for search engine <span>Optimization</span> and <span>Efficient</span> website copywriting to draw attention of targeted visitors that is <span>Keyword</span> &amp; <span>Content</span>
                  </h3>
                  <p className="customText margin-top">
                     The combination of keyword research and content can effect in strong visibility, targeted pages that perform the result in conversions. Keyword Research is a method for shaping the keywords that you should target with your SEO efforts.
                  </p>
                  <p className="customText">
                     SIB Infotech is the one stop solutions for your all seo requirements and has a suite of affordable, quick, responsive keyword and keyword research tools to help with your PPC and SEO campaigns.
                  </p>
                  <Link className="dark-btn" href="https://www.sibinfotech.com/#requestQuote">Speak To Our Experts</Link>
               </div>
               <div className="col-lg-6">
                  <div className="keyword-img-section">
                     <img alt="Keyword-Analysis-Company-In-Mumbai" className="image-full" src="assets/images/keyword-analysis-company-in-mumbai.png"/>
                  </div>
               </div>
            </div>
          </div>
         </section>
    </div>
  )
}
