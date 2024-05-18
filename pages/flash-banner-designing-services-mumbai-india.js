import React from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';
import BannerForm from '../comps/BannerForm';

export default function FlashBannerDesigningServicesMumbaiIndia() {
  return (
    <div>
        <Helmet>
            <title>Flash Banner Designing Services Companies Mumbai Delhi India</title>
            <meta name="keywords" content="flash banner designing services india,flash banner designing services bangalore,flash banner designing services mumbai,flash banner designing services delhi,flash banner designing services ,chennai,flash banner designing services pune,flash banner designi"/>
            <meta name="description" content="SIB Infotech offers banner designing services, Mumbai, India. Design attractive and effective web banners, flash banners or animated banners from us.Our team has worked on a variety of banner design projects such as Animated GIF Banner, Flash Banner, Interactive Flash Banner, Sky-scrappers etc."/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 ps-lg-5">
                        <div className="innerBannerTitle venter">
                            <h3 className="heading fontWeight700 text-white">Flash Banner Designing Services</h3>
                            <div className="mt-4">
                                <Link href="/#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i> Get a Quote</Link>
                                <Link href="/contact-us" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Banner Designing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-5 d-block d-lg-none pe-lg-5">
            <div className="bannerForm">
                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Flash Banner Designing </span> Company in India</strong></p>
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
                    <p>SIB Infotech is a professional IT solutions company, providing a broad range of Flash development services including Flash Banner Design Services to clients across the globe.</p>
                  </div>
                </div>
                <div className="col-md-1">
                  &nbsp;</div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p>The company is a leading specialist in providing Flash based services such as Flash Website Development, Flex Application Development, Flash Multimedia Presentation, Flash Template Design, Flash Banner Design, Flash Web Intro, Flash Games Development and More.</p>
                  <p>Flash is a new age multimedia technology that has taken the web by storm. It provides with tools &amp; options to develop cutting-edge dynamic &amp; interactive applications including a variety of flash banners. Practically, Flash banners result in higher click-thru rates than other static banners. This is attributed to smooth animation and special effects that can be developed in Flash.</p>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img alt="Flash Banner Designing Services" className="img-fluid" src="assets/images/article-submission.png"/></div>
                </div>
              </div>
            <div className="row">
              <div className="col-md-6">
                <div className="custom-page-img">
                  <img alt="Flash Banner Designing Services Mumbai" className="img-fluid" src="assets/images/article-submission.png"/></div>
              </div>
              <div className="col-md-6">
                <p>A banner is a very effective mode of Internet advertising, they are usually placed as an header for the website or as an advertisement on some web page. Flash banner design is a process of creating banners that include animated objects such as text, graphics, logs etc. to make it appealing for the visitors. These moving objects help to attract the target visitors and also convey the message in a better way.</p>
                <p>Our company is endowed with a dedicated team of Flash developers, multimedia experts, web designers capable of delivering customized Flash banner design solutions to clients. Our team has worked on a variety of banner design projects such as Animated GIF Banner, Flash Banner, Interactive Flash Banner, Sky-scrappers etc.</p>
              </div>
            </div>
            </div>
         </section>
    </div>
  )
}
