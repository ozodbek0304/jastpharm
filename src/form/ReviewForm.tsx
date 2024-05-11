"use client";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { contact_schema } from "@/utils/validation-schema";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";
const ReviewForm = () => {
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
        toast.success("Review Added");
        resetForm();
      } catch (error) {}
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="comment mb-10">
          <label>Your Review</label>
          <textarea
            name="message"
            className="form-control  primary-bg2 mt-10"
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.message}
           
            required
          ></textarea>
          {touched.message && <ErrorMsg errors={errors.message} />}
        </div>
        <div className="name-and-email d-flex  mb-20">
          <div className="name width50 mr-10">
            <label className="mt-15 mb-10 d-block">Name *</label>
            <input
              type="text"
              id="r-name"
              className="width100  primary-bg2"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.name}
             
              required
            />
            {touched.name && <ErrorMsg errors={errors.name} />}
          </div>
          <div className="email width50 ml-10">
            <label className="mt-15 mb-10 d-block">Email *</label>
            <input
              type="email"
              name="email"
              id="r-email"
              className=" width100  primary-bg2"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values.email}
               
              required
            />
            {touched.email && <ErrorMsg errors={errors.email} />}
          </div>
        </div>

        <div className="save-info d-sm-flex align-items-center mb-30 mt-2">
          <input
            className="mr-10"
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <p className="mb-0 cursor">
            Save my name, email, and website in this browser for the next time I
            comment.
          </p>
        </div>
        <button className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17">
          Submit
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
