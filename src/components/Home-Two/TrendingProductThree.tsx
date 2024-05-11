import OfferAndBannerSlider from "@/sheardComponent/elements/sliders/OfferAndBannerSlider";
import Link from "next/link";
import React from "react";

const TrendingProductThree = () => {
  return (
    <>
      <div className="Trending-product-area hm2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12 pb-15">
              <div className="section-title pt-60">
                <h3 className="font-pt light-black-color2 pb-1 pr-120">
                  Trending Our Product
                </h3>
                <p className="light-black-color7 font300">
                  Perspiciatis undeous omniists
                </p>
                <Link
                  href="/shop"
                  className="web-btn h2-web-btn d-inline-block text-capitalize light-black-color2 rounded-0 gray-bg5 position-relative over-hidden pl-35 pr-35 mt-20 ptb-12"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9  col-lg-8  col-md-12  col-sm-12 col-12 pl-0">
              <div className="row home2-handpick-items-active  pt-20 mlr-1 ml--30">
                <OfferAndBannerSlider start={16} end={22} />
              </div>
            </div>
          </div>
          <div className="row free-shopping-area h2-light-black-bg3  mlr-1 mt-30">
            <div className="col-xxl-8 col-xl-10 col-lg-12  col-md-12  col-sm-12 col-12 offset-xxl-2 offset-xl-1">
              <div className="service-area pt-10">
                <div className="row">
                  <div className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12 d-md-flex justify-content-center align-items-center">
                    <div className="d-inline-block">
                      <div className="single-service d-flex justify-content-center  align-items-center mb-10">
                        <div className="s-ser-icon mr-10">
                          <span className="h2-theme-color">
                            <i className="fal fa-shipping-fast"></i>
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0 font600 text-uppercase">
                            30 Days To Money Back
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12 d-md-flex justify-content-center align-items-center">
                    <div className="d-inline-block">
                      <div className="single-service d-flex justify-content-center  align-items-center mb-10">
                        <div className="s-ser-icon mr-10">
                          <span className="h2-theme-color">
                            <i className="fal fa-tram"></i>
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0 font600 text-uppercase">
                            Against 99% of bacteria
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4  col-lg-4  col-md-4  col-sm-12 col-12 d-md-flex justify-content-center align-items-center">
                    <div className="d-inline-block">
                      <div className="single-service d-flex justify-content-center  align-items-center mb-10">
                        <div className="s-ser-icon mr-10">
                          <span className="h2-theme-color">
                            <i className="fal fa-gift"></i>
                          </span>
                        </div>
                        <div className="s-ser-content">
                          <p className="mb-0 font600 text-uppercase">
                            Shipping in 24 Hours
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingProductThree;
