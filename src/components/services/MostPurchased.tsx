"use client";
import React from "react";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { productData } from "@/data/product-data";
import GetRatting from "@/hooks/GetRatting";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { ProductType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { usePathname } from "next/navigation";
import Counter from "@/utils/Counter";

type propsType = {
  bgImg: StaticImageData;
};

const MostPurchased = ({ bgImg }: propsType) => {
  const pathname = usePathname()
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };

  return (
    <>
      <div
        className={`most-purchased-item-area most-purched-2 most-purchased-item-bg  pt-120 pb-120 ${pathname ==="/home-three" ? "" : "mt-100"}`}
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-xl-9 col-lg-10  col-md-12  col-sm-12 col-12 offset-xxl-3 offset-xl-3 offset-lg-2 ">
              <div
                className="most-purchased-item-wrapper purchased-item-2  wow"
                data-wow-duration="1.5s"
              >
                <h3 className={`font-pt pb-1 ${pathname === "/" ? "light-black-color2" : "text-white"}`}>
                  Most Purchased Item
                </h3>

                <div className="pl-15 pr-15">
                  <div className="row most-purchased-item-active white-bg mt-25">
                    <div className="swiper-wrappers">
                      <Swiper
                        modules={[A11y, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: true,
                        }}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          500: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 3,
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
                        {productData?.slice(20, 25)?.map((item) => (
                          <SwiperSlide key={item?.id}>
                            <div className="single-product mb-10">
                              <div className="single-product-img position-relative over-hidden">
                                {item?.discount === false || (
                                  <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                                    <span className="white text-uppercase d-block font500">
                                      -{item?.discount}%
                                    </span>
                                  </div>
                                )}
                                {item?.status === "new" && (
                                  <div className="single-product-label text-label position-absolute theme-bg text-center  transition-3 z-index1">
                                    <span className="white d-block font500">
                                      New
                                    </span>
                                  </div>
                                )}
                                <div className="most-purchased-item-img  position-relative text-center">
                                  <div
                                    className="position-relative d-block cart-img-wrapper"
                                    
                                  >
                                    <Image src={item?.img} alt="product" />
                                    {/* cart icon */}
                                    <button
                                      onClick={() => handleAddToCart(item)}
                                      className="web-btn web-btn2 border-white01 add-to-cart-btn d-inline-block font700 text-capitalize light-black-color9 position-relative over-hidden pl-35 pr-35 ptb-12"
                                    >
                                      Add To Cart
                                    </button>
                                  </div>
                                  {item?.offer === true && (
                                    <div className="countdown-time d-flex  justify-content-center position-absolute width100">
                                       <Counter day={item?.day} min={item?.min}/>
                                    </div>
                                  )}
                                </div>
                                <div className="single-product-info text-center transition-3">
                                  <div className="rating rating-shop d-flex justify-content-center">
                                    <ul className="d-flex mr-2">
                                      <GetRatting
                                        averageRating={item?.ratting}
                                      />
                                    </ul>
                                  </div>
                                  <h6 className="light-black-color2">
                                    <Link href={`/shop-details/${item?.id}`}>
                                      {item?.title}
                                    </Link>
                                  </h6>
                                  <ul className="single-product-price d-flex mt-2 transition-3 justify-content-center">
                                    <li>
                                      {item?.oldPrice === false || (
                                        <span className="pr-2 d-inline-block">
                                          <del>${item?.oldPrice}.00</del>
                                        </span>
                                      )}
                                      <span className="theme-color d-inline-block font600">
                                        ${item.price}.00
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPurchased;
