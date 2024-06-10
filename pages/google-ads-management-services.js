import { Helmet } from 'react-helmet-async';
import GoogleAdsMgt from '@/comps/Google Ads/GoogleAdsMgt';

export default function GoogleAdsManagementServices() {
  return (
    <div>
        <Helmet>
            <title>Google Adwords Management Company PPC Ads Management Services Mumbai, India</title>
            <meta name="keywords" content="PPC Management, Pay Per Click Management, PPC Account Management, AdWords Management, Google AdWords Management Services, Google Ads Management, Google Ads Company, Google Ads Service, Ads Management Company, best ppc management company"/>
            <meta name="description" content="SIB Infotech is a Certified partner for Google AdWords management company offering all kinds Google Ads management services for Fast & Effective PPC Management to Help Reduce Your Workload & Improve Results"/>
            {/* <link rel="canonical" href="https://www.sibinfotech.com/google-ads-management-services"/> */}
        </Helmet>
       <GoogleAdsMgt/>
    </div>
  )
}
