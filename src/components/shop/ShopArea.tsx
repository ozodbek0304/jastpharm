"use client";
import React, { useState } from "react";
import ShopSidebar from "./ShopSidebar";
import ShopGridView from "./ShopGridView";
import ShopListView from "./ShopListView";
import Pagination from "@/utils/Pagination";
import NiceSelect from "@/elements/NiceSelect";

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

  const sortBY = [
    {
      id: 1,
      option: "Sort By New",
    },
    {
      id: 2,
      option: "Popularity",
    },
    {
      id: 3,
      option: "Average Rating",
    },
    {
      id: 4,
      option: "latest",
    },
    {
      id: 5,
      option: "low to high",
    },
    {
      id: 6,
      option: "high to low",
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
                    <div className="shop-header pt-70 mb-20">
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
                            <ul className="shop-right d-flex align-items-center">
                              <li>
                                <div className="shop-h-title border-r-gray1 pr-20">
                                  <h6 className="primary-color2 mb-0 font13">
                                    Showing 1–12 of 38 results
                                  </h6>
                                </div>
                              </li>
                              <li>
                                <div className="product-selection position-relative pl-25">
                                  <NiceSelect
                                    options={sortBY}
                                    defaultCurrent={0}
                                    onChange={selectHandler}
                                    name="select"
                                    className="border-0 py-0 pl-0"
                                  />
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
