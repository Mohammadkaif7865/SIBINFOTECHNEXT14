import React, { useContext, useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useParams} from 'react-router-dom';
import { useRouter } from "next/router";
import Link from "next/link";
import { compareAsc, format } from 'date-fns'

import axios from "axios";
import * as CONSTANTS from "../../constants/constants";

export default function SingleBlog() {

  const router = useRouter();
  const { slug } = router.query;
  console.log("SDFSDFGSDFGSDGSDg", slug);
  const [blog, setBlog] = useState();
  const [blogs, setBlogs] = useState();

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': CONSTANTS.API_TOKEN
  }

  const getBlog = async () => {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/single/${slug}?slug=1`, {
        headers: headers
      }).catch((err) => console.log(err));
      const data = await res.data;
      if(data.blog) {
        setBlog(data.blog);
      }
  };

  const getBlogs = async () => {
    const res = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
        headers: headers
      }).catch((err) => console.log(err));
      const data = await res.data;
      if(data.blogs) {
        setBlogs(data.blogs);
      }
  };

  useEffect(() => {
    getBlog();
    getBlogs();
  }, [router, slug]);

  const createMarkup = () => {
    return { __html: blog[0].description };
  }

  return (
    <div>
      {blog ? (
        <>
        <Helmet>
            <title>{blog[0].meta_title}</title>
            <meta name="keywords" content={blog[0].meta_keywords}/>
            <meta name="description" content={blog[0].meta_description}/>
            <meta property="og:title" content={blog[0].meta_keywords} />
            <meta property="og:description" content={blog[0].meta_description} />
            <meta property="og:image" content={`${CONSTANTS.BACKEND_URL+blog[0].image}`}/>
            <meta property="og:url" content={`https://www.sibinfotech.com/blog/${blog[0].slug}`} />
            <meta name="twitter:title" content={blog[0].meta_keywords} />
            <meta name="twitter:description" content={blog[0].meta_description}/>
            <meta name="twitter:image" content={`${CONSTANTS.BACKEND_URL+blog[0].image}`}/>
            <meta name="twitter:url" content={`https://www.sibinfotech.com/blog/${blog[0].slug}`} />
            <link rel="canonical" href={`https://www.sibinfotech.com/blog/${blog[0].slug}`}/>
        </Helmet>
        <section id="single_blog" className="bgGrey">
            <div className="containerFull">
                <div className="singleBlogInners">
                    <div className="row align-items-center">
                        <div className="col-lg-7"> 
                            <div className="singleBlogLeftImg">
                                <img src={`${CONSTANTS.BACKEND_URL+blog[0].image}`} alt={blog[0].image_alt} className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="rightSingleBlog">
                                <h1 className="regular_heading fontHeading fontWeight600">{blog[0].name}</h1>
                                <div className="inlineAdded">
                                    <ul>
                                        <li><i className="fa fa-user-circle"></i> by Webdesk</li>
                                        <li>{format(new Date(blog[0].bdate), 'MMM dd, yyyy')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containerFull">
                <div className="row">
                    <div className="col-lg-8">
                        <div dangerouslySetInnerHTML={createMarkup()} className="blogDescriptions"></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_sidebar">
                            <p className="title">Recent posts</p>

                            {blogs && blogs.map((blog, index) => {
                            return <div key={index} className="inline_blog_card">
                                <Link href={"/blog/"+blog.slug}>
                                    <div className="img">
                                        <img src={`${CONSTANTS.BACKEND_URL+blog.image}`} alt={blog.image_alt} className="img-fluid"/>
                                    </div>
                                    <div className="content">
                                        <p className="title">{blog.name}</p>
                                    </div>
                                </Link>
                            </div>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
      ) : (<></>) }
    </div>
  )
}
