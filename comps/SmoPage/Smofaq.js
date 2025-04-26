import React from "react";
import Faq from "../Home/Faq";

// Data
const faqDiscription = `
  We as a full service leading <strong>Social Media Optimization</strong>,
  offer customized story-based
  <br className="d-none d-lg-block" />
  <strong>Social Media Optimization</strong> to build, promote & scale
  your brand so 
  <br className="d-none d-lg-block" />
  it can clearly & easily attract your ideal client
`;

const faqsData = [
  {
    id: "faq15",
    question: "What is Social Media Optimization (SMO)? ",
    answer: `<div className="accordion-body"><p>Social Media Optimization (SMO) is the process of optimizing your social media profiles and content to improve visibility, engagement, and overall reach. It involves strategies such as content creation, scheduling, hashtag usage, and interaction with your audience.  </p></div>`,
  },
  {
    id: "faq16",
    question: "Why do I need Social Media Optimization Services? ",
    answer: `<div className="accordion-body"><p>SMO services help enhance your online presence, increase traffic to your website, boost engagement with followers, and improve brand awareness. With professional SMO, you can reach the right audience and strengthen customer relationships. </p></div>`,
  },
  {
    id: "faq17",
    question: "How does Social Media Optimization impact my business? ",
    answer: `<div className="accordion-body"><p>SMO helps increase brand recognition and trust, drive targeted traffic to your website, and create a loyal community around your brand. It also provides valuable insights into audience behavior, helping you tailor your marketing efforts more effectively. </p></div>`,
  },
  {
    id: "faq18",
    question: "What platforms do you optimize for? ",
    answer: `<div className="accordion-body"><p>We provide SMO services for a wide range of platforms, including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube. We tailor strategies depending on the platform best suited for your business goals. </p></div>`,
  },
  {
    id: "faq19",
    question: " How long does it take to see results from Social Media Optimization? ?",
    answer: `<div className="accordion-body"><p>While results vary depending on the strategy and goals, typically, businesses can start seeing measurable improvements within 3 to 6 months. However, consistent optimization will continue to yield long-term benefits. </p></div>`,
  },
  {
    id: "faq20",
    question: "What is the difference between Social Media Marketing (SMM) and Social Media Optimization (SMO)?",
    answer: `<div className="accordion-body"><p>Social Media Marketing (SMM) refers to paid advertising and promotions on social media platforms, whereas Social Media Optimization (SMO) focuses on organic growth through content optimization, community building, and engagement. </p></div>`,
  },
  {
    id: "faq21",
    question: "Do I need to create content for my social media platforms? ",
    answer: `<div className="accordion-body"><p>While we can help create high-quality content for your social media, it’s also beneficial for you to share authentic, brand-specific content that resonates with your audience. We work closely with clients to craft the best content strategy. </p></div>`,
  },
  {
    id: "faq22",
    question: "How can Social Media Optimization increase my website traffic? ",
    answer: `<div className="accordion-body"><p>How can Social Media Optimization increase my website traffic? </p></div>`,
  },
  {
    id: "faq23",
    question: "What are the benefits of SMO for SEO? ",
    answer: `<div className="accordion-body"><p>SMO can indirectly improve your SEO rankings by driving more traffic to your site, increasing social signals (likes, shares, comments), and enhancing your overall online visibility, which can have a positive impact on search engine rankings. </p></div>`,
  },
  {
    id: "faq24",
    question: "What is the cost of Social Media Optimization Services? ",
    answer: `<div className="accordion-body"><p>The cost of SMO services depends on factors such as the scope of work, number of platforms, and level of strategy required. We offer customized packages to suit different budgets and business goals. </p></div>`,
  },
  {
    id: "faq25",
    question: "What is the difference between SMO and SEO? ",
    answer: `<div className="accordion-body"><p>SEO is for search engines, while SMO enhances your visibility on social media platforms. </p></div>`,
  },
  {
    id: "faq26",
    question: "How soon can I see results",
    answer: `<div className="accordion-body"><p> Some results may appear in 4-6 weeks, but long-term growth is typically visible in 3-6 months. </p></div>`,
  },
  {
    id: "faq27",
    question: "Is content creation included? ",
    answer: `<div className="accordion-body"><p> Yes. We handle everything—from visuals to captions to publishing.</p></div>`,
  },
  {
    id: "faq28",
    question: "How does SMO help my business grow?",
    answer: `<div className="accordion-body"><p> By building brand awareness, trust, and driving high-intent traffic to your website. </p></div>`,
  },
];


const SMofaq = () => {
  return (
    <div className="bg-light ">
    <Faq
      title={"Everything You Need to Know "}
      description={faqDiscription}
      faqsData={faqsData}
    />
    </div>
  );
};

export default SMofaq;
