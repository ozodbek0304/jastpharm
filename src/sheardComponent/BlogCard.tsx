import { blogData } from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface propsType {
    start:number;
    end:number;
}

const BlogCard = ({start,end}:propsType) => {
    return (
        <>
            {blogData?.slice(start,end)?.map((item) => (
              <div
                key={item.id}
                className="col-xl-4  col-lg-4  col-md-6  col-sm-12 col-12 plr-20"
              >
                <div className="single-blog mb-30">
                  <div className="blog-img position-relative transition-3 mt-25">
                    <div className=" over-hidden">
                      <Link href={`/blog-details/${item?.id}`}>
                        <Image
                          className="img-zoom"
                          style={{ width: "100%", height: "auto" }}
                          src={item.img}
                          alt="blog-img"
                        />
                      </Link>
                      <div className="blog-shadow position-absolute transition-5 light-theme-bg"></div>
                      <div className="date position-absolute left-0 bottom-0 d-flex mb-20 ml-30">
                        <Link
                          href="#"
                          className="web-btn border-white01 d-inline-block text-capitalize white-bg theme-color position-relative over-hidden pl-35 pr-35 ptb-12"
                        >
                          <span> {item?.date} </span>
                          <span> {item?.month}</span>
                          <span> {item?.year}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-content position-relative transition-5 pt-3 pr-25 pb-40">
                    <h5>
                      <Link
                        className="pb-15 d-block light-black-color2"
                        href={`/blog-details/${item?.id}`}
                      >
                        {item?.title}
                      </Link>
                    </h5>
                    <p className="pb-1 light-black-color7">{item?.details}</p>
                    <Link
                      href={`/blog-details/${item?.id}`}
                      className="border-b-white01 title primary-color2 font700 d-inline-block text-capitalize position-relative hvr"
                    >
                      Read More
                      <span className="pl-2d-inline-block">
                        <span className="icon-chevron-right"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </>
    );
};

export default BlogCard;