"use client"
import { idType } from '@/interFace/interFace';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ShopDetailsContent from './ShopDetailsContent';

const ShopDetailsMain = ({ data }: any) => {
    return (
        <>
            <Breadcrumb pageTitle={data?.title || ''} />
            <ShopDetailsContent data={data} />
        </>
    );
};

export default ShopDetailsMain;