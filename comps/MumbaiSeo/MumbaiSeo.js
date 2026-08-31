import Link from "next/link";
import React from "react";

/**
 * Mumbai geo-relevance block for /seo-company-mumbai.
 * Exists to give the flagship SEO page the local-intent depth that every page
 * currently ranking for "seo company in mumbai" already has: named localities,
 * transparent INR pricing, and a local proof section.
 */
const MumbaiSeo = () => {
  const areas = [
    {
      zone: "Western Suburbs",
      places:
        "Andheri East, Andheri West, Bandra, Santacruz, Vile Parle, Jogeshwari, Goregaon, Malad, Kandivali, Borivali, Dahisar",
    },
    {
      zone: "Business Districts",
      places:
        "Bandra Kurla Complex (BKC), Lower Parel, Worli, Nariman Point, Fort, Ballard Estate, Churchgate",
    },
    {
      zone: "Central Mumbai",
      places:
        "Dadar, Parel, Sion, Matunga, Wadala, Chembur, Kurla, Ghatkopar, Powai, Vikhroli",
    },
    {
      zone: "Navi Mumbai & Thane",
      places:
        "Vashi, Belapur, Kharghar, Nerul, Airoli, Panvel, Thane West, Mulund, Bhandup",
    },
  ];

  const plans = [
    {
      name: "Starter SEO",
      price: "Rs. 25,000",
      usd: "approx. $250 per month",
      best: "Local businesses, clinics, single-location stores",
      points: [
        "Up to 15 target keywords",
        "Google Business Profile optimization",
        "On-page SEO and technical fixes",
        "2 blog posts per month",
        "Monthly ranking and traffic report",
      ],
    },
    {
      name: "Growth SEO",
      price: "Rs. 60,000",
      usd: "approx. $650 per month",
      best: "Growing D2C, B2B and service brands in Mumbai",
      featured: true,
      points: [
        "Up to 50 target keywords",
        "Full technical SEO and Core Web Vitals",
        "Authority link building and digital PR",
        "6 blog posts per month plus content strategy",
        "AI search (AEO/GEO) optimization",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise SEO",
      price: "Rs. 1,50,000+",
      usd: "approx. $1,750+ per month",
      best: "E-commerce, marketplaces, multi-location enterprises",
      points: [
        "Unlimited keyword scope",
        "Programmatic and e-commerce SEO",
        "International and multilingual SEO",
        "Custom dashboards and attribution",
        "Quarterly strategy workshops",
        "Priority SLA support",
      ],
    },
  ];

  const differentiators = [
    {
      t: "Google Premier Partner since 2005",
      d: "We are in the top 3% of Google partner agencies in India. That status is earned on client performance and retention, not paid for.",
    },
    {
      t: "20+ years operating in the Mumbai market",
      d: "We have watched this city's search landscape change through every core update since 2005, across every major Mumbai industry vertical.",
    },
    {
      t: "A named strategist, not a ticket queue",
      d: "Every Mumbai client gets a dedicated account manager you can call directly, plus in-person reviews at your office whenever you want them.",
    },
    {
      t: "AI search visibility built in",
      d: "We optimize for ChatGPT, Gemini, Perplexity and Google AI Overviews alongside classic rankings, so you stay visible as search behaviour shifts.",
    },
    {
      t: "Transparent reporting and no lock-in",
      d: "Monthly reports show rankings, traffic, leads and revenue attribution. Clients stay because the numbers work, not because a contract traps them.",
    },
    {
      t: "1000+ brands ranked across 40+ countries",
      d: "From Mumbai startups to global enterprises, our playbooks are proven at every scale and at every level of competition.",
    },
  ];

  return (
    <>
      {/* ---------- Areas served ---------- */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                SEO Company in Mumbai &mdash;{" "}
                <span className="text_red fontWeight700">Areas We Serve</span>
              </h2>
              <p className="mt-3">
                SIB Infotech is a search engine optimization company in Mumbai
                that has delivered search engine optimization services in Mumbai
                since 2005. Our office is in Malad West and we
                work with clients across the entire Mumbai Metropolitan Region,
                including in-person strategy sessions anywhere in the city. If
                you are looking for an SEO agency in Mumbai that understands how
                local buyers actually search, here is where we operate.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {areas.map((a, i) => (
              <div key={i} className="col-lg-6 mb-4">
                <div className="p-4 h-100 border rounded-3">
                  <h3 className="small_heading fontWeight700">{a.zone}</h3>
                  <p className="mt-2 mb-0">{a.places}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2">
            Serving a specific neighbourhood?{" "}
            <Link href="/local-seo-services" className="text_red fontWeight600">
              Our local SEO services
            </Link>{" "}
            cover Google Business Profile optimization, local citations and map
            pack rankings for every Mumbai locality listed above. We also run
            dedicated SEO teams in{" "}
            <Link href="/seo-company-delhi">Delhi</Link>,{" "}
            <Link href="/seo-company-bangalore">Bangalore</Link>,{" "}
            <Link href="/seo-company-pune">Pune</Link> and{" "}
            <Link href="/seo-company-hyderabad">Hyderabad</Link>.
          </p>
        </div>
      </section>

      {/* ---------- Transparent pricing ---------- */}
      <section className="pt-5 pb-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                SEO Services Cost in Mumbai &mdash;{" "}
                <span className="text_red fontWeight700">2026 Pricing</span>
              </h2>
              <p className="mt-3">
                Most SEO companies in Mumbai hide their pricing behind a contact
                form. We do not. SEO services in Mumbai generally cost between
                Rs. 25,000 and Rs. 2,50,000 per month depending on how
                competitive your keywords are, how large your website is, and
                how much content and link building the campaign needs. These are
                our actual starting rates, billed monthly with no lock-in
                contract.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {plans.map((p, i) => (
              <div key={i} className="col-lg-4 mb-4">
                <div
                  className={`p-4 h-100 rounded-3 bg-white ${
                    p.featured ? "border border-2 shadow-sm" : "border"
                  }`}
                >
                  <h3 className="small_heading fontWeight700">{p.name}</h3>
                  <p className="mt-2 mb-1">
                    <span className="heading fontWeight700 text_red">
                      {p.price}
                    </span>
                    <span className="ms-2">/ month</span>
                  </p>
                  <p className="mb-2 text-muted">{p.usd}</p>
                  <p className="fontWeight600 mb-2">Best for: {p.best}</p>
                  <ul className="ps-3 mb-0">
                    {p.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 mb-0">
            Not sure which tier fits? Compare full inclusions on our{" "}
            <Link href="/seo-packages" className="text_red fontWeight600">
              SEO packages page
            </Link>
            , or{" "}
            <Link href="#contact" className="text_red fontWeight600">
              request a free SEO audit
            </Link>{" "}
            and we will tell you exactly what your site needs before you spend
            anything.
          </p>
        </div>
      </section>

      {/* ---------- Why choose / local proof ---------- */}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className="heading fontWeight700">
                Why Mumbai Businesses Choose SIB Infotech as the{" "}
                <span className="text_red fontWeight700">
                  Best SEO Agency in Mumbai
                </span>
              </h2>
              <p className="mt-3">
                Mumbai is one of India&apos;s most competitive search markets.
                Real estate, healthcare, finance, education and e-commerce
                brands are all bidding for the same attention, and generic SEO
                does not move the needle. Here is what makes our approach
                different from other SEO service companies in Mumbai.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            {differentiators.map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="p-4 h-100 border rounded-3">
                  <h3 className="small_heading fontWeight700">{item.t}</h3>
                  <p className="mt-2 mb-0">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MumbaiSeo;
