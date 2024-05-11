import Link from "next/link";
import React from "react";
import LineUpLinks from "../Home-three/LineUpLinks";

const CategoryLineUp = () => {
 
  return (
    <>
      <div className="category-lineup-area pb-30">
        <div className="container">
          <div className="row"> 
            <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="category-lineup">
                <h2>Category Lineup</h2>
              </div>
            </div>
            <div className="category-wrapper category-wrapper1 mt-15">
              <div className="row">
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      WOUND CARE
                    </h5>
                    <ul>
                        <LineUpLinks start={0} end={7}/>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      HIGIENE
                    </h5>
                    <ul>
                    <LineUpLinks start={8} end={14}/>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      LABORATORY
                    </h5>
                    <ul>
                    <LineUpLinks start={15} end={21}/>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      TOOLS
                    </h5>
                    <ul>
                    <LineUpLinks start={22} end={28}/>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      DIAGNOSIS
                    </h5>
                    <ul>
                    <LineUpLinks start={29} end={35}/>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2  col-lg-2  col-md-4  col-sm-4 col-12">
                  <div className="category-widget mb-50">
                    <h5 className="title position-relative d-inline-block hvr mb-25">
                      EQUIPMENT
                    </h5>
                    <ul>
                    <LineUpLinks start={36} end={42}/>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </>
  );
};

export default CategoryLineUp;
