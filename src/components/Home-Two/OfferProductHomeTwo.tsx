import OfferAndBannerSlider from '@/sheardComponent/elements/sliders/OfferAndBannerSlider';
import Link from 'next/link';
import React from 'react';

const OfferProductHomeTwo = () => {
    return (
        <>
              <div className="Trending-product-area hm2">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3  col-lg-4  col-md-12  col-sm-12 col-12 pb-15">
                            <div className="section-title pt-60">
                                <h3 className="font-pt light-black-color2 pb-1 pr-120">Featured Top Product</h3>
                                <p className="light-black-color7 font300">Perspiciatis undeous omniists</p>
                                <Link href="/shop" className="web-btn h2-web-btn d-inline-block text-capitalize light-black-color2 rounded-0 gray-bg5 position-relative over-hidden pl-35 pr-35 mt-20 ptb-12">View More</Link>
                            </div> 
                        </div> 
                        <div className="col-xxl-9 col-xl-9  col-lg-8  col-md-12  col-sm-12 col-12 pl-0">
                            <div className="row home2-handpick-items-active ml--45 pt-40 mlr-1 slick-initialized slick-slider">
                                 <OfferAndBannerSlider start={18} end={24}/>
                            </div> 
                        </div> 
                    </div> 
                    
                </div> 
            </div>
        </>
    );
};

export default OfferProductHomeTwo;