import RegisterMain from '@/components/register/RegisterMain';
import Wrapper from '@/layout/DefaultWrapper';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';

const registerPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <Breadcrumb pageTitle='Register'/>
                    <RegisterMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default registerPage;