import Image from 'next/image';
import React, { useState } from 'react';
import { ProductType } from '../home/HomeProductArea';

interface Props {
    data: ProductType
    products: ProductType[]
    onChange: (val: number) => void
}

const ProductDropdown = ({ data, products, onChange }: Props) => {

    const [open, setOpen] = useState<boolean>(false)
    const [selectedVal, setSelectedVal] = useState<ProductType>({ ...data })

    const handleCLick = (item: ProductType) => {
        setSelectedVal(item)
        setOpen(false)
        onChange(item.id)
    }

    return (
        <div className='my-dropdown'>
            <div
                className="side-pro-wrapper d-flex align-items-start mb-10 border-gray1 p-1"
                role="button"
                onClick={() => setOpen(!open)}
            >
                <div className="side-pro-img mr-10">
                    <Image
                        src={selectedVal?.poster}
                        className="img-fluid"
                        alt="sidebar-img"
                        width={60}
                        height={60}
                        style={{ width: '60px', height: '60px' }}
                    />
                </div>
                <p className="m-0 dropdown-title">
                    {selectedVal?.title}
                </p>
            </div>

            <div className={`bg-white dropdown-list ${open ? 'dropdown-open' : 'dropdown-close'}`}>
                {
                    products.map((el, i) => (
                        <div
                            className="side-pro-wrapper d-flex align-items-start mb-10 p-1"
                            role="button"
                            key={i}
                            onClick={() => handleCLick(el)}
                        >
                            <div className="side-pro-img mr-10">
                                <Image
                                    src={el?.poster}
                                    className="img-fluid"
                                    alt="sidebar-img"
                                    width={60}
                                    height={60}
                                    style={{ width: '60px', height: '60px' }}
                                />
                            </div>
                            <p className="dropdown-title m-0">
                                {el?.title}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductDropdown;
