import React from 'react';
import bannerOne from "../../../public/assets/images/banner/banner-img.jpg"
import bannerTwo from "../../../public/assets/images/banner/banner-img2.jpg"
import Image from 'next/image';
import Link from 'next/link';
const HomeOneBanner = () => {
    return (
        <>
            <div className="banner-area mb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 ">
                            <div className="banner mb-30 transition-3 position-relative over-hidden ">
                                <Link href="/shop" className="d-block">
                                    <Image style={{ width: "100%", height: "auto" }} className="img-zoom transition-3 width100 h-100" src={bannerOne} alt="banner-img"/>
                                </Link>
                                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                                    <span className="banner-sub-tittle mt--4 d-block text-white font500">Get Upto 50% Flate</span>
                                    <h3 className="text-white font500 pb-45">
                                        <Link href="/shop" className="text-white">Pressure Meter</Link>
                                    </h3>
                                    <p className="text-white font300 pb-1">Free Shipping on Order Over $99.</p>
                                    <Link href="/shop" className="web-btn border-white01 d-inline-block text-capitalize white-bg light-black-color position-relative over-hidden pl-35 pr-35 ptb-12">Shop Now</Link>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xl-6 col-lg-6  col-md-12  col-sm-12 col-12 ">
                            <div className="banner mb-30 transition-3 position-relative over-hidden wow">
                                <Link href="/shop" className="d-block">
                                    <Image style={{ width: "100%", height: "auto" }} className="img-zoom transition-3 width100 h-100" src={bannerTwo} alt="banner-img"/>
                                </Link>
                                <div className="banner-content mt--3 position-absolute transfY transfY50 pl-50">
                                    <span className="banner-sub-tittle banner-sub-tittle2 mt--4 d-block secondary-color font500">Premium Quality Items</span>
                                    <h3 className="font500 pb-40 light-black-color2 font-pt">
                                        <Link href="/shop">Hand Sanitizer</Link>
                                    </h3>
                                    <p className="font300 pb-1 light-black-color2 font300">Care of loved ones. Hand Cleaner.</p>
                                    <Link href="/shop" className="web-btn theme-border1 d-inline-block text-capitalize white theme-bg position-relative over-hidden pl-35 pr-35 ptb-12">Shop Now</Link>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        </>
    );
};

export default HomeOneBanner;