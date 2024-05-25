"use client";
import React, { useEffect, useState } from "react";
import "swiper/css/bundle";
import Image from "next/image";
import { productData } from "@/data/product-data";
import Link from "next/link";
import api from "@/utils/api";
import { useTranslation } from "react-i18next";
import useResponsive from "@/hooks/use-responsive";

export interface TeamMemberType {
  id: number
  full_name: string
  image: string
  position: string
}

const HomeOfferProductSlider = () => {
  const [data, setData] = useState<TeamMemberType[]>([])
  const { isMobile } = useResponsive()

  const { t } = useTranslation()

  const getTeam = async () => {
    const resp = await api.get(`common/teams`)
    setData(resp.data);
  }

  useEffect(() => {
    getTeam()
  }, [])

  return (
    <>
      <div
        className="fadeInUp animated mb-35"
        data-wow-duration="1s"
      >
        <div className="container over-hidden">
          <div>
            <h1 className="text-center">
              {t("Bizning jamoa")}
            </h1>
          </div>
          <div className={`row handpick-items-active pt-30 ${isMobile ? "" : "pl-20 mlr-1"}`}>
            {data.map((item, i) => (
              <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 position-relative">
                <div className="single-handpick-item single-blog d-flex align-items-center mb-35 d-flex flex-column">
                  <div className="single-handpick-item-img position-relative">
                    <Image
                      src={item?.image}
                      alt="offer-product-img"
                      width={200}
                      height={200}
                      style={{ objectFit: 'cover', width: isMobile ? '150px' : '200px', height: isMobile ? '150px !important' : '200px', objectPosition: 'center' }}
                      className="img-zoom"
                    />
                  </div>
                  <div className=" blog-shadow-team position-absolute transition-5 light-theme-bg"></div>

                  <div>
                    <div className="single-product-info single-blog-info mt-10 transition-3 text-center">
                      <h6 className="light-black-color2">
                        {item.full_name}
                      </h6>
                      <ul className="single-product-price d-flex pt-6 transition-3 mb-15">
                        <li className="mx-auto">
                          <span className="theme-color d-inline-block font600">
                            {item.position}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOfferProductSlider;
