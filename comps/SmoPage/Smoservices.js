import { CustomLayout } from "@/comps/CustomLayout";
import Seo from "@/comps/seo-template/Seo";
import Partnership from "@/comps//WhiteLabel/Partnership";
import "aos/dist/aos.css";

export default function SearchEngineOptimizationServices() {
  const agencyWorkflow = [
    {
      title: "Initial Assessment & Audit ",
      description: `
        <ul class="ourapproach_ul">
          <li>Platform Selection </li>
          <li>Identify Opportunities </li>
          <li>Social Audit + Recommendations </li>
          <li>Competitor analysis  </li>
          
        </ul>
      `,
    },
    {
      title: "Strategy Development ",
      description: `
        <ul class="ourapproach_ul">
          <li>Social Profile Account Setup </li>
          <li>Content Calendar Creation </li>
          <li>Hashtags Management </li>
          <li>Target Audience Analysis </li>
         
          
        </ul>
      `,
    },
    {
      title: "Engagement & Growth ",
      description: `
        <ul class="ourapproach_ul">
          <li>Design Appeal Visuals  </li>
          <li>Social Post Scheduling  </li>
          <li>Boosting / Group sharing   </li>
          <li>Follower Engagement </li>
        </ul>
      `,
    },
    {
      title: "Monitoring & Reporting ",
      description: `
        <ul class="ourapproach_ul">
          <li>Account Monitoring </li>
          <li>Likes, Comments / Engagement Monitoring </li>
          <li>Enhances Consistency </li>
          <li>Feedback and Adaptation </li>
        </ul>
      `,
    },
  ];

  return (
    <Partnership
      batchtitle="Our Approach"
      agencyWorkflow={agencyWorkflow}
      title="Complete SMO Process"
      subtitle="Explained Step-by-Step to Rank you on Top"
      rightTitle="How Does SMO Work?"
      rightDiscription="Social Media Optimization (SMO) works by using social media platforms to increase awareness of a brand, product, or service.
It involves creating and sharing high-quality, engaging content—like posts, videos, infographics, and blogs—to encourage audience interaction and sharing.
By optimizing profiles, using the right hashtags, participating in discussions, and running campaigns, businesses can build a strong online presence, drive traffic to their websites, and improve brand credibility.
Ultimately, SMO helps in reaching a broader audience organically and builds a loyal community around the brand.

"
    />
  );
}
