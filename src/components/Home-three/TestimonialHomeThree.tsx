"use client";
import React from "react";
import client1 from "../../../public/assets/images/bg/client-avater.png";
import client2 from "../../../public/assets/images/bg/avater2.png";
import GetRatting from "@/hooks/GetRatting";
import { A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
const TestimonialHomeThree = () => {
  const sliderData = [
    {
      id: 1,
      img: client1,
    },
    {
      id: 2,
      img: client2,
    },
    {
      id: 3,
      img: client1,
    },
    {
      id: 4,
      img: client2,
    },
  ];

  return (
    <>
      <div className="testimonial-area testimonial-area3 hm3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
              <div className="section-title text-center">
                <h3 className="font-pt light-black-color2 pb-1">
                  What Clients Says
                </h3>
              </div>
            </div>
          </div>
          <div className="testimonial-area home3-testimonial-active pb-110 pt-25">
            <Swiper
              modules={[A11y, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,    
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2,
                },
              }}
            >
              {sliderData?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-4 col-lg-4  col-md-4  col-sm-3 col-12 pr-0 pt-6 d-flex justify-sm-content-end justify-content-center">
                      <div className="testimonial-avater position-relative">
                        <Image src={item?.img} alt="" />
                        <div className="quote position-absolute">
                          <span className="h3-theme-bg white d-block text-center">
                            <i className="fas fa-quote-left"></i>
                          </span>
                        </div>
                        <div className="rating testi-review d-flex align-items-center justify-content-center mt-15">
                          <ul className="d-flex">
                            <GetRatting averageRating={5} />
                          </ul>
                          <span className="light-black-color5 d-inline-block">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8  col-lg-8  col-md-8  col-sm-9 col-12 pl-0  pt-6">
                      <div className="testimonial-comment pt-20 pr-50">
                        <p className="light-black-color7">
                          There are many variations of passage Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour.
                        </p>
                        <div className="testimonial-info d-sm-flex align-items-center pt-20">
                          <h5 className="font600 light-black-color2 pr-10">
                            Jennifer Lopaz
                          </h5>
                          <span className="h3-theme-color">Sr. Authopedic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialHomeThree;
