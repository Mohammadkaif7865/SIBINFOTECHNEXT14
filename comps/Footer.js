"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as CONSTANTS from "../constants/constants";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitEnquiry = async () => {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("message", inputs.message);

    const res = await axios
      .post(`${CONSTANTS.API_URL}home/submit_quotes`, formData, {
        headers: headers,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    if (data && !data.error) {
      axios.post(`${CONSTANTS.API_URL}send-email-any`, {
        html: `
          <p>Dear Admin,</p>
          <p>You have received an enquiry from:</p>
             <table style='width: 100%;' border='1' cellspacing='0'>
              <tr>
                  <td style='padding:10px;'>Full Name</td>
                  <td style='padding:10px;'>${inputs.name}</td>
              </tr>
              <tr>
                  <td style='padding:10px;'>Email</td>
                  <td style='padding:10px;'>${inputs.email}</td>
              </tr>
               <tr>
                  <td style='padding:10px;'>Website Location</td>
                  <td style='padding:10px;'>${
                    "https://sibinfotech.com" + window.location.pathname
                  }</td>
              </tr>
             
               <tr>
                    <td colspan="2">
                        <p style='padding:10px; font-weight: 700;' >Message</p>
                        <p style='padding:10px; margin-top: 8px'>${
                          inputs.message
                        }</p>
                    </td>
                  </tr>
             
          </table>`,
        fromWhere: "Enquiry - Footer",
      });
    }
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitEnquiry().then((data) => {
      if (!data.error) {
        toast.success(data.message);
        setInputs({
          name: "",
          email: "",
          message: "",
        });
        window.location.href = "https://sibinfotech.com/thanks";
      } else {
        toast.error(data.message);
      }
    });
  };
  useEffect(() => {
    if (
      window.location.pathname === "/career" ||
      window.location.pathname === "/apply-now" ||
      window.location.pathname === "/contact-us"
    ) {
      // console.log("This is ihere");
      setShowForm(false);
    } else {
      setShowForm(true);
    }
  });

  const pathname = usePathname();

  return (
    <div>
      <section
        className="footerForm"
        id="requestQuote"
        style={{ display: showForm ? "block" : "none" }}
      >
        <div className="containerFull">
          <div className="row">
            <div className="col-lg-2 pe-lg-0">
              <div className="leftFooterForm">
                <p className="small_heading fontWeight600">Get a Free Quote</p>
              </div>
            </div>
            <div className="col-lg-10">
              <form onSubmit={handleSubmit} method="post" action="#">
                <div className="formRightFooter">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    value={inputs.name}
                    pattern="^[( )a-zA-Z]+$"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    value={inputs.email}
                    pattern="^[( )a-zA-Z]+$"
                    required
                  />
                  <div className="form_fax" style={{ display: "none" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Please enter fax"
                      name="fax"
                      title="Please enter fax"
                    />
                  </div>
                  <textarea
                    required=""
                    name="message"
                    placeholder="Message"
                    onChange={handleInputChange}
                    value={inputs.message}
                    pattern="^[( )a-zA-Z]+$"
                  ></textarea>
                  <button type="submit" name="submit" className="btnThemeRed">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footerNew">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="col-lg-3 px-0 px-lg-2">
              <div className="firstColumn position-relative text-center">
                <p className="sub_heading text-white position-static fontHeading">
                  <i className="fa fa-mobile-alt pe-3 text_red"></i> Let's Talk
                </p>
                <Link
                  href="tel:+91-92222-60000"
                  className="sub_heading2 text-white my-3 d-inline-block"
                >
                  +91-92222-60000
                </Link>
                <p className="sub_heading position-static fontWeight300 text_white_light fontHeading">
                  Need some
                  <br /> great marketing?
                  <br /> We deliver.
                </p>
                <div>
                  <Link href="/contact-us" className="footerLeft ">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-11">
                  <div className="rightFooterColumn">
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="footerColumn footerTitle">
                          <p className="fontHeading position-static">
                            Internet Marketing
                          </p>
                          <ul>
                            <li>
                              <Link
                                href="/social-media-optimization-services"
                                title="Social Media Optimization"
                              >
                                Social Media Optimization
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/pay-per-click-ppc-management-services"
                                title="PPC Management"
                              >
                                PPC Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/search-engine-marketing-companies-mumbai-india"
                                title="Search Engine Marketing"
                              >
                                Search Engine Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/online-reputation-management-services"
                                title="Reputation Management"
                              >
                                Reputation Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/paid-inclusion-services-mumbai-india"
                                title="Paid Search Engine Inclusion"
                              >
                                Paid Search Engine Inclusion
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/email-marketing-services-companies-mumbai-india"
                                title="Email Marketing"
                              >
                                Email Marketing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/press-release-submission-services"
                                title="PR Submission"
                              >
                                PR Submission
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/regional-local-seo-services"
                                title="Google Local Listing"
                              >
                                Google Local Listing
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 footerTitle">
                        <div className="footerColumn">
                          <p className="fontHeading">Website Development</p>
                          <ul>
                            <li>
                              <Link
                                href="/erp-crm-software-development-solutions"
                                title="ERP & CRM Solutions"
                              >
                                ERP & CRM Solutions
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/custom-website-development-companies-mumbai-india"
                                title="Custom Web Development"
                              >
                                Custom Web Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/cms-development-companies-mumbai-india"
                                title="CMS Development Services"
                              >
                                CMS Development Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/magento-development-services-mumbai-india"
                                title="Magento Development"
                              >
                                Magento Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/drupal-cms-framework-development-services"
                                title="Drupal Development"
                              >
                                Drupal Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/wordpress-cms-website-development-companies-mumbai-india"
                                title="WordPress Experts"
                              >
                                WordPress Experts
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/joomla-cms-framework-development-services"
                                title="Joomla Development"
                              >
                                Joomla Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/webportal-development-companies-mumbai-india"
                                title="Web Portal Development"
                              >
                                Web Portal Development
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/ecommerce-solutions-company-mumbai-india"
                                title="E-Commerce Solutions"
                              >
                                E-Commerce Solutions
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="footerColumn footerTitle">
                          <p className="fontHeading">Website Designing</p>
                          <ul>
                            <li>
                              <Link
                                href="/cms-website-design-development-services"
                                title="CMS Based Website"
                              >
                                CMS Based Website
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/dynamic-website-designing-services"
                                title="Dynamic Website Designing"
                              >
                                Dynamic Website Designing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/website-maintenance-services"
                                title="Website Maintenance"
                              >
                                Website Maintenance
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/website-redesigning-services"
                                title="Website Redesigning"
                              >
                                Website Redesigning
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/mobile-website-designing-services"
                                title="Mobile Website Designing"
                              >
                                Mobile Website Designing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/corporate-website-designing-services"
                                title="Corporate Web Designing"
                              >
                                Corporate Web Designing
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/website-audit-services-mumbai-india"
                                title="Website Audit Report"
                              >
                                Website Audit Report
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/xhtml-conversion-services"
                                title="XHTML Conversion"
                              >
                                XHTML Conversion
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="footerColumn footerTitle">
                          <p className="fontHeading">PPC Management</p>
                          <ul>
                            <li>
                              <Link
                                href="/google-ads-management-services"
                                title="Google Ads Management"
                              >
                                Google Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/linkedin-ads-management-services"
                                title="Linkedin Ads Management"
                              >
                                Linkedin Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/instagram-ads-management-services"
                                title="Instagram Ads Management"
                              >
                                Instagram Ads Management
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/facebook-ads-management-services"
                                title="Facebook Ads Management"
                              >
                                Facebook Ads Management
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1">
                  <div className="socialColumn">
                    <ul>
                      <li>
                        <Link
                          href="https://www.facebook.com/sibinfotech/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://x.com/sibinfotech"
                          target="_blank"
                        >
                         <FaXTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/sib-infotech/"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.youtube.com/user/sibinfotech"
                          target="_blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className={`mapBlock py-5   ${
            pathname == "/contact-us" ? "d-none" : ""
          }
            `}
        >
          {/* <div className="containerFull">
            <div className="row">
              <div className="col-lg-6">
                <div className="mapItem ">
                  <div className="leftImgMap ">
                    <Image
                      width={500}
                      height={500}
                      className="w-100 h-99 "
                      src={`/assets/images/mumbai-office.webp`}
                      alt=""
                    />
                    <div className="officeAddress">
                      <h4 className="small_heading fontWeight600">
                        Mumbai Office
                      </h4>
                      <p>
                        107, Orbit Premises, Mindspace Near Inorbit Mall, Malad
                        West, Mumbai, Maharashtra 400064
                      </p>
                      <Link href="tel:+91-92222-60000">
                        <i className="fa fa-phone"></i>&nbsp; +91-92222-60000
                      </Link>
                    </div>
                  </div>
                  <div className="rightMapItem ">
                    <iframe
                      className="img-taken"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      title="Mumbai Office Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mapItem">
                  <div className="leftImgMap">
                    <Image
                      width={500}
                      height={500}
                      className="w-100 h-99 "
                      src={`/assets/images/delhi-office.webp`}
                      alt=""
                    />
                    <div className="officeAddress">
                      <h4 className="small_heading fontWeight600">
                        Delhi Office
                      </h4>
                      <p>
                        2nd Floor, Office No 205, DDA-2 Building, Janakpuri
                        District Center, Janakpuri, New Delhi, Delhi 110058
                      </p>
                      <Link href="tel:+91-92222-60000">
                        <i className="fa fa-phone"></i>&nbsp; +91-92222-60000
                      </Link>
                    </div>
                  </div>
                  <div className="rightMapItem">
                    <iframe
                      title="Delhi Office Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9866641582603!2d77.0791146745727!3d28.630161784190033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1709614692297!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className={`containerFull`}>
            <div className="row">
              <div className=" col-lg-6 ">
                <div className="mapItemFooter ">
                  <div className="leftMapAddess">
                    <p className="small_heading text_red fontWeight600">
                      Mumbai Office
                    </p>
                    <p className="mt-3">
                      107, Orbit Premises, Mindspace Near Inorbit Mall, Malad
                      West, Mumbai, Maharashtra 400064
                    </p>
                    <p className="mt-2">
                      Rating:{" "}
                      <strong>
                        4.8 <i className="fa fa-star text-warning"></i>
                      </strong>{" "}
                      (99 Reviews)
                    </p>
                    <Link
                      className="btnTheme mt-4"
                      href="https://www.google.com/maps?ll=19.177215,72.833803&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10831579352190589026"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Map
                    </Link>
                  </div>
                  <div className="rightMapItem">
                    <iframe
                      className="img-taken"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      title="Mumbai Office Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 ">
                <div className="mapItemFooter ">
                  <div className="leftMapAddess">
                    <p className="small_heading text_red fontWeight600">
                      New Delhi Office
                    </p>
                    <p className="mt-3">
                      1st Floor, Front Side, Block, B-1/624, B1 Rd, opp. Metro
                      Pillar Number 574, Janakpuri, New Delhi, Delhi, 110058
                    </p>
                    <p className="mt-2">
                      Rating:{" "}
                      <strong>
                        4.7 <i className="fa fa-star text-warning"></i>
                      </strong>{" "}
                      (151 Reviews)
                    </p>
                    <Link
                      className="btnTheme mt-4"
                      href="https://www.google.com/maps?ll=28.631251,77.082649&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=9095562244807528693"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Map
                    </Link>
                  </div>
                  <div className="rightMapItem">
                    <iframe
                      className="img-taken"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.646558593871!2d72.833803!3d19.177215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678696876200!5m2!1sen!2sin"
                      allowFullScreen=""
                      loading="lazy"
                      title="Mumbai Office Map"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footerBottom">
          <div className="containerFull">
            <div className="footerLogos">
              <div className="itemFooterLogo">
                <Link
                  href="https://www.google.com/partners/agency?id=4328223643"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    className="w-100 h-auto"
                    width={100}
                    height={100}
                    quality={100}
                    src="https://www.gstatic.com/partners/badge/images/2024/PremierBadgeClickable.svg"
                    alt="Google Partner"
                  />
                </Link>
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Meta Partner Company"
                  src="/assets/images/meta-partner.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="clutch Partner Company"
                  src="/assets/images/clutch.png"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Shopify Partner Company"
                  src="/assets/images/shopify-partner.png"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Trustpilot Partner Company"
                  src="/assets/images/trustpilot.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Google Analytics Partner Company"
                  src="/assets/images/google-analytics.jpg"
                />
              </div>
              <div className="itemFooterLogo">
                <Image
                  className="w-100 h-auto"
                  width={100}
                  height={100}
                  quality={100}
                  alt="Bing Partner Company"
                  src="/assets/images/bing.png"
                />
              </div>
            </div>
            <div className="text-center mt-2 countryCenter">
              <p>
                Serving Clients from : USA, UK, Australia, Canada, Europe,
                Germany, Singapore, Portugal, Belgium, Netherlands, Turkey, New
                Zealand, Japan & more
              </p>
            </div>
            <div className="footer_copyright d-flex mb-2 align-items-center justify-content-between">
              <div className="rightFooterBottom">
                <ul>
                  {/* <li>
                    <Link href="#">Clients</Link>
                  </li> */}
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/sitemap.xml">Sitemap</Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Cookies Policy</Link>
                  </li>
                  {/* <li>
                    <Link href="#">SEO Tools</Link>
                  </li> */}
                  <li>
                    <Link href="/resource">Resources</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="copyRightFooter ">
                <p>
                  SIB Infotech © {new Date().getFullYear()}. All Rights
                  Reserved.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  );
}
