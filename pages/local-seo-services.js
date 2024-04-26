import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function LocalSeoServices() {
  return (
    <div>
        <Helmet>
            <title>Best Local SEO Company India,  Local SEO Services Agency Mumbai</title>
            <meta name="keywords" content="Local SEO services in India, Local SEO Services in India, Local Marketing Services India, Best Local SEO Agency"/>
            <meta name="description" content="SIB Infotech is rated as Top Local SEO Company In India, we offer local SEO services ot make you company rank on top on local search results. Our affordable google local SEO service packages ensures getting you listed on the first page listing of Google Maps for your local city"/>
            <link rel="canonical" href="https://www.sibinfotech.com/local-seo-services"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">Local SEO Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Local SEO Services</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Local SEO Services</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="customHeading">
                            Get your company Listed on first page listings of Google Maps in your <span className="text_red">Local City!</span></h3>
                        <p className="customText">
                            Majority of the internet users these days use location-based search when they are looking for the required products and services or find a local business on Google Maps.</p>
                        <p className="customText">
                            Local SEO refers to optimizing your company website for a specific geographical Location. It is one of the important services for a company which has majority of their clients in a specified location or their business is local business and limited to a specific area. The major benefit of local SEO is it would bring in location-based traffic for your local business.</p>
                        <p className="customText">
                            Generally, local SEO is a combination of several factors that need to be maintained and organized by SEO experts to ensure the success of your business as well as the website.</p>
                        <p className="customText">
                            Local Search Engine Optimisation is a sub-branch of SEO that focuses on the growth of the local businesses that are found on the local search results. These local businesses are found via online searches like -</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-resturaent.svg" alt="Restaurant"/></div>
                                    <h4>
                                        Restaurants near me</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-company.svg" alt="SEO Companies"/></div>
                                    <h4>
                                        SEO Companies near me</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-doctor.svg" alt="Doctors"/></div>
                                    <h4>
                                        Doctors near me</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-website.svg" alt="Website Desining Companies"/></div>
                                    <h4>
                                        Website Designing companies near me</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-mall.svg" alt="Malls"/></div>
                                    <h4>
                                        Malls in (city name)</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 mt-lg-0 mt-3">
                                <div className="itemDigital customShadow whiteBgItem">
                                    <div className="iconDigi">
                                        <img src="assets/images/icons/local-seo-shop.svg" alt="Shops"/></div>
                                    <h4>
                                        Shops in (location) and many more</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-4 customPadding">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="section-4-left text-center">
                            <h3 className="customHeading text-white">
                                Be the Leader of Your Local Market</h3>
                            <p className="customText text-white">
                                through Local SEO Services in India</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="section-4-right text-center">
                            <Link className="customBtn" href="/contact-us">Speak to our local SEO Experts</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding bgGrey">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="box-row-1 mt-4">
                            <div className="services-box">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/local-seo-feedback.svg" alt="best-local-seo-firm-in-mumbai"/></div>
                                <div className="content">
                                    <h4>
                                        Online Reviews</h4>
                                    <p className="customText">
                                        84% of the potential customers buy your product based on the reviews, a business should always manage and optimize reviews about themselves.</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/on-page-seo-keywords.png" alt="best-local-seo-firm-in-delhi"/></div>
                                <div className="content">
                                    <h4>
                                        Website content</h4>
                                    <p className="customText">
                                        these are responsible for providing info about your website to the search engines and are useful for increasing CTR</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle bg-yellow">
                                    <img src="assets/images/icons/local-seo-my-business.svg" alt="best-local-seo-firm-in-india"/></div>
                                <div className="content">
                                    <h4>
                                        Google My Business</h4>
                                    <p className="customText">
                                        Local business should always claim their business on google as it can bring incredible results. GMB is a big directory and utilizing its services can prove highly beneficial to small local businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-row-1">
                            <div className="services-box services-box-ex-height">
                                <div className="icon-circle bg-yellow">
                                    <img src="assets/images/icons/local-seo-company-mumbai.svg" alt="best-local-seo-company-in-mumbai"/></div>
                                <div className="content">
                                    <h4>
                                        Title tags and meta description</h4>
                                    <p className="customText">
                                        these are the HTML elements of your website that reflect the contents on your page. The title and description tags are displayed on SERPs which is the fir thing the audience sees, this element is the miniature of your business and should be crafted with expertise.</p>
                                </div>
                            </div>
                            <div className="services-box services-box-ex-height">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/local-seo-firm-in-mumbai.svg" alt="best-local-seo-company-in-delhi"/></div>
                                <div className="content">
                                    <h4>
                                        Local structured data mark-up</h4>
                                    <p className="customText">
                                        these are an important part of the website’s code as they provide the search engines the information about your business which includes your products and services along with the reviews.</p>
                                </div>
                            </div>
                            <div className="services-box services-box-ex-height">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/local-seo-firm-in-india.svg" alt="best-local-seo-company-in-india"/></div>
                                <div className="content">
                                    <h4>
                                        Online directories and citations</h4>
                                    <p className="customText">
                                        claiming the business on online listings is a game-changer move for enhancing and growing the business. Your business must get listed correctly on the business directories if this is avoided search engines might show wrong or unwanted information to the audience that can lead to heavy losses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-4 leftDigiSer">
                        <div className="heading-section">
                            <h3 className="customHeading text-white">
                                Why Hire a Local SEO Company?</h3>
                            <p className="customText text-off-white">
                                Customers mostly search companies by city name or local area name for the required products and services in a particular area. So when they search Google provides with top local company names and location which matches best to the search terms on their google map display results. 50% of the people that do local search avail the services via the physical stores within a day or two.</p>
                            <p className="customText text-off-white">
                                Your business needs to hire an expert Local SEO agency that ensures high-quality and measurable results. Investing in a suitable and reliable Local SEO company increases the chances of success for your business. SIB Infotech is among the best SEO company in India that expertise in Local SEO services brining in your company listing on top of google maps listings. Our services guarantee that your business is depicted to the audience as the one and only service provider they can rely on.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h3 className="text-center mt-lg-0 mt-4 customSubHeading">
                            There are numerous benefits a local business can extract from SEO :</h3>
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-cost-effective.svg"  alt="local-seo-firms-in-delhi"/>
                                <h4>
                                    Low Investment</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/off-page-seo-increase-visibility.svg" alt="local-seo-firms-in-mumbai"/>
                                <h4>
                                    Online visibility for Local customers</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/off-page-seo-brings-the-right-traffic.svg" alt="local-seo-firms-in-india"/>
                                <h4>
                                    Increased web traffic and audience engagement from local visitors</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-company-in-delhi.svg" alt="local-seo-firm-in-mumbai"/>
                                <h4>
                                    Staying competitive with the competitors</h4>
                            </div>
                        </div>
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-company-in-india.svg" alt="local-seo-firm-in-delhi"/>
                                <h4>
                                    Targeted geographic campaigns</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-company-in-mumbai.svg" alt="local-seo-firm-in-india" />
                                <h4>
                                    Building links</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-companies-in-delhi.svg" alt="local-seo-agencies-in-mumbai"/>
                                <h4>
                                    Gaining repeat customers</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-build-reputation.svg" alt="local-seo-agencies-in-india"/>
                                <h4>
                                    Builds community, reputation and customer relations</h4>
                            </div>
                        </div>
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-build-trust.svg" alt="local-seo-agencies-in-delhi"/>
                                <h4>
                                    Builds trust with high rankings</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-img-30.svg" alt="local-seo-agency-in-mumbai"/>
                                <h4>
                                    Increased local reviews</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-agency-in-india.svg" alt="local-seo-agency-in-india"/>
                                <h4>
                                    Reduced advertisement expenses</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/local-seo-agency-in-delhi.svg" alt="local-seo-agency-in-delhi"/>
                                <h4>
                                    Exposure to local business directories</h4>
                            </div>
                        </div>
                        <p className="customText text-center mt-2">
                            The local SEO strategies focus on highlighting the local businesses according to the audience searches. Optimization of the website plays a crucial role to establish your existence on Google’s local search landscape. The local SEO factors play a dominating role in ranking the page higher for local SERPs.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="customPadding bgGrey">
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="invest-row mt-4">
                            <div className="list-box">
                                <ul>
                                    <li>
                                        <p className="customText">
                                            Local Competitor Analysis</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Local Keyword Research</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Other Local Business Listings</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Improving the internal linking</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Inbound linking</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Adding location information of your business</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Creation of locally optimized content</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            24*7 maintenance and support</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="list-box">
                                <ul>
                                    <li>
                                        <p className="customText">
                                            Optimization of existing website content</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Ensuring that your contact info is updated and consistent on your business page</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Online directory optimization and citations</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Managing &amp; Optimizing Google My Business Listings</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Optimization of URLs, title tags, headers, and meta description</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Social media posts relevant to Google My business</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Transparent progress reports and stats</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="customText">
                            We guarantee expertise, experienced team and excellent services which assure growth and success of your business that makes and non-washable imprint on the customer’s mind.</p>
                    </div>
                    <div className="col-lg-5">
                        <h3 className="customHeading mt-4">
                            SIB <span className="text_red">Local SEO</span> Services</h3>
                        <p className="customText">
                            A business should always invest in the best. Our optimization strategies assure long-lasting and profitable results that can take your business to the top most levels of the local business hierarchy.</p>
                        <img className="image-full negetive-margin-left" src="assets/images/local-seo-page-img.svg" alt="Local SEO company in India"/></div>
                </div>
            </div>
        </section>
        <section class="customPadding zIndex position-relative blueBg">
            <div class="containerFull">
                <div class="callAction">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <h2 class="text-white mb-4">
                                Are you ready to lead the online local business top rankings?</h2>
                            <Link href="/contact-us">Speak to our Experts</Link></div>
                    </div>
                </div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#2d6deb" fill-opacity="1"></path> </svg>
                </div>
        </section>
    </div>
  )
}
