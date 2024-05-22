"use client";
import { idType } from "@/interFace/interFace";
import React, { useEffect, useState } from "react";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import { BlogType } from "@/sheardComponent/BlogCard";
import api from "@/utils/api";

export interface BlogDetailType extends BlogType {
  blog_gallery: { image: string }[]
  similar: BlogType[]
  body: string
}

const BlogDetailsMain = ({ id }: idType) => {

  const [data, setData] = useState<BlogDetailType | null>(null)

  const getData = async () => {
    const resp = await api.get(`common/blogs/${id}/`)

    setData(resp.data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Breadcrumb pageTitle={data?.title || ''} />
      <div className="blog-details-area mt-100 mb-100">
        {data ? <div className="container">
          <div className="product-wrapper">
            <div className="row">
              <div className="col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12">
                <div className="row">
                  <BlogContent fileterData={data} />
                </div>
              </div>
              <BlogSidebar data={data.similar} />
            </div>
          </div>
        </div> : ''}
      </div>
    </>
  );
};

export default BlogDetailsMain;
