import dynamic from "next/dynamic";
import HeroLinkedinMgt from "./HeroLinkedinMgt";

const AdsMgt = dynamic(() => import("./AdsMgt"));
const Intro = dynamic(() => import("./Intro"));
const Strategies = dynamic(() => import("./Strategies"));
const LinkedInAdvertising = dynamic(() => import("./LinkedInAdvertising"));

const LinkedinAdsPage = () => {
  return (
    <>
      <HeroLinkedinMgt />

      <Intro />

      <AdsMgt />

      <Strategies />
      
      <LinkedInAdvertising />
  
    </>
  );
};

export default LinkedinAdsPage;
