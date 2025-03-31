import React, { use, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { TbCirclePlus, TbCircleMinus } from "react-icons/tb";

const Faq = () => {
  const faqsData = [
    {
      id: "faq1",
      question: "1. What is a White Label Digital Marketing Service?",
      answer: `<p>A white-label digital marketing service allows agencies to outsource marketing solutions under their own brand. We handle the execution while you take full credit, ensuring seamless service delivery without revealing our involvement.</p>`,
    },
    {
      id: "faq2",
      question: "2. Can I set my own pricing?",
      answer: `<p>Yes! We provide competitive wholesale pricing, allowing you to set your own rates and maximize profitability while offering top-tier marketing services to your clients.</p>`,
    },
    {
      id: "faq3",
      question: "3. How do I get started?",
      answer: `<p>Getting started is simple! Contact us, and we’ll discuss your requirements, pricing, and onboarding process to ensure a smooth collaboration.</p>`,
    },
    {
      id: "faq4",
      question: "4. What services do white-label agencies offer? ",
      answer: `<p>Our services include SEO, PPC, Social Media Marketing, Content Creation, Email Marketing, and Web Design & Development—all fully rebranded under your agency’s name.</p>`,
    },
    {
      id: "faq5",
      question: "5. How do we communicate with clients?",
      answer: `<p>You manage client communication while we work behind the scenes. To make things easier, we provide white-label email templates and reports for seamless interactions.</p>`,
    },
    {
      id: "faq6",
      question: "6. Why Outsource Digital Marketing to a White Label Agency? ",
      answer: `<p>

      Outsourcing your digital marketing to a white-label agency allows you to expand your service offerings without the overhead of hiring an in-house team. You gain access to a team of experts on demand, ensuring high-quality execution while only paying for the services you need. 
</p>
     
<p class="mt-3">
With our white-label solutions, you can scale effortlessly, serve more clients, and enhance your portfolio—without being limited by staff or resources. While you focus on client relationships and business growth, we handle the technical work with expertise, efficiency, and seamless branding under your name. 
          </p>`,
    },
    {
      id: "faq7",
      question: "7. How does a white-label digital marketing agency work?",
      answer: `<p>We strategize, execute, and optimize digital marketing campaigns under your brand name. You get high-quality services without the hassle of execution while maintaining full ownership of client relationships.</p>`,
    },
    {
      id: "faq8",
      question: "8. How to choose the right white-label agency? ",
      answer: `<p>Look for experience, service quality, transparency, and proven results. We bring years of expertise, a strong portfolio, and a commitment to your success.</p>`,
    },
    {
      id: "faq9",
      question: "9. What is the cost of white-label marketing? ",
      answer: `<p>Pricing varies based on the services required, project size, and complexity. We offer flexible pricing models, including fixed, hourly, and custom packages.</p>`,
    },
    {
      id: "faq10",
      question: "10. Can I rebrand the services provided as my own?",
      answer: `<p>Absolutely! Our white-label services are designed to be fully rebranded under your agency’s name, allowing you to offer premium digital marketing solutions as your own.</p>`,
    },
    {
      id: "faq11",
      question: "11. How to ensure quality from a white-label partner? ",
      answer: `<p>We provide regular reports, performance analytics, and case studies. Additionally, our proven track record and client testimonials reflect our commitment to delivering exceptional results.</p>`,
    },
    {
      id: "faq12",
      question: "12. How long does it take to see results?",
      answer: `<p>Timelines vary based on the service. While PPC campaigns can show results in weeks, SEO and organic strategies take a few months for sustainable growth. We provide clear timelines and updates.</p>`,
    },
    {
      id: "faq13",
      question: "13. Can a white-label agency handle multiple clients at once?",
      answer: `<p>Yes! We have the capacity to manage multiple clients simultaneously, ensuring seamless execution and high-quality service for all your projects.</p>`,
    },
    {
      id: "faq14",
      question: "14. Why choose SIB Infotech as your white-label partner? ",
      answer: `<p>We bring expertise, scalability, and reliability. With years of experience and a dedicated team, we help you grow your agency without additional overhead.</p>`,
    },
    {
      id: "faq15",
      question: "15. How do your white-label services boost growth? ",
      answer: `<p>We take care of client project execution so you can focus on scaling your business, building client relationships, and expanding your service offerings.</p>`,
    },
    {
      id: "faq16",
      question: "16. How is confidentiality ensured post-project? ",
      answer: `<p>We follow strict data security protocols, IP-restricted access, and NDAs to ensure complete confidentiality and protection of shared information.</p>`,
    },
    {
      id: "faq17",
      question: "17. What communication channels do you use?",
      answer: `<p>We communicate via email, Slack, Skype, Hangouts, or any platform of your choice. We also encourage video calls for better collaboration.</p>`,
    },
    {
      id: "faq18",
      question: "18. Do you sign NDAs?",
      answer: `<p>Yes, we sign NDAs to protect your business and ensure complete confidentiality.</p>`,
    },
    {
      id: "faq19",
      question: "19. Do you provide local time-zone support?",
      answer: `<p>Yes! We offer time-zone support for different regions. Additional charges may apply for dedicated teams working in specific time zones.</p>`,
    },
    {
      id: "faq19",
      question: "20. How do I get started?",
      answer: `<p> 
Getting started is simple! Contact us, and we’ll discuss your requirements, pricing, and onboarding process to ensure a smooth collaboration. </p>`,
    },
  ];

  const faqsDataLeft = faqsData.slice(0, Math.ceil(faqsData.length / 2));
  const faqsDataRight = faqsData.slice(Math.ceil(faqsData.length / 2));
  const [open, setOpen] = useState(null);
  const [open2, setOpen2] = useState(null);

  return (
    <section className="">
      <div className="containerFull ">
        <h4 className="heading  mb-4 fontWeight600 text-center">
          Frequently Asked Questions
        </h4>
        {/* faq */}

        <div className=" row  ">
          <div className=" col-lg-6 pe-lg-4  ">
            {faqsDataLeft.map((item, i) => {
              return (
                <div key={i} className="">
                  <div className="customFaq">
                    <h4
                      className=" "
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
                      className=" "
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
