"use client"
import React from "react";
import HomeOnePreloader from "./HomeOnePreloader";
import DefaultLoader from "./DefaultLoader";
import { usePathname } from "next/navigation";
const Preloader = () => {
  const pathName = usePathname();

  return (
    <>
      {(() => {
        switch (pathName) {
          case "/":
            return <HomeOnePreloader />;
          default:
            return <DefaultLoader />;
        }
      })()}
    </>
  );
};

export default Preloader;
