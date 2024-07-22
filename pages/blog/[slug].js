// pages/[slug].js
import React from "react";
import { Helmet } from 'react-helmet-async';
import Link from "next/link";
import { format } from 'date-fns'
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";

export async function getServerSideProps(context) {
    const { slug } = context.query;

    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': CONSTANTS.API_TOKEN
    };

    try {
        const resBlog = await axios.get(`${CONSTANTS.API_URL}blog/single/${slug}?slug=1`, { headers });
        const resBlogs = await axios.get(`${CONSTANTS.API_URL}blog/all?publish=1`, { headers });

        const blog = resBlog.data.blog;
        const blogs = resBlogs.data.blogs;

        return {
            props: {
                blog,
                blogs
            }
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

    return (
        <div>
            {blog && (
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
                                        {blogs && blogs.map((blogItem, index) => (
                                            <div key={index} className="inline_blog_card">
                                                <Link href={"/blog/"+blogItem.slug}>
                                                    <div className="img">
                                                        <img src={`${CONSTANTS.BACKEND_URL+blogItem.image}`} alt={blogItem.image_alt} className="img-fluid"/>
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
