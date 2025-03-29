import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "1. Does my Business need a Website?",
      answer: `<p>
      Having a website is a cost-effective approach when it
      comes to advertising and reaching out to potential
      customers. Till now, the only way through which small
      businesses reached outside the local area was through
      expensive advertising media. Many companies can't afford
      expensive TV advertising or national magazines. But with
      a website companies can reach out to a vast audience
      throughout the world.
    </p>`,
    },
    {
      id: "faq2",
      question:
        "2.  What are the things that you expect from me to complete the Website Design?",
      answer: ` <div className="accordion-body">
      <p>
        You are completely aware of your services and what your
        customers want or look for. Hence, it all depends on
        what type of website you want. However, some content
        references such as brochures, logos, photographs,
        product prescription business cards will be required for
        the contents to be present on your website.
      </p>
      <p>
        You can elaborate on all your requirements on our
        discovery call before we start working together and the
        package will be decided considering your requirements.
      </p>
      <p>
        <strong>
          Some other stuff we would need for your website is:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>Images of you and your team (optional).</li>
        <li>Images of your Workplace (optional).</li>
        <li>Staff profiles (optional).</li>
        <li>
          Any videos you would like to add to the website.
        </li>
        <li>Login details to your existing website etc.</li>
      </ul>
      <p className="mt-3">
        If some of these are already present on your existing
        website then they will be transferred over to the new
        site.
      </p>
    </div>`,
    },
    {
      id: "faq3",
      question: "3. If I have a Website, will you make changes for me?",
      answer: ` <p>
      Yes, we can redesign or change the content of your
      existing website. It will cost less than building one
      from scratch.
    </p>`,
    },
    {
      id: "faq4",
      question:
        "4. Is there any maintenance required after designing a Website?",
      answer: `  <p>
      With the announcement of new trends for page rankings,
      some slight changes might be required. Also, as your
      business evolves, your websites may require some
      modifications. If there is no change in business from
      time to time the changes will be minimal.
    </p>`,
    },
    {
      id: "faq5",
      question: "5. Can you do rush jobs?",
      answer: `<p>
      The team will try its best to meet the requirements of
      the clients as per the complexity of the project and
      specific delivery dates.
    </p>`,
    },
    {
      id: "faq6",
      question:
        "6. What if I don't want to manage my Website at all? Can you do it all for me?",
      answer: ` <p>
      Yes, we have maintenance packages to suit your needs.
      The packages can range from 1 hour per month to 10 hours
      per month. We can also discuss the package that's right
      for you.
    </p>`,
    },
    {
      id: "faq7",
      question: "7. What does a Website Designing Company do?",
      answer: `   <div className="accordion-body">
      <p>
        A website designing company intends to serve its clients
        with fully functional, professional-looking, and
        mobile-friendly websites providing the best user
        experience.
      </p>
      <p>
        The riveting website designs are a concoction of
        equalization, solidarity, accentuation, intricacy and
        blend of segments. An experienced designer will oversee
        both highs and lows of a design in his brain and after a
        thorough evaluation of all the components incorporate
        them in the website.
      </p>
      <p>
        A website is the virtual representation of your
        business. Having a professional website is no less than
        a triumph for a business. It portrays a lot about you to
        the users for instance the concept behind the business,
        target audience, etc. Visitors will contribute cash for
        services without hesitancy as they know you retain an
        accredited business. Professionalism is a must to be
        illustrated within the business and also on the website.
      </p>
    </div>`,
    },
    {
      id: "faq8",
      question: "8. What does Web Design include?",
      answer: `<p>
        Website designing incorporates within itself multiple
        components that operate collectively to make a website
        look robust. These components are graphic design, user
        experience design, interface design, search engine
        optimization (SEO), and content creation. All these key
        elements are liable for the presentation and functioning
        of the websites on other devices.
      </p>`,
    },
    {
      id: "faq9",
      question: "9. What are Website Design Services?",
      answer: `<p>
      As mentioned in the name itself, website design services
      are meant to create customized websites for all kinds of
      businesses as per their requirements and demands.
      They'll collaborate with your organization, create a
      website that mirrors your brand, giving the users with
      the finest experience and accomplish more conversions in
      turn.
    </p>`,
    },
    {
      id: "faq10",
      question: "10. What are Website Design Services?",
      answer: `<p>
      As mentioned in the name itself, website design services
      are meant to create customized websites for all kinds of
      businesses as per their requirements and demands.
      They'll collaborate with your organization, create a
      website that mirrors your brand, giving the users with
      the finest experience and accomplish more conversions in
      turn.
    </p>`,
    },
    {
      id: "faq11",
      question: "11. Will my Website be Mobile-Friendly?",
      answer: ` <p>
      After the announcement of new core web vitals metrics
      for page rankings, we will make sure that your website
      is fully responsive and works well on all devices. We
      don't charge extra for this as it comes as standard.
    </p>`,
    },
    {
      id: "faq12",
      question:
        "12.Why SIB Infotech is the Best Web Design Company in India for your business? ",
      answer: `<p>
      Since 2005, SIB Infotech is specialized in creating
      dynamic and appealing websites for clients. Our team of
      experts ensures maintaining an effective online presence
      for your business. With technologies being updated
      rapidly, you need a trusted partner that can keep your
      website updated with these changes so that your site and
      the information it provides are never outdated. That's
      why you need a company like SIB Infotech to keep up with
      the trend and attract potential customers.
    </p>`,
    },
    {
      id: "faq13",
      question: "13. How much does a Professional Web Design Services Cost?",
      answer: `<div className="accordion-body">
      <p>
        <strong>The cost of web designing depends on:</strong>
      </p>
      <ul className="listFlexItem">
        <li>Requirements of the clients</li>
        <li>
          Utilization of resources on a particular project
        </li>
        <li>And Time Frame.</li>
      </ul>
    </div>`,
    },
    {
      id: "faq14",
      question: "14. How long does it take to Design a Website?",
      answer: `<div className="accordion-body">
      <p>
        The total time engaged in designing a website depends on
        what you are getting designed.
      </p>
      <p>
        Everything that we make for you is custom with engaging
        trends and relevant content. Please contact our experts
        to know more about time-related queries.
      </p>
    </div>`,
    },
    {
      id: "faq15",
      question: "15. How long does it take to Design a Website?",
      answer: `<div className="accordion-body">
      <p>
        The total time engaged in designing a website depends on
        what you are getting designed.
      </p>
      <p>
        Everything that we make for you is custom with engaging
        trends and relevant content. Please contact our experts
        to know more about time-related queries.
      </p>
    </div>`,
    },
    {
      id: "faq16",
      question:
        "16. I want to revamp my existing Website Design. Can you help?",
      answer: ` <p>
      Yes, we have a separate team that looks after such
      requirements. A professional web designer's expert team
      will be assigned to your website to offer services as
      required. The project update will also be shared.
    </p>`,
    },
    {
      id: "faq17",
      question:
        "17.  What is the difference between Static Web Design and Dynamic Web Design?",
      answer: `    <div className="accordion-body">
      <p>
        Static WebPages are the ones that always look the same
        and their content rarely changes. To make a change you
        need to create the page yourself or get help from a
        designer. The newly created pages and any images must
        then be uploaded to the web servers.
      </p>
      <p>
        However, Dynamic Pages can be changed every time they
        are loaded and the contents can also be changed as per
        your requirements. The dynamic page can be created to
        respond to the user queries and can also reduce ongoing
        maintenance costs if you don't want to change things
        yourself with a page editor. A content management
        utility also needs to be developed to help you manage
        your sites.
      </p>
      <p>
        Many clients have a combination of both dynamic and
        static elements in their sites. For instance, they might
        use dynamic pages for product catalogs where they can
        change information or pictures regularly. "Contact" and
        "About Us" web pages often left as static pages.
      </p>
    </div>`,
    },
    {
      id: "faq18",
      question: "18.What is the cost to create a Website?",
      answer: ` <p>
      When it comes to the cost of a website it may revolve
      around diverse aspects. The cost for launching and
      designing starts from USD 400 onwards depending upon
      scope of work whereas the cost for routine maintenance
      of a website may fluctuate from USD 50 to USD 1500-2000
      per month depending on complexity of websites.
    </p>`,
    },
    {
      id: "faq19",
      question:
        "19. What services are provided by Website Designing Companies?",
      answer: `  <div className="accordion-body">
      <p>
        <strong>
          Website Designing includes some of the essential
          services that are:
        </strong>
      </p>
      <ul className="listFlexItem">
        <li>
          Designing the specific quantity of web pages based on
          the defined budget for web designing services.
        </li>
        <li>On-page SEO with images</li>
        <li>Graphic Designing</li>
        <li>Sitemaps</li>
        <li>DNS Changes</li>
        <li>Video embedding or linking</li>
        <li>Form integrations</li>
        <li>Google and Bing verification</li>
      </ul>
    </div>`,
    },
    {
      id: "faq20",
      question: "20. What are the Types of Web Design?",
      answer: `   <div className="accordion-body">
      <p>
        <strong>Types of Web Design Layouts:</strong>
      </p>
      <p className="mt-3">
        <strong>Static Website Layout:</strong> In this type,
        the web pages involve limited content. Each page is
        created using HTML language and represents the same
        information to all its visitors. These are perceived to
        be the most primitive type of websites that are easiest
        to create. Unlike dynamic websites require web
        programming or database designs whereas static websites
        do not require them.
      </p>
      <p>
        <strong>Dynamic Website Layout:</strong> This type of
        web design is designed with a variety of pieces that
        collectively form a page. These are distinct from static
        sites as they use server technologies, like PHP or
        JavaScript, for web development.
      </p>
      <p>
        <strong>Fixed Width Layout:</strong> Unique feature
        mentioned in the name itself, these websites start with
        a specific size as stipulated by the web designer.
      </p>
      <p>
        The width remains stable regardless of the size of the
        browser window viewing the page. This fixed-width
        control feature provides the control of the look of the
        page to the designer.
      </p>
      <p>
        <strong>Responsive Design Layout:</strong> This is a
        single layout design that is included in all the web
        pages in which the elements get reformatted and resized
        based on the breakpoints. A breakpoint is a specific
        viewport width value (in pixels) that triggers a
        transition in the website layout.
      </p>
      <p>
        <strong>Liquid or Fluid Design Layout:</strong> In this
        type of layout, the webpage resizes as the window size
        is altered. This is possible using percentages instead
        of pixels width for defining areas. The number of
        columns in most of the webpages are one, two or three.
      </p>
      <p>
        <strong>Single Page Design Layout:</strong> In this
        layout, there is only one HTML page containing just the
        exact information that a user needs to make a decision
        and act on it. These layouts are preferred for landing
        pages, portfolios, and event-related websites.
      </p>
    </div> `,
    },
    {
      id: "faq21",
      question: "21. What does Website Design Cost for a Small Business?",
      answer: ` <p>
      The cost of a website depends on the elements of the
      page and the features of the asset. The average cost of
      website designing for small businesses ranges starts
      from US$ 250 onwards. The costs may vary with the
      requirement of any additional features or custom-built
      components.
    </p> `,
    },
    {
      id: "faq22",
      question: "22. What does a Web Design Agency do?",
      answer: `<p>
      Web design agencies have skilled graphic designers who
      work upon the logos, color schemes, branding, and
      overall focus on the appearance of the website. They
      frequently used software like Adobe Photoshop, Figma or
      Adobe XD to curate quality graphic design and web layout
      services.
    </p>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  return (
    <section className="bgDarkGrey">
      <div className="containerFull">
        <h4 className="heading fw-bold text-center fontHeading">
          Website Designing <span className="titleHighlight">FAQ?</span>
        </h4>
        <div className="space d-none d-lg-block"></div>

        <div className="">
         
          <div className="row ">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqsDataLeft.map((items, i) => {
                  return (
                    <Accordion.Item className="rounded overflow-hidden" key={i} eventKey={i}>
                      <Accordion.Header className="fontHeading">{items.question}</Accordion.Header>
                      <Accordion.Body
                        className=""
                        dangerouslySetInnerHTML={{ __html: items.answer }}
                      ></Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqsDataRight.map((items, i) => {
                  return (
                    <Accordion.Item className="rounded overflow-hidden" key={i} eventKey={i}>
                      <Accordion.Header className="fontHeading">{items.question}</Accordion.Header>
                      <Accordion.Body
                        className=""
                        dangerouslySetInnerHTML={{ __html: items.answer }}
                      ></Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Faqs;
