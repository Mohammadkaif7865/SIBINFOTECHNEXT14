import React, { useEffect, useState } from "react";
import * as CONSTANTS from "../../constants/constants";
import axios from "axios";
import BlogCard from "../BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const headers = {
    "Content-Type": "multipart/form-data",
    Authorization: CONSTANTS.API_TOKEN,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${CONSTANTS.API_URL}blog/all?publish=1&limit=3`,
          { headers: headers }
        );
        setBlogs(res?.data?.blogs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  // console.log(blogs);

  return (
    <section className="bgGrey">
      <div className="containerFull">
        <h5 className="text-center  fontWeight600">Our Blogs</h5>
        <h4 className="large_heading2 mt-4 text-center mb-3 fontWeight300 text_red">
           <span className="fontWeight600">Digital Marketing Learnings</span>
        </h4>
        <div className="row mt-lg-5">
          {blogs?.map((blog, index) => {
            return (
              <div key={blog.id} className="col-lg-4">
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
