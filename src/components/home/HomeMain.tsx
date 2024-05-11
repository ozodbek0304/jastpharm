"use client"
import React from "react";
import HomeOneSlider from "./HomeOneSlider";
import CategoryLineUp from "./CategoryLineUp";
import HomeOneBanner from "./HomeOneBanner";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import MostPurchased from "./MostPurchased";
import BrandLogos from "./BrandLogos";
import HomeBlogs from "./HomeBlogs";
import SubscribeArea from "./SubscribeArea";
import bgImg from "../../../public/assets/images/bg/purchased-item-bg.jpg";
const HomeMain = () => {
  return (
    <>
      <HomeOneSlider />
      <CategoryLineUp />
      <HomeOneBanner />
      <HomeProductArea />
      <HomeOfferProductSlider />
      <MostPurchased bgImg={bgImg} />
      <BrandLogos />
      <HomeBlogs />
      <SubscribeArea />
    </>
  );
};

export default HomeMain;
