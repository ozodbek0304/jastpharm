"use client";
import OfferAndBannerSlider from "@/sheardComponent/elements/sliders/OfferAndBannerSlider";
import Counter from "@/utils/Counter";
import React from "react";
const ProductOfferBannerTwo = () => {
  return (
    <>
      <div className="handpick-items-area best-deal-product hm2">
        <div className="container">
          <div className="h2-theme-border2">
            <div className="row ">
              <div className="col-xxl-4 col-xl-4  col-lg-4  col-md-7  col-sm-12 col-12 pb-15">
                <div className="section-title weekly-deal pl-30 pt-50">
                  <h3 className="font-pt light-black-color2 pb-6">
                    Best Deal Of Week
                  </h3>
                  <p className="light-black-color7 font300">
                    Sed perspiciatis undeous omniiste natusing
                  </p>
                  <div className="countdown-time countdown-time2 pt-15 d-flex">
                    <Counter day={20} min={18}/>
                  </div>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-8  col-lg-8  col-md-5  col-sm-12 col-12 pl-0">
                <div className="row best-deal-product-active  pt-40 mlr-1 ml--20">
                  <OfferAndBannerSlider start={19} end={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="row free-shopping-area h2-light-black-bg3  mlr-1">
            <div className="col-xl-12 col-lg-12  col-md-  col-sm- col-">
              <div className="free-shopping pt-15 pb-15 text-center">
                <p className="h2-theme-color mb-0 font600">
                  ONLY IN THIS WEEK. FREE SHIPPING FOR ALL ORDERS OVER $400
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOfferBannerTwo;
