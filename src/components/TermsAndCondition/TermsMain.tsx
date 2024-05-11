import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import TermsContent from './TermsContent';

const TermsMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Term & Condition'/>
            <TermsContent/>
        </>
    );
};

export default TermsMain;