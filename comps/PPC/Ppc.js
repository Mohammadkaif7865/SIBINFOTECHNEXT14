import dynamic from "next/dynamic"; // Dynamic imports for the rest
import Banner from "./Banner"; // Static import for Banner

const BannerForm = dynamic(() => import("../BannerForm"));
const Introduction = dynamic(() => import("./Introduction"));
const PpcPlatform = dynamic(() => import("./PpcPlatform"));
const PpcCampaign = dynamic(() => import("./PpcCampaign"));
const BenefitsPPC = dynamic(() => import("./BenefitsPPC"));

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
