import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import LoginContent from './LoginContent';

const LoginMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Login'/>
            <LoginContent/>
        </>
        
    );
};

export default LoginMain;