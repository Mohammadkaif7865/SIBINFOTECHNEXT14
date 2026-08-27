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

const LlmSeoMgt = () => {
  const llmServices = [
    {
      title: `LLM Visibility <br class="d-none d-md-lg "/> Audit`,
      description:
        "We systematically test how ChatGPT, Perplexity, Gemini, and Claude respond to relevant queries about your industry, your competitors, and your brand. We document which competitors are being cited and why, creating a gap analysis that drives strategy.",
      img: "/assets/images/seo/technical-seo-idea-2-FINAL 1.webp",
    },
    {
      title: `Entity Authority <br class="d-none d-md-lg "/> Building`,
      description:
        "LLMs understand the web through entities: named things (people, companies, products, locations) and the relationships between them. We build your brand's entity authority through structured on-site signals and off-site signals including Wikidata, authoritative directory listings, and brand mentions in credible publications.",
      img: "/assets/images/seo/White-Label-Off-Page-SEO-&-Link-Building 1.webp",
    },
    {
      title: `Authoritative Citation <br class="d-none d-md-lg "/> Building`,
      description:
        "The most direct way to influence LLM responses is to be mentioned frequently and positively in the sources LLMs are trained on and retrieve from: industry publications, news sites, authoritative directories, expert roundup articles, and research papers. We execute digital PR and content campaigns to build this citation profile.",
      img: "/assets/images/seo/White-Label-Local-SEO-Services 1.webp",
    },
    {
      title: `AI-Optimised <br class="d-none d-md-lg "/> Content Creation`,
      description:
        "We create comprehensive, authoritative content assets that are structured for LLM retrieval: detailed service descriptions, comparison content, expert guides, and data-rich resources that LLMs prefer to cite.",
      img: "/assets/images/seo/White-Label-SEO-Content-Writing-Services 1.webp",
    },
    {
      title: `LLM Mention <br class="d-none d-md-lg "/> Monitoring`,
      description:
        "We track your brand's appearance in ChatGPT, Perplexity, and Gemini responses for target queries on a monthly basis, reporting on mention frequency, context, and competitive share of AI voice.",
      img: "/assets/images/seo/White-Label-E-Commerce-SEO-Services 1.webp",
    },
  ];

  const keyAdvantages = [
    {
      title: "Google Premier Partner Since 2005",
      description:
        "Among the top 3% of Google Partners in India, with direct access to Google insights and beta features.",
    },
    {
      title: "18+ Years of Expertise",
      description:
        "Proven performance across every major algorithm era, from Panda and Penguin through AI Overviews and generative search.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "Our strategies are stress-tested across industries and markets worldwide.",
    },
    {
      title: "Named Enterprise Clients",
      description:
        "Trusted by Airtel, Finolex, Jindal Steel, and BPCL for their digital growth.",
    },
    {
      title: "Full-Service Team",
      description:
        "Technical SEOs, content specialists, link builders, and strategists working as one integrated unit.",
    },
    {
      title: "Transparent Monthly Reporting",
      description:
        "Keyword rankings, traffic trends, and ROI analysis delivered every month.",
    },
  ];

  const leftBoxContent = {
    headingStart: "Why Brands Choose ",
    headingHighlight: "SIB Infotech for LLM SEO",
    subHeading: "AI Citation & Entity Authority That Get Your Brand Into Answers",
    cardTitle: "Get Cited Where Your Buyers Ask",
    cardDescription:
      "When your prospects ask ChatGPT, Gemini, or Perplexity for a recommendation, your brand should be the answer. SIB Infotech builds the entity authority and citation profile that gets your brand into AI answers.",
    buttonText: "Get Your Free LLM Visibility Audit",
  };

  const rightBoxContent = {
    heading: "The LLM SEO Agency for the AI Answer Era",
    description:
      "Search behaviour is shifting from ten blue links to AI-generated answers. Brands that are represented inside those answers win the fastest-growing segment of high-intent traffic. SIB Infotech combines entity authority building, authoritative citation campaigns, and AI-optimised content to make your brand visible wherever AI answers are generated.",
  };

  const power_data = [
    {
      title: "Google Premier Partner (Top 3% in India)",
      description:
        "Among the top 3% of Google Partners in India with direct access to Google insights, AI Overviews intelligence, and beta features — placing us at the frontier of AI-driven search.",
    },
    {
      title: "18+ Years Across Every Algorithm Era",
      description:
        "From Panda and Penguin through Helpful Content and AI Overviews, SIB Infotech has adapted through every major algorithm era and now leads the shift into LLM and generative engine optimisation.",
    },
    {
      title: "Entity-First Methodology",
      description:
        "Our LLM SEO framework is built around entity authority: consistent structured data, named entity signals, and authoritative mentions that language models use to recognise and represent your brand.",
    },
    {
      title: "850+ Active Clients Across 40+ Countries",
      description:
        "IT, SaaS, e-commerce, healthcare, manufacturing, and finance — our strategies are stress-tested across every industry and market.",
    },
    {
      title: "Dedicated Account Manager — Not a Support Ticket",
      description:
        "A dedicated strategist assigned to your account, reachable on call, WhatsApp, and email with deep knowledge of your AI visibility goals.",
    },
  ];

  const agencyWorkflow = [
    {
      title: "LLM Visibility Audit",
      description: `<p>Systematic testing of ChatGPT, Perplexity, Gemini, and Claude for your target queries, with a competitive gap analysis of who is being cited and why.</p>`,
    },
    {
      title: "Entity Setup",
      description: `<p>Organisation schema, Wikidata profile, consistent NAP across all directories, and structured on-site signals that define your brand entity for language models.</p>`,
    },
    {
      title: "Content Creation",
      description: `<p>Comprehensive, citation-worthy resource pages and comparison content that LLMs prefer to reference in their answers.</p>`,
    },
    {
      title: "Citation Building",
      description: `<p>Digital PR campaign targeting industry publications and authoritative web sources to build a positive, frequent brand mention profile.</p>`,
    },
    {
      title: "Monitoring",
      description: `<p>Monthly LLM mention tracking with share-of-AI-voice reporting across ChatGPT, Perplexity, and Gemini.</p>`,
    },
  ];

  const faqsData = [
    {
      id: "faq1",
      question: "What is LLM SEO?",
      answer: `<p>LLM SEO is the practice of building brand authority and citation presence that causes large language models like ChatGPT, Gemini, and Perplexity to mention and recommend your brand in their responses.</p>`,
    },
    {
      id: "faq2",
      question: "How do you get a brand mentioned in ChatGPT?",
      answer: `<p>Brands appear in ChatGPT responses through a combination of strong entity authority (being consistently represented across authoritative web sources), frequent mentions in high-quality publications that are indexed and used by AI systems, and AI-optimised content that directly answers relevant queries.</p>`,
    },
    {
      id: "faq3",
      question: "How long does LLM SEO take?",
      answer: `<p>Influencing real-time retrieval platforms like Perplexity can show results within 4 to 8 weeks of strong content and citation building. Influencing base LLM training data is a longer-term effort measured in months to years, as model training cycles are infrequent. We focus on retrieval-based LLM SEO for faster results.</p>`,
    },
    {
      id: "faq4",
      question: "Can LLM SEO be measured?",
      answer: `<p>Yes. We track brand mentions in ChatGPT, Perplexity, and Gemini for a defined set of target queries monthly. We report on mention frequency, context quality, and competitive share of AI voice. This is a newer discipline and measurement tools are evolving, but meaningful tracking is possible today.</p>`,
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
                  LLM SEO Services: Get Your Brand Cited by{" "}
                  <span className="text_red fontWeight700">
                    ChatGPT, Gemini, and Perplexity
                  </span>
                </h1>
                <p
                  className="small_heading fontWeight500 mt-2 text-white"
                  style={{ maxWidth: "85%" }}
                >
                  Google Premier Partner | 18+ Years Experience | 850+ Active
                  Clients in 40+ Countries
                </p>
                <p className="mt-2 mt-lg-3 text-white" style={{ maxWidth: "85%" }}>
                  When someone asks ChatGPT "what is the best SEO agency in
                  India?" — does your brand appear? LLM SEO is the discipline of
                  making your brand known and cited by large language models.
                  SIB Infotech builds the entity authority and citation profile
                  that gets your brand into AI answers.
                </p>
                <div className="mt-4">
                  <Link href="/contact-us" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots me-2"></i> Get a Quote
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question me-2"></i> Ask a
                    Question
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Get Your Free LLM Visibility Audit
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    LLM SEO Experts in India
                  </strong>
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"LLM SEO Services"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Get Your Free LLM Visibility Audit
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              LLM SEO Experts in India
            </strong>
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"LLM SEO Services"} />
      </div>

      {/* What Is LLM SEO */}
      <section>
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                What Is{" "}
                <span className="text_red">LLM SEO?</span>
              </h2>
              <p className="customText mt-3">
                LLM SEO (Large Language Model SEO) is the practice of building
                the brand authority, entity presence, and citation profile that
                causes large language models like ChatGPT, Gemini, Perplexity,
                Claude, and Microsoft Copilot to mention and recommend your
                brand in their responses.
              </p>
              <p className="customText mt-3">
                Unlike traditional SEO, which influences how Google's algorithm
                ranks pages in a search index, LLM SEO influences how AI
                language models perceive and represent your brand based on
                patterns in the data they have been trained on and the web
                content they can access in real time.
              </p>
              <p className="customText mt-3">
                LLM SEO works across two mechanisms:
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-3">
                  <strong>Training data influence:</strong> Large language
                  models learn from vast amounts of web content. Brands that
                  appear frequently and positively across authoritative web
                  sources are more likely to be referenced by LLMs from their
                  base training.
                </li>
                <li className="mb-3">
                  <strong>Real-time search integration:</strong> Platforms like
                  Perplexity AI, ChatGPT with browsing, and Google's Gemini
                  search integration actively retrieve current web content to
                  answer queries. Optimising for these retrievals is more
                  similar to traditional SEO but with AI-specific content
                  structure requirements.
                </li>
              </ul>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard">
                <h3 className="small_heading fontWeight600 mb-3">
                  Why LLM Visibility Matters
                </h3>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <strong>AI is the new search:</strong> Users increasingly
                    ask AI tools before they ever open a search engine.
                  </li>
                  <li className="mb-3">
                    <strong>Answers replace links:</strong> If your brand is not
                    named in AI answers, it is invisible to this audience.
                  </li>
                  <li className="mb-3">
                    <strong>Citations build trust:</strong> A recommendation
                    inside an AI answer primes users to trust your brand.
                  </li>
                  <li className="mb-3">
                    <strong>First-mover advantage:</strong> LLM citation is a
                    new discipline — early movers lock in visibility now.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LLM SEO Matters */}
      <section className="bgGrey2">
        <div className="containerFull">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-9">
              <h2 className="heading fontWeight600">
                Why <span className="text_red">LLM SEO Matters</span> in 2026
              </h2>
              <p className="customText mt-3">
                AI assistants are becoming the starting point for brand
                research, product comparisons, and vendor selection. Brands not
                represented in LLM responses are invisible to a growing segment
                of high-value buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our LLM SEO Services */}
      <Solution
        hideImages
        heading={"Our LLM SEO Services"}
        discription={
          "SIB Infotech delivers a complete LLM SEO framework covering audit, entity authority, citations, content, and monitoring."
        }
        data={llmServices}
      />

      {/* Why Choose SIB Infotech */}
      <WhySIB
        keyAdvantages={keyAdvantages}
        leftBoxContent={leftBoxContent}
        rightBoxContent={rightBoxContent}
      />

      <SIBPower
        title="Why Choose SIB Infotech for LLM SEO"
        description_right="Choosing an LLM SEO partner is a strategic decision. Here is why 850+ businesses across 40+ countries trust SIB Infotech."
        data={power_data}
      />

      {/* Our Process */}
      <Partnership
        agencyWorkflow={agencyWorkflow}
        title={"Our LLM SEO Process"}
        rightDiscription={
          "Every engagement follows a structured, results-focused methodology designed to build durable AI visibility."
        }
      />

      {/* Certifications & Badges */}
      <PartnerBadges />

      {/* Final CTA */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2 className="heading fontWeight600">
                Get Your Free{" "}
                <span className="text_red">LLM Visibility Audit</span>
              </h2>
              <p className="customText mt-3">
                Find out how ChatGPT, Gemini, Perplexity, and Claude currently
                answer questions about your brand, your industry, and your
                competitors — and exactly what it takes to get your brand cited.
              </p>
              <div className="mt-4">
                <Link href="/contact-us" className="btnThemeRed me-3">
                  <i className="fa-solid fa-comment-dots me-2"></i> Get My Free
                  LLM Visibility Audit
                </Link>
                <Link
                  href="tel:+912226057575"
                  className="btnThemewhiteBorder"
                >
                  <i className="fa-solid fa-phone me-2"></i> +91 22 2605 7575
                </Link>
              </div>
              <p className="customText mt-4 mb-0">
                Contact SIB Infotech:{" "}
                <a href="mailto:info@sibinfotech.com" className="text_red">
                  info@sibinfotech.com
                </a>
              </p>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="customCard bg-white">
                <h4 className="small_heading fontWeight700 text-center mb-3">
                  Request Your Free LLM Visibility Audit
                </h4>
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
        title={"Frequently Asked Questions about LLM SEO"}
        description={
          "Everything you need to know about getting your brand cited by ChatGPT, Gemini, and Perplexity."
        }
        faqsData={faqsData}
      />

      {/* Related Services */}
      <RelatedServices
        subtitle={
          "Explore more AI-era SEO and digital growth services from SIB Infotech."
        }
        links={[
          {
            title: "SEO Services in Mumbai",
            description:
              "Full-service search engine optimization for Mumbai brands, from technical fixes to content and links.",
            href: "/search-engine-optimization-seo-services",
          },
          {
            title: "Technical SEO Services",
            href: "/technical-seo-services",
            description:
              "Fix crawlability, indexation, Core Web Vitals, and schema so AI engines can read your content.",
          },
          {
            title: "Enterprise SEO Services",
            href: "/enterprise-seo-services",
            description:
              "Scalable AI-era SEO programmes for large websites and multi-location brands.",
          },
          {
            title: "Google Penalty Recovery",
            href: "/google-penalty-recovery",
            description:
              "Recover rankings from manual actions and algorithm penalties with a proven remediation process.",
          },
          {
            title: "Conversion Rate Optimization Services",
            href: "/conversion-rate-optimization",
            description:
              "Turn AI-referred traffic into customers with data-driven CRO programmes.",
          },
          {
            title: "SEO Packages and Pricing",
            href: "/seo-packages",
            description:
              "Transparent monthly SEO plans starting at Rs. 25,000 per month for businesses of every size.",
          },
          {
            title: "SEO Audit Services",
            href: "/seo-audit-services",
            description:
              "Get a complete SEO health check with a prioritised roadmap of fixes ranked by business impact.",
          },
        ]}
      />
    </div>
  );
};

export default LlmSeoMgt;
