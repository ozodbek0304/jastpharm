import GridProductView from "@/sheardComponent/GridProductView";
import React from "react";

interface propsType {
  activeTab: number,
  data: any[]
}

const ShopGridView = ({ activeTab, data }: propsType) => {
  return (
    <>
      <div
        className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="popular-product">
          <div className="row shop-page-product-active align-items-stretch">
            {
              data.map((el,i) => (
                <div key={i} className="col-xl-4 col-lg-6  col-md-6 col-sm-6 col-12 plr-14">
                  <GridProductView data={el} start={0} end={5} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopGridView;
