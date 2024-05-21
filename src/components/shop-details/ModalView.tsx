"use client";


import Image from 'next/image';
import React from 'react';
import { useEffect, useCallback } from 'react';


interface propTypes {
  onClose: any,
  url: string
}

const FullScreenImg = ({ url, onClose }: propTypes) => {


  const handleEscKey = useCallback((event: any) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleEscKey]);

  return (
    <div>
      <div
        className="tab-pane fade show active position-relative"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
      >
        <div
          className="product-img border-gray2 product-img-detail">
          <span className='d-flex w-100 justify-content-center align-items-center gap-4 py-2'>
            <button onClick={onClose} style={{ border: '1px solid #c3cccc', width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'unset' }}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <span>or ESC</span>
          </span>
          <Image
            style={{ width: "100%", height: "100%", objectFit: 'contain' }}
            width={1400}
            height={1400}
            src={url}
            alt="product"
          />
          <span className="ml-auto d-block p-2 text-end">
            <i className="fa-solid fa-expand" onClick={onClose}></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default FullScreenImg;
