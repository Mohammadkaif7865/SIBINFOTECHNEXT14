import * as CONSTANTS from "../../constants/constants";
// import { Link } from "react-router-dom";
import Link from "next/link";

import { compareAsc, format } from "date-fns";

function BlogCard(props) {
  const { blog } = props;
  if (!blog) {
    return <div>Loading...</div>; // or return null if you prefer not to render anything
  }
  return (
    <Link href={"/blog/" +blog.slug}>
      <div className="blogItems">
        <div className="blogImg">
          <img
            src={`${CONSTANTS.BACKEND_URL + blog.image}`}
            className="img-fluid"
            alt={blog.image_alt}
          />
        </div>
        <div className="dividerBlog"></div>
        <div className="blogTitle">
          <h4 className="small_heading fontHeading fontWeight600">
            {blog.name}
          </h4>
          <div className="dateTime">
            <p>{format(new Date(blog.bdate), "MMM dd, yyyy")}</p>
            <button className="blogIcon">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
