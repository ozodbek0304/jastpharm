import React from "react";
import HomeThreeSlider from "./HomeThreeSlider";
import ProductItemHomeThree from "./ProductItemHomeThree";
import FeaturedProductHomeThree from "./FeaturedProductHomeThree";
import FeaturedHomeThree from "./FeaturedHomeThree";
import FeaturedBanner from "./FeaturedBanner";
import ProductOfferHomeThree from "./ProductOfferHomeThree";
import BrandLogos from "../home/BrandLogos";
import MostPurchased from "../home/MostPurchased";
import bgImg from "../../../public/assets/images/bg/purchased-bg.jpg";
import CategoryLineUp from "../home/CategoryLineUp";
import BestSellingHomeThree from "./BestSellingHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";

const HomeThreeMain = () => {
  return (
    <>
      <HomeThreeSlider />
      <ProductItemHomeThree />
      <FeaturedProductHomeThree />
      <FeaturedBanner />
      <ProductOfferHomeThree />
      <BrandLogos />
      <MostPurchased bgImg={bgImg} />
      <CategoryLineUp/>
      <BestSellingHomeThree/>
      <FeaturedHomeThree/>
      <TestimonialHomeThree/>
      
     

    </>
  );
};

export default HomeThreeMain;
