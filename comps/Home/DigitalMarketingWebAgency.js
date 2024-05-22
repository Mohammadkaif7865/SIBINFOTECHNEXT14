// import React from "react";

// const DigitalMarketingWebAgency = () => {
//   return (
//     <section className="marBlock overflowHidden">
//       <div className="marqBlock">
//         <h2 className="large_heading maqrquee fw-bold text-uppercase">
//           <span className="stroke">DIGITAL MARKETING</span> & WEB AGENCY
//         </h2>
//         <h2 className="large_heading mt-4 maqrqueeReverse fw-bold text-uppercase">
//           DIGITAL MARKETING & <span className="stroke">WEB AGENCY</span>
//         </h2>
//       </div>
//       <div className="containerFull">
//         <div className="technicalExpertise">
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/php.png" alt="PHP" />
//             <h4 className="small_heading">PHP</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/wordpress-logo.png" alt="WordPress" />
//             <h4 className="small_heading">WordPress</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/asp.png" alt="ASP.net" />
//             <h4 className="small_heading">ASP .net</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/mysql.png" alt="MySQL" />
//             <h4 className="small_heading">MySQL</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/html-5.png" alt="HTML" />
//             <h4 className="small_heading">HTML</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/drupal.png" alt="Drupal" />
//             <h4 className="small_heading">Drupal</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/js.png" alt="JavaScript" />
//             <h4 className="small_heading">JavaScript</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/ci.png" alt="Codeigniter" />
//             <h4 className="small_heading">Codeigniter</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/laravel.png" alt="Laravel" />
//             <h4 className="small_heading">Laravel</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/magento.png" alt="Magento" />
//             <h4 className="small_heading">Magento</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/angular.png" alt="Angular" />
//             <h4 className="small_heading">Angular</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/css-3.png" alt="CSS" />
//             <h4 className="small_heading">CSS</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/photoshop.png" alt="Photoshop" />
//             <h4 className="small_heading">Photoshop</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/illustrator.png" alt="Illustrator" />
//             <h4 className="small_heading">Illustrator</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/figma.png" alt="Figma" />
//             <h4 className="small_heading">Figma</h4>
//           </div>
//           <div className="itemTechnicalExpertise">
//             <img src="assets/images/bootstrap.png" alt="Bootstrap" />
//             <h4 className="small_heading">Bootstrap</h4>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalMarketingWebAgency;

import React from "react";

const DigitalMarketingWebAgency = () => {
  // Array of technical expertise objects
  const technicalExpertise = [
    { src: "assets/images/php.png", alt: "PHP" },
    { src: "assets/images/wordpress-logo.png", alt: "WordPress" },
    { src: "assets/images/asp.png", alt: "ASP.net" },
    { src: "assets/images/mysql.png", alt: "MySQL" },
    { src: "assets/images/html-5.png", alt: "HTML" },
    { src: "assets/images/drupal.png", alt: "Drupal" },
    { src: "assets/images/js.png", alt: "JavaScript" },
    { src: "assets/images/ci.png", alt: "Codeigniter" },
    { src: "assets/images/laravel.png", alt: "Laravel" },
    { src: "assets/images/magento.png", alt: "Magento" },
    { src: "assets/images/angular.png", alt: "Angular" },
    { src: "assets/images/css-3.png", alt: "CSS" },
    { src: "assets/images/photoshop.png", alt: "Photoshop" },
    { src: "assets/images/illustrator.png", alt: "Illustrator" },
    { src: "assets/images/figma.png", alt: "Figma" },
    { src: "assets/images/bootstrap.png", alt: "Bootstrap" },
  ];

  return (
    <section className="marBlock overflowHidden ">
      <div className="marqBlock">
        <h2 className="large_heading maqrquee fw-bold text-uppercase">
          <span className="stroke">DIGITAL MARKETING</span> & WEB AGENCY
        </h2>
        <h2 className="large_heading mt-4 maqrqueeReverse fw-bold text-uppercase">
          DIGITAL MARKETING & <span className="stroke">WEB AGENCY</span>
        </h2>
      </div>
      <div className="containerFull">
        <div className="technicalExpertise">
          {technicalExpertise.map((expertise, index) => (
            <div className="itemTechnicalExpertise" key={index}>
              <img src={expertise.src} alt={expertise.alt} />
              <h4 className="small_heading">{expertise.alt}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingWebAgency;
