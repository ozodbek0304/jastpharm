import React from "react";
import bgImg from "../../../public/assets/images/bg/slider-404.jpg";
import Link from "next/link";
const Error = () => {
  return (
    <>
      <div className="slider-area over-hidden">
        <div
          className="single-page not-found-page-height d-flex align-items-center justify-content-center"
          data-background="images/bg/slider-404.jpg"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="page-content text-center">
                  <h2 className="mt--45 font-pt">404</h2>
                  <h3 className="text-dark dark-black-color pb-15 font-pt">
                    Page Not Found.
                  </h3>
                  <h6 className="text-dark">
                    Sorry for the inconvenience. Go to our homepage or check out
                    our latest collections
                  </h6>
                  <Link
                    href="/"
                    className="web-btn h2-theme-border1 d-inline-block text-uppercase white rounded-0 font13 h2-theme-bg position-relative over-hidden pt-25 pb-25 pl-80 pr-80 mt-60"
                  >
                    Back to homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
