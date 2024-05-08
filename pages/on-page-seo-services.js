import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function OnPageSeoServices() {
  return (
    <div>
        <Helmet>
            <title>On-Page SEO & On-Site Optimization Services, SEO Analysis Company India</title>
            <meta name="keywords" content="On Page SEO, On-Site Optimization Services, On Page Optimization, On Page SEO Optimization, On Page SEO Analysis."/>
            <meta name="description" content="SIB Infotech is the Top SEO Company in India offers On-Page SEO & On-Site Optimization Services which  enables Google to read and rank your website ensure you #1 position on organic results"/>
            <link rel="canonical" href="https://www.sibinfotech.com/on-page-seo-services"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">On Page SEO Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">On Page SEO  </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">On Page SEO  </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row my-3">
                    <div className="col-md-5">
                        <img className="image-full" src="assets/images/on-page-seo-company-in-india-mumbai.svg" alt="on-page-seo-company-in-india"/></div>
                    <div className="col-md-7">
                        <p className="customText">
                            Search Engine Optimisation(SEO) is one of the best tools to drive valuable traffic to your website, it helps to acquire new leads and your website runs far more efficiently.</p>
                        <p className="customText">
                            On-page SEO is considered to be the fundamental factor of Search Engine Optimisation strategies. Experts believe that on-page optimization must be prioritized constantly.</p>
                        <p className="customText">
                            On-page SEO is the sub-category that is useful in optimizing the on-page contents of your website which boosts your website ranking higher on search engines. It focuses on website tools like structure, content, and appearance. It includes the optimization of HTML tags and images on the website of your brand.</p>
                        <p className="customText">
                            There are numerous factors that search engines consider while ranking the websites, these factors are mentored and maintained under on-page SEO strategies. These factors highly influence any brand's website rankings to a great extent.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="customHeading text-center">
                            On page <span className="text_red">SEO services</span></h3>
                        <div className="box-row-1 mt-4">
                            <div className="services-box">
                                <div className="icon-circle bg-yellow">
                                    <img src="assets/images/icons/on-page-seo-content123.svg" alt="On Page SEO"/></div>
                                <div className="content">
                                    <h4>
                                        Website content</h4>
                                    <p className="customText">
                                        it is what the audience looks for</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/on-page-seo-title.png" alt="On Page SEO Meta Tags"/></div>
                                <div className="content">
                                    <h4>
                                        Meta tags</h4>
                                    <p className="customText">
                                        these are responsible for providing info about your website to the search engines and are useful for increasing CTR</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle bg-yellow">
                                    <img src="assets/images/icons/on-page-seo-url.png" alt="oOn Page SEO URLs" /></div>
                                <div className="content">
                                    <h4>
                                        URLs</h4>
                                    <p className="customText">
                                        these increase the visibility of your website. Google looks for URL integrated content on websites, URLs play a crucial role in increasing your website's rank</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-row-1">
                            <div className="services-box">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/on-page-seo-browser.png" alt="On Page SEO Title Tags"/></div>
                                <div className="content">
                                    <h4>
                                        Title tags</h4>
                                    <p className="customText">
                                        the first thing audience sees is the title and it the sole factor that helps them to determine if they want to visit or skip the website</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle bg-yellow">
                                    <img src="assets/images/icons/on-page-seo-keywords.png" alt="On Page SEO Keywords"/></div>
                                <div className="content">
                                    <h4>
                                        Keywords</h4>
                                    <p className="customText">
                                        when relevant keywords are integrated in the website content, it makes it far more attractive and useful for the audience leading to more traffic</p>
                                </div>
                            </div>
                            <div className="services-box">
                                <div className="icon-circle">
                                    <img src="assets/images/icons/on-page-seo-content123.svg" alt="Website Content"/></div>
                                <div className="content">
                                    <h4>
                                        Website content</h4>
                                    <p className="customText">
                                        these are responsible for providing info about your website to the search engines and are useful for increasing CTR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-4 leftDigiSer">
                        <div className="heading-section">
                            <h3 className="customHeading text-white">
                                How can on-Page optimization Service Help your website?</h3>
                            <p className="customText text-off-white">
                                The image of your business relies on its Reputation and rankings on the search engines. The audience always chooses the top results of the search engines to avail services and purchase products. A brand should always ensure that its website is always updated as per the market needs and trends to acquire the top ranking.</p>
                            <p className="customText text-off-white">
                                Your business leads the market only if it is on the top pages of search engines. People tend to be attracted to the top best search results on search engines like Google, Yahoo or Bing.</p>
                            <p className="customText text-off-white">
                                The fruitful outcomes of SEO can be only devoured by any business if they choose and invest in a reliable On-page SEO company. At SIB Infotech we make sure that your brand acquires the top rankings with our services that are the best in India. On-page SEO optimizes your website in such a way that it is understandable by the search engines and is relevant to the audience search queries. There a plenty of benefits that a business attains from integration on-page optimization.</p>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-boost-brand-awarness.svg" alt="on-page-seo-boost-your-brand-awarness"/>
                                <h4>
                                    Boosts your brand awareness</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-highly-measurable.svg" alt="on-page-highly-measurable"/>
                                <h4>
                                    Highly measurable</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-cost-effective.svg" alt="on-page-seo-cost-effective"/>
                                <h4>
                                    Cost-effective</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-increase-visibility.svg" alt="on-page-seo-increase-visibility"/>
                                <h4>
                                    Increases visibility of your brand</h4>
                            </div>
                        </div>
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-website-speed.svg" alt="on-page-seo-website-speed"/>
                                <h4>
                                    Improves your website's speed and interface</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-brings-the-right-traffic.svg" alt="on-page-seo-brings-the-right-traffic"/>
                                <h4>
                                    Brings the right traffic to your website</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-increase-conversion.svg"  alt="on-page-seo-increase-conversion"/>
                                <h4>
                                    Increases conversions</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-increase-sales.svg" alt="on-page-seo-increase-sales"/>
                                <h4>
                                    Increases sales</h4>
                            </div>
                        </div>
                        <div className="middle-row">
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-decreases-cost-per-acquisition.svg"  alt="on-page-seo-Decreases-cost per-acquisition"/>
                                <h4>
                                    Decreases cost per acquisition</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-build-trust.svg"  alt="on-page-seo-build-trust"/>
                                <h4>
                                    Builds trust and credibility</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-seo-purchase-decisions.svg"  alt="on-page-seo-purchase-decisions"/>
                                <h4>
                                    Influences purchase decisions</h4>
                            </div>
                            <div className="middle-box">
                                <img src="assets/images/icons/on-page-cost-effective.svg"  alt="on-page-seo-cost-effective"/>
                                <h4>
                                    Cost-effective</h4>
                            </div>
                        </div>
                        <div className="para-section">
                            <p className="customText">
                                A business should never ignore the factors that make up the on-page structure of their website, the efforts made for the on-page optimization can boost the website traffic, boost audience engagement and raise the rankings in a very short time.</p>
                            <p className="customText">
                                Our On-page SEO strategy helps your company get to the top ranking on major search engines by using self-developed effective techniques with years of experience using white hat SEO practices.</p>
                            <p className="customText">
                                Our experts implement their experience, knowledge, and excellence to improve your website's SEO performance and optimize it to take your business to the new heights of success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bgGrey">
            <div className="containerFull">
                <h3 className="customHeading mt-4 text-center">
                    Invest in <span className="text_red">on-page SEO </span>services from SIB Infotech</h3>
                <p className="customText text-center">
                    Our On-page SEO services are the best you can get for your website. Our service can be the ultimate solution for your website to bring it to the top or most visited search results on the search engines.Our experts implement their experience, knowledge, and excellence to improve your website's SEO performance and optimize it to take your business to the new heights of success.</p>
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="invest-row mt-4">
                            <div className="list-box">
                                <ul>
                                    <li>
                                        <p className="customText">
                                            Deep keyword research &amp; analysis</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Focus on trending keywords</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Integration of On-Page technical elements</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Decreases cost per acquisition</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Improving title tags and description metatags</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Creating efficient, fresh and quality content</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Optimize the website's content</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="list-box">
                                <ul>
                                    <li>
                                        <p className="customText">
                                            Improve page speed</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Integrate responsive website design</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Enhance and add visual content</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Improve page speed</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Integrate responsive website design</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Monthly progress reports and statistics</p>
                                    </li>
                                    <li>
                                        <p className="customText">
                                            Crawl error optimization</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <img alt="on-page-seo-invest" className="image-full" src="assets/images/on-page-seo-invest.svg"/></div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h3 className="customHeading">
                            <span className="text_red">On page SEO</span> optimizations Service for:</h3>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/wordpress-logo.svg" alt="Wordpress Website"/>
                                    <h4>
                                        Wordpress Websites</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img  className="sm-img" src="assets/images/icons/on-page-img-ecommerce-website.svg" alt="on-page-img-ecommerce-website"/>
                                    <h4>
                                        Ecommerce Websites</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/on-page-seo-woo-commerce.svg" alt="on-page-seo-woo-commerce-website"/>
                                    <h4>
                                        Woo commerce Websites</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/on-page-seo-shopify-website.svg" alt="on-page-seo-shopify-website"/>
                                    <h4>
                                        Shopify Websites</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/on-page-seo-big-commerce-website.svg" alt="on-page-seo-big-commerce-website"/>
                                    <h4>
                                        Big Commerce Websites</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/on-page-seo-magento-website.svg" alt="on-page-seo-magento-website"/>
                                    <h4>
                                        Magento Websites</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="optmize-box">
                                    <img src="assets/images/icons/on-page-seo-custom-build-website.svg" alt="on-page-seo-custom-build-website"/>
                                    <h4>
                                        Custom Built Websites</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 graphic-why-us-right">
                        <div className="background-blue">
                            <h3 className="customHeading text-white customLineHeight">
                                We help you give your business the attention it deserves</h3>
                            <p className="customText text-off-white">
                                We expertise in getting 1st page results on google, yahoo, bing and other search engines.</p>
                            <p className="customText text-off-white">
                                We guarantee 24*7 support to make sure that our services provide you the best results.</p>
                            <p className="customText text-off-white">
                                Our on-page SEO strategy takes you to the top shelves of the online world.</p>
                            <p className="customText text-off-white">
                                With our expertise, experience, and excellence, we can help your brand reach the heights of the market in no time.</p>
                            <p className="customText text-off-white">
                                Our services can increase organic search engine ranking drastically and getting the best placements for the websites along with reach to new customers. We are a leading digital marketing agency in India that specializes in SEO services.</p>
                            <p className="customText text-off-white">
                                We believe in delivering service with the perfection that leads to worldwide 750+ happy clients. We ensure that your brand gets the desired exposure it needs. We believe that your success is our success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blueBg2">
            <div className="containerFull">
                <div className="callAction">
                    <h3 className="customLineHeight2">
                        Are you ready to optimize your seo plan start using #1 On-page SEO strategy to optimize your<br/>
                        website performance with the top SEO company in INDIA?</h3>
                    <Link href="/contact-us">Speak to our experts</Link></div>
                <svg id="pattner" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"> <path d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,229.3C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="#4784FF" fill-opacity="1"></path> 
                </svg>
            </div>
        </section>
    </div>
  )
}
