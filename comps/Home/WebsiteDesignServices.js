// import Link from "next/link";
// import React from "react";

// const WebsiteDesignServices = () => {
//   return (
//     <section className="bgGrey ">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="row">
//               <div className="col-lg-6 translate50">
//                 <Link href="#">
//                   <div className="webDesignItem">
//                     <div className="iconWe">
//                       <img
//                         src="assets/images/icons/web-design.png"
//                         alt="Web Design"
//                       />
//                     </div>
//                     <h4 className="small_heading fontWeight700">
//                       Website Designing
//                     </h4>
//                     <p>
//                       Your website is your home on the internet (web). The
//                       Website Design is the first...
//                     </p>
//                     <button>
//                       <i className="fa fa-chevron-right"></i>
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-6">
//                 <Link href="#">
//                   <div className="webDesignItem">
//                     <div className="iconWe">
//                       <img
//                         src="assets/images/icons/settings.png"
//                         alt="Setting Icon"
//                       />
//                     </div>
//                     <h4 className="small_heading fontWeight700">
//                       Custom Website Designing
//                     </h4>
//                     <p>
//                       Using this one can start from just one simple page with an
//                       Email link, building...
//                     </p>
//                     <button>
//                       <i className="fa fa-chevron-right"></i>
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-6 translate50">
//                 <Link href="#">
//                   <div className="webDesignItem">
//                     <div className="iconWe">
//                       <img
//                         src="assets/images/icons/responsive-website.png"
//                         alt="responsive Website Icon"
//                       />
//                     </div>
//                     <h4 className="small_heading fontWeight700">
//                       Responsive Website Designing
//                     </h4>
//                     <p>
//                       Our web design uses the latest technology to look great on
//                       any screen sizes...
//                     </p>
//                     <button>
//                       <i className="fa fa-chevron-right"></i>
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//               <div className="col-lg-6">
//                 <Link href="#">
//                   <div className="webDesignItem">
//                     <div className="iconWe">
//                       <img
//                         src="assets/images/icons/ecommerce-website.png"
//                         alt="E-commerce Icon"
//                       />
//                     </div>
//                     <h4 className="small_heading fontWeight700">
//                       E-commerce Website
//                     </h4>
//                     <p>
//                       We develop affordable e-commerce website design for
//                       businesses in India, UK, USA, Australia ..
//                     </p>
//                     <button>
//                       <i className="fa fa-chevron-right"></i>
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-4 ps-lg-4">
//             <div className="rightServicesWeb">
//               <picture>
//                 <source
//                   srcSet="assets/images/programming-amico.webp"
//                   type="image/webp"
//                 />
//                 <img
//                   src="assets/images/programming-amico.png"
//                   className="img-fluid"
//                   alt="Writng Programme"
//                 />
//               </picture>
//               <h5 className="small_head text_red mt-4">We're offering</h5>
//               <h4 className="regular_heading fontWeight700 mt-2">
//                 Website Design Services
//               </h4>
//               <p className="mt-3">
//                 We use latest technology and design innovations to develop
//                 creative, smart & user friendly websites to successfully connect
//                 users with brands. Empower yourself with the best website design
//                 company in India.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebsiteDesignServices;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const WebsiteDesignServices = () => {
  // Array of website design service items
  const serviceItems = [
    {
      iconSrc: "/assets/images/icons/web-design.png",
      title: "Website Designing",
      description:
        "Your website is your home on the internet (web). The Website Design is the first...",
    },
    {
      iconSrc: "/assets/images/icons/settings.png",
      title: "Custom Website Designing",
      description:
        "Using this one can start from just one simple page with an Email link, building...",
    },
    {
      iconSrc: "/assets/images/icons/responsive-website.png",
      title: "Responsive Website Designing",
      description:
        "Our web design uses the latest technology to look great on any screen sizes...",
    },
    {
      iconSrc: "/assets/images/icons/ecommerce-website.png",
      title: "E-commerce Website",
      description:
        "We develop affordable e-commerce website design for businesses in India, UK, USA, Australia ..",
    },
  ];

  // Render the component
  return (
    <section className="bgGrey ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {/* Mapping over the serviceItems array */}
              {serviceItems.map((item, index) => (
                <div className="col-lg-6 WebsiteDesignServices" key={index}>
                  <Link href="#">
                    <div className="webDesignItem">
                      <div className="iconWe">
                        <Image
                          width={100}
                          height={100}
                          className="w-100 h-auto "
                          src={item.iconSrc}
                          alt={item.title}
                        />
                      </div>
                      <h4 className="small_heading fontWeight700">
                        {item.title}
                      </h4>
                      <p>{item.description}</p>
                      <button>
                        <i className="fa fa-chevron-right"></i>
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 ps-lg-4">
            <div className="rightServicesWeb">
              <picture>
                <source
                  srcSet="/assets/images/programming-amico.webp"
                  type="image/webp"
                />
                <img
                  src="/assets/images/programming-amico.png"
                  className="img-fluid"
                  alt="Writing Programme"
                />
              </picture>
              <h5 className="small_head text_red mt-4">We're offering</h5>
              <h4 className="regular_heading fontWeight700 mt-2">
                Website Design Services
              </h4>
              <p className="mt-3">
                We use the latest technology and design innovations to develop
                creative, smart & user-friendly websites to successfully connect
                users with brands. Empower yourself with the best website design
                company in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDesignServices;
