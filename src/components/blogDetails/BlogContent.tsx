"use client";
import { blogDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import { Scrollbar, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import React from "react";
import bannerImg from "../../../public/assets/images/banner/banner-img.jpg";
import bannerImgTwo from "../../../public/assets/images/banner/banner-img2.jpg";
interface propsType {
  fileterData: blogDataType | any;
}

const BlogContent = ({ fileterData }: propsType) => {
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
        <div className="blog-content pr-50">
          <Link href="/blog-details" className="d-block mb-30">
            <Image
              src={fileterData?.img}
              style={{ width: "100%", height: "auto" }}
              alt="blog-details-img"
            />
          </Link>
          <h3 className="font600 light-black-color3 pb-15">
            {fileterData?.title}
          </h3>
          <p>
            sit amet consectetur adipisicing elit. A placeat, sint ab non
            ratione eligendi qui facilis numquam magnam eius iusto perferendis
            minima molestiae perspiciatis laborum saepe quo consectetur aliquid!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius in
            ipsam ratione facere vero iste repudiandae beatae quasi, voluptate
            mollitia iusto harum error reiciendis eligendi molestiae eum?
            Assumenda nesciunt odio, maxime ratione sint possimus quae, numquam
            laborum cum, voluptatem, aliquam obcaecati excepturi quidem ex
            praesentium commodi aperiam quis non voluptates iusto distinctio
            doloribus enim necessitatibus! Quae vel alias sequi?
          </p>
          <p>
            velit veritatis voluptate ratione earum odio, porro, iste explicabo
            optio , hic voluptas eligendi cupiditate, itaque ab quas eveniet
            maiores in officiis aspernatur incidunt consequatur laboriosam
            quibusdam. Nesciunt possimus qui incidunt distinctio cumque?.
          </p>
          <blockquote className="blockquote mb-30">
            <p className="mb-0">
              Web pageMany desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              ‘lorem ipsum’ will uncover many web sites still in their
              infancy.Ipsum as their default model Ipsum as their default model.
              will uncover many web sites still in their infancy
            </p>
          </blockquote>
        </div>
        <div className="blog-content blog-content2 pr-50 mt--15">
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
                {sliderData?.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div className="pl-15 pr-15">
                      <Link href="/blog-details">
                        <Image
                          className="width100"
                          src={item.img}
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
          <p className="mt-15">
            eaque similique enim quibusdam officiis non pariatur aspernatur odit
            tempora rerum dolorem veritatis. Voluptas, natus molestias.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Vitae error
            quaerat corporis, incidunt et ipsa omnis amet? Voluptatum quae amet
            doloribus perferendis necessitatibus Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Vitae error quaerat corporis,
            incidunt et ipsa omnis amet? Voluptatum quae amet doloribus
            perferendis necess esse a! Quo, ipsa! Ipsa suscipit laudantium
            facilis, sunt minus,ipsum dolor sit amet consectetur, adipisicing
            elit. Vitae error quaerat corporis, incidunt et ipsa om.{" "}
          </p>
        </div>
        <div className="blog-footer blog-content pr-50 d-sm-flex justify-content-between pt-50">
          <ul className="post-tag pb-20">
            <li className="d-inline-block pr-6">
              <Link
                className="light-black-color2 border-gray1 d-block mr-1 hvr2"
                href="#"
              >
                Mask 
              </Link>
            </li>
            <li className="d-inline-block pr-6">
              <Link
                className="light-black-color2 border-gray1 d-block mr-1 hvr2"
                href="#"
              >
                Covid -19
              </Link>
            </li>
            <li className="d-inline-block pr-6">
              <Link
                className="light-black-color2 border-gray1 d-block mr-1 hvr2"
                href="#"
              >
                Sanitizer
              </Link>
            </li>
            <li className="d-inline-block">
              <Link
                className="light-black-color2 border-gray1 d-block mr-1 hvr2"
                href="#"
              >
                Facemask
              </Link>
            </li>
          </ul>
          <ul className="social-link pb-20 d-flex align-items-center">
            <li className="mr-1">
              <Link className="text-white fb-bg d-block" href="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li className="mr-1">
              <Link className="text-white tw-bg d-block" href="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li className="mr-1">
              <Link className="text-white lnkd-bg d-block" href="https://bd.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </li>
            <li>
              <Link className="text-white gg-bg d-block" href="https://myaccount.google.com/">
                <i className="fab fa-google-plus-g"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
