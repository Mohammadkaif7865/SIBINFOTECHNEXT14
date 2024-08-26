import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { PaginationControl } from "react-bootstrap-pagination-control";

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
        console.log(res.data.blogs)
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

  return (
    <div>
      <Head>
        <title>Best Web Designing & SEO Company in Mumbai India</title>
        <meta name="keywords" content="contact" />
        <meta name="description" content="contact" />
      </Head>
      <div className="innerWebDesign">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="innerBannerTitle venter">
                <h3 className="heading fontWeight700 text-center text-white">
                  All Posts
                </h3>
                <div className="mt-4 text-center">
                  <Link href="#requestQuote" className="btnThemeRed me-3">
                    <i className="fa-solid fa-comment-dots"></i> Get a Quote
                  </Link>
                  <Link href="#" className="btnThemewhiteBorder">
                    <i className="fa-solid fa-circle-question"></i> Ask a
                    question
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
    </div>
  );
}
