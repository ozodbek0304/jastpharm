"use client";
import { ProductType } from "@/components/home/HomeProductArea";
import { productData } from "@/data/product-data";
import ProductModal from "@/utils/ProductModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  start: number;
  end: number;
  data: ProductType
}

const GridProductView = ({ data }: propsType) => {

  return (
    <>
      <div key={data.id} className={`single-product mb-30 h-100`}>
        <Link href={`/shop-details/${data.slug}`} className="single-product-img position-relative over-hidden">
          <div className="position-relative d-block">
            <Image src={data.poster} width={180} height={220} style={{ width: 'auto', height: 'auto' }} className="w-100" alt="product" />
          </div>


          <div className="single-product-info text-center transition-3 h-100">
            <h6 className="light-black-color2">
              <Link href={`/shop-details/${data?.slug}`}> {data.title} </Link>
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GridProductView;
