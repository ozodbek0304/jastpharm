import React from 'react';

const DefaultLoader = () => {
    return (
        <>
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_one"></div>
                        <div className="object" id="object_two"></div>
                        <div className="object" id="object_three"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DefaultLoader;