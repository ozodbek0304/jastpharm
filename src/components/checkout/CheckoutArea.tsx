"use client";
import { countrys } from "@/data/nice-select-data";
import NiceSelect from "@/elements/NiceSelect";
import React, { useState } from "react";
import FaqContent from "./FaqContent";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

const CheckoutArea = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckedTow, setisCheckedTow] = useState<boolean>(false);
  const [freeShiping, setFreeShiping] = useState<boolean>(false);
  const [paidShiping, setPaidShiping] = useState<boolean>(false);
  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleToggleCheckboxTwo = () => {
    setisCheckedTow(!isCheckedTow);
  };
  const handleToggleFreeShining = () => {
    setFreeShiping(!freeShiping);
    if(paidShiping){
      setPaidShiping(false);
    }
  };
  const handleTogglePaidShiping = () => {
    setPaidShiping(!paidShiping);
    if(freeShiping){
      setFreeShiping(false)
    }
  };

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
    0
  );

  const selectHandler = () => {};

  return (
    <>
      <div className="checkout-area mb-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
              <div className="checkbox-form">
                <h4 className="pb-10 mb-20 border-b-light-gray2">
                  Billing Details
                </h4>
                <div className="row">
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="country-select mb-30">
                      <label>
                        Country <span className="theme-color">*</span>
                      </label>

                      <NiceSelect
                        options={countrys}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        className="w-100 primary-bg2 mb-20"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        First Name <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Last Name <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>Company Name</label>
                      <input
                        type="text"
                        placeholder=""
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Address <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Street address"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="checkout-form-list mb-20">
                      <input
                        type="text"
                        placeholder="Apartment, suite, unit etc. (optional)"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Town / City <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Town / City"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        State / County <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Postcode / Zip <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Postcode / Zip"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Email Address <span className="theme-color">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder=""
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                    <div className="checkout-form-list mb-20">
                      <label>
                        Phone <span className="theme-color">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Postcode / Zip"
                        className="form-control primary-bg2 border-gray"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                    <div className="checkout-form-list create-acc mr-1">
                      <div className="save-info d-inline-block">
                        <input
                          id="cbox-account"
                          className="p-0 pr-2"
                          type="checkbox"
                          aria-label="Checkbox for following text input"
                          checked={isCheckedTow}
                          onChange={() => setisCheckedTow(!isCheckedTow)}
                        />
                        <p
                          onClick={handleToggleCheckboxTwo}
                          className="mb-0 d-inline-block"
                        >
                          Create an account?
                        </p>
                      </div>
                      <div
                        id="cbox-account-info"
                        style={{ display: isCheckedTow ? "block" : "none" }}
                        className="checkout-form-list create-account"
                      >
                        <p>
                          Create an account by entering the information below.
                          If you are a returning customer please login at the
                          top of the page.
                        </p>
                        <label>
                          Account password{" "}
                          <span className="theme-color">*</span>
                        </label>
                        <input
                          type="password"
                          placeholder="password"
                          className="form-control primary-bg2 border-gray"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="different-address">
                  <div className="ship-different-title pb-15 pt-1">
                    <div className="save-info pb-10 border-b-light-gray">
                      <input
                        id="ship-box"
                        className="p-0 mr-1"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                      />
                      <p
                        onClick={handleToggleCheckbox}
                        className="mb-0 d-inline-block text-uppercase pr-15"
                      >
                        Ship to a different address?
                      </p>
                    </div>
                  </div>

                  <div
                    id="ship-box-info"
                    style={{ display: isChecked ? "block" : "none" }}
                  >
                    <div className="row">
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="country-select mb-30">
                          <label>
                            Country{" "}
                            <span className="required primary-bg2">*</span>
                          </label>

                          <NiceSelect
                            options={countrys}
                            defaultCurrent={0}
                            onChange={selectHandler}
                            name=""
                            className="w-100 primary-bg2 mb-20"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            First Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Last Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>Company Name</label>
                          <input
                            type="text"
                            placeholder=""
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Address <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Street address"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <input
                            type="text"
                            placeholder="Apartment, suite, unit etc. (optional)"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Town / City <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Town / City"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            State / County <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Postcode / Zip <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Postcode / Zip"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Email Address <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder=""
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                        <div className="checkout-form-list mb-30">
                          <label>
                            Phone <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Postcode / Zip"
                            className="form-control primary-bg2 border-gray"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="order-notes">
                    <div className="checkout-form-list mb-40">
                      <label>Order Notes</label>
                      <textarea
                        id="checkout-mess"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        className="form-control pt-20 pl-20 primary-bg2 border-gray"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
              <div className="your-order mb-30 pt-30 pr-40 pb-60 pl-40 mt-15">
                <h4 className="pb-10 mb-20 border-b-light-gray3">Your order</h4>
                <div className="your-order-table table-responsive">
                  {cartProducts?.length > 0 ? (
                    <>
                      <table className="width100">
                        <thead>
                          <tr>
                            <th className="product-name">Product</th>
                            <th className="product-total">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartProducts?.map((item) => {
                            const productPrice =
                              (item.price ?? 0) * (item.totalCard ?? 0);
                            return (
                              <tr key={item?.id} className="cart_item">
                                <td className="product-name">
                                  {item?.title}
                                  <strong className="product-quantity">
                                    {" "}
                                    × {item?.totalCard}{" "}
                                  </strong>
                                </td>
                                <td className="product-total">
                                  <span className="amount">
                                    ${productPrice}.00
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Cart Subtotal</th>
                            <td>
                              <span className="amount">${totalPrice}.00</span>
                            </td>
                          </tr>
                          <tr className="shipping">
                            <th>Shipping</th>
                            <td>
                              <ul>
                                <li className="d-flex">
                                  <input
                                    id="cbox-account"
                                    className="p-0 pr-2"
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                    checked={paidShiping}
                                    onClick={handleTogglePaidShiping}
                                  />
                                  <label className="mb-0 checkbox-margin" onClick={handleTogglePaidShiping}>
                                    Flat Rate:{" "}
                                    <span className="amount">$8.00</span>
                                  </label>
                                </li>
                                <li className="d-flex">
                                  <input
                                    id="cbox-account"
                                    className="p-0 pr-2"
                                    type="checkbox"
                                    aria-label="Checkbox for following text input"
                                    checked={freeShiping}
                                    onClick={handleToggleFreeShining}
                                  />
                                  <label onClick={handleToggleFreeShining} className="mb-0 checkbox-margin">Free Shipping:</label>
                                </li>
                                <li></li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td>
                              <strong>
                                <span className="amount">
                                  <b>
                                    ${paidShiping ? totalPrice + 8 : totalPrice}
                                    .00{" "}
                                  </b>
                                </span>
                              </strong>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </>
                  ) : (
                    <>
                      <div className="">
                        <p>No Card Product Found</p>
                        <Link
                          href="/shop"
                          className="web-btn  d-inline-block text-uppercase white theme-bg position-relative over-hidden pl-30 pr-30 ptb-17"
                        >
                          Shop Now
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="payment-method mt-40">
                  <div className="accordion" id="accordionExample">
                    <FaqContent />
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

export default CheckoutArea;
