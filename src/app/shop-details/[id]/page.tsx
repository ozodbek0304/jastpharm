"use client"

import ShopDetailsMain from '@/components/shop-details/ShopDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import api from '@/utils/api';
import React, { useEffect, useState } from 'react';

const ShopDetailsPage = ({ params }: { params: { id: string } }) => {
    const id = params.id

    const [data, setData] = useState<any>({})

    const getData = async () => {
        const resp = await api.get(`common/products/${id}/`)

        setData(resp.data);
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Wrapper>
                <main>
                    <ShopDetailsMain data={data}/>
                </main>
            </Wrapper>
        </>
    );
};

export default ShopDetailsPage;