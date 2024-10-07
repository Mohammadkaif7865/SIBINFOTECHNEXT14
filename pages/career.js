import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';

export default function Career() {
    const metaTags = (
        <>
          <title>Careers at SIB Infotech | Current Jobs Openings</title>
          <meta name="description" content="Join SIB Infotech and grow your career in digital marketing. Explore exciting job opportunities, competitive benefits, and a dynamic work environment." />
          <meta name="keywords" content="Career" />
         
    
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sibinfotech.com/career" />
          <meta property="og:title" content="Careers at SIB Infotech | Current Jobs Openings" />
          <meta property="og:description" content="Join SIB Infotech and grow your career in digital marketing. Explore exciting job opportunities, competitive benefits, and a dynamic work environment." />
          <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
    
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.sibinfotech.com/career" />
          <meta property="twitter:title" content="Careers at SIB Infotech | Current Jobs Openings" />
          <meta property="twitter:description" content="Join SIB Infotech and grow your career in digital marketing. Explore exciting job opportunities, competitive benefits, and a dynamic work environment." />
          <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
        </>
      );
      return (
        <CustomLayout meta={metaTags}>
            <div className="innerWebDesign">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="innerBannerTitle text-center venter">
                                <h3 className="heading fontWeight700 text-white">We’re hiring</h3>
                                <p className="small_heading mt-3 text-white">We’re a team of lifelong learners. We’re equal parts left and right brained. Join Us!</p>
                                <p className="title mt-2 text-white">Connect with our HR Department </p>
                                <div className="mt-4">
                                    <Link href="#requestQuote">
                                        <span className="btnThemeRed me-3"><i className="fa fa-phone"></i>  +91-9873477401</span>
                                    </Link>
                                    <Link href="/apply-now">
                                        <span className="btnThemewhiteBorder"><i className="fa-solid fa-paper-plane"></i>  Apply Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block pe-lg-5">
                            {/* <div className="bannerForm">
                                <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                                <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Digital Marketing</span> Company in India</strong></p>
                                <BannerForm />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 d-block d-lg-none pe-lg-5">
                {/* <div className="bannerForm">
                    <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                    <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Digital Marketing</span> Company in India</strong></p>
                    <BannerForm />
                </div> */}
            </div>
            <section id="openings">
                <div className="container">
                    <div className="opening_wrap">
                        <div className="opening_head d-none d-sm-block hidden-sm hidden-xs">
                            <div className="row">
                                <div className="col-md-6">
                                    <p>Job Title</p>
                                </div>
                                <div className="col-md-3">
                                    <p>Location</p>
                                </div>
                                <div className="col-md-3">
                                    <p>View / Apply</p>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">HR Cum Admin Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">PHP Developer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Digital Marketing Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Client Servicing Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Accounts Cum Admin Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Accounts Eexcutive - Part Time Work From Home </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Content Writer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">UI/UX Designer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Google Adwords Specialist</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Graphic Designer- Social Media </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Graphic Designer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Business Development Executive Website Sales</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">MEAN Stack Developer  </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Business Development Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Mobile App Developer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">PPC Manager</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Social Media Executive</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        {/* <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Data Entry operator</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div> */}


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Wordpress Developer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Website Designer</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">SEO EXECUTIVE </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi / Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title"> Web Developer (Shopify) </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Manager Operations</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Mumbai</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="opening_box">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="title">Executive Assistant to Director</p>
                                </div>
                                <div className="col-md-3">
                                    <p className="location">Delhi</p>
                                </div>
                                <div className="col-md-3">
                                    <Link href="/apply-now">
                                        <span className="theme-btn small-btn success-btn">Apply Now</span>
                                    </Link>
                                </div>

                            </div>
                        </div>


                    </div>



                </div>
            </section>
        </CustomLayout>
    )
}
