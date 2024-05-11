import React from 'react';
import bannerPro from "../../../public/assets/images/banner/pro-banner-bg.jpg"
import MaskImg from "../../../public/assets/images/banner/sidebar-banner.png"
import Image from 'next/image';
import Link from 'next/link';
const SidebarCategory = () => {
    return ( 
        <>
            <div className="col-xl-3  col-lg-4  d-none d-lg-block">
                  <div className="product-banner-area position-relative wow">
                    <div
                      className="product-banner-content banner-content-2 position-absolutes top0 left0 right0"
                      style={{ backgroundImage: `url(${bannerPro.src})`}}
                    >
                      <div className="pro-banner-text">
                        <h5 className="title cursor-pinter has-border-left d-inline-block position-relative text-white text-uppercase mb-25 font-pt-demi">
                          Categories
                        </h5>
                        <ul className="product-cat-items">
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Hand Sanitizer
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Lab N95 Face Mask
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Hand Gloves
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Medical Equipment
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Home Accessories
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              New Arrival Product
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Special Offers
                            </Link>
                          </li>
                          <li className="mb-14">
                            <Link
                              className="text-white d-block"
                              href="/shop-details"
                            >
                              <span className="icon-chevron-right"></span>
                              Inhaler Pressure Drop
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="pro-banner-img position-relative">
                        <Link
                          href="/shop-details"
                          className="d-block text-center mt-55 pb-18"
                        >
                          <Image
                            className="img-zoom transition-3"
                            src={MaskImg}
                            alt="sidebar-img"
                          />
                        </Link>
                        <div className="off-tag position-absolute">
                          <Link
                            className="d-flex justify-content-center flex-column text-center"
                            href="/shop-details"
                          >
                            <span className="d-block">10%</span>
                            <span className="d-blocktext-uppercase">off</span>
                          </Link>
                        </div>
                      </div>
                      <div className="banner-title text-center">
                        <h4 className="font-pt text-white">Protective Mask</h4>
                        <Link
                          href="/shop"
                          className="border-b-white01 line-height-1 text-white d-inline-block text-capitalize position-relative"
                        >
                          Purchase Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
        </>
    );
};

export default SidebarCategory;