"use client";
import React from "react";
import { A11y, Autoplay } from "swiper";
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
        <div className="container border-t-gray pt-55 pb-55">
          <div className="mlr--55">
            <div className="row brand-active d-flex align-items-center ">
              <Swiper
                modules={[A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  1400: {
                    slidesPerView: 6,
                  },
                }}
              >
                {brandData?.map((item) => (
                  <SwiperSlide key={item?.id}>
                    <div className="">
                      <div className="text-center brand-img-div">
                        <Link href="#" className="d-block">
                          <Image
                            className="d-inline-block brand-img"
                            src={item.img}
                            alt="brand-img"
                            style={{ width: "auto", height: "auto" }}
                            
                          />
                        </Link>
                      </div>
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
