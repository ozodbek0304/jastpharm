
import HomeThreeSliders from '@/sheardComponent/elements/sliders/HomeThreeSliders';
import React from 'react';
const BestSellingHomeThree = () => {
    return (
        <>
             <div className="best-product-area mb-30 hm3">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                            <div className="section-title pt-10 text-center">
                                <h3 className="font-pt light-black-color2 pb-1">Best Selling Items</h3>
                                <p className="light-black-color7 font300">Sed ut perspiciatis undeous omniiste natusing errorings</p>
                            </div> 
                        </div>
                        <div className="row h3-purchased-product-active white-bg">
                            <HomeThreeSliders start={17} end={24}/>
                        </div> 
                    </div> 
                </div> 
            </div>
        </>
    );
};

export default BestSellingHomeThree;