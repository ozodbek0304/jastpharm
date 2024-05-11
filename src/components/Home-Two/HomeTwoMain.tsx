import React from 'react';
import HomeTwoSlider from './HomeTwoSlider';
import ProductItem from './ProductItem';
import ProductOfferBannerTwo from './ProductOfferBannerTwo';
import HomeTwoBanner from './HomeTwoBanner';
import TrendingProductThree from './TrendingProductThree';
import OfferProductHomeTwo from './OfferProductHomeTwo';
import PromotionBanner from './PromotionBanner';
import BrandLogos from '../home/BrandLogos';
import BlogHomeTwo from './BlogHomeTwo';
import SubscribeTwo from '@/sheardComponent/SubscribeTwo';

const HomeTwoMain = () => {
    return (
        <>
            <HomeTwoSlider/>
            <ProductItem/>
            <ProductOfferBannerTwo/>
            <HomeTwoBanner/>
            <TrendingProductThree/>
            <OfferProductHomeTwo/>
            <PromotionBanner/>
            <BrandLogos/>
            <BlogHomeTwo/>
            <SubscribeTwo/>
        </>
    );
};

export default HomeTwoMain;