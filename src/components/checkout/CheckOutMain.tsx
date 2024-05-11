import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import CuponArea from './CuponArea';
import CheckoutArea from './CheckoutArea';

const CheckOutMain = () => {
    return (
        <>
           <Breadcrumb pageTitle='Checkout'/> 
           <CuponArea/>
           <CheckoutArea/>
        </>
    );
};

export default CheckOutMain;