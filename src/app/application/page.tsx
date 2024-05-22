"use client";

import ContactForm from "@/form/ContactForm";
import Wrapper from "@/layout/DefaultWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import parse from 'html-react-parser'

const ApplicationForm = () => {

    const item: any = {
        id: 1,
        title: "Стационарный цифровой рентген аппарат UC-ARM DR6100A 71кВт",
        price: 0,
        slug: "mahsulot-nomi-ru",
        poster: "https://jaspharm.pythonanywhere.com/media/product_poster/63be5fe5b4932.jpg",
        description: "Этот прибор, созданный на основе инновационных технологий и современных конструктивных решений, поможет Вам преодолеть самые сложные задачи в диагностике."
    }

    const { t } = useTranslation()

    return (
        <Wrapper>
            <div className="contact-area mb-100">
                <div className="container">
                    <div className="row pb-100">
                        <div className="col-xl-6  col-lg-6  col-md-12  col-sm- col-">
                            <div className="contact-form-left mt-60">
                                <div className="section-title text-left">
                                    <h4 className="c-title mb-35 font600 title d-inline-block position-relative">
                                        {t("Mahsulot")}
                                    </h4>

                                </div>
                                <div
                                    className="side-pro-wrapper d-flex align-items-start mb-35"
                                >
                                    <div className="side-pro-img border-gray1 mr-10">
                                        <Link href={`/shop-details/${item?.slug}`}>
                                            <Image
                                                src={item?.poster}
                                                className="img-fluid"
                                                alt="sidebar-img"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </div>
                                    <div className="side-pro-text">
                                        <h5 className="pb-10">
                                            <Link href={`/shop-details/${item?.slug}`}>
                                                {" "}
                                                {item?.title}{" "}
                                            </Link>
                                        </h5>
                                        <span className="price font500">
                                            {parse(item?.description)}
                                        </span>
                                    </div>
                                </div>
                                <div className="c-contact d-sm-flex">
                                    <span className="primary-color pr-1">{t("Manzil")} : </span>
                                    <p>1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
                                </div>
                                <div className="c-email d-sm-flex">
                                    <span className="primary-color pr-1">{t("Email")} : </span>
                                    <p>Contact@homesstheme.com</p>
                                </div>
                                <div className="c-number d-sm-flex">
                                    <span className="primary-color pr-1">{t("Tel")} : </span>
                                    <p>71 411 54 54</p>
                                </div>
                                <div className="c-social-link d-sm-flex align-items-center mt-15">
                                    <span className="primary-color d-inline-block pr-10">
                                        {t("Ijtimoiy tarmoqlarda")}
                                    </span>
                                    <ul className="social-link d-flex  align-items-center">
                                        <li>
                                            <Link href="https://twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/">
                                                <i className="fab fa-facebook-f"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.behance.net/">
                                                <i className="fab fa-behance"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://bd.linkedin.com/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6  col-lg-6  col-md-12  col-sm-12 col-12">
                            <div className="contact-form-right mt-60">
                                <h4 className="c-title mb-35 font600 title d-inline-block position-relative">
                                    {t("Xabar ma'lumotlari")}
                                </h4>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default ApplicationForm;
