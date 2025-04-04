import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { CustomLayout } from "@/comps/CustomLayout";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(12);

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  const getBlogs = async () => {
    try {
      const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
        headers: headers,
      });
      if (res.data.blogs) {
        setBlogs(res.data.blogs);
        // console.log(res.data.blogs)
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
      <meta property="og:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.sibinfotech.com/blog" />
      <meta property="twitter:title" content="SIB Infotech Blog | Latest SEO Insights and Marketing Trends" />
      <meta property="twitter:description" content="Explore the blogs by SIB Infotech for expert insights, SEO trends, and digital marketing solutions. Stay updated with our latest articles and industry news." />
      <meta property="twitter:image" content="https://www.sibinfotech.com/assets/og/sib-infotech.png" />
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
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote <h2 className="d-none">Get a Quote</h2>
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
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
