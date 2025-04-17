// import Image from "next/image";
// import React from "react";

// const WhyBest = () => {
//   return (
//     <section className="bgDarkGrey dots">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="leftWhy">
//               <h4 className="heading fw-bold text-center">
//                 Why SIB Infotech is the Best{" "}
//                 <span className="titleHighlight d-inline-block text-center">
//                   Website Design Agency?
//                 </span>
//               </h4>
//               <div className="space"></div>
//               <p className="text-center">
//                 We have been crafting professional website designs which have
//                 proven to grow your business. Our aim is to choose the top web
//                 development services fit for creating unique, creative websites
//                 &amp; engaging Website. A consider the below as a few important
//                 characteristics to take care of for Sales Driving Website
//                 Design.
//               </p>
//               <div className="row mt-4">
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <Image width={500} height={400} className="w-100 h-auto b"
//                         src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/ui-ux-design.svg"
//                         alt="UI/UX Design"
//                       />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Out Standing Designs Great UI/UX
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <img
//                         src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/search-de.svg"
//                         alt="Search Website"
//                       />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Use of Best Website Architecture
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/ssl.png" alt="SSL Icon" />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Fast and Secure / SSL Security
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <img
//                         src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/industry-specific.svg"
//                         alt="Industry Specific"
//                       />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Built on Latest Technologies
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <img
//                         src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/clean-code.svg"
//                         alt="Clean Code"
//                       />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Modern &amp; Clean Coding that works
//                       </h5>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-2 col-6">
//                   <div className="itemWhy shadow">
//                     <div className="iconWhy">
//                       <img
//                         src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/icons/search.png"
//                         alt="Search Icon"
//                       />
//                     </div>
//                     <div className="titleWhy">
//                       <h5 className="small_heading">
//                         Search Engine Friendly Designs
//                       </h5>
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

// export default WhyBest;
import Image from "next/image";
import React from "react";

const iconsData = [
  {
    src: "ui-ux-design.svg",
    alt: "UI/UX Design",
    title: "Out Standing Designs Great UI/UX",
  },
  {
    src: "search-de.svg",
    alt: "Search Website",
    title: "Use of Best Website Architecture",
  },
  { src: "ssl.png", alt: "SSL Icon", title: "Fast and Secure / SSL Security" },
  {
    src: "industry-specific.svg",
    alt: "Industry Specific",
    title: "Built on Latest Technologies",
  },
  {
    src: "clean-code.svg",
    alt: "Clean Code",
    title: "Modern & Clean Coding that works",
  },
  {
    src: "search.png",
    alt: "Search Icon",
    title: "Search Engine Friendly Designs",
  },
];

const WhyBest = () => {
  return (
    <section className="bgDarkGrey dots">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <div className="leftWhy">
              <h4 className="heading fw-bold text-center fontHeading">
                Why SIB Infotech is the Best{" "}
                <span className="titleHighlight d-inline-block text-center">
                  Website Design Agency?
                </span>
              </h4>
              <div className="space"></div>
              <p className="text-center">
                We have been crafting professional website designs which have
                proven to grow your business. Our aim is to choose the top web
                development services fit for creating unique, creative websites
                & engaging Website. A consider the below as a few important
                characteristics to take care of for Sales Driving Website
                Design.
              </p>
              <div className="row mt-4">
                {iconsData.map((icon, index) => (
                  <div key={index} className="col-lg-2 col-6">
                    <div className="itemWhy shadow">
                      <div className="iconWhy">
                        <Image
                          width={500}
                          height={400}
                          className="w-100 h-auto"
                          src={`/assets/images/icons/${icon.src}`}
                          alt={icon.alt}
                        />
                      </div>
                      <div className="titleWhy">
                        <h5 className="small_heading fontHeading">
                          {icon.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBest;
