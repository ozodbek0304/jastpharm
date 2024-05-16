import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import FooterLinks from "./components/FooterLinks";
import FooterLinksTwo from "./components/FooterLinksTwo";
import { useTranslation } from "react-i18next";


const FooterTwo = () => {

  const { t } = useTranslation()

  return (
    <>
      <footer>
        <div className="footer-area footer2 pt-60 footer-bg">
          <div className="footer-top">
            <div className="container">
              <div className="row d-flex border-b-gray1 pb-40">
                <div className="col-xxl-5 col-xl-5  col-lg-6  col-md-12  col-sm-12 col-12 pl-0">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6 col-sm-6 col-12 ">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account ml-footer">
                          <FooterLinks />
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30">
                        <ul className="footer-account ml-footer">
                          <FooterLinksTwo />
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7  col-lg-6  col-md-12  col-sm-12 col-12">
                  <div className="row">
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-0">
                      <div className="footer-widget f-adress pb-30 pr-60 ml--35">
                        <ul className="footer-address ml-footer">
                          <li>
                            <Link
                              className="footer-phone"
                              href="tell:+01500123994"
                            >
                              <span className="mr-2">
                                <small className="first-num">+998</small>
                              </span>
                              71 448 19 19
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
                              Need help?{" "}
                              <Link href="mailto:contact@example.com">contact@example.com</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-6  col-lg-6  col-md-6  col-sm-6 col-12 pl-xl-0">
                      <div className="footer-widget pb-30 f-link ml--3">
                        <p className="font500">
                          {t('header_address')} <br />
                        </p>
                        <Socials />
                        <div className="copyright-text d-sm-flex justify-content-center align-items-center mt-50">
                          <p className="mb-0">
                            © 2024
                            <Link href="#" className="c-theme">
                              JastPharm
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

              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
