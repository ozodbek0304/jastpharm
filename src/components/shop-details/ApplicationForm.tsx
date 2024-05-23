"use client";

import ContactForm from "@/form/ContactForm";
import Wrapper from "@/layout/DefaultWrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser'
import { ProductType } from "../home/HomeProductArea";
import ProductDropdown from "./ProductDropdown";
import api from "@/utils/api";
import ApplicationFormSubmit from "./ApplicationFormSubmit";

const ApplicationForm = ({ data, closeModal }: { data: ProductType, closeModal: any }) => {

    const { t } = useTranslation()
    const [products, setProducts] = useState<ProductType[]>([])
    const [id, setId] = useState<number>(data.id)

    const getProducts = async () => {
        const resp = await api.get(`common/products/`)

        setProducts(resp.data?.results);
    }

    useEffect(() => {
        getProducts()

        document.body.style.backdropFilter = 'none'

        return () => {
            document.body.style.backdropFilter = 'blur(7px)'
        }
    }, [])

    return (
        <div className="contact-area mb-10">
            <div className="container">
                <div className="d-flex flex-column pb-50">
                    <h6 className="c-title font600 title d-inline-block position-relative mb-10x">
                        {t("Ariza qoldirish")}
                    </h6>
                    <div className="contact-form-left mt-10">
                        <ProductDropdown onChange={(e) => setId(e)} data={data} products={products} />
                    </div>
                    <div className="contact-form-right mt-10">
                        <ApplicationFormSubmit closeModal={closeModal} product={id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
