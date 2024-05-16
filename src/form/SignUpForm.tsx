"use client";
import { login_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ErrorMsg from "./error-msg";

const SignUpForm = () => {
  const [isBtnDisable, setBtnDisable] = useState(false);
  const router = useRouter();
  const handleCheckbox = () => {
    setBtnDisable(!isBtnDisable);
  };
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
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: login_schema,
    onSubmit: async (values) => {
      try {
        resetForm();
        toast.success("Sign Up Successfully");
        router.push("/");
      } catch (error) { }
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="position-relative">
          <label htmlFor="email">
            Email Address <span>**</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter Email address..."
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            defaultValue={values.email}
            required
          />
          {touched.email && <ErrorMsg errors={errors.email} />}
        </div>

        <div className="position-relative">
          <label htmlFor="pass">
            Password <span>**</span>
          </label>
          <input
            id="pass"
            type="password"
            placeholder="Enter password..."
            name="password"
            defaultValue={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {touched.password && <ErrorMsg errors={errors.password} />}
        </div>

        <div className="login-action mb-20 fix">
          <span onClick={handleCheckbox} className="log-rem f-left">
            <input
              id="remember"
              type="checkbox"
              onChange={handleCheckbox}
              checked={isBtnDisable}
            />
            <label htmlFor="remember">Remember me!</label>
          </span>

        </div>
        <button disabled={!isBtnDisable} className={isBtnDisable === false ? "bt-btn bt-btn-black w-100" : "bt-btn theme-btn-2 w-100"} >Login Now</button>
        <div className="or-divide">
          <span>or</span>
        </div>

        <Link href={"/register"}>
          {" "}
          <button className="bt-btn bt-btn-black w-100">
            Register Now
          </button>{" "}
        </Link>
      </form>
    </>
  );
};

export default SignUpForm;
