import React from "react";
import thubmOne from "../../../public/assets/images/banner/home2/promo-banner.jpg";
import Image from "next/image";
import Link from "next/link";
const PromotionBanner = () => {
  return (
    <>
      <div className="promo-banner hm2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-  col-md-12  col-sm-12 col-12">
              <div className="promo-banner-wrapper position-relative">
                <Link href="/shop-details" className="d-block">
                  <Image style={{ width: "100%", height: "auto" }} src={thubmOne} alt="promotion-banner" />
                </Link>
                <div className="promo-banner-content position-absolute d-none d-lg-block">
                  <h2
                    data-animation="fadeInLeft"
                    data-delay="1s"
                    className="light-black-color2 mb-1 text-capitalize pb-30 font500 font-pt-demi"
                  >
                    All Equipment On{" "}
                    <span className="h2-theme-color">50% Discount</span>
                  </h2>
                  <p
                    className="light-black-color2 pb-25 mb-0 font300"
                    data-animation="fadeInLeft"
                    data-delay="1.5s"
                  >
                    Tell Your {`Brand’s`} Story Through Images
                  </p>
                  <Link
                    data-animation="fadeInUp"
                    data-delay="1.7s"
                    href="/shop"
                    className="web-btn h2-web-btn  d-inline-block text-capitalize light-black-color2 white-bg position-relative rounded-0 over-hidden pl-30 pr-30 ptb-17 mt-1"
                  >
                    Shop Collection
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

export default PromotionBanner;
