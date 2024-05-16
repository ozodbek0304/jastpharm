import GridProductView from "@/sheardComponent/GridProductView";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeProductArea = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className="product-area">
        <div className="container">
          <div className="product-content single-product-tab-content pt-25">
            <div className="row">
              <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                <div className="section-title text-center">
                  <h3 className="font-pt light-black-color2 pb-1">
                    {t("our_products")}
                  </h3>
                </div>
              </div>
            </div>
            <div className="product-wrapper mt-1">
              <div className="row">
                <div className="col-md-12  col-sm-12 col-12">
                  <div className="popular-product">
                    <div className="row product-active">
                      <div className="col-xl-3 col-lg-6  col-md-6 col-sm-6 col-12 plr-14">
                        <GridProductView start={0} end={2} />
                      </div>

                      <div className="col-xl-3 col-lg-6  col-md-6  col-sm-6 col-12 plr-14">
                        <GridProductView start={2} end={4} />
                      </div>

                      <div className="col-xl-3 col-lg-6  col-md-6  col-sm-6 col-12 plr-14">
                        <GridProductView start={4} end={6} />
                      </div>

                      <div className="col-xl-3 col-lg-6  col-md-6  col-sm-6 col-12 plr-14">
                        <GridProductView start={6} end={8} />
                      </div>

                    </div>
                  </div>
                </div>
                {/* <SidebarCategory/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductArea;
