"use client";
import React from "react";
import Link from "next/link";
import { productData } from "@/data/product-data";
import GetRatting from "@/hooks/GetRatting";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Counter from "@/utils/Counter";
import ShopHoverIconDiv from "@/utils/ShopHoverIconDiv";

type propsType = {
  start: number;
  end: number;
};

const HomeThreeSliders = ({ start, end }: propsType) => {
  return (
    <>
      <div className="swiper-wrappers">
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {productData?.slice(start, end)?.map((item) => (
            <SwiperSlide key={item?.id}>
              
              
                <div className="single-handpick-item mb-35">
                  <div className="single-handpick-item-img position-relative">
                    {item?.status === "new" && (
                      <div className="single-product-label text-label position-absolute theme-bg text-center  transition-3 z-index1">
                        <span className="white d-block font500">New</span>
                      </div>
                    )}
                    {item?.discount === false || (
                      <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                        <span className="white text-uppercase d-block font500">
                          -{item?.discount}%
                        </span>
                      </div>
                    )}

                    <Link
                      href={`/shop-details/${item?.id}`}
                      className="d-block"
                    >
                      <Image src={item?.img} alt="" />
                    </Link>

                    {item.offer === true && (
                      <>
                        {" "}
                        <div className="countdown-time d-flex justify-content-center position-absolute width100">
                          <Counter day={item?.day} min={item?.min} />
                        </div>
                      </>
                    )}
                  </div>


                  <ShopHoverIconDiv item={item}/>

                  

                  <div className="single-handpick-item-content">
                    <div className="single-product-info transition-3">
                      <div className="rating rating-shop d-flex">
                        <ul className="d-flex mr-2">
                          <GetRatting averageRating={item?.ratting} />
                        </ul>
                      </div>
                      <h6 className="light-black-color2">
                        <Link href={`/shop-details/${item?.id}`}>
                          {" "}
                          {item?.title}{" "}
                        </Link>
                      </h6>
                      <ul className="single-product-price d-flex pt-6 transition-3 mb-15">
                        <li>
                          {item?.oldPrice === false || (
                            <span className="pr-2 d-inline-block">
                              <del>${item?.oldPrice}.00</del>
                            </span>
                          )}
                          <span className="h2-theme-color d-inline-block font600">
                            ${item?.price}.00
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      
    </>
  );
};

export default HomeThreeSliders;
