import Link from "next/link";
import { useRouter } from "next/router";
import { IoMdHome } from "react-icons/io";
import { FaAnglesRight, FaChevronRight } from "react-icons/fa6";

const Breadcrumb = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter((segment) => segment);

  return (
    <nav className="bgGrey d-flex justify-content-center" aria-label="breadcrumb ">
      <ol className="breadcrumb containerFull ">
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const segmentName = segment
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li
              key={index}
              className="breadcrumb-item py-2 d-flex text_truncate align-items-center fontHeading"
            >
              {/* <IoMdHome className="fs-4" /> */}
              Home
              <FaAnglesRight  className="ms-1"  style={{
                fontSize:"12px",
              }}/>
              <Link href={href} className="ms-1 text_red fontWeight600 text_truncate">
                {/* {segment.charAt(0).toUpperCase() + segment.slice(1)} */}
                {segmentName}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
