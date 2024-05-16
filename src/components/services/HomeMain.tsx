"use client"
import React from "react";
import HomeOneBanner from "./HomeOneBanner";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import MostPurchased from "./MostPurchased";
import BrandLogos from "./BrandLogos";
import HomeBlogs from "./HomeBlogs";
import SubscribeArea from "./SubscribeArea";
import bgImg from "../../../public/assets/images/bg/purchased-item-bg.jpg";
import Breadcrumb from "@/sheardComponent/Breadcrumb";

const ServicesMain = () => {
  return (
    <>
      <Breadcrumb pageTitle='services' />
      <HomeOneBanner />
      <HomeOfferProductSlider />
      <HomeProductArea />
      <MostPurchased bgImg={bgImg} />
      <HomeBlogs />
    </>
  );
};

export default ServicesMain;
