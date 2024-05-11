import BlogMain from '@/components/blog/BlogMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const blogPage = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <BlogMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default blogPage;
