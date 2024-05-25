// import React from "react";

// const MarketingTools = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-12">
//             <h3 className="sub_heading fontWeight500 fontHeading">
//               Some of the Best Digital Marketing Tools
//             </h3>
//           </div>
//         </div>
//         <div className="row mt-lg-3">
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/google-analytics.webp"
//                   type="image/webp"
//                 />
//                 <img
//                   src="assets/images/google-analytics.png"
//                   alt="Google Analytics"
//                 />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/google-adsense.webp"
//                   type="image/webp"
//                 />
//                 <img
//                   src="assets/images/google-adsense.png"
//                   alt="Google Adsense"
//                 />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/meta-business.webp"
//                   type="image/webp"
//                 />
//                 <img
//                   src="assets/images/meta-business.png"
//                   alt="Meta Bussiness"
//                 />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/mailchimp.webp"
//                   type="image/webp"
//                 />
//                 <img src="assets/images/mailchimp.png" alt="Mail Chimp" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/hubspot.webp" type="image/webp" />
//                 <img src="assets/images/hubspot.png" alt="HubsSpot" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/semrush.webp" type="image/webp" />
//                 <img src="assets/images/semrush.png" alt="Semrush" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/canva.webp" type="image/webp" />
//                 <img src="assets/images/canva.png" alt="Canva" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/ahrefs.webp" type="image/webp" />
//                 <img src="assets/images/ahrefs.png" alt="ahref" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/wordpress.webp"
//                   type="image/webp"
//                 />
//                 <img src="assets/images/wordpress.png" alt="WordPress" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source
//                   srcSet="assets/images/hootsuite.webp"
//                   type="image/webp"
//                 />
//                 <img src="assets/images/hootsuite.png" alt="Hootsuite" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/zoom.webp" type="image/webp" />
//                 <img src="assets/images/zoom.png" alt="Zoom" />
//               </picture>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 col-sm-3">
//             <div className="toolsLogo">
//               <picture>
//                 <source srcSet="assets/images/shopify.webp" type="image/webp" />
//                 <img src="assets/images/shopify.png" alt="Shopify" />
//               </picture>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MarketingTools;

import React from "react";
import Image from "next/image";

const MarketingTools = () => {
  // Define an array of tool objects with image paths and alt text
  const tools = [
    { src: "/assets/images/google-analytics.png", alt: "Google Analytics" },
    { src: "/assets/images/google-adsense.png", alt: "Google Adsense" },
    { src: "/assets/images/meta-business.png", alt: "Meta Business" },
    { src: "/assets/images/mailchimp.png", alt: "Mail Chimp" },
    { src: "/assets/images/hubspot.png", alt: "Hubspot" },
    { src: "/assets/images/semrush.png", alt: "Semrush" },
    { src: "/assets/images/canva.png", alt: "Canva" },
    { src: "/assets/images/ahrefs.png", alt: "Ahrefs" },
    { src: "/assets/images/wordpress.png", alt: "WordPress" },
    { src: "/assets/images/hootsuite.png", alt: "Hootsuite" },
    { src: "/assets/images/zoom.png", alt: "Zoom" },
    { src: "/assets/images/shopify.png", alt: "Shopify" },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="sub_heading fontWeight500 fontHeading">
              Some of the Best Digital Marketing Tools
            </h3>
          </div>
        </div>
        <div className="row mt-lg-3">
        
          {tools.map((tool, index) => (
            <div key={index} className="col-lg-2 col-6 col-sm-3 position-relative">
              <div className="toolsLogo">
            
                <Image className=" h-auto w-100 h-50" src={tool.src} alt={tool.alt} quality={100} width={180} height={48} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
