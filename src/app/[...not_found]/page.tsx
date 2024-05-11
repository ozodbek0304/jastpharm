import Error from "@/components/error-page/Error";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
const ErrorPage = () => {
  return (
    <>
      <Wrapper>
        <main>
        <Error />
        </main>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
