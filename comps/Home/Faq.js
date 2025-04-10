import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faq = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "What are the different types of SEO Services we offer?",
      answer: ` <div className="accordion-body faqHomeSpace">
      <h4 classname="small_heading fontWeight700">There are six primary types of SEO</h4><p><strong>Technical SEO: </strong> This ensures that a search engine can crawl, explore and read your website with no issues. This requires setting up a robot.txt file, creating an XML sitemap, and fixing crawl issues. Website speed and mobile responsiveness are also key factors in technical SEO.</p>
    </div>`,
    },
    {
      id: "faq2",
      question: "What makes SIB Infotech a Top-Rated SEO Agency?",
      answer: `   <div className="accordion-body">
      <p className="customText">SIB Infotech is a Top SEO Company in India offering unmatched SEO services at an economical cost. We are savvy in the art of Search Engine Optimisation (SEO) from years of practice and can meet your Internet Marketing and SEO objectives within time and with our cost-effective approaches. Our SEO Services in India is tailored to meet client needs. You can choose from several SEO Packages depending upon your requirements or contact us for a custom quote.
      </p>
    </div>`,
    },
    {
      id: "faq3",
      question: "Why SEO is important?",
      answer: `<p>The majority spend most of their time on SERPs searching for some of their inquires. They are most likely to click on one of the leading 5 suggestions on the search engine results page. Apart from this, there are numerous reasons every business needs to invest in SEO. We have discussed some reasons below: SEO helps businesses connect with users actively seeking them. These users that visit your website through Google search results are the most valuable kind of website visitors since they have a high intent to purchase from you.</p>
      <ol><li>SEO aids increase in the quantity of relevant traffic.</li><li>Organic SEO builds trust and credibility in your brand.</li><li>SEO Services are a lot less expensive than paid advertising.</li><li>SEO is low maintenance i.e. once you achieve organic ranking for your target keywords it's simple to manage them and pull in consistent traffic every month.</li><li>SEO Marketing, if done right, delivers a high ROI compared to all diverse forms of Digital Marketing.</li></ol>`,
    },
    {
      id: "faq4",
      question: "Does Digital Marketing increase sales?",
      answer: `  <p>Yes, online sales can be doubled with the proper Digital Marketing programs. From the right Digital Marketing strategies, we mean Paid Advertising, Content Marketing, Branding, Website Optimization, and Local SEO.</p>`,
    },
    {
      id: "faq5",
      question: "Can you help to recover Websites from Google Penalties?",
      answer: ` <p>Recovering from Google Penalties is a long and laborious process. However, we have acquired an approach to analyze and overcome the numerous penalties Google may commit to a website. We adopt the freshest information while retaining the brand messaging in the content.</p>`,
    },
    {
      id: "faq6",
      question: "Ask for an initial SEO audit of your website?",
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
      question: "How much does SEO Services cost per month?",
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
      question: `Is SEO worth it in ${new Date().getFullYear()}?`,
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
      question: `Why SEO services are so expensive?`,
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
      question: `How do you rank first on Google?`,
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
      question: `How does Google rank SEO?`,
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
      question: `How do I choose a company for SEO?`,
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
      question: `What are SEO tools?`,
      answer: ` <p>
      SEO tools determine the potential of your webpage for
      high rankings in search engine results. They provide
      keywords and backlinks information as well as insights
      into SEO competition on the Internet.
    </p>`,
    },
    {
      id: "faq14",
      question: `Why Hire SEO Company in India?`,
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
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section>
      <div className="containerFull ">
        <h4 className="large_heading2 fontHeading2 text-center text_red fontWeight300">
          Frequently <span className="fontWeight600">Asked Questions</span>
        </h4>
        <p className="mt-4 text-center title">
          We as a full service leading <strong>digital marketing firm</strong>,
          offers customized story-based
          <br className="d-none d-lg-block" />
          <strong>digital marketing services</strong> to build, promote & scale
          your brand so <br className="d-none d-lg-block" />
          it can clearly & easily attract your ideal clients.
        </p>
        {/* faq */}

        <div className="row  mt-lg-5 mt-4">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open !== i) {
                          setOpen(i);
                        } else {
                          setOpen(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="mt-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" col-lg-6 ps-lg-4">
            {" "}
            {faqsDataRight.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <h4
                      className=" fontHeading"
                      onClick={() => {
                        if (open2 !== i) {
                          setOpen2(i);
                        } else {
                          setOpen2(null);
                        }
                      }}
                    >
                      {item.question}{" "}
                      <span>
                        {" "}
                        {open2 == i ? (
                          <i className="bi bi-dash-circle"></i>
                        ) : (
                          <i className="bi bi-plus-circle"></i>
                        )}
                      </span>
                    </h4>

                    <div
                      className={`customFaq_answer_main ${
                        open2 == i ? "answer-row-1" : "answer-row-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="m-3"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        ></div>
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

export default Faq;
