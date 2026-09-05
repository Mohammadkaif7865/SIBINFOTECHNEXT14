import Link from "next/link";
import * as CONSTANTS from "../constants/constants";
import { format } from "date-fns";
import Image from "next/image";
// import { compareAsc, format } from 'date-fns'

function BlogCard(props) {
  const { blog } = props;
  const imageUrl = blog?.image
    ? blog.image.startsWith("http://") ||
      blog.image.startsWith("https://") ||
      blog.image.startsWith("/")
      ? blog.image
      : `${CONSTANTS.BACKEND_URL}${blog.image}`
    : "https://www.sibinfotech.com/assets/og/sib-infotech.webp";

  return (
    <Link href={"/blog/" + (blog?.slug || "")}>
      <div className="blogItems">
        <div className="blogImg">
          <div
            className="position-relative"
            style={{
              minHeight: "195px",
            }}
          >
            <img
              src={imageUrl}
              className="img-fluid w-100 h-auto"
              alt={blog?.image_alt || blog?.name || "Blog image"}
            />
          </div>
        </div>
        <div className="dividerBlog"></div>
        <div className="blogTitle">
          <p className="small_heading blogHeader fontHeading fontWeight600">
            {blog?.name}
          </p>
          <div className="dateTime">
            <p>{blog?.bdate ? format(new Date(blog.bdate), "dd-MM-yyyy") : ""}</p>
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
