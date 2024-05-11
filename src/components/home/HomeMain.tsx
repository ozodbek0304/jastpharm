"use client"
import React from "react";
import HomeOneSlider from "./HomeOneSlider";
import CategoryLineUp from "./CategoryLineUp";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import MostPurchased from "./MostPurchased";
import BrandLogos from "./BrandLogos";
import HomeBlogs from "./HomeBlogs";
import SubscribeArea from "./SubscribeArea";
import bgImg from "../../../public/assets/images/bg/purchased-item-bg.jpg";
import HomeCategrorSlider from "./HomeCategorySlider";
const HomeMain = () => {
  return (
    <>
      <HomeOneSlider />
      <HomeOfferProductSlider />
      {/* <CategoryLineUp /> */}
      <HomeCategrorSlider />
      <BrandLogos />
      <HomeProductArea />
      {/* <MostPurchased bgImg={bgImg} /> */}
      {/* <HomeBlogs /> */}
      {/* <SubscribeArea /> */}
    </>
  );
};

export default HomeMain;
