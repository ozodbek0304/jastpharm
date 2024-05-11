import Link from 'next/link';
import React from 'react';

const BlogCommentForm = () => {
    return (
        <>
            <form action="#">
                <div className="comment mb-10">
                  <label>Your Review</label>
                  <textarea
                    name="message"
                    className="form-control  primary-bg2 mt-10"
                    id="message"
                  ></textarea>
                </div>
                <div className="name-and-email d-sm-flex  mb-10">
                  <div className="name width50 mr-10">
                    <label className="mt-15 mb-10 d-block">Name *</label>
                    <input
                      type="text"
                      name="r-name"
                      id="r-name"
                      className="width100  primary-bg2"
                    />
                  </div>
                  <div className="email width50 ml-10">
                    <label className="mt-15 mb-10 d-block">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="r-email"
                      className=" width100  primary-bg2"
                    />
                  </div>
                </div>
                <div className="save-info d-sm-flex align-items-center mb-15">
                  <input
                    className="mr-10"
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  />
                  <p className="mb-0">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
                <Link
                  href="#"
                  className="web-btn h2-theme-border1 d-inline-block rounded-0 text-capitalize white h2-theme-bg position-relative over-hidden pl-40 pr-40 ptb-17"
                >
                  Submit
                </Link>
              </form>
        </>
    );
};

export default BlogCommentForm;