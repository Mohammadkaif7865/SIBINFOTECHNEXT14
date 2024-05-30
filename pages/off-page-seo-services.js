import { Helmet } from "react-helmet-async";
// import {Link} from 'react-router-dom';
import OffPageSeo from "@/comps/OffPageSEO/OffPageSeo";

export default function OffPageSeoServices() {
  return (
    <div>
      <Helmet>
        <title>
          Off-Page SEO Optimization Services, Get Quality Backlinks to your
          Website
        </title>
        <meta
          name="keywords"
          content="Off Page SEO, Off-Site Optimization Services, Off Page Optimization, Off Page SEO Optimization, Off Page SEO Analysis, spam free back links, quality backlinks, build backlinks"
        />
        <meta
          name="description"
          content="SIB Infotech is the Top SEO Company in India offers Off-Page SEO Optimization Services which  focusing on building genuine and natural link building to drive organic traffic to your website. Using Our Own Proven methods to get quality backlinks which are 100% genuine and spam free."
        />
        <link
          rel="canonical"
          href="https://www.sibinfotech.com/off-page-seo-services"
        />
      </Helmet>
      <OffPageSeo />
    </div>
  );
}
