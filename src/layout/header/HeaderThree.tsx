"use client";
import React, { useEffect } from "react";
import logoImg from "../../../public/assets/images/logo/logo-white.png";
import Image from "next/image";
import Link from "next/link";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import Menu from "./Menu";
import useGlobalContext from "@/hooks/use-context";
import OverlyDiv from "@/utils/OverlyDiv";
import { useRouter } from "next/navigation";
import SidebarMenu from "./SidebarMenu";
const HeaderThree = () => {
  const router = useRouter();
  const { toggleSideMenu } = useGlobalContext();
  const productQuantity = useUniqueProductCount();
  const wishlistQuantity = useUniqueWishlstCount();

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
    const header = document.querySelector("#header-sticky-two");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky-two")
        : header.classList.remove("header-sticky-two");
    }
  };
  return (
    <>
      <header>
        <div id="header-sticky-two" className="header-area header-area3 d-none d-lg-block">
          <div className="header header3 position-absolute pt-30 pb-22 extra-padding-55">
            <div className="container-fluid">
              <div className="header-bottom home3-header-bottom">
                <div className="row align-items-center justify-content-lg-between position-relative">
                  <div className="col-xxl-3 col-xl-2 col-lg-3  col-md-4  col-sm-8 col-8 pr-md-0">
                    <div className="logo-area">
                      <div className="logo3 z-index1 position-relative">
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
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-7 col-lg-7 col-md-1 col-sm-1 col-1 pr-0 pl-0 d-flex align-items-center justify-content-center position-static d-none d-lg-block">
                    <div className="main-menu main-menu-3">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3  col-lg-2 col-md-8  col-sm-3 col-4  pl-0 d-flex  align-items-center justify-content-end">
                    <div className="header-right d-flex align-items-center">
                      <ul>
                        <li
                          className="header-search position-relative d-none d-lg-inline-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="Search"
                        >
                          <span className="black-color d-inline-block">
                            <span className="icon-search"></span>
                          </span>
                        </li>
                      </ul>
                      <ul className="header-account d-none d-md-block pl-25">
                        <li className="d-none d-md-inline-block">
                          <Link
                            href="/login"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="My Account"
                          >
                            <span>
                              <i className="far fa-user-circle"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="header-compare header-wishlist d-none d-md-block position-relative pl-25">
                        <li className="d-none d-md-inline-block">
                          <Link
                            href="/shop-details"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="Compare"
                          >
                            <span>
                              <i className="fal fa-random"></i>
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="header-wishlist d-none d-md-block pl-25 position-relative">
                        <li className="position-relative">
                          <Link
                            href="/wishlist"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="View wishlist"
                            className="dark-black-color cursor-pointer"
                          >
                            <span>
                              <i className="fal fa-heart"></i>
                            </span>
                            <span className="s-count position-absolute h3-theme-bg text-white text-center">
                              {wishlistQuantity}
                            </span>
                          </Link>
                        </li>
                      </ul>
                      <ul className="h-shop position-relative pl-25 d-md-block">
                        <li className="position-relative">
                          <ul className="header-cart-wrapper d-flex align-items-center">
                            <li className="header-shopping-cart cursor cart-item position-relative">
                              <span
                                onClick={handleRoute}
                                className=""
                                data-toggle="tooltip"
                                data-selector="true"
                                data-placement="bottom"
                                title="Add to cart"
                              >
                                <span className="icon-shopping-bag"></span>
                              </span>
                              <span className="s-count position-absolute  h3-theme-bg text-white text-center">
                                {productQuantity}
                              </span>
                            </li>
                          </ul>

                          <div className="header-shopping-cart-details border-t-gray1 mt-1 position-absolute bg-white pl-30 pr-30 pt-35 pb-60">
                            <div className="h-shop-cart-contetn pt-20 over-x-hidden over-y-scroll">
                              <h5 className="mb-30 font500 position-relative hvr3">
                                Your Cart
                              </h5>
                              <p>No products in the cart.</p>
                            </div>
                            <div className="d-sm-flex justify-content-between">
                              <Link
                                data-animation="fadeInUp"
                                data-delay="1.7s"
                                href="#"
                                className="web-btn h2-web-btn mt-25 d-inline-block text-uppercase white h3-theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                              >
                                view cart
                              </Link>
                              <Link
                                data-animation="fadeInUp"
                                data-delay="1.7s"
                                href="#"
                                className="web-btn h2-web-btn mt-25 d-inline-block text-uppercase white h3-theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                              >
                                checkout
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="d-block d-lg-none">
                        <Link
                          onClick={toggleSideMenu}
                          className="mobile-menubar pt-0 ml-20"
                          href=""
                        >
                          <span className="icon-menu"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SidebarMenu/>
      <OverlyDiv />
    </>
  );
};

export default HeaderThree;
