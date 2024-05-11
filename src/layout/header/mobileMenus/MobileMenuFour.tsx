import useGlobalContext from "@/hooks/use-context";
import SocialTwo from "@/layout/footers/SocialTwo";
import Link from "next/link";
import React from "react";

const MobileMenuFour = () => {
    const {toggleSideMenu} = useGlobalContext()
  return (
    <>
      <div className="side-mobile-menu bg-white pt-20 pb-30 pl-40 pr-40 pb-100 hm3">
        <div className="close-icon d-flex justify-content-end mt-0">
          <Link onClick={toggleSideMenu} className="close-menu d-block" href="">
            <span className="icon-clear"></span>
          </Link>
        </div>

        <div className="header-search-content position-relative d-block d-xl-none mt-20">
          <form action="#" className="position-relative">
            <input
              className="form-control rounded-0 h5-theme-color px-0"
              type="text"
              placeholder="Enter Keyword..."
            />
            <Link className="position-absolute primary-color d-block" href="#">
              <span className="icon-search"></span>
            </Link>
          </form>
        </div>
        <div className="mobile-menu mt-10"></div>
        <div className="menu-login pt-10 d-block d-md-none">
          <ul className="header-login d-flex justify-content-between mobile-border-b ">
            <li>
              <Link href="/login">My Account</Link>
            </li>
            <li>
              <Link href="/login">
                <i className="far fa-user-circle"></i>
              </Link>
            </li>
          </ul>
          <ul className="header-heart d-flex justify-content-between mobile-border-b">
            <li>
              <Link href="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link href="/wishlist">
                <span className="icon-heart"></span>
              </Link>
            </li>
          </ul>
        </div>

        <h6 className="light-black-color2 font600 mt-30 pb-1 border-primary-b d-inline-block">
          Contact us
        </h6>
        <ul className="contact-add mt-20">
          <li className="mb-15 primary-color">
            <span className="mr-1">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            PO Box 16122 Collins Street Victoria 8007 Australia
          </li>
          <li className="mb-20 primary-color">
            <Link href="mailto:contact@example.com">
            <span className="mr-1">
              <i className="far fa-envelope"></i>
            </span>
            contact@example.com
            </Link>
          </li>
          <li className="mb-15">
            <Link className=" primary-color" href="tell:+01500123994">
              <span className="mr-1">
                <i className="fas fa-phone"></i>
              </span>{" "}
              +01 500 123 994
            </Link>
          </li>
        </ul>
         <SocialTwo/>
      </div>
    </>
  );
};

export default MobileMenuFour;
