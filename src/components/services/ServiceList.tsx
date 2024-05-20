import React from 'react';
import ServiceItem from './ServiceItem';

export interface ServiceItemType {
    id: number
    title: string
}

const ServiceList = () => {

    const data: ServiceItemType[] = [
        {
            id: 1,
            title: "Tibbiy asbob-uskunalarga kafolat va kafolatdan keyingi xizmat ko'rsatish"
        },
        {
            id: 2,
            title: "O‘zbekiston Respublikasi hududida tibbiy buyumlarni davlat ro‘yxatidan o‘tkazish"
        },
        {
            id: 3,
            title: "Bojxona rasmiylashtiruvini kalit topshirish"
        },
        {
            id: 4,
            title: "Tibbiy asbob-uskunalarni o'rnatish va ishga tushirish"
        },
        {
            id: 5,
            title: "Tibbiyot xodimlarini tibbiy asbob-uskunalar bilan ishlashga o'rgatish"
        },
        {
            id: 6,
            title: "Tibbiy asbob-uskunalarni ta'mirlash"
        },
        {
            id: 7,
            title: "Tibbiy asboblar bo'yicha maslahat"
        }
    ]

    return (
        <div className='mx-auto py-4 d-flex flex-column gap-2' style={{ maxWidth: '800px' }}>
            {
                data.map((el, i) => <ServiceItem data={el} order={i + 1} key={i} />)
            }
        </div>
    );
}

export default ServiceList;
