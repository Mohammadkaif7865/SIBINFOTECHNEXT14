import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function OrderDigitalMarketing() {
  return (
    <div>
        <Helmet>
            <title>Order Digital Marketing Services</title>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Order Digital Marketing Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Order Digital Marketing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
         <div className="bannerForm">
            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Order Digital Marketing </span> Company in India</strong></p>
            <BannerForm/>
         </div>
      </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row m-zero">
                  <div className="col-md-6">
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Money Back Guarantee</p>
                        <p>We love getting things right and want you to be fully satisfied with services provided. We are not perfect, but when we make mistakes we fix them.</p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="custom-page-icon-box icon-with-title">
                        <p className="custom-box-title">Secure PayPal Payment</p>
                        <p>All our payments are processed via PayPal. You do not need a PayPal account and we do not store any payment card details on our website.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">Money Back Guarantee</p>
                              <p>We love getting things right and want you to be fully satisfied with services provided. We are not perfect, but when we make mistakes we fix them.</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">Secure PayPal Payment</p>
                              <p>All our payments are processed via PayPal. You do not need a PayPal account and we do not store any payment card details on our website.</p>
                           </div>
                        </div>
                     </div>
                     <div className="row m-zero">
                        <div className="col-md-6">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">No setup or hidden fees</p>
                              <p>There are no hidden costs, setup or termination fees attached to our SEO packages. All our plans are clear. We do not charge for any additional services.</p>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="custom-page-icon-box icon-with-title">
                              <p className="custom-box-title">No outsourcing</p>
                              <p>Our team do not outsource any of SEO services outside. We prefer to be in control of all processes in-house and deliver the best quality in a long run.</p>
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
