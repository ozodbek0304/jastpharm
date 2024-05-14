"use client";
import { productData } from "@/data/product-data";
import ProductModal from "@/utils/ProductModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  start: number;
  end: number;
}

const GridProductView = ({ start, end }: propsType) => {

  return (
    <>
      {productData.slice(start, end).map((item) => (
        <div key={item.id} className={`single-product mb-30`}>
          <div className="single-product-img position-relative over-hidden">
            <div className="position-relative d-block">
              <Image src={item.img} className="w-100" alt="product" />
              {/* <div className="mb-25 add-cart-div text-center w-50">
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
              </div> */}
            </div>


            <div className="single-product-info position-absolute mt-25 text-center transition-3">
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

      <ProductModal />
    </>
  );
};

export default GridProductView;
