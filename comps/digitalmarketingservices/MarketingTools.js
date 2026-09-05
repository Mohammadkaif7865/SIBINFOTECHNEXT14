import React from "react";
import Image from "next/image";

const MarketingTools = () => {
 
  const tools = [
    { src: "/assets/images/google-analytics.webp", alt: "Google Analytics", url: "https://analytics.google.com" },
    { src: "/assets/images/google-adsense.webp", alt: "Google Adsense", url: "https://adsense.google.com" },
    { src: "/assets/images/meta-business.webp", alt: "Meta Business", url: "https://business.facebook.com" },
    { src: "/assets/images/mailchimp.webp", alt: "Mail Chimp", url: "https://mailchimp.com" },
    { src: "/assets/images/hubspot.webp", alt: "Hubspot", url: "https://www.hubspot.com" },
    { src: "/assets/images/semrush.webp", alt: "Semrush", url: "https://www.semrush.com" },
    { src: "/assets/images/canva.webp", alt: "Canva", url: "https://www.canva.com" },
    { src: "/assets/images/ahrefs.webp", alt: "Ahrefs", url: "https://ahrefs.com" },
    { src: "/assets/images/wordpress.webp", alt: "WordPress", url: "https://wordpress.org" },
    { src: "/assets/images/hootsuite.webp", alt: "Hootsuite", url: "https://www.hootsuite.com" },
    { src: "/assets/images/zoom.webp", alt: "Zoom", url: "https://zoom.us" },
    { src: "/assets/images/shopify.webp", alt: "Shopify", url: "https://www.shopify.com" },
  ];

  return (
    <section>
      <div className="containerFull">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="sub_heading fontWeight500 fontHeading">
              Some of the Best Digital Marketing Tools
            </h3>
          </div>
        </div>
        <div className="row mt-lg-3">
        
          {tools.map((tool, index) => (
            <div key={index} className="col-lg-2 col-6 col-sm-3 position-relative">
              <div className="toolsLogo">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="d-flex align-items-center justify-content-center w-100 h-100"
                  title={`Visit ${tool.alt}`}
                >
                  <Image className="h-auto w-100 h-50" src={tool.src} alt={tool.alt} quality={100} width={180} height={48} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingTools;
