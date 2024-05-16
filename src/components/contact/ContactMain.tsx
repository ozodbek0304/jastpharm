"use client";

import Breadcrumb from '@/sheardComponent/Breadcrumb';
import React from 'react';
import ContactMap from './ContactMap';
import ContactContent from './ContactContent';
import HomeContact from '../home/HomeContact';

const ContactMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='contact' />
            <HomeContact />
            <ContactMap />
        </>
    );
};

export default ContactMain;