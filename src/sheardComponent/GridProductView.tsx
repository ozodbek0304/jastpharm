"use client";
import { productData } from "@/data/product-data";
import GetRatting from "@/hooks/GetRatting";
import useGlobalContext from "@/hooks/use-context";
import { ProductType } from "@/interFace/interFace";
import { cart_product } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Counter from "@/utils/Counter";
import ProductModal from "@/utils/ProductModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface propsType {
  start: number;
  end: number;
}

const GridProductView = ({ start, end }: propsType) => {
  const { setOpenModal, setModalId, openModal } = useGlobalContext();

  const handleMoldalData = (id: number) => {
    if (id) {
      setModalId(id);
    }
  };


  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };
  const handleAddToWishlist = (product: ProductType) => {
    dispatch(wishlist_product(product));
  };

  return (
    <>
      {productData.slice(start, end).map((item) => (
        <div key={item.id} className={`single-product mb-30`}>
          <div className="single-product-img position-relative over-hidden">
            {item.discount === false || (
              <div className="single-product-label position-absolute theme-bg text-center  transition-3 z-index1">
                <span className="white text-uppercase d-block font500">
                  -{item.discount}%{" "}
                </span>
              </div>
            )}

            {item?.status === "new" && (
              <div className="single-product-label text-label position-absolute theme-bg text-center  transition-3 z-index1">
                <span className="white d-block font500">New</span>
              </div>
            )}
 


            <div className="position-relative d-block">
              <Image src={item.img} className="w-100" alt="product" />
              <div className=" d-flex align-items-center mb-25 add-cart-div">
                <div className="pro-list-btn d-inline-block common-icon">
                  <button
                    className="cart-btn"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick Shop"
                    onClick={() => handleAddToCart(item)}
                  >
                    <i className="fal fa-cart-arrow-down"></i>
                  </button>
                </div>
                <div className="pro-wishlist d-inline-block ml-10 common-icon">
                  <button
                     
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick View"
                    data-bs-toggle="modal"
                    data-bs-target="#productmodal"
                    onClick={() =>
                      handleMoldalData(item?.id)
                    }
                  >
                    <i className="fal fa-eye"></i>
                  </button>
                </div>
                <div className="pro-wishlist d-inline-block ml-10 common-icon">
                  <button 
                    className="wishlist-btn"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Quick Wishlist"
                    onClick={() => handleAddToWishlist(item)}
                  >
                    <i className="fal fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>


            <div className="single-product-info position-absolute mt-25 text-center transition-3">
              {item.offer === true && (
                <>
                  {" "}
                  <div className="countdown-time d-flex  justify-content-center">
                    <Counter day={item?.day} min={item?.min} />
                  </div>{" "}
                </>
              )}
              <div className="rating rating-shop d-flex justify-content-center mt-25">
                <ul className="d-flex mr-2">
                  <GetRatting averageRating={item?.ratting} />
                </ul>
              </div>
              <h6 className="light-black-color2">
                <Link href={`/shop-details/${item?.id}`}> {item.title} </Link>
              </h6>
              <ul className="single-product-price d-flex mt-2 transition-3 justify-content-center">
                <li>
                  {item.oldPrice === false || (
                    <>
                      {" "}
                      <span className="pr-2 d-inline-block">
                        <del>${item.oldPrice}.00 </del>
                      </span>{" "}
                    </>
                  )}
                  <span className="theme-color d-inline-block font600">
                    ${item.price}.00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}

      <ProductModal/>

      
    </>
  );
};

export default GridProductView;
