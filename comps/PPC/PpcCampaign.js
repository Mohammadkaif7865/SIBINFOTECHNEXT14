// import Link from "next/link";
// import React from "react";

// const PpcCampaign = () => {
//   return (
//     <section className="bgGrey">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-7">
//             <h3 className="customHeading">
//               Factor for successful{" "}
//               <span className="text_red">PPC campaign</span>
//             </h3>
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="itemPayper">
//                   <div className="payIcon">
//                     <img
//                       src="assets/images/icons/releavent-keyword.svg"
//                       alt="Relevant Keyword"
//                     />
//                   </div>
//                   <h4>Relevancy of keywords</h4>
//                   <p>
//                     In order to run a successful PPC campaign its very important
//                     to put effective and relevant keywords.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="itemPayper">
//                   <div className="payIcon">
//                     <img
//                       src="assets/images/icons/quality-score.svg"
//                       alt="Quality Score"
//                     />
//                   </div>
//                   <h4>Maintain a good quality score</h4>
//                   <p>
//                     Advertiser with better quality score get maximum clicks with
//                     lower cost.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="itemPayper">
//                   <div className="payIcon">
//                     <img
//                       src="assets/images/icons/creative.svg"
//                       alt="Creative"
//                     />
//                   </div>
//                   <h4>Creative</h4>
//                   <p>A good creative is vital for a good campaign.</p>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="itemPayper">
//                   <div className="payIcon">
//                     <img
//                       src="assets/images/icons/landing-page.svg"
//                       alt="Landing Page"
//                     />
//                   </div>
//                   <h4>Landing page quality</h4>
//                   <p>
//                     A good landing page is key factor to for a successful PPC
//                     campaign. Page quality should be very use all the call to
//                     action button.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5">
//             <div className="rightPayPer">
//               <h4 className="customHeading">
//                 There Aren&#39;t Many Google Partners
//               </h4>
//               <h5 className="customHeading">
//                 <span className="text_red">We&#39;re one of them.</span>
//               </h5>
//               <div className="goolePartner">
//                 <Link href="https://www.google.com/partners/agency?id=4328223643">
//                   <span target="_blank">
//                     <img
//                       src="http://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg"
//                       alt="Partner"
//                     />
//                   </span>
//                 </Link>
//               </div>
//               <div className="specialize">
//                 <h5>Specialized in:</h5>
//                 <div className="row">
//                   <div className="col-lg-3 col-4">
//                     <div className="itemSpecial">
//                       <div className="imgSpecial">
//                         <img
//                           src="assets/images/icons/search-ad.png"
//                           alt="Search Ad"
//                         />
//                       </div>
//                       <p>Search Ads</p>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-4">
//                     <div className="itemSpecial">
//                       <div className="imgSpecial">
//                         <img
//                           src="assets/images/icons/mobile-ad.png"
//                           alt="Mobile Ad"
//                         />
//                       </div>
//                       <p>Mobile Ads</p>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-4">
//                     <div className="itemSpecial">
//                       <div className="imgSpecial">
//                         <img
//                           src="assets/images/icons/display-ad.svg"
//                           alt="Display Ad"
//                         />
//                       </div>
//                       <p>Display Ads</p>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-4">
//                     <div className="itemSpecial">
//                       <div className="imgSpecial">
//                         <img
//                           src="assets/images/icons/video-ads.svg"
//                           alt="Video Ads"
//                         />
//                       </div>
//                       <p>Video Ads</p>
//                     </div>
//                   </div>
//                   <div className="col-lg-3 col-4">
//                     <div className="itemSpecial">
//                       <div className="imgSpecial">
//                         <img
//                           src="assets/images/icons/shopping-ads.svg"
//                           alt="Shopping"
//                         />
//                       </div>
//                       <p>Shopping Ads</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PpcCampaign;
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PpcCampaign = () => {
  // Array of factors for a successful PPC campaign
  const factors = [
    {
      icon: "/assets/images/icons/releavent-keyword.svg",
      title: "Relevancy of keywords",
      description:
        "In order to run a successful PPC campaign, it's very important to use effective and relevant keywords.",
    },
    {
      icon: "/assets/images/icons/quality-score.svg",
      title: "Maintain a good quality score",
      description:
        "Advertisers with better quality scores get maximum clicks with lower costs.",
    },
    {
      icon: "/assets/images/icons/creative.svg",
      title: "Creative",
      description: "A good creative is vital for a successful campaign.",
    },
    {
      icon: "/assets/images/icons/landing-page.svg",
      title: "Landing page quality",
      description:
        "A good landing page is a key factor for a successful PPC campaign. The page quality should be very user-friendly and utilize all the call-to-action buttons.",
    },
  ];

  const specializedAds = [
    {
      name: "Search Ads",
      icon: "/assets/images/icons/search-ad.png",
      alt: "Search Ads",
    },
    {
      name: "Mobile Ads",
      icon: "/assets/images/icons/mobile-ad.png",
      alt: "Mobile Ads",
    },
    {
      name: "Display Ads",
      icon: "/assets/images/icons/display-ad.svg",
      alt: "Display Ads",
    },
    {
      name: "Video Ads",
      icon: "/assets/images/icons/video-ads.svg",
      alt: "Video Ads",
    },
    {
      name: "Shopping Ads",
      icon: "/assets/images/icons/shopping-ads.svg",
      alt: "Shopping Ads",
    },
  ];

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-7">
            <h3 className="customHeading">
              Factor for successful{" "}
              <span className="text_red">PPC campaign</span>
            </h3>
            <div className="row">
              {/* Mapping over factors array to render each factor */}
              {factors.map((factor, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="itemPayper">
                    <div className="payIcon">
                      <Image
                        width={50}
                        height={50}
                        src={factor.icon}
                        alt={factor.title}
                      />
                    </div>
                    <h4>{factor.title}</h4>
                    <p>{factor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="rightPayPer">
              <h4 className="customHeading">
                There Aren&#39;t Many Google Partners
              </h4>
              <h5 className="customHeading">
                <span className="text_red">We&#39;re one of them.</span>
              </h5>
              <div className="goolePartner">
                <Link href="https://www.google.com/partners/agency?id=4328223643">
                  <span target="_blank">
                    <Image
                      width={150}
                      height={150}
                      src="http://www.gstatic.com/partners/badge/images/2021/PartnerBadgeClickable.svg"
                      alt="Google Partner"
                    />
                  </span>
                </Link>
              </div>
              <div className="specialize">
                <h5>Specialized in:</h5>
                <div className="row">
                  {/* Mapping over specialized ads array to render each type */}
                  {specializedAds.map((adType, index) => (
                    <div className="col-lg-3 col-4" key={index}>
                      <div className="itemSpecial">
                        <div className="imgSpecial">
                          <Image
                            className="w-100 h-auto"
                            width={200}
                            height={200}
                            quality={100}
                            src={adType.icon}
                            alt={adType.alt}
                          />
                        </div>
                        <p>{adType.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PpcCampaign;
