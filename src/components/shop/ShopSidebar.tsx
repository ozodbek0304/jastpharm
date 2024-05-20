"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { productData } from "@/data/product-data";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import api from "@/utils/api";
import useQueryParam from "@/utils/useQueryParams";
import { useParams } from "next/navigation";
const ShopSidebar = () => {
  const [sliderValues, setSliderValues] = useState([25]);
  const { getParams } = useQueryParam()

  const { t } = useTranslation()
  const [data, setData] = useState<any[]>([])
  const params = useParams()

  const getData = async () => {
    const resp = await api.get(`common/categories/`)

    setData(resp.data);
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="shop-sidebar-area pt-20">
        <div className="row">
          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="row">
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                <div className="sidebar-widget mb-20">
                  <h6 className="mb-15 title font600 sidebar-title d-inline-block position-relative pb-1">
                    {t("Barcha kategoriyalar")}
                  </h6>
                  <ul>
                    {
                      data.map((el, i) => (
                        <li key={i} className={`pb-15 d-block ${params?.slug === el.slug ? 'category-nav-active' : ''}`}>
                          <Link href={`/shop/${el.slug}`}>
                            {el.name}
                          </Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
            <div className="sidebar-widget mt-25">
              <h6 className="title font600 sidebar-title d-inline-block position-relative mb-20 pb-1">
                {t("Ommabop mahsulotlar")}
              </h6>
              <div className="side-product mb-50">
                {productData?.slice(6, 10)?.map((item, i) => (
                  <div
                    key={i}
                    className="side-pro-wrapper d-flex align-items-start mb-15"
                  >
                    <div className="side-pro-img border-gray1 mr-10">
                      <Link href={`/shop-details/${item?.id}`}>
                        <Image
                          src={item?.img}
                          className="img-fluid"
                          alt="sidebar-img"
                        />
                      </Link>
                    </div>
                    <div className="side-pro-text">
                      <h6 className="pb-10">
                        <Link href={`/shop-details/${item?.id}`}>
                          {" "}
                          {item?.title}{" "}
                        </Link>
                      </h6>
                      <span className="price font500">
                        $17.50 <del>$19.50</del>
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

export default ShopSidebar;
