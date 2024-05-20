'use client'

import BlogCard from '@/sheardComponent/BlogCard';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import BlogPagination from '@/utils/BlogPagination';
import React from 'react';
import { useTranslation } from 'react-i18next';

const BlogMain = () => {
    const { t } = useTranslation()

    return (
        <>
            <Breadcrumb pageTitle={t('Blog')} />
            <div className="blog-area pt-120 ">
                <div className="container">
                    <div className="row">
                        <BlogCard start={0} end={6} />
                    </div>
                </div>
            </div>
            <BlogPagination />
        </>
    );
};

export default BlogMain;