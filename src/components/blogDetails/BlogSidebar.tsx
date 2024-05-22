import React from "react";
import Image from "next/image";
import Link from "next/link";
import { productData } from "@/data/product-data";
import { useTranslation } from "react-i18next";
import { BlogType } from "@/sheardComponent/BlogCard";
const BlogSidebar = ({ data }: { data: BlogType[] }) => {

  const { t } = useTranslation()

  return (
    <>
      <div className="col-xl-4  col-lg-4  col-md-12  col-sm-12 col-12 pl-0">
        <div className="shop-sidebar-area blog-sidebar-area">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-6  col-sm-12 col-12">
              <div className="sidebar-widget ">
                <h5 className="title font600 sidebar-title d-inline-block position-relative mb-15 pb-1">
                  {t("Oxirgi postlar")}
                </h5>
                <div className="side-product mb-15">
                  {data.map((item) => (
                    <div
                      key={item?.id}
                      className="side-pro-wrapper d-flex align-items-start mb-15"
                    >
                      <div className="side-pro-img border-gray1 mr-10">
                        <Link href={`/shop-details/${item?.slug}`}>
                          <Image src={item?.image} className="img-fluid" alt="" width={300} height={300} style={{ objectFit: 'cover' }} />
                        </Link>
                      </div>
                      <div className="side-pro-text">
                        <h6 className="pb-10">
                          <Link href={`/blog-details/${item?.slug}`}> {item?.title} </Link>
                        </h6>
                        <div style={{ fontSize: '12px', maxHeight: '36px', overflowY: 'hidden' }}>
                          <span style={{ lineHeight: '12px' }}>
                            {item.description}
                          </span>
                        </div>
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
