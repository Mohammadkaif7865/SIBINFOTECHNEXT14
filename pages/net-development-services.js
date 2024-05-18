import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function DotNetDevelopmentServices() {
  return (
    <div>
        <Helmet>
            <title>.NET Development Services</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">.NET Development Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">.NET Development</span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">.NET Development</span> Company in India</strong></p>
                <BannerForm/>
            </div>
        </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                <div className="col-md-12">
                    <div className="custom-content-title">
                        <p>Services we provide</p>
                    </div>

                    <div className="row m-zero">
                        <div className="col-md-6 order-lg-1 order-2">
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">.NET Web Development Services</p>
                                <p>we provide you end-to-end application development for empowerment of your business</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">.NET Desktop Application Development Services</p>
                                <p>we develop multi-platform desktop applications.</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">.NET Integration Services</p>
                                <p>We Integrate different CRM, ERP with WCF framework</p>
                            </div>
                            <div className="custom-page-icon-box icon-with-title">
                                <p className="custom-box-title">.NET Application Migration</p>
                                <p>Modernize your legacy applications by migrating .NET;</p>
                            </div>
                        </div>
                        <div className="col-md-6 order-lg-2 order-1">
                            <div className="custom-page-img">
                                <img src="assets/images/article-submission.png" alt=".Net Development Companies in India" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="custom-page-img">
                        <img src="assets/images/article-submission.png" alt=".Net Development Services" className="img-fluid"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="custom-content-title">
                        <p>Our Skill Set in Microsoft .NET Technology</p>
                    </div>
                    <div className="sib-table">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Architecture</th>
                                        <td>MVC, MVVM, n-tier</td>
                                    </tr>
                                    <tr>
                                        <th>Database</th>
                                        <td>MS SQL Server, Microsoft HD Insight, Hadoop, MongoDB, Oracle</td>
                                    </tr>
                                    <tr>
                                        <th>BI / Reporting Tools</th>
                                        <td>Power BI, SSAS, SSIS, SSRS</td>
                                    </tr>
                                    <tr>
                                        <th>Platforms</th>
                                        <td>.NET Framework, ASP.NET Core</td>
                                    </tr>
                                    <tr>
                                        <th>Languages</th>
                                        <td>C#, ASP.NET, VB.NET</td>
                                    </tr>
                                    <tr>
                                        <th>CMS</th>
                                        <td>Umbraco, Sitecore, Sitefinity, DotNetNuke, Kentico</td>
                                    </tr>
                                    <tr>
                                        <th>Web Services</th>
                                        <td>WCF, ASMX, WebApi</td>
                                    </tr>
                                    <tr>
                                        <th>Cloud Hosting</th>
                                        <td>Microsoft Azure, Amazon Web Services</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         </section>
    </div>
  )
}
