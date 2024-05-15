import Link from 'next/link';
import React from 'react';
import logoImg from '../../../public/assets/images/logo/logo.png'
import paymentImg from '../../../public/assets/images/footer/payment.png'
import footerPtrn from '../../../public/assets/images/bg/footer-ptrn.png'
import pattern1 from '../../../public/assets/images/bg/Pattern1.png'
import Image from 'next/image';
import FooterLinks from './components/FooterLinks';
import SocialLinks from './components/SocialLinks';
const Footerthre = () => {
    return (
        <>
            <footer> 
                <div className="footer-area footer3 footer-bg h3-primary-bg position-relative">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="col-xxl-3 col-xl-3  col-lg-3  col-md-4  col-sm-6 col-12 footer-r-border">
                                    <div className="footer-widget f-adress pb-90 pt-80 pr-100">
                                        <Image src={logoImg} alt="logo-img" height={40}/>
                                        <p className="pt-18 font13 text-uppercase mt-25">PO Box 16122 Collins Street
                                            Victoria 8007 Australia</p>
                                        <div className="f-adress-text mt-25">
                                            <ul className="footer-address">
                                                <li>
                                                    <Link className="footer-phone text-white mb-0" href="tell:(+800)123456780900">
                                                        (+800) 1234 56780 900</Link>
                                                </li>
                                                <li className="footer-mail pt-10">
                                                    <Link href="mailto:services@COMPANY.COM" className="text-white font14">services@COMPANY.COM</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-xxl-6 col-xl-6  col-lg-6  col-md-8  col-sm-12 col-12 d-sm-flex justify-content-lg-center footer-r-border">
                                    <ul className="footer-account pt-80 ">
                                       <FooterLinks/>
                                    </ul>
                                    <ul className="footer-account pt-80 ">
                                       <FooterLinks/>
                                    </ul>
                                </div> 
                                <div className="col-xxl-3 col-xl-3  col-lg-3  col-md-12  col-sm-6 col-12 d-flex justify-lg-content-center">
                                    <div className="footer-widget f-social pb-30 pt-80 footer-padding-left">
                                        <ul className="footer-social-link">
                                           <SocialLinks/>
                                        </ul>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center justify-content-center footer-t-border pt-25">
                                    
                                <div className="col-xl-8  col-lg-8  col-md-12  col-sm-12 col-12">
                                    <div className="service-area">
                                        <ul>
                                            <li className="d-inline-block mr-50">
                                                <div className="single-service d-flex align-items-center mb-25">
                                                    <div className="s-ser-icon mr-15">
                                                        <span className="theme-color"><i className="fal fa-shipping-fast"></i></span>
                                                    </div>
                                                    <div className="s-ser-content">
                                                        <p className="mb-0">30 Days To Money Back</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-inline-block mr-50">
                                                <div className="single-service d-flex align-items-center mb-25">
                                                    <div className="s-ser-icon mr-15">
                                                        <span className="theme-color"><i className="fal fa-tram"></i></span>
                                                    </div>
                                                    <div className="s-ser-content">
                                                        <p className="mb-0">30 Days To Money Back</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-inline-block mr-50">
                                                <div className="single-service d-flex align-items-center mb-25">
                                                    <div className="s-ser-icon mr-15">
                                                        <span className="theme-color"><i className="fal fa-gift"></i></span>
                                                    </div>
                                                    <div className="s-ser-content">
                                                        <p className="mb-0">Shipping in 24 Hours</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                                <div className="col-xl-4  col-lg-4  col-md-12  col-sm-12 pr-0 col-12 d-flex justify-content-lg-end">
                                    <div className="footer-widget f-payment pb-25">
                                        <div className="footer-payment">
                                            <Image src={paymentImg} alt="payment-logo"/>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div> 
                    </div>
                    <div className="pattern position-absolute left0 bottom0 d-none d-xl-block">
                        <Image src={footerPtrn} alt="footerprrn"/>
                    </div>
                    <div className="f-pattern position-absolute d-none d-xl-block">
                        <Image src={pattern1} alt="pattern-img"/>
                    </div>
                </div>
            </footer> 
        </>
    );
};

export default Footerthre;