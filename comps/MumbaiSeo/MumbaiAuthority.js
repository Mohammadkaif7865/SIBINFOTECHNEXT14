import Link from "next/link";
import React from "react";

/**
 * Depth sections for /seo-company-mumbai.
 *
 * Purpose: the Mumbai SERP for "seo company in mumbai" is roughly half
 * listicles (Clutch, DesignRush, Infidigit, FruitBowl, Justwords). Those pages
 * win the research half of the intent. This component answers that same
 * research intent on our own commercial URL, so one page can serve both.
 *
 * Also closes exact-phrase heading coverage for the "best" / "top" / "expert"
 * keyword variants, which previously appeared only in body copy.
 */
const MumbaiAuthority = () => {
  const checklist = [
    {
      t: "Verify the credentials, do not take them on trust",
      d: "Google Partner and Premier Partner status is publicly verifiable on Google's own partner directory. Premier Partner is capped at the top 3% of agencies per country and is re-earned annually on client performance. Ask for the listing, not a badge image on a website — badges are trivially copied.",
    },
    {
      t: "Ask for Mumbai case studies with revenue, not ranking screenshots",
      d: "A screenshot of a #1 ranking proves nothing about whether it made money. Ask what the keyword's monthly search volume was, what the traffic did, and what happened to enquiries or revenue. An agency that has genuinely delivered in this city will have those numbers ready.",
    },
    {
      t: "Find out who actually does the work",
      d: "Many Mumbai agencies sell you a senior strategist and then hand the account to a junior executive managing thirty other clients. Ask who your day-to-day contact is, how many accounts they carry, and whether you can call them directly. Get the answer in writing.",
    },
    {
      t: "Make them explain their link building in detail",
      d: "This is where most SEO campaigns quietly go wrong. If an agency will not tell you exactly where links come from, assume private blog networks or paid link farms. Those produce a short ranking spike followed by a manual action that can take a year to recover from.",
    },
    {
      t: "Insist on reporting you can actually read",
      d: "A monthly report should show rankings, organic traffic, enquiries generated and revenue attributed — not a dump of 400 keyword positions. If you cannot tell from the report whether the money is working, the report is designed to hide that.",
    },
    {
      t: "Walk away from guaranteed #1 rankings",
      d: "Nobody controls Google's algorithm, and any agency guaranteeing a specific position either has inside knowledge they do not have, or is planning to rank you for keywords nobody searches. Guarantees on process and reporting cadence are reasonable. Guarantees on position are not.",
    },
    {
      t: "Check whether they optimise for AI search",
      d: "A growing share of buyer research now happens in ChatGPT, Gemini, Perplexity and Google's AI Overviews, which cite sources differently from classic rankings. An agency still selling 2019-era SEO is optimising for a shrinking slice of how people actually search.",
    },
  ];

  const team = [
    {
      role: "SEO Strategist — your lead SEO expert in Mumbai",
      d: "Owns your account end to end. Builds the keyword and content roadmap from your actual margins and sales cycle, not from a generic template. This is the person you call, and they know your business.",
    },
    {
      role: "Technical SEO Specialist",
      d: "Handles crawlability, indexation, site architecture, Core Web Vitals, structured data and migrations. On most Mumbai websites this is where the fastest gains hide, because technical debt is quietly capping everything else.",
    },
    {
      role: "Content and Digital PR Team",
      d: "Writers and outreach specialists who produce the pages that earn rankings and the relationships that earn links. Every piece is briefed against a specific query and a specific stage of your buyer's journey.",
    },
    {
      role: "Analytics and Reporting Lead",
      d: "Sets up GA4, Search Console, call tracking and conversion attribution so you can see which keywords produce enquiries and which merely produce traffic. Builds the monthly report and walks you through it.",
    },
  ];

  const standards = [
    {
      t: "A search engine optimization company in Mumbai must map local intent",
      d: "Someone searching \"SEO company near me\" in Lower Parel, someone searching \"best SEO agency in Mumbai\" from a laptop, and someone searching \"enterprise SEO India\" are three different buyers. We map keywords to intent and buying stage rather than chasing volume.",
    },
    {
      t: "Competitor gap analysis against who actually ranks",
      d: "We analyse the sites currently holding page one for your keywords in Mumbai — their content depth, link velocity, and technical setup — and build a plan to close the specific gaps, rather than running a generic checklist.",
    },
    {
      t: "Content built to be cited, not just to rank",
      d: "Pages are structured so both Google and AI answer engines can extract and attribute them: clear question-led headings, direct answers, verifiable data, and schema markup that describes what the page actually is.",
    },
    {
      t: "Authority earned, never bought",
      d: "Digital PR, industry publications, genuine local Mumbai coverage and expert commentary. Slower than buying links, and the only method that survives a core update.",
    },
    {
      t: "Compounding, not campaign-shaped",
      d: "Paid ads stop the day you stop paying. Search engine optimization services in Mumbai should build an asset that keeps producing — which is why we measure on trajectory over quarters, not rankings in week three.",
    },
  ];

  return (
    <>
      {/* ---- Buyer guide: owns the research half of this SERP ---- */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                How to Choose the{" "}
                <span className="text_red fontWeight700">
                  Best SEO Company in Mumbai
                </span>
              </h2>
              <p className="mt-3">
                Mumbai has hundreds of agencies calling themselves the best SEO
                company in Mumbai, and the directories ranking them rarely
                explain their criteria. Below is the checklist we would use
                ourselves — it applies whether you end up hiring us, another top
                SEO agency in Mumbai, or building an in-house team. If an agency
                cannot answer these seven questions clearly, that is your answer.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {checklist.map((c, i) => (
              <div key={i} className="col-lg-6 mb-4">
                <div className="p-4 h-100 border rounded-3">
                  <h3 className="small_heading fontWeight700">
                    {i + 1}. {c.t}
                  </h3>
                  <p className="mt-2 mb-0">{c.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 mb-0">
            Want to see how we score against that list? Take the same seven
            questions to any of the shortlists of top SEO companies in Mumbai
            you will find online, or{" "}
            <Link href="#contact" className="text_red fontWeight600">
              book a free SEO audit
            </Link>{" "}
            and judge us on the findings rather than the sales pitch.
          </p>
        </div>
      </section>

      {/* ---- Team / expert coverage ---- */}
      <section className="pt-5 pb-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                Meet the{" "}
                <span className="text_red fontWeight700">
                  SEO Experts in Mumbai
                </span>{" "}
                Behind Your Campaign
              </h2>
              <p className="mt-3">
                When you hire an SEO expert in Mumbai at SIB Infotech you are not
                buying one freelancer&apos;s spare hours. You get a four-person
                pod assigned to your account, drawn from a team that has worked
                on Mumbai search since 2005. Every role below is filled by a specific
                person you can meet, at our Malad West office or yours.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {team.map((m, i) => (
              <div key={i} className="col-lg-6 mb-4">
                <div className="p-4 h-100 border rounded-3 bg-white">
                  <h3 className="small_heading fontWeight700">{m.role}</h3>
                  <p className="mt-2 mb-0">{m.d}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 mb-0">
            Need specialists rather than a full campaign? We also offer{" "}
            <Link href="/technical-seo-services">technical SEO</Link>,{" "}
            <Link href="/on-page-seo-services">on-page SEO</Link>,{" "}
            <Link href="/off-page-seo-services">off-page SEO and link building</Link>{" "}
            and <Link href="/seo-audit-services">standalone SEO audits</Link> as
            individual engagements.
          </p>
        </div>
      </section>

      {/* ---- Standards / quality bar ---- */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                What Sets the{" "}
                <span className="text_red fontWeight700">
                  Best SEO Services in Mumbai
                </span>{" "}
                Apart
              </h2>
              <p className="mt-3">
                Almost every SEO services company in Mumbai offers the same list
                of deliverables: keyword research, on-page fixes, content, links,
                reporting. The deliverables are not the difference. How the work
                is decided, sequenced and measured is. These are the standards we
                hold ourselves to as a search engine optimization company in
                Mumbai.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {standards.map((s, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="p-4 h-100 border rounded-3">
                  <h3 className="small_heading fontWeight700">{s.t}</h3>
                  <p className="mt-2 mb-0">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MumbaiAuthority;
