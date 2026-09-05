import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import BlogCard from "@/comps/BlogListCard";
import Link from "next/link";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { CustomLayout } from "@/comps/CustomLayout";
import { listArticles } from "@/lib/trendsDb";

export async function getServerSideProps() {
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  let remoteBlogs = [];
  try {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
      headers: headers,
      timeout: 8000,
    });
    remoteBlogs = res.data?.blogs || [];
  } catch (error) {
    console.error("Error fetching blogs from API:", error);
  }

  // Load published articles from trendsDb
  let localBlogs = [];
  try {
    const published = listArticles({ status: "Published" });
    localBlogs = (published?.items || []).map((a) => ({
      id: a.id,
      name: a.title,
      slug: a.slug,
      description: a.excerpt || a.metaDescription,
      image: a.featuredImage || "/assets/og/sib-infotech.webp",
      image_alt: a.featuredImageAlt || a.title,
      bdate: a.publishDate || a.createdAt,
      createdAt: a.createdAt,
      category_name: a.category || "Digital Marketing",
    }));
  } catch (err) {
    console.error("Error loading local trends articles:", err);
  }

  // Merge and deduplicate by slug, sort by date descending
  const blogMap = new Map();
  localBlogs.forEach((b) => blogMap.set(b.slug, b));
  remoteBlogs.forEach((b) => {
    if (!blogMap.has(b.slug)) {
      blogMap.set(b.slug, b);
    }
  });

  const mergedBlogs = Array.from(blogMap.values()).sort((a, b) => {
    const dateA = new Date(a.bdate || a.createdAt || 0).getTime();
    const dateB = new Date(b.bdate || b.createdAt || 0).getTime();
    return dateB - dateA;
  });

  return {
    props: {
      blogs: mergedBlogs,
    },
  };
}

export default function Blog({ blogs }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(12);

  // // Remove unwanted "Explore More" / services section inserted by layout/scripts
  // // This runs only on the client and affects the blog listing page only.
  // useEffect(() => {
  //   if (typeof window === "undefined") return;
  //   try {
  //     const headings = document.querySelectorAll("h1,h2,h3,h4,h5");
  //     headings.forEach((h) => {
  //       const text = (h.innerText || "").toLowerCase();
  //       if (text.includes("explore more") || text.includes("explore more seo")) {
  //         const section = h.closest("section") || h.parentElement;
  //         if (section) section.remove();
  //       }
  //     });
  //   } catch (err) {
  //     // fail silently
  //     console.warn("remove services section error", err);
  //   }
  // }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const metaTags = (
    <>
      <title>SIB Infotech Blog | Latest SEO Insights and Marketing Trends</title>
      <meta name="description" content="Explore the blogs by SIB Infotech for expert insights, SEO trends, and digital marketing solutions. Stay updated with our latest articles and industry news." />
      <meta name="keywords" content="All Posts" />
   

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.sibinfotech.com/blog" />
      <meta property="og:title" content="SIB Infotech Blog | Latest SEO Insights and Marketing Trends" />
      <meta property="og:description" content="Explore the blogs by SIB Infotech for expert insights, SEO trends, and digital marketing solutions. Stay updated with our latest articles and industry news." />
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.webp" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/blog" />
      <meta property="twitter:title" content="SIB Infotech Blog | Latest SEO Insights and Marketing Trends" />
      <meta property="twitter:description" content="Explore the blogs by SIB Infotech for expert insights, SEO trends, and digital marketing solutions. Stay updated with our latest articles and industry news." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.webp" />
    </>
  );
  return (
    <CustomLayout meta={metaTags}>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="innerBannerTitle venter">
                <h1 className="heading fontWeight700 text-center text-white">
                  All Posts
                </h1>
                <div className="mt-4 text-center">
                  <Link href="/contact-us" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote <h2 className="d-none">Get a Quote</h2>
                  </Link>
                  <Link href="/contact-us" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i>  Ask a
                    question <h3 className="d-none"> Ask a
                    question</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="containerFull">
          <div className="row">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="col-lg-4">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
         <div className="mt-4 d-flex justify-content-center">
            <PaginationControl
            page={currentPage}
            between={3}
            total={totalPages}
            limit={1}
            changePage={(page) => {
              setCurrentPage(page);
            }}
            ellipsis={1}
          />
          </div>
        </div>
      </section>

      
    </CustomLayout>
  );
}
