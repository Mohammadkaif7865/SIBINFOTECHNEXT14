
import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "1. What is Digital Marketing?",
      answer: `<p>
                Also known as online marketing, digital marketing
                communicates messages through digital channels accessed
                through electronic devices, including phones, computers
                and tablets.
              </p>
              <p className="mt-2">
                Digital marketing and traditional marketing, such as
                print ads and direct mail, share the same ultimate goal:
                generating product awareness and influencing purchasing
                decisions to drive sales. The main difference between
                traditional and digital marketing is that digital
                marketing uses internet-connected technologies to
                communicate and engage with targeted audiences.
              </p>
              <p className="mt-2">
                The launch of the World Wide Web in 1989 set the stage
                for the emergence of digital marketing. The
                proliferation of business websites, advancements in
                email technologies and the introduction of wildly
                popular social channels have sparked meteoric growth in
                digital marketing. Online marketing is now a key
                component in most businesses’ marketing plans primarily
                because of the widespread use of digital technologies
                but also because it can deliver outstanding results.
              </p>`,
    },
    {
      id: "faq2",
      question:
        "2. What are the Key performance indicators (KPIs) and metrics in digital marketing?",
      answer: ` <p className="customText">
      When it comes to digital marketing, there are a range of
      metrics you can measure, including:
    </p>
    <ul className="listFlexItem">
      <li>
        <strong>Website traffic:</strong> The number of users
        who visit your website.
      </li>
      <li>
        <strong>Traffic source:</strong> Where your website
        traffic comes from, like search engines, social media,
        or paid ads.
      </li>
      <li>
        <strong>Pageviews:</strong> The number of times users
        viewed your page.
      </li>
      <li>
        <strong>Bounce rate:</strong> The percentage of
        sessions where a user left your website and did not
        interact with your page or visit another page on your
        website.
      </li>
      <li>
        <strong>Time on page:</strong> The amount of time
        users spend on your page.
      </li>
      <li>
        <strong>Click-through rate (CTR):</strong> The
        percentage of users who saw and clicked on your
        website, page, or ad.
      </li>
      <li>
        <strong>Conversion rate:</strong> The percentage of
        users who completed your desired action, like making a
        purchase.
      </li>
      <li>
        <strong>Open rate:</strong> The percentage of users
        who received and opened your email.
      </li>
      <li>
        <strong>Follows:</strong> The number of users who
        follow your page or account.
      </li>
      <li>
        <strong>Share:</strong> The number of times your post
        was shared by users.
      </li>
      <li>
        <strong>ROI:</strong> The total revenue driven by your
        digital marketing strategy after any costs.
      </li>
    </ul>`,
    },
    {
      id: "faq3",
      question: "3. What does a digital marketing agency do?",
      answer: ` <p>
      A digital marketing agency will cover your business’s
      digital marketing needs by implementing and managing
      innovative strategies to market your products and
      services online.
    </p>
    <p className="mt-2">
      A full-service digital marketing agency (like SIB
      INFOTECH) can manage your social media accounts,
      redesign your website, optimize your web pages and
      content for search engines, and more.
    </p>
    <p className="mt-2">
      Meanwhile, boutique agencies specialize in one or two
      digital marketing strategies. They may also specialize
      in specific industries, like food and beverage
      manufacturing.
    </p>`,
    },
    {
      id: "faq4",
      question:
        "4. How is digital marketing different from traditional marketing?",
      answer: `  <p>
                              A traditional marketing campaign, for example, may use
                              billboards, print ads, and mailers, while a digital
                              marketing campaign may use social media, blog posts, and
                              email to promote a business and its offerings.
                            </p>
                            <p className="mt-2">
                              In recent years, the line between “traditional
                              marketing” and “digital marketing” has begun to blur as
                              even traditional channels like billboards, TV ads, and
                              direct mail have developed a digital component to them.
                            </p>`,
    },
    {
      id: "faq5",
      question: "5. How Much Will Digital Marketing Cost My Business?",
      answer: ` <p>
      The simple answer is that there is a digital marketing
      strategy for every budget. The flexibility of digital
      marketing strategies yields benefits for just about
      every size of business, from small to large. With such a
      wide range of methods and strategies, it is not possible
      to provide a one-size-fits-all price tag for digital
      marketing.
    </p>
    <p className="mt-2">
      Instead, it is helpful to examine the digital marketing
      spend for different levels of business, as small
      companies will spend less than larger ones. For example:
    </p>
    <p className="mt-2">
      <strong>Basic Digital Marketing —</strong> Startups and
      small businesses do not generally have a large budget
      available for digital marketing. These businesses focus
      on low-cost methods, typically leveraging websites,
      blogs and social media to drive revenue at a low price
      point. The cost for basic digital marketing can be
      several hundred dollars per month.{" "}
    </p>
    <p className="mt-2">
      <strong>Intermediate Digital Marketing — </strong>{" "}
      Medium-sized businesses tend to have established revenue
      streams and the capability to spend more on digital
      marketing. This is where SEO, SEM, PPC and email
      marketing start to become prevalent. The cost for
      intermediate digital marketing can be several thousand
      dollars per month.
    </p>
    <p className="mt-2">
      <strong>Advanced Digital Marketing — </strong> Large or
      enterprise businesses will use digital marketing in a
      comprehensive and often global manner. These businesses
      tend to have developed strategies across most digital
      marketing channels. These businesses often spend
      substantial resources developing a digital marketing
      strategy across many available channels. The cost for
      advanced digital marketing can be tens of thousands of
      dollars per month.
    </p>
    <p className="mt-2">
      As demonstrated above, the cost of digital marketing
      varies greatly based on business size, revenue and
      goals. Smaller companies will often start with a basic
      strategy and develop intermediate or advanced methods
      down the road. Ultimately, it is possible for just about
      every business to create and implement a digital
      marketing strategy that meets their needs and budget.
    </p>`,
    },
    {
      id: "faq6",
      question: "6. How can my business use digital marketing?",
      answer: ` <p>
      Now that you know digital marketing’s definition, you
      might wonder how your business can take advantage of
      digital marketing’s many benefits.
    </p>
    <p className="mt-2">
      If you’re curious about how your company can use digital
      marketing, here are some examples:
    </p>
    <ul className="listFlexItem">
      <li>
        Build brand awareness with a social media ad campaign
        on Facebook
      </li>
      <li>
        Increase qualified website traffic with a content
        marketing strategy
      </li>
      <li>
        Generate purchases and leads with a PPC ad campaign
      </li>
      <li>
        Improve website conversion rates with conversion rate
        optimization (CRO) tests
      </li>
      <li>
        Grow qualified website traffic, search result
        visibility, and sales with an SEO strategy
      </li>
      <li>
        Target competitor locations and qualified leads with
        geofencing advertising
      </li>
      <li>
        Convert high-value leads with a dedicated
        account-based marketing plan
      </li>
      <li>
        Encourage customer loyalty and repeat purchases with
        an email marketing campaign
      </li>
      <li>
        Increase time on page and conversion rates by
        improving your site’s page speed
      </li>
      <li>
        Expand reach with marketing strategies on Amazon,
        Walmart Marketplace, and Target+
      </li>
      <li>These are just 10 digital marketing ideas.</li>
    </ul>
    <p className="mt-2">
      Whether you’re in the business-to-business (B2B) or
      business-to-consumer (B2C) market, you can find creative
      ways to reach your audience through online channels. The
      customization and versatility of online marketing
      techniques make them useful for every kind of company.
      Here at sib infotech, we’re both a B2B digital marketing
      agency and a B2C digital marketing agency!
    </p>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));

  return (
    <section className="faqsBg">
      <div className="containerFull">
        <h3 className="sub_heading fontWeight500 text-white fontHeading">
          Do you have questions about working with Digital Marketing Agency in
          India? <br className="d-none d-lg-block" /> We’ve got your answers.
        </h3>
        <div className="row mt-4">
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0" >
              {faqsDataLeft.map((items, i) => {
                return (
                  <Accordion.Item className="rounded" key={i} eventKey={i}>
                    <Accordion.Header>{items.question}</Accordion.Header>
                    <Accordion.Body
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: items.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0" >
              {faqsDataRight.map((items, i) => {
                return (
                  <Accordion.Item className="rounded" key={i} eventKey={i}>
                    <Accordion.Header>{items.question}</Accordion.Header>
                    <Accordion.Body
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: items.answer }}
                    ></Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
