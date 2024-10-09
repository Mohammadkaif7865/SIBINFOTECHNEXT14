import Link from "next/link";
import { FaAnglesRight, FaChevronRight } from "react-icons/fa6";

const Breadcrumb = ({ Pagetitle }) => {
  return (
    <nav
      className="bgGrey d-flex justify-content-center"
      aria-label="breadcrumb "
    >
      <ol className="breadcrumb containerFull ">
        <li className="breadcrumb-item py-2 fontWeight600 d-flex text_truncate align-items-center fontHeading">
          <Link className="text-black" href={"/"}>
            Home
          </Link>

          <FaAnglesRight
            className="ms-1"
            style={{
              fontSize: "12px",
            }}
          />
          <p className="ms-1 text_red fontWeight600 text_truncate">
            {Pagetitle}
          </p>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
