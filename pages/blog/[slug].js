import React, { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import axios from "axios";
import * as CONSTANTS from "../../constants/constants";
import Head from "next/head";
import { CustomLayout } from "@/comps/CustomLayout";

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
    const blogs = resBlogs.data.blogs;
    const blogSections = resBlog.data.blog_sections;
    const blogFaqs = resBlog.data.blog_faqs;

    console.log(blogSections);

    return {
      props: {
        blog,
        blogs,
        blogSections,
        blogFaqs,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}

function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="blog-faqs mt-5">
      <h3 className="mb-4">Frequently Asked Questions</h3>
      <div className="faq-accordion">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item border-shadow">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-100 text-start fw-semibold fs-5 d-flex justify-content-between"
            >
              <span className="faq-item-title">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 faq-item-description">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SingleBlog({ blog, blogs, blogSections, blogFaqs }) {
  const selectedcategory = blog.length > 0 ? blog[0]?.category_id : null;

  return (
    <div>
      {blog && (
        <CustomLayout>
          <Head>
            <title>{blog[0].meta_title}</title>
            <meta name="keywords" content={blog[0].meta_keywords} />
            <meta name="description" content={blog[0].meta_description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://www.sibinfotech.com/blog/${blog[0].slug}`} />
            <meta property="og:title" content={blog[0].meta_title} />
            <meta property="og:description" content={blog[0].meta_description} />
            <meta property="og:image" content={`${CONSTANTS.BACKEND_URL + blog[0].image}`} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={`https://www.sibinfotech.com/blog/${blog[0].slug}`} />
            <meta property="twitter:title" content={blog[0].meta_title} />
            <meta property="twitter:description" content={blog[0].meta_description} />
            <meta property="twitter:image" content={`${CONSTANTS.BACKEND_URL + blog[0].image}`} />
          </Head>

          {/* Banner Section */}
          <section
            id="single_blog"
            style={{
              backgroundColor: blog[0].banner_background_color || "#f8f9fa",
              color: blog[0].banner_text_color || "#000",
              padding: "40px 0",
            }}
          >
            <div className="containerFull">
              <div className="singleBlogInners">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="rightSingleBlog">
                      <div className="inlineAdded">
                        <ul>
                          <li>{format(new Date(blog[0].bdate), "MMM dd, yyyy")}</li>
                        </ul>
                      </div>
                      <h1 className="regular_heading fontHeading fontWeight600">{blog[0].name}</h1>
                      <div className="inlineAdded">
                        <ul>
                          <li><i className="fa fa-user-circle"></i> by Webdesk</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="singleBlogLeftImg">
                      <img
                        src={`${CONSTANTS.BACKEND_URL + blog[0].banner_image}`}
                        alt={blog[0].image_alt}
                        className="img-fluid br-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumb */}
          <section className="pt-4 pb-4">
            <div className="containerFull">
              <p className="breadcrum-text">
                Home <i className="fa-solid fa-angle-right"></i> Blog{" "}
                <i className="fa-solid fa-angle-right"></i>{" "}
                <span className="text_primary">{blog[0]?.name}</span>
              </p>
            </div>
          </section>

          {/* Content Section with Sidebar */}
          <section className="py-5">
            <div className="containerFull">
              <div className="row">
                {/* Sidebar */}
                <div className="col-lg-3">
                  <div className="blog-sidebar">
                    <h5 className="mb-3">Blog Sections</h5>
                    <ul className="blog-sidebar list-unstyled border-shadow">
                      {blogSections.map((section) => (
                        <li key={section.id}>
                          <a href={`#section-${section.id}`}>{section.title}</a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <h5 className="mb-3">Recent posts</h5>
                      {blogs &&
                        blogs
                          .filter((blogItem) => blogItem.category_id === selectedcategory)
                          .slice(0, 10)
                          .map((blogItem, index) => (
                            <div key={index} className="inline_blog_card border-shadow mb-3">
                              <Link href={"/blog/" + blogItem.slug}>
                                <div className="img">
                                  <img
                                    src={`${CONSTANTS.BACKEND_URL + blogItem.image}`}
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

                {/* Main Content */}
                <div className="col-lg-9">

                  <div className="mb-3">
                      <img
                        src={`${CONSTANTS.BACKEND_URL + blog[0].image}`}
                        alt={blog[0].image_alt}
                        className="img-fluid br-5"
                      />
                    </div>

                  {/* Blog Description */}
                  <div
                    dangerouslySetInnerHTML={{ __html: blog[0].description }}
                    className="blogDescriptions mb-4"
                  ></div>

                  {/* Blog Sections */}
                  {blogSections && blogSections.length > 0 && blogSections.some(
                    section => section.title || section.description || section.media || section.grey_quote
                  ) && (
                    <>
                      {blogSections.map((section) => {
                        const sectionStyle = {};
                        if (section.section_bg_color) sectionStyle.background = section.section_bg_color;
                        if (section.section_border_color) sectionStyle.border = `1px solid ${section.section_border_color}`;

                        const greyQuoteStyle = {
                          fontStyle: "italic",
                          padding: "1rem"
                        };
                        if (section.grey_quote_bg_color) greyQuoteStyle.background = section.grey_quote_bg_color;
                        if (section.grey_quote_border_color) greyQuoteStyle.borderLeft = `4px solid ${section.grey_quote_border_color}`;

                        return (
                          <div
                            key={section.id}
                            id={`section-${section.id}`}
                            className="mb-4 blog_section border-shadow"
                            style={sectionStyle}
                          >
                            <h3 className="blog_section_item">{section.title}</h3>

                            <div className="blog_section_item">
                              {section.media_type === "image" && section.media && (
                                <img
                                  src={`${CONSTANTS.BACKEND_URL + section.media}`}
                                  alt=""
                                  className="img-fluid br-5 mb-3"
                                />
                              )}
                            </div>

                            <div
                              className="blog_section_item"
                              dangerouslySetInnerHTML={{ __html: section.description }}
                            />

                            {section.grey_quote && (
                              <div
                                className="blog_section_item blog_grey_quote" style={greyQuoteStyle}
                                dangerouslySetInnerHTML={{ __html: section.grey_quote }}
                              />
                            )}
                          </div>
                        );
                      })}
                    </>
                  )}


                  {/* FAQs */}
                  {blogFaqs && blogFaqs.length > 0 && blogFaqs.some(faq => faq.question || faq.answer) && (
                    <FaqAccordion faqs={blogFaqs} />
                  )}


                  {/* Action Section */}
                  {blog[0] && (blog[0].action_title || blog[0].action_description_1 || blog[0].action_btn_1_text) && (
                    <div className="action_tab my-5">
                      <div className="p-4 rounded" style={{ backgroundColor: "#e9f0ff" }}>
                        <h3 className="mb-4">{blog[0].action_title}</h3>

                        <div className="row">
                          <div className="col-md-6">
                            {blog[0].action_subtitle_1 && (
                              <p className="mt-2">{blog[0].action_subtitle_1}</p>
                            )}
                            <div
                              className="mb-3"
                              dangerouslySetInnerHTML={{ __html: blog[0].action_description_1 }}
                            />
                            {blog[0].action_btn_1_text && blog[0].action_btn_1_link && (
                              <a
                                href={blog[0].action_btn_1_link}
                                className="btn btn-primary me-2"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {blog[0].action_btn_1_text}
                              </a>
                            )}
                          </div>
                          <div className="col-md-6">

                            {blog[0].action_subtitle_2 && (
                              <p className="mt-2">{blog[0].action_subtitle_2}</p>
                            )}

                            <div
                              className="mb-3"
                              dangerouslySetInnerHTML={{ __html: blog[0].action_description_2 }}
                            />
                            {blog[0].action_btn_2_text && blog[0].action_btn_2_link && (
                              <a
                                href={blog[0].action_btn_2_link}
                                className="btn btn-outline-dark"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {blog[0].action_btn_2_text}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}


                </div>
              </div>
            </div>
          </section>
        </CustomLayout>
      )}
    </div>
  );
}

export default SingleBlog;
