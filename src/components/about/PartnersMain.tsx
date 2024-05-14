import Link from "next/link";
import React from "react";
import LineUpLinks from "../Home-three/LineUpLinks";
import Image from "next/image";
import BrandLogos from "./BrandLogos";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import brandOne from "../../../public/assets/images/brand/brand1.png";

const PartnersMain = () => {
  const brandData = [
    {
      id: 1,
      img: brandOne,
    },
    {
      id: 2,
      img: brandOne,
    },
    {
      id: 3,
      img: brandOne,
    },
    {
      id: 4,
      img: brandOne,
    },
    {
      id: 5,
      img: brandOne,
    },
    {
      id: 6,
      img: brandOne,
    },
    {
      id: 7,
      img: brandOne,
    },
    {
      id: 8,
      img: brandOne,
    },
  ];

  return (
    <>
      <div className="category-lineup-area">
        <div className="container">
          <div className="row">
            <Breadcrumb pageTitle='Hamkorlarimiz' />

            <div className="category-wrapper category-wrapper1 mt-15 row gy-4 justify-content-center p-0 mx-auto">
              {brandData?.map((item) => (
                <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6" key={item.id}>
                  <div className="text-center brand-img-div">
                    <Link href="#" className="d-block">
                      <Image
                        className="d-inline-block brand-img"
                        src={item.img}
                        alt="brand-img"
                      />
                    </Link>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
      .
    </>
  );
};

export default PartnersMain;
