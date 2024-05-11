import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import WishlistContent from './WishlistContent';

const WishlistMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Wishlist'/>
            <WishlistContent/>
        </>
    );
};

export default WishlistMain;