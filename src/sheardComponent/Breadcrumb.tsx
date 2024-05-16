"use client";

import React from "react";
import Link from "next/link";
import bannerImg from "../../public/assets/images/bg/purchased-item-bg.jpg";
import { useTranslation } from "react-i18next";
interface propsType {
  pageTitle: string;
}

const Breadcrumb = ({ pageTitle }: propsType) => {

  const { t } = useTranslation()

  return (
    <div className="slider-area over-hidden">
      <div
        className="d-flex align-items-center"
      // style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 d-flex align-items-center justify-content-center">
              <div className="page-title mt-10 text-center">
                <h2 className="text-capitalize font600 mb-10"> {t(pageTitle)} </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center bg-transparent">
                    <li className="breadcrumb-item">
                      <Link className="primary-color" href="/">
                        {t("Asosiy sahifa")}
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active text-capitalize"
                      aria-current="page"
                    >
                      {t(pageTitle)}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
