import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// import {Link} from 'react-router-dom';
import Link from 'next/link';

import axios from "axios";
import * as CONSTANTS from "../../constants/constants";

import BlogCard from "./BlogCard";

export default function Blog() {

  const [blogs, setBlogs] = useState();

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': CONSTANTS.API_TOKEN
  }

  const getBlogs = async () => {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
        headers: headers
      }).catch((err) => console.log(err));
     if (res) {
      const data = res.data;
      if(data.blogs) {
        setBlogs(data.blogs);
      }
     }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
        <Helmet>
            <title>Best Web Designing & SEO Company in Mumbai India</title>
            <meta name="keywords" content="contact"/>
            <meta name="description" content="contact"/>
        </Helmet>
        <div className="innerWebDesign">
            <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                  <div className="innerBannerTitle venter">
                    <h3 className="heading fontWeight700 text-center text-white">All Posts</h3>
                    <div className="mt-4 text-center">
                      <Link href="#requestQuote" className="btnThemeRed me-3"><i class="fa-solid fa-comment-dots"></i>  Get a Quote</Link>
                      <Link href="#" className="btnThemewhiteBorder"><i className="fa-solid fa-circle-question"></i>  Ask a question</Link>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        <section>
           <div className="containerFull">
            <div className="row">
              {blogs && blogs.map((blog, index) => {
                if (index % 2 === 0) {
                  return <div key={blog.id} className="col-lg-4">
                    <BlogCard blog={blog} />
                  </div>;
                }
                return <div key={blog.id} className="col-lg-4">
                  <BlogCard blog={blog} />
                </div>;
              })}
            </div>
           </div>
        </section>
    </div>
  )
}
