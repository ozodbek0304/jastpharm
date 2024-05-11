import React from 'react';

const ErrorMsgTwo = ({errors}:any) => {
    return (
        <>
            <p className='error-msg2' style={{ color: 'red' }}>{errors}</p>
        </>
    );
};

export default ErrorMsgTwo;