import SignUpForm from "@/form/SignUpForm";
import Link from "next/link";
import React from "react";

const LoginContent = () => {
  return (
    <>
      <div className="login-register-area mb-45">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <section className="login-area pt-100 pb-55">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="basic-login">
                        <h3 className="text-center mb-60">Login From Here</h3>
                          <SignUpForm/>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContent;
