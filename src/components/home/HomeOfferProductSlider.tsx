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
                  Bizning statistiklarimiz
                </h3>
                <p className="light-black-color7 font300">
                  Barcha ma'lumotlarimiz raqamlarda aks etgan
                </p>
              </div>
            </div>
          </div>
          <div className="row handpick-items-active theme-border2 mb-5">
            <div className="swiper-wrappers">
              <div
                className="d-flex justify-content-between"
              // breakpoints={{
              //   0: {
              //     slidesPerView: 1,
              //   },
              //   500: {
              //     slidesPerView: 1,
              //   },
              //   768: {
              //     slidesPerView: 2,
              //   },
              //   992: {
              //     slidesPerView: 2,
              //   },
              //   1200: {
              //     slidesPerView: 3,
              //   },
              //   1400: {
              //     slidesPerView: 3,
              //   },
              // }}
              >
                {productData?.slice(15, 19)?.map((item) => (
                  <div className="single-handpick-item d-flex align-items-center mb-20 mt-20 mx-auto">
                    <div className="single-product-info transition-3 text-center">
                      <h5 className="light-black-color2 mb-2ht">
                        <Link href={`shop-details/${item?.id}`}>
                          {item?.title}
                        </Link>
                      </h5>
                      <span className="theme-color d-inline-block font600">
                        {item?.price} +
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOfferProductSlider;
