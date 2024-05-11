import React from "react";
import Link from "next/link";
import bannerImg from "../../public/assets/images/bg/purchased-item-bg.jpg";
interface propsType {
  pageTitle: string;
}

const Breadcrumb = ({ pageTitle }: propsType) => {
  return (
    <div className="slider-area over-hidden">
      <div
        className="d-flex align-items-center"
      // style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <div className="page-title mt-10 text-center">
                <h2 className="text-capitalize font600 mb-10"> {pageTitle} </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center bg-transparent">
                    <li className="breadcrumb-item">
                      <Link className="primary-color" href="/">
                        Asosiy sahifa
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-capitalize"
                      aria-current="page"
                    >
                      {pageTitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
