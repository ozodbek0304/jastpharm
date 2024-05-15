"use client"
import React from "react";
import HomeOneSlider from "./HomeOneSlider";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import BrandLogos from "./BrandLogos";
import HomeCategrorSlider from "./HomeCategorySlider";
import ContactContent from "../contact/ContactContent";
const HomeMain = () => {
  return (
    <>
      <HomeOneSlider />
      <HomeProductArea />
      <HomeOfferProductSlider />
      <HomeCategrorSlider />
      <BrandLogos />
      <ContactContent />
    </>
  );
};

export default HomeMain;
