"use client";
import React from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import GetRatting from "@/hooks/GetRatting";
import { productData } from "@/data/product-data";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { ProductType } from "@/interFace/interFace";
const HomeOfferProductSlider = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));

  };
  return (
    <>
      <div
        className="handpick-items-area pt-60 wow fadeInUp animated"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
              <div className="section-title text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  Handpicked Items
                </h3>
                <p className="light-black-color7 font300">
                  Sed ut perspiciatis undeous omniiste natusing error
                </p>
              </div>
            </div>
          </div>
          <div className="row handpick-items-active theme-border2 pt-30 pl-20 mlr-1">
            <div className="swiper-wrappers">
              <Swiper
                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                navigation={{
                  nextEl: ".trending-button-nexta",
                  prevEl: ".trending-button-preva",
                }}
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
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  1400: {
                    slidesPerView: 3,
                  },
                }} 
              >
                {productData?.slice(15, 19)?.map((item) => (
                  <SwiperSlide key={item?.id}>
                    <div className="single-handpick-item d-flex align-items-center mb-35">
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

                        <Link href={`shop-details/${item?.id}`} className="d-block offerslider-img">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={item?.img}
                            alt="offer-product-img"
                          />
                        </Link>
                      </div>
 
                      <div className="single-handpick-item-content single-handpick-item-content-home">
                        <div className="single-product-info mt-25 transition-3">
                          <div className="rating rating-shop d-flex mt-25">
                            <ul className="d-flex mr-2">
                              <GetRatting averageRating={item?.ratting} />
                            </ul>
                          </div>
                          <h6 className="light-black-color2">
                            <Link href={`shop-details/${item?.id}`}>
                              {item?.title}
                            </Link>
                          </h6>
                          <ul className="single-product-price d-flex pt-6 transition-3 mb-15">
                            <li>
                              {item?.oldPrice === false || (
                                <span className="pr-2 d-inline-block">
                                  <del>${item?.oldPrice}.00</del>
                                </span>
                              )}
                              <span className="theme-color d-inline-block font600">
                                ${item?.price}.50
                              </span>
                            </li>
                          </ul> 
                          <button
                            onClick={()=>handleAddToCart(item)}
                            className="web-btn web-btn2 border-white01 d-inline-block font700 text-capitalize light-black-color9 position-relative over-hidden pl-35 pr-35 ptb-12"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row free-shopping-area light-theme-bg  mlr-1">
            <div className="col-xl-12 col-lg-12  col-md-  col-sm- col-">
              <div className="free-shopping pt-15 pb-15 text-center">
                <p className="theme-color mb-0 font600">
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

export default HomeOfferProductSlider;
