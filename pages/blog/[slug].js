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
          <div key={faq.id} className="faq-item border-bottom mb-3 pb-3">
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

function SingleBlog({ blog, blogs }) {
  const selectedcategory = blog.length > 0 ? blog[0]?.category_id : null;

  const blogSections = [
    {
      id: 1,
      blog_id: blog[0].id,
      title: "Introduction to SEO",
      media: "/assets/images/sib-mumbai-office.jpg",
      media_type: "image",
      description: "<p>SEO is critical for visibility...</p>",
      grey_quote: "SEO is not about tricking Google, it's about partnering with it.",
      order: 1,
      publish: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      blog_id: blog[0].id,
      title: "Benefits of SEO",
      media: null,
      media_type: "none",
      description: "<p>SEO helps improve your rankings organically.</p>",
      grey_quote: null,
      order: 2,
      publish: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];

  const blogFaqs = [
    {
      id: 1,
      blog_id: blog[0].id,
      question: "What is SEO?",
      answer: "SEO stands for Search Engine Optimization...",
      order: 1,
      publish: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      id: 2,
      blog_id: blog[0].id,
      question: "Why is SEO important for businesses?",
      answer: "It helps businesses get found on search engines...",
      order: 2,
      publish: 1,
      createdAt: new Date(),
      updatedAt: null,
    },
  ];

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
                        src={`${CONSTANTS.BACKEND_URL + blog[0].image}`}
                        alt={blog[0].image_alt}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Breadcrumb */}
          <section className="pt-2">
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
                    <h4>Blog Sections</h4>
                    <ul className="list-unstyled">
                      {blogSections.map((section) => (
                        <li key={section.id}>
                          <a href={`#section-${section.id}`}>{section.title}</a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5">
                      <h5>Recent posts</h5>
                      {blogs &&
                        blogs
                          .filter((blogItem) => blogItem.category_id === selectedcategory)
                          .slice(0, 10)
                          .map((blogItem, index) => (
                            <div key={index} className="inline_blog_card mb-3">
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
                  {/* Blog Description */}
                  <div
                    dangerouslySetInnerHTML={{ __html: blog[0].description }}
                    className="blogDescriptions mb-5"
                  ></div>

                  {/* Blog Sections */}
                  {blogSections.map((section) => (
                    <div key={section.id} id={`section-${section.id}`} className="mb-5 blog_section">
                      <h3 className="blog_section_item">{section.title}</h3>
                      <div className="blog_section_item">
                        {section.media_type === "image" && section.media && (
                          <img src={section.media} alt="" className="img-fluid mb-3" />
                        )}
                      </div>
                      <div className="blog_section_item" dangerouslySetInnerHTML={{ __html: section.description }} />
                      {section.grey_quote && (
                        <div className="p-3 my-3 blog_section_item" style={{ background: "#f0f0f0", fontStyle: "italic" }}>
                          “{section.grey_quote}”
                        </div>
                      )}
                    </div>
                  ))}

                  {/* FAQs */}
                  <FaqAccordion faqs={blogFaqs} />
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
