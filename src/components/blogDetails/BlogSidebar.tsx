import React from "react";
import imgOne from "../../../public/assets/images/product/rc-img2.jpg";
import imgTwo from "../../../public/assets/images/product/rc-img3.jpg";
import imgThree from "../../../public/assets/images/product/rc-img1.jpg";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/product-data";
const BlogSidebar = () => {
  return (
    <>
      <div className="col-xl-3  col-lg-3  col-md-12  col-sm-12 col-12 pl-0">
        <div className="shop-sidebar-area blog-sidebar-area">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="sidebar-widget mb-20">
                <h5 className="mb-15 title font600 sidebar-title d-inline-block position-relative pb-1">
                  Blog Categories
                </h5>
                <ul>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Accessories<span> (2)</span>
                    </Link>
                  </li>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Clothing <span>(8)</span>
                    </Link>
                  </li>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Interior <span>(3)</span>
                    </Link>
                  </li>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Lights <span>(4)</span>
                    </Link>
                  </li>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Wheel <span>(9)</span>
                    </Link>
                  </li>
                  <li className="pb-15 d-block">
                    <Link href="/blog">
                      Tires <span>(11)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
              <div className="sidebar-widget ">
                <h5 className="title font600 sidebar-title d-inline-block position-relative mb-25 pb-1">
                  Recent Product
                </h5>
                <div className="side-product mb-15">
                  {productData?.slice(6, 9).map((item) => (
                    <div
                      key={item?.id}
                      className="side-pro-wrapper d-flex align-items-start mb-15"
                    >
                      <div className="side-pro-img border-gray1 mr-10">
                        <Link href={`/shop-details/${item?.id}`}>
                          <Image src={item?.img} className="img-fluid" alt="" />
                        </Link>
                      </div>
                      <div className="side-pro-text">
                        <h6 className="pb-10">
                          <Link href={`/shop-details/${item?.id}`}> {item?.title} </Link>
                        </h6>
                        <span className="price font500">
                          ${item?.price}.00 <del>$19.50</del>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
              <div className="sidebar-widget mt-25">
                <h5 className="mb-10 title font600 sidebar-title d-inline-block position-relative pb-1">
                  Archives
                </h5>
                <ul className="shop-archive">
                  <li className="pb-10 font14">
                    <Link href="#">May 2018</Link>
                  </li>

                  <li className="pb-10 font14">
                    <Link href="#">November 2017</Link>
                  </li>

                  <li className="pb-10 font14">
                    <Link href="#">August 2016</Link>
                  </li>

                  <li className="pb-10 font14">
                    <Link href="#">November 2019</Link>
                  </li>

                  <li className="pb-10 font14">
                    <Link href="#">July 2016</Link>
                  </li>

                  <li className="pb-10 font14">
                    <Link href="#">August 2010</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
              <div className="sidebar-widget mt-25">
                <h5 className="mb-20 title font600 sidebar-title d-inline-block position-relative pb-1">
                  Popular tags
                </h5>
                <ul className="shop-tag">
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Small</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Fashion</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Magenta</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Grey</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Clothing</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Grey</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Small</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">large</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Yellows</Link>
                  </li>
                  <li className="pb-10 font13 d-inline-block">
                    <Link href="#">Magenta</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
