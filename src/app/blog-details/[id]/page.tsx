import BlogDetailsMain from '@/components/blogDetails/BlogDetailsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const blogDetailsPage = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <>
            <Wrapper>
                <main>
                    <BlogDetailsMain id={id}/>
                </main>
            </Wrapper>
        </>
    );
};

export default blogDetailsPage;