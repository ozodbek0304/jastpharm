import React from 'react';
import { ServiceItemType } from './ServiceList';

const ServiceItem = ({ data, order }: { data: ServiceItemType, order: number }) => {
    return (
        <div
            style={{
                 display: 'flex',
                padding: '20px',
                marginLeft: order % 2 !== 0 ? '0' : 'auto',
                justifyContent: order % 2 !== 0 ? 'flex-start' : 'flex-end'
            }}>
            <p className='d-flex align-items-center gap-2 m-0 p-0'>
                <i className='far fa-check-circle h2-theme-color'></i>
                {data.title}
            </p>
        </div>
    );
}

export default ServiceItem;
