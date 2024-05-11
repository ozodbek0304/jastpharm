import React from 'react';

const ErrorMsg = ({ errors }: any) => {
  return (
    <>
      <p className='error-msg' style={{ color: 'red' }}>{errors}</p>
    </>
  );
};

export default ErrorMsg;