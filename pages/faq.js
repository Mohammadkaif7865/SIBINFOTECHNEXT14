import React, { useState } from "react";

import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const faq = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);

 
  const faqsData = [
    {
      id: "faq1",
      question: "1. What is SEO?",
      answer: ` <div className="accordion-body">
      <p>
        SEO or ‘search engine optimization is the process of
        improving the quality and quantity of website traffic.
        This is achieved by increasing its visibility on
        search engines, improving rankings for unpaid results.
        As a marketing strategy, SEO has long-term benefits
        and provides a high return-on-investment.
      </p>
    </div>`,
    },
    {
      id: "faq2",
      question: " 2. What are your SEO plans?",
      answer: `   <div className="accordion-body">
      <p className="customText">
        SEO is a results-oriented process that requires goal
        strategies to bring good results. We continuously
        strive to provide a complete package of SEO services
        including:
      </p>
      <ul className="listFlexItem">
        <li>Content analysis and optimization</li>
        <li>Website Structure Analysis</li>
        <li>Off-Page SEO and On-Page SEO</li>
        <li>Website code optimization</li>
        <li>Website structure optimization</li>
        <li>Keyword Research</li>
        <li>Local SEO Content Writing and Placement</li>
      </ul>
      <p className="customText">
        <strong>
          SEO Plans are based on customer requirements and
          their objective. Our SEO Packages offered are
          tailored made suitable for all kinds of budgets
        </strong>
      </p>
    </div>`,
    },
    {
      id: "faq3",
      question: "3. How long does it take to see the result?",
      answer: `<p>
      SEO grows over time and the entire SEO process takes
      about 3 to 6 months to see the expected results, with
      a minimum of 2 to 3 months in link building, on-page
      optimization, off-page optimization, content creation,
      and marketing. Is complete. Another fact is that SEO
      results are expected to increase over time, so results
      in 6 months will be slightly lower than in 12 months
    </p>`,
    },
    {
      id: "faq4",
      question: "4. What is the cost of SEO services?",
      answer: `  <p>
      Our SEO services' cost depends on the client's
      requirements. We provide custom SEO packages
      tailor-made to fit as per clients budget for SEO. We
      cover a vast range of services in our SEO packages'
      intending to improve website traffic and bring higher
      ranking on Google search result pages.
    </p>`,
    },
    {
      id: "faq5",
      question: "5. Why do you need SEO service for your website?",
      answer: ` <p>
      SEO services offer visibility to your websites and
      improve SEO ranking gradually over search engines like
      Google, Yahoo, Bing, DuckDuckGo etc. A high ranking
      website would bring more traffic to its website and
      help lead generation for the business.
    </p>`,
    },
    {
      id: "faq6",
      question: "6. Ask for an initial SEO audit of your website?",
      answer: ` <p>
      We offer free SEO audit services as a part of the
      entire SEO package. We have dedicated professionals to
      provide SEO audit reports for your website, unlike
      some SEO companies in India that entirely rely on
      audit tools. We ensure that the audit report is
      developed thoroughly with covering elements like
      keyword research and competitor analysis.
    </p>`,
    },
    {
      id: "faq7",
      question: " 7. How much does SEO Services cost per month?",
      answer: ` <p>
      Our SEO services' cost depends on the client's
      requirements. We provide custom SEO packages
      tailor-made to fit as per client's budget for SEO. We
      cover a vast range of services in our SEO packages'
      intending to improve website traffic and bring higher
      ranking on Google search result pages. SEO packages
      start from around USD 300 per month onwards.
    </p>`,
    },
    {
      id: "faq8",
      question: `8. Is SEO worth it in ${new Date().getFullYear()}?`,
      answer: `<p>
      With years crossing by, the emphasis on SEO is never
      degrading instead it is turning more prominent than
      ever. It is one of the most compelling digital
      marketing strategies that stimulate long-term results.
      In ${new Date().getFullYear()}, SEO continues to be
      significant and savvy marketers should discover their
      ways of managing content marketing alongside other
      traffic channels such as social media management. By
      targeting long-tailed keywords, SEO as inbound
      marketing broadens your brand's reach.
    </p>`,
    },
    {
      id: "faq9",
      question: `9. Why SEO services are so expensive?`,
      answer: `  <div className="accordion-body">
      <p className="customText">
        <strong>
          There are several reasons for SEO being expensive:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>It is a time taking process.</li>
        <li>
          Calls for several resources to build up and maintain
          a campaign.
        </li>
        <li>
          Relies on the expertise of the SEO specialist to
          establish and advance your strategy.
        </li>
      </ul>
    </div>`,
    },
    {
      id: "faq10",
      question: `10. How do you rank first on Google?`,
      answer: `  <p>
      There is no tried and tested method for ranking first
      on Google. However, with the right keywords and SEO
      campaigns, your chances of ranking high can be
      increased. For that, you'll have to create tons of
      optimized content and you're good to go! With the
      right strategies, this will happen much sooner than
      you think.
    </p>`,
    },
    {
      id: "faq11",
      question: `11. How does Google rank SEO?`,
      answer: `  <p>
      Authority and relevancy are the two primary things
      Google looks for when crawling a website. Google will
      produce the results based on algorithms and
      information gathered by the spiders. These web pages
      are placed on the search results page in an order
      reflecting their page.
    </p>`,
    },
    {
      id: "faq12",
      question: `12. How do I choose a company for SEO?`,
      answer: `  <div className="accordion-body">
      <p className="customText">
        For choosing a suitable SEO Company for your brand
        follows these six steps:
      </p>
      <ul>
        <li>
          Ask for examples and case studies of successful SEO
          campaigns.
        </li>
        <li>Think beyond SEO.</li>
        <li>Visit the SEO Company in person.</li>
        <li>
          Understand the risks of low-cost SEO agencies.
        </li>
        <li>Avoid SEO guarantees.</li>
        <li>
          Familiarize yourself with SEO pricing models and
          make an SEO budget.
        </li>
      </ul>
    </div>`,
    },
    {
      id: "faq13",
      question: `13. What are SEO tools?`,
      answer: ` <p>
      SEO tools determine the potential of your webpage for
      high rankings in search engine results. They provide
      keywords and backlinks information as well as insights
      into SEO competition on the Internet.
    </p>`,
    },
    {
      id: "faq14",
      question: `14. Why Hire SEO Company in India?`,
      answer: ` <p>
      Hiring an SEO company in India is a strategic choice
      fueled by a vast pool of skilled professionals focused
      on digital marketing. The cost-effective nature of
      Indian SEO services, coupled with competitive pricing,
      ensures businesses receive optimal value. With a
      proven track record and a diverse talent pool, these
      companies bring innovation and expertise to enhance
      online presence. The ability to navigate evolving
      industry trends and leverage cultural diversity allows
      for nuanced and targeted SEO strategies. Businesses
      can trust in achieving improved search engine
      rankings, driving organic traffic, and ultimately
      experiencing sustained growth by tapping into the
      comprehensive offerings of Indian SEO companies.
    </p>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));

  return (
    <section>
      <div className="containerFull b">
        <h4 className="heading fontHeading">Frequently Asked Questions</h4>
        {/* faq */}

        <div className="b row">
          <div className=" col-lg-6">
            {faqsDataLeft.map((item, i) => {
              return (
                <div className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        setOpen(i);
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open == i ? <TbCircleMinus /> : <TbCirclePlus />}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                      <div  dangerouslySetInnerHTML={{ __html: item.answer }}>

                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" col-lg-6">
            {" "}
            {faqsDataRight.map((item, i) => {
              return (
                <div className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        setOpen2(i);
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open2 == i ? <TbCircleMinus /> : <TbCirclePlus />}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                       <div  dangerouslySetInnerHTML={{ __html: item.answer }}>

                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
