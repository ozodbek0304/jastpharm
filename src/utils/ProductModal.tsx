"use client";
import React, { useState } from "react";
import { productData } from "@/data/product-data";
import useGlobalContext from "@/hooks/use-context";
import { ProductType } from "@/interFace/interFace";
import img1 from "../../public/assets/images/product/rc-img1.jpg";
import img2 from "../../public/assets/images/product/rc-img2.jpg";
import img3 from "../../public/assets/images/product/rc-img3.jpg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { wishlist_product } from "@/redux/slices/wishlistSlice";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import GetRatting from "@/hooks/GetRatting";

interface imgType {
  id: number;
  img: StaticImageData;
}

const ProductModal = () => {
  const { modalId } = useGlobalContext();
  const fileterData: ProductType | any = productData.find(
    (item) => item.id == modalId
  );
  const previewImg = fileterData?.largeImg ? fileterData?.largeImg : img1;
  const [selectImg, setselectImg] = useState(previewImg);
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const cartItem = cartProducts.find((item) => item.id == modalId);

  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };
  const handleWishlist = (product: ProductType) => {
    dispatch(wishlist_product(product));
  };

  const handDecressCart = (product: ProductType) => {
    dispatch(decrease_quantity(product));
  };

  const myProduct: imgType[] = [
    {
      id: 1,
      img: previewImg,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
  ];
  const handleChange = (e: any) => {};
  const handleSelectImg = (item: imgType) => {
    setselectImg(item.img);
  };

  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="productmodal"
        // tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  <div className="product-details-area pro-top-thamb pro-bottom-thamb position-relative">
                    <div className="container">
                      <div className="product-details-content">
                        <div
                          className="single-product-tab-content tab-content"
                          id="myTabContent2"
                        >
                          <div className="row">
                            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12">
                              <div className="product-left-img-tab mt-20">
                                <div className="d-flex align-items-start img-preview-box">
                                  <div
                                    className="nav flex-column nav-pills me-4 preview-imges"
                                    id="v-pills-tab"
                                    role="tablist"
                                    aria-orientation="vertical"
                                  >
                                    {myProduct?.map((item) => (
                                      <button
                                        key={item.id}
                                        className="nav-link  bg-transparent"
                                        onClick={() => handleSelectImg(item)}
                                      >
                                        <Image
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                          className="product-thumbnail w-100 border-gray2"
                                          src={item.img}
                                          alt=""
                                        />
                                      </button>
                                    ))}
                                  </div>

                                  <div
                                    className="tab-content"
                                    id="v-pills-tabContent"
                                  >
                                    <div
                                      className="tab-pane fade show active position-relative"
                                      id="v-pills-home"
                                      role="tabpanel"
                                      aria-labelledby="v-pills-home-tab"
                                    >
                                      <div className="product-img border-gray2">
                                        <Image
                                          style={{
                                            width: "100%",
                                            height: "auto",
                                          }}
                                          width={500}
                                          height={500}
                                          src={selectImg}
                                          alt="product"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-11 col-sm-12 col-12">
                              <div className="product-view-info mt-30">
                                <div className="product-left-img-info">
                                  <h3 className="mb-20">
                                    {" "}
                                    {fileterData?.title}{" "}
                                  </h3>
                                  <div className="rating rating-shop d-flex">
                                    <ul className="d-flex mr-2">
                                      <GetRatting
                                        averageRating={fileterData?.ratting}
                                      />
                                    </ul>
                                    <span className="gray-color2">
                                      (
                                      {fileterData?.review > 9
                                        ? `${fileterData?.review}`
                                        : `0${fileterData?.review}`}
                                      )
                                    </span>
                                  </div>
                                  <div className="price pb-18 pt-3">
                                    <span className="rc-price font700">
                                      ${fileterData?.price}.00
                                    </span>
                                  </div>
                                  <div className="p-info-text pr-55">
                                    <p className="gray-color2">
                                      On the other hand, we denounce with
                                      righteous indignation and dislike men who
                                      are so beguiled and demoralized by the
                                      charms we denounce with righteous
                                      indignation and dislike men who are so
                                      beguiled with righteous
                                    </p>
                                    <p className="gray-color2">
                                      But I must explain to you how all this
                                      mistaken idea of denouncing pleasure men
                                      who are so beguiled and demoralized
                                    </p>
                                  </div>
                                  <div className="all-info d-sm-flex align-items-center mt-35">
                                    <div className="quick-add-to-cart d-sm-flex align-items-center mb-15 mr-10">
                                      <div className="quantity-field position-relative d-inline-block mr-3">
                                        <span
                                          onClick={() =>
                                            handleAddToCart(
                                              fileterData && fileterData
                                            )
                                          }
                                          className="custom-prev cursor-pinter"
                                        >
                                          <i className="icon-plus"></i>
                                        </span>
                                        <input
                                          type="text"
                                          name="select1"
                                          onChange={handleChange}
                                          value={
                                            cartItem?.totalCard
                                              ? cartItem?.totalCard
                                              : 0
                                          }
                                          className="quantity-input-arrow quantity-input text-center border-gray"
                                        />

                                        <span
                                          onClick={() =>
                                            handDecressCart(
                                              fileterData && fileterData
                                            )
                                          }
                                          className="custom-next cursor-pinter"
                                        >
                                          <i className="icon-minus"></i>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="pro-list-btn d-inline-block mr-10 mb-15">
                                      <Link
                                        href="/shopping-cart"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-35 pr-35 ptb-17"
                                      >
                                        View Cart
                                      </Link>
                                    </div>
                                    <div className="pro-wishlist d-inline-block mb-15">
                                      <Link
                                        href=""
                                        onClick={() =>
                                          handleWishlist(
                                            fileterData && fileterData
                                          )
                                        }
                                        className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden plr-16 ptb-15"
                                      >
                                        <span className="icon-heart"></span>
                                      </Link>
                                    </div>
                                  </div>
                                  <ul className="review-cat d-sm-flex align-items-center pt-20 pb-15">
                                    <li className="mb-1 mb-2 mr-6 d-inline-block">
                                      <span className="cat-title dark-black-color font600">
                                        Categories :
                                      </span>
                                    </li>
                                    <li className="mr-6 mb-2 d-inline-block position-relative">
                                      <Link
                                        href="/shop"
                                        className="gray-color2 font600"
                                      >
                                        Mask,
                                      </Link>
                                    </li>
                                    <li className="mr-6 mb-2 d-inline-block position-relative">
                                      <Link
                                        href="/shop"
                                        className="gray-color2 font600"
                                      >
                                        Covid -19,
                                      </Link>
                                    </li>
                                    <li className="mr-6 mb-2 d-inline-block position-relative">
                                      <Link
                                        href="/shop"
                                        className="gray-color2 font600"
                                      >
                                        Sanitizer,
                                      </Link>
                                    </li>
                                    <li className="mr-6 mb-2 d-inline-block position-relative">
                                      <Link
                                        href="/shop"
                                        className="gray-color2 font600"
                                      >
                                        Facemask
                                      </Link>
                                    </li>
                                  </ul>
                                  <ul className="social-link mt-10">
                                    <li className="d-block d-sm-inline-block mr-12">
                                      <span className="cat-title dark-black-color font600">
                                        Share Now:
                                      </span>
                                    </li>
                                    <li
                                      className="d-inline-block"
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="Facebook"
                                    >
                                      <Link
                                        className="d-inline-block font13 text-uppercase transition-3 mb-20"
                                        href="https://www.facebook.com/"
                                      >
                                        <span className="d-inline-block text-center">
                                          <i className="fab fa-facebook-f"></i>
                                        </span>
                                      </Link>
                                    </li>
                                    <li
                                      className="d-inline-block"
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="Twitter"
                                    >
                                      <Link
                                        className="d-inline-block font13 text-uppercase transition-3 mb-20"
                                        href="https://twitter.com/"
                                      >
                                        <span className="d-inline-block text-center">
                                          <i className="fab fa-twitter"></i>
                                        </span>
                                      </Link>
                                    </li>
                                    <li
                                      className="d-inline-block"
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="Instagram"
                                    >
                                      <Link
                                        className="d-inline-block font13 text-uppercase transition-3 mb-20"
                                        href="https://www.instagram.com/"
                                      >
                                        <span className="d-inline-block text-center">
                                          <i className="fab fa-instagram"></i>
                                        </span>
                                      </Link>
                                    </li>
                                    <li
                                      className="d-inline-block"
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="Pinterest"
                                    >
                                      <Link
                                        className="d-inline-block font13 text-uppercase transition-3 mb-20"
                                        href="https://bd.linkedin.com/"
                                      >
                                        <span className="d-inline-block text-center">
                                          <i className="fab fa-linkedin-in"></i>
                                        </span>
                                      </Link>
                                    </li>
                                    <li
                                      className="d-inline-block"
                                      data-toggle="tooltip"
                                      data-selector="true"
                                      data-placement="bottom"
                                      title="Google plus"
                                    >
                                      <Link
                                        className="d-inline-block font13 text-uppercase transition-3 mb-20"
                                        href="https://www.behance.net/"
                                      >
                                        <span className="d-inline-block text-center">
                                          <i className="fab fa-behance"></i>
                                        </span>
                                      </Link>
                                    </li>
                                  </ul>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
