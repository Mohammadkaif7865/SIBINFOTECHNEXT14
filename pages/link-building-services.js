import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';


export default function LinkBuildingServices() {
  return (
    <div>
        <Helmet>
            <title>Link Building Services Companies Delhi England London India UK SIB Infotech</title>
            <meta name="keywords" content="link building service,link building services,manual link building,seo link building,manual link building service,link building india,link building delhi,link building mumbai,link building chennai,link building bangalore,link building pune,link building hy"/>
            <meta name="description" content="SIB Infotech offers Professional link building services and link popularity building solutions. We offer reciprocal and non-reciprocal (one way) link building services, delivering high (PR) pagerank and relevant links. Outsource your link building campaigns to our link building team."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Link Building Services</h3>                            
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Link Building</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Link Building</span> Company in India</strong></p>
              <BannerForm/>
          </div>
      </div>
        <section id="sib-custom-page">
          <div className="containerFull">
            <div className="row">
               <div className="col-md-1">
                   
               </div>
               <div className="col-md-10">
                  <div className="service-sub-title">
                     <p>
                       Our experts specializes in white-hat, person to person, manual link building services for both traffic and rankings for world-className brands.
                     </p>
                  </div>
               </div>
               <div className="col-md-1">
                   
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <p>
                    Our link building service is designed to drive first-className relevant links to your site month after month. We know the value of link building in your SEO activity and we put every possible effort to achieve the best result.</p>
                  <p>
                    Our purpose is to bring the quick results via secure methods based on structuring &amp; placing links on top quality websites with high influence and towering Page Rank.</p>
                  <p>
                    We placed link manually based on your local preferences, site relevancy, number of outbound links and overall site quality. We approached only legal link building policy to gain maximum links for our clients. We offer content that relevant to the link &amp; website and original &amp; unique for viewer.</p>
                  <p>
                    We are here to provide excellence using 24X7 customer support service via phone, email or online as well. At SIB Infotech, our approach is to satisfy our clients’ need with using all our efforts &amp; SEO technique that help to achieve better search engine result &amp; earn the best ROI.</p>
               </div>
               <div className="col-md-6">
                  <div className="custom-page-img">
                     <img alt="Link building" src="assets/images/article-submission.png"/>
                  </div>
               </div>
               <div className="col-md-12 mt-4">
                <div className="custom-content-title">
                  <h2 className="mainCustom">
                    How can Hosted Marketing Pages help my site's rankings?</h2>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                  <h3 className="custom-box-title">
                    Link Building services in SIB Infotech</h3>
                  <p>
                    At SIB Infotech we provide a diverse range of SEO services &amp; we also use natural &amp; one-way links to your site by avoiding reciprocal links. We submit your links to only do follow attribute pages so it helps to improve ranking in search result page. We have an expert writer for crafting a relevant, unique &amp; rich content for your website including two to three links in each article. At the time of link submission, we provide you 250 words of article to express your message conveniently; it helps you to convert your site visitors into customers.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Our Strategy</p>
                  <p>
                    We only submit the links into the high PR or popular websites, our clients need not bothered themselves for any subscription or renewal payment. We believe in building in deep linking for your website &amp; we place the link for your website’s home page &amp; inner page as well.</p>
                  <p>
                    We’ve conventional set of link building strategies that guide our SEO &amp; business practices. Our experts take pride in their work and truly enjoy the taste of success.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                  <p className="custom-box-title">
                    Our Customer Approach</p>
                  <p>
                    Our services are all always cost effective &amp; give you a complete pleasure by providing a detailed report of our submission work so you can also analyze our performance.</p>
                </div>
              </div>
            </div>
          </div>
         </section>
    </div>
  )
}
