import Image from "next/image";
import React from "react";
import bannerOne from "../../../public/assets/images/banner/home2/sub-banner1.jpg";
import bannerTwo from "../../../public/assets/images/banner/home2/sub-banner2.jpg";
import Link from "next/link";
const HomeTwoBanner = () => {
  return (
    <>
      <div className="banner-area mt-80 hm2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 ">
              <div className="banner mb-30 transition-3 position-relative over-hidden">
                <Link href="/shop" className="d-block">
                  <Image
                    className="img-zoom transition-3 width100 h-100"
                    src={bannerOne}
                    alt="banner-img-one"
                  />
                </Link>
                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                  <span className="banner-sub-tittle banner-sub-tittle2 mt--4 d-block secondary-color font500">
                    Premium Quality Items
                  </span>
                  <h3 className="font500 pb-35 light-black-color2 font-pt">
                    <Link href="/shop-details">Wooden Brushes</Link>
                  </h3>
                  <p className="font300 pb-1 light-black-color2 font300">
                    Care of loved ones. Hand Cleaner.
                  </p>
                  <Link
                    href="/shop"
                    className="web-btn h2-theme-border1 d-inline-block text-capitalize white rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-12"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 ">
              <div className="banner mb-30 transition-3 position-relative over-hidden">
                <Link href="/shop" className="d-block">
                  <Image
                    className="img-zoom transition-3 width100 h-100"
                    src={bannerTwo}
                    alt="banner-img"
                  />
                </Link>
                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                  <span className="banner-sub-tittle mt--4 d-block secondary-color font500 text-white">
                    Get Upto 50% Flate
                  </span>
                  <h3 className="text-white font500 pb-35">
                    <Link href="/shop-details" className="text-white">
                      Face Mask Pro
                    </Link>
                  </h3>
                  <p className="text-white font300 pb-1">
                    Free Shipping on Order Over $99.
                  </p>
                  <Link
                    href="/shop"
                    className="web-btn h2-web-btn border-white01 d-inline-block text-capitalize white-bg light-black-color position-relative over-hidden pl-35 pr-35 ptb-12 rounded-0"
                  >
                    Buy Now
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

export default HomeTwoBanner;
