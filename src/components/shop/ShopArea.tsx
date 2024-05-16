"use client";
import React, { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopGridView from "./ShopGridView";
import ShopListView from "./ShopListView";
import Pagination from "@/utils/Pagination";

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

  const selectHandler = () => {};

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
              <div className="col-xl-9  col-lg-8  col-md-12  col-sm-12 col-12">
                <div className="row">
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="shop-header pt-20 mb-20">
                      <div className="row align-items-center position-relative s-top-nv">
                        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15 position-static pl-xl-0">
                          <div className="shop-header-right d-flex align-items-center justify-content-between">
                            <ul className="d-flex  align-items-center s-fil-vm clear-both">
                              <li>
                                <div className="view-mode d-flex align-items-center">
                                  <ul
                                    className="nav nav-tabs border-0"
                                    id="myTab"
                                    role="tablist"
                                  >
                                    {tab?.map((item) => (
                                      <li
                                        key={item?.id}
                                        className="nav-item border-0"
                                        role="presentation"
                                      >
                                        <button
                                          className={`nav-link border-0 ${
                                            item?.id === activeTab
                                              ? "active"
                                              : ""
                                          }`}
                                          onClick={() => setactiveTab(item?.id)}
                                        >
                                          <span>
                                            <i className={`${item?.icon}`}></i>
                                          </span>
                                        </button>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <ShopGridView activeTab={activeTab} />
                  <ShopListView activeTab={activeTab} />
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
