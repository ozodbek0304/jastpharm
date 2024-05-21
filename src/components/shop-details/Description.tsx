import React from 'react';
import parse from 'html-react-parser';


const Description = ({ data }: any) => {


  return (
    <>
      <div className="describe-area">
        <div className="product-details-text pr-10 mb-50">
          <p className="gray-color2 dc-text1 pb-6">
            {data?.body && parse(data?.body)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;