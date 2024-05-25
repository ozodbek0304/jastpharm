"use client";
import React, { useEffect, useState } from "react";
import logoImg from "../../../public/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
import ResponsiveMenu from "./ResponsiveMenu";
import { useTranslation } from "react-i18next";

const SidebarMenu = () => {
  const { toggleSideMenu } = useGlobalContext();
  const { i18n } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)

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


  const { changeLanguage, language } = i18n

  const handleChangeLanguage = (lng: string) => {
    if (language !== lng) {
      changeLanguage(lng)
      window.location.reload()
    }

    return setOpen(false)
  }

  console.log(language);


  return (
    <>
      <div id="header-sticky-three" className="mobile-menu-area pt-15 pb-15 d-lg-none">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-9">
              <Link href="/">
                <div className="logo">
                  <Image src={logoImg} alt="logo-img" height={40} />
                </div>
              </Link>
            </div>

            <div className="col-2 position-relative">
              <span onClick={() => setOpen(!open)}>{language.toUpperCase()}</span>
              {open && <ul className="d-flex gap-1 col-6 flex-column" style={{ position: 'absolute', zIndex: 10, padding: '10px', backgroundColor: 'white', width: '50px', left: 0 }}>
                <li onClick={() => handleChangeLanguage('ru')} style={{ color: language === 'ru' ? 'blue' : 'black', cursor: 'pointer', textAlign: 'center' }}>
                  RU
                </li>
                <li onClick={() => handleChangeLanguage('en')} style={{ color: language === 'en' ? 'blue' : 'black', cursor: 'pointer', textAlign: 'center' }}>
                  EN
                </li>
                <li onClick={() => handleChangeLanguage('uz')} style={{ color: language === 'uz' ? 'blue' : 'black', cursor: 'pointer', textAlign: 'center' }}>
                  UZ
                </li>
              </ul>}
            </div>

            <div className="col-1">
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
      <ResponsiveMenu />
    </>
  );
};

export default SidebarMenu;
