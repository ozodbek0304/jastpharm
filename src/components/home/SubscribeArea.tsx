import GetRatting from "@/hooks/GetRatting";
import React from "react";
import imgOne from "../../../public/assets/images/bg/client-avater.png";
import Image from "next/image";
import Link from "next/link";
const SubscribeArea = () => {
  return (
    <>
      <div className="subscribe-area subscribe-1">
        <div className="container">
          <div className="border-t-gray1 border-b-gray1">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-10  col-sm-12 col-12 offset-lg-0">
                <div className="subscribe-wrapper border-r-gray1 pt-50 pb-50 ">
                  <div className="section-title mb-25">
                    <h3 className="font-pt light-black-color2 pb-1">
                      Join Our Newsletter
                    </h3>
                    <p className="light-black-color7">
                      Get $20 Discount For The First Order & Also Free Shipping.
                    </p>
                  </div>
                  <div className="subscribe-form-area subscribe-form-area1">
                    <form action="#">
                      <div className="d-sm-flex align-items-center">
                        <div className="subscribe-info position-relative mr-6 mb-15">
                          <input
                            className="sub-name form-control border-0 pl-35 theme-color light-theme-bg"
                            type="email"
                            name="name"
                            id="n-sub-name"
                            placeholder="Enter Your Email Address"
                          />
                        </div>
                        <div className="subscribe-btn mb-15">
                          <div className="d-inline-block">
                            <Link
                              href="#"
                              className="web-btn theme-border1 d-inline-block text-capitalize white theme-bg position-relative over-hidden pl-35 pr-35 ptb-12"
                            >
                              Subscribe
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
              <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                <div className="testimonial-area testimonial-active wow mb-60 mb-lg-0">
                  <div className="row d-flex align-items-center">
                    <div className="col-xl-4 col-lg-4  col-md-2  col-sm-3 col-12 pr-0 pr-0 pt-6 d-flex justify-sm-content-end justify-content-center">
                      <div className="testimonial-avater position-relative">
                        <Image src={imgOne} alt="subscribe-img" />

                        <div className="quote position-absolute">
                          <span className="theme-bg white d-block text-center">
                            <i className="fas fa-quote-left"></i>
                          </span>
                        </div>
                        <div className="rating testi-review d-flex align-items-center justify-content-center mt-15">
                          <ul className="d-flex">
                            <GetRatting averageRating={3.5} />
                          </ul>
                          <span className="light-black-color5 d-inline-block">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-8  col-lg-8  col-md-7  col-sm-9 col-12  pt-6">
                      <div className="testimonial-comment pt-20">
                        <p className="light-black-color7">
                          There are many variations of passage Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form, by injected humour.
                        </p>
                        <div className="testimonial-info d-sm-flex testimonial-padding align-items-center pt-20">
                          <h5 className="font600 light-black-color2 pr-10">
                            Jennifer Lopaz
                          </h5>
                          <span className="theme-color">Sr. Authopedic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeArea;
