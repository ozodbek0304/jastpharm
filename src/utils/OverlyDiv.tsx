"use client";
import useGlobalContext from "@/hooks/use-context";
import React from "react";

const OverlyDiv = () => {
  const { sideMenuOpen, toggleSideMenu } = useGlobalContext();
  return (
    <>
      <div onClick={toggleSideMenu}  className={`body-overlay ${sideMenuOpen ? "opened" : ""}`}></div>
    </>
  );
};

export default OverlyDiv;
