"use client"

import useGlobalContext from '@/hooks/use-context';
import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import SocialTwo from '../footers/SocialTwo';
import { useTranslation } from 'react-i18next';

const ResponsiveMenu = () => {
  const { sideMenuOpen, toggleSideMenu } = useGlobalContext()
  const { t } = useTranslation()

  return (
    <>
      <div
        className={`side-mobile-menu bg-white pt-20 pb-30 pl-40 pr-40 pb-100 d-lg-none ${sideMenuOpen ? "open-menubar" : ""
          }`}
      >
        <div className="close-icon d-flex justify-content-end mt-0">
          <Link onClick={toggleSideMenu} className="close-menu d-block" href="">
            <i className="fa-solid fa-xmark" style={{ fontSize: '20px' }}></i>
          </Link>
        </div>

        <div className="mobile-menu mt-10 mean-container">
          {/* mobile menu */}
          <div className="mean-bar">
            <Link href="#nav" className="meanmenu-reveal" style={{ right: '0px', left: 'auto', display: 'inline' }}></Link>
            <nav className="mean-nav">
              <MobileMenu />
            </nav>
          </div>
        </div>

        <h6 className="light-black-color2 font600 mt-30 pb-1 border-primary-b d-inline-block">
          {t("Aloqa ma'lumotlari")}
        </h6>
        <ul className="contact-add mt-20">
          <li className="mb-15 primary-color">
            <span className="mr-1">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <a href="map:https://maps.app.goo.gl/j11ED3KvTLkqSD638">{t("header_address")}</a>
          </li>
          <li className="mb-20 primary-color">
            <Link href="mailto:contact@example.com">
              <span className="mr-1">
                <i className="far fa-envelope"></i>
              </span>
              info@texnomed.uz
            </Link>
          </li>
          <li className="mb-15">
            <Link className=" primary-color" href="tell:+01500123994">
              <span className="mr-1">
                <i className="fas fa-phone"></i>
              </span>{" "}
              +998 71 911 43 65
            </Link>
          </li>
        </ul>
        <SocialTwo />
      </div>
    </>
  );
};

export default ResponsiveMenu;