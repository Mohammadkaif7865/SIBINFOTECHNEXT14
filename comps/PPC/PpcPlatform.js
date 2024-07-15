// import React from "react";

// const PpcPlatform = () => {
//   return (
//     <section className="blueBg">
//       <div className="containerFull">
//         <h4 className="customHeading text-center text-white">
//           At SIB Infotech we can help you reach your target audience via Major
//           Pay Per Click Platform
//         </h4>
//         <div className="customRow ppcRow mob_row">
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img src="assets/images/icons/google-ads.svg" alt="Google Ads" />
//             </div>
//             <h3>Google Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img src="assets/images/icons/bings-ads.png" alt="Bings Ads" />
//             </div>
//             <h3>Bings Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img
//                 src="assets/images/icons/twitter-ads.png"
//                 alt="Twitter Ads"
//               />
//             </div>
//             <h3>Twitter Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img src="assets/images/icons/amazon-ads.png" alt="Amazon Ads" />
//             </div>
//             <h3>Amazon Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img
//                 src="assets/images/icons/linkedin-ads.png"
//                 alt="Linkedin Ads"
//               />
//             </div>
//             <h3>Linkedin Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img
//                 src="assets/images/icons/instagram-ads.svg"
//                 alt="Instagram Ads"
//               />
//             </div>
//             <h3>Instagram Ads</h3>
//           </div>
//           <div className="columnRow">
//             <div className="iconAdd">
//               <img
//                 src="assets/images/icons/facebook-ads.png"
//                 alt="Facebook Ads"
//               />
//             </div>
//             <h3>Facebook Ads</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PpcPlatform;
import React from "react";
import Image from "next/image";

const platforms = [
  { name: "Google Ads", icon: "/assets/images/icons/google-ads.svg" },
  { name: "Bings Ads", icon: "/assets/images/icons/bings-ads.png" },
  { name: "Twitter Ads", icon: "/assets/images/icons/twitter-ads.png" },
  { name: "Amazon Ads", icon: "/assets/images/icons/amazon-ads.png" },
  { name: "Linkedin Ads", icon: "/assets/images/icons/linkedin-ads.png" },
  { name: "Instagram Ads", icon: "/assets/images/icons/instagram-ads.svg" },
  { name: "Facebook Ads", icon: "/assets/images/icons/facebook-ads.png" },
];

const PpcPlatform = () => {
  return (
    <section className="blueBg">
      <div className="containerFull">
        <h4 className="customHeading fontWeight700 text-center text-white">
          At SIB Infotech we can help you reach your target audience via Major
          Pay Per Click Platform
        </h4>
        <div className="customRow ppcRow mob_row">
          {platforms.map((platform, index) => (
            <div className="columnRow" key={index}>
              <div className="iconAdd">
                <Image
                  className=" h-auto w-100 "
                  quality={100}
                  width={200}
                  height={200}
                  src={platform.icon}
                  alt={platform.name}
                />
              </div>
              <h3>{platform.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PpcPlatform;
