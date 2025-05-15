import { CustomLayout } from "@/comps/CustomLayout";
import Seo from "@/comps/seo-template/Seo";
import Partnership from "@/comps//WhiteLabel/Partnership";
import "aos/dist/aos.css";

export default function SearchEngineOptimizationServices() {
  const agencyWorkflow = [
    {
      title: "PPC Strategy & Campaign Planning  ",
      description: `
        <ul class="ourapproach_ul">
          <li>Competitor Analysis & Market Research 
 </li>
          <li>Audience Targeting & Segmentation 
 </li>
          <li>Keyword Research & Selection 
 </li>
          <li>Budget Allocation & Bidding Strategy  </li>
          
        </ul>
      `,
    },
    {
      title: "Ad Creation & Optimization  ",
      description: `
        <ul class="ourapproach_ul">
          <li>High-Quality Ad Copy & Design</li>
          <li>A/B Testing for Better Performance 
 </li>
          <li>Landing Page Optimization 
 </li>
          <li>Ad Extensions & CTA Enhancements </li>
         
          
        </ul>
      `,
    },
    {
      title: "Campaign Execution & Management  ",
      description: `
        <ul class="ourapproach_ul">
          <li>Campaign Setup & Launch 
 </li>
          <li> Continuous Bid Adjustments 
 </li>
          <li>Performance Tracking & Data Analytics 
   </li>
          <li>Geo-Targeting & Device Optimization  </li>
        </ul>
      `,
    },
    {
      title: " Reporting & Performance Monitoring  ",
      description: `
        <ul class="ourapproach_ul">
          <li>Monthly Performance Reports 
</li>
          <li>Conversion Rate Optimization 
</li>
          <li>ROI & Cost Analysis 
 </li>
          <li> Regular Strategy Adjustments  </li>
        </ul>
      `,
    },
  ];

  return (
    <Partnership
      batchtitle="Our Approach"
      agencyWorkflow={agencyWorkflow}
      title="PPC Process Key to PPC Success."
    />
  );
}
