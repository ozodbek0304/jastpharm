import BlogCard from '@/sheardComponent/BlogCard';
import Breadcrumb from '@/sheardComponent/Breadcrumb';
import BlogPagination from '@/utils/BlogPagination';
import React from 'react';

const BlogMain = () => {
    return (
        <>
            <Breadcrumb pageTitle='Blog'/>
            <div className="blog-area pt-120 ">
                <div className="container">
                    <div className="row">
                        <BlogCard start={0} end={6}/>
                    </div> 
                </div>
            </div>
            <BlogPagination/>
        </>
    );
};

export default BlogMain;