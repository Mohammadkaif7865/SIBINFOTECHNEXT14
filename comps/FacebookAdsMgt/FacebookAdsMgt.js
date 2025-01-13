import Banner from "./Banner";
import dynamic from "next/dynamic"; 
const AdsBenefit = dynamic(() => import("./AdsBenefit"), { ssr: false });
const AdsType = dynamic(() => import("./AdsType"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });
const EngagingAds = dynamic(() => import("./EngagingAds"), { ssr: false });
const Estimate = dynamic(() => import("./Estimate"), { ssr: false });
const HowWorks = dynamic(() => import("./HowWorks"), { ssr: false });
const Launchcampaign = dynamic(() => import("./Launchcampaign"), { ssr: false });
const TargetAudience = dynamic(() => import("./TargetAudience"), { ssr: false });
const WhyNeed = dynamic(() => import("./WhyNeed"), { ssr: false });


const FacebookAdsMgt = () => {
  return (
    <>
      <Banner />
      <WhyNeed />
      <Contact
        heading="Our experts make sure that your brand gets the limelight."
        subheading="of a major proportion of the audience."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
      <HowWorks />
      <Contact
        heading="We believe your success is our success."
        subheading=" We always make certain that your company gets the exposure it
        needs."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
      <AdsBenefit />
      <TargetAudience />
      <Contact
        heading="We believe your success is our success."
        subheading=" We always make certain that your company gets the exposure it
        needs."
        buttonText="Speak to Our Experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
    <EngagingAds />
      <Estimate />
      <AdsType />
      <Launchcampaign />
    </>
  );
};

export default FacebookAdsMgt;
