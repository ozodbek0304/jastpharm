import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="map-area">
                <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12 pb-15">
                    <div className="section-title text-center">
                        <h3 className="font-pt light-black-color2 pt-1">
                            Aloqa
                        </h3>
                    </div>
                </div>
                <div className="container">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.739437128524!2d-112.03815768505712!3d40.6576737793378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528d869d1ee20d%3A0x335b2f731059605a!2sUSANA%20Amphitheatre!5e0!3m2!1sen!2sbd!4v1608483260130!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMap;