"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Fill, RiMenu4Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Modal } from "react-bootstrap";
import BannerForm from "./BannerForm";
import { FaXTwitter } from "react-icons/fa6";

export default function Header() {
  const [show, setShow] = useState(false);

  const [showModel, setShowModel] = useState(false);

  const handleCloseModel = () => setShowModel(false);
  const handleShowModel = () => setShowModel(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const pathname = usePathname();

  const handleCollapse = (id) => {
    // console.log(id);
    document.querySelector(`#${id}`).classList.toggle("collapse");
  };

  useEffect(() => {
    setShow(false);
  }, [pathname]);

  return (
    <div>
      <header
        className={`header stricky  ${
          pathname !== "/" ? "position-relative" : ""
        } `}
      >
        

        <div className="mainHeader container-xxl ">
          <div className="px-1 px-lg-2 ">
            <div className="inlineHeader">
              <div className="leftLogo">
                <Link className="position-relative" href="/">
                  <Image
                    src={"/assets/images/logo (1).webp"}
                    className=" object-fit-contain "
                    quality={100}
                    width={250}
                    height={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    alt="Best Digital Marketing Company in India"
                  />
                </Link>
              </div>
              <div className="rightMenu d-lg-block d-none  ">
                <div className=" topHeaderRightMain d-flex justify-content-end align-items-center">
                  <Link href="https://wa.link/rd1lfo" target="_blank">
                    <Image
                      src={"/assets/images/sib-whatsapp-icon.svg"}
                      quality={100}
                      width={160}
                      height={80}
                    ></Image>
                  </Link>
                  <div className="topHeaderRight ">
                    <ul>
                      <li className="d-none ">
                        <Link className="" href="/contact-us ">
                          Request a Quote
                        </Link>
                      </li>
                      <li>
                        <div
                          className="menu_contact p-0 "
                          href="tel:+91-9222260000"
                        >
                          <i className="bi bi-telephone "></i>

                          <div className="menu_contact_inner">
                            <a
                              href="tel:+91-9222260000"
                              className="p-0 number_phone text_red"
                            >
                              92222-60000
                            </a>
                            <a
                              href="mailto:contact@sibinfotech.com"
                              className=" p-0 header_email"
                              title=""
                            >
                              contact@sibinfotech.com
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <button
                    className="menubtn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    onClick={handleShow}
                  >
                    {/* <i className="fa fa-bars"></i> */}
                    <RiMenu4Line />
                  </button>
                </div>
                <ul className="bottom_header">
                  <li>
                    <Link
                      href="/digital-marketing-services"
                      title="Digital Marketing"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pay-per-click-ppc-management-services"
                      title="PPC"
                    >
                      PPC
                    </Link>
                    <div className="megaMenus shadow">
                      <div className="row">
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/google-ads-management-services"
                            title="Google Ads Management"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Google Ads Management
                                </p>
                                <p>
                                  SIB Infotech is a Certified partner for Google
                                  AdWords management company offering all
                                  kinds...
                                </p>
                              </div>

                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/linkedin-ads-management-services"
                            title="LinkedIn Ads Management"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  LinkedIn Ads Management
                                </p>
                                <p>
                                  We are a professional Linkedin ad management
                                  and advertising...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/facebook-ads-management-services"
                            title=" Facebook Ads Marketing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Facebook Ads Marketing
                                </p>
                                <p>
                                  Our Facebook Specialists manage Facebook PPC
                                  Campaigns making your facebook ads reach
                                  millions...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/instagram-ads-management-services"
                            title=" Instagram Ads Management"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Instagram Ads Management
                                </p>
                                <p>
                                  Best Instagram ad management company in
                                  Mumbai, India. Grow your Instagram account
                                  with...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/search-engine-optimization-seo-services"
                      title="SEO"
                    >
                      SEO
                    </Link>
                    <div className="megaMenus shadow">
                      <div className="row">
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/on-page-seo-services"
                            title="ON-Page SEO Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  ON-Page SEO Services
                                </p>
                                <p>
                                  SIB Infotech is the Top SEO Company in India
                                  offers On-Page SEO & On-Site Optimization...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/off-page-seo-services"
                            title="OFF-Page SEO Services"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  OFF-Page SEO Services
                                </p>
                                <p>
                                  SIB Infotech is the Top SEO Company in India
                                  offers Off-Page SEO Optimization Services....
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/e-commerce-seo-services"
                            title=" E-Commerce SEO"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  E-Commerce SEO
                                </p>
                                <p>
                                  SIB Infotech is a leading designing and
                                  development company in Mumbai, India offers...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link href="/mobile-seo-services" title="Mobile SEO">
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Mobile SEO
                                </p>
                                <p>
                                  Top Rated Best Mobile SEO company in India our
                                  focus is in offering customized...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/search-engine-optimization-outsourcing-seo-services"
                            title="SEO Outsourcing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  SEO Outsourcing
                                </p>
                                <p>
                                  Outsource SEO service to India with SIB
                                  Infotech a 100% White Label SEO outsourcing
                                  company...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link href="/local-seo-services" title="Local SEO">
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">Local SEO</p>
                                <p>
                                  SIB Infotech is rated as Top Local SEO Company
                                  In India, we offer local SEO services...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/technical-seo-services"
                            title="Technical SEO Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Technical SEO Services
                                </p>
                                <p>
                                  Fix Core Web Vitals, crawlability, indexation,
                                  and schema with a dedicated technical SEO team...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/google-penalty-recovery"
                            title="Google Penalty Recovery"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Google Penalty Recovery
                                </p>
                                <p>
                                  Recover rankings from manual actions and
                                  algorithm penalties with a proven process...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/seo-audit-services"
                            title="SEO Audit Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  SEO Audit Services
                                </p>
                                <p>
                                  Complete website SEO health check with a
                                  prioritised roadmap ranked by business impact...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/enterprise-seo-services"
                            title="Enterprise SEO Services"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Enterprise SEO Services
                                </p>
                                <p>
                                  Scalable SEO programmes for 10,000+ page
                                  websites and multi-location brands...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/llm-seo-services"
                            title="LLM SEO Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  LLM SEO Services
                                </p>
                                <p>
                                  Optimise your brand for ChatGPT, Gemini,
                                  Perplexity, and Google AI Overviews...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/shopify-seo-services"
                            title="Shopify SEO Services"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Shopify SEO Services
                                </p>
                                <p>
                                  Rank Shopify stores on page 1 with
                                  platform-specific SEO, speed, and schema...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/woocommerce-seo-services"
                            title="WooCommerce SEO Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  WooCommerce SEO Services
                                </p>
                                <p>
                                  Grow organic sales for WooCommerce stores with
                                  ecommerce-specific SEO strategies...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/app-store-optimization"
                            title="App Store Optimization"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  App Store Optimization
                                </p>
                                <p>
                                  Rank your app in Apple App Store and Google
                                  Play with ASO keyword and conversion strategy...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/conversion-rate-optimization"
                            title="Conversion Rate Optimization"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Conversion Rate Optimization
                                </p>
                                <p>
                                  Turn more visitors into customers with
                                  data-driven CRO and A/B testing programmes...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/regional-local-seo-services"
                            title="Google Local Listing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Google Local Listing
                                </p>
                                <p>
                                  Google Business Profile, local citations, and
                                  Map Pack rankings for local businesses...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/social-media-optimization-services"
                      title="SMO"
                    >
                      SMO
                    </Link>
                    <div className="megaMenus shadow">
                      <div className="row">
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/social-media-optimization-services"
                            title="Social Media Optimization"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Social Media Optimization
                                </p>
                                <p>
                                  SIB Infotech is a social media marketing
                                  services company that provides highly
                                  customized social...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/content-marketing-services"
                            title="Content Marketing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Content Marketing
                                </p>
                                <p>
                                  Rated best content marketing agency in India
                                  telling brand stories better via its quality
                                  content...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/digital-marketing-services"
                            title="Digital Marketing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Digital Marketing
                                </p>
                                <p>
                                  SIB infotech is the top leading Digital
                                  Marketing agency and Company in Mumbai, India.
                                  We are offering...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/online-reputation-management-services"
                            title=" Online Reputation Management Services"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Online Reputation Management Services
                                </p>
                                <p>
                                  Rated best online reputation management
                                  services company...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/blog-management-services"
                            title="Blog Management Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Blog Management Services
                                </p>
                                <p>
                                  We offer 360<sup>.</sup> Blog Management
                                  Service that would bring traffic to your blog
                                  & increase your brand...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/influencer-marketing-services"
                            title="Influencer Marketing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Influencer Marketing
                                </p>
                                <p>
                                  SIB Infotech is leading influencer marketing
                                  agency in India , representing top social...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/email-marketing-services-companies-mumbai-india"
                            title="Email Marketing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Email Marketing
                                </p>
                                <p>
                                  Targeted email campaigns that nurture leads and
                                  drive repeat sales for your business...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/press-release-submission-services"
                            title="PR Submission"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  PR Submission
                                </p>
                                <p>
                                  Professional press release writing and
                                  submission to top media and news directories...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/graphic-designing-services"
                      title=" Graphic Design"
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/website-designing-services"
                      title="Website Designing"
                    >
                      Website Designing
                    </Link>
                    <div className="megaMenus shadow">
                      <div className="row">
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/corporate-website-designing-services"
                            title="Corporate Website Designing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Corporate Website Designing
                                </p>
                                <p>
                                  SIB Infotech's website design service can
                                  provide you can an edge over the contest
                                  with...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/responsive-website-designing-services"
                            title="Responsive Website Designing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Responsive Website Designing
                                </p>
                                <p>
                                  A responsive website design means massive
                                  increase in the number of visitors...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/e-commerce-website-design-development-services"
                            title="E-commerce Website Designing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  E-commerce Website Designing
                                </p>
                                <p>
                                  With the help E-Commerce website you get an
                                  opportunity to have products and services
                                  available...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/cms-website-design-development-services"
                            title="Content Management Systems"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Content Management Systems
                                </p>
                                <p>
                                  Nowadays, Content Management Systems such as
                                  WordPress, Joomla, Drupal etc, are usually
                                  used...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/wordpress-website-design-development-services"
                            title="WordPress Website Design &amp; Development"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  WordPress Website Design &amp; Development
                                </p>
                                <p>
                                  WordPress is an open source online website
                                  creation tool written in PHP and is the
                                  most...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/custom-website-designing-services"
                            title="Custom Website Designing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Custom Website Designing
                                </p>
                                <p>
                                  Using this one can start from just one simple
                                  page with an Email link, building up to a more
                                  complex...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/dynamic-website-designing-services"
                            title="Dynamic Website Designing"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Dynamic Website Designing
                                </p>
                                <p>
                                  Dynamic websites that update content
                                  automatically and deliver a rich user
                                  experience...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/website-maintenance-services"
                            title="Website Maintenance"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Website Maintenance
                                </p>
                                <p>
                                  Regular updates, backups, security patches, and
                                  performance monitoring for your website...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/website-redesigning-services"
                            title="Website Redesigning"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Website Redesigning
                                </p>
                                <p>
                                  Modern, conversion-focused redesigns that
                                  refresh your brand and improve usability...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/mobile-website-designing-services"
                            title="Mobile Website Designing"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Mobile Website Designing
                                </p>
                                <p>
                                  Mobile-first website designs optimised for
                                  smartphones, tablets, and on-the-go users...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/website-audit-services-mumbai-india"
                            title="Website Audit Report"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Website Audit Report
                                </p>
                                <p>
                                  Detailed website audits covering design,
                                  usability, performance, and SEO health...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/xhtml-conversion-services"
                            title="XHTML Conversion"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  XHTML Conversion
                                </p>
                                <p>
                                  Pixel-perfect PSD to XHTML conversion with
                                  clean, standards-compliant code...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/website-development-services"
                      title="Web Development"
                    >
                      Web Development
                    </Link>
                    <div className="megaMenus shadow">
                      <div className="row">
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/erp-crm-software-development-solutions"
                            title="ERP & CRM Solutions"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  ERP &amp; CRM Solutions
                                </p>
                                <p>
                                  Custom ERP and CRM software solutions built to
                                  automate and scale your business...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/custom-website-development-companies-mumbai-india"
                            title="Custom Web Development"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Custom Web Development
                                </p>
                                <p>
                                  Bespoke websites and web applications
                                  engineered for your exact business needs...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2">
                          <Link
                            href="/cms-development-companies-mumbai-india"
                            title="CMS Development Services"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  CMS Development Services
                                </p>
                                <p>
                                  Content management systems that let you update
                                  your website without any technical skills...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/magento-development-services-mumbai-india"
                            title="Magento Development"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Magento Development
                                </p>
                                <p>
                                  Scalable Magento ecommerce development for
                                  stores that demand high performance...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/drupal-cms-framework-development-services"
                            title="Drupal Development"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Drupal Development
                                </p>
                                <p>
                                  Enterprise-grade Drupal websites and portals
                                  with robust security and flexibility...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/wordpress-cms-website-development-companies-mumbai-india"
                            title="WordPress Experts"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  WordPress Experts
                                </p>
                                <p>
                                  WordPress development, themes, plugins, and
                                  optimisation by certified experts...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/joomla-cms-framework-development-services"
                            title="Joomla Development"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Joomla Development
                                </p>
                                <p>
                                  Feature-rich Joomla websites and extensions
                                  for flexible content management...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/webportal-development-companies-mumbai-india"
                            title="Web Portal Development"
                          >
                            <div className="itemMega bgBlueMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  Web Portal Development
                                </p>
                                <p>
                                  Custom web portals for communities, ecommerce,
                                  education, and enterprise operations...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col-lg-4 px-lg-2 mt-3">
                          <Link
                            href="/ecommerce-solutions-company-mumbai-india"
                            title="E-Commerce Solutions"
                          >
                            <div className="itemMega bgRedMenu">
                              <div className="leftCont">
                                <p className="title fontWeight700">
                                  E-Commerce Solutions
                                </p>
                                <p>
                                  Complete online store development with
                                  payments, shipping, and inventory integration...
                                </p>
                              </div>
                              <div className="iconRight">
                                <i className="bi bi-arrow-right"></i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/software-development-services"
                      title="Software Development"
                    >
                      Software Development
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                className="extraMenu   d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={handleShow}
              >
                <i className="fa fa-bars"></i>
                {/* <RiMenu4Line /> */}
              </button>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link className="position-relative" href="/">
              <Image
                src={"/assets/images/logo (1).webp"}
                className=" object-fit-contain "
                quality={100}
                width={210}
                height={60}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                alt="Best Digital Marketing Company in India"
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="mx-3" />
        <Offcanvas.Body>
          <div className="extraMenuItems" id="mobileSub">
            <ul>
              <div className="d-block d-md-none">
                <li data-bs-dismiss="offcanvas">
                  <Link
                    href="/digital-marketing-services"
                    title="Digital Marketing"
                  >
                    Digital Marketing
                  </Link>
                </li>

                <li className="itemSub">
                  <Link
                    href="/pay-per-click-ppc-management-services"
                    data-bs-dismiss="offcanvas"
                    title="PPC Management"
                  >
                    PPC Management
                  </Link>{" "}
                  <button
                    className="subBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#ppcManagement"
                    aria-expanded="true"
                    aria-controls="ppcManagement"
                    onClick={() => {
                      handleCollapse("ppcManagement");
                    }}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul
                    id="ppcManagement"
                    className="collapse"
                    data-bs-parent="#mobileSub"
                  >
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/google-ads-management-services"
                        title="Google Ads Management"
                      >
                        Google Ads Management
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/linkedin-ads-management-services"
                        title="LinkedIn Ads Management"
                      >
                        LinkedIn Ads Management
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/facebook-ads-management-services"
                        title="Facebook Ads Marketing"
                      >
                        Facebook Ads Marketing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/instagram-ads-management-services"
                        title="Instagram Ads Management"
                      >
                        Instagram Ads Management
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="itemSub">
                  <Link
                    href="/search-engine-optimization-seo-services"
                    data-bs-dismiss="offcanvas"
                    title="SEO"
                  >
                    SEO
                  </Link>{" "}
                  <button
                    className="subBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#seoMenu"
                    aria-expanded="true"
                    aria-controls="seoMenu"
                    onClick={() => {
                      handleCollapse("seoMenu");
                    }}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul
                    id="seoMenu"
                    className="collapse"
                    data-bs-parent="#mobileSub"
                  >
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/on-page-seo-services"
                        title="ON-Page SEO Services"
                      >
                        ON-Page SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/off-page-seo-services"
                        title="OFF-Page SEO Services"
                      >
                        OFF-Page SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/e-commerce-seo-services"
                        title="E-Commerce SEO"
                      >
                        E-Commerce SEO
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link href="/mobile-seo-services" title="Mobile SEO">
                        Mobile SEO
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/search-engine-optimization-outsourcing-seo-services"
                        title="SEO Outsourcing"
                      >
                        SEO Outsourcing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link href="/local-seo-services" title="Local SEO">
                        Local SEO
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/technical-seo-services"
                        title="Technical SEO Services"
                      >
                        Technical SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/google-penalty-recovery"
                        title="Google Penalty Recovery"
                      >
                        Google Penalty Recovery
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/seo-audit-services"
                        title="SEO Audit Services"
                      >
                        SEO Audit Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/enterprise-seo-services"
                        title="Enterprise SEO Services"
                      >
                        Enterprise SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link href="/llm-seo-services" title="LLM SEO Services">
                        LLM SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/shopify-seo-services"
                        title="Shopify SEO Services"
                      >
                        Shopify SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/woocommerce-seo-services"
                        title="WooCommerce SEO Services"
                      >
                        WooCommerce SEO Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/app-store-optimization"
                        title="App Store Optimization"
                      >
                        App Store Optimization
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/conversion-rate-optimization"
                        title="Conversion Rate Optimization"
                      >
                        Conversion Rate Optimization
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/regional-local-seo-services"
                        title="Google Local Listing"
                      >
                        Google Local Listing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="itemSub">
                  <Link
                    href="/social-media-optimization-services"
                    data-bs-dismiss="offcanvas"
                    title="SMO"
                  >
                    SMO
                  </Link>{" "}
                  <button
                    className="subBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#smoMenu"
                    aria-expanded="true"
                    aria-controls="smoMenu"
                    onClick={() => {
                      handleCollapse("smoMenu");
                    }}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul
                    id="smoMenu"
                    className="collapse"
                    data-bs-parent="#mobileSub"
                  >
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/social-media-optimization-services"
                        title="Social Media Optimization"
                      >
                        Social Media Optimization
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/content-marketing-services"
                        title="Content Marketing"
                      >
                        Content Marketing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/digital-marketing-services"
                        title="Digital Marketing"
                      >
                        Digital Marketing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/online-reputation-management-services"
                        title="Online Reputation Management Services"
                      >
                        Online Reputation Management Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/blog-management-services"
                        title="Blog Management Services"
                      >
                        Blog Management Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/influencer-marketing-services"
                        title="Influencer Marketing"
                      >
                        Influencer Marketing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/email-marketing-services-companies-mumbai-india"
                        title="Email Marketing"
                      >
                        Email Marketing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/press-release-submission-services"
                        title="PR Submission"
                      >
                        PR Submission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link
                    href="/graphic-designing-services"
                    title="Graphic Design"
                  >
                    Graphic Design
                  </Link>
                </li>
                <li className="itemSub">
                  <Link
                    href="/website-designing-services"
                    data-bs-dismiss="offcanvas"
                    title="Website Designing Services"
                  >
                    Website Designing Services
                  </Link>{" "}
                  <button
                    className="subBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#websiteDesign"
                    aria-expanded="true"
                    aria-controls="websiteDesign"
                    onClick={() => {
                      handleCollapse("websiteDesign");
                    }}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul
                    id="websiteDesign"
                    className="collapse"
                    data-bs-parent="#mobileSub"
                  >
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/corporate-website-designing-services"
                        title="Corporate Website Designing"
                      >
                        Corporate Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/responsive-website-designing-services"
                        title="Responsive Website Designing"
                      >
                        Responsive Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/e-commerce-website-design-development-services"
                        title="E-commerce Website Designing"
                      >
                        E-commerce Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/cms-website-design-development-services"
                        title="Content Management Systems"
                      >
                        Content Management Systems
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/wordpress-website-design-development-services"
                        title="WordPress Website Design & Development"
                      >
                        WordPress Website Design & Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas ">
                      <Link
                        href="/custom-website-designing-services"
                        title="Custom Website Designing"
                      >
                        Custom Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/dynamic-website-designing-services"
                        title="Dynamic Website Designing"
                      >
                        Dynamic Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/website-maintenance-services"
                        title="Website Maintenance"
                      >
                        Website Maintenance
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/website-redesigning-services"
                        title="Website Redesigning"
                      >
                        Website Redesigning
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/mobile-website-designing-services"
                        title="Mobile Website Designing"
                      >
                        Mobile Website Designing
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/website-audit-services-mumbai-india"
                        title="Website Audit Report"
                      >
                        Website Audit Report
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/xhtml-conversion-services"
                        title="XHTML Conversion"
                      >
                        XHTML Conversion
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="itemSub">
                  <Link
                    href="/website-development-services"
                    data-bs-dismiss="offcanvas"
                    title="Web Development"
                  >
                    Web Development
                  </Link>{" "}
                  <button
                    className="subBtn"
                    data-bs-toggle="collapse"
                    data-bs-target="#webDevMenu"
                    aria-expanded="true"
                    aria-controls="webDevMenu"
                    onClick={() => {
                      handleCollapse("webDevMenu");
                    }}
                  >
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul
                    id="webDevMenu"
                    className="collapse"
                    data-bs-parent="#mobileSub"
                  >
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/erp-crm-software-development-solutions"
                        title="ERP & CRM Solutions"
                      >
                        ERP &amp; CRM Solutions
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/custom-website-development-companies-mumbai-india"
                        title="Custom Web Development"
                      >
                        Custom Web Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/cms-development-companies-mumbai-india"
                        title="CMS Development Services"
                      >
                        CMS Development Services
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/magento-development-services-mumbai-india"
                        title="Magento Development"
                      >
                        Magento Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/drupal-cms-framework-development-services"
                        title="Drupal Development"
                      >
                        Drupal Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/wordpress-cms-website-development-companies-mumbai-india"
                        title="WordPress Experts"
                      >
                        WordPress Experts
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/joomla-cms-framework-development-services"
                        title="Joomla Development"
                      >
                        Joomla Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/webportal-development-companies-mumbai-india"
                        title="Web Portal Development"
                      >
                        Web Portal Development
                      </Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                      <Link
                        href="/ecommerce-solutions-company-mumbai-india"
                        title="E-Commerce Solutions"
                      >
                        E-Commerce Solutions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li data-bs-dismiss="offcanvas">
                  <Link
                    href="/software-development-services"
                    title="Software Development"
                  >
                    Software Development
                  </Link>
                </li>
              </div>
              <li data-bs-dismiss="offcanvas">
                <Link href="/about-us">About Us</Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link href="/portfolio">Our Portfolio</Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link href="/blog">Latest Blogs</Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link href="/career">Careers</Link>
              </li>
              {/* <li data-bs-dismiss="offcanvas">
                <Link href="#">Our Clients</Link>
              </li> */}
              {/* <li data-bs-dismiss="offcanvas">
                <Link href="#">SEO Tools</Link>
              </li> */}
              <li data-bs-dismiss="offcanvas">
                <Link href="/resource">Resources</Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <hr className=" my-4" />
          <div>
            <div className="social-link ">
              <ul className="d-flex">
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/sibinfotech/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://x.com/sibinfotech">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/sib-infotech/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/user/sibinfotech"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <div class="whatsAppIcon">
        <a href="https://wa.link/rd1lfo" target="_blank" class="shadow">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>

      
        <button className="modelBtn" onClick={handleShowModel}>Get A Quote</button>
      
      <ModelComp show={showModel} handleClose={handleCloseModel} />
    </div>
  );
}

const ModelComp = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <div className="p-3 p-lg-4">
        <h4>
          <span className="fontWeight600 h2">Get Free Consultation</span>
        </h4>
        <p className="mt-2 fontWeight400">
          Get a free consultation with our experts to discuss your project
          requirements.
        </p>
        <div className="mt-4">
          <BannerForm />
        </div>
      </div>
    </Modal>
  );
};
