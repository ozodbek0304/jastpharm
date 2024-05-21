import api from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


export interface BlogType {
  id: number
  slug: string
  title: string
  description: string
  image: string
}

interface propsType {
  start?: number | undefined;
  end?: number | undefined;
  data?: BlogType[]
}
const BlogCard = ({ start, end, data: oldData }: propsType) => {

  const [data, setData] = useState<BlogType[]>([])

  const getData = async () => {
    const resp = await api.get(`common/blogs/`)

    setData(resp.data);
  }

  useEffect(() => {
    if (oldData) {
      setData(oldData)
    } else {
      getData()
    }
  }, [])

  return (
    <>
      {start !== undefined && end !== undefined ? data?.slice(start, end)?.map((item) => (
        <div
          key={item.id}
          className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 plr-20"
        >
          <div className="single-blog mb-30">
            <div className="blog-img position-relative transition-3 mt-25">
              <div className="over-hidden">
                <Link href={`/blog-details/${item?.slug}`}>
                  <Image
                    className="img-zoom"
                    style={{ width: "100%", height: "230px" }}
                    src={item.image}
                    height={900}
                    width={900}
                    alt="blog-img"
                  />
                </Link>
                <div className="blog-shadow position-absolute transition-5 light-theme-bg"></div>
                <div className="date position-absolute left-0 bottom-0 d-flex mb-20 ml-30">
                  <Link
                    href="#"
                    className="web-btn border-white01 d-inline-block text-capitalize white-bg theme-color position-relative over-hidden pl-35 pr-35 ptb-12"
                  >
                    <span> {'12'} </span>
                    <span> {'May'}</span>
                    <span> {'2024'}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="single-blog-content position-relative transition-5 pt-3 pr-25 pb-10">
              <h5>
                <Link
                  className="pb-15 d-block light-black-color2"
                  href={`/blog-details/${item?.slug}`}
                >
                  {item?.title}
                </Link>
              </h5>
              <p className="pb-1 light-black-color7">{item?.description}</p>
              {/* <Link
                href={`/blog-details/${item?.id}`}
                className="border-b-white01 title primary-color2 font700 d-inline-block text-capitalize position-relative hvr"
              >
                {"to'liq"}
                <span className="pl-2d-inline-block">
                  <span className="icon-chevron-right"></span>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      )) : (
        data?.map((item) => (
          <div
            key={item.id}
            className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 plr-20"
          >
            <div className="single-blog mb-30">
              <div className="blog-img position-relative transition-3 mt-25">
                <div className="over-hidden">
                  <Link href={`/blog-details/${item?.slug}`}>
                    <Image
                      className="img-zoom"
                      style={{ width: "100%", height: "230px" }}
                      src={item.image}
                      height={900}
                      width={900}
                      alt="blog-img"
                    />
                  </Link>
                  <div className="blog-shadow position-absolute transition-5 light-theme-bg"></div>
                  <div className="date position-absolute left-0 bottom-0 d-flex mb-20 ml-30">
                    <Link
                      href="#"
                      className="web-btn border-white01 d-inline-block text-capitalize white-bg theme-color position-relative over-hidden pl-35 pr-35 ptb-12"
                    >
                      <span> {'12'} </span>
                      <span> {'May'}</span>
                      <span> {'2024'}</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="single-blog-content position-relative transition-5 pt-3 pr-25 pb-10">
                <h5>
                  <Link
                    className="pb-15 d-block light-black-color2"
                    href={`/blog-details/${item?.slug}`}
                  >
                    {item?.title}
                  </Link>
                </h5>
                <p className="pb-1 light-black-color7">{item?.description}</p>
                {/* <Link
                  href={`/blog-details/${item?.id}`}
                  className="border-b-white01 title primary-color2 font700 d-inline-block text-capitalize position-relative hvr"
                >
                  {"to'liq"}
                  <span className="pl-2d-inline-block">
                    <span className="icon-chevron-right"></span>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default BlogCard;