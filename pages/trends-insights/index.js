// pages/trends-insights/index.js
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { CustomLayout } from "@/comps/CustomLayout";
import { listArticles } from "@/lib/trendsDb";

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/blog",
      permanent: true,
    },
  };
}

export default function TrendsInsightsIndex({ articles }) {
  const metaTags = (
    <>
      <title>AI, SEO & Digital Marketing Trends & Insights | SIB Infotech</title>
      <meta
        name="description"
        content="Fresh, researched insights on SEO, Google updates, AI search, GEO/AEO and digital marketing trends from SIB Infotech."
      />
    </>
  );

  return (
    <CustomLayout meta={metaTags}>
      <div className="container py-5">
        <h1 className="fw-bold mb-4">AI & Digital Marketing Insights</h1>
        {articles.length === 0 && (
          <p className="text-muted">No insights published yet. Check back soon.</p>
        )}
        <div className="row g-4">
          {articles.map((a) => (
            <div className="col-md-6 col-lg-4" key={a.id}>
              <Link href={`/trends-insights/${a.slug}`} className="text-decoration-none">
                <div className="trend-list-card">
                  {a.category && <span className="trend-list-badge">{a.category}</span>}
                  <h2>{a.title}</h2>
                  <p>{a.excerpt}</p>
                  {a.publishDate && (
                    <span className="trend-list-date">{format(new Date(a.publishDate), "MMM d, yyyy")}</span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .trend-list-card {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 1.5rem;
          height: 100%;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .trend-list-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .trend-list-badge {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
          margin-bottom: 0.6rem;
        }
        .trend-list-card h2 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
        }
        .trend-list-card p {
          color: #64748b;
          font-size: 0.9rem;
          margin-bottom: 0.75rem;
        }
        .trend-list-date {
          font-size: 0.8rem;
          color: #94a3b8;
        }
      `}</style>
    </CustomLayout>
  );
}
