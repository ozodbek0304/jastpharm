"use client"
import React from "react";
import HomeOneSlider from "./HomeOneSlider";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import BrandLogos from "./BrandLogos";
import HomeCategrorSlider from "./HomeCategorySlider";
import HomeContact from "./HomeContact";
import HomeBlogs from "./HomeBlogs";

const HomeMain = () => {

  return (
    <>
      <HomeOneSlider />
      <HomeProductArea />
      <HomeOfferProductSlider />
      <HomeCategrorSlider />
      <HomeBlogs />
      <BrandLogos />
      <HomeContact />
    </>
  );
};

export default HomeMain;
