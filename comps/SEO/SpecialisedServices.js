// import React from "react";

// const SpecialisedServices = () => {
//   return (
//     <section className="bgSpecialized">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-10">
//             <h3 className="sub_heading text-white fontWeight500 fontHeading">
//               Our Specialised Search Engine Optimization Services:
//             </h3>
//           </div>
//         </div>
//         <div className="mt-lg-5 row">
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img
//                     src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/shopping-cart.png"
//                     alt="Shopping Cart"
//                   />
//                 </picture>
//               </div>
//               <p className="title fontHeading">eCommerce SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/plane.png" alt="Plane" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Travel SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/folder.png" alt="Folder" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">SEO for News Website</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/amazon.png" alt="Amazon" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Amazon SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/shopify.png" alt="Shopify" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Shopify SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/bars.png" alt="Finance" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Finance SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/localseo.png" alt="Local SEO" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Local SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img
//                     src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/building.png"
//                     alt="Real Estate"
//                   />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Real Estate SEO</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-6 col-sm-4">
//             <div className="itemSpecialization">
//               <div className="iconSpecialization">
//                 <picture>
//                   <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/health.png" alt="Health" />
//                 </picture>
//               </div>
//               <p className="title fontHeading">Health Care SEO</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SpecialisedServices;
import Image from "next/image";
import React from "react";

const SpecialisedServices = () => {
  // Define an array of service objects
  const services = [
    { icon: "shopping-cart.png", title: "eCommerce SEO" },
    { icon: "plane.png", title: "Travel SEO" },
    { icon: "folder.png", title: "SEO for News Website" },
    { icon: "amazon.png", title: "Amazon SEO" },
    { icon: "shopify.png", title: "Shopify SEO" },
    { icon: "bars.png", title: "Finance SEO" },
    { icon: "localseo.png", title: "Local SEO" },
    { icon: "building.png", title: "Real Estate SEO" },
    { icon: "health.png", title: "Health Care SEO" },
  ];

  return (
    <section className="bgSpecialized">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-10">
            <h3 className="sub_heading text-white fontWeight500 fontHeading">
              Our Specialised Search Engine Optimization Services:
            </h3>
          </div>
        </div>
        <div className="mt-lg-5 row">
          {/* Map over the services array to render each service */}
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-6 col-sm-4">
              <div className="itemSpecialization">
                <div className="iconSpecialization">
                  <picture>
                    <Image
                      width={50}
                      height={50}
                      className="h-auto"
                      src={`/assets/images/icons/${service.icon}`}
                      alt={service.title}
                    />
                  </picture>
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

export default SpecialisedServices;
