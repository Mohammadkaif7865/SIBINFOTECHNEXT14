import dynamic from "next/dynamic"; // Dynamic imports for the rest
import Banner from "./Banner"; // Static import for Banner

const Introduction = dynamic(() => import("./Introduction"), { ssr: false });
const PpcPlatform = dynamic(() => import("./PpcPlatform"), { ssr: false });
const PpcCampaign = dynamic(() => import("./PpcCampaign"), { ssr: false });
const BenefitsPPC = dynamic(() => import("./BenefitsPPC"), { ssr: false });


const Ppc = () => {
  return (
    <>
      <Banner />
      <Introduction />
      <PpcPlatform />
      <PpcCampaign />
      <BenefitsPPC />
    </>
  );
};

export default Ppc;
