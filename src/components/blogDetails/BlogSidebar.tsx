import React from "react";
import imgOne from "../../../public/assets/images/product/rc-img2.jpg";
import imgTwo from "../../../public/assets/images/product/rc-img3.jpg";
import imgThree from "../../../public/assets/images/product/rc-img1.jpg";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/product-data";
import { useTranslation } from "react-i18next";
const BlogSidebar = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className="col-xl-3  col-lg-3  col-md-12  col-sm-12 col-12 pl-0">
        <div className="shop-sidebar-area blog-sidebar-area">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
              <div className="sidebar-widget ">
                <h5 className="title font600 sidebar-title d-inline-block position-relative mb-25 pb-1">
                  {t("Oxirgi postlar")}
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
                          <Link href={`/blog-details/${item?.id}`}> {item?.title} </Link>
                        </h6>
                        <span>
                          Lorem ipsum, dolor sit amet consectetur adipisicing.
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
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
