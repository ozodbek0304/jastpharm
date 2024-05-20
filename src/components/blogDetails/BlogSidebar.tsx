import React from "react";
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
