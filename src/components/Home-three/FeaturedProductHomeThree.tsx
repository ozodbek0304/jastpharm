import React from "react";
import OfferAndBannerSlider from "@/sheardComponent/elements/sliders/OfferAndBannerSlider";
import HomeThreeSliders from "@/sheardComponent/elements/sliders/HomeThreeSliders";
const FeaturedProductHomeThree = () => {
  return (
    <>
      <div className="Featured-product-area mb-30 hm3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
              <div className="section-title pt-10 text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  Featured Top Product
                </h3>
                <p className="light-black-color7 font300">
                  Sed ut perspiciatis undeous omniiste natusing errorings
                </p>
              </div>
            </div>
            <div className="row h3-purchased-product-active white-bg">
              <HomeThreeSliders start={20} end={25}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductHomeThree;
