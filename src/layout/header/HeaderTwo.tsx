"use client";
import React,{useEffect} from "react";
import logoOne from "../../../public/assets/images/logo/logo-theme.png";
import Image from "next/image";
import Link from "next/link";
import bgImage from "../../../public/assets/images/banner/home2/top-banner.jpg";
import {
  useUniqueProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import Menu from "./Menu";
import MobileMenuTwo from "./mobileMenus/MobileMenuTwo";
import ResponsiveMenu from "./ResponsiveMenu";
import OverlyDiv from "@/utils/OverlyDiv";
import { useRouter } from "next/navigation";
import SidebarMenu from "./SidebarMenu";
const HeaderTwo = () => {
  const router = useRouter();
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
      <header  className="d-none d-lg-block">
        <div
          className="top-banner  pt-2 pb-12"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          <div className="container-fluid d-flex align-items-center justify-content-center align-items-center">
            <p className="font300 light-black-color1 mb-0">
              All face masks on sale{" "}
              <span className="font-500 h2-theme-color">Upto -50%</span> Only in
              this week. Don’t wait!
            </p>
            <Link
              href="#"
              className="position-relative font500 d-none d-sm-inline-block text-uppercase bg-transparent h2-theme-color h2-b-theme-border1 font12 line-height-1 hvr2 ml-15"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div id="header-sticky" className="header-area header-area2">
          <div className="header header2 pt-30">
            <div className="container">
              <div className="header-top">
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3  col-md-3  col-sm-8 col-8 pl-0 pr-md-0">
                    <div className="logo-area">
                      <div className="logo2 white-bg z-index1 position-relative">
                        <Link
                          href="/"
                          className="d-block"
                          data-toggle="tooltip"
                          data-selector="true"
                          data-placement="bottom"
                          title="stepmeds"
                        >
                          <Image src={logoOne} alt="stepmeds" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-6  col-sm-1 col-1 pl-0 pr-0 justify-content-center">
                    <div
                      className="header-search w-100 position-relative mr-1 d-lg-inline-block"
                      data-toggle="tooltip"
                      data-selector="true"
                      data-placement="bottom"
                      title="Search"
                    >
                      <div className="search-form">
                        <div className="d-none d-md-inline-block width100">
                          <input
                            type="text"
                            placeholder="Search Anything You Want"
                            className="pl-25 width100 rounded-0 h2-gray-border1"
                          />
                          <span className="position-absolute">
                            <span className="icon-search"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3  col-lg-3  col-md-3  col-sm-3 col-3  pl-0 d-flex  align-items-center justify-content-end">
                    <div className="header-right d-flex align-items-center">
                      <ul className="header-account d-none d-md-block">
                        <li className="d-none d-md-inline-block">
                          <Link
                            href="/login"
                            data-toggle="tooltip"
                            data-selector="true"
                            data-placement="bottom"
                            title="My Account"
                            className="dark-black-color"
                          >
                            <span>
                              <i className="fal fa-user-circle"></i>
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
                            className="dark-black-color"
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
                            className="dark-black-color"
                          >
                            <span>
                              <i className="fal fa-heart"></i>
                            </span>
                            <span className="s-count position-absolute light-black-bg3 text-white text-center">
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
                                <i className="fal fa-shopping-bag"></i>
                              </span>
                              <span className="s-count position-absolute h2-theme-bg text-white text-center">
                                {productQuantity}
                              </span>
                            </li>
                          </ul>

                          <div className="header-shopping-cart-details border-t-gray1 mt-1 position-absolute bg-white pl-30 pr-30 pt-35 pb-60">
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

              <div
                className="header-bottom home2-header-bottom"
                id="header-sticky"
              >
                <div className="row align-items-center justify-content-lg-between position-relative">
                  <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-1 col-sm-1 col-1 d-flex align-items-center position-static">
                    <div className="logo2 pr-20 white-bg z-index1 position-relative">
                      <Link
                        href="/"
                        className="d-block"
                        data-toggle="tooltip"
                        data-selector="true"
                        data-placement="bottom"
                        title="stepmeds"
                      >
                        <Image src={logoOne} alt="stepmeds" />
                      </Link>
                    </div>

                    <div className="main-menu main-menu-2">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3  col-lg-3 col-md-11 col-sm-12 col-12">
                    <div className="header-bottom-right d-flex align-items-center justify-content-end">
                      <ul className="track-order pr-20 position-relative d-none d-xl-inline-block">
                        <li>
                          <Link href="#">Order</Link>
                        </li>
                      </ul>
                      <ul className="free-order d-block pl-20 pr-20 position-relative">
                        <li>
                          <Link href="#">FAQs</Link>
                        </li>
                      </ul>
                      <ul className="news-letter pl-20 position-relative">
                        <li className="position-relative">
                          <Link className="newsletter-tootle" href="#">
                            Newsletter
                          </Link>
                        </li>
                        <li className="subscribe-form-area white-bg border-t-gray1 position-absolute subscribe-form-area1 pt-30 pl-25 pr-25 pb-30">
                          <h5 className="title position-relative d-inline-block font500 light-black-color2 mb-20 hvr">
                            Join Our Newsletter
                          </h5>
                          <form action="#">
                            <div className="">
                              <div className="subscribe-info position-relative mb-15 w-100">
                                <input
                                  className="sub-name form-control border-0 pl-35 h2-theme-color light-theme-bg w-100"
                                  type="email"
                                  name="name"
                                  id="sub-name"
                                  placeholder="Enter Your Email Address"
                                />
                              </div>
                              <div className="subscribe-btn">
                                <div className="d-inline-block">
                                  <Link
                                    href="#"
                                    className="web-btn h2-web-btn h2-theme-border1 d-inline-block text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-12"
                                  >
                                    Subscribe
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="save-info d-flex align-items-start mb-15 mt-18">
                              <input
                                className="p-0 mr-10"
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                              />
                              <p className="mb-0 cursor-pinter light-black-color7">
                                Accept
                                <Link
                                  className="light-black-color7 line-height-1"
                                  href="/terms-and-condition"
                                >
                                  Terms & Conditions
                                </Link>
                                and
                              
                              </p>
                            </div>
                          </form>
                        </li>
                      </ul>
                      <div className="d-block d-lg-none">
                        <Link
                          className="mobile-menubar pt-0 ml-20 hvr2"
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
      <ResponsiveMenu />
      <OverlyDiv />
    </>
  );
};

export default HeaderTwo;
