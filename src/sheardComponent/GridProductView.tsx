"use client";
import { ProductType } from "@/components/home/HomeProductArea";
import { productData } from "@/data/product-data";
import useResponsive from "@/hooks/use-responsive";
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

  const { isMobile } = useResponsive()

  return (
    <>
      <div key={data.id} className={`single-product h-100`}>
        <Link href={`/shop-details/${data.slug}`} className="single-product-img position-relative over-hidden h-100">
          <div className="position-relative d-block">
            <Image src={data.poster} width={180} height={220} style={{ width: 'auto', height: 'auto' }} className="w-100" alt="product" />
          </div>


          <div className="single-product-info text-center transition-3">
            <h6 className="light-black-color2" style={isMobile ? { fontSize: '14px' } : { fontSize: '16px' }}>
              <Link href={`/shop-details/${data?.slug}`}> {data.title} </Link>
            </h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GridProductView;
