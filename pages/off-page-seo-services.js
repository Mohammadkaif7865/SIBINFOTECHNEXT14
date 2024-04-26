import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function OffPageSeoServices() {
  return (
    <div>
        <Helmet>
            <title>Off-Page SEO Optimization Services,  Get Quality Backlinks to your Website</title>
            <meta name="keywords" content="Off Page SEO, Off-Site Optimization Services, Off Page Optimization, Off Page SEO Optimization, Off Page SEO Analysis, spam free back links, quality backlinks, build backlinks"/>
            <meta name="description" content="SIB Infotech is the Top SEO Company in India offers Off-Page SEO Optimization Services which  focusing on building genuine and natural link building to drive organic traffic to your website. Using Our Own Proven methods to get quality backlinks which are 100% genuine and spam free."/>
            <link rel="canonical" href="https://www.sibinfotech.com/off-page-seo-services"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Off Page SEO Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">OFF Page SEO  </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">OFF Page SEO  </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section className="customPadding">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                        <p className="customText">
                            Search Engine Optimisation (SEO) is one of the most useful tools to drive the targeted traffic to your brand's website. It helps to acquire new leads, increases the quality and quantity of your website's organic traffic and ensures efficiency. Off-page SEO activity is the heart for any website that looks upon to grow drastically and engage in huge traffic. Off-page optimization involves improvisation of the off-site ranking factors of the website. It is a highly contributing tool that helps the search crawlers understand that the website is valuable and worth as the brand and website are popular and trustworthy.</p>
                        <p className="customText">
                            The profitable results of SEO tools can be only devoured by any business if they choose and invest in a reliable Off-page SEO company. At SIB Infotech we make sure that your brand acquires the top rankings with our services that are the best in India. We are amongst the top SEO companies in India.</p>
                        <p className="customText">
                            The factors that make up off-page optimization are the crucial role players in building audiences and boosting the website rankings.</p>
                    </div>
                    <div className="col-lg-5">
                        <img className="image-full" src="assets/images/off-page-seo-company-india.png" alt="off-page-seo-company-in-india"/></div>
                </div>
            </div>
        </section>
        <section className="customPadding bgGrey">
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    <span className="text_red">Off page SEO </span>services</h3>
                <p className="customText text-center">
                    The off-page SEO factors are a great trust builder to the search engines. Without off-page optimization, your page cannot attain the top ranks of the search engines and make it worthwhile for the audience.</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="off-page-seo-box">
                            <div className="off-page-seo-box-heading">
                                <div className="img-circle">
                                    <img src="assets/images/icons/off-page-seo-link-building.svg" alt="off-page-seo-link-building"/></div>
                                <h4>
                                    Link building</h4>
                            </div>
                            <p className="customText">
                                building backlinks is the core role of the off-page SEO strategy. The search engines highly rely on the backlinks for indications of linked content quality. There are three types of link that are mentored under link building.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="off-page-seo-box">
                            <div className="off-page-seo-box-heading">
                                <div className="img-circle">
                                    <img src="assets/images/icons/off-page-seo-brand-mention.svg" alt="off-page-seo-brand-mention"/></div>
                                <h4>
                                    Brand mentions</h4>
                            </div>
                            <p className="customText">
                                brands are trusted more by the audience, the brand forums, articles and reviews are the key factors that include the mentions but they don't need to have links pointing to the website. Google crawlers prioritize brand mentions to a great extent which leads the website to be in the top results of the search engines.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="off-page-seo-box">
                            <div className="off-page-seo-box-heading">
                                <div className="img-circle">
                                    <img src="assets/images/icons/off-page-seo-social-media-marketing.svg" alt="off-page-seo-social-media-marketing"/></div>
                                <h4>
                                    Social media marketing</h4>
                            </div>
                            <p className="customText">
                                social media platforms play a very important role in link building and attracting the audience.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="off-page-seo-box">
                            <div className="off-page-seo-box-heading">
                                <div className="img-circle">
                                    <img src="assets/images/icons/off-page-seo-guest-blogging.svg" alt="off-page-seo-guest-blogging"/></div>
                                <h4>
                                    Guest blogging</h4>
                            </div>
                            <p className="customText">
                                writing guest posts on other websites often links back to your website. Guest blogging increases the chances of the audience visits as the guest blog links are a key part of the backlink profile.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="off-page-seo-box">
                            <div className="off-page-seo-box-heading">
                                <div className="img-circle">
                                    <img src="assets/images/icons/off-page-seo-keywords.svg" alt="off-page-seo-keywords"/></div>
                                <h4>
                                    Keywords</h4>
                            </div>
                            <p className="customText">
                                when relevant keywords are integrated in the website content, it makes it far more attractive and useful for the audience leading to more traffic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding radiudNone blueBg">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h5 className="text-off-white text-center margin-bottom">
                            Our strategy</h5>
                        <h3 className="customHeading text-center text-white">
                            off-page SEO strategy</h3>
                        <p className="customText text-center text-off-white">
                            takes your brand to the top shelves of the digital world. With our expertise, experience, and excellence, we can help your brand reach the heights of the market in no time.</p>
                    </div>
                    <div className="col-lg-5 text-center">
                        <p className="customText text-off-white">
                            Our services increase organic search engine ranking drastically and getting the best placements for your website along with reach to new customers.</p>
                        <Link className="action-btn" href="/contact-us">Speak to our experts</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <h3 className="customHeading">
                            Why is <span classNameName="text_red">Off-Page SEO</span> important?</h3>
                        <p className="customText text-justify">
                            Off-page SEO services are action performed outside your website after it goes live which would impact your rankings within the search results. Off-page SEO deals with the external links that direct traffic to your website organically, also known as 'backlinks' and this plays a very important role in link building. Off-page optimization deals with regulating the backlinks on other publisher's pages including blogs, which leads to building a reliable spot on the search engine and the website rankings are set to the sky.</p>
                        <p className="customText text-justify">
                            The image of your business depends on its reputation and rankings on the search engines. There a plenty of benefits that a business attains from executing an off-page SEO strategy.</p>
                        <p className="customText text-justify">
                            Our strategy helps your company get to the top ranking on major search engines by using self-developed effective techniques with years of experience using White Hat SEO practices.</p>
                        <p className="customText text-justify">
                            Experts at SIB, implement their experience, knowledge, and excellence to improve your website's SEO performance and optimize it to take your business to the new heights of success.</p>
                    </div>
                    <div className="col-lg-7">
                        <div className="off-page-seo-important-box-row">
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-engine-rankings.svg" alt="off-page-seo-engine-rankings"/>
                                <h5>
                                    Higher search engine rankings</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-increase-page-rank.svg" alt="off-page-seo-increase-page-rank"/>
                                <h5>
                                    Increased PageRank</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-expanded-exposure.svg" alt="off-page-seo-expanded-exposure"/>
                                <h5>
                                    Expanded exposure</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-embeded-trust.svg"  alt="off-page-seo-embeded-trust"/>
                                <h5>
                                    Embed trust among the audience</h5>
                            </div>
                        </div>
                        <div className="off-page-seo-important-box-row">
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-brings-the-right-traffic.svg"  alt="off-page-seo-website-traffic"/>
                                <h5>
                                    Brings the right traffic to your website</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-increase-conversion.svg"  alt="off-page-seo-increase-conversion"/>
                                <h5>
                                    Increases conversions</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-lead-generation.svg"  alt="off-page-seo-lead-generation"/>
                                <h5>
                                    Lead generation</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-boost-brand-awareness.svg"  alt="off-page-seo-boost-brand-awareness"/>
                                <h5>
                                    Boosts brand awareness</h5>
                            </div>
                        </div>
                        <div className="off-page-seo-important-box-row">
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-highly-ecomocial.svg"  alt="off-page-seo-highly-ecomocial"/>
                                <h5>
                                    Highly economical</h5>
                            </div>
                            <div className="off-page-seo-important-box">
                                <img src="assets/images/icons/off-page-seo-increase-visibility.svg" alt="off-page-seo-increase-visibility"/>
                                <h5>
                                    Increases visibility of your brand</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding blueBg2">
            <div className="containerFull">
                <div className="callAction">
                    <h3 className="text-white">
                        We believe in delivering service with the perfection that leads to worldwide 750+ happy clients</h3>
                    <p className="customText text-off-white">
                        We ensure that your brand gets the desired exposure it needs.</p>
                    <Link href="/request-a-quote">Speak to our social media marketing experts</Link></div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#528af9" fill-opacity="1"></path> </svg>
            </div>
        </section>
        <section className="customPadding">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="increaes-ranking-list">
                            <ul>
                                <li>
                                    <p className="customText">
                                        Market research and analysis</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Focusing on quality link building strategy</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Creation of original, fresh and SEO optimized content</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Building relations with industry influencers</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Integrating natural and manual links</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Guest post creation on numerous blogs and websites</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Searching for broken links on the external platforms</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Optimizing existing contents of the website</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Maintenance and support</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Monthly progress reports</p>
                                </li>
                                <li>
                                    <p className="customText">
                                        Transparent performance statistics</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <h3 className="customHeading">
                            Increase Ranking from SIB <span className="text_red"> Off-Page SEO</span> services</h3>
                        <p className="customText">
                            We offer the best services that you can get for off-page optimization of your website. Building links if the ultimate key in off- page optimization and we build 100% spam free quality backlinks to website which have high quality relevant content.</p>
                        <p className="customText">
                            Our service can be the ultimate solution for your website to bring it to the top or most visited search results on the search engines.</p>
                        <p className="customText">
                            A business should never ignore the factors that make up the on-page structure of their website, the efforts made for the on-page optimization can boost the website traffic, boost audience engagement and raise the rankings in a very short time.</p>
                        <p className="customText">
                            Our On-page SEO strategy helps your company get to the top ranking on major search engines by using self-developed effective techniques with years of experience using white hat SEO practices.</p>
                        <p className="customText">
                            Our experts implement their experience, knowledge, and excellence to improve your website's SEO performance and optimize it to take your business to the new heights of success.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding zIndex position-relative blueBg">
            <div className="containerFull">
                <div className="callAction">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h3>
                                Are you ready to launch the #1 Off-page SEO strategy with the #1 SEO agency in INDIA?</h3>
                            <Link href="/contact-us">Speak to our Experts</Link></div>
                    </div>
                </div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#2d6deb" fill-opacity="1"></path> </svg>
            </div>
        </section>
    </div>
  )
}
