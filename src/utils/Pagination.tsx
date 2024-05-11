import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <>
      <ul className="pagination align-items-center justify-content-center">
        <li className="page-item">
          <Link className="page-link prev" href="#">
            <i className="fas fa-angle-left"></i>
            Prev
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            4
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link next" href="#">
            Next <i className="fas fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
