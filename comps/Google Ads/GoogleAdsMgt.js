import Link from "next/link";
import HeroGoogleAds from "./HeroGoogleAds"; 
import dynamic from "next/dynamic"; 

const AdCampaigns = dynamic(() => import("./AdCampaigns"));
const AdsCompany = dynamic(() => import("./AdsCompany"));
const AdWords = dynamic(() => import("./AdWords"));
const Contact = dynamic(() => import("./Contact"));
const EffectiveAds = dynamic(() => import("./EffectiveAds"));
const HighlyEfficient = dynamic(() => import("./HighlyEfficient"));
const WhyChoose = dynamic(() => import("./WhyChoose"));

const GoogleAdsMgt = () => {
  return (
    <>
      <HeroGoogleAds />
     
      <AdsCompany />

      
      <WhyChoose />
   
      <AdWords />
      <Contact
        heading="Talk To The Best Google Ads Consultant For Google AdWords Marketing Services"
        subheading="To Reach Your Best Prospects And Maximum ROI"
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
    
      <AdCampaigns />
      <Contact
        heading="FREE Consultation to get it started."
        subheading="Our team of Google Ads specialists and PPC experts are ready
        to provide you with a"
        buttonText="Speak to our Consultant"
        buttonLink="/contact-us"
        isPBeforeH3={true}
      />
     
      <EffectiveAds />
     
      <HighlyEfficient/>
      <section className="blueBg2">
        <div className="containerFull">
          <div className="callAction">
            <h4 className="customLineHeight2 fontHeading">
              Are you ready to partner with #1 Google AdWords &amp;
            </h4>
            <h3 className="customLineHeight">
              PPC Management Company in India for ultimate Google advertising
              services and solutions?
            </h3>
            <Link href="/contact-us">Speak to our Google Ads experts</Link>
          </div>
          <svg
            id="pattner"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="#528af9"
              fill-opacity="1"
            ></path>{" "}
          </svg>
        </div>
      </section>
    </>
  );
};

export default GoogleAdsMgt;
