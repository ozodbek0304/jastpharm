"use client";
import React, { useEffect, useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopGridView from "./ShopGridView";
import ShopListView from "./ShopListView";
import Pagination from "@/utils/Pagination";
import api from "@/utils/api";
import useQueryParam from "@/utils/useQueryParams";

const ShopArea = () => {
  const [activeTab, setactiveTab] = useState<number>(1);

  const tab = [
    {
      id: 1,
      icon: "fas fa-th",
    },
    {
      id: 2,
      icon: "fas fa-bars",
    },
  ];

  const query = useQueryParam()
  const [data, setData] = useState<any[]>([])

  const getData = async () => {
    const resp = await api.get(`common/products/?category__slug=${query.getParams().category || ''}`)

    setData(resp.data.results);
  }

  useEffect(() => {
    getData()
  }, [activeTab])


  return (
    <>
      <div className="product-area shop-product mt-20 mb-100">
        <div className="container">
          <div className="product-content single-product-tab-content"></div>
          <div className="product-wrapper mt-1">
            <div className="row">
              <div className="col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12">
                <ShopSidebar />
              </div>
              <div className="col-xl-9  col-lg-8  col-md-12  col-sm-12 col-12 mt-25">
                <div className="tab-content" id="myTabContent">
                  <ShopGridView data={data} activeTab={activeTab} />
                </div>
                <div className="pagination-area mt-50 over-hidden position-relative">
                  <div className="row">
                    <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                      <nav
                        className="pagination-page"
                        aria-label="Page navigation example"
                      >
                        <Pagination />
                      </nav>
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

export default ShopArea;
