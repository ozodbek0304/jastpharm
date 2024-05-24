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
                <button disabled={loading} type="submit" className="web-btn h2-theme-border1 d-inline-block text-capitalize white mt-40 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ptb-17">
                    {t("Yuborish")}
                </button>
            </form>
        </>
    );
};

export default ApplicationFormSubmit;
