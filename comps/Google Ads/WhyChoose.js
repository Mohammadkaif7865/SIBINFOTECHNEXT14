import React from 'react';
import Image from 'next/image';

const WhyChoose = () => {
  const googleAdsData = [
    {
      src: '/assets/images/icons/google-ads-management-google-adwords.svg',
      alt: 'Google-Ads-Management-Google-AdWords',
      text: 'Google AdWords',
    },
    {
      src: '/assets/images/icons/google-ads-management-google-shopping.svg',
      alt: 'Google-Ads-Management-Google-Shopping',
      text: 'Google Shopping',
    },
    {
      src: '/assets/images/icons/google-ads-management-mobile-ads.svg',
      alt: 'Google-Ads-Management-Google-Mobile-Ads',
      text: 'Google Mobile Ads',
    },
    {
      src: '/assets/images/icons/google-ads-management-display-ads.svg',
      alt: 'Google-Ads-Management-Display-Ads',
      text: 'Google Display Ads',
    },
    {
      src: '/assets/images/icons/google-ads-management-google-analytics.svg',
      alt: 'Google-Ads-Management-Google-Analytics',
      text: 'Google Analytics',
    },
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 leftDigiSer">
            <div className="heading-section">
              <h3 className="customHeading text-white">
                We Are Not Just Another Google AdWords India Marketing Agency
              </h3>
              <p className="customText text-off-white">
                Don't just choose anyone. Google AdWords Certified Partner
                trusted by Google
              </p>
            </div>
          </div>
          <div className="col-lg-8 text-center">
            <h3 className="customHeading customLineHeight2 mt-lg-0 mt-4">
              Why Choose SIB Infotech As Your{' '}
              <span className="text_red">Google AdWords </span> PPC Campaign
              Management Agency
            </h3>
            <h3 className="margin-bottom text-blue fontHeading">
              Do you Need a google AdWords Agency?
            </h3>
            <p className="customText">
              <b>
                In house team of Google AdWords Certified professional in all
                major Areas :
              </b>
            </p>
            <div className="google-ads-row mt-4">
              {googleAdsData.map((data, index) => (
                <div className="google-ads-box  " key={index}>
                  <Image
                  className=' '
                     
                    src={data.src}
                    alt={data.alt}
                    width={100}
                    height={50}
                    quality={100}
                  />
                  <h5 className=''>{data.text}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
