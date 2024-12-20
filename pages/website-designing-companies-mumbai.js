import BannerForm from '@/comps/BannerForm';
import Breadcrumb from '@/comps/BreadCrumb';
import BreadcrumbSchema from '@/comps/BreadcrumbSchema';
import { CustomLayout } from '@/comps/CustomLayout';
import Link from 'next/link';


export default function WebsiteDesigningCompanies() {
  const metaTags = (
    <>
      <title>Website Designing Companies in Mumbai | SIB Infotech</title>
      <meta name="description" content="Discover top website designing companies in Mumbai. SIB Infotech offers innovative design solutions to enhance your online presence and drive business growth." />
      <meta name="keywords" content="Website Designing Companies" />
     

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/website-designing-companies-mumbai" />
      <meta property="og:title" content="Website Designing Companies in Mumbai | SIB Infotech" />
      <meta property="og:description" content="Discover top website designing companies in Mumbai. SIB Infotech offers innovative design solutions to enhance your online presence and drive business growth." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/website-designing-companies-mumbai.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/website-designing-companies-mumbai" />
      <meta property="twitter:title" content="Website Designing Companies in Mumbai | SIB Infotech" />
      <meta property="twitter:description" content="Discover top website designing companies in Mumbai. SIB Infotech offers innovative design solutions to enhance your online presence and drive business growth." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/website-designing-companies-mumbai.jpg" />
      <BreadcrumbSchema
        url="https://www.sibinfotech.com/website-designing-companies-mumbai"
        breadcrumbTitle="Website Designing Companies in Mumbai | SIB Infotech"
        PageRatingSchema
        description={
          "Discover top website designing companies in Mumbai. SIB Infotech offers innovative design solutions to enhance your online presence and drive business growth."
        }
        reviewCount={"5306"}
      />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-7 ps-lg-5">
    					<div className="innerBannerTitle venter">
    						<h1 className="heading fontWeight700 FONThRADING text-white">Website Designing Companies</h1>
                <h2 className="small_heading fw-bold mt-3 text-white">
                    Top Website Designing Companies in Mumbai
                </h2> 
                

    						<div className="mt-4">
    							<Link href="#requestQuote" className="btnThemeRed me-3"><i className="fa-solid fa-comment-dots"></i> Get a Quote</Link>
    							<Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i> Ask a Question</Link>
    						</div>
    					</div>
        			</div>
                    <div className="col-lg-5 pe-lg-5 d-none d-lg-block">
                        <div className="bannerForm">
                            <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
                            <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Designing </span> Company in India</strong></p>
                            <BannerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-lg-none ">
        <Breadcrumb Pagetitle={"Website Designing "} />
      </div>
        <div className="col-lg-5 pe-lg-5 d-block d-lg-none">
          <div className="bannerForm">
              <h4 className="small_heading  fontWeight700">Accelerate Your Business Growth</h4>
              <p>with <strong className="fontWeight600 text_red">Best <span className="textChange">Website Designing </span> Company in India</strong></p>
              <BannerForm/>
          </div>
        </div>
        <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Website Designing "} />
      </div>
        <section id="sib-custom-page">
            <div className="containerFull">
               <div className="row">
                  <div className="col-md-12">
                    <div className="custom-content-title">
                      <p>
                        Our Website Designing Services</p>
                    </div>
                    <p>
                      We specialise with creation and process of custom based solution in Website designing &amp; development, SIB Infotech is a certified organisation to ensure and improve the Design &amp; development in order to supply our customer elite, clean and consistent web solution.With over years of creative experience, SIB Infotech is always engaged in projects that look to create a better understanding between web design and development.</p>
                  </div>
                </div>
               <div className="row mt-4">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <p>
                        Ecommerce Website Designing</p>
                    </li>
                    <li>
                      <p>
                        CMS Website Development</p>
                    </li>
                    <li>
                      <p>
                        Web Portal Development</p>
                    </li>
                    <li>
                      <p>
                        Static Website Designing</p>
                    </li>
                    <li>
                      <p>
                        Responsive Web Designing</p>
                    </li>
                    <li>
                      <p>
                        Wordpress Development</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img className="img-fluid" src="assets/images/article-submission.png" alt="Website Designing Companies in India"/></div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      Our Website Designing Services</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Real Estate Website Designing</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Matrimonial Website Designing</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Hotel Booking Website Designing</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Education Portal Website Designing</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Travel Website Designing</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box">
                        <p>
                          Any API Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="custom-content-title">
                    <p>
                      Some Industries Which We Serve</p>
                  </div>
                  <div className="row m-zero">
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          Search Engine Optimization (SEO)</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          Social Media Optimization (SMO)</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          Pay per click Management (PPC)</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          iOS Mobile Application Developement</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          Software Development (Services)</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="custom-page-icon-box-outline">
                        <p>
                          Android Mobile Application Developement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="custom-content-title">
                    <p>
                      Why Choose SIB?</p>
                  </div>
                  <p>
                    We design carefully taking your all goals in our mind with all the correct basics. And we stay on designing your website until you are 100% satisfied. We make sure that your website is fully customized to get recognised on all search engines</p>
                  <ul>
                    <li>
                      <p>
                        Unparalleled Web Design Solutions</p>
                    </li>
                    <li>
                      <p>
                        Top Specialists in corporate Website Development</p>
                    </li>
                    <li>
                      <p>
                        Work with the Industry specialists in the business of Website Development</p>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="custom-page-img">
                    <img  className="img-fluid" src="assets/images/article-submission.png" alt="Website Designing Companies"/></div>
                </div>
              </div>
            </div>
         </section>
    </CustomLayout>
  )
}
