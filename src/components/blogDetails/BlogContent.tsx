"use client";

import Image from "next/image";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import React from "react";
import bannerImg from "../../../public/assets/images/banner/banner-img.jpg";
import bannerImgTwo from "../../../public/assets/images/banner/banner-img2.jpg";
import { BlogDetailType } from "./BlogDetailsMain";
import parse from 'html-react-parser'



const BlogContent = ({ fileterData }: { fileterData: BlogDetailType }) => {
  const sliderData = [
    {
      id: 1,
      img: bannerImg,
    },
    {
      id: 2,
      img: bannerImgTwo,
    },
    {
      id: 1,
      img: bannerImg,
    },
  ];

  return (
    <>
      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
        <div className="blog-content pr-10">
          <Link href="#" className="d-block mb-30">
            <Image
              src={fileterData.image}
              style={{ width: "100%", height: "100%", objectFit: 'cover' }}
              alt="blog-details-img"
              height={400}
              width={1200}
            />
          </Link>
          <h3 className="font600 light-black-color3 pb-15">
            {fileterData.title}
          </h3>
          <p>
            {fileterData.description}
          </p>
          <p>
            {parse(fileterData.body)}
          </p>
        </div>
        <div className="blog-content blog-content2 pr-50 mt-25">
          <div className="blog-content-img">
            <div className="row blog-details-img-active">
              <Swiper
                modules={[Scrollbar, A11y, Autoplay, Navigation]}
                spaceBetween={0}
                loop={true}
                observeParents={true}
                observer={true}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                navigation={{
                  nextEl: ".blog-button-next",
                  prevEl: ".blog-button-prev",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                  },
                }}
              >
                {fileterData.blog_gallery?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="pl-15 pr-15">
                      <Link href="/blog-details">
                        <Image
                          className="width100"
                          src={item.image}
                          height={400}
                          width={1200}
                          style={{ width: "100%", height: "auto" }}
                          alt="banner-img"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
