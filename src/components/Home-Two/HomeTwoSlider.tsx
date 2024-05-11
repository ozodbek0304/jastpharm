"use client"
import React from "react";
import { Scrollbar, A11y, Autoplay,EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import img1 from "../../../public/assets/images/slider/slider-img1.jpg";
import img2 from "../../../public/assets/images/slider/slider-img2.jpg";
import Link from "next/link";
const HomeTwoSlider = () => {
  const sliderData = [ 
    {
      id: 1,
      img: img1,
      title: "Anti-Virus Mask ",
      titleBr: "Get Free Shipping",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
      subTitleBr: "Tired of seeing disposable mask discarded on the floor?",
      price: 57,
      oldPrice: 100,
    },
    {
      id: 2,
      img: img2,
      title: "Anti-Virus Mask ",
      titleBr: "",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
      subTitleBr: "Tired of seeing disposable mask discarded on the floor?",
      price: 57,
      oldPrice: 90,
    },
    {
      id: 3,
      img: img1,
      title: "Anti-Virus Mask ",
      titleBr: "",
      subTitle: "Tired of seeing disposable mask discarded on the floor?",
      subTitleBr: "Tired of seeing disposable mask discarded on the floor?",
      price: 57,
      oldPrice: 85,
    },
  ];

  return (
    <>
      <div className="slider-area over-hidden slider2">
        <div className="container">
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
              {sliderData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    key={item.id}
                    className="single-slider slider-height2 d-flex align-items-center"
                    data-overlay="7"
                    style={{ backgroundImage: `url(${item.img.src})` }}
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-10 col-12 d-flex align-items-center">
                          <div className="slider-content position-absolute mt--12 z-index1">
                            <h2
                              data-animation="fadeInLeft"
                              data-delay="1s"
                              className="light-black-color2 mb-1 text-capitalize pb-15 font500 font-pt-demi"
                            >
                              {item?.title} <br /> {item?.titleBr}
                            </h2>
                            <ul className="single-product-price d-flex mt-2 transition-3 pb-20">
                              <li>
                                <span className="h2-theme-color d-inline-block font500">
                                  ${item?.price}.00
                                </span>
                                <span className="pr-2 prod-remove d-inline-block h2-theme-color font500">
                                  <del>${item?.oldPrice}.00</del>
                                </span>
                              </li>
                            </ul>
                            <p
                              className="light-black-color2 font300 pb-10"
                              data-animation="fadeInLeft"
                              data-delay="1.5s"
                            >
                              {item?.subTitle}
                              <br />
                              <span className="font300">
                                {item?.subTitleBr}
                              </span>
                            </p>
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.7s"
                              href="/shop"
                              className="web-btn h2-web-btn  d-inline-block text-capitalize light-black-color2 white-bg position-relative rounded-0 over-hidden pl-30 pr-30 ptb-17"
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
      </div>
    </>
  );
};

export default HomeTwoSlider;
