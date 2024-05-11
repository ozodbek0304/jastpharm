import Image from 'next/image';
import React from 'react';
import imgOne from "../../../public/assets/images/bg/avater2.png"
import imgTwo from "../../../public/assets/images/bg/client-avater.png"
import Link from 'next/link';
const Comments = () => {
    return (
        <>
           <div className="review-comments-area mt-35">
              <div className="row align-items-center align-items-sm-start align-items-md-center">
                <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-sm-0 pr-md-3">
                  <div className="client-avatar">
                    <Image
                      className="avatar-img width100 height100"
                      src={imgOne}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-9  col-lg-9  col-md-10  col-sm-10 col-12 pl-0 mt-10">
                  <div className="review-text pl-60">
                    <div className="review-head d-sm-flex justify-content-between align-items-center">
                      <div className="d-sm-flex">
                        <h5 className="font600 pr-10">Maxxoile D. Silva</h5>
                        <div className="rating rating-shop d-flex">
                          <ul className="d-flex mr-2">
                            <li>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="fas fa-star"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-star"></i>
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-star"></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <span className="primary-color font600">20 sep 2020</span>
                    </div>
                    <p className="dc-text1 gray-color2 mb-2 mt-10">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni doloreos
                      qui ratione voluptatem sequi nesciunt
                    </p>
                    <Link
                      href="#"
                      className="d-inline-block text-uppercase primary-color font600"
                    >
                      Reply
                      <span className="gray-color2 pl-2">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-xl-11  col-lg-11  col-md-12  col-sm-12 col-12 offset-xl-1 offset-lg-1">
                  <div className="row align-items-center align-items-sm-start align-items-md-center">
                    <div className="col-xl-1  col-lg-2  col-md-2  col-sm-2 col-4 mt-15 pr-3 pr-lg-0 pr-sm-0 pr-md-3">
                      <div className="client-avatar client-avatar2">
                        <Image
                          className="avatar-img width100 height100"
                          src={imgTwo}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-9  col-lg-10  col-md-10  col-sm-10 col-12 pl-xl-15 mt-15">
                      <div className="review-text review-text2 pl-55">
                        <div className="review-head d-sm-flex justify-content-between align-items-center">
                          <div className="d-sm-flex">
                            <h5 className="font600 pr-10">Dennis McCandless</h5>
                            <div className="rating rating-shop d-flex">
                              <ul className="d-flex mr-2">
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fas fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-star"></i>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-star"></i>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <span className="primary-color font600">
                            20 sep 2020
                          </span>
                        </div>
                        <p className="dc-text1 gray-color2 mb-2 mt-10">
                          Quis autem vel eum iure reprehenderit qui in ea
                          voluptate velit esse quam nihil molestiae consequatur,
                          vel illum qui dolorem eum fugiat quo voluptas nulla
                          pariatu
                        </p>
                        <Link
                          href="#"
                          className="d-inline-block text-uppercase primary-color font600"
                        >
                          Reply
                          <span className="gray-color2 pl-2">
                            <i className="fas fa-long-arrow-alt-right"></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
        </>
    );
};

export default Comments;