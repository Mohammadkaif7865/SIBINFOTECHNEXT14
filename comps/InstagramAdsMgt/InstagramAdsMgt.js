import Analysis from "./Analysis";
import Banner from "./Banner";
import Contact from "./Contact";
import Determination from "./Determination";
import InstagramAdvertising from "./InstagramAdvertising";
import Introduction from "./Introduction";
import KeyPoints from "./KeyPoints";
import LanchAds from "./LanchAds";
import Objective from "./Objective";
import WhySib from "./WhySib";

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
