"use client";
import React,{useEffect} from "react";
import logoImg from "../../../public/assets/images/logo/logo-theme.png";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
import ResponsiveMenu from "./ResponsiveMenu";
import { useUniqueProductCount } from "@/hooks/useCartQuantity";
const SidebarMenu = () => {
  const { toggleSideMenu } = useGlobalContext();
  const productQuantity = useUniqueProductCount();
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector("#header-sticky-three");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky-three")
        : header.classList.remove("header-sticky-three");
    }
  };

  return (
    <>
      <div id="header-sticky-three" className="mobile-menu-area pt-15 pb-15 d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <Link href="/home-two">
                <div className="logo">
                  <Image src={logoImg} alt="logo-img" />
                </div>
              </Link>
            </div>
            <div className="col-6 ">
              <button
                onClick={toggleSideMenu}
                className="mobile-menubar bar-style"
              >
                <i className="fal fa-bars"></i>
              </button>
              <ul className="h-shop position-relative pl-25 d-md-block float-end pr-10">
                <li className="position-relative">
                  <ul className="header-cart-wrapper d-flex align-items-center">
                    <li className="header-shopping-cart cart-item position-relative">
                      <span
                        className=""
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="Add to cart"
                      >
                        <i className="fal fa-shopping-bag"></i>
                      </span>
                      <span className="s-count position-absolute h2-theme-bg text-white text-center">
                        {productQuantity}
                      </span>
                    </li>
                  </ul>

                  <div className="header-shopping-cart-details border-t-gray1 mt-1 position-absolute bg-white border-gray pl-30 pr-30 pt-35 pb-60">
                    <div className="h-shop-cart-contetn pt-20 over-x-hidden over-y-scroll">
                      <h5 className="mb-30 font500 position-relative hvr2">
                        Your Cart
                      </h5>
                      <p>No products in the cart.</p>
                    </div>
                    <div className="d-sm-flex justify-content-between">
                      <Link
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                        href="#"
                        className="web-btn h2-web-btn mt-25 d-inline-block text-uppercase white h2-theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                      >
                        view cart
                      </Link>
                      <Link
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                        href="#"
                        className="web-btn h2-web-btn mt-25 d-inline-block text-uppercase white h2-theme-bg position-relative over-hidden pl-30 pr-30 ptb-12 line-height-1 font12"
                      >
                        checkout
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu/>
    </>
  );
};

export default SidebarMenu;
