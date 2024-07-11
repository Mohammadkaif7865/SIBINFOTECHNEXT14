// import React from "react";

// const Industries = () => {
//   return (
//     <section className="topCurve b ">
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-8 offset-lg-2">
//             <h4 className="heading fw-bold text-center text-white">
//               Industries we serve
//             </h4>
//           </div>
//         </div>
//         <div className="space"></div>
//         <div className="row">
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/walking.png" alt="Walking" />
//               </div>
//               <h4 className="small_heading">Travel</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/graduated.png" alt="Graduated" />
//               </div>
//               <h4 className="small_heading">Education</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/crane.png" alt="Crane" />
//               </div>
//               <h4 className="small_heading">Real Estate</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img
//                   src="assets/images/icons/wedding-rings.png"
//                   alt="Wedding Rings"
//                 />
//               </div>
//               <h4 className="small_heading">Matrimony</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img
//                   src="assets/images/icons/healthcare.png"
//                   alt="Health Care"
//                 />
//               </div>
//               <h4 className="small_heading">Healthcare</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/team.png" alt="Team" />
//               </div>
//               <h4 className="small_heading">Associations</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/test.png" alt="Chemical" />
//               </div>
//               <h4 className="small_heading">Chemical</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/fast-food.png" alt="Fast Food" />
//               </div>
//               <h4 className="small_heading">Food</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/antenna.png" alt="Antenna" />
//               </div>
//               <h4 className="small_heading">Telecom/Tech</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img
//                   src="assets/images/icons/connection.png"
//                   alt="Connection"
//                 />
//               </div>
//               <h4 className="small_heading">B2B</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/saving.png" alt="Saving" />
//               </div>
//               <h4 className="small_heading">Financial</h4>
//             </div>
//           </div>
//           <div className="col-lg-2 col-6 px-2">
//             <div className="itemIndustries border shadow">
//               <div className="iconIndustries">
//                 <img src="assets/images/icons/low-price.png" alt="Low Price" />
//               </div>
//               <h4 className="small_heading">Non Profit</h4>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Industries;
import Image from "next/image";
import React from "react";

const industryData = [
  { icon: "walking.png", title: "Travel" },
  { icon: "graduated.png", title: "Education" },
  { icon: "crane.png", title: "Real Estate" },
  { icon: "wedding-rings.png", title: "Matrimony" },
  { icon: "healthcare.png", title: "Healthcare" },
  { icon: "team.png", title: "Associations" },
  { icon: "test.png", title: "Chemical" },
  { icon: "fast-food.png", title: "Fast Food" },
  { icon: "antenna.png", title: "Telecom/Tech" },
  { icon: "connection.png", title: "B2B" },
  { icon: "saving.png", title: "Financial" },
  { icon: "low-price.png", title: "Non Profit" },
];

const Industries = () => {
  return (
    <section className="topCurve  ">
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4 className="heading fw-bold text-center text-white fontHeading">
              Industries we serve
            </h4>
          </div>
        </div>
        <div className="space"></div>
        <div className="row">
          {industryData.map((industry, index) => (
            <div key={index} className="col-lg-2 col-6 px-2">
              <div className="itemIndustries border shadow">
                <div className="iconIndustries">
                  <Image
                    width={50}
                    height={50}
                    quality={100}
                    className="w-100 h-auto"
                    src={`/assets/images/icons/${industry.icon}`}
                    alt={industry.title}
                  />
                </div>
                <h4 className="small_heading fontHeading">{industry.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
