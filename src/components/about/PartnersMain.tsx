import Link from "next/link";
import React from "react";
import LineUpLinks from "../Home-three/LineUpLinks";
import Image from "next/image";
import BrandLogos from "./BrandLogos";
import Breadcrumb from "@/sheardComponent/Breadcrumb";

const PartnersMain = () => {

  return (
    <>
      <div className="category-lineup-area">
        <div className="container">
          <div className="row">
            <Breadcrumb pageTitle='Hamkorlarimiz' />

            <div className="category-wrapper category-wrapper1 mt-15">
              <BrandLogos />
            </div>
          </div>
        </div>
      </div>
      .
    </>
  );
};

export default PartnersMain;
