"use client";
import React, { useEffect, useState } from "react";
import img1 from "../../../public/assets/images/product/rc-img1.jpg";
import img2 from "../../../public/assets/images/product/rc-img2.jpg";
import img3 from "../../../public/assets/images/product/rc-img3.jpg";
import Image from "next/image";
import { ProductType, idType } from "@/interFace/interFace";
import { productData } from "@/data/product-data";
import ProductDescription from "./ProductDescription";
import Link from "next/link";
import { StaticImageData } from "next/image";
import parse from 'html-react-parser';
import { useTranslation } from "react-i18next";


// interface for selectImg

interface imgType {
  id: number;
  img: StaticImageData;
}

const ShopDetailsContent = ({ data }: any) => {

  const fileterData: ProductType | any = data
  const previewImg = ''
  const [selectImg, setselectImg] = useState(previewImg);

  const { t } = useTranslation()


  const myProduct: imgType[] = data?.id ? data.product_gallery.map((el: any, i: number) => ({ img: el.image, id: i + 1 })) : []

  const handleSelectImg = (item: any) => {
    setselectImg(item.img);
  };

  useEffect(() => {
    setselectImg(data?.product_gallery?.[0].image)
  }, [data])

  return (
    <>
      {data && <div className="product-details-area pro-top-thamb pro-bottom-thamb pt-80">
        <div className="container">
          <div className="product-details-content">
            <div
              className="single-product-tab-content tab-content"
              id="myTabContent2"
            >
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="product-left-img-tab mt-20">
                    <div className="d-flex align-items-start img-preview-box">
                      <div
                        className="nav flex-column nav-pills me-4 preview-imges"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        {myProduct?.map((item) => (
                          <button
                            key={item.id}
                            className="nav-link  bg-transparent"
                            onClick={() => handleSelectImg(item)}
                          >
                            <Image
                              width={200}
                              height={200}
                              style={{ width: "100%", height: "auto" }}
                              className="product-thumbnail w-100 border-gray2"
                              src={item.img}
                              alt=""
                            />
                          </button>
                        ))}
                      </div>

                      <div className="tab-content" id="v-pills-tabContent" style={{ flexGrow: 1 }}>
                        <div
                          className="tab-pane fade show active position-relative"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="product-img border-gray2">
                            <Image
                              style={{ width: "100%", height: "100%" }}
                              width={700}
                              height={700}
                              src={selectImg}
                              alt="product"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-11 col-sm-12 col-12">
                  <div className="product-view-info mt-30">
                    <div className="product-left-img-info">
                      <h3 className="mb-20"> {fileterData?.title} </h3>
                      <div className="p-info-text pr-55">
                        <ul className="gray-color2">
                          {data?.body && (
                            data.characteristics.map((el: any, i: number) => {
                              return (
                                <li key={i} className="h2-theme-color d-flex align-items-start gap-2">
                                  <i className="far fa-check-circle mt-1"></i>
                                  <span>{el.name}</span>
                                </li>
                              )
                            })
                          )}
                        </ul>
                      </div>
                      <div className="all-info d-sm-flex align-items-center mt-35">
                        <div className="pro-list-btn d-inline-block mr-10 mb-15">
                          <Link
                            href="/shopping-cart"
                            className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                          >
                            {t("To'liq malumot olish")}
                          </Link>
                        </div>
                      </div>
                      <ul className="review-cat d-sm-flex align-items-center pt-20 pb-15">
                        <li className="mb-1 mb-2 mr-6 d-inline-block">
                          <span className="cat-title dark-black-color font600">
                            {t("Ketegoriyasi")} :
                          </span>
                        </li>
                        <li className="mr-6 mb-2 d-inline-block position-relative">
                          <Link href="#" className="gray-color2 font600">
                            {data?.category_name}
                          </Link>
                        </li>
                      </ul>
                      <ul className="social-link mt-10">
                        <li className="d-block d-sm-inline-block mr-12">
                          <span className="cat-title dark-black-color font600">
                            {t("Ulashish")}:
                          </span>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Facebook"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://www.facebook.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-facebook-f"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Twitter"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://twitter.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-twitter"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Instagram"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://www.instagram.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-instagram"></i>
                            </span>
                          </Link>
                        </li>
                        <li
                          className="d-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Pinterest"
                        >
                          <Link
                            className="d-inline-block font13 text-uppercase transition-3 mb-20"
                            href="https://bd.linkedin.com/"
                          >
                            <span className="d-inline-block text-center">
                              <i className="fab fa-linkedin-in"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDescription data={data} />
          </div>
        </div>
      </div>}
    </>
  );
};

export default ShopDetailsContent;
