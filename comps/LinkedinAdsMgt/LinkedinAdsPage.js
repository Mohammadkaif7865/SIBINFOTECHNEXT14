import Link from "next/link";
import AdsMgt from "./AdsMgt";
import HeroLinkedinMgt from "./HeroLinkedinMgt";
import Intro from "./Intro";
import Strategies from "./Strategies ";
import LinkedInAdvertising from "./LinkedInAdvertising";

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
