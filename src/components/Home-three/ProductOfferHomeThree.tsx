import OfferSliderTwo from '@/sheardComponent/elements/sliders/OfferSliderTwo';
import Counter from '@/utils/Counter';
import React from 'react';

const ProductOfferHomeThree = () => {
    return (
        <>
            <div className="weekly-deal-area hm3" >
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-10">
                            <div className="section-title weekly-deal d-sm-flex align-items-center justify-content-center">
                                <h3 className="font-pt light-black-color2 pt-15 pr-10">Best Deal Of Week</h3>
                                <div className="countdown-time countdown-time2 pt-15 d-flex">
                                <Counter day={15} min={30} />
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="h3-theme-border2 mt-25 pb-15">
                        <div className="row h3-weekly-deal-active  pt-20 mlr-1 pl-10">
                             <OfferSliderTwo start={19} end={24}/>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default ProductOfferHomeThree;