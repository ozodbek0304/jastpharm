"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const CuponArea = () => {
  const router =  useRouter()
  const handleLoging = () => {
    router.push("/login")
  }
  return (
    <>
      <div className="coupon-area mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
              <div className="coupon-accordion">
                <h6 className="pt-15 pl-40 pb-15 mb-25 position-relative">
                  Returning customer?{" "}
                  <span
                    id="login"
                    onClick={handleLoging}
                    className="light-black-color2 font600 transition-3"
                  >
                    Click here to login
                  </span>
                </h6>
                <div
                  id="checkout-login"
                  className="coupon-content border-gray pt-20 pb-35 pl-30 pr-30 mb-25"
                >
                  <div className="coupon-info">
                    <p className="coupon-text mb-15">
                      Quisque gravida turpis sit amet nulla posuere lacinia.
                      Cras sed est sit amet ipsum luctus.
                    </p>
                    <form action="#">
                      <p className="log-mail mb-0">
                        <label>
                          Username or email{" "}
                          <span className="required">
                            <span className="theme-color">*</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control primary-bg2 border-gray"
                        />
                      </p>
                      <p className="log-pass mb-0">
                        <label>
                          Password{" "}
                          <span className="required">
                            <span className="theme-color">*</span>
                          </span>
                        </label>
                        <input
                          type="text"
                          className="form-control primary-bg2 border-gray"
                        />
                      </p>
                      <div className="log-btn mb-0">
                        <Link
                          href="#"
                          className="web-btn h2-theme-border1 d-inline-block text-capitalize white mt-15 mb-30 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ptb-17 mr-20"
                        >
                          Login
                        </Link>
                        <div className="save-info d-inline-block mb-30 mt-2">
                          <input
                            className="p-0 pr-1"
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <p className="mb-0 d-inline-block">Remember me</p>
                        </div>
                      </div>
                      <p className="lost-password mb-0">
                        <Link href="#" className="light-black-color2 font600">
                          Lost your password?
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12">
              <div className="coupon-accordion">
                <h6 className="pt-15 pl-40 pb-15 mb-25 position-relative">
                  Have a coupon?{" "}
                  <span
                    id="couponshow"
                    onClick={handleLoging}
                    className="light-black-color2 font600 transition-3"
                  >
                    Click here to enter your code
                  </span>
                </h6>
                <div id="checkout-coupon" className="checkout-content">
                  <div className="coupon-info">
                    <form action="#">
                      <p className="checkout-coupon">
                        <input
                          type="text"
                          className="form-control primary-bg2 border-gray"
                          placeholder="Coupon Code"
                        />
                        <Link
                          href="#"
                          className="web-btn h2-theme-border1 d-inline-block text-capitalize white mt-15 mb-30 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ptb-17 mr-20"
                        >
                          Apply coupon
                        </Link>
                      </p>
                    </form>
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

export default CuponArea;
