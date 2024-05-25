import React from "react";
import logoThumb from "../../../../public/assets/images/logo/logo.png";
import Image from "next/image";
import useGlobalContext from "@/hooks/use-context";
import Link from "next/link";
const MobileMenuTwo = () => {
    const {toggleSideMenu} = useGlobalContext()
  return (
    <>
      <div className="mobile-menu-area pt-30 pb-30 d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <Link href="/">
                <div className="logo">
                  <Image src={logoThumb} alt="" height={40} />
                </div>
              </Link>
            </div>
            <div className="col-6 ">
              <button onClick={toggleSideMenu} className="mobile-menubar bar-style">
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
                        0
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
    </>
  );
};

export default MobileMenuTwo;
