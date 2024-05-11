import Link from "next/link";
import React from "react";

const BlogPagination = () => {
  return (
    <>
      <div className="pagination-area mt-20 mb-120 over-hidden">
        <div className="container position-relative">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <nav
                className="pagination-page"
                aria-label="Page navigation example"
              >
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPagination;
