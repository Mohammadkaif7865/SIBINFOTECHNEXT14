import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div>
        <Helmet>
            <title>Cookies Policy</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-12">
    					<div className="innerBannerTitle venter">
    						<h1 className="heading fontWeight700 text-center text-white">Cookies Policy</h1>
                            <div class="mt-5 text-center">
                                <Link href="https://www.sibinfotech.com/#requestQuote" class="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="contact.php" class="btnThemewhiteBorder"><i class="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
    					</div>
        			</div>
                </div>
            </div>
        </div>
        <section id="sib-custom-page" className="PrivacyPolicy">
            <div className="containerFull">
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        We are committed to protecting your privacy</p>
                    <p>
                        We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This policy indicates the type of processes that may result in data being collected about you. Your use of this website gives us the right to collect that information.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Information Collected</p>
                    <p>
                        We may collect any or all of the information that you give us depending on the type of transaction you enter into, including your name, address, telephone number, and email address, together with data about your use of the website. We take precautions to protect your information. When you submit sensitive information via website, your information is protected both online &amp; offline. Sensitive information such as credit card data are collected through trusted vendors like Google Checkout or CCAvenue. Appropriate measures are taken by them at the bottom of your web browser or looking for “https” at the beginning of the web address when you are in the process of transaction.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Security</p>
                    <p>
                        While encryption is used to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computer/servers in which we store personally identifiable information are kept in a secure environment behind a hardware firewall.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Information Use</p>
                    <p>
                        We use the information collected primarily to process the task for which you visited the website. Data collected in the UK is held in accordance with the Data Protection Act. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        What Information do we collect about you?</p>
                    <p>
                        We collect information about you when you complete our call back form. Website using information is collected using cookies.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        How will we use the information about you?</p>
                    <p>
                        We collect information about you to understand your needs and contact you if you have requested contact regarding our services.</p>
                    <p>
                        We may use your information collected from the website to personalise your repeat visit to our website.</p>
                    <p>
                        SIB Infotech will not share your information with third parties for marketing purposes unless we specifically have your permission.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Contact Use</p>
                    <p>
                        In order for us to contact you, a user must first complete the contact form. During registration a user is required to give certain information (such as name and email address). This information is used to contact you about the product/services on our site in which you have expressed interest.</p>
                    <p className="mt-3">
                        This Privacy Policy explains how SIB Infotech uses any personal information we collect about you when you use this website.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <h4 className="tite">
                        Cookies</h4>
                    <p className="small_heading mt-3">
                        Why are cookies essential to your website?</p>
                    <p>
                        Cookies save information about you to customize the content of the website to make a visitor’s experience more tailored. Without cookies enabled we can’t guarantee that the website and your experience of it are as we intended it to be.</p>
                    <p>
                        None of the cookies we use collect any personal information and cannot be used to identify you in any way.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Types of cookies:</p>
                    <p>
                        The length of time a cookie stays on the device depends on its type.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Session cookie</p>
                    <p>
                        These are mainly used by online shops and allow you to keep items in your basket when shopping online. These cookies are expired when the browser is closed.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Persistent cookie:</p>
                    <p>
                        These remain in operation, even when you have closed the browser. They remember your login details so you don’t have to type them in every time you use the site.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Third-party cookie:</p>
                    <p>
                        These are installed by third-parties with the aim of collecting certain information to carry out various research into behaviour, demographics etc.</p>
                </div>
                <div className="custom-page-icon-box icon-with-title">
                    <p className="small_heading">
                        Privacy Policy Changes</p>
                    <p>
                        In the event SIB Infotech updates, it's privacy policy then that information will be posted here.</p>
                </div>
            </div>
        </section>
    </div>
  )
}
