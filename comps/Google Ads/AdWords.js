// import React from "react";

// const AdWords = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <div className="row">
//           <div className="col-lg-6">
//             <img
//               className="image-full imgAnimation"
//               src="assets/images/google-ads-management-company-in-delhi.svg"
//               alt="Google-Ads-Management-Company-In-India"
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2 className="customHeading customLineHeight">
//               Get The Leads With Certified{" "}
//               <span className="text_red">
//                 Google AdWords Service Provider India
//               </span>
//             </h2>
//             <p className="customText">
//               Attracting quality traffic to your website is not an easy task and
//               calls for experts to deal with the intricate webpage advertising
//               algorithms. Google algorithms are designed to reward high-quality
//               websites with organic rankings, this is where we help you to
//               achieve the mandatory guidelines to reach the organic advertising
//               spaces of Google Ads.
//             </p>
//             <p className="customText">
//               Although PPC is an easier way to take control of your appearance
//               on the SERPs. The Pay-Per-click ads spread your services to the
//               vast majority of the audience who are searching for products and
//               services that your business could fulfil.
//             </p>
//             <p className="customText">
//               Millions of websites use Google PPC because it being a powerful
//               and cost-effective way to increase brand awareness and drive
//               traffic, overall boosting sales. SIB Infotech provides{" "}
//               <Link href="/pay-per-click-ppc-management-services">
//                 PPC management services
//               </Link>{" "}
//               that helps your business to get more than desired from its
//               effective online advertising campaigns along with smart and
//               customized recommendations as well as optimization for the
//               campaigns regularly, such as
//             </p>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-3">
//             <ul className="instagram-list">
//               <li className="customText">
//                 We manage Millions of Ads spent every year.
//               </li>
//               <li className="customText">
//                 Ecommerce Ads Experts with over 16+ years experience as a
//                 leading eCommerce agency.
//               </li>
//               <li className="customText">
//                 Lead generation &amp; branding campaigns Expertise
//               </li>
//               <li className="customText">Proven Formula</li>
//             </ul>
//           </div>
//           <div className="col-lg-3">
//             <ul className="instagram-list">
//               <li className="customText">ROI Driven</li>
//               <li className="customText">100% Satisfaction</li>
//               <li className="customText">No Contracts/ No Hidden Fees</li>
//               <li className="customText">Affordable Google Ads Agency</li>
//             </ul>
//           </div>
//           <div className="col-lg-3">
//             <ul className="instagram-list">
//               <li className="customText">Monthly AdWords Reports</li>
//               <li className="customText">Improving your click-through rates</li>
//               <li className="customText">Adjusting PPC bids</li>
//               <li className="customText">Pausing floundering keywords</li>
//             </ul>
//           </div>
//           <div className="col-lg-3">
//             <ul className="instagram-list">
//               <li className="customText">Ad optimization</li>
//               <li className="customText">Optimization of your landing pages</li>
//               <li className="customText">
//                 Place your ads where your audience can find you
//               </li>
//               <li className="customText">
//                 Drive conversions (leads, purchases, goal completions)
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdWords;
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AdWords = () => {
  const adListData = [
    "We manage Millions of Ads spent every year.",
    "Ecommerce Ads Experts with over 16+ years experience as a leading eCommerce agency.",
    "Lead generation & branding campaigns Expertise",
    "Proven Formula",
    "ROI Driven",
    "100% Satisfaction",
    "No Contracts/ No Hidden Fees",
    "Affordable Google Ads Agency",
    "Monthly AdWords Reports",
    "Improving your click-through rates",
    "Adjusting PPC bids",
    "Pausing floundering keywords",
    "Ad optimization",
    "Optimization of your landing pages",
    "Place your ads where your audience can find you",
    "Drive conversions (leads, purchases, goal completions)",
  ];

  // Function to group list items into columns
  const groupIntoColumns = (data, columns) => {
    const columnSize = Math.ceil(data.length / columns);
    return Array.from({ length: columns }, (_, index) =>
      data.slice(index * columnSize, (index + 1) * columnSize)
    );
  };

  // Number of columns
  const numColumns = 4;

  // Group list items into columns
  const columns = groupIntoColumns(adListData, numColumns);

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-6">
            <Image
              className="image-full imgAnimation"
              src="/assets/images/google-ads-management-company-in-delhi.svg"
              alt="Google-Ads-Management-Company-In-India"
              width={600}
              height={400}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="customHeading customLineHeight">
              Get The Leads With Certified{" "}
              <span className="text_red">
                Google AdWords Service Provider India
              </span>
            </h2>
            <p className="customText">
              Attracting quality traffic to your website is not an easy task and
              calls for experts to deal with the intricate webpage advertising
              algorithms. Google algorithms are designed to reward high-quality
              websites with organic rankings, this is where we help you to
              achieve the mandatory guidelines to reach the organic advertising
              spaces of Google Ads.
            </p>
            <p className="customText">
              Although PPC is an easier way to take control of your appearance
              on the SERPs. The Pay-Per-click ads spread your services to the
              vast majority of the audience who are searching for products and
              services that your business could fulfil.
            </p>
            <p className="customText">
              Millions of websites use Google PPC because it being a powerful
              and cost-effective way to increase brand awareness and drive
              traffic, overall boosting sales. SIB Infotech provides{" "}
              <Link href="/pay-per-click-ppc-management-services">
                PPC management services
              </Link>{" "}
              that helps your business to get more than desired from its
              effective online advertising campaigns along with smart and
              customized recommendations as well as optimization for the
              campaigns regularly, such as
            </p>
          </div>
        </div>
        <div className="row">
          {columns.map((column, columnIndex) => (
            <div className="col-lg-3" key={columnIndex}>
              <ul className="instagram-list">
                {column.map((item, itemIndex) => (
                  <li className="customText" key={itemIndex}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdWords;

