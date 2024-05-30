// import React from "react";

// const WhyImportant = () => {
//   return (
//     <section className="customPadding bgGrey">
//       <div className="containerFull">
//         <div className="row align-items-center">
//           <div className="col-lg-4 leftDigiSer">
//             <div className="heading-section">
//               <h3 className="customHeading text-white">
//                 Why Mobile SEO is important?
//               </h3>
//               <p className="customText text-off-white">
//                 Mobile SEO tools are game-changers in the online world, it can
//                 take you to the leading shelves of the industry when executed
//                 and maintained efficiently.
//               </p>
//               <p className="customText text-off-white">
//                 74% of users return for purchases if they are positively
//                 impacted by your website's content and interface, services, and
//                 products.
//               </p>
//               <p className="customText text-off-white">
//                 Almost 52% of the users that do not find a website
//                 mobile-friendly do not engage with the brand again, our services
//                 make it certain that your website is optimized in such a way the
//                 audience can’t deny visiting it again.
//               </p>
//             </div>
//           </div>
//           <div className="col-lg-8 mt-lg-0 mt-3">
//             <p className="customText text-center">
//               <b>
//                 The benefits from mobile optimization for your company's website
//                 are uncountable, few can be listed :
//               </b>
//             </p>
//             <div className="middle-row">
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/on-page-seo-increase-conversion.svg"
//                   alt="mobile-seo-agency-in-mumbai"
//                 />
//                 <h4>Increased conversion rates</h4>
//               </div>
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-seo-boost-brand-awareness.svg"
//                   alt="best-mobile-seo-company"
//                 />
//                 <h4>Positive impact on the audience</h4>
//               </div>
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-companies-in-delhi.svg"
//                   alt="best-mobile-seo-company-in-india"
//                 />
//                 <h4>Extreme leads from come-back customers</h4>
//               </div>
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-company-in-delhi.svg"
//                   alt="best-mobile-seo-company-in-delhi"
//                 />
//                 <h4>Boosted sales</h4>
//               </div>
//             </div>
//             <div className="middle-row">
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-company-in-mumbai.svg"
//                   alt="best-mobile-seo-company-in-mumbai"
//                 />
//                 <h4>Higher SERP ranking</h4>
//               </div>
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-firm-in-india.svg"
//                   alt="best-mobile-seo-companies"
//                 />
//                 <h4>Long-lasting impact on the audience</h4>
//               </div>
//               <div className="middle-box">
//                 <img
//                   src="assets/images/icons/mobile-seo-firm-delhi.svg"
//                   alt="best-mobile-seo-companies-in-india"
//                 />
//                 <h4>Increased audience engagement and website traffic</h4>
//               </div>
//             </div>
//             <div className="middle-row">&nbsp;</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyImportant;
import Image from "next/image";
import React from "react";

// External array containing data for mobile optimization benefits
const mobileOptimizationBenefits = [
  {
    src: "assets/images/icons/on-page-seo-increase-conversion.svg",
    alt: "mobile-seo-agency-in-mumbai",
    title: "Increased conversion rates",
  },
  {
    src: "assets/images/icons/mobile-seo-seo-boost-brand-awareness.svg",
    alt: "best-mobile-seo-company",
    title: "Positive impact on the audience",
  },
  {
    src: "assets/images/icons/mobile-seo-companies-in-delhi.svg",
    alt: "best-mobile-seo-company-in-india",
    title: "Extreme leads from come-back customers",
  },
  {
    src: "assets/images/icons/mobile-seo-company-in-delhi.svg",
    alt: "best-mobile-seo-company-in-delhi",
    title: "Boosted sales",
  },
  {
    src: "assets/images/icons/mobile-seo-company-in-mumbai.svg",
    alt: "best-mobile-seo-company-in-mumbai",
    title: "Higher SERP ranking",
  },
  {
    src: "assets/images/icons/mobile-seo-firm-in-india.svg",
    alt: "best-mobile-seo-companies",
    title: "Long-lasting impact on the audience",
  },
  {
    src: "assets/images/icons/mobile-seo-firm-delhi.svg",
    alt: "best-mobile-seo-companies-in-india",
    title: "Increased audience engagement and website traffic",
  },
];

const WhyImportant = () => {
  return (
    <section className="customPadding bgGrey">
      <div className="containerFull">
        <div className="row align-items-center">
          <div className="col-lg-4 leftDigiSer">
            <div className="heading-section">
              <h3 className="customHeading text-white">
                Why Mobile SEO is important?
              </h3>
              <p className="customText text-off-white">
                Mobile SEO tools are game-changers in the online world, it can
                take you to the leading shelves of the industry when executed
                and maintained efficiently.
              </p>
              <p className="customText text-off-white">
                74% of users return for purchases if they are positively
                impacted by your website's content and interface, services, and
                products.
              </p>
              <p className="customText text-off-white">
                Almost 52% of the users that do not find a website
                mobile-friendly do not engage with the brand again, our services
                make it certain that your website is optimized in such a way the
                audience can’t deny visiting it again.
              </p>
            </div>
          </div>
          <div className="col-lg-8 mt-lg-0 mt-3">
            <p className="customText text-center">
              <b>
                The benefits from mobile optimization for your company's website
                are uncountable, few can be listed :
              </b>
            </p>
            <div className="middle-row  flex-wrap justify-content-center ">
              {mobileOptimizationBenefits.map((item, index) => (
                <div
                  key={index}
                  className="middle-box w-auto Mobilewhyimportantbox"
                >
                  <Image width={50} height={50} quality={100} src={item.src} alt={item.alt} />
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
            <div className="middle-row">&nbsp;</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;
