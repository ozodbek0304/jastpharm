"use client";
import React from "react";
import "swiper/css/bundle";
import Image from "next/image";
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
        className="handpick-items-area wow fadeInUp animated mb-35"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
              <div className="section-title text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  Jamoamiz A{"'"}zolari
                </h3>
                <p className="light-black-color7 font300">
                  Sed ut perspiciatis undeous omniiste natusing error
                </p>
              </div>
            </div>
          </div>
          <div className="row handpick-items-active theme-border2 pt-30 pl-20 mlr-1">
            <div className="swiper-wrappers">
              <div className="d-flex flex-wrap justify-content-between">
                {productData?.slice(15, 19)?.map((item) => (
                  <div key={item?.id}>
                    <div className="single-handpick-item d-flex align-items-center mb-35 d-flex flex-column">
                      <div className="single-handpick-item-img position-relative">
                        <Link href={`shop-details/${item?.id}`} className="d-block offerslider-img">
                          <Image
                            style={{ width: "100%", height: "auto" }}
                            src={item?.img}
                            alt="offer-product-img"
                          />
                        </Link>
                      </div>

                      <div>
                        <div className="single-product-info mt-10 transition-3 text-center">
                          <h6 className="light-black-color2">
                            <Link href={`shop-details/${item?.id}`}>
                              {"Doniyor Eshmamatov"}
                            </Link>
                          </h6>
                          <ul className="single-product-price d-flex pt-6 transition-3 mb-15">
                            <li className="mx-auto">
                              <span className="theme-color d-inline-block font600">
                                Software Engineer
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
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
