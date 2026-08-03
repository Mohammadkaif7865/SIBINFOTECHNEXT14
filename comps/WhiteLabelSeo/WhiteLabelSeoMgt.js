import React from "react";
import Link from "next/link";
import BannerForm from "@/comps/BannerForm";
import Breadcrumb from "@/comps/BreadCrumb";
import Solution from "@/comps/WhiteLabel/Solution";
import WhySIB from "@/comps/Home/WhySIB";
import SIBPower from "@/comps/Home/SIBPower";
import Partnership from "@/comps/WhiteLabel/Partnership";
import PartnerBadges from "@/comps/Home/PartnerBadges2";
import OurClients from "@/comps/Home/OurClients";
import Testimonials from "@/comps/Home/Testimonials";
import Faq from "@/comps/Home/Faq";
import RelatedServices from "@/comps/RelatedServices";

const WhiteLabelSeoMgt = () => {
  const seoServices = [
    {
      title: `Full-Service <br class="d-none d-md-lg "/> SEO Delivery`,
      description:
        "The complete SEO lifecycle under your brand: technical audits, keyword research, on-page optimisation, content creation, link building, schema markup, and monthly reporting. Every deliverable is ready to send directly to your client.",
      img: "/assets/images/white-lable/White-Label-SEO-Services.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> SEO Reports`,
      description:
        "Monthly reports fully branded with your agency logo, client name, and branding. Coverage includes keyword ranking movements, organic traffic trends, technical health scores, link acquisition, and content performance.",
      img: "/assets/images/white-lable/White-label-link-building.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Link Building`,
      description:
        "Genuine editorial backlinks from authoritative, industry-relevant domains. White-hat and Google-compliant only. Monthly link reports detail each placement with domain authority, anchor text, and target page.",
      img: "/assets/images/white-lable/White-Label-PPC-Services.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Content Creation`,
      description:
        "Blog posts, service pages, landing pages, and resource content produced to your specifications. Keyword-optimised, EEAT-compliant, and original — every piece passes Copyscape.",
      img: "/assets/images/white-lable/White-Label-Social-Media-Marketing.jpg",
    },
    {
      title: `White Label <br class="d-none d-md-lg "/> Technical SEO`,
      description:
        "Full technical SEO audits covering Core Web Vitals, crawlability, indexation, schema markup, site architecture, and mobile optimisation — delivered in client-ready audit reports formatted under your brand.",
      img: "/assets/images/white-lable/White-Label-Facebook-ads.jpg",
    },
    {
      title: `Dedicated <br class="d-none d-md-lg "/> Account Management`,
      description:
        "A dedicated account manager serves as your point of contact for all client campaigns, understanding your agency's standards and communication style to ensure consistency across all deliverables.",
      img: "/assets/images/white-lable/White-Label-Google-ads.jpg",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Agency",
      description: "Among the top 3% of Google Partners globally, giving your agency credibility beyond the white label arrangement.",
    },
    {
      title: "18+ Years of SEO Experience",
      description: "Delivered SEO across every industry vertical and market, from local businesses to multinational enterprises.",
    },
    {
      title: "NDA & Confidentiality Guarantee",
      description: "NDA agreements signed with all agency partners. Your client relationships and business are completely protected.",
    },
    {
      title: "Scalable Delivery Capacity",
      description: "Whether you need SEO for 5 clients or 50, our team scales to match your pipeline without compromising quality.",
    },
    {
      title: "No Client Poaching, Ever",
      description: "A strict no-direct-contact policy with your clients. Your relationships are yours — period.",
    },
    {
      title: "Transparent Pricing",
      description: "Clear, structured reseller pricing with no hidden costs and margins built in for your agency.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Agencies Choose ",
    headingHighlight: "SIB Infotech",
    subHeading: "As Their White Label SEO Partner",
    cardTitle: "Scale Agency SEO Revenue Without Building a Team",
    cardDescription:
      "Deliver enterprise-grade SEO under your brand with NDA-protected, fully managed fulfillment. Grow your agency's revenue without growing your headcount.",
    buttonText: "Become A White Label Partner",
  };

  const rightBoxContent = {
    heading: "White Label SEO Services for Agencies That Demand Results",
    description:
      "SIB Infotech is a Google Premier Partner SEO agency with 18+ years of expertise and 850+ active clients. Our white label SEO program lets agencies and digital marketing consultants deliver enterprise-grade SEO under their own brand, without building an in-house team. NDA-protected. Fully managed. Transparent reporting.",
  };

  const power_data = [
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Earned through certified performance, verified ad spend management, and consistent client results — placing SIB Infotech in the top 3% of all Google Partners in India.",
    },
    {
      title: "18+ Years of Search Engine Optimization Expertise",
      description:
        "From keyword-based optimization to AI Overviews and GEO in 2026 — SIB Infotech has adapted through every major Google algorithm update, for local businesses and multinationals alike.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "Our methodology is proven at scale across IT, SaaS, real estate, healthcare, manufacturing, e-commerce, education, and every other vertical.",
    },
    {
      title: "Strict NDA & Confidentiality Protocol",
      description:
        "We sign NDA agreements with all agency partners, never contact your clients directly, and brief every team member on complete confidentiality.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated account manager who understands your agency's standards and communication style, reachable on call, WhatsApp, and email.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "Onboarding",
      description: `<p>You complete a partner brief. We sign the NDA. We set up your branded reporting templates.</p>`,
    },
    {
      title: "Client Briefing",
      description: `<p>You share client website, goals, competitors, and target keywords. We conduct a full audit.</p>`,
    },
    {
      title: "Strategy Sign-Off",
      description: `<p>We prepare a 90-day SEO strategy. You review and approve before we begin.</p>`,
    },
    {
      title: "Execution",
      description: `<p>Our team executes the strategy on schedule. You receive weekly progress updates.</p>`,
    },
    {
      title: "Reporting",
      description: `<p>Monthly branded reports are delivered to you before your client meeting date.</p>`,
    },
    {
      title: "Growth",
      description: `<p>As your client base grows, we scale your delivery capacity. No recruitment required.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq-wl-1",
      question: "How does white label SEO work for agencies?",
      answer: `<p>You onboard your client, share a brief with us, and we deliver all SEO work under your brand. Deliverables include strategy documents, monthly reports, content, and link building summaries, all branded with your agency logo. Your client never has any contact with SIB Infotech.</p>`,
    },
    {
      id: "faq-wl-2",
      question: "Will my clients find out I use a white label provider?",
      answer: `<p>No. We sign a strict NDA with all agency partners. All deliverables are branded with your agency identity. We have a no-direct-contact policy with your clients. Our team is briefed to maintain complete confidentiality on every partner account.</p>`,
    },
    {
      id: "faq-wl-3",
      question: "What reporting do you provide?",
      answer: `<p>We provide fully branded monthly SEO reports covering keyword ranking movements, organic traffic trends, technical health improvements, link acquisitions, and content performance. Reports are formatted to your specifications and delivered before your client reporting dates.</p>`,
    },
    {
      id: "faq-wl-4",
      question: "Can I resell your services at my own margin?",
      answer: `<p>Yes. Our white label pricing is structured to allow agencies to add their own margin and bill clients at the rates they choose. We do not dictate your pricing model or client billing arrangements.</p>`,
    },
    {
      id: "faq-wl-5",
      question: "Do you offer white label PPC and social media as well?",
      answer: `<p>Yes. In addition to white label SEO, SIB Infotech offers white label Google Ads management, Meta Ads management, and content marketing services. Many agency partners use us as a full-service white label delivery partner across all digital channels.</p>`,
    },
    {
      id: "faq-wl-6",
      question: "What is the minimum commitment to become a white label partner?",
      answer: `<p>There is no long-term minimum commitment to start. We work on a monthly basis, which gives your agency flexibility to scale up or down as your client pipeline changes.</p>`,
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="innerWebDesign whiteLable" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="mt-3 heading fontWeight700 text-white">
                  White Label SEO Services That{" "}
                  <span className="text_red fontWeight700">Demand Results</span>
                </h1>
                <p className="small_heading fontWeight500 mt-2 text-white" style={{ maxWidth: "85%" }}>
                  Google Premier Partner | 18+ Years Experience | Trusted by 100+ Agencies
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  Deliver enterprise-grade SEO under your brand with NDA-protected, fully managed, transparent white label SEO from SIB Infotech.
                </p>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <Link href="/contact-us" className="btnThemeRed">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your Agency Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    White Label SEO Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"White Label SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your Agency Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              White Label SEO Services in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"White Label SEO Services"} />
      </div>

      {/* Introduction */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Grow Your Agency's SEO Revenue{" "}
                <span className="text_red">Without Growing Headcount</span>
              </h2>
              <p className="customText mt-3">
                Growing your agency's SEO revenue without growing your headcount is one of the most powerful business models in digital marketing. Our white label SEO service gives your agency access to a full team of SEO specialists, content writers, link builders, and analysts working under your brand for a fraction of the cost of building in-house capability.
              </p>
              <p className="customText mt-3">
                SIB Infotech has been delivering white label SEO services to agencies across India, the UK, the US, the UAE, and Australia for over a decade. Our reseller programme is built around three principles: performance, confidentiality, and transparency. Your clients never know we exist. Your results speak for themselves.
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why Work With SIB Infotech?
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>Google Premier Partner:</strong> Top 3% agency tier globally.
                  </li>
                  <li className="mb-3">
                    <strong>NDA-Protected:</strong> Your client relationships stay yours.
                  </li>
                  <li className="mb-3">
                    <strong>No Client Poaching:</strong> Strict no-direct-contact policy.
                  </li>
                  <li className="mb-3">
                    <strong>Fully Branded Delivery:</strong> Reports, audits & content under your brand.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is White Label SEO */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                What Is <span className="text_red">White Label SEO?</span>
              </h2>
              <p className="customText mt-3">
                White label SEO is an outsourced SEO service where the work is delivered under your agency's brand. You handle the client relationship and billing. We handle the research, strategy, execution, and reporting. All deliverables are fully branded with your agency's logo and identity.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h4 className="small_heading fontWeight600 text-center mb-4">
                White label SEO is ideal for:
              </h4>
              <div className="row g-3">
                {[
                  "Digital marketing agencies that want to offer SEO without building an in-house team",
                  "Web design and development agencies expanding into digital marketing services",
                  "PR and advertising agencies whose clients are asking for SEO",
                  "Independent consultants and freelancers who need specialist execution support",
                  "Small agencies that have won SEO clients beyond their current delivery capacity",
                ].map((item, i) => (
                  <div className="col-lg-12" key={i}>
                    <div className="customCard bg-white h-100 p-3 d-flex align-items-center">
                      <i className="fa-solid fa-check text_red me-3"></i>
                      <p className="customText mb-0">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Solution
        hideImages
        heading={"Our White Label SEO Services"}
        discription={
          "Everything your agency needs to deliver world-class SEO — executed, reported, and branded as your own."
        }
        data={seoServices}
      />

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Agencies Choose SIB Infotech as Their White Label SEO Partner"
        description_right="Hundreds of white label providers exist. Very few offer Premier Partner expertise, NDA protection, and proven scale. Here is why 100+ agencies trust SIB Infotech."
        data={power_data}
      />

      {/* Process Section */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"How Our White Label SEO Reseller Programme Works"}
        rightDiscription={
          "A simple, structured process that gets you delivering client work under your brand within days — not months."
        }
      />

      {/* Pricing Table */}
      <section className="bgGrey">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Reseller <span className="text_red">Pricing Tiers</span>
              </h2>
              <p className="customText mt-3">
                Our white label SEO packages are designed for agency economics with margin built in:
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <div className="table-responsive rounded">
                <table className="table table-bordered table-striped align-middle mb-0 bg-white">
                  <thead>
                    <tr>
                      <th className="bgRedMenu text-white p-4">Plan</th>
                      <th className="bgRedMenu text-white p-4">Starter</th>
                      <th className="bgRedMenu text-white p-4">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4">Best For</td>
                      <td className="p-4">1-3 client accounts</td>
                      <td className="p-4">4-15 client accounts</td>
                    </tr>
                    <tr>
                      <td className="p-4">Services Included</td>
                      <td className="p-4">On-page, content, monthly report</td>
                      <td className="p-4">Full-service: technical, on-page, link building, content, reporting</td>
                    </tr>
                    <tr>
                      <td className="p-4">Reporting</td>
                      <td className="p-4">Branded monthly report</td>
                      <td className="p-4">Branded monthly report + keyword dashboard</td>
                    </tr>
                    <tr>
                      <td className="p-4">Account Management</td>
                      <td className="p-4">Shared manager</td>
                      <td className="p-4">Dedicated account manager</td>
                    </tr>
                    <tr>
                      <td className="p-4">NDA</td>
                      <td className="p-4">Included</td>
                      <td className="p-4">Included</td>
                    </tr>
                    <tr>
                      <td className="p-4">Pricing</td>
                      <td className="p-4">Contact us for rates</td>
                      <td className="p-4">Contact us for rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="customText mt-3 text-center">
                Enterprise reseller partnerships for agencies with 15+ clients: contact us for custom pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-lg-8">
              <h2 className="heading fontWeight600">
                Industries Our Agency <span className="text_red">Partners Serve</span>
              </h2>
              <p className="customText mt-3">
                Our white label SEO team has delivered results across every vertical our agency partners serve:
              </p>
            </div>
          </div>

          <div className="row g-3">
            {[
              "Healthcare and Medical Practices",
              "Real Estate and Property",
              "E-commerce and Retail",
              "Legal and Professional Services",
              "Education and EdTech",
              "Hospitality and Travel",
              "Manufacturing and B2B",
              "Financial Services and Insurance",
            ].map((ind, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div className="customCard bgGrey2 text-center h-100 p-3">
                  <h4 className="small_heading fontWeight600 text-dark mb-0">{ind}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="dots curve1 bgEffect">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h5 className="fontHeading sub_heading text_blue_light fontWeight800">
                NO LONG-TERM MINIMUM COMMITMENT
              </h5>
              <h4 className="sub_heading fontHeading fontWeight600 mt-3">
                Become a White Label SEO Partner
              </h4>
              <p className="customText mt-3">
                Ready to scale your agency's SEO revenue without the overhead? Complete our partner enquiry form and our team will respond within one business day.
              </p>
              <div className="mt-4">
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  NDA-Protected Partnership
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Fully Branded Client Deliverables
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Scalable Capacity for 5 to 50+ Clients
                </p>
                <p className="mb-1">
                  <i className="fa-solid fa-square-check me-2 text_red"></i>
                  Margins Built In for Your Agency
                </p>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-2">
                <Link href="/contact-us" className="btnThemeRed">
                  <i className="fa-solid fa-comment-dots me-2"></i> Apply to Become a Partner
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your Agency Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    White Label SEO Services in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos & Testimonials */}
      <OurClients />
      <Testimonials />

      {/* FAQs */}
      <Faq
        title={"Frequently Asked Questions about White Label SEO"}
        description={"Everything you need to know about partnering with SIB Infotech as your white label SEO delivery partner."}
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more white label and SEO services from SIB Infotech."
        }
        links={[
          {
            title: "White Label SEO Packages",
            href: "/seo-packages",
            description:
              "Resell SIB Infotech's white label SEO packages under your own brand with competitive pricing.",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "White label technical SEO delivery covering Core Web Vitals, crawlability, and schema.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "SEO Case Studies",
            href: "/case-studies",
            description:
              "Showcase proven white label SEO results to your clients with our case studies.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Recover clients from manual actions and algorithm penalties with a proven remediation process.",
          },
          {
            title: "LLM SEO Services",
            href: "/llm-seo-services",
            description:
              "White label AI and generative engine optimisation for ChatGPT, Gemini, and Perplexity visibility.",
          },
        ]}
      />
    </div>
  );
};

export default WhiteLabelSeoMgt;
