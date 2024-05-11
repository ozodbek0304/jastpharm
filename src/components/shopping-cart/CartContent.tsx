"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ProductType } from "@/interFace/interFace";
import {
  cart_product,
  clear_cart,
  decrease_quantity,
  remove_cart_product,
} from "@/redux/slices/cartSlice";
const CartContent = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
    0
  );
  const handleAddToCart = (product: ProductType) => {
    dispatch(cart_product(product));
  };

  const handDecressCart = (product: ProductType) => {
    dispatch(decrease_quantity(product));
  };

  const handleDelteProduct = (product: ProductType) => {
    dispatch(remove_cart_product(product));
  };
  const clearCart = () => {
    dispatch(clear_cart());
  };

  const handleChange = (e: any) => {};
  return (
    <>
      <div className="cart-area mt-100">
        <div className="container border-b-light-gray pb-100">
          <div className="cart-table text-center table-responsive-sm">
            {cartProducts?.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Price images</th>
                    <th scope="col">Product name </th>
                    <th scope="col">Unit price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item, index) => {
                    const productPrice =
                      (item.price ?? 0) * (item.totalCard ?? 0);
                    return (
                      <tr key={item.id}>
                        <td>
                          <Link href="#" className="cart-img d-block">
                            <Image
                              style={{ width: "100%", height: "auto" }}
                              src={item?.img}
                              alt="cart-img"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link href="#" className="p-name primary-color">
                            {item?.title}
                          </Link>
                        </td>
                        <td>
                          <div className="cart-price">${item?.price}.00</div>
                        </td>
                        <td>
                          <div className="all-info product-view-info text-center mt-35">
                            <div className="quick-add-to-cart d-sm-flex align-items-centerm-auto  mb-15 mr-10">
                              <div className="quantity-field position-relative d-inline-block m-auto">
                                <span
                                  onClick={() => handleAddToCart(item)}
                                  className="custom-prev cursor-pinter"
                                >
                                  <i className="icon-plus"></i>
                                </span>
                                <input
                                  type="text"
                                  name="select1"
                                  onChange={handleChange}
                                  value={item.totalCard}
                                  className="quantity-input-arrow quantity-input text-center border-gray"
                                />
                                <span
                                  onClick={() => handDecressCart(item)}
                                  className="custom-next cursor-pinter"
                                >
                                  <i className="icon-minus"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="cart-price">${productPrice}.00</div>
                        </td>
                        <td>
                          <Link
                            onClick={() => handleDelteProduct(item)}
                            href="#"
                            className="p-remove theme-color"
                          >
                            <span className="icon-clear"></span>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <h2>No Cart Product</h2>
            )}
          </div>

          {cartProducts.length > 0 ? (
            <>
              <div className="coupon-and-update-area pt-20">
                <div className="row">
                  <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                    <div className="coupon-code-area pt-15">
                      <form action="#">
                        <input
                          type="text"
                          placeholder="Coupon code"
                          className="pl-15 mr-10 pt-0 mb-15 d-inline-block width50"
                        />
                        <Link
                          href="#"
                          className="web-btn h2-theme-border1 d-inline-block text-uppercase white  rounded-0 h2-theme-color cart-c-btn h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17 mr-20"
                        >
                          Apply coupon
                        </Link>
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                    <div className="update-area d-flex justify-content-xl-end">
                      <Link
                        href="#"
                        onClick={clearCart}
                        className="web-btn h2-theme-border1 d-inline-block text-uppercase white mt-15 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ptb-17 mr-20"
                      >
                        CLEAR CART
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12 offset-xl-6 offset-lg-6">
                  <div className="total-price-area mt-60">
                    <h2 className="font600">Cart totals</h2>
                    <ul className="pt-15 pb-25">
                      <li className="d-flex justify-content-between align-items-center border-gray1 mb-2 pl-25 pr-25 pt-15 pb-15">
                        <span>Subtotal</span>
                        <span>${totalPrice}.00</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center border-gray1 pl-25 pr-25 pt-15 pb-15">
                        <span>Total </span>
                        <span>${totalPrice}.00</span>
                      </li>
                    </ul>
                    <Link
                      href="/checkout"
                      className="web-btn h2-theme-border1 d-inline-block text-uppercase white  rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17 mr-20"
                    >
                      checkout
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default CartContent;
