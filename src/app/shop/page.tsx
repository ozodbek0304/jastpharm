import ShopMain from '@/components/shop/ShopMain';
import Wrapper from '@/layout/DefaultWrapper';
import OverlyDiv from '@/utils/OverlyDiv';
import React from 'react';

const ShopPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <ShopMain/>
                    <OverlyDiv/>
                </main>
            </Wrapper>
        </>
    );
};

export default ShopPage;