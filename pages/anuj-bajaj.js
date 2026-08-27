import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomLayout } from "@/comps/CustomLayout";
import Breadcrumb from "@/comps/BreadCrumb";
import BreadcrumbSchema from "@/comps/BreadcrumbSchema";
import BannerForm from "@/comps/BannerForm";
import {
  FaAward,
  FaChess,
  FaCompass,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaQuoteLeft,
  FaShieldAlt,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaSearch,
  FaBullhorn,
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";
import { RiDoubleQuotesL, RiTeamLine } from "react-icons/ri";
import { MdTrendingUp, MdOutlineTimeline } from "react-icons/md";

export default function AnujBajajPage() {
  const metaTags = (
    <>
      <title>Anuj Bajaj – Leading SIB Infotech with the Mindset of a Captain | SIB Infotech</title>
      <meta
        name="description"
        content="Discover how Anuj Bajaj leads SIB Infotech with the discipline, strategic patience, and people-first mindset of a cricket captain. Built on consistency, transparency, and trust."
      />
      <meta
        name="keywords"
        content="Anuj Bajaj, Anuj Bajaj SIB Infotech, SIB Infotech Founder, SIB Infotech CEO, Digital Marketing Leadership, Digital Marketing Agency Founder, Captaincy Leadership Mindset"
      />

      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://www.sibinfotech.com/anuj-bajaj" />
      <meta
        property="og:title"
        content="Anuj Bajaj – Leading SIB Infotech with the Mindset of a Captain"
      />
      <meta
        property="og:description"
        content="Discover how Anuj Bajaj leads SIB Infotech with the discipline, strategic patience, and people-first mindset of a cricket captain. Built on consistency, transparency, and trust."
      />
      <meta
        property="og:image"
        content="https://www.sibinfotech.com/assets/images/team/anuj-bajaj-sir.webp"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/anuj-bajaj" />
      <meta
        property="twitter:title"
        content="Anuj Bajaj – Leading SIB Infotech with the Mindset of a Captain"
      />
      <meta
        property="twitter:description"
        content="Discover how Anuj Bajaj leads SIB Infotech with the discipline, strategic patience, and people-first mindset of a cricket captain. Built on consistency, transparency, and trust."
      />
      <meta
        property="twitter:image"
        content="https://www.sibinfotech.com/assets/images/team/anuj-bajaj-sir.webp"
      />

      {/* JSON-LD Person & Profile Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Anuj Bajaj",
              jobTitle: "Founder & CEO / Managing Director",
              worksFor: {
                "@type": "Organization",
                name: "SIB Infotech",
                url: "https://www.sibinfotech.com",
              },
              image: "https://www.sibinfotech.com/assets/images/team/anuj-bajaj-sir.webp",
              url: "https://www.sibinfotech.com/anuj-bajaj",
              description:
                "Anuj Bajaj is the Founder and Leader of SIB Infotech, steering premier digital marketing and technology solutions with a captaincy mindset grounded in consistency, transparency, and human empowerment.",
              sameAs: [
                "https://www.linkedin.com/company/sib-infotech/",
                "https://www.sibinfotech.com/about-us",
              ],
            },
          }),
        }}
      />

      <BreadcrumbSchema
        url="https://www.sibinfotech.com/anuj-bajaj"
        breadcrumbTitle="Anuj Bajaj – Leadership Profile"
      />
    </>
  );

  const leadershipPillars = [
    {
      num: "01",
      title: "Guide",
      subtitle: "Clarity of Purpose",
      desc: "Setting clear direction — objectives, expectations, and the reasoning behind them — so that the team understands not just what needs to happen, but why.",
      icon: <FaCompass className="text_red" />,
    },
    {
      num: "02",
      title: "Trust",
      subtitle: "Autonomous Space",
      desc: "Resisting the temptation to micromanage once direction has been set. A captain who calls every ball himself doesn't build a team — he builds a group waiting for instructions.",
      icon: <FaShieldAlt className="text_red" />,
    },
    {
      num: "03",
      title: "Empower",
      subtitle: "Domain Ownership",
      desc: "Giving specialists the ownership, authority, and resources to make decisions within their domain without having to look over their shoulder.",
      icon: <FaLightbulb className="text_red" />,
    },
    {
      num: "04",
      title: "Review",
      subtitle: "Blameless Retrospective",
      desc: "Coming back to results honestly — examining what worked and what didn't — with objective analysis rather than assigning reflexive blame.",
      icon: <FaEye className="text_red" />,
    },
    {
      num: "05",
      title: "Improve",
      subtitle: "Relentless Evolution",
      desc: "Treating every cycle — every campaign, every quarter — as an opportunity to get sharper, not just repeating what was done before.",
      icon: <MdTrendingUp className="text_red" />,
    },
  ];

  const specialistRoles = [
    {
      role: "SEO Specialists",
      cricketAnalogy: "Opening Batsmen",
      desc: "Built for pressure, technical endurance, and patient foundation. They understand search intent, algorithm signals, and organic structure.",
      icon: <FaSearch />,
    },
    {
      role: "Performance Marketers",
      cricketAnalogy: "Strike Bowlers",
      desc: "Thinking in terms of conversion funnels, ad spend efficiency, precision targeting, and aggressive tactical breakthroughs.",
      icon: <FaChartLine />,
    },
    {
      role: "Designers & UX Creators",
      cricketAnalogy: "Wicketkeepers",
      desc: "Concentration, precision, and transforming abstract concepts into intuitive, visually credible user experiences.",
      icon: <FaPaintBrush />,
    },
    {
      role: "Developers & Engineers",
      cricketAnalogy: "The Middle Order",
      desc: "Solidifying the tech stack, building resilient backend engines, and ensuring flawless operational performance.",
      icon: <FaCode />,
    },
    {
      role: "Content Strategists",
      cricketAnalogy: "All-Rounders",
      desc: "Shaping the authentic brand voice, communicating value propositions, and engaging audiences across touchpoints.",
      icon: <FaBullhorn />,
    },
    {
      role: "Data & BI Analysts",
      cricketAnalogy: "The Strategy Room",
      desc: "Working behind the scenes to ensure every tactical and strategic decision is grounded in empirical reality rather than instinct.",
      icon: <FaDatabase />,
    },
  ];

  return (
    <CustomLayout meta={metaTags}>
      {/* Hero Banner Section */}
      <div className="innerWebDesign anuj_hero_section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 ps-lg-5">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontHeading fontWeight700 text-white">
                  Anuj Bajaj – Leading SIB Infotech with the Mindset of a Captain
                </h1>
                <p className="small_heading mt-3 text-white-50 fontWeight400" style={{ lineHeight: "1.6" }}>
                  How the strategic discipline, calm composure, and patient rhythm of cricket inspire a transformative approach to digital marketing leadership.
                </p>
                <div className="mt-4 d-flex flex-wrap gap-3">
                  <Link href="#leadership-story">
                    <span className="btnThemeRed me-2">
                      <i className="fa-solid fa-book-open me-2"></i> Read the Story
                    </span>
                  </Link>
                  <Link href="/about-us">
                    <span className="btnThemewhiteBorder">
                      <i className="fa-solid fa-users me-2"></i> About SIB Infotech
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block pe-lg-5">
              <div className="bannerForm">
                <h4 className="small_heading fontWeight700">
                  Accelerate Your Business Growth
                </h4>
                <p>
                  with{" "}
                  <strong className="fontWeight600 text_red">
                    India&apos;s Premier Digital Marketing
                  </strong>{" "}
                  Agency
                </p>
                <BannerForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="d-lg-none">
        <Breadcrumb Pagetitle={"Anuj Bajaj – Leadership Story"} />
      </div>
      <div className="col-lg-5 d-block d-lg-none pe-lg-5 my-4">
        <div className="bannerForm">
          <h4 className="small_heading fontWeight700">
            Accelerate Your Business Growth
          </h4>
          <p>
            with{" "}
            <strong className="fontWeight600 text_red">
              India&apos;s Premier Digital Marketing
            </strong>{" "}
            Agency
          </p>
          <BannerForm />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Breadcrumb Pagetitle={"Anuj Bajaj – Leadership Story"} />
      </div>

      {/* Executive Profile Spotlight Section */}
      <section className="anuj_spotlight_section" id="leadership-story">
        <div className="containerFull">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 text-center text-lg-start">
              <div className="anuj_profile_card shadow-lg">
                <div className="anuj_profile_img_wrap">
                  <picture>
                    <source srcSet="/assets/images/team/anuj-bajaj-sir.webp" />
                    <Image
                      src="/assets/images/team/anuj-bajaj-sir.webp"
                      alt="Anuj Bajaj - Founder & Leader, SIB Infotech"
                      width={420}
                      height={480}
                      className="anuj_profile_img"
                      priority
                    />
                  </picture>
                  <div className="anuj_profile_badge">
                    <span className="fw-bold">Founder &amp; Managing Director</span>
                  </div>
                </div>
                <div className="anuj_profile_info p-4">
                  <h2 className="sub_heading fontWeight700 text-dark mb-1">Anuj Bajaj</h2>
                  <p className="text_red fontWeight600 mb-3">Leader &amp; Managing Director, SIB Infotech</p>
                  <hr className="my-2" />
                  <div className="anuj_quick_facts mt-3">
                    <div className="d-flex align-items-center mb-2">
                      <FaAward className="text_red me-2" />
                      <span><strong>Experience:</strong> 18+ Years in Digital Excellence</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FaChess className="text_red me-2" />
                      <span><strong>Philosophy:</strong> Systems &amp; People Over Ego</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaHandshake className="text_red me-2" />
                      <span><strong>Foundation:</strong> Radical Transparency &amp; Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="anuj_intro_text ps-lg-3">
                <div className="section_tag mb-2">
                  <span className="text_red fontWeight600 text-uppercase letter-spacing-1">
                    The Leadership Mindset
                  </span>
                </div>
                <h3 className="customHeading customLineHeight2 mb-4">
                  The Quiet Before the Captain Sets the Field
                </h3>
                <p className="customText mb-3">
                  There is a particular kind of quiet that settles over a cricket ground just before a captain sets his field. The crowd doesn&apos;t always notice it, but the players do. It&apos;s the pause where a hundred small decisions — who bowls the next over, where the fielders stand, how much risk the situation allows — get made in the space of a few seconds, based on years of watching the game closely enough to know what it&apos;s actually telling you.
                </p>
                <p className="customText mb-3">
                  <strong>Anuj Bajaj</strong>, the owner and leader of <strong>SIB Infotech</strong>, has spent a good part of his life around that particular kind of quiet. He is fond of cricket — not in the casual, weekend-viewing sense, but in the way that people who genuinely study a sport end up absorbing its logic until it becomes part of how they think.
                </p>
                <p className="customText mb-4">
                  Ask him about a difficult client situation, a stalled campaign, or a decision about where to invest the team&apos;s energy next quarter, and it isn&apos;t unusual for the conversation to drift, almost without effort, toward the game. Not because he&apos;s reaching for a metaphor to sound clever, but because the two worlds — the cricket field and the digital marketing floor — have started to blur together in his own thinking over time.
                </p>

                <div className="anuj_quote_box p-4 rounded-3 shadow-sm border-start border-4 border-danger">
                  <FaQuoteLeft className="text_red fs-3 mb-2 opacity-50" />
                  <p className="fst-italic fw-medium text-dark mb-0">
                    &ldquo;This is not an article about cricket. It&apos;s an article about leadership, about building something people can rely on, and about the discipline of doing unglamorous work consistently well. Cricket simply happens to be the language Anuj reaches for when he explains why he leads the way he does.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights Row */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="anuj_feature_card h-100 p-4 bg-white rounded shadow-sm text-center">
                <div className="feature_icon mb-3">
                  <FaUsers className="fs-1 text_red" />
                </div>
                <h4 className="small_heading fontWeight700 mb-2">Systems Over Ego</h4>
                <p className="text-muted small">
                  Building an organisation designed to function seamlessly because of its people, not a single decision-maker at the top.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="anuj_feature_card h-100 p-4 bg-white rounded shadow-sm text-center">
                <div className="feature_icon mb-3">
                  <FaChartLine className="fs-1 text_red" />
                </div>
                <h4 className="small_heading fontWeight700 mb-2">Compounding Results</h4>
                <p className="text-muted small">
                  Rejecting fragile overnight spikes in favor of sustained, disciplined optimization that creates lasting enterprise value.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="anuj_feature_card h-100 p-4 bg-white rounded shadow-sm text-center">
                <div className="feature_icon mb-3">
                  <FaShieldAlt className="fs-1 text_red" />
                </div>
                <h4 className="small_heading fontWeight700 mb-2">Radical Transparency</h4>
                <p className="text-muted small">
                  Delivering unvarnished truths and actionable insights to clients and team members alike, safeguarding long-term trust.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="anuj_feature_card h-100 p-4 bg-white rounded shadow-sm text-center">
                <div className="feature_icon mb-3">
                  <FaChess className="fs-1 text_red" />
                </div>
                <h4 className="small_heading fontWeight700 mb-2">Strategic Patience</h4>
                <p className="text-muted small">
                  Reading market conditions accurately, letting bad balls go, and seizing the right moment to execute high-impact campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: More Than a Business Owner */}
      <section className="py-5">
        <div className="containerFull">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="section_tag mb-2">
                <span className="text_red fontWeight600 text-uppercase">Culture of Empowerment</span>
              </div>
              <h3 className="customHeading customLineHeight2 mb-3">
                More Than a Business Owner
              </h3>
              <p className="customText mb-3">
                It would be easy to describe Anuj Bajaj using the standard vocabulary reserved for business owners — driven, visionary, hands-on. All of that may be true, but it misses what actually seems to define him: <strong>a preference for building systems and people over chasing individual credit</strong>.
              </p>
              <p className="customText mb-3">
                Talk to anyone who has worked closely with him and a pattern emerges. He is less interested in being seen as the smartest person in the room and more interested in making sure the room, as a whole, is capable of solving the problem in front of it. That&apos;s a subtle but important distinction.
              </p>
              <p className="customText mb-3">
                Plenty of business owners build companies that revolve around them. Anuj appears to be building something different at SIB Infotech — an organisation designed to function well because of the people in it, not because of a single decision-maker at the top.
              </p>
              <p className="customText mb-0">
                This philosophy shows up in how responsibility gets distributed rather than hoarded. It shows up in the expectation that specialists — SEO professionals, designers, performance marketers, content strategists — are trusted to operate within their domain rather than second-guessed at every step. Not authority, but responsibility. Not control, but direction.
              </p>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="anuj_quote_card p-4 p-lg-5 rounded-4 shadow">
                <RiDoubleQuotesL className="fs-1 text-white opacity-75 mb-3" />
                <h4 className="h4 fontWeight600 mb-3 text-white">
                  Leadership Is Direction, Not Control
                </h4>
                <p className="text-white mb-4" style={{ lineHeight: "1.7", opacity: 0.95 }}>
                  &ldquo;A good cricket captain doesn&apos;t take every ball, bowl every over, or field in every position. Their true responsibility is ensuring that the eleven people on the pitch collectively perform like they know exactly what they are doing.&rdquo;
                </p>
                <div className="d-flex align-items-center">
                  <div className="avatar_dot bg-white rounded-circle me-3" style={{ width: 12, height: 12 }}></div>
                  <span className="fw-bold tracking-wider text-white">Anuj Bajaj</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Where Cricket and Digital Marketing Meet */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="text-center max-w-800 mx-auto mb-5">
            <span className="text_red fontWeight600 text-uppercase">The Strategic Parallel</span>
            <h3 className="customHeading customLineHeight2 mt-2">
              Where Cricket and Digital Marketing Meet
            </h3>
            <p className="customText mt-2">
              On the surface, cricket is played on grass under the sun, while digital marketing happens across dashboards, ad platforms, and analytics tools late into the evening. But look closer, and the resemblance becomes unmistakable.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="cricket_card p-4 bg-white rounded-3 shadow-sm h-100 border-top border-4 border-danger">
                <div className="d-flex align-items-center mb-3">
                  <div className="card_icon me-3 bg-light p-2 rounded text_red">
                    <MdOutlineTimeline className="fs-3" />
                  </div>
                  <h4 className="small_heading fontWeight700 mb-0">Long-Form Disciplines</h4>
                </div>
                <p className="text-muted">
                  Both punish impatience and reward deep preparation. A bowling attack changes as a pitch wears down, just as a digital strategy evolves as data and user signals stream in.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cricket_card p-4 bg-white rounded-3 shadow-sm h-100 border-top border-4 border-primary">
                <div className="d-flex align-items-center mb-3">
                  <div className="card_icon me-3 bg-light p-2 rounded text-primary">
                    <RiTeamLine className="fs-3" />
                  </div>
                  <h4 className="small_heading fontWeight700 mb-0">Collective Coordination</h4>
                </div>
                <p className="text-muted">
                  Both require a delicate harmony of individual mastery and synchronized execution. No single brilliant performance guarantees victory if the rest of the team isn&apos;t aligned.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cricket_card p-4 bg-white rounded-3 shadow-sm h-100 border-top border-4 border-danger">
                <div className="d-flex align-items-center mb-3">
                  <div className="card_icon me-3 bg-light p-2 rounded text_red">
                    <FaChess className="fs-3" />
                  </div>
                  <h4 className="small_heading fontWeight700 mb-0">Decisions Under Uncertainty</h4>
                </div>
                <p className="text-muted">
                  Neither captain nor digital strategist ever has complete information on algorithm shifts or competitor moves. Both must make sound reads and adjust immediately when conditions change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Consistency, Perseverance, Transparency, Timing */}
      <section className="py-5">
        <div className="containerFull">
          <div className="row g-5">
            {/* Consistency */}
            <div className="col-lg-6">
              <div className="philosophy_block p-4 p-lg-5 bg-white rounded-4 shadow-sm border h-100">
                <div className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill mb-3 fw-semibold">
                  Sustained Excellence
                </div>
                <h3 className="sub_heading fontWeight700 mb-3 text-dark">
                  Consistency – Great Results Are Built One Day at a Time
                </h3>
                <p className="customText mb-3">
                  Ask any serious cricketer what separates a good player from a great one, and very few will point to a single unforgettable innings. They&apos;ll point to <strong>consistency</strong> — the ability to show up, match after match, season after season, and deliver a standard of performance that doesn&apos;t collapse the moment conditions turn unfavourable. A single century doesn&apos;t define a career. A pattern of reliable contributions does.
                </p>
                <p className="customText mb-0">
                  Digital marketing runs on the same logic. It&apos;s tempting to chase headline wins — the viral post, the overnight traffic spike. But headline wins are brittle. SIB Infotech builds visibility through sustained, unglamorous effort: consistent content, disciplined optimisation, and steady reporting that allows results to compound over time.
                </p>
              </div>
            </div>

            {/* Perseverance */}
            <div className="col-lg-6">
              <div className="philosophy_block p-4 p-lg-5 bg-white rounded-4 shadow-sm border h-100">
                <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-semibold">
                  Resilience Under Pressure
                </div>
                <h3 className="sub_heading fontWeight700 mb-3 text-dark">
                  Perseverance – Never Defined by One Difficult Over
                </h3>
                <p className="customText mb-3">
                  Every cricketer has faced an over that went badly — a few boundaries conceded, a dropped catch, an untouchable batsman. What separates teams that recover isn&apos;t the absence of bad overs; it&apos;s what happens immediately afterward.
                </p>
                <p className="customText mb-0">
                  Digital marketing has its own bad overs: unexpected algorithm rollouts, fluctuating ad costs, or temporary campaign dips. In Anuj&apos;s view, perseverance isn&apos;t stubbornly repeating an ineffective tactic — it&apos;s resetting like a seasoned bowler: <strong>reassess line and length, isolate the cause, and return with a sharper plan for the next delivery</strong>.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="col-lg-6">
              <div className="philosophy_block p-4 p-lg-5 bg-white rounded-4 shadow-sm border h-100">
                <div className="badge bg-danger bg-opacity-10 text-danger px-3 py-2 rounded-pill mb-3 fw-semibold">
                  Foundational Integrity
                </div>
                <h3 className="sub_heading fontWeight700 mb-3 text-dark">
                  Transparency – Built on Absolute Trust
                </h3>
                <p className="customText mb-3">
                  A cricket team can survive a difficult loss, but it cannot survive a breakdown in trust between the captain and the dressing room. Communication is the lifeblood of coordination.
                </p>
                <p className="customText mb-0">
                  Anuj treats transparency as non-negotiable. Team members receive clear, constructive feedback. Clients receive honest campaign metrics — without dressed-up vanity numbers or hiding behind jargon. An agency that hides data loses long-term client trust just as fast as a captain loses his team.
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="col-lg-6">
              <div className="philosophy_block p-4 p-lg-5 bg-white rounded-4 shadow-sm border h-100">
                <div className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-semibold">
                  Precision Execution
                </div>
                <h3 className="sub_heading fontWeight700 mb-3 text-dark">
                  Timing Matters – On the Pitch &amp; in Digital
                </h3>
                <p className="customText mb-3">
                  Knowing when to accelerate the run rate and when to hold back. When to bring on a specific bowler. When to take a calculated risk and when patience serves the team better.
                </p>
                <p className="customText mb-0">
                  In digital marketing, being right isn&apos;t enough if you&apos;re late. Publishing content after a conversation has peaked or delaying campaign launches lets competitors seize the advantage. At SIB Infotech, timely delivery, swift responsiveness, and punctual execution are treated as core elements of strategy itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Every Player Has a Role */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <span className="text_red fontWeight600 text-uppercase">The Specialists</span>
              <h3 className="customHeading customLineHeight2 mt-2">
                Every Player Has a Role
              </h3>
              <p className="customText mt-2">
                No single player is expected to bowl every over, open the batting, and keep wickets. Championship teams win because specialists excel within their distinct domains.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <span className="badge bg-white text-dark border p-3 rounded-3 shadow-sm fw-medium">
                Art of Captaincy: Knowing when to get out of the way
              </span>
            </div>
          </div>

          <div className="row g-4">
            {specialistRoles.map((item, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="specialist_card p-4 bg-white rounded-4 shadow-sm h-100 border-0 transition-all">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div className="specialist_icon_wrap p-3 rounded-3">
                      {item.icon}
                    </div>
                    <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill small">
                      {item.cricketAnalogy}
                    </span>
                  </div>
                  <h4 className="small_heading fontWeight700 text-dark mb-2">{item.role}</h4>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-4 bg-white rounded-4 shadow-sm border-start border-4 border-danger">
            <p className="customText mb-0">
              <strong>The Captain&apos;s Function:</strong> Anuj&apos;s role is not forcing a bowler to bat out of position or asking a designer to make strategic calls that belong with a data analyst. Good captaincy is knowing your players well enough to empower them in their element — and then letting them execute with complete confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: The 5-Pillar Captaincy Framework */}
      <section className="py-5">
        <div className="containerFull">
          <div className="text-center max-w-800 mx-auto mb-5">
            <span className="text_red fontWeight600 text-uppercase">The SIB Infotech Leadership Rhythm</span>
            <h3 className="customHeading customLineHeight2 mt-2">
              Guide. Trust. Empower. Review. Improve.
            </h3>
            <p className="customText mt-2">
              A strong cricket captain doesn&apos;t necessarily score the most runs or take the most wickets; they create the conditions in which every other player can do their best work.
            </p>
          </div>

          <div className="row g-4">
            {leadershipPillars.map((pillar, i) => (
              <div className="col-md-6 col-lg-4 col-xl-2-4" key={i} style={{ minWidth: "20%" }}>
                <div className="pillar_card p-4 bg-white rounded-4 shadow-sm border h-100 text-center position-relative overflow-hidden">
                  <span className="pillar_watermark">{pillar.num}</span>
                  <div className="pillar_icon_box mx-auto mb-3 bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: 60, height: 60, fontSize: 24 }}>
                    {pillar.icon}
                  </div>
                  <h4 className="h5 fontWeight700 text-dark mb-1">{pillar.title}</h4>
                  <p className="text_red small fw-semibold mb-3">{pillar.subtitle}</p>
                  <p className="text-muted small mb-0">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <div className="p-4 bg-light rounded-3 d-inline-block max-w-800 text-start shadow-sm">
              <p className="customText mb-0">
                <i className="fa-solid fa-circle-info text_red me-2"></i>
                <strong>The Hand-Off Moment:</strong> A captain sets the field, communicates the plan, and then lets go. Once the bowler starts the run-up, outcome depends on execution, not shouting instructions from the slip cordon. Digital marketing leadership follows the exact same handoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Strategic Mastery - Pitch, Long Innings, Adaptation */}
      <section className="bgGrey py-5">
        <div className="containerFull">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="strategy_item mb-4 p-4 bg-white rounded-4 shadow-sm border-start border-4 border-danger">
                <h4 className="small_heading fontWeight700 text-dark mb-2">
                  Reading the Pitch Before Playing the Shot
                </h4>
                <p className="text-muted mb-0">
                  No competent batsman plays the same way on a green, seaming wicket as on a flat, dry pitch. The equivalent in digital marketing is rigorous upfront research — thoroughly understanding the client&apos;s competitive terrain, audience intent, and platform dynamics before executing a single campaign.
                </p>
              </div>

              <div className="strategy_item mb-4 p-4 bg-white rounded-4 shadow-sm border-start border-4 border-primary">
                <h4 className="small_heading fontWeight700 text-dark mb-2">
                  Playing the Long Innings
                </h4>
                <p className="text-muted mb-0">
                  Absorbing pressure, letting risky bad deliveries go, and letting organic authority build over months. SIB Infotech resists short-term vanity gimmicks in favour of lasting digital equity and compound returns.
                </p>
              </div>

              <div className="strategy_item p-4 bg-white rounded-4 shadow-sm border-start border-4 border-danger">
                <h4 className="small_heading fontWeight700 text-dark mb-2">
                  Adapting to a Game That Never Stops Changing
                </h4>
                <p className="text-muted mb-0">
                  From generative AI search and LLMs to automated bidding and privacy changes, digital marketing is constantly evolving. Fundamentals remain timeless, but adaptability ensures our clients stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="leadership_scoreboard_box p-4 p-lg-5 bg-dark text-white rounded-4 shadow-lg position-relative overflow-hidden">
                <div className="section_tag mb-3">
                  <span className="text-danger fontWeight600 text-uppercase small">Resilience Under Fire</span>
                </div>
                <h3 className="h3 fontWeight700 mb-3 text-white">
                  Leadership When the Scoreboard Is Against You
                </h3>
                <p className="text-white-50 mb-3" style={{ lineHeight: "1.7" }}>
                  Every captain eventually faces a match where wickets are tumbling and momentum rests firmly with the opposition. Panic spreads through a dressing room rapidly — but so does composure.
                </p>
                <p className="text-white-50 mb-4" style={{ lineHeight: "1.7" }}>
                  Anuj&apos;s response during rough market stretches centers on two non-negotiable principles:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-center mb-3 text-white">
                    <FaCheckCircle className="text-danger me-3 fs-5" />
                    <span><strong>Total Ownership:</strong> Taking responsibility for decisions rather than deflecting blame onto external factors.</span>
                  </li>
                  <li className="d-flex align-items-center text-white">
                    <FaCheckCircle className="text-danger me-3 fs-5" />
                    <span><strong>Forward Focus:</strong> Concentrating immediately on the next tactical move rather than dwelling on past deliveries.</span>
                  </li>
                </ul>
                <div className="p-3 bg-secondary bg-opacity-25 rounded border border-secondary border-opacity-50">
                  <p className="small text-white-50 mb-0">
                    &ldquo;The scoreboard can be against you, and the match can still turn — provided the response is clear-headed, strategic, and calm.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Partnerships Beyond Campaigns & The Innings Ahead */}
      <section className="py-5">
        <div className="containerFull">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <span className="text_red fontWeight600 text-uppercase">The Long Horizon</span>
              <h3 className="customHeading customLineHeight2 mt-2 mb-4">
                Building Partnerships Beyond Campaigns
              </h3>
              <p className="customText mb-3">
                A single strong innings can win a match. It rarely builds a reputation that lasts decades. What builds a lasting reputation is a cumulative body of work — consistent contribution over time, and trust earned across hundreds of challenges.
              </p>
              <p className="customText mb-3">
                Anuj approaches client relationships with the exact same horizon. Rather than treating each project as an isolated transactional exchange, SIB Infotech frames relationships as <strong>strategic, enduring partnerships</strong>.
              </p>
              <p className="customText mb-0">
                Experience provides invaluable pattern recognition and composure under pressure. But standing still is its own risk. Anuj ensures SIB Infotech maintains the discipline to keep testing, keep reading the shifting digital landscape, and never stop learning.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="innings_ahead_card p-4 p-lg-5 bg-light rounded-4 shadow-sm border">
                <div className="d-flex align-items-center mb-3">
                  <FaTrophy className="text_red fs-2 me-3" />
                  <h4 className="small_heading fontWeight700 mb-0 text-dark">The Innings Ahead</h4>
                </div>
                <p className="customText mb-3">
                  Cricket has a way of humbling anyone who assumes they&apos;ve figured it all out. What lies ahead for SIB Infotech is anchored by the same principles that built it:
                </p>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <p className="fw-bold text_red mb-1">Consistency</p>
                      <p className="small text-muted mb-0">Process and discipline over shortcuts</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <p className="fw-bold text_red mb-1">Transparency</p>
                      <p className="small text-muted mb-0">Unshakeable trust with clients &amp; team</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <p className="fw-bold text_red mb-1">Empowerment</p>
                      <p className="small text-muted mb-0">Developing leaders, not followers</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-3 bg-white rounded shadow-sm">
                      <p className="fw-bold text_red mb-1">Adaptability</p>
                      <p className="small text-muted mb-0">Mastering AI and modern digital frontiers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Closing Quote Banner */}
      <section className="anuj_closing_banner py-5 position-relative">
        <div className="containerFull text-center py-5">
          <div className="max-w-900 mx-auto">
            <RiDoubleQuotesL className="fs-1 text_red mb-3" />
            <h3 className="h2 fontWeight600 text-white mb-4" style={{ lineHeight: "1.5" }}>
              &ldquo;The scoreboard, after all, is never the whole story. It&apos;s what happens between the deliveries — the decisions, the recoveries, the quiet consistency — that actually determines how the innings is remembered.&rdquo;
            </h3>
            <p className="fw-bold text-white text-uppercase tracking-wider fs-6 mt-3 mb-4" style={{ letterSpacing: "1.5px" }}>
              — Anuj Bajaj, Leader &amp; Managing Director, SIB Infotech
            </p>
            <div className="mt-4 d-flex justify-content-center flex-wrap gap-3">
              <Link href="/about-us" className="btnThemewhiteBorder">
                Learn About SIB Infotech
              </Link>
              <Link href="/contact-us" className="btnThemeRed">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CustomLayout>
  );
}
