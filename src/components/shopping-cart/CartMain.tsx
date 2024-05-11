import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import CartContent from './CartContent';

const CartMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Shoping Cart'/>
            <CartContent/>
        </>
    );
};

export default CartMain;