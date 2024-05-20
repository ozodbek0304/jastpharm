"use client"
import React from "react";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import ServiceList from "./ServiceList";

const ServicesMain = () => {
  return (
    <>
      <Breadcrumb pageTitle='services' />
      <ServiceList />
    </>
  );
};

export default ServicesMain;
