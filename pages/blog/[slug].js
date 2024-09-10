// pages/[slug].js
import React from "react";

import Link from "next/link";
import { format } from "date-fns";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import Head from "next/head";

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  try {
    const resBlog = await axios.get(
      `${CONSTANTS.API_URL}blog/single/${slug}?slug=1`,
      { headers }
    );
    const resBlogs = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, {
      headers,
    });

    const blog = resBlog.data.blog;
    // const blog = "";
    const blogs = resBlogs.data.blogs;

    // console.log(resBlogs.data.blogs)

    return {
      props: {
        blog,
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

function SingleBlog({ blog, blogs }) {
  const createMarkup = () => {
    return { __html: blog[0].description };
  };

  const selectedcategory = blog.length > 0 ? blog[0]?.category_id : null;

  return (
    <div>
      {console.log(blogs)}
   
      {blog && (
        <>
          <Head>
            <title>{blog[0].meta_title}</title>
            <meta name="keywords" content={blog[0].meta_keywords} />
            <meta name="description" content={blog[0].meta_description} />
            <meta property="og:title" content={blog[0].meta_keywords} />
            <meta
              property="og:description"
              content={blog[0].meta_description}
            />
            <meta
              property="og:image"
              content={`${CONSTANTS.BACKEND_URL + blog[0].image}`}
            />
            <meta
              property="og:url"
              content={`https://www.sibinfotech.com/blog/${blog[0].slug}`}
            />
            <meta name="twitter:title" content={blog[0].meta_keywords} />
            <meta
              name="twitter:description"
              content={blog[0].meta_description}
            />
            <meta
              name="twitter:image"
              content={`${CONSTANTS.BACKEND_URL + blog[0].image}`}
            />
            <meta
              name="twitter:url"
              content={`https://www.sibinfotech.com/blog/${blog[0].slug}`}
            />
            {/* <link
              rel="canonical"
              href={`https://www.sibinfotech.com/blog/${blog[0].slug}`}
            /> */}
          </Head>
          <section id="single_blog" className="bgGrey">
            <div className="containerFull">
              <div className="singleBlogInners">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="singleBlogLeftImg">
                      <img
                        src={`${CONSTANTS.BACKEND_URL + blog[0].image}`}
                        alt={blog[0].image_alt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="rightSingleBlog">
                      <h1 className="regular_heading fontHeading fontWeight600">
                        {blog[0].name}
                      </h1>
                      <div className="inlineAdded">
                        <ul>
                          <li>
                            <i className="fa fa-user-circle"></i> by Webdesk
                          </li>
                          <li>
                            {format(new Date(blog[0].bdate), "MMM dd, yyyy")}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-2">
            <div className="containerFull ">
              <p className="breadcrum-text">
                Home  <i class="fa-solid fa-angle-right"></i> Blog <i class="fa-solid fa-angle-right"></i> <span className="text_primary">{blog[0]?.name}</span>
              </p>
            </div>
            <div className="containerFull mt-5">
              <div className="row">
                <div className="col-lg-8">
                  <div
                    dangerouslySetInnerHTML={createMarkup()}
                    className="blogDescriptions"
                  ></div>
                </div>
                <div className="col-lg-4">
                  <div className="blog_sidebar">
                    <p className="title">Recent posts</p>
                    {blogs &&
                      blogs
                        .filter(
                          (blog) => blog.category_id === selectedcategory
                        ).slice(0,10)
                        .map((blogItem, index) => (
                          <div key={index} className="inline_blog_card">
                            {console.log(blogItem)}
                            <Link href={"/blog/" + blogItem.slug}>
                              <div className="img">
                                <img
                                  src={`${
                                    CONSTANTS.BACKEND_URL + blogItem.image
                                  }`}
                                  alt={blogItem.image_alt}
                                  className="img-fluid"
                                />
                              </div>
                              <div className="content">
                                <p className="title">{blogItem.name}</p>
                              </div>
                            </Link>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default SingleBlog;
