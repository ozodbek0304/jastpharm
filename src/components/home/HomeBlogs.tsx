"use client"

import { blogData } from "@/data/blog-data";
import BlogCard from "@/sheardComponent/BlogCard";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
const HomeBlogs = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className="blog-area pb-20 bgimg-4 mt-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="section-title text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  {t("Blog")}
                </h3>
              </div>
            </div>
          </div>
          <div className="row news-post-active">
            <BlogCard start={0} end={3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogs;
