"use client";
import { contact_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import ErrorMsgTwo from "./ErrorMsgTwo";
import { useTranslation } from "react-i18next";
const ContactForm = () => {

  const { t } = useTranslation()

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    errors,
    touched,
    values,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contact_schema,
    onSubmit: async (values) => {
      try {
        toast.success("Message Send Successfully");
        resetForm();
      } catch (error) { }
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <div className="position-relative">
            <label>{t("Ism")}</label>
            <div className="name">
              <input
                type="text"
                className="form-control primary-bg2 border-0 mt-2 py-2"
                name="name"
                id="r-name"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.name}
                required
              />
            </div>
            {touched.name && <ErrorMsgTwo errors={errors.name} />}
          </div>

          <div className="position-relative">
            <label className="mt-25">{t("Telefon")}</label>
            <div className="email">
              <input
                type="email"
                className="form-control primary-bg2 border-0 mt-2  py-2"
                name="email"
                id="r-email"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={values.email}
                required
              />
            </div>
            {touched.email && <ErrorMsgTwo errors={errors.email} />}
          </div>
          <div className="position-relative">
            <label className="mt-25">{t("Xabaringiz")}</label>
            <textarea
              name="message"
              className="form-control primary-bg2 border-0 mt-2 pt-30 pb-30"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.message}
              required
            ></textarea>
            {touched.message && <ErrorMsgTwo errors={errors.message} />}
          </div>
        </div>
        <button className="web-btn h2-theme-border1 d-inline-block text-capitalize white mt-40 rounded-0 h2-theme-color h2-theme-bg position-relative over-hidden pl-60 pr-60 ptb-17">
          {t("Yuborish")}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
