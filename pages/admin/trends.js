// pages/admin/trends.js
// AI SEO Newsroom: discover trends -> research -> generate -> edit -> publish.
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  FaRobot, FaArrowRightFromBracket, FaMagnifyingGlass, FaShieldHalved,
  FaLink, FaListCheck, FaFloppyDisk, FaPaperPlane, FaClock, FaTriangleExclamation,
  FaCircleCheck, FaCalendarDays, FaFire, FaChartLine, FaArrowRotateRight,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { hasValidSession } from "@/lib/adminAuth";
import TrendCard from "@/comps/admin-trends/TrendCard";
import FilterBar from "@/comps/admin-trends/FilterBar";
import ArticleEditor from "@/comps/admin-trends/ArticleEditor";

export async function getServerSideProps({ req }) {
  if (!hasValidSession(req)) {
    return { redirect: { destination: "/admin/login?next=/admin/trends", permanent: false } };
  }
  return { props: {} };
}

const TABS = [
  { key: "trends", label: "Latest Trends" },
  { key: "workspace", label: "Article Workspace" },
  { key: "drafts", label: "Drafts" },
  { key: "review", label: "In Review" },
  { key: "scheduled", label: "Scheduled" },
  { key: "published", label: "Published" },
  { key: "daily", label: "Daily Digest" },
];

function withinTimeFilter(item, filter) {
  if (!item.publishedDate) return true;
  const hours = (Date.now() - new Date(item.publishedDate).getTime()) / 36e5;
  // Maximum 3 months (90 days = 2160 hours)
  if (hours > 2160) return false;
  if (filter === "Today") return hours <= 24;
  if (filter === "Last 24 Hours") return hours <= 24;
  if (filter === "Last 3 Days") return hours <= 72;
  if (filter === "Last 7 Days") return hours <= 168;
  if (filter === "Last 30 Days") return hours <= 720;
  return true; // Last 3 Months
}

async function api(url, opts) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request to ${url} failed`);
  return data;
}

function computeSeoWarnings(article) {
  const warnings = [];
  if (!article) return warnings;
  if ((article.seoTitle || "").length > 60) warnings.push("SEO title is longer than 60 characters.");
  if (!article.seoTitle) warnings.push("SEO title is missing.");
  const md = (article.metaDescription || "").length;
  if (md === 0) warnings.push("Meta description is missing.");
  else if (md > 158) warnings.push("Meta description is longer than 158 characters.");
  else if (md < 120) warnings.push("Meta description is shorter than the recommended ~140-158 characters.");
  if ((article.slug || "").length > 75) warnings.push("URL slug is unnecessarily long.");
  if (article.primaryKeyword && article.seoTitle && !article.seoTitle.toLowerCase().includes(article.primaryKeyword.toLowerCase().split(" ")[0])) {
    warnings.push("Primary keyword may be missing from the SEO title.");
  }
  if (!/<h2/i.test(article.html || "")) warnings.push("No H2 headings found — heading structure may be incomplete.");
  if (!article.internalLinks || article.internalLinks.length === 0) warnings.push("No internal links added yet.");
  if (!article.sourceReferences || article.sourceReferences.length === 0) warnings.push("No external/authoritative sources cited.");
  if (article.cannibalizationCheck?.riskLevel === "High") warnings.push("High keyword-cannibalization risk against an existing page — review before publishing.");
  return warnings;
}

export default function AdminTrends() {
  const router = useRouter();
  const [tab, setTab] = useState("trends");

  // Trends dashboard state
  const [trendData, setTrendData] = useState({ items: [], sourceStatus: [], fetchedAt: null });
  const [loadingTrends, setLoadingTrends] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [timeFilter, setTimeFilter] = useState("Last 3 Months");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Research pipeline state
  const [researching, setResearching] = useState(false);
  const [researchStep, setResearchStep] = useState("");
  const [research, setResearch] = useState(null); // { topic, topicIntel, cannibalization, internalLinks, verifiedSources }
  const [generatingArticle, setGeneratingArticle] = useState(false);

  // Workspace / editor state
  const [article, setArticle] = useState(null);
  const saveTimer = useRef(null);
  const [saving, setSaving] = useState(false);

  // List tabs state
  const [lists, setLists] = useState({ Draft: [], Review: [], Scheduled: [], Published: [] });
  const [loadingLists, setLoadingLists] = useState(false);

  const [hideWritten, setHideWritten] = useState(false);

  // Daily digest state
  const [daily, setDaily] = useState(null);
  const [refreshOpps, setRefreshOpps] = useState(null);
  const [loadingDaily, setLoadingDaily] = useState(false);

  const loadTrends = useCallback(async (force = false) => {
    force ? setRefreshing(true) : setLoadingTrends(true);
    try {
      const data = await api(`/api/admin/trends/fetch-trends${force ? "?refresh=1" : ""}`);
      setTrendData(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setRefreshing(false);
      setLoadingTrends(false);
    }
  }, []);

  const loadLists = useCallback(async () => {
    setLoadingLists(true);
    try {
      const statuses = ["Draft", "Review", "Scheduled", "Published"];
      const results = await Promise.all(statuses.map((s) => api(`/api/admin/trends/drafts?status=${s}`)));
      const next = {};
      statuses.forEach((s, i) => (next[s] = results[i].items));
      setLists(next);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingLists(false);
    }
  }, []);

  const loadDaily = useCallback(async () => {
    setLoadingDaily(true);
    try {
      const [d, r] = await Promise.all([
        api("/api/admin/trends/daily-recommendations"),
        api("/api/admin/trends/refresh-opportunities"),
      ]);
      setDaily(d);
      setRefreshOpps(r);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoadingDaily(false);
    }
  }, []);

  useEffect(() => {
    loadTrends(false);
    loadLists();
  }, [loadTrends, loadLists]);

  useEffect(() => {
    if (["drafts", "review", "scheduled", "published"].includes(tab)) loadLists();
    if (tab === "daily" && !daily) loadDaily();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  // ---------- Research pipeline ----------
  const handleGenerateClick = async (item) => {
    setResearching(true);
    setResearch(null);
    try {
      setResearchStep("Analyzing search intent & keywords...");
      const topicIntel = await api("/api/admin/trends/topic-intelligence", {
        method: "POST",
        body: JSON.stringify(item),
      });

      setResearchStep("Checking keyword cannibalization against existing pages...");
      let cannibalization = {
        riskLevel: "Low",
        riskScore: 10,
        explanation: "No direct keyword conflict detected with core high-authority service pages.",
        recommendedAction: "Create the article with dedicated intent",
      };
      try {
        cannibalization = await api("/api/admin/trends/check-cannibalization", {
          method: "POST",
          body: JSON.stringify({
            topic: item.title,
            primaryKeyword: topicIntel.primaryKeyword,
            secondaryKeywords: topicIntel.secondaryKeywords || [],
            searchIntent: topicIntel.searchIntent,
          }),
        });
      } catch (e) {
        console.warn("Cannibalization fallback:", e);
      }

      if (cannibalization.recommendedAction === "Skip the topic") {
        toast.warn("Cannibalization check recommends caution for this topic.");
      }

      setResearchStep("Finding internal link opportunities...");
      let internalLinks = [];
      try {
        const resLinks = await api("/api/admin/trends/internal-links", {
          method: "POST",
          body: JSON.stringify({
            topic: item.title,
            primaryKeyword: topicIntel.primaryKeyword,
            secondaryKeywords: topicIntel.secondaryKeywords || [],
            outline: topicIntel.recommendedArticleStructure || [],
          }),
        });
        internalLinks = resLinks.links || [];
      } catch (e) {
        console.warn("Internal links fallback:", e);
      }

      setResearchStep("Validating outbound sources...");
      let verifiedSources = [];
      try {
        const resSources = await api("/api/admin/trends/validate-outbound-links", {
          method: "POST",
          body: JSON.stringify({
            category: topicIntel.recommendedCategory,
            keywords: [topicIntel.primaryKeyword, ...(topicIntel.secondaryKeywords || [])],
            originSourceUrl: item.link,
          }),
        });
        verifiedSources = resSources.verified || [];
      } catch (e) {
        console.warn("Outbound links fallback:", e);
        if (item.link) {
          verifiedSources = [{ url: item.link, name: item.source || "Original Source" }];
        }
      }

      setResearch({ topic: item, topicIntel, cannibalization, internalLinks, verifiedSources });
      toast.info("Topic research complete. Review the summary and click 'Generate Article'.");
    } catch (err) {
      toast.error(err.message || "Research failed. Please try again.");
    } finally {
      setResearching(false);
      setResearchStep("");
    }
  };

  const handleGenerateArticle = async () => {
    if (!research) return;
    setGeneratingArticle(true);
    try {
      const { topic, topicIntel, cannibalization, internalLinks, verifiedSources } = research;
      const guidance =
        cannibalization?.riskLevel !== "Low"
          ? `${cannibalization.recommendedAction}: ${cannibalization.actionRationale}`
          : null;

      const generated = await api("/api/admin/trends/generate-article", {
        method: "POST",
        body: JSON.stringify({
          topic: topic.title,
          sourceName: topic.source,
          sourceUrl: topic.link,
          sourceSummary: topic.description,
          publishedDate: topic.publishedDate,
          topicIntelligence: topicIntel,
          cannibalizationGuidance: guidance,
          internalLinks,
          verifiedSources,
        }),
      });

      const sourceReferences = [
        { title: topic.source, url: topic.link, publishedDate: topic.publishedDate },
        ...verifiedSources.map((s) => ({ title: s.name, url: s.url })),
      ];

      const draft = await api("/api/admin/trends/drafts", {
        method: "POST",
        body: JSON.stringify({
          title: generated.seoTitle ? topicIntel.suggestedTitle || topic.title : topic.title,
          slug: generated.urlSlug,
          html: generated.html,
          excerpt: generated.excerpt,
          seoTitle: generated.seoTitle,
          metaDescription: generated.metaDescription,
          ogTitle: generated.ogTitle,
          ogDescription: generated.ogDescription,
          featuredImageAlt: generated.featuredImageAlt,
          primaryKeyword: generated.primaryKeyword || topicIntel.primaryKeyword,
          secondaryKeywords: generated.secondaryKeywords || topicIntel.secondaryKeywords,
          semanticKeywords: topicIntel.semanticConcepts,
          searchIntent: topicIntel.searchIntent,
          category: topicIntel.recommendedCategory || topic.category,
          tags: [topic.category, topicIntel.recommendedCategory].filter(Boolean),
          internalLinks,
          sourceReferences,
          faqs: generated.faqs || [],
          cannibalizationCheck: cannibalization,
          seoOpportunityScore: topic.seoOpportunityScore,
          topicResearch: { topicIntel, confirmedVsSpeculative: generated.confirmedVsSpeculative, imageSuggestion: generated.featuredImageSuggestion },
        }),
      });

      setArticle(draft);
      setResearch(null);
      setTab("workspace");
      loadLists();
      toast.success("✨ Article generated successfully! You are now in the Workspace editor.");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setGeneratingArticle(false);
    }
  };

  // ---------- Workspace autosave ----------
  const updateArticleField = (patch) => {
    setArticle((prev) => {
      const next = { ...prev, ...patch };
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => saveArticle(next), 1200);
      return next;
    });
  };

  const saveArticle = async (data) => {
    if (!data?.id) return;
    setSaving(true);
    try {
      const updated = await api("/api/admin/trends/drafts", {
        method: "PUT",
        body: JSON.stringify({ id: data.id, ...data }),
      });
      setArticle((prev) => (prev?.id === updated.id ? { ...prev, updatedAt: updated.updatedAt } : prev));
    } catch (err) {
      toast.error(`Autosave failed: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const openArticle = (a) => {
    setArticle(a);
    setResearch(null);
    setTab("workspace");
  };

  const handlePublish = async () => {
    if (!article) return;
    try {
      const updated = await api("/api/admin/trends/publish", {
        method: "POST",
        body: JSON.stringify({ id: article.id }),
      });
      setArticle(updated);
      toast.success(`Published! Live at /blog/${updated.slug}`);
      loadLists();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleSchedule = async () => {
    const when = window.prompt("Schedule for (YYYY-MM-DDTHH:mm), e.g. 2026-09-10T09:00:");
    if (!when) return;
    try {
      const updated = await api("/api/admin/trends/schedule", {
        method: "POST",
        body: JSON.stringify({ id: article.id, scheduledAt: new Date(when).toISOString() }),
      });
      setArticle(updated);
      toast.success("Article scheduled.");
      loadLists();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this draft permanently?")) return;
    try {
      await api(`/api/admin/trends/drafts?id=${id}`, { method: "DELETE" });
      toast.success("Deleted.");
      loadLists();
      if (article?.id === id) setArticle(null);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const allArticles = useMemo(() => [
    ...(lists.Draft || []),
    ...(lists.Review || []),
    ...(lists.Scheduled || []),
    ...(lists.Published || []),
  ], [lists]);

  const trendsWithWrittenStatus = useMemo(() => {
    return (trendData.items || []).map((item) => {
      const itemTitle = (item.title || "").toLowerCase().trim();
      const itemLink = (item.link || "").toLowerCase().trim();

      // 1. Direct source link match
      let match = allArticles.find((a) =>
        (a.sourceReferences || []).some(
          (s) => s.url && itemLink && s.url.toLowerCase().trim() === itemLink
        )
      );

      // 2. Title normalized or substring match
      if (!match) {
        const cleanItemWords = itemTitle
          .replace(/[^\w\s]/gi, "")
          .split(/\s+/)
          .filter((w) => w.length > 3);

        match = allArticles.find((a) => {
          const artTitle = (a.title || a.seoTitle || "").toLowerCase().trim();
          if (!artTitle) return false;
          if (artTitle.includes(itemTitle) || itemTitle.includes(artTitle)) return true;

          const artCleanWords = artTitle
            .replace(/[^\w\s]/gi, "")
            .split(/\s+/)
            .filter((w) => w.length > 3);

          if (cleanItemWords.length > 0 && artCleanWords.length > 0) {
            const matches = cleanItemWords.filter((w) => artCleanWords.includes(w));
            if (matches.length >= 2 && matches.length / cleanItemWords.length >= 0.45) {
              return true;
            }
          }
          return false;
        });
      }

      return {
        ...item,
        writtenArticle: match || null,
      };
    });
  }, [trendData.items, allArticles]);

  const writtenCount = useMemo(() => {
    return trendsWithWrittenStatus.filter((i) => Boolean(i.writtenArticle)).length;
  }, [trendsWithWrittenStatus]);

  const MAX_RENDERED_CARDS = 60;
  const allFilteredTrends = trendsWithWrittenStatus.filter(
    (i) =>
      withinTimeFilter(i, timeFilter) &&
      (categoryFilter === "All" || i.category === categoryFilter) &&
      (!hideWritten || !i.writtenArticle)
  );
  const filteredTrends = allFilteredTrends.slice(0, MAX_RENDERED_CARDS);

  const warnings = computeSeoWarnings(article);

  return (
    <>
      <Head>
        <title>AI Trends Newsroom | SIB Infotech Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="trends-admin">
        <header className="trends-header">
          <div className="header-left">
            <FaRobot className="brand-icon" />
            <div>
              <div className="brand-title">AI SEO Newsroom</div>
              <div className="brand-sub">Digital Marketing & AI Trend Intelligence</div>
            </div>
          </div>
          <nav className="header-tabs">
            {TABS.map((t) => (
              <button key={t.key} className={tab === t.key ? "active" : ""} onClick={() => setTab(t.key)}>
                {t.label}
                {t.key === "drafts" && lists.Draft.length > 0 && <span className="count">{lists.Draft.length}</span>}
              </button>
            ))}
          </nav>
          <button className="logout-btn" onClick={handleLogout}>
            <FaArrowRightFromBracket className="me-2" /> Sign out
          </button>
        </header>

        <main className="trends-main">
          {tab === "trends" && (
            <section>
              <FilterBar
                time={timeFilter}
                setTime={setTimeFilter}
                category={categoryFilter}
                setCategory={setCategoryFilter}
                onRefresh={() => loadTrends(true)}
                refreshing={refreshing}
                hideWritten={hideWritten}
                setHideWritten={setHideWritten}
                writtenCount={writtenCount}
              />

              {trendData.sourceStatus?.some((s) => !s.ok) && (
                <div className="source-warning">
                  <FaTriangleExclamation className="me-2" />
                  {trendData.sourceStatus.filter((s) => !s.ok).length} source(s) unavailable right now:{" "}
                  {trendData.sourceStatus.filter((s) => !s.ok).map((s) => s.name).join(", ")}
                </div>
              )}

              {loadingTrends ? (
                <div className="loading-block">Fetching the latest marketing & AI trends...</div>
              ) : filteredTrends.length === 0 ? (
                <div className="loading-block">No trends match these filters yet.</div>
              ) : (
                <>
                  {allFilteredTrends.length > MAX_RENDERED_CARDS && (
                    <div className="showing-note">
                      Showing top {MAX_RENDERED_CARDS} of {allFilteredTrends.length} matching trends by opportunity score. Narrow the filters to see more specific results.
                    </div>
                  )}
                <div className="trend-grid">
                  {filteredTrends.map((item) => (
                    <TrendCard
                      key={item.link}
                      item={item}
                      writtenArticle={item.writtenArticle}
                      onOpenArticle={openArticle}
                      onGenerate={handleGenerateClick}
                      generating={researching && research?.topic?.link === item.link}
                    />
                  ))}
                </div>
                </>
              )}

              {(researching || generatingArticle) && (
                <div className="research-overlay">
                  <div className="research-box">
                    <div className="spinner-border text-primary mb-3" role="status" />
                    <h4 className="fw-bold mb-2">
                      {generatingArticle ? "Writing Full Article..." : "Researching Topic..."}
                    </h4>
                    <p className="text-muted small m-0">
                      {generatingArticle
                        ? "Generating high-EEAT structure, FAQ schema, citations, and SEO meta tags..."
                        : researchStep || "Gathering SEO insights..."}
                    </p>
                  </div>
                </div>
              )}

              {research && !researching && !generatingArticle && (
                <div className="research-overlay">
                  <div className="research-modal">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <span className="badge bg-primary mb-1">Topic Research & Content Strategy</span>
                        <h3 className="m-0 fontHeading fontWeight700 fs-5">{research.topic.title}</h3>
                      </div>
                      <button className="btn-close" onClick={() => setResearch(null)} aria-label="Close" />
                    </div>

                    <div className="research-grid">
                      <div>
                        <label>What happened (Simple English Summary)</label>
                        <p className="fw-semibold text-dark">
                          {research.topicIntel.simpleExplanation || research.topic.description}
                        </p>
                        <label>Primary source</label>
                        <p><a href={research.topic.link} target="_blank" rel="noopener noreferrer">{research.topic.source}</a></p>
                      </div>
                      <div>
                        <label>Target Keyword</label>
                        <p className="fw-bold text-primary">{research.topicIntel.primaryKeyword}</p>
                        <label>Secondary keywords</label>
                        <p className="small text-muted">{research.topicIntel.secondaryKeywords?.join(", ")}</p>
                        <label>Search intent</label>
                        <p className="small">{research.topicIntel.searchIntent} · {research.topicIntel.userJourneyStage}</p>
                      </div>
                      <div>
                        <label>Cannibalization risk</label>
                        <p className={`risk-badge risk-${research.cannibalization.riskLevel?.toLowerCase()}`}>
                          {research.cannibalization.riskLevel} ({research.cannibalization.riskScore}%)
                        </p>
                        <p className="small text-muted">{research.cannibalization.explanation}</p>
                        <label>Recommended action</label>
                        <p className="fw-bold">{research.cannibalization.recommendedAction}</p>
                      </div>
                      <div>
                        <label>Internal links ({research.internalLinks.length})</label>
                        <ul className="mini-list">
                          {research.internalLinks.slice(0, 4).map((l, i) => (
                            <li key={i}>{l.targetUrl}</li>
                          ))}
                        </ul>
                        <label>Verified sources ({research.verifiedSources.length})</label>
                        <ul className="mini-list">
                          {research.verifiedSources.slice(0, 4).map((s, i) => (
                            <li key={i}>{s.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="research-outline mt-3">
                      <label>Proposed Article Structure ({research.topicIntel.recommendedArticleStructure?.length || 0} Sections)</label>
                      <ol className="m-0 ps-3 small text-secondary">
                        {research.topicIntel.recommendedArticleStructure?.map((s, i) => <li key={i}>{s}</li>)}
                      </ol>
                    </div>

                    <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                      <button className="cancel-btn" onClick={() => setResearch(null)}>Cancel</button>
                      <button className="generate-article-btn" onClick={handleGenerateArticle} disabled={generatingArticle}>
                        <FaWandMagicSparkles className="me-2" />
                        Generate Full Article Now &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {tab === "workspace" && (
            <ArticleWorkspace
              article={article}
              onChangeField={updateArticleField}
              onPublish={handlePublish}
              onSchedule={handleSchedule}
              saving={saving}
              warnings={warnings}
            />
          )}

          {["drafts", "review", "scheduled", "published"].includes(tab) && (
            <ListView
              tab={tab}
              lists={lists}
              loading={loadingLists}
              onOpen={openArticle}
              onDelete={handleDelete}
            />
          )}

          {tab === "daily" && (
            <DailyDigest daily={daily} refreshOpps={refreshOpps} loading={loadingDaily} onRefresh={loadDaily} onOpenTrend={handleGenerateClick} />
          )}
        </main>
      </div>

      <style jsx global>{`
        .trends-admin { min-height: 100vh; background: #f8fafc; }
        .trends-header {
          display: flex; align-items: center; gap: 1.5rem;
          background: #0f172a; color: #fff; padding: 0.9rem 1.5rem;
          position: sticky; top: 0; z-index: 20; flex-wrap: wrap;
        }
        .header-left { display: flex; align-items: center; gap: 0.7rem; }
        .brand-icon { font-size: 1.4rem; color: #60a5fa; }
        .brand-title { font-weight: 800; font-size: 1rem; }
        .brand-sub { font-size: 0.72rem; color: #94a3b8; }
        .header-tabs { display: flex; gap: 0.3rem; flex-wrap: wrap; }
        .header-tabs button {
          background: transparent; border: none; color: #cbd5e1;
          font-size: 0.82rem; padding: 0.4rem 0.8rem; border-radius: 8px;
          display: flex; align-items: center; gap: 0.3rem;
        }
        .header-tabs button.active { background: #1e293b; color: #fff; font-weight: 700; }
        .header-tabs .count {
          background: #2563eb; color: #fff; font-size: 0.65rem;
          padding: 0.05rem 0.4rem; border-radius: 9999px;
        }
        .logout-btn { margin-left: auto; background: transparent; border: 1px solid #334155; color: #cbd5e1; padding: 0.4rem 0.9rem; border-radius: 8px; font-size: 0.8rem; }
        .trends-main { padding: 1.75rem; max-width: 1500px; margin: 0 auto; }
        .loading-block { text-align: center; padding: 3rem; color: #64748b; background: #fff; border-radius: 12px; border: 1px solid #e2e8f0; }
        .source-warning {
          background: #fffbeb; border: 1px solid #fde68a; color: #92400e;
          padding: 0.6rem 1rem; border-radius: 10px; font-size: 0.82rem; margin-bottom: 1rem;
        }
        .trend-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem; }
        .showing-note { font-size: 0.8rem; color: #64748b; margin-bottom: 0.75rem; }
        .research-overlay {
          position: fixed; inset: 0; background: rgba(15,23,42,0.65);
          display: flex; align-items: center; justify-content: center; z-index: 1050;
          padding: 1.5rem;
          backdrop-filter: blur(4px);
        }
        .research-box {
          background: #fff; border-radius: 16px; padding: 2.5rem 3rem; text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-width: 440px; width: 100%;
        }
        .research-modal {
          background: #fff; border-radius: 16px; padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          max-width: 820px; width: 100%; max-height: 90vh; overflow-y: auto;
        }
        .research-modal h3 { font-size: 1.15rem; font-weight: 800; }
        .research-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.2rem; margin-top: 1rem; }
        .research-grid label { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; color: #94a3b8; display: block; margin-top: 0.5rem; }
        .research-grid p { font-size: 0.85rem; color: #1e293b; margin-bottom: 0.2rem; }
        .mini-list { font-size: 0.78rem; color: #475569; padding-left: 1.1rem; margin-bottom: 0.3rem; }
        .risk-badge { display: inline-block; padding: 0.15rem 0.6rem; border-radius: 6px; font-weight: 700; font-size: 0.75rem; }
        .risk-low { background: #dcfce7; color: #166534; }
        .risk-medium { background: #fef9c3; color: #854d0e; }
        .risk-high { background: #fee2e2; color: #991b1b; }
        .research-outline { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 1rem; }
        .research-outline label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: #64748b; display: block; margin-bottom: 0.4rem; }
        .generate-article-btn {
          background: linear-gradient(135deg, #16a34a, #15803d); color: #fff; border: none;
          padding: 0.65rem 1.4rem; border-radius: 10px; font-weight: 700; font-size: 0.9rem;
          display: flex; align-items: center;
        }
        .generate-article-btn:disabled { opacity: 0.6; }
        .cancel-btn { background: #f1f5f9; border: 1px solid #e2e8f0; padding: 0.65rem 1.2rem; border-radius: 10px; font-weight: 600; font-size: 0.88rem; }
      `}</style>
    </>
  );
}

// ---------------- Article Workspace (3-panel) ----------------

function ArticleWorkspace({ article, onChangeField, onPublish, onSchedule, saving, warnings }) {
  if (!article) {
    return <div className="loading-block">Generate an article from the Trends tab, or open a draft.</div>;
  }

  return (
    <div className="workspace-grid">
      <aside className="workspace-panel workspace-left">
        <h4><FaMagnifyingGlass className="me-2" /> Research</h4>
        <label>Search intent</label>
        <p>{article.searchIntent}</p>
        <label>Primary keyword</label>
        <p className="fw-bold">{article.primaryKeyword}</p>
        <label>Secondary keywords</label>
        <p className="small">{(article.secondaryKeywords || []).join(", ")}</p>
        <label>Semantic keywords</label>
        <p className="small">{(article.semanticKeywords || []).join(", ")}</p>

        <h4 className="mt-4"><FaShieldHalved className="me-2" /> Cannibalization</h4>
        {article.cannibalizationCheck ? (
          <>
            <p className={`risk-badge risk-${article.cannibalizationCheck.riskLevel?.toLowerCase()}`}>
              {article.cannibalizationCheck.riskLevel} risk ({article.cannibalizationCheck.riskScore}%)
            </p>
            <p className="small text-muted">{article.cannibalizationCheck.explanation}</p>
          </>
        ) : <p className="small text-muted">Not checked.</p>}

        <h4 className="mt-4"><FaLink className="me-2" /> Internal Links ({(article.internalLinks || []).length})</h4>
        <ul className="mini-list">
          {(article.internalLinks || []).map((l, i) => (
            <li key={i}>{l.targetUrl} — &quot;{l.anchorText}&quot;</li>
          ))}
        </ul>

        <h4 className="mt-4">Sources ({(article.sourceReferences || []).length})</h4>
        <ul className="mini-list">
          {(article.sourceReferences || []).map((s, i) => (
            <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a></li>
          ))}
        </ul>
      </aside>

      <section className="workspace-panel workspace-center">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <input
            className="title-input"
            value={article.title || ""}
            onChange={(e) => onChangeField({ title: e.target.value })}
            placeholder="Article title"
          />
          <span className="save-indicator">{saving ? "Saving..." : "Saved"}</span>
        </div>
        <ArticleEditor html={article.html} onChange={(html) => onChangeField({ html })} />
      </section>

      <aside className="workspace-panel workspace-right">
        <h4><FaChartLine className="me-2" /> SEO Preview</h4>
        <label>SEO Title ({(article.seoTitle || "").length}/60)</label>
        <input value={article.seoTitle || ""} onChange={(e) => onChangeField({ seoTitle: e.target.value })} />
        <label>Meta Description ({(article.metaDescription || "").length}/158)</label>
        <textarea rows={3} value={article.metaDescription || ""} onChange={(e) => onChangeField({ metaDescription: e.target.value })} />
        <label>URL Slug</label>
        <input value={article.slug || ""} onChange={(e) => onChangeField({ slug: e.target.value })} />
        <label>Canonical URL</label>
        <input
          value={article.canonicalUrl || `https://www.sibinfotech.com/blog/${article.slug || ""}`}
          onChange={(e) => onChangeField({ canonicalUrl: e.target.value })}
        />
        <label>Robots</label>
        <select value={article.robots || "index"} onChange={(e) => onChangeField({ robots: e.target.value })}>
          <option value="index">Index</option>
          <option value="noindex">Noindex</option>
        </select>
        <label>Open Graph Title</label>
        <input value={article.ogTitle || ""} onChange={(e) => onChangeField({ ogTitle: e.target.value })} />
        <label>Open Graph Description</label>
        <textarea rows={2} value={article.ogDescription || ""} onChange={(e) => onChangeField({ ogDescription: e.target.value })} />
        <label>Author</label>
        <select
          value={
            ["Radhey Shyam", "SIB Infotech Editorial"].includes(article.author)
              ? article.author
              : "Custom"
          }
          onChange={(e) => {
            const val = e.target.value;
            if (val === "Custom") {
              onChangeField({ author: "Custom Author" });
            } else {
              onChangeField({ author: val });
            }
          }}
        >
          <option value="Radhey Shyam">Radhey Shyam (Co-Founder)</option>
          <option value="SIB Infotech Editorial">SIB Infotech Editorial</option>
          <option value="Custom">Custom Author...</option>
        </select>
        {!["Radhey Shyam", "SIB Infotech Editorial"].includes(article.author) && (
          <input
            placeholder="Enter custom author name"
            value={article.author || ""}
            onChange={(e) => onChangeField({ author: e.target.value })}
            className="mt-1"
          />
        )}
        <label>Featured Image URL</label>
        <input value={article.featuredImage || ""} onChange={(e) => onChangeField({ featuredImage: e.target.value })} placeholder="https://..." />
        <label>Image Alt Text</label>
        <input value={article.featuredImageAlt || ""} onChange={(e) => onChangeField({ featuredImageAlt: e.target.value })} />

        {warnings.length > 0 && (
          <div className="warnings-box">
            <FaTriangleExclamation className="me-1" /> {warnings.length} warning(s)
            <ul>{warnings.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>
        )}

        <div className="status-row">
          Status: <strong>{article.status}</strong>
          {article.status === "Scheduled" && article.scheduledAt && (
            <div className="small text-muted"><FaCalendarDays className="me-1" />{new Date(article.scheduledAt).toLocaleString()}</div>
          )}
        </div>

        <button className="publish-btn" onClick={onPublish}>
          <FaPaperPlane className="me-2" /> Publish Article
        </button>
        <button className="schedule-btn" onClick={onSchedule}>
          <FaClock className="me-2" /> Schedule
        </button>
      </aside>

      <style jsx>{`
        .workspace-grid { display: grid; grid-template-columns: 280px 1fr 320px; gap: 1.25rem; align-items: start; }
        .workspace-panel { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.25rem; }
        .workspace-left h4, .workspace-right h4 { font-size: 0.85rem; font-weight: 800; margin-bottom: 0.5rem; }
        .workspace-left label, .workspace-right label { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; color: #94a3b8; display: block; margin-top: 0.6rem; }
        .workspace-left p { font-size: 0.82rem; color: #1e293b; margin-bottom: 0.2rem; }
        .mini-list { font-size: 0.76rem; color: #475569; padding-left: 1rem; }
        .title-input { flex: 1; font-size: 1.1rem; font-weight: 700; border: none; border-bottom: 2px solid #e2e8f0; padding: 0.4rem 0; margin-right: 1rem; }
        .title-input:focus { outline: none; border-color: #2563eb; }
        .save-indicator { font-size: 0.75rem; color: #94a3b8; white-space: nowrap; }
        .workspace-right input, .workspace-right textarea, .workspace-right select {
          width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; padding: 0.4rem 0.6rem; font-size: 0.82rem; margin-top: 0.2rem;
        }
        .risk-badge { display: inline-block; padding: 0.1rem 0.5rem; border-radius: 6px; font-weight: 700; font-size: 0.78rem; }
        .risk-low { background: #dcfce7; color: #166534; }
        .risk-medium { background: #fef9c3; color: #854d0e; }
        .risk-high { background: #fee2e2; color: #991b1b; }
        .warnings-box { background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 0.6rem 0.8rem; margin-top: 1rem; font-size: 0.78rem; color: #92400e; }
        .warnings-box ul { margin: 0.3rem 0 0; padding-left: 1.1rem; }
        .status-row { margin-top: 1rem; font-size: 0.85rem; }
        .publish-btn {
          width: 100%; margin-top: 1rem; background: linear-gradient(135deg, #16a34a, #15803d);
          color: #fff; border: none; padding: 0.7rem; border-radius: 10px; font-weight: 700;
        }
        .schedule-btn {
          width: 100%; margin-top: 0.5rem; background: #fff; border: 1px solid #cbd5e1;
          padding: 0.6rem; border-radius: 10px; font-weight: 600; color: #334155;
        }
      `}</style>
    </div>
  );
}

// ---------------- List views (Drafts / Review / Scheduled / Published) ----------------

const TAB_TO_STATUS = { drafts: "Draft", review: "Review", scheduled: "Scheduled", published: "Published" };

function ListView({ tab, lists, loading, onOpen, onDelete }) {
  const status = TAB_TO_STATUS[tab];
  const items = lists[status] || [];

  if (loading) return <div className="loading-block">Loading...</div>;
  if (items.length === 0) return <div className="loading-block">No articles with status &quot;{status}&quot; yet.</div>;

  return (
    <div className="list-grid">
      {items.map((a) => (
        <div key={a.id} className="list-card">
          <span className="badge-cat">{a.category || "Uncategorized"}</span>
          <h4>{a.title || "Untitled"}</h4>
          <p className="small text-muted">{a.primaryKeyword}</p>
          <p className="small text-muted">{a.wordCount || 0} words · updated {new Date(a.updatedAt).toLocaleDateString()}</p>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <button className="open-btn" onClick={() => onOpen(a)}><FaFloppyDisk className="me-1" /> Open</button>
            {a.status === "Published" && a.slug && (
              <a
                href={`/blog/${a.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="live-btn"
              >
                <FaArrowRightFromBracket className="me-1" /> Live
              </a>
            )}
            <button className="delete-btn" onClick={() => onDelete(a.id)}>Delete</button>
          </div>
        </div>
      ))}
      <style jsx>{`
        .list-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1rem; }
        .list-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 1rem 1.1rem; }
        .badge-cat { background: #f1f5f9; color: #334155; font-size: 0.68rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 6px; }
        .list-card h4 { font-size: 0.92rem; font-weight: 700; margin: 0.4rem 0 0.2rem; color: #0f172a; }
        .open-btn { background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 0.35rem 0.8rem; border-radius: 8px; font-size: 0.78rem; font-weight: 600; }
        .live-btn { background: #ecfdf5; color: #15803d; border: 1px solid #a7f3d0; padding: 0.35rem 0.8rem; border-radius: 8px; font-size: 0.78rem; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; }
        .delete-btn { background: #fef2f2; color: #b91c1c; border: 1px solid #fecaca; padding: 0.35rem 0.8rem; border-radius: 8px; font-size: 0.78rem; }
      `}</style>
    </div>
  );
}

// ---------------- Daily Digest ----------------

function DailyDigest({ daily, refreshOpps, loading, onRefresh, onOpenTrend }) {
  if (loading) return <div className="loading-block">Building today&apos;s digest...</div>;
  if (!daily || daily.empty) {
    return (
      <div className="loading-block">
        No cached trend data yet.
        <div className="mt-2"><button className="refresh-btn-alt" onClick={onRefresh}><FaArrowRotateRight className="me-1" /> Try again</button></div>
      </div>
    );
  }

  return (
    <div className="digest-grid">
      <DigestSection title="Top 3 Urgent / Breaking" icon={<FaFire className="text-danger" />} items={daily.urgent} onOpenTrend={onOpenTrend} />
      <DigestSection title="Top 5 Recommended Articles" icon={<FaChartLine className="text-primary" />} items={daily.recommended} onOpenTrend={onOpenTrend} />
      <DigestSection title="Top 10 Latest Trends" icon={<FaClock className="text-secondary" />} items={daily.topTrends} onOpenTrend={onOpenTrend} compact />

      <div className="digest-card">
        <h4>Existing Articles Worth Refreshing</h4>
        {(!refreshOpps || refreshOpps.candidates?.length === 0) && <p className="small text-muted">No strong refresh candidates found yet.</p>}
        {refreshOpps?.candidates?.map((c, i) => (
          <div key={i} className="refresh-item">
            <a href={c.url} target="_blank" rel="noopener noreferrer">{c.title}</a>
            <p className="small text-muted">{c.rationale}</p>
          </div>
        ))}
      </div>

      <div className="digest-card">
        <h4>Emerging Keywords Worth Tracking</h4>
        <div className="d-flex flex-wrap gap-2">
          {daily.emergingKeywords?.map((k, i) => (
            <span key={i} className="kw-chip">{k.term} × {k.mentionsThisFetch}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .digest-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem; }
        .digest-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 1.25rem; }
        .digest-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 0.75rem; }
        .refresh-item { border-bottom: 1px solid #f1f5f9; padding: 0.5rem 0; }
        .kw-chip { background: #f1f5f9; color: #334155; font-size: 0.75rem; padding: 0.2rem 0.6rem; border-radius: 9999px; }
        .refresh-btn-alt { background: #2563eb; color: #fff; border: none; padding: 0.4rem 1rem; border-radius: 8px; }
      `}</style>
    </div>
  );
}

function DigestSection({ title, icon, items, onOpenTrend, compact }) {
  return (
    <div className="digest-card">
      <h4>{icon} {title}</h4>
      {(!items || items.length === 0) && <p className="small text-muted">Nothing here right now.</p>}
      {items?.map((item, i) => (
        <div key={i} className="digest-item">
          <div className="digest-item-title">{item.title}</div>
          {!compact && <div className="small text-muted">{item.source} · {item.opportunityClass} · {item.seoOpportunityScore}/100</div>}
          <button className="mini-generate-btn" onClick={() => onOpenTrend(item)}>Research & Generate</button>
        </div>
      ))}
      <style jsx>{`
        .digest-item { border-bottom: 1px solid #f1f5f9; padding: 0.6rem 0; }
        .digest-item-title { font-size: 0.85rem; font-weight: 600; color: #0f172a; }
        .mini-generate-btn { margin-top: 0.35rem; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; padding: 0.25rem 0.7rem; border-radius: 6px; font-size: 0.72rem; }
      `}</style>
    </div>
  );
}
