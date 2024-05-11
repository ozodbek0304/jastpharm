import React from "react";
import offerBanner from "../../../public/assets/images/banner/home3/off-banner1.jpg";
import patternBanner from "../../../public/assets/images/bg/Pattern-banner.png";
import Image from "next/image";
import Link from "next/link";
const FeaturedBanner = () => {
  return (
    <>
      <div className="off-banner-area pt-60 mb-30 hm3">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-4 col-xl-4  col-lg-4  col-md-12  col-sm-12 col-12 pb-15">
              <div className="section-title mb-50">
                <h3 className="font-pt light-black-color2 pb-1 pr-50 mb-40">
                  Effective & Reliable Protective Equipment 30% Flate
                </h3>
                <p className="light-black-color7 font300 pb-10">
                  Only this week 30% to 50% cheaper! Choose a color that really
                  matches your personality
                </p>
                <Link
                  data-animation="fadeInUp"
                  data-delay="1.7s"
                  href="/shop"
                  className="web-btn h3-web-btn  d-inline-block text-uppercase white h3-theme-bg position-relative over-hidden pl-30 pr-30 ptb-17 shop-collection-btn"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12 position-relative">
              <div
                className="off-banner-area mb-50 pl-40 wow fadeInRight animated pr-60"
                data-wow-duration="1.5s"
              >
                <Image
                  className="width100"
                  src={offerBanner}
                  alt="banner-img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="b-pattern2 position-absolute">
                <Image src={patternBanner} alt="pattern-banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBanner;
