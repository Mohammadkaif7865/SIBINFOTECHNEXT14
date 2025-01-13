import dynamic from "next/dynamic"; // For dynamic imports
import Banner from "./Banner"; // Static import for Banner

const Analysis = dynamic(() => import("./Analysis"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });
const Determination = dynamic(() => import("./Determination"), { ssr: false });
const InstagramAdvertising = dynamic(() => import("./InstagramAdvertising"), { ssr: false });
const Introduction = dynamic(() => import("./Introduction"), { ssr: false });
const KeyPoints = dynamic(() => import("./KeyPoints"), { ssr: false });
const LanchAds = dynamic(() => import("./LanchAds"), { ssr: false });
const Objective = dynamic(() => import("./Objective"), { ssr: false });
const WhySib = dynamic(() => import("./WhySib"), { ssr: false });


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
