import React from "react";
import bannerImg from "../../../public/assets/images/banner/home3/off-banner2.jpg";
import bannerTwo from "../../../public/assets/images/bg/Pattern-banner.png";
import Image from "next/image";
import Link from "next/link";
const FeaturedHomeThree = () => {
  return (
    <>
      <div className="off-banner-area pt-55 mb-45 hm3">
        <div className="container position-relative">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-8 col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12 pl-0 ">
              <div
                className="off-banner-area mb-50 wow fadeInLeft animated banner-space"
                data-wow-duration="1.5s"
              >
                <Image
                  style={{ width: "100%", height: "auto" }}
                  className="width100"
                  src={bannerImg}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4  col-lg-4  col-md-12  col-sm-12 col-12 pb-15 pl-0 d-flex align-items-center justify-content-center">
              <div
                className="subscribe-wrapper subscribe-wrapper3 wow fadeInRight animated"
                data-wow-duration="1.5s"
              >
                <div className="section-title mb-25">
                  <h3 className="font-pt light-black-color2 mb-20">
                    Join Our Newsletter & Save 30% On Purchase
                  </h3>
                  <p className="light-black-color7 font300">
                    Leave your email to get all hot deals which benefit most!
                  </p>
                </div>
                <div className="subscribe-form-area subscribe-form-area1 d-flex align-items-center justify-content-center pt-25">
                  <form action="#" className="width100">
                    <div className="subscribe-h-3">
                      <div className="subscribe-info position-relative mr-6 mb-15 w-100">
                        <input
                          className="sub-name form-control border-0 rounded-0 pl-35 theme-color gray-bg4 pt-10 pb-10"
                          type="email"
                          name="name"
                          id="n-sub-name"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="subscribe-btn">
                        <div className="d-inline-block">
                          <Link
                            href="#"
                            className="sub-btn font14 d-inline-block text-capitalize white h3-theme-bg position-relative rounded-0"
                          >
                            <i className="fal fa-rocket"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="save-info d-flex mb-15">
                      <input
                        className="p-0 mr-10"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                      <p className="mb-0 cursor-pinter light-black-color7">
                        Accept
                        <Link
                          className="light-black-color7 mr-1 ml-1 line-height-1"
                          href="/terms-and-condition"
                        >
                          Terms & Conditions
                        </Link>
                       
                      
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="b-pattern position-absolute top0">
            <Image src={bannerTwo} alt="banner-two" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedHomeThree;
