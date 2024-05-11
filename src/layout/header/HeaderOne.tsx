"use client";
import React, { useState, useEffect } from "react";
import logoImg from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Menu from "./Menu";
import SidebarMenu from "./SidebarMenu";
import OverlyDiv from "@/utils/OverlyDiv";
import { useRouter } from "next/navigation";
const HeaderOne = () => {
  const router = useRouter()
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
    0
  );

  const handleRoute = () => {
    router.push("/shopping-cart");
  };




  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector("#header-sticky");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky")
        : header.classList.remove("header-sticky");
    }
  };

  return (
    <>
      <header id="header-sticky" className="d-none d-lg-block">
        <div className="header-area header-area1">
          <div className="header extra-padding-55">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-1 col-xl-1 col-xl-1  col-lg-2  col-md-2  col-sm-12 col-12 pr-md-0">
                  <div className="logo-area">
                    <div className="logo white-bg z-index1 position-relative">
                      <Link
                        href="/"
                        className="d-block"
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="stepmeds"
                      >
                        <Image src={logoImg} alt="stepmeds" />
                      </Link>
                    </div>
                    <ul className="h-shop position-relative pl-30 d-inline-block d-md-none float-end text-right">
                      <li className="position-relative">
                        <ul className="header-cart-wrapper d-flex align-items-center">
                          <li className="header-shopping-cart position-relative mr-15">
                            <span
                              className=""
                              data-toggle="tooltip"
                              data-selector="true"
                              data-placement="bottom"
                              title="Add to cart"
                            >
                              <span className="icon-shopping-bag"></span>
                            </span>
                            <span className="s-count position-absolute theme-bg text-white text-center">
                              {productQuantity}
                            </span>
                          </li>
                          <li className="cart-content">
                            <div className="my-cart">
                              <span className="d-block">My cart</span>
                            </div>
                            <div className="cart-item cursor-pinter d-flex align-items-center">
                              <span className="font600">
                                {productQuantity} item - ${totalPrice}
                                <span className="icon-chevron-down"></span>
                              </span>
                            </div>
                          </li>
                        </ul>

                        <div className="header-shopping-cart-details border-t-gray1 mt-1 position-absolute bg-white border-gray pl-30 pr-30 pt-35 pb-60">
                          <div className="h-shop-cart-contetn pt-20 over-x-hidden over-y-scroll">
                            <h5 className="mb-30 font500  position-relative hvr2">
                              Your Cart
                            </h5>
                            <p>No products in the cart.</p>
                          </div>
                          <div className="d-sm-flex justify-content-between">
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.7s"
                              href="#"
                              className="web-btn mt-25 d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                            >
                              view cart
                            </Link>
                            <Link
                              data-animation="fadeInUp"
                              data-delay="1.7s"
                              href="#"
                              className="web-btn mt-25 d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                            >
                              checkout
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-11 col-xl-11  col-lg-10  col-md-10 col-sm-12 col-12 pl-md-0">
                  <div className="header-right-area pl-90">
                    <div className="header-top position-relative ptb-17 over-y-hidden">
                      <div className="row">
                        <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-3  col-sm-12 col-12 pr-0 d-flex align-items-center px-5">
                          <div
                            className="header-search position-relative mr-1 d-lg-inline-block lg-d-flex"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="Search"
                          >
                            <div className="search-form">
                              <div className="d-none  d-lg-inline-block width100">
                                <input
                                  type="text"
                                  placeholder="Qidirish"
                                  className="border-0 pl-45 width100 gray-bg4"
                                />
                                <span className="position-absolute">
                                  <span className="icon-search"></span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="float-right d-none d-lg-inline-block">
                            <Link
                              href="#"
                              className="web-btn header-btn theme-border1 d-inline-block text-capitalize white theme-bg position-relative over-hidden pl-35 pr-35 ptb-12"
                            >
                              Search
                            </Link>
                          </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-9  col-sm-0 col-0  pl-0 d-flex  align-items-center justify-content-end">
                          <div className="header-right d-flex align-items-center w-100">
                            <div
                              className="header-bottom home1-header-bottom w-100">
                              <div className="d-flex align-items-center justify-content-lg-between position-relative">
                                <div className="pr-0 d-flex align-items-center position-static w-100">
                                  <div className="main-menu main-menu-1 w-100">
                                    <nav id="mobile-menu">
                                      <Menu />
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu */}

      <SidebarMenu />
      <OverlyDiv />
    </>
  );
};

export default HeaderOne;
