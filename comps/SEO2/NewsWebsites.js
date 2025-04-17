// import React from "react";

// const NewsWebsites = () => {
//   return (
//     <section>
//       <div className="containerFull">
//         <h3 className="sub_heading fontWeight500 fontHeading">
//           We can Get Featured you on Top News Websites
//         </h3>
//         <div className="mt-3 row row-cols-2 row-cols-lg-5">
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/abc-news.webp" alt="abc-news" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img
//                 src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/associated-press.webp"
//                 alt="associated-press"
//               />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/buzzfeed.webp" alt="buzzfeed" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/cnn.webp" alt="CNN" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/forbes.webp" alt="forbes" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/fox.webp" alt="fox" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img
//                 src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/google-news.webp"
//                 alt="google-news"
//               />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/huffpost.webp" alt="huffpost" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/ibt.webp" alt="ibt" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/msnbc.webp" alt="MSNBC" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/nbc.webp" alt="nbc" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/pbs.webp" alt="pbs" />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img
//                 src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/the-new-york-times.webp"
//                 alt="The New York Times"
//               />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img
//                 src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/usa-today.webp"
//                 alt="USA Today"
//               />
//             </div>
//           </div>
//           <div className="col px-2 px-lg-3">
//             <div className="newsLogo">
//               <img src="https://visa-project.blr1.cdn.digitaloceanspaces.com/sib/assets/images/news-logo/yahoo.webp" alt="Yahoo" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsWebsites;
import Image from "next/image";
import React from "react";

const NewsWebsites = () => {
  const newsWebsites = [
    { logo: "abc-news.webp", alt: "abc-news" },
    { logo: "associated-press.webp", alt: "associated-press" },
    { logo: "buzzfeed.webp", alt: "buzzfeed" },
    { logo: "cnn.webp", alt: "CNN" },
    { logo: "forbes.webp", alt: "forbes" },
    { logo: "fox.webp", alt: "fox" },
    { logo: "google-news.webp", alt: "google-news" },
    { logo: "huffpost.webp", alt: "huffpost" },
    { logo: "ibt.webp", alt: "ibt" },
    { logo: "msnbc.webp", alt: "MSNBC" },
    { logo: "nbc.webp", alt: "nbc" },
    { logo: "pbs.webp", alt: "pbs" },
    { logo: "the-new-york-times.webp", alt: "The New York Times" },
    { logo: "usa-today.webp", alt: "USA Today" },
    { logo: "yahoo.webp", alt: "Yahoo" },
  ];

  return (
    <section>
      <div className="containerFull">
        <h3 className="sub_heading fontWeight500 fontHeading">
          We can Get Featured you on Top News Websites
        </h3>
        <div className="mt-3 row row-cols-2 row-cols-lg-5">
          {newsWebsites.map((website, index) => (
            <div key={index} className="col px-2 px-lg-3">
              <div className="newsLogo">
                <Image
                  width={200}
                  height={100}
                  quality={100}
                  className=" h-auto object-fit-contain "
                  src={`/assets/images/news-logo/${website.logo}`}
                  alt={website.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsWebsites;
