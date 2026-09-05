// pages/trends-insights/[slug].js
// Public reader page for articles published from the /admin/trends system.
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import { CustomLayout } from "@/comps/CustomLayout";
import { getArticleBySlug, listArticles } from "@/lib/trendsDb";

export async function getServerSideProps({ params }) {
  return {
    redirect: {
      destination: `/blog/${params.slug}`,
      permanent: true,
    },
  };
}

export default function TrendsInsightArticle({ article, related }) {
  const canonical = article.canonicalUrl || `https://www.sibinfotech.com/trends-insights/${article.slug}`;
  const publishedIso = article.publishDate || article.createdAt;
  const updatedIso = article.updatedAt || publishedIso;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle || article.title,
    description: article.metaDescription || article.excerpt,
    image: article.featuredImage || undefined,
    datePublished: publishedIso,
    dateModified: updatedIso,
    author: { "@type": "Organization", name: article.author || "SIB Infotech" },
    publisher: {
      "@type": "Organization",
      name: "SIB Infotech",
      logo: { "@type": "ImageObject", url: "https://www.sibinfotech.com/assets/og/sib-infotech.webp" },
    },
    mainEntityOfPage: canonical,
  };

  const faqJsonLd =
    article.faqs && article.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const metaTags = (
    <>
      <title>{article.seoTitle || article.title}</title>
      <meta name="description" content={article.metaDescription || article.excerpt} />
      {article.robots === "noindex" && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={article.ogTitle || article.seoTitle || article.title} />
      <meta property="og:description" content={article.ogDescription || article.metaDescription} />
      {article.featuredImage && <meta property="og:image" content={article.featuredImage} />}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={article.ogTitle || article.seoTitle || article.title} />
      <meta property="twitter:description" content={article.ogDescription || article.metaDescription} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <div className="trend-article-shell">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="trend-article-meta">
                {article.category && <span className="trend-badge">{article.category}</span>}
                {publishedIso && (
                  <span className="trend-date">{format(new Date(publishedIso), "MMMM d, yyyy")}</span>
                )}
                {article.wordCount ? <span className="trend-date">· {article.wordCount} words</span> : null}
              </div>
              <h1 className="trend-article-title">{article.title}</h1>
              {article.excerpt && <p className="trend-article-excerpt">{article.excerpt}</p>}

              <div
                className="trend-article-body"
                dangerouslySetInnerHTML={{ __html: article.html }}
              />

              {article.sourceReferences && article.sourceReferences.length > 0 && (
                <div className="trend-sources">
                  <h2>Sources</h2>
                  <ul>
                    {article.sourceReferences.map((s, i) => (
                      <li key={i}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">
                          {s.title || s.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {related && related.length > 0 && (
                <div className="trend-related">
                  <h2>More Insights</h2>
                  <ul>
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link href={`/trends-insights/${r.slug}`}>{r.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .trend-article-shell {
          padding: 3rem 0 5rem;
        }
        .trend-article-meta {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: #64748b;
        }
        .trend-badge {
          background: #eff6ff;
          color: #2563eb;
          font-weight: 700;
          padding: 0.2rem 0.7rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          text-transform: uppercase;
        }
        .trend-article-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .trend-article-excerpt {
          font-size: 1.1rem;
          color: #475569;
          margin-bottom: 2rem;
        }
        .trend-article-body {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #1e293b;
        }
        .trend-article-body :global(h2) {
          margin-top: 2.2rem;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .trend-article-body :global(h3) {
          margin-top: 1.5rem;
          font-weight: 700;
          font-size: 1.2rem;
        }
        .trend-article-body :global(table) {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }
        .trend-article-body :global(th),
        .trend-article-body :global(td) {
          border: 1px solid #e2e8f0;
          padding: 0.6rem 0.8rem;
          text-align: left;
        }
        .trend-article-body :global(blockquote) {
          border-left: 4px solid #2563eb;
          padding-left: 1rem;
          color: #475569;
          font-style: italic;
          margin: 1.5rem 0;
        }
        .trend-sources,
        .trend-related {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
        }
      `}</style>
    </CustomLayout>
  );
}
