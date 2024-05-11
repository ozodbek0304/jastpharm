import Link from "next/link";
import React from "react";
import thumbImg from "../../../public/assets/images/product/product10.jpg";
import Image from "next/image";
const MostPurchesHomeThree = () => {
  return (
    <>
      <div
        className="most-purchased-item-area most-purchased-item-bg2 hm3 over-hidden pt-100 pb-130"
        data-background="images/bg/purchased-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-10  col-md-12  col-sm-12 col-12 offset-xxl-3 offset-xl-3 offset-lg-2">
              <div
                className="most-purchased-item-wrapper wow fadeInRight animated"
                data-wow-duration="1.5s"
              >
                <h3 className="font-pt text-white pb-1">Most Purchased Item</h3>

                <div className="pl-15 pr-15">
                  <div className="row most-purchased-item-active  white-bg mt-25">
                    <div className="col-xl-4 col-lg-3  col-md-6  col-sm-6 col-12 plr-14">
                      <div className="single-product mb-10">
                        <div className="single-product-img position-relative over-hidden">
                          <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                            <span className="white text-uppercase d-block font500">
                              -20%
                            </span>
                          </div>
                          <div className="most-purchased-item-img  position-relative text-center">
                            <Link
                              className="position-relative d-block"
                              href="/shop-details"
                            >
                              <Image src={thumbImg} alt="product" />
                            </Link>
                            <div className="countdown-time d-flex justify-content-center position-absolute width100">
                              <div className="timer">
                                <div
                                  className="d-flex"
                                  data-countdown="2021/4/11"
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="single-product-info text-center transition-3">
                            <div className="rating rating-shop d-flex justify-content-center">
                              <ul className="d-flex mr-2">
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-star"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <h6 className="light-black-color2">
                              <Link href="/shop-details">
                                Surgical Face Disinfection
                              </Link>
                            </h6>
                            <ul className="single-product-price d-flex mt-2 transition-3 justify-content-center">
                              <li>
                                <span className="pr-2 d-inline-block">
                                  <del>$96.00</del>
                                </span>
                                <span className="theme-color d-inline-block font600">
                                  $59.66
                                </span>
                              </li>
                            </ul>
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
      </div>
    </>
  );
};

export default MostPurchesHomeThree;
