"use client";
import api from "@/utils/api";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ApplicationFormSubmit = ({ product, closeModal }: { product: number, closeModal: any }) => {

    const { t } = useTranslation()
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setLoading(true)

        const form: any = document.getElementById('send-application')
        const formData: any = new FormData(form)

        const values = { product }
        for (const [key, value] of formData) {
            Object.assign(values, { [key]: value })
        }

        try {
            await api.post(`common/application/`, values)
            window.scrollTo(0, 0)

            toast.success("Ariza muvaffaqiyatli jo'natildi")
            closeModal()
        } catch (err: any) {
            console.log(err)
            if (err?.response?.data) {
                toast.error(JSON.stringify(err?.response?.data))
            } else {
                toast.error("Xatolik")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="send-application">
                <div className="contact-form">
                    <Toaster />
                    <div className="position-relative">
                        <label>{t("Ism")}</label>
                        <div className="full_name">
                            <input
                                type="text"
                                className="form-control primary-bg2 border-0 mt-2 py-2"
                                name="full_name"
                                required
                            />
                        </div>
                    </div>

                    <div className="position-relative">
                        <label className="mt-25">{t("Telefon")}</label>
                        <div className="phone">
                            <input
                                type="tel"
                                className="form-control primary-bg2 border-0 mt-2  py-2"
                                name="phone"
                                required
                            />
                        </div>
                    </div>
                    <div className="position-relative">
                        <label className="mt-25">{t("Xabaringiz")}</label>
                        <textarea
                            name="text"
                            rows={4}
                            className="form-control primary-bg2 border-0 mt-2 pt-30 pb-30"
                            required
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className={` h2-theme-border1 d-inline-block text-capitalize white mt-40 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ${loading ? "ptb-10" : "ptb-17"}`} style={{ minWidth: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {loading ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="28" height="28" style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}><g><circle stroke-dasharray="188.49555921538757 64.83185307179586" r="40" stroke-width="13" stroke="#ffffff" fill="none" cy="50" cx="50">
                        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.8620689655172413s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                    </circle><g></g></g>
                    </svg> : t("Yuborish")}
                </button>
            </form>
        </>
    );
};

export default ApplicationFormSubmit;
