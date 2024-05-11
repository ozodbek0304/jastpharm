"use client"
import React from "react";
import CategoryLineUp from "./CategoryLineUp";
import HomeOneBanner from "./HomeOneBanner";
import HomeProductArea from "./HomeProductArea";
import HomeOfferProductSlider from "./HomeOfferProductSlider";
import MostPurchased from "./MostPurchased";
import BrandLogos from "./BrandLogos";
import HomeBlogs from "./HomeBlogs";
import SubscribeArea from "./SubscribeArea";
import bgImg from "../../../public/assets/images/bg/purchased-item-bg.jpg";
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
