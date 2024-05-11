import GridProductView from "@/sheardComponent/GridProductView";
import React from "react";

interface propsType {
  activeTab:number
}

const ShopGridView = ({activeTab}:propsType) => {
  return (
    <>
      <div
        className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="popular-product">
          <div className="row shop-page-product-active">
            <div className="col-xl-4 col-lg-6  col-md-6  col-sm-12 col-12 plr-14">
              <GridProductView start={0} end={5} />
            </div>
            <div className="col-xl-4 col-lg-6  col-md-6  col-sm-12 col-12 plr-14">
            <GridProductView start={5} end={10} />
            </div>
            <div className="col-xl-4 col-lg-6  col-md-6  col-sm-12 col-12 plr-14">
            <GridProductView start={10} end={15} />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopGridView;
