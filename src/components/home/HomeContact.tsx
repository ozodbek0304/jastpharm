import ContactForm from "@/form/ContactForm";
import Link from "next/link";
import React from "react";

const HomeContact = () => {
    return (
        <>
            <div className="contact-area">
                <div className="container">
                    <div className="row pb-100">
                        <div className="col-xl-6  col-lg-6  col-md-12  col-sm- col-">
                            <div className="contact-form-left mt-60">
                                <div className="section-title text-left">
                                    <h4 className="c-title mb-35 font600 title d-inline-block position-relative">
                                        {"Kontakt ma'lumotlari"}
                                    </h4>
                                    <p>
                                        Homess is a premium Templates theme with advanced admin
                                        module. {`It’s`} extremely customizable, easy to use and
                                        fully responsive and retina ready. Vel illum dolore eu
                                        feugiat nulla facilisis at vero eros et accumsan et iusto
                                        odio dignissim qui blandit praesent luptatum zzril delenit
                                        augue duis dolore te feugait nulla facilisi.
                                    </p>
                                    <ul className="hot-line d-flex align-items-center mt-25 pb-25">
                                        <li>
                                            <span className="h2-theme-color d-block mr-15">
                                                <i className="fal fa-headset"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <p className="mb-1">Hotline Free 24/24:</p>
                                            <Link
                                                href="tell:+01500123994"
                                                className="light-black-color2 font600"
                                            >
                                                +01 500 123 994
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="c-contact d-sm-flex">
                                    <span className="primary-color pr-1">Address: </span>
                                    <p>1234 Heaven Stress, Beverly Hill, Melbourne, USA.</p>
                                </div>
                                <div className="c-email d-sm-flex">
                                    <span className="primary-color pr-1">Email: </span>
                                    <p>Contact@homesstheme.com</p>
                                </div>
                                <div className="c-number d-sm-flex">
                                    <span className="primary-color pr-1">Number Phone: </span>
                                    <p>(800) 123 456 789, (800) 987 654 321</p>
                                </div>
                                <div className="c-fax d-sm-flex">
                                    <span className="primary-color pr-1">Fax: </span>
                                    <p>(+100) 123 456 7890 – (+100) 123 456 7891</p>
                                </div>
                                <div className="c-social-link d-sm-flex align-items-center mt-15">
                                    <span className="primary-color d-inline-block pr-10">
                                        Social Share:
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
                                    {"Xabar qoldirish"}
                                </h4>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeContact;
