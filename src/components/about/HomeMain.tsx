"use client"
import React from "react";
import CategoryLineUp from "./CategoryLineUp";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import ContactContent from "../contact/ContactContent";
import ContactMap from "../contact/ContactMap";
const AboutMain = () => {
  return (
    <>
      <Breadcrumb pageTitle='Bizning tariximiz' />
      <CategoryLineUp />
      <HomeOfferProductSlider />
      <ContactMap />
      <ContactContent />
    </>
  );
};

export default AboutMain;
