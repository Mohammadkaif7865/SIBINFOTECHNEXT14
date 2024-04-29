import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function CmsDevelopmentCompaniesMumbai() {
  return (
    <div>
        <Helmet>
            <title>CMS Development Services Companies Mumbai Delhi India UK USA</title>
            <meta name="keywords" content="cms development services,cms development service,offshore cms development, cms development companies, cms development company,cms development india,cms development delhi,cms development mumbai,cms development chennai,cms development bangalore,cms developmen"/>
            <meta name="description" content="SIB Infotech offers most affordable and most user-friendly web based CMS Design or content management system design, which helps you to manage your website on a real-time basis.CMS developer india - SIB Infotech has several years of experience in custom content management system (CMS) development and customization"/>
            <link rel="canonical" href="https://www.sibinfotech.com/cms-development-companies-mumbai-india" />
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-white">CMS Development Services</h3>
    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">CMS Development Services </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">CMS Development Services </span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section>
            <div className="containerFull">
                <div className="row">
                <div className="col-lg-6 pe-lg-4">
                    <h3 className="customHeading customLineHeight2">
                        SIB Infotech offers most affordable and most user-friendly web based CMS Design or <span className="text_red">Content Management System </span>design, which helps you to manage your website on a real-time basis</h3>
                    <p className="customText margin-top">
                        Our CMS Design or Content Management System Design comes with a simple browser-based method that allows you to easily update your website content, images etc. all by yourself without having to seek the help of your web developer. Our efficient CMS Design or Content Management System Design allows you to have complete control of your website.</p>
                    <p className="customText">
                        Our CMS developers for every well-known Open-Source CMS platform, such as WordPress, Drupal, Joomla, and others.</p>
                </div>
                <div className="col-lg-6">
                    <div className="cms-img-section">
                        <img className="image-full" src="assets/images/cms-development-company-in-mumbai.png" alt="cms-development-company-in-mumbai"/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="bgGrey bgeffect">
            <div className="containerFull">
                <h3 className="customHeading text-center">
                    <span className="text_red">Content Management</span> System Design</h3>
                <p className="customText text-center">
                    SIB Infotech specializes in providing custom CMS Development that offers you</p>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>1</span>
                            <p className="customText">
                                Ideal solution for those who desire to keep their website up to date</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>2</span>
                            <p className="customText">
                                Makes it incredibly easy to manage your website in every aspect</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>3</span>
                            <p className="customText">
                                Dynamic User-Friendly Features allows even a Non-Technical person to easily manage the website</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>4</span>
                            <p className="customText">
                                Highly Efficient thereby giving you instant LIVE updates</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>5</span>
                            <p className="customText">
                                Instant addition of hyperlinks, formatted text, images etc</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>6</span>
                            <p className="customText">
                                Unlimited updates to your website</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>7</span>
                            <p className="customText">
                                Database Driven Feature makes it a perfect long-term solution</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>8</span>
                            <p className="customText">
                                No software installation, maintenance or upgrades required</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-3 offset-lg-3">
                        <div className="cms-box">
                            <span>9</span>
                            <p className="customText">
                                Saves a lot of your time</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="cms-box">
                            <span>10</span>
                            <p className="customText">
                                Great value for your money</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
