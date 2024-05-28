// import React from "react";

// const SpecializedServices = () => {
//   return (
//     <section className="bgSpecialized">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-10">
//             <h3 className="sub_heading text-white fontWeight500 fontHeading">
//               Our Specialized Digital Marketing Services:
//             </h3>
//           </div>
//         </div>
//         <div className="mt-lg-4 row row-cols-2 row-cols-lg-5">
//           <div className="col">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="assets/images/icons/meta.png" alt="Meta Ads" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Meta ADS</p>
//             </div>
//           </div>
//           <div className="col">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="assets/images/icons/g-ads.png" alt="Google Ads" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Google ADS</p>
//             </div>
//           </div>
//           <div className="col">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="assets/images/icons/amazon.png" alt="Amazon Ads" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Amazon Ads</p>
//             </div>
//           </div>
//           <div className="col">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img
//                     src="assets/images/icons/linkedin-logo.png"
//                     alt="Linkedin Ads"
//                   />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Linkedin Ads</p>
//             </div>
//           </div>
//           <div className="col">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img
//                     src="assets/images/icons/instagram.png"
//                     alt="Instagram Ads"
//                   />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Instagram Ads</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecializedServices;
import React from "react";
import Image from "next/image";

const SpecializedServices = () => {

  const serviceItems = [
    {
      src: "/assets/images/icons/meta.png",
      alt: "Meta Ads",
      title: "Meta ADS",
    },
    {
      src: "/assets/images/icons/g-ads.png",
      alt: "Google Ads",
      title: "Google ADS",
    },
    {
      src: "/assets/images/icons/amazon.png",
      alt: "Amazon Ads",
      title: "Amazon Ads",
    },
    {
      src: "/assets/images/icons/linkedin-logo.png",
      alt: "Linkedin Ads",
      title: "Linkedin Ads",
    },
    {
      src: "/assets/images/icons/instagram.png",
      alt: "Instagram Ads",
      title: "Instagram Ads",
    },
   
  ];

  return (
    <section className="bgSpecialized">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-10">
            <h3 className="sub_heading text-white fontWeight500 fontHeading">
              Our Specialized Digital Marketing Services:
            </h3>
          </div>
        </div>
        <div className="mt-lg-4 row row-cols-2 row-cols-lg-5">
          {serviceItems.map((service, index) => (
            <div className="col" key={index}>
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <Image
                  className="w-100 h-auto"
                    src={service.src}
                    alt={service.alt}
                    width={100}
                    height={100}
                    quality={100}
                  />
                </div>
                <p className="title fontHeading">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
