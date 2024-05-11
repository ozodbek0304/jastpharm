import React from "react";
import Comments from "./Comments";
import BlogCommentForm from "@/form/BlogCommentForm";

const BlogForm = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-12  col-lg-12  col-md-12  col-sm-12 col-12">
          <div className="review-comments-area mt-40">
            <h5 className="blog-details-heading light-black-color2 font600">
              2 Comments
            </h5>
              <Comments/>
            <div className="reply-form contact-form-right mt-60">
              <h5 className="blog-details-heading light-black-color2 font600 mb-25">
                Post Comments
              </h5>
                <BlogCommentForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogForm;
