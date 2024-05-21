import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';
import api from '@/utils/api';

export interface ServiceItemType {
    id: number
    title: string
    order: number
}

const ServiceList = () => {

    const [data, setData] = useState<{ id: number, title: string, order: number }[]>([])

    const getData = async () => {
        const resp = await api.get(`common/services/`)

        setData(resp.data)
        console.log(resp.data);

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='mx-auto py-4 d-flex flex-column gap-4 px-3' style={{ maxWidth: '1000px' }}>
            {
                data.map((el, i) => <ServiceItem data={el} key={i} />)
            }
        </div>
    );
}

export default ServiceList;
