"use client";
import React, { useEffect, useState } from "react";
import "swiper/css/bundle";
import { productData } from "@/data/product-data";
import CountUp from 'react-countup';
import useIntersectionObserver from "@/utils/useScrollHeight";
import { useTranslation } from "react-i18next";


const HomeOfferProductSlider = () => {
  const [client, setClient] = useState(false)
  const [activeId, setActiveId] = useState('');

  const { t } = useTranslation()

  useIntersectionObserver(setActiveId);

  useEffect(() => {
    if (activeId === 'stats-active') {
      setClient(true)
    }
  }, [activeId])


  return (
    <>
      <div
        className="handpick-items-area pt-40 pb-40"
        data-wow-duration="1s"
      >
        <div className="container scroll-target" id="stats-active" >
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="section-title text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  {t("our_stats")}
                </h3>
              </div>
            </div>
          </div>
          <div className="row handpick-items-active">
            <div className="swiper-wrappers">
              <div
                className="d-flex justify-content-between flex-column flex-md-row"
              >
                <div className="single-handpick-item d-flex justify-content-center align-items-center mb-20 mt-20 mx-auto">
                  <div className="single-product-info transition-3 text-center">
                    <h1 className="theme-color d-inline-block font600" style={{ fontSize: 60 }}>
                      <CountUp start={0} end={14} duration={2.75} /> +
                    </h1>
                    <h4 className="light-black-color2 mb-2ht">
                      {t("tajriba")}
                    </h4>
                  </div>
                </div>
                <div className="single-handpick-item d-flex justify-content-center align-items-center mb-20 mt-20 mx-auto">
                  <div className="single-product-info transition-3 text-center">
                    <h1 className="theme-color d-inline-block font600" style={{ fontSize: 60 }}>
                      <CountUp start={0} end={20} duration={2.75} /> +
                    </h1>
                    <h4 className="light-black-color2 mb-2ht">
                      {t("doimiy mijozlar")}
                    </h4>
                  </div>
                </div>
                <div className="single-handpick-item d-flex justify-content-center align-items-center mb-20 mt-20 mx-auto">
                  <div className="single-product-info transition-3 text-center">
                    <h1 className="theme-color d-inline-block font600" style={{ fontSize: 60 }}>
                      <CountUp start={0} end={109} duration={2.75} /> +
                    </h1>
                    <h4 className="light-black-color2 mb-2ht">
                      {t("global ishlab chiqaruvchilar")}
                    </h4>
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

export default HomeOfferProductSlider;
