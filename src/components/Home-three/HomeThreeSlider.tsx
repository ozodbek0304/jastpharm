"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay,EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import sliderImgOne from "../../../public/assets/images/slider/h3-slider1.jpg";
import sliderImgTwo from "../../../public/assets/images/slider/h3-slider2.jpg";
import banner from "../../../public/assets/images/bg/Pattern1.png";
import Image from "next/image";
import Link from "next/link";
const HomeThreeSlider = () => {
  const sliderData = [
    {
      id: 1,
      img: sliderImgOne,
      title: "Electronic Brush",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
    },
    {
      id: 2,
      img: sliderImgTwo,
      title: "Multi-Layer Mask",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
    },
    {
      id: 3,
      img: sliderImgOne,
      title: "Electronic Brush",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
    },
    {
      id: 4,
      img: sliderImgTwo,
      title: "Multi-Layer Mask",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
    },
  ];

  return (
    <>
      <div className="position-relative slider3">
        <div className="slider-area over-hidden slider-dots2">
          <div className="slider-active">
            <Swiper
              modules={[Scrollbar, A11y, Autoplay,EffectFade]}
              spaceBetween={0}
              loop={true}
              observeParents={true}
              observer={true}
              centeredSlides={true}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              effect={"fade"}
            >
              {sliderData?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div
                    className="single-slider slider-height3 d-flex align-items-center"
                    style={{ backgroundImage: `url(${item?.img?.src})` }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 d-flex align-items-center">
                          <div className="slider-content position-absolutes mt--12">
                            <h2
                              data-animation="fadeInLeft"
                              data-delay="1s"
                              className="text-white mb-1 text-capitalize pb-15 font500 font-pt"
                            >
                              {item?.title}
                            </h2>
                            <p
                              className="text-white font300 pb-12"
                              data-animation="fadeInLeft"
                              data-delay="1.5s"
                            >
                              {item?.subTitle}
                            </p>
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.7s"
                              href="/shop"
                              className="web-btn h3-web-btn  d-inline-block text-uppercase white h3-theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                            >
                              Shop Collection
                            </Link>
                          </div>
                        </div>
                        <div className="slider-off-tags position-absolute d-inline-block light-black-color">
                          <Link
                            href="/shop"
                            className="off-tag-bounce text-uppercase d-block light-black-color2 secondary-bg font12 text-center"
                          >
                            <span className="d-block">10%</span>
                            <span className="d-block">off</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="slider-pattern position-absolute bottom0 right0">
          <Image src={banner} alt="home-three-banner" />
        </div>
      </div>
    </>
  );
};

export default HomeThreeSlider;
