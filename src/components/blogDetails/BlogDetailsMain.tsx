"use client";
import { blogData } from "@/data/blog-data";
import { blogDataType, idType } from "@/interFace/interFace";
import React from "react";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import Breadcrumb from "@/sheardComponent/Breadcrumb";

const BlogDetailsMain = ({ id }: idType) => {
  const fileterData: blogDataType | any = blogData.find(
    (item) => item.id == id
  );
  return (
    <>
      <Breadcrumb pageTitle="Blog Details" />
      <div className="blog-details-area mt-100 mb-100">
        <div className="container">
          <div className="product-wrapper">
            <div className="row">
              <div className="col-xl-9  col-lg-9  col-md-12  col-sm-12 col-12">
                <div className="row">
                  <BlogContent fileterData={fileterData} />
                </div>
              </div>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsMain;
