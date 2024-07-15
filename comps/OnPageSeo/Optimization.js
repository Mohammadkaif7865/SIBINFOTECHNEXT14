// import React from "react";

// const Optimization = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <div className="row align-items-center">
//           <div className="col-lg-7">
//             <h3 className="customHeading">
//               <span className="text_red">On page SEO</span> optimizations
//               Service for:
//             </h3>
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/wordpress-logo.svg"
//                     alt="Wordpress Website"
//                   />
//                   <h4>Wordpress Websites</h4>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     className="sm-img"
//                     src="assets/images/icons/on-page-img-ecommerce-website.svg"
//                     alt="on-page-img-ecommerce-website"
//                   />
//                   <h4>Ecommerce Websites</h4>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/on-page-seo-woo-commerce.svg"
//                     alt="on-page-seo-woo-commerce-website"
//                   />
//                   <h4>Woo commerce Websites</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/on-page-seo-shopify-website.svg"
//                     alt="on-page-seo-shopify-website"
//                   />
//                   <h4>Shopify Websites</h4>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/on-page-seo-big-commerce-website.svg"
//                     alt="on-page-seo-big-commerce-website"
//                   />
//                   <h4>Big Commerce Websites</h4>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/on-page-seo-magento-website.svg"
//                     alt="on-page-seo-magento-website"
//                   />
//                   <h4>Magento Websites</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-4">
//                 <div className="optmize-box">
//                   <img
//                     src="assets/images/icons/on-page-seo-custom-build-website.svg"
//                     alt="on-page-seo-custom-build-website"
//                   />
//                   <h4>Custom Built Websites</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-5 graphic-why-us-right">
//             <div className="background-blue">
//               <h3 className="customHeading text-white customLineHeight">
//                 We help you give your business the attention it deserves
//               </h3>
//               <p className="customText text-off-white">
//                 We expertise in getting 1st page results on google, yahoo, bing
//                 and other search engines.
//               </p>
//               <p className="customText text-off-white">
//                 We guarantee 24*7 support to make sure that our services provide
//                 you the best results.
//               </p>
//               <p className="customText text-off-white">
//                 Our on-page SEO strategy takes you to the top shelves of the
//                 online world.
//               </p>
//               <p className="customText text-off-white">
//                 With our expertise, experience, and excellence, we can help your
//                 brand reach the heights of the market in no time.
//               </p>
//               <p className="customText text-off-white">
//                 Our services can increase organic search engine ranking
//                 drastically and getting the best placements for the websites
//                 along with reach to new customers. We are a leading digital
//                 marketing agency in India that specializes in SEO services.
//               </p>
//               <p className="customText text-off-white">
//                 We believe in delivering service with the perfection that leads
//                 to worldwide 750+ happy clients. We ensure that your brand gets
//                 the desired exposure it needs. We believe that your success is
//                 our success.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Optimization;
import Image from "next/image";
import React from "react";

const Optimization = () => {
  // Array of optimize box data
  const optimizeBoxes = [
    {
      imgSrc: "/assets/images/icons/wordpress-logo.svg",
      altText: "Wordpress Website",
      title: "Wordpress Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-img-ecommerce-website.svg",
      altText: "on-page-img-ecommerce-website",
      title: "Ecommerce Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-seo-woo-commerce.svg",
      altText: "on-page-seo-woo-commerce-website",
      title: "Woo commerce Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-seo-shopify-website.svg",
      altText: "on-page-seo-shopify-website",
      title: "Shopify Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-seo-big-commerce-website.svg",
      altText: "on-page-seo-big-commerce-website",
      title: "Big Commerce Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-seo-magento-website.svg",
      altText: "on-page-seo-magento-website",
      title: "Magento Websites",
    },
    {
      imgSrc: "/assets/images/icons/on-page-seo-custom-build-website.svg",
      altText: "on-page-seo-custom-build-website",
      title: "Custom Built Websites",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h3 className="customHeading fontWeight800">
              <span className="text_red">On page SEO</span> optimizations
              Service for:
            </h3>
            {/* Map over optimizeBoxes to render optimize boxes */}
            <div className="row">
              {optimizeBoxes.map((box, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="optmize-box">
                    <Image quality={100}  width={100} height={100} src={box.imgSrc} alt={box.altText} />
                    <h4 className="fontHeading fontWeight600">{box.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 graphic-why-us-right">
            <div className="background-blue">
              <h3 className="customHeading text-white customLineHeight fontWeight800">
                We help you give your business the attention it deserves
              </h3>
              <p className="customText text-off-white">
                We expertise in getting 1st page results on google, yahoo, bing
                and other search engines.
              </p>
              <p className="customText text-off-white">
                We guarantee 24*7 support to make sure that our services provide
                you the best results.
              </p>
              <p className="customText text-off-white">
                Our on-page SEO strategy takes you to the top shelves of the
                online world.
              </p>
              <p className="customText text-off-white">
                With our expertise, experience, and excellence, we can help your
                brand reach the heights of the market in no time.
              </p>
              <p className="customText text-off-white">
                Our services can increase organic search engine ranking
                drastically and getting the best placements for the websites
                along with reach to new customers. We are a leading digital
                marketing agency in India that specializes in SEO services.
              </p>
              <p className="customText text-off-white">
                We believe in delivering service with the perfection that leads
                to worldwide 750+ happy clients. We ensure that your brand gets
                the desired exposure it needs. We believe that your success is
                our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Optimization;
