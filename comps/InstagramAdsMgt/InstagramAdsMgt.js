import dynamic from "next/dynamic"; // For dynamic imports
import Banner from "./Banner"; // Static import for Banner

const Analysis = dynamic(() => import("./Analysis"));
const Contact = dynamic(() => import("./Contact"));
const Determination = dynamic(() => import("./Determination"));
const InstagramAdvertising = dynamic(() => import("./InstagramAdvertising"));
const Introduction = dynamic(() => import("./Introduction"));
const KeyPoints = dynamic(() => import("./KeyPoints"));
const LanchAds = dynamic(() => import("./LanchAds"));
const Objective = dynamic(() => import("./Objective"));
const WhySib = dynamic(() => import("./WhySib"));

const InstagramAdsMgt = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <WhySib />
      <Determination />
      <Analysis />
      <Objective />
      <Contact
        heading="  We believe that your success is our success"
        subheading=" Our Instagram experts make sure that your brand gets the
        limelight of a major proportion of the audience. We always
        make certain that your company gets the exposure it needs."
        buttonText=" Speak to our Instagram advertising experts"
        buttonLink="/contact-us"
        isPBeforeH3={false}
      />
      <InstagramAdvertising />
      <KeyPoints />
     <LanchAds />
    </>
  );
};

export default InstagramAdsMgt;
