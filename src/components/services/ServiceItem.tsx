import React from 'react';
import { ServiceItemType } from './ServiceList';
import useResponsive from '@/hooks/use-responsive';

const ServiceItem = ({ data }: { data: ServiceItemType }) => {

    const { isMobile } = useResponsive()

    return (
        <div
            style={{
                border: '1px solid #0d6efd',
                display: 'flex',
                width: isMobile ? '100%' : '70%',
                marginLeft: data.order % 2 !== 0 ? '0' : 'auto',
                borderRadius: '24px',
                overflow: 'hidden'
            }}>
            <div className='d-flex align-items-center gap-2 m-0 p-0'>
                <p style={{
                    padding: '20px',
                    backgroundColor: '#0d6efd',
                    height: '100%',
                    fontSize: '24px',
                    color: 'white'
                }} className='m-0 d-flex align-items-center'>
                    {data.order}
                </p>
                <p style={{ padding: '20px', }} className='m-0'>
                    {data.title}
                </p>
            </div>
        </div>
    );
}

export default ServiceItem;
