import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function GuaranteedTopSearchEngineRankingCompany() {
  return (
    <div>
        <Helmet>
            <title>Guaranteed Top 10 Ranking in Search Engines Mumbai London India UK SIB Infotech</title>
            <meta name="keywords" content="seo services in delhi,seo services in mumbai,seo services in chennai,seo company services,seo services firm,outsource seo,web seo services,cheap seo services india,seo india,seo company,best seo services india,seo tips,outsourcing seo services,seo package"/>
            <meta name="description" content="SIB Infotech is world's leading SEO Company offering guaranteed Google top 10 ranking and Top 10 Ranking on Yahoo and Bing Search Engines with money back offer. We are professional seo consultant company, provide guaranteed top10 ranking seo services, we offer lowest seo price and payment only after proven result."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Guaranteed Top 10 Search Engine Rankings</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Search Engine Rankings Company</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Search Engine Rankings Company</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
          <div className="containerFull">
              <div className="row">
                 <div className="col-lg-5">
                    <div className="seo-results-heading-section bgWhite">
                       <h2 className="customHeading customLineHeight2">
                          <span>SEO</span> helps increase your business prospects and with proper <span>SEO </span>services you can give your business a boost that is not possible with any other marketing technique
                       </h2>
                    </div>
                 </div>
                 <div className="col-lg-7">
                    <p className="customText">
                       Search engine optimization is the process of increasing the popularity of your business over the internet.SEO Outsourcing India makes sure that your business gets the top ten SEO rankings, the best of clients and maximum benefits.
                    </p>
                    <p className="customText">
                       We provide you with the best strategies to take your business to the top ten SEO rankings. Guaranteed top ten ranking is what you can expect for your business with us.
                    </p>
                    <p className="customText">
                       SIB InfoTech’s top 10 ranking report show up Google’s ranking algorithm and let you know in clear words how to optimize and arrange your website purposely for improved results in Google.
                    </p>
                 </div>
              </div>
            </div>
         </section>
         <section>
          <div className="containerFull">
            <div className="middle-img-section">
               <img alt="Social-Bookmarking-Services-Company" className="image-full" src="assets/images/seo-results-img.png"/>
            </div>
          </div>
         </section>
         <section className="customPadding bgGrey">
            <div className="containerFull">
                <h3 className="customHeading text-center">
                It's is a simple <span>5 step</span> process
                </h3>
                <div className="seo-results-row">
                <div className="seo-results-process-box">
                    <span>1</span>
                    <p className="customText">
                        Decide what keywords you want to rank for and submit a free SEO quote request.
                    </p>
                    <div className="step-line">
                        
                    </div>
                </div>
                <div className="seo-results-process-box">
                    <span>2</span>
                    <p className="customText">
                        We will get back to you within 1 business day with a customized price quote. Our rates start at $500 per month for a top 10 ranking.
                    </p>
                    <div className="step-line">
                        
                    </div>
                </div>
                <div className="seo-results-process-box">
                    <span>3</span>
                    <p className="customText">
                        If you accept our quote, we require 50% (of the monthly fee quoted) as a deposit.
                    </p>
                </div>
                </div>
                <div className="seo-results-second-row">
                <div className="seo-results-process-box lg-width margin-right">
                    <span>5</span>
                    <p className="customText">
                        Once we achieve top 10 rankings we will request your full recurring monthly fee. If for some reason we fail to achieve first page rankings within 12 weeks we will refund 100% of your deposit.
                    </p>
                    <div className="step-line">
                        
                    </div>
                </div>
                <div className="seo-results-process-box margin-right">
                    <span>4</span>
                    <p className="customText">
                        We begin working on your project.
                    </p>
                    <div className="step-box">
                        
                    </div>
                </div>
                </div>
            </div>
         </section>
    </div>
  )
}
