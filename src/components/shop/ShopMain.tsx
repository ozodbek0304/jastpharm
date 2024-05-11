import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ShopArea from './ShopArea';

const ShopMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Mahsulotlarimiz' />
            <ShopArea />
        </>
    );
};

export default ShopMain;