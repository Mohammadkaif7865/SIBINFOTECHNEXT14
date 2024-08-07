import React, { useState } from 'react';
import Link from 'next/link'


export default function DigitalMarketingTab() {
    const [tabData, setTabData] = useState(
      {
        title: "Search Engine Optimization",
        title2: "SIB Infotech <span className='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
        image: "assets/images/seo-tab.jpg",
        content: "<p className='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
        url: "/search-engine-optimization-seo-services",
      }
    );
    const tabsData = [
      {
        title: "Search Engine Optimization",
        title2: "SIB Infotech <span className='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
        image: "assets/images/seo-tab.jpg",
        content: "<p className='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
        url: "/search-engine-optimization-seo-services",
      },
      {
        tabnumbers:2,
        title: "Social Media Optimization",
        title2: "Top Rated <span className='text_red'>SEO Company in India</span>",
        image: "assets/images/smo-tab.jpg",
        content: "<p className='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p className='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
        url: "/social-media-optimization-services",
      },
      {
        tabnumbers:3,
        title: "Content Marketing",
        title2: "Tell your <span className='text_red'>Brand Story</span> Better, <span className='text_red'>Engage better</span> with your Audience",
        image: "assets/images/content-tab.jpg",
        content: "<p className='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p className='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
        url: "/content-marketing-services",
      },
      {
        tabnumbers:4,
        title: "PPC Management Services",
        title2: "SIB Infotech is an innovative  <span className='text_red'>PPC management company</span>",
        image: "assets/images/ppc-tab.jpg",
        content: "<p className='mt-3'>SIB Infotech is an innovative digital marketing, AdWords management, remarketing and PPC management company with proven track record to take your PPC campaigns to the next level and provide you with integrated, adverting and marketing solution.</p><p className='mt-2'>Pay-per-click(PPC) advertising allows you to reach your target customers searching for your products and services online by using target keywords.</p><p className='mt-2'>Pay per click represent a model of internet marketing where an advertiser run an ad and he will get charged if there will be a click on his ad. Advertiser pay a fees every time on his ad whenever he will get clicked. The most popular type of pay per click ad is search engine advertisement.</p>",
        url: "/pay-per-click-ppc-management-services",
      }
    ]
  return (
    <div>
        <div className="row">
            <div className="col-lg-3 pe-lg-0">
              <div className="marketingTabs">
                <ul>
                  {tabsData.map((val, id) => {
                    return(
                        <li key={id}  onClick={() => {setTabData({ title: val.title, title2: val.title2, image: val.image, content: val.content, url: val.url});}}> {val.title}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 ps-lg-0">
              <div className="rightTab">
                <div className="itemTabHome" id="seo">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="tabImg">
                        <img src={tabData.image} alt="SEO"/>
                      </div>
                    </div>
                    <div className="col-lg-7 ps-lg-4">
                      <h4 className="sub_heading2 fontHeading fontWeight700">{tabData.title}</h4>
                      <p className="text fontWeight600 my-2"  dangerouslySetInnerHTML={{__html: tabData.title2}}></p>
                      <div  dangerouslySetInnerHTML={{__html: tabData.content}}></div>
                      <Link href={tabData.url} className="btnLink">Learn More <i className="bi bi-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
