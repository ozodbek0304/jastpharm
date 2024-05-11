import Link from 'next/link';
import React from 'react';

const ProductItem = () => {
    return (
        <>
             <div className="product-category-area hm2">
                <div className="container">
                    <ul className="product-category-active h2-gray-border10 pt-15 pb-45 d-xl-flex align-items-center justify-content-between">
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-briefcase-medical"></i></span>
                            </Link>
                            <h5 className="mt-10">Higiene</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-stethoscope"></i></span>
                            </Link>
                            <h5 className="mt-10">Equipment</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-kidneys"></i></span>
                            </Link>
                            <h5 className="mt-10">Dentist</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-hospital-alt"></i></span>
                            </Link>
                            <h5 className="mt-10">Needles</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-lungs"></i></span>
                            </Link>
                            <h5 className="mt-10">Oxygen</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-stretcher"></i></span>
                            </Link>
                            <h5 className="mt-10">Devices</h5>
                        </li>
                        <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-pills"></i></span>
                            </Link>
                            <h5 className="mt-10">Medicine</h5>
                        </li>
                         <li className="single-product-category position-relative text-center d-inline-block mt-25">
                            <Link href="/shop-details" className="h2-theme-color line-height-1">
                                <span><i className="fal fa-procedures"></i></span>
                            </Link>
                            <h5 className="mt-10">Otoscope</h5>
                        </li>
                    </ul>
                </div> 
            </div>
        </>
    );
};

export default ProductItem;