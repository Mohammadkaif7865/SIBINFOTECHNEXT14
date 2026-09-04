import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getRelatedInsights } from "@/constants/blogLinkMap";

/**
 * Renders links from a service page down to the blog posts that support it.
 *
 * Reads the current route and looks it up in SERVICE_BLOG_LINKS, so a page opts
 * in by rendering <RelatedInsights /> with no props. Renders nothing when the
 * route has no mapped posts, which makes it safe to drop into any page.
 */
const RelatedInsights = ({ title, subtitle }) => {
  const router = useRouter();
  const links = getRelatedInsights(router?.pathname);

  if (!links.length) return null;

  return (
    <section className="py-5">
      <div className="containerFull">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-9">
            <h2 className="heading fontWeight600">
              {title || "Further "}
              <span className="text_red">Reading</span>
            </h2>
            <p className="customText mt-3">
              {subtitle ||
                "Guides from our team on the thinking behind this work."}
            </p>
          </div>
        </div>
        <div className="row g-3">
          {links.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.href}>
              <Link
                href={item.href}
                className="text-decoration-none"
                aria-label={item.title}
              >
                <div className="customCard bg-white h-100 p-3">
                  <h3 className="small_heading fontWeight600 mb-2">
                    <i className="fa-solid fa-arrow-right me-2 text_red"></i>
                    {item.title}
                  </h3>
                  <p className="customText mb-0">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedInsights;
