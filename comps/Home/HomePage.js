import BannerSlider from "./BannerSlider";
import Blog from "./Blog";
import Faq from "./Faq";
import Madeby from "./Madeby";
import Testimonials from "./Testimonials";
// import WhatWeDo from "./WhatWeDo";
import WeStrong from "./WeStrong";
// import WhatWeDo2 from "./WhatWeDo2";
import About2 from "./About2";
import OurClients from "./OurClients";
import WhatWeDo3 from "./WhatWeDo3";
// import PartnerBadges from "./PartnerBadges";
import BrandBuild from "./BrandBuild";
import CaseStudy2 from "./CaseStudy2";
import Conversions from "./Conversions";
import Cta from "./Cta";
import PartnerBadges2 from "./PartnerBadges2";
import Pricing from "./Pricing";
import SIBPower from "./SIBPower";
import WhySIB from "./WhySIB";
// import DeliverGrowth from "./DeliverGrowth";
import Featured from "./Featured";
import Industries2 from "./Industries2";
import OurPeople from "./OurPeople";
import Tools from "./Tools";


const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <About2 />
      {/* <BannerSlider /> */}
      {/* <TrustedSection /> */}
      <WeStrong />
      <WhatWeDo3 />
      
      <Madeby />
      
      <Cta />
      <BrandBuild />
      <WhySIB />
      <Conversions />
      <OurPeople />
      <SIBPower />
  
    
 
      <PartnerBadges2 />
      <CaseStudy2 />
      <OurClients />
      <Testimonials />
      <Featured />
      <div className="toolsHome">
        <Tools />
      </div>
      <Industries2 />
      <Pricing />
      {/* <Map /> */}

      {/* <Counter /> */}
      {/* 
      
      
     
  
     
    
     
  
     
      
      
    
      
    */}

      {/* <Presence/> */}

      {/* <Expertise />
      <DigitalMarketingServices />
      <AboutUs />
      <DigitalMarketingWebAgency />
      <DigitalMarketingAgency />
      <WebsiteDesignServices /> */}

      <Faq />
      <Blog />
    </>
  );
};

export default HomePage;
