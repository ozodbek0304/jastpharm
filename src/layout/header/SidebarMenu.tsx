"use client";
import React,{useEffect} from "react";
import logoImg from "../../../public/assets/images/logo/logo-theme.png";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
import ResponsiveMenu from "./ResponsiveMenu";

const SidebarMenu = () => {
  const { toggleSideMenu } = useGlobalContext();
  useEffect(() => {
    window.addEventListener("scroll", sticky);
    return () => {
      window.removeEventListener("scroll", sticky);
    };
  });

  const sticky = () => {
    const header = document.querySelector("#header-sticky-three");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= 40
        ? header.classList.add("header-sticky-three")
        : header.classList.remove("header-sticky-three");
    }
  };

  return (
    <>
      <div id="header-sticky-three" className="mobile-menu-area pt-15 pb-15 d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <Link href="/home-two">
                <div className="logo">
                  <Image src={logoImg} alt="logo-img" />
                </div>
              </Link>
            </div>
            <div className="col-6 ">
              <button
                onClick={toggleSideMenu}
                className="mobile-menubar bar-style"
              >
                <i className="fal fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu/>
    </>
  );
};

export default SidebarMenu;
