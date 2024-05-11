import React from "react";
import paymentImg from "../../../public/assets/images/footer/payment.png";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import FooterLinksTwo from "./components/FooterLinksTwo";
import FooterLinks from "./components/FooterLinks";
const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer-area footer-bg pt-80">
          <div className="footer-top">
            <div className="container">
              <div className="row d-flex border-b-gray1 pb-40">
                <div className="col-xxl-5 col-xl-5  col-lg-6  col-md-12  col-sm-12 col-12">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 ">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account">
                         <FooterLinks/>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account">
                           <FooterLinksTwo/>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7  col-lg-6  col-md-12  col-sm-12 col-12">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12">
                      <div className="footer-widget f-adress pb-30 pr-60 ml--35">
                        <ul className="footer-address">
                          <li>
                            <Link
                              className="footer-phone"
                              href="tell:+01500123994"
                            >
                              <span className="mr-2">
                                <small className="first-num">+01</small>
                              </span>
                               500 123 994
                            </Link>
                          </li>
                          <li className="office-time pt-22 pb-20 gray-b-border1">
                            <span className="d-block mb-10">
                              Monday - Friday: 9:00-20:00
                            </span>
                            <span className="d-block mb-10">
                              Saturday: 11:00 - 16:00
                            </span>
                          </li>
                          <li className="footer-mail mt-28">
                            <span>
                              Need help? <Link href="mailto:contact@example.com">contact@example.com</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30 f-link ml--3">
                        <p className="font500"> 
                          PO Box 16122 Collins Street <br />
                          Victoria 8007 Australia
                        </p>
                          <Socials/>
                        <div className="copyright-text d-sm-flex justify-content-center align-items-center mt-50">
                          <p className="mb-0">
                            © 2023
                            <Link href="/" className="c-theme">
                              Steapmeds
                            </Link>
                            Medical. all rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom pt-25">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12">
                  <div className="service-area">
                    <ul>
                      <li className="d-inline-block mr-50">
                        <div className="single-service d-flex align-items-center mb-25">
                          <div className="s-ser-icon mr-15">
                            <span className="theme-color">
                              <i className="fal fa-shipping-fast"></i>
                            </span>
                          </div>
                          <div className="s-ser-content">
                            <p className="mb-0">30 Days To Money Back</p>
                          </div>
                        </div>
                      </li>
                      <li className="d-inline-block mr-50">
                        <div className="single-service d-flex align-items-center mb-25">
                          <div className="s-ser-icon mr-15">
                            <span className="theme-color">
                              <i className="fal fa-tram"></i>
                            </span>
                          </div>
                          <div className="s-ser-content">
                            <p className="mb-0">30 Days To Money Back</p>
                          </div>
                        </div>
                      </li>
                      <li className="d-inline-block mr-50">
                        <div className="single-service d-flex align-items-center mb-25">
                          <div className="s-ser-icon mr-15">
                            <span className="theme-color">
                              <i className="fal fa-gift"></i>
                            </span>
                          </div>
                          <div className="s-ser-content">
                            <p className="mb-0">Shipping in 24 Hours</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4  col-lg-4  col-md-12  col-sm-12 pr-0 col-12 d-flex justify-content-lg-end">
                  <div className="footer-widget f-payment pb-25">
                    <div className="footer-payment">
                      <Image src={paymentImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
