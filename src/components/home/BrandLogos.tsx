"use client";
import React from "react";
import { A11y, Autoplay, EffectFade, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import brandOne from "../../../public/assets/images/brand/brand1.png";
import brandTwo from "../../../public/assets/images/brand/brand2.png";
import brandThree from "../../../public/assets/images/brand/brand3.png";
import brandFour from "../../../public/assets/images/brand/brand4.png";
import brandFive from "../../../public/assets/images/brand/brand5.png";
import brandSix from "../../../public/assets/images/brand/brand6.png";
import Image from "next/image";
import Link from "next/link";
import { sliderOneData } from "@/data/headernav/slider-one-data";
const BrandLogos = () => {
  const brandData = [
    {
      id: 1,
      img: brandOne,
    },
    {
      id: 2,
      img: brandTwo,
    },
    {
      id: 3,
      img: brandThree,
    },
    {
      id: 4,
      img: brandFour,
    },
    {
      id: 5,
      img: brandTwo,
    },
    {
      id: 6,
      img: brandSix,
    },
    {
      id: 7,
      img: brandThree,
    },
    {
      id: 8,
      img: brandFour,
    },
  ];
  return (
    <>
      <div className="brand-logo-area bg-white over-hidden">
        <div className="border-t-gray pt-55 pb-55" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
            <div className="section-title text-center">
              <h3 className="font-pt light-black-color2 pb-1">
                Xamkorlarimiz
              </h3>
            </div>
          </div>
          <div className="mlr--55">
            <div className="row brand-active d-flex align-items-center ">
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
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //   },
              //   500: {
              //     slidesPerView: 3,
              //   },
              //   768: {
              //     slidesPerView: 4,
              //   },
              //   992: {
              //     slidesPerView: 4,
              //   },
              //   1200: {
              //     slidesPerView: 4,
              //   },
              //   1400: {
              //     slidesPerView: 6,
              //   },
              // }}
              >
                {sliderOneData?.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="row">
                      {
                        sliderOneData?.slice(0, 6)?.map((el, j) => (
                          <div key={j} className={`text-center brand-img-div col-md-4 p-0 ${(i + 1) % 3 === 0 ? 'border-start' : 'border-end'} ${(i >= 0 && i < 3) ? 'border-bottom' : ''}`}>
                            <div className="p-5">
                              <Link href="#" className="d-block">
                                <Image
                                  className="d-inline-block brand-img"
                                  src={item.img}
                                  alt="brand-img"
                                  width={160}
                                  height={120}
                                  style={{ width: '100%' }}
                                />
                              </Link>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandLogos;
