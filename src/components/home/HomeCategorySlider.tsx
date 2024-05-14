"use client";
import React from "react";
import { Scrollbar, A11y, Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { sliderOneData } from "@/data/headernav/slider-one-data";
import Link from "next/link";
import Image from "next/image";
const HomeCategrorSlider = () => {
    return (
        <>
            <div className="slider-area over-hidden slider1">
                <div className="slider-active row">
                    <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                        <div className="section-title text-center">
                            <h3 className="font-pt light-black-color2 pb-1">
                                Mavjud sohalar
                            </h3>
                        </div>
                    </div>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        loop={true}
                        slidesPerView={3}
                        autoplay={{
                            delay: 4000,
                            // disableOnInteraction: true,
                        }}
                        pagination
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                            1400: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {sliderOneData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="banner mb-30 transition-3 position-relative over-hidden ">
                                    <Link href="/shop" className="d-block">
                                        <Image height={200} width={250} style={{ width: "100%", height: '200px', objectFit: 'cover' }} className="img-zoom transition-3 width100 h-100" src={item.img} alt="banner-img" />
                                    </Link>
                                    <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                                        <span className="banner-sub-tittle mt--4 d-block text-white font500">Get Upto 50% Flate</span>
                                        <h3 className="text-white font500 pb-45">
                                            <Link href="/shop" className="text-white">Pressure Meter</Link>
                                        </h3>
                                        <p className="text-white font300 pb-1">Free Shipping on Order Over $99.</p>
                                        <Link href="/shop" className="web-btn border-white01 d-inline-block text-capitalize white-bg light-black-color position-relative over-hidden pl-35 pr-35 ptb-12">Shop Now</Link>
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

export default HomeCategrorSlider;
