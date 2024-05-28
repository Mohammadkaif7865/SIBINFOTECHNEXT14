import Link from 'next/link'
import React from 'react'

const HighlyEfficient = () => {
  return (
    
    <section className="bgGrey">
    <div className="containerFull">
      <div className="row">
        <div className="col-lg-5">
          <div className="bgBlueDarkLeft">
            <p className="customText text-white">
              Along with extensive benefits our Google Advertising
              management services are loaded with
            </p>
            <h3 className="customHeading text-white customLineHeight2">
              360-Degree
              <br />
              Highly Efficient Strategy
            </h3>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-lg-6">
              <ul className="instagram-list">
                <li className="customText">Setting up business goals</li>
                <li className="customText">Keyword Research</li>
                <li className="customText">Competitor campaign analysis</li>
                <li className="customText">Audience Research</li>
                <li className="customText">
                  Optimizing landing page and offers
                </li>
                <li className="customText">
                  Implementing focused keywords
                </li>
                <li className="customText">
                  Grouping related keywords into Ad Groups
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="instagram-list">
                <li className="customText">
                  Traffic Segmentation (SN &amp; DN traffic)
                </li>
                <li className="customText">
                  Crafting reflective and unique Ad Copy
                </li>
                <li className="customText">Conversion tracking</li>
                <li className="customText">Data mining from Ad insights</li>
                <li className="customText">
                  Maintenance and optimization of Google Ads
                </li>
                <li className="customText">
                  Regular transparent progress reports
                </li>
                <li className="customText">24*7*365 Support</li>
              </ul>
            </div>
          </div>
          <p className="customText">
            You will find many Google AdWords marketing services provider
            and{" "}
            <Link prefetch={false} href="/search-engine-optimization-seo-services">
              SEO Company in India
            </Link>{" "}
            but delivering the desired results matters which make SIB
            Infotech stand out. Talk to us for Google Ads Services and SEO
            services to be on top of Search Engine Result Pages.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HighlyEfficient