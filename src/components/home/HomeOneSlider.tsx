"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { sliderOneData } from "@/data/headernav/slider-one-data";
import Link from "next/link";
const HomeOneSlider = () => {
  return (
    <>
      <div className="slider-area over-hidden slider1">
        <div className="slider-active">
          <Swiper
            modules={[Scrollbar, A11y, Autoplay, EffectFade]}
            spaceBetween={0}
            loop={true}
            observeParents={true}
            observer={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            effect={"fade"}
          >
            {sliderOneData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="single-slider slider-height d-flex align-items-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                  data-overlay="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-10 col-12 d-flex align-items-center">
                        <div className="slider-content z-index1 position-absolute mt--12">
                          <h2
                            data-animation="fadeInLeft"
                            data-delay="1s"
                            className="light-black-color2 mb-1 text-capitalize pb-25 font500 font-pt"
                          >
                            {item.heading} <br /> {item.afterBr}
                          </h2>
                          <p
                            className="light-black-color2 font300 pb-25"
                            data-animation="fadeInLeft"
                            data-delay="1.5s"
                          >
                            {item.title}
                            <br />
                            <span className="font500">{item.titleBr}</span>
                          </p>
                          <Link
                            data-animation="fadeInUp"
                            data-delay="1.7s"
                            href="/shop"
                            className="web-btn  d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                          >
                            Shop Collection
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeOneSlider;
