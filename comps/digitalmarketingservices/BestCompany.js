// import React from "react";

// const BestCompany = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-md-5">
//             <div className="rightSeoImgInner ps-lg-0">
//               <div className="itemInfographic shadow" data-aos="zoom-in">
//                 <div className="iconDigi py-0 h-auto">
//                   <img
//                     src="assets/images/icons/digital-marketing-copmany-in-mumbai.svg"
//                     alt="Increase Brand Awareness"
//                   />
//                 </div>
//                 <p className="mt-2">Increase Brand Awareness</p>
//               </div>
//               <div className="itemInfographic shadow" data-aos="zoom-in">
//                 <div className="iconDigi py-0 h-auto">
//                   <img
//                     src="assets/images/icons/digital-marketing-company-in-delhi.svg"
//                     alt="Increase Sales"
//                   />
//                 </div>
//                 <p className="mt-2">Increase Sales</p>
//               </div>
//               <div className="itemInfographic shadow" data-aos="zoom-in">
//                 <div className="iconDigi py-0 h-auto">
//                   <img
//                     src="assets/images/icons/digital-marketing-agency-in-india.svg"
//                     alt="Increase customer Engagement"
//                   />
//                 </div>
//                 <p className="mt-2">Increase Customer Engagement</p>
//               </div>
//               <div className="itemInfographic shadow" data-aos="zoom-in">
//                 <div className="iconDigi py-0 h-auto">
//                   <img
//                     src="assets/images/icons/digital-marketing-agency-in-mumbai.svg"
//                     alt="Maximize your ROI"
//                   />
//                 </div>
//                 <p className="mt-2">Maximize your ROI</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-7 mt-lg-0 mt-4">
//             <div className="ps-lg-4">
//               <h2 className="sub_heading fontHeading fontWeight600">
//                 Best{" "}
//                 <span className="text_red">
//                   Digital Marketing Company in India
//                 </span>
//               </h2>
//               <p className="customText text-justify mt-3">
//                 SIB Infotech is a leading customer acquisition digital marketing
//                 agency based in India with offices in Mumbai and New Delhi. We
//                 deliver personal and tailored services to our clients to rapidly
//                 grow their businesses, providing them with a sustainable and
//                 scalable competitive advantage by combining our proprietary
//                 Artificial Intelligence and Predictive Behavior model by
//                 improvising visibility of our clients brand and focus on
//                 Increased ROI and reach their targeted audiences.
//               </p>
//               <p className="customText">
//                 Our multi-media specialists and digital marketing experts offer
//                 you bespoke innovative digital marketing services that helps you
//                 see into your marketing future. Every business is different and
//                 has different needs
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BestCompany;
import Image from "next/image";
import React from "react";

const ItemInfographic = ({ src, alt, text }) => (
  <div className="itemInfographic shadow" data-aos="zoom-in">
    <div className="iconDigi py-0 h-auto">
      <Image width={500} height={500} className="w-100 h-auto" src={src} alt={alt} />
    </div>
    <p className="mt-2">{text}</p>
  </div>
);

const BestCompany = () => {
  
  const items = [
    {
      src: "/assets/images/icons/digital-marketing-copmany-in-mumbai.svg",
      alt: "Increase Brand Awareness",
      text: "Increase Brand Awareness",
    },
    {
      src: "/assets/images/icons/digital-marketing-company-in-delhi.svg",
      alt: "Increase Sales",
      text: "Increase Sales",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-india.svg",
      alt: "Increase customer Engagement",
      text: "Increase Customer Engagement",
    },
    {
      src: "/assets/images/icons/digital-marketing-agency-in-mumbai.svg",
      alt: "Maximize your ROI",
      text: "Maximize your ROI",
    },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-md-5">
            <div className="rightSeoImgInner ps-lg-0">
              {items.map((item, index) => (
                <ItemInfographic key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="col-lg-7 mt-lg-0 mt-4">
            <div className="ps-lg-4">
              <h2 className="sub_heading fontHeading fontWeight600">
                Best{" "}
                <span className="text_red">
                  Digital Marketing Company in India
                </span>
              </h2>
              <p className="customText text-justify mt-3">
                SIB Infotech is a leading customer acquisition digital marketing
                agency based in India with offices in Mumbai and New Delhi. We
                deliver personal and tailored services to our clients to rapidly
                grow their businesses, providing them with a sustainable and
                scalable competitive advantage by combining our proprietary
                Artificial Intelligence and Predictive Behavior model by
                improvising visibility of our clients brand and focus on
                Increased ROI and reach their targeted audiences.
              </p>
              <p className="customText">
                Our multi-media specialists and digital marketing experts offer
                you bespoke innovative digital marketing services that helps you
                see into your marketing future. Every business is different and
                has different needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestCompany;
