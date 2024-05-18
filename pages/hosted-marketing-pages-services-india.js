import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function HostedMarketingPagesServices() {
  return (
    <div>
        <Helmet>
            <title>Hosted Marketing Pages Services Companies Delhi London India UK SIB Infotech</title>
            <meta name="keywords" content="forum posting service,forum posting services,manual forum posting,seo forum posting,manual forum posting service,forum posting india,forum posting delhi,forum posting mumbai,forum posting chennai,forum posting bangalore,forum posting pune,forum posting hy"/>
            <meta name="description" content="SIB Infotech provides quality Forum posting services at very cheap prices. We post your links at online forums and at signatures to grow your business. We offer forum link building services and quality forum posting services to better enhance your website on the internet for search engines."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Hosted Marketing Pages</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Hosted Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Hosted Marketing </span> Company in India</strong></p>
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
                        <p>A professionally written full page of SEO optimized content that is themed to your services or products.</p>
                     </div>
                  </div>
                  <div className="col-md-1">
                     &nbsp;
                  </div>
               </div>
               <div className="row">
                <div className="col-md-6">
                  <p>This copy is hosted on a site from our private inventory of independent publishers. Embedded within the content is up to 3 targeted keyword links (we recommend no more than three) pointing to your website. Customer determines the tone of the copy such as promotional, informative, news, etc.</p>
                </div>
                <div className="col-md-4 offset-md-2">
                  <div className="custom-page-img">
                    <img alt="Hosted Marketing Pages Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      How can Hosted Marketing Pages help my site's rankings?</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-6">
                      <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">
                          Relevant Site, Relevant Page</p>
                        <p>
                          HMPs are all about relevancy. You get an entire page relevant to your keywords, hosted on a relevant site. Having links on a relevant page hosted on a relevant site is extremely effective for increasing your rankings.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">
                          Optimized Content</p>
                        <p>
                          Because we optimize the entire page around your keywords, the search engines will see that page as relevant to your site. Getting links from "perfectly" relevant pages is very powerful for increasing your rankings.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-6">
                      <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">
                          Embedded Links</p>
                        <p>
                          We embed links to your site within the content of each HMP. Embedded links are very natural looking and are much more powerful then links located on the side or bottom of a page.</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">
                          They Rank Themselves</p>
                        <p>
                          HMPs also have the added benefit of ranking well themselves. Because they are optimized and have links pointing to them, they will show up directly in the search engines and send pre-sold traffic directly to your site. Many companies love to use them for long tail keywords and reputation management. Imagine being able to have multiple listings for the same keywords!</p>
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
