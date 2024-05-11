import { blogData } from "@/data/blog-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogHomeTwo = () => {
  return (
    <>
      <div className="blog-area blog-area2 hm2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="section-title  mb-20">
                <h3 className="font-pt light-black-color2 pb-1">
                  Latest News & Blog
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogData?.slice(0,3)?.map((item) => (
              <div
                key={item.id}
                className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12"
              >
                <div className="single-blog-2 mb-60">
                  <div className="blog-thumb mb-20">
                    <Link href={`/blog-details/${item?.id}`}>
                      <Image style={{ width: "100%", height: "auto" }}src={item?.img} alt="" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span> {item?.month} {item?.date}, {item?.year}</span>
                      <Link href={`/blog-details/${item?.id}`}>By Author</Link>
                    </div>
                    <h4 className="b-title">
                      <Link href={`/blog-details/${item?.id}`}>
                        {item.details}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHomeTwo;
