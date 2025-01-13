import dynamic from "next/dynamic";
import HeroLinkedinMgt from "./HeroLinkedinMgt";

const AdsMgt = dynamic(() => import("./AdsMgt"), { ssr: false });
const Intro = dynamic(() => import("./Intro"), { ssr: false });
const Strategies = dynamic(() => import("./Strategies"), { ssr: false });
const LinkedInAdvertising = dynamic(() => import("./LinkedInAdvertising"), { ssr: false });


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
