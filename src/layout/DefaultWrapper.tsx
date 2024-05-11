"use client";
import React, { useEffect } from 'react';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { animationCreate } from '@/utils/utils';
import { childrenType } from '@/interFace/interFace';
import BacktoTop from '@/utils/BacktoTop';
import HeaderOne from './header/HeaderOne';
import FooterTwo from './footers/FooterTwo';

const Wrapper = ({ children }: childrenType) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 2000);
  }, [])

  return (
    <>
      <BacktoTop />
      <HeaderOne />

      {children}

      <FooterTwo />
    </>
  );
};

export default Wrapper;
