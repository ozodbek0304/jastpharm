import BlogDetailsMain from "@/components/blogDetails/BlogDetailsMain";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const blogDetailsStatic = () => {
  return (
    <>
      <Wrapper>
        <main>
          <BlogDetailsMain id={1} />
        </main>
      </Wrapper>
    </>
  );
};

export default blogDetailsStatic;
