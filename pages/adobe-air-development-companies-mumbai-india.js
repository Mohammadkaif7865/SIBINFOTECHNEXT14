import React from 'react';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';
import Head from 'next/head';
import { CustomLayout } from '@/comps/CustomLayout';

export default function AdobeAirDevelopmentCompanyMumbiaIndia() {
  const metaTags = (
    <>
      <title>Title</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="/" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="/" />
      <meta property="twitter:title" content="" />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Adobe Air Development</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Adobe Air Development </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Adobe Air Development </span> Company in India</strong></p>
              <BannerForm/>
          </div>
      </div>
        <section id="sib-custom-page">
            <div className="containerFull">
              <div className="row">
                <div className="col-md-1">
                  &nbsp;</div>
                <div className="col-md-10">
                  <div className="service-sub-title">
                    <p>SIB Infotech is a leading IT solutions company, engaged in providing a wide range of Flash based solutions including Adobe AIR Development.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <p>Adobe Systems has introduced AIR runtime environment that provides the flash developers with the capability to develop rich Internet applications. Adobe AIR Development has made it possible to develop applications that can run outside the browser on multiple operating systems.</p>
                  <p>Adobe AIR offers a wide range of interesting &amp; exciting features to engage customers without requiring them to make changes to their existing technology, people or processes. A wide range of applications ranging from on-line shopping to music management can benefit from Adobe AIR Development.</p>
                  <p>SIB Infotech is equipped with years of experience in Flash development, a talented team of Flash developers, hi-tech offshore development center and a commitment to deliver advanced &amp; customized Adobe AIR Development solutions to clients across the globe.</p>
                  <p>The company provides a wide range of Flash application development services such as Flash eCommerce Website Development, Flex Internet Application Development, Flash Multimedia Presentation, Flash Template Designing, Flash Banner Designing and More.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Adobe Air Development" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
