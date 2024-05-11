import React from "react";

const ShopHeader = () => {
  return (
    <>
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
                          <li className="nav-item border-0" role="presentation">
                            <button
                              className="nav-link active border-0"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              <span>
                                <i className="fas fa-th"></i>
                              </span>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link border-0"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab"
                              aria-selected="false"
                            >
                              <span>
                                <i className="fas fa-bars"></i>
                              </span>
                            </button>
                          </li>
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
                        <select
                          className="border-0 py-0 pl-0"
                          name="select"
                          id="select"
                        >
                          <option value="">Sort By New</option>
                          <option value="">Sort by popularity</option>
                          <option value="">Sort by average rating</option> 
                          <option value="">Sort by latest</option>
                          <option value="">Sort by price: low to high</option>
                          <option value="">Sort by price: high to low</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopHeader;
