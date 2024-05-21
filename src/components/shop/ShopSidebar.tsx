"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import api from "@/utils/api";
import useQueryParam from "@/utils/useQueryParams";
import { useParams } from "next/navigation";
import parse from 'html-react-parser'


const ShopSidebar = () => {
  const [sliderValues, setSliderValues] = useState([25]);
  const { getParams } = useQueryParam()

  const { t } = useTranslation()
  const [data, setData] = useState<any[]>([])
  const [producs, setProducts] = useState<any[]>([])

  const params = useParams()

  const getData = async () => {
    const resp = await api.get(`common/categories/`)
    const respProducts = await api.get(`common/recommended-products/`)

    setData(resp.data);
    setProducts(respProducts.data)
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
                {producs.map((item, i) => (
                  <div
                    key={i}
                    className="side-pro-wrapper d-flex align-items-start mb-15"
                  >
                    <div className="side-pro-img border-gray1 mr-10">
                      <Link href={`/shop-details/${item?.slug}`}>
                        <Image
                          src={item?.poster}
                          className="img-fluid"
                          alt="sidebar-img"
                          width={200}
                          height={200}
                        />
                      </Link>
                    </div>
                    <div className="side-pro-text">
                      <h6 className="pb-10">
                        <Link href={`/shop-details/${item?.slug}`}>
                          {" "}
                          {item?.title}{" "}
                        </Link>
                      </h6>
                      <span className="price font500">
                        {/* {parse(item?.description)} */}
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
