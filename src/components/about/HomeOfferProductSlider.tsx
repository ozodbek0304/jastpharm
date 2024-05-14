"use client";
import React from "react";
import "swiper/css/bundle";
import Image from "next/image";
import { productData } from "@/data/product-data";
import Link from "next/link";
const HomeOfferProductSlider = () => {

  return (
    <>
      <div
        className="handpick-items-area wow fadeInUp animated mb-35"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="row handpick-items-active theme-border2 pt-30 pl-20 mlr-1">
            {productData?.slice(15, 23)?.map((item) => (
              <div key={item?.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-handpick-item d-flex align-items-center mb-35 d-flex flex-column">
                  <div className="single-handpick-item-img position-relative">
                    <Link href={`shop-details/${item?.id}`} className="d-block offerslider-img">
                      <Image
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
    </>
  );
};

export default HomeOfferProductSlider;
